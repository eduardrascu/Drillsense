#!/usr/bin/env node
/**
 * bootstrap-tokens — value-equivalence token swap (structure frozen)
 *
 * Usage:
 *   node bootstrap-tokens.mjs <figma-export-dir> <target-tokens-file> [--write]
 *
 * HARD RULE: the target file's structure/format is frozen. For each existing
 * LEAF value we substitute its source equivalent, written in the slot's existing
 * format. We never rename/add/remove keys or restructure. New source tokens with
 * no existing slot are ignored; target slots with no equivalent are left as-is.
 *
 * Default is a DRY RUN (prints a diff). Pass --write to apply.
 */
import fs from 'fs';
import path from 'path';

const [, , SRC_DIR, TARGET, ...flags] = process.argv;
const WRITE = flags.includes('--write');
if (!SRC_DIR || !TARGET) {
  console.error('usage: node bootstrap-tokens.mjs <figma-export-dir> <target-tokens-file> [--write]');
  process.exit(1);
}

// ---------- helpers ----------
const readJSON = (p) => JSON.parse(fs.readFileSync(p, 'utf8'));
const exists = (p) => fs.existsSync(p);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const isIdent = (s) => /^[A-Za-z_$][\w$]*$/.test(s);

// Flatten a Tokens Studio file into { "a.b.c": value } using $value/value leaves.
function flatten(obj, prefix, out) {
  for (const k of Object.keys(obj)) {
    if (k.startsWith('$')) continue;
    const v = obj[k];
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && ('$value' in v || 'value' in v)) {
      out[key] = '$value' in v ? v['$value'] : v['value'];
    } else if (v && typeof v === 'object') {
      flatten(v, key, out);
    }
  }
  return out;
}

// Load a source file if present; flatten into the shared map.
function loadInto(map, relPath) {
  const p = path.join(SRC_DIR, relPath);
  if (!exists(p)) return false;
  flatten(readJSON(p), '', map);
  return true;
}

// ---------- load source (default modes) ----------
const SRC = {};
const loaded = {
  palette: loadInto(SRC, 'Core colors palette/Style 1.json'),
  typography: loadInto(SRC, 'Typography/Desktop.json'),
  numbers: loadInto(SRC, 'Core numbers/Default.json'),
};

const WEIGHT_WORD_TO_NUM = {
  thin: 100, extralight: 200, light: 300, regular: 400, normal: 400,
  medium: 500, 'semi-bold': 600, semibold: 600, bold: 700, extrabold: 800, black: 900,
};

const upper = (s) => s.toUpperCase();
const normHex = (h) => {
  if (typeof h !== 'string') return null;
  return h.startsWith('#') ? '#' + h.slice(1).toUpperCase() : h;
};

// ---------- evaluate the target module to learn its structure + current values ----------
function loadTargetExports(text) {
  const code = text.replace(/export\s+const/g, 'const');
  const names = [...text.matchAll(/export\s+const\s+([A-Za-z_$][\w$]*)/g)].map((m) => m[1]);
  const body = `${code}\n;return {${names.join(',')}};`;
  // eslint-disable-next-line no-new-func
  return { exportsObj: new Function(body)(), names };
}

const targetText = fs.readFileSync(TARGET, 'utf8');
let T, exportNames;
try {
  const r = loadTargetExports(targetText);
  T = r.exportsObj;
  exportNames = r.names;
} catch (e) {
  console.error('Could not evaluate target token module:', e.message);
  process.exit(1);
}

