/**
 * Generates src/tokens/type-styles.css and src/tokens/type-styles.ts
 * from tokens/source/type-styles.json.
 *
 * Run: node scripts/generate-type-styles.mjs
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src  = JSON.parse(readFileSync(resolve(root, 'tokens/source/type-styles.json'), 'utf8'));
const styles = src.typeStyle;

const familyVars = {
  display: 'var(--ds-font-family-display)',
  text:    'var(--ds-font-family-text)',
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
const cssLines = [
  '/**',
  ' * Do not edit directly — generated from tokens/source/type-styles.json',
  ' */',
  '',
];

for (const [slug, token] of Object.entries(styles)) {
  const v = token['$value'];
  if (!v || typeof v !== 'object') continue;

  cssLines.push(`.ds-type-${slug} {`);
  cssLines.push(`  font-family: ${familyVars[v.fontFamily] ?? `"${v.fontFamily}"`};`);
  cssLines.push(`  font-size: ${v.fontSize};`);
  cssLines.push(`  font-weight: ${v.fontWeight};`);
  cssLines.push(`  line-height: ${v.lineHeight};`);
  if (v.letterSpacing && v.letterSpacing !== '0') {
    cssLines.push(`  letter-spacing: ${v.letterSpacing};`);
  }
  if (v.textTransform && v.textTransform !== 'none') {
    cssLines.push(`  text-transform: ${v.textTransform};`);
  }
  if (v.textDecoration && v.textDecoration !== 'none') {
    cssLines.push(`  text-decoration: ${v.textDecoration};`);
  }
  if (v.paragraphSpacing) {
    cssLines.push(`  --type-paragraph-spacing: ${v.paragraphSpacing};`);
  }
  cssLines.push('}');
  cssLines.push('');
}

writeFileSync(resolve(root, 'src/tokens/type-styles.css'), cssLines.join('\n'));
console.log('✔︎ src/tokens/type-styles.css');

// ─── TypeScript ───────────────────────────────────────────────────────────────
const slugs = Object.keys(styles);

const tsLines = [
  '/**',
  ' * Do not edit directly — generated from tokens/source/type-styles.json',
  ' */',
  "import type { CSSProperties } from 'react';",
  '',
  'export type TypeStyleName =',
  slugs.map(s => `  | '${s}'`).join('\n') + ';',
  '',
  'export const typeStyles: Record<TypeStyleName, CSSProperties> = {',
];

for (const [slug, token] of Object.entries(styles)) {
  const v = token['$value'];
  if (!v || typeof v !== 'object') continue;

  tsLines.push(`  '${slug}': {`);
  tsLines.push(`    fontFamily: '${familyVars[v.fontFamily] ?? v.fontFamily}',`);
  tsLines.push(`    fontSize: '${v.fontSize}',`);
  tsLines.push(`    fontWeight: ${v.fontWeight},`);
  tsLines.push(`    lineHeight: ${typeof v.lineHeight === 'number' ? v.lineHeight : `'${v.lineHeight}'`},`);
  if (v.letterSpacing && v.letterSpacing !== '0') {
    tsLines.push(`    letterSpacing: '${v.letterSpacing}',`);
  }
  if (v.textTransform && v.textTransform !== 'none') {
    tsLines.push(`    textTransform: '${v.textTransform}',`);
  }
  if (v.textDecoration && v.textDecoration !== 'none') {
    tsLines.push(`    textDecoration: '${v.textDecoration}',`);
  }
  tsLines.push('  },');
}

tsLines.push('};');
tsLines.push('');
tsLines.push('/** Apply a named Figma text style as React inline styles */');
tsLines.push('export function getTypeStyle(name: TypeStyleName): CSSProperties {');
tsLines.push('  return typeStyles[name];');
tsLines.push('}');
tsLines.push('');

writeFileSync(resolve(root, 'src/tokens/type-styles.ts'), tsLines.join('\n'));
console.log('✔︎ src/tokens/type-styles.ts');
