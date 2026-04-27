# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev                    # Vite dev server
npm run build                  # tsc -b && vite build
npm run lint                   # ESLint
npm run storybook              # Storybook dev at :6006
npm run build-storybook        # Build Storybook static site
npm run tokens                 # Regenerate tokens.css + type-styles.css from source JSON
npm run tokens:watch           # Watch mode for token regeneration during active token work
npm run figma:connect          # Publish Code Connect mappings to Figma
npm run figma:connect:parse    # Parse and validate Code Connect files without publishing
npm run figma:connect:unpublish # Remove published Code Connect mappings from Figma
npx vitest                     # Run Storybook-integrated browser tests (Playwright/Chromium) — requires Storybook running
npx tsc --noEmit               # Type-check without building
```

Tests are Storybook stories executed via `@storybook/addon-vitest` in a headless Chromium browser. There are no separate unit test files. Run `npm run storybook` in one terminal before running `npx vitest` in another.

## Architecture

### Token Pipeline
Design tokens flow from Figma → JSON → CSS custom properties:

```
tokens/source/*.json          ← source of truth (color, typography, spacing, dimensions)
  ↓  npm run tokens
src/tokens/tokens.css         ← auto-generated, --ds-* custom properties (DO NOT EDIT)
src/tokens/tokens.ts          ← auto-generated TypeScript constants
src/tokens/responsive.css     ← manually maintained; mobile-first defaults + @media (min-width: 1024px) overrides
src/tokens/type-styles.css    ← auto-generated from scripts/generate-type-styles.mjs
src/tokens/type-styles.ts     ← auto-generated TypeScript: TypeStyleName union + getTypeStyle() helper
```

Style Dictionary processes `color.json`, `typography.json`, `spacing.json`, `dimensions.json` with the `ds` prefix. `type-styles.json` is excluded from SD and handled by a separate script. `responsive.css` is NOT generated — it must be edited manually when responsive token values change.

`src/index.css` also has two manually maintained blocks that Style Dictionary cannot generate: the `--ds-input-focus` / `--ds-input-focus-error` rgba tokens and the full `[data-theme="dark"]` + `@media (prefers-color-scheme: dark)` color override blocks. Edit these by hand when those token values change.

All component CSS must reference `--ds-*` tokens. No hardcoded color, spacing, or font values.

Tailwind v4 is active via `@tailwindcss/vite` — there is no `tailwind.config.js`. Utility classes are available but design tokens (`--ds-*`) are the source of truth for colors, spacing, and typography.

### Component vs Pattern split

**`src/components/`** — Atomic, self-contained UI elements. No `ThemeProps`. Import directly, no barrel file:
```ts
import { Button } from '../Button/Button';
```

**`src/patterns/`** — Compositional layout sections. All extend `ThemeProps` from `src/lib/theme.ts`, which renders `data-theme="light|dark"` on the root element to trigger the CSS token cascade for per-section theming. Patterns have a barrel file:
```ts
import { HeroBanner } from 'src/patterns';
```

### Theming
`src/index.css` defines `[data-theme="dark"]` overrides for all color tokens. Wrapping any element with `data-theme="dark"` flips the entire token set for that subtree — this is how pattern components implement per-section dark mode without JavaScript.

OS-level dark mode is handled by `@media (prefers-color-scheme: dark)` on `:root`.

In Storybook, the theme decorator applies `data-theme` to `<html>` (not a story wrapper div) so the full CSS cascade works correctly. Stories use the global `theme` toolbar switcher — never hardcode backgrounds or wrap stories in their own `data-theme` element.

### Button variants
Three button components share `Button.module.css`:
- `Button` — labeled button; `primary`/`secondary`/`tertiary` variants; `sm`/`md`/`lg` sizes
- `ActionButton` — square icon-only; requires `icon` + `aria-label`; `primary`/`secondary` only
- `TextButton` — inline text link style; no size prop

`PlayButton` (in its own folder) renders a video play overlay using `PlayerIcon` — requires `aria-label`, not related to ActionButton.

### Form components
`FormField` is a layout wrapper that composes a label, helper text, and error message around `Input`, `Select`, or `Textarea`. It does not manage state — the consumer controls value and error props. Import directly, no barrel file.

### Icon system
Five distinct icon components, all in `src/components/Icon/`:

| Component | Source | Default size |
|---|---|---|
| `Icon` | lucide-react (37 icons, kebab-case names) | 24px |
| `SocialIcon` | Inline SVG paths (8 brand logos) | 24px |
| `StarIcon` | lucide-react `Star`/`StarHalf` + fill prop | 24px |
| `PlayerIcon` | lucide-react `Play`/`Pause` + `style: stroked\|solid` | 32px |
| `StatusIcon` | Thin wrapper over `Icon` (4 semantic names, fixed 16px default) | 16px |

All icons use `currentColor` — tint by setting `color` on a parent element.

### CSS Module conventions
- Class names: `.base` (shared styles), `.variantName`, `.sizeName`, `.slotName`
- Interactive transitions: `0.15s ease`
- Slot wrappers (icon, close button): `display: flex; flex-shrink: 0; align-items: center`

### Figma Code Connect
Components with `.figma.tsx` files map Figma variant props to React props via `figma.enum()`. The Figma file key is `I6QFi7hLxmg1bRuA9VXAJv`. Publish with `npm run figma:connect`.

## Current status

Pattern layer is complete (13 patterns in `src/patterns/`). Remaining atomic component: RangeSlider. Token responsive infrastructure is ongoing — `responsive.css` requires manual updates when breakpoint token values change.

**Vercel build:** `vercel.json` overrides the build command to `npm run tokens && npm run build` so tokens are always regenerated before the Vite build in CI.
