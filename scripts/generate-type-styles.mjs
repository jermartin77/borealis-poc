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

// Slugs whose font-size differs between screen-sm and screen-lg in Figma.
// The generator emits a CSS custom property reference instead of a literal px value
// so the size responds to the @media override in src/tokens/responsive.css.
const responsiveSizeMap = {
  'display-1':              'var(--ds-text-heading-1)',
  'display-2':              'var(--ds-text-heading-2)',
  'display-3':              'var(--ds-text-heading-3)',
  'display-4':              'var(--ds-text-heading-4)',
  'display-5':              'var(--ds-text-heading-5)',
  'display-6':              'var(--ds-text-heading-6)',
  'text-large-regular':     'var(--ds-text-paragraph-large)',
  'text-large-bold':        'var(--ds-text-paragraph-large)',
  'text-medium-regular':    'var(--ds-text-paragraph-medium)',
  'text-medium-bold':       'var(--ds-text-paragraph-medium)',
  'eyebrow-large':          'var(--ds-text-eyebrow-large)',
  'eyebrow-medium':         'var(--ds-text-eyebrow-small)',
  'product-card-title':     'var(--ds-text-product-card-title)',
  'product-card-description':'var(--ds-text-product-card-description)',
  'product-card-price':     'var(--ds-text-product-card-price)',
  'product-card-price-slashed':'var(--ds-text-product-card-price)',
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

  const fontSize = responsiveSizeMap[slug] ?? v.fontSize;

  cssLines.push(`.ds-type-${slug} {`);
  cssLines.push(`  font-family: ${familyVars[v.fontFamily] ?? `"${v.fontFamily}"`};`);
  cssLines.push(`  font-size: ${fontSize};`);
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

  const fontSize = responsiveSizeMap[slug] ?? v.fontSize;

  tsLines.push(`  '${slug}': {`);
  tsLines.push(`    fontFamily: '${familyVars[v.fontFamily] ?? v.fontFamily}',`);
  tsLines.push(`    fontSize: '${fontSize}',`);
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
