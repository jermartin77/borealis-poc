---
name: design-tokens
description: >
  Reference and apply design tokens whenever building, styling, or configuring
  any UI component, page, or layout. Use this skill any time the user works with
  color, typography, spacing, border radius, or shadow values — whether sourcing
  them from Figma, writing a Tailwind config, defining CSS custom properties, or
  running a Style Dictionary build. Also trigger when the user asks to set up a
  token pipeline, sync tokens from Figma, map Figma variables to code, or apply
  design system values to any new project. Never hardcode color, spacing, font,
  radius, or shadow values — always resolve them from the token system defined here.
---

# Design Tokens Skill

This skill governs how design tokens are sourced, transformed, and applied across
all projects. Tokens originate in Figma and are transformed via Style Dictionary
into both Tailwind config extensions and CSS custom properties.

**Always read the relevant reference file before writing any token-related code.**

---

## Workflow Overview

```
Figma Variables
      ↓
  (export via Tokens Studio or Figma REST API)
      ↓
tokens.json  ←── source of truth
      ↓
Style Dictionary build
      ↓  ↓
CSS vars   tailwind.config.js extension
```

---

## 1. Figma → Token Export

→ Full pipeline instructions: `references/token-pipeline.md`

**Quick rules:**
- Figma primitive variables map to **primitive tokens** (e.g. `color.blue.500`)
- Figma semantic/alias variables map to **semantic tokens** (e.g. `color.background.default`)
- Never use primitive tokens directly in components — always use semantic tokens
- Semantic tokens must alias primitives, not hardcode values

**Token file structure expected:**
```
tokens/
├── primitives/
│   ├── color.json
│   ├── typography.json
│   ├── spacing.json
│   └── radius.json
├── semantic/
│   ├── color.json       ← aliases primitives, split by mode
│   ├── typography.json
│   └── spacing.json
└── config.json          ← Style Dictionary config
```

---

## 2. Style Dictionary Build

→ Full config reference: `references/token-pipeline.md`

Run the build after any token file changes:
```bash
npx style-dictionary build --config tokens/config.json
```

Outputs:
- `src/styles/tokens.css` — CSS custom properties (all modes)
- `src/styles/tailwind-tokens.js` — Tailwind theme extension object

**Mode handling (light/dark):**
- Light mode tokens applied on `:root`
- Dark mode tokens applied on `[data-theme="dark"]` or `.dark`
- Never use Tailwind's `dark:` prefix for token values — use semantic tokens that switch automatically

---

## 3. Color Tokens

→ Full scale: `references/tokens-color.md`

**Primitive structure:**
```json
"color": {
  "neutral": { "0": {}, "100": {}, ... "900": {}, "1000": {} },
  "primary": { "100": {}, ... "900": {} },
  "secondary": { "100": {}, ... "900": {} }
}
```

**Semantic structure:**
```json
"color": {
  "background": { "default": {}, "subtle": {}, "inverse": {} },
  "foreground": { "default": {}, "muted": {}, "inverse": {} },
  "border": { "default": {}, "strong": {}, "focus": {} },
  "interactive": { "default": {}, "hover": {}, "active": {}, "disabled": {} },
  "feedback": { "success": {}, "warning": {}, "error": {}, "info": {} }
}
```

**Usage rules:**
- Components always use semantic color tokens
- Primitive tokens are only used inside semantic token definitions
- In Tailwind: `bg-background-default`, `text-foreground-muted`, `border-border-strong`
- In CSS: `var(--color-background-default)`, `var(--color-foreground-muted)`

---

## 4. Typography Tokens

→ Full scale: `references/tokens-typography.md`

**Token categories:**
- `font-family` — display, body, accent, corporate
- `font-size` — xs through 5xl (step scale)
- `font-weight` — regular (400), medium (500), bold (700)
- `line-height` — tight, default, relaxed
- `letter-spacing` — tight, default, wide

**Usage rules:**
- Never set raw pixel/rem font sizes — always reference a size token
- Pair `font-family` and `font-size` tokens together; never mix scales
- In Tailwind: `text-size-lg font-display font-weight-bold`
- In CSS: `font-size: var(--font-size-lg); font-family: var(--font-display)`

---

## 5. Spacing Tokens

→ Full scale: `references/tokens-spacing.md`

**Scale:** 4px base unit. Token names map to multiples:
`spacing.1 = 4px`, `spacing.2 = 8px`, `spacing.4 = 16px`, `spacing.8 = 32px`, etc.

**Usage rules:**
- All padding, margin, gap, and inset values must use spacing tokens
- Never use arbitrary Tailwind spacing (e.g. `p-[13px]`) — adjust to nearest token
- In Tailwind: `p-4`, `gap-6`, `mt-8` (mapped to token scale in config)
- In CSS: `padding: var(--spacing-4)`

---

## 6. Border Radius & Shadow Tokens

→ Full reference: `references/tokens-radius-shadow.md`

**Radius scale:** none, sm, md, lg, xl, full
**Shadow scale:** none, xs, sm, md, lg, xl (maps to elevation levels)

**Usage rules:**
- Match radius to component type: interactive elements use `md`, cards use `lg`, pills use `full`
- Shadows convey elevation — use the lowest shadow level that achieves the needed separation
- Never use raw `box-shadow` values — always `var(--shadow-md)` etc.

---

## 7. Tailwind Config Mapping

→ Full config file: `references/tailwind-tokens.md`

**Pattern:** Tailwind theme extension reads from the Style Dictionary output file:

```js
// tailwind.config.js
const tokens = require('./src/styles/tailwind-tokens.js')

module.exports = {
  theme: {
    extend: {
      colors: tokens.colors,
      fontSize: tokens.fontSize,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.boxShadow,
      fontFamily: tokens.fontFamily,
    }
  }
}
```

**Key rule:** Never manually duplicate token values in `tailwind.config.js`. The config
must always import from the Style Dictionary output. If a value isn't in the token file,
add it to the token source and rebuild — don't patch it in the config directly.

---

## 8. When Starting a New Project

1. Copy `tokens/` directory from the design system repo (or scaffold from Figma export)
2. Run `npx style-dictionary build` to generate CSS and Tailwind outputs
3. Import `tokens.css` in your root layout: `import '@/styles/tokens.css'`
4. Point `tailwind.config.js` at the Style Dictionary output
5. Verify tokens resolve correctly before writing any component styles

→ See `references/token-pipeline.md` for full setup steps
