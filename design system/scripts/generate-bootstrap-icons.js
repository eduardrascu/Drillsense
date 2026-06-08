#!/usr/bin/env node
/**
 * generate-bootstrap-icons.js
 *
 * Reads all SVG files from node_modules/bootstrap-icons/icons/,
 * converts filenames to PascalCase, skips the 43 existing icons,
 * and generates TSX component files + updates index.ts and types.ts.
 */

const fs = require('fs');
const path = require('path');

// ─── Paths ────────────────────────────────────────────────────────────────────
const ROOT = path.resolve(__dirname, '..');
const ICONS_SRC = path.join(ROOT, 'node_modules', 'bootstrap-icons', 'icons');
const ICONS_DEST = path.join(ROOT, 'src', 'components', 'Icon', 'IconsList');
const INDEX_FILE = path.join(ICONS_DEST, 'index.ts');
const TYPES_FILE = path.join(ROOT, 'src', 'components', 'Icon', 'types.ts');

// ─── Existing icons to skip ───────────────────────────────────────────────────
const SKIP_SET = new Set([
  'Applications', 'ArrowDown', 'ArrowLeft', 'ArrowLeftRight', 'ArrowRepeat',
  'ArrowRight', 'ArrowUp', 'Calendar', 'Check', 'CheckMarkFilled',
  'CheckSimple', 'ChevronDown', 'ChevronUp', 'Code', 'Collection',
  'DangerInfo', 'Download', 'Duplicate', 'EyeHide', 'EyeShow',
  'Filters', 'Folder', 'InfoCircle', 'InfoFilled', 'PDF',
  'Pencil', 'Pin', 'PinFilled', 'PublicSources', 'Rename',
  'Search', 'Share', 'Star', 'StarFilled', 'SystemInfo',
  'Table', 'ThreeDots', 'ThreeDotsVertical', 'Trash', 'Upload',
  'View', 'WarningFilled', 'X',
]);

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert a kebab-case filename (without extension) to PascalCase.
 * Handles numeric-leading names like "0-circle" → "ZeroCircle"...
 * but actually Bootstrap uses "0-circle" — we'll prefix with "Bi" for numeric starts
 * to ensure valid JS identifier.
 * e.g. arrow-left-right → ArrowLeftRight
 *      0-circle → _0Circle  — but let's use Num0Circle to be safe
 */
function toPascalCase(name) {
  // Split on hyphens, capitalize each segment
  const parts = name.split('-');
  const pascal = parts
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  // If starts with a digit, prefix with "Bs" to make it a valid identifier
  if (/^\d/.test(pascal)) {
    return 'Bs' + pascal;
  }
  return pascal;
}

/**
 * Convert PascalCase to SCREAMING_SNAKE_CASE for enum keys.
 * e.g. ArrowCircleDown → ARROW_CIRCLE_DOWN
 */
function toScreamingSnake(pascal) {
  return pascal
    // Insert underscore before sequences of uppercase letters followed by lowercase
    // e.g. "PDFFile" → "PDF_File"  "ArrowDown" → "Arrow_Down"
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    // Insert underscore before uppercase letter preceded by lowercase
    .replace(/([a-z\d])([A-Z])/g, '$1_$2')
    // Insert underscore before digit preceded by letter
    .replace(/([A-Za-z])(\d)/g, '$1_$2')
    // Insert underscore before letter preceded by digit
    .replace(/(\d)([A-Za-z])/g, '$1_$2')
    .toUpperCase();
}

/**
 * Extract the inner content of an SVG file (everything between <svg ...> and </svg>).
 * Returns the trimmed inner XML string.
 */
function extractSvgInner(svgContent) {
  // Remove XML declaration if present
  let content = svgContent.replace(/<\?xml[^?]*\?>/g, '').trim();
  // Extract everything between the opening <svg ...> and closing </svg>
  const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  if (!match) return '';
  return match[1].trim();
}

/**
 * Generate a TSX component string for the given icon name and inner SVG content.
 */
function generateTsx(iconName, innerContent) {
  return `import { FC, SVGProps } from 'react';

const ${iconName}: FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${innerContent}
    </svg>
  );
};

export default ${iconName};
`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const svgFiles = fs.readdirSync(ICONS_SRC).filter(f => f.endsWith('.svg'));

let added = 0;
let skipped = 0;
let skippedDuplicate = 0;

const newExports = [];
const newEnumEntries = [];

for (const svgFile of svgFiles) {
  const baseName = svgFile.replace('.svg', '');
  const pascalName = toPascalCase(baseName);

  // Skip if it's in the existing 43
  if (SKIP_SET.has(pascalName)) {
    skippedDuplicate++;
    skipped++;
    continue;
  }

  // Check if the TSX file already exists (idempotency)
  const destFile = path.join(ICONS_DEST, `${pascalName}.tsx`);
  if (fs.existsSync(destFile)) {
    skipped++;
    continue;
  }

  // Read and process the SVG
  const svgContent = fs.readFileSync(path.join(ICONS_SRC, svgFile), 'utf8');
  const innerContent = extractSvgInner(svgContent);

  // Write TSX file
  fs.writeFileSync(destFile, generateTsx(pascalName, innerContent), 'utf8');

  // Collect export and enum entries
  newExports.push(`export { default as ${pascalName} } from './${pascalName}';`);

  const enumKey = toScreamingSnake(pascalName);
  newEnumEntries.push(`  ${enumKey} = '${pascalName}',`);

  added++;
}

// ─── Append to index.ts ───────────────────────────────────────────────────────
if (newExports.length > 0) {
  const indexContent = fs.readFileSync(INDEX_FILE, 'utf8');
  // Ensure file ends with newline before appending
  const separator = indexContent.endsWith('\n') ? '' : '\n';
  fs.appendFileSync(INDEX_FILE, separator + newExports.join('\n') + '\n', 'utf8');
  console.log(`Appended ${newExports.length} exports to index.ts`);
}

// ─── Append to types.ts ───────────────────────────────────────────────────────
if (newEnumEntries.length > 0) {
  let typesContent = fs.readFileSync(TYPES_FILE, 'utf8');
  // Find the closing brace of the IconName enum specifically.
  // The enum ends at the first standalone `}` line (not inside an interface).
  // Strategy: find the position of `\nexport type IconNameType` which always
  // follows the enum's closing brace, then insert before the `}` that precedes it.
  const markerIndex = typesContent.indexOf('\nexport type IconNameType');
  if (markerIndex === -1) {
    console.error('Could not find "export type IconNameType" marker in types.ts');
    process.exit(1);
  }
  // Walk back from the marker to find the closing `}` of the enum
  const before = typesContent.slice(0, markerIndex);
  const after = typesContent.slice(markerIndex);
  const newTypesContent = before + '\n' + newEnumEntries.join('\n') + after;
  fs.writeFileSync(TYPES_FILE, newTypesContent, 'utf8');
  console.log(`Appended ${newEnumEntries.length} enum entries to types.ts`);
}

// ─── Report ───────────────────────────────────────────────────────────────────
console.log('');
console.log('─── Bootstrap Icons Generation Complete ───');
console.log(`Total SVG files processed : ${svgFiles.length}`);
console.log(`Icons added               : ${added}`);
console.log(`Skipped (duplicates)      : ${skippedDuplicate}`);
console.log(`Skipped (already existed) : ${skipped - skippedDuplicate}`);
console.log(`Total skipped             : ${skipped}`);
