---
name: bootstrap-tokens
description: >-
  Adapt a component library's design-token theme to a new project's Figma Tokens Studio export
  by swapping each existing token VALUE for its source equivalent, with the target file's
  structure and format frozen. Use when bootstrapping a component library (e.g. a FuseDash-style
  styled-components theme in a tokens.ts) onto a new brand's exported tokens. Reusable across
  projects — introspects whatever target file and export it is pointed at.
---

# bootstrap-tokens

Run-once, per project: input a Figma **Tokens Studio export** into a component library's theme
file by **value-equivalence substitution**. Reusable — it introspects the target, so a different
`tokens.ts` next project just works.

## HARD RULE (never violate)
The target file's structure is **frozen**: keys, nesting, ordering, comments, and each value's
**format** stay byte-identical. Only substitute, for each existing LEAF value, its source
**equivalent**, written in the slot's **existing format**.
- Never rename, add, remove, or reorder keys. Never restructure.
- Key-equivalence (`blue`↔`info`, `5xl`↔`5XL`) is an INTERNAL lookup only — the target keeps its keys.
- New source tokens with no existing slot → **ignored**.
- Target slots with no source equivalent → **left unchanged**, reported.
- "Match existing format": `'48px'`→`'44px'`; weight `600` stays a number; hex stays hex
  (normalized to the slot's case); a value with a comma like `'Inter, sans-serif'` keeps its suffix.

## What the engine touches
Only LEAF value tables (literal values). It NEVER edits:
- composed tables that interpolate others via `${…}` (`radii`, `typography`, `layout`, `components`)
- a separate `theme.ts` whose semantic colors reference palette slots (e.g. `colors.ui.gray['13']`)
Those auto-resolve from the swapped leaves — that's why the swap stays small and safe.

## Source → leaf mapping (Tokens Studio default modes)
- `Core colors palette/Style 1.json`: `UI.{info→blue, error→red, warning→yellow, success→green,
  primary→indigo, gray→gray}.{level}` → `colors.ui.*`; `UX.{level}` → `colors.ux`; `black`/`white`.

### Transparent / alpha (derive rule)
A transparent token is a base color at a fixed opacity, encoded in the trailing alpha byte of
`#RRGGBBAA`. **Always preserve the slot's existing alpha; swap only the 6-digit base.**
- `gray` / `white`: swap from the source's `Transparent.Gray alpha` / `White alpha` groups when
  present (match the stop suffix, e.g. source `10-4%` → slot `4%`).
- Themed groups `primary/red/yellow/green`: the source's `Transparent.Theme alpha` tokens are
  usually EMPTY (null), so **DERIVE** — base = the family's `07` shade
  (`primary→UI.primary.07`, `red→UI.error.07`, `yellow→UI.warning.07`, `green→UI.success.07`),
  then re-attach each slot's existing alpha. e.g. `transparent.primary['16%']`:
  `#6F6FE929` → `#007EB029`. This keeps tinted backgrounds consistent with the new palette
  without needing the alphas re-extracted from Figma.
- `Typography/Desktop.json` `Font`: `size`→`fontSizes` (+`px`), `line-height`→`lineHeights` (+`px`),
  `weight` word→number (`Light/Regular/Semi-Bold`→300/400/600), `family`→`fontFamilies` (keep suffix).
- `Core numbers/Default.json`: `space`/`radius` — usually already equivalent; report.
- `Effects/Mode 1.json`, `Screen/*`: `shadows`/`breakpoints`/`sizes`/`spacing` — reported for review
  (geometry-only / ref-based; not auto-swapped by default).

## How to run
1. Dry run first and SHOW the diff:
   `node ~/.claude/skills/bootstrap-tokens/bootstrap-tokens.mjs <export-dir> <target-tokens-file>`
2. Review with the user: confirm conflicts (e.g. a retuned scale, `gray` neutral-vs-cool, a font
   size that shifts) and note ignored new-tokens / unmatched slots from the report.
3. Apply: add `--write`.
4. Verify: line count unchanged; `diff` shows value-only changes; the module still evaluates and
   total key count is identical; the consuming `theme.ts`/components still compile.

## Engine
`bootstrap-tokens.mjs` (same folder). Deterministic — no LLM transcription of values. It evaluates
the target module to learn keys+current values, then does value-only, structure-preserving text
edits (word-boundary matching; skips object-valued matches so a top-level leaf isn't confused with
a nested key of the same name).

## Adapting to a different target
The family/category maps above match a FuseDash-style theme. For a differently-named library,
update the small lookup tables in `bootstrap-tokens.mjs` (`FAMILY_SRC`, the typography key maps) —
or infer them by value-matching slots that already agree — keeping the HARD RULE intact.