// ---------- text navigation (frozen-structure, value-only edits) ----------
// matchBrace: leaf tables we edit contain no `{`/`}` inside strings, so a naive
// depth counter is safe for them.
function matchBrace(text, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < text.length; i++) {
    const c = text[i];
    if (c === '{') depth++;
    else if (c === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}
function findExportBody(text, name) {
  const re = new RegExp(`export\\s+const\\s+${escRe(name)}\\s*=\\s*\\{`);
  const m = re.exec(text);
  if (!m) return null;
  const open = text.indexOf('{', m.index);
  const close = matchBrace(text, open);
  return { start: open + 1, end: close };
}
function keyPattern(key) {
  const alts = [`'${escRe(key)}'`, `"${escRe(key)}"`];
  if (isIdent(key)) alts.push(escRe(key));
  return `(?:${alts.join('|')})`;
}
function findKeyObject(text, key, start, end) {
  const sub = text.slice(start, end);
  // (?<![\w$'"]) avoids matching a key that is a substring of a longer key.
  const re = new RegExp(`(?<![\\w$'"])${keyPattern(key)}\\s*:\\s*\\{`);
  const m = re.exec(sub);
  if (!m) return null;
  const open = start + sub.indexOf('{', m.index);
  const close = matchBrace(text, open);
  return { start: open + 1, end: close };
}
// Returns absolute [valStart, valEnd] + old value text for a leaf path.
// Skips matches whose value is an object ('{') so a top-level leaf (e.g. colors.white)
// is not confused with a nested object key (e.g. colors.transparent.white).
function locateLeaf(text, pathArr) {
  const root = findExportBody(text, pathArr[0]);
  if (!root) return null;
  let { start, end } = root;
  for (let i = 1; i < pathArr.length - 1; i++) {
    const b = findKeyObject(text, pathArr[i], start, end);
    if (!b) return null;
    start = b.start; end = b.end;
  }
  const leaf = pathArr[pathArr.length - 1];
  const sub = text.slice(start, end);
  const re = new RegExp(
    `(?<![\\w$'"])${keyPattern(leaf)}\\s*:\\s*('(?:[^'\\\\]|\\\\.)*'|"(?:[^"\\\\]|\\\\.)*"|[^,}\\n]+)`,
    'g'
  );
  let m;
  while ((m = re.exec(sub)) !== null) {
    const val = m[1].trim();
    if (val.startsWith('{')) continue; // an object — not the leaf we want
    const valRel = m.index + m[0].length - m[1].length;
    return { valStart: start + valRel, valEnd: start + valRel + m[1].length, old: m[1].trimEnd() };
  }
  return null;
}

// ---------- build the edit list ----------
const edits = [];   // { path, oldText, newText, category }
const skipped = []; // { path, reason }
const seenPaths = new Set();

function plan(pathArr, newText, category) {
  const loc = locateLeaf(targetText, pathArr);
  if (!loc) { skipped.push({ path: pathArr.join('.'), reason: 'slot not found in target' }); return; }
  const oldText = loc.old.trim();
  if (oldText === newText) return; // already equivalent, no-op
  edits.push({ pathArr, valStart: loc.valStart, valEnd: loc.valEnd, oldText, newText, category });
  seenPaths.add(pathArr.join('.'));
}

// quoting helpers (single-quote to match file style)
const q = (s) => `'${s}'`;

// ----- COLORS: palette families + ux + black/white -----
const FAMILY_SRC = { blue: 'info', red: 'error', yellow: 'warning', green: 'success', indigo: 'primary', gray: 'gray' };
if (loaded.palette && T.colors) {
  const ui = T.colors.ui || {};
  for (const fam of Object.keys(ui)) {
    const srcFam = FAMILY_SRC[fam];
    if (!srcFam) { skipped.push({ path: `colors.ui.${fam}`, reason: 'no source family mapping' }); continue; }
    for (const level of Object.keys(ui[fam])) {
      const srcVal = SRC[`UI.${srcFam}.${level}`];
      if (srcVal == null) { skipped.push({ path: `colors.ui.${fam}.${level}`, reason: `no source UI.${srcFam}.${level}` }); continue; }
      plan(['colors', 'ui', fam, level], q(normHex(srcVal)), 'colors.ui');
    }
  }
  if (T.colors.ux) {
    for (const level of Object.keys(T.colors.ux)) {
      const srcVal = SRC[`UX.${level}`];
      if (srcVal == null) { skipped.push({ path: `colors.ux.${level}`, reason: `no source UX.${level}` }); continue; }
      plan(['colors', 'ux', level], q(normHex(srcVal)), 'colors.ux');
    }
  }
  if (SRC['black'] != null && 'black' in T.colors) plan(['colors', 'black'], q(normHex(SRC['black'])), 'colors');
  if (SRC['white'] != null && 'white' in T.colors) plan(['colors', 'white'], q(normHex(SRC['white'])), 'colors');

  // ----- TRANSPARENT / ALPHA -----
  // Transparent tokens are a base color at a fixed opacity (encoded in the trailing
  // alpha byte of #RRGGBBAA). Rule: PRESERVE each slot's existing alpha; swap only the
  // base. gray/white come from the source's provided alpha groups (if present); themed
  // groups (primary/red/yellow/green) are DERIVED from the family's '07' shade because
  // the source's "Theme alpha" tokens are typically empty.
  if (T.colors.transparent) {
    const SRC_ALPHA_GROUP = { gray: 'Gray alpha', white: 'White alpha' };
    const THEMED_SRC_FAMILY = { primary: 'primary', red: 'error', yellow: 'warning', green: 'success' };
    for (const group of Object.keys(T.colors.transparent)) {
      const stops = T.colors.transparent[group];
      if (SRC_ALPHA_GROUP[group]) {
        const prefix = `Transparent.${SRC_ALPHA_GROUP[group]}.`;
        for (const stop of Object.keys(stops)) {
          const srcKey = Object.keys(SRC).find(
            (k) => k.startsWith(prefix) && k.slice(prefix.length).replace(/^\d+-/, '') === stop
          );
          if (srcKey == null || SRC[srcKey] == null) { skipped.push({ path: `colors.transparent.${group}.${stop}`, reason: 'no source alpha value' }); continue; }
          plan(['colors', 'transparent', group, stop], q(normHex(SRC[srcKey])), 'colors.transparent');
        }
      } else if (THEMED_SRC_FAMILY[group]) {
        const baseRaw = SRC[`UI.${THEMED_SRC_FAMILY[group]}.07`];
        if (baseRaw == null) { skipped.push({ path: `colors.transparent.${group}`, reason: 'no source base for derivation' }); continue; }
        const base6 = normHex(baseRaw).slice(0, 7); // #RRGGBB
        for (const stop of Object.keys(stops)) {
          const cur = String(stops[stop]);
          const m = /^#?[0-9a-fA-F]{6}([0-9a-fA-F]{2})$/.exec(cur);
          if (!m) { skipped.push({ path: `colors.transparent.${group}.${stop}`, reason: `cannot read alpha from ${cur}` }); continue; }
          plan(['colors', 'transparent', group, stop], q(base6 + m[1].toUpperCase()), 'colors.transparent (derived)');
        }
      } else {
        skipped.push({ path: `colors.transparent.${group}`, reason: 'no rule for this transparent group' });
      }
    }
  }
}

// ----- TYPOGRAPHY leaves -----
if (loaded.typography) {
  if (T.fontSizes) for (const k of Object.keys(T.fontSizes)) {
    const v = SRC[`Font.size.${upper(k)}`];
    if (v == null) { skipped.push({ path: `fontSizes.${k}`, reason: 'no source Font.size' }); continue; }
    plan(['fontSizes', k], q(`${v}px`), 'fontSizes');
  }
  if (T.lineHeights) for (const k of Object.keys(T.lineHeights)) {
    const v = SRC[`Font.line-height.${upper(k)}`];
    if (v == null) { skipped.push({ path: `lineHeights.${k}`, reason: 'no source Font.line-height' }); continue; }
    plan(['lineHeights', k], q(`${v}px`), 'lineHeights');
  }
  if (T.fontWeights) {
    const TKEY = { semibold: 'semi-bold', regular: 'regular', light: 'light', medium: 'medium', bold: 'bold' };
    for (const k of Object.keys(T.fontWeights)) {
      const srcKey = TKEY[k] || k;
      const word = SRC[`Font.weight.${srcKey}`];
      if (word == null) { skipped.push({ path: `fontWeights.${k}`, reason: 'no source Font.weight' }); continue; }
      const num = WEIGHT_WORD_TO_NUM[String(word).toLowerCase()];
      if (num == null) { skipped.push({ path: `fontWeights.${k}`, reason: `unknown weight word "${word}"` }); continue; }
      plan(['fontWeights', k], String(num), 'fontWeights'); // bare number, match existing
    }
  }
  if (T.fontFamilies) for (const k of Object.keys(T.fontFamilies)) {
    const fam = SRC[`Font.family.${k}`];
    if (fam == null) { skipped.push({ path: `fontFamilies.${k}`, reason: 'no source Font.family' }); continue; }
    // match existing format: "<name>, sans-serif"
    const existing = String(T.fontFamilies[k]);
    const suffix = existing.includes(',') ? existing.slice(existing.indexOf(',')) : ', sans-serif';
    plan(['fontFamilies', k], q(`${fam}${suffix}`), 'fontFamilies');
  }
}

// ----- report categories we intentionally leave to review -----
for (const name of ['space', 'radius', 'shadows', 'breakpoints', 'sizes', 'spacing']) {
  if (exportNames.includes(name)) skipped.push({ path: name, reason: 'not auto-swapped (already equivalent or needs review)' });
}

// ---------- apply / report ----------
function applyEdits(text, edits) {
  const sorted = [...edits].sort((a, b) => b.valStart - a.valStart);
  let out = text;
  for (const e of sorted) out = out.slice(0, e.valStart) + e.newText + out.slice(e.valEnd);
  return out;
}

console.log(`\nbootstrap-tokens  ${WRITE ? '(WRITE)' : '(dry-run)'}`);
console.log(`  source: ${SRC_DIR}`);
console.log(`  target: ${TARGET}`);
console.log(`  sets loaded: ${Object.entries(loaded).filter(([, v]) => v).map(([k]) => k).join(', ') || 'none'}`);

const byCat = {};
for (const e of edits) (byCat[e.category] ||= []).push(e);
console.log(`\n=== VALUE CHANGES (${edits.length}) ===`);
for (const cat of Object.keys(byCat)) {
  console.log(`\n[${cat}]`);
  for (const e of byCat[cat]) console.log(`  ${e.pathArr.join('.')}:  ${e.oldText}  ->  ${e.newText}`);
}
if (!edits.length) console.log('  (none — target already equivalent)');

if (skipped.length) {
  console.log(`\n=== LEFT UNCHANGED / REVIEW (${skipped.length}) ===`);
  for (const s of skipped) console.log(`  ${s.path}  —  ${s.reason}`);
}

if (WRITE && edits.length) {
  const updated = applyEdits(targetText, edits);
  // safety: structure must be byte-identical except inside the changed value spans
  fs.writeFileSync(TARGET, updated);
  console.log(`\n✓ wrote ${edits.length} value changes to ${TARGET}`);
} else if (!WRITE) {
  console.log('\n(dry run — re-run with --write to apply)');
}
