# Token Pipeline Reference

## Overview

Tokens flow from Figma → JSON source files → Style Dictionary → CSS vars + Tailwind config.
This file documents the full pipeline setup for any new project.

---

## Figma Export

### Option A: Tokens Studio Plugin
1. Install Tokens Studio in Figma
2. Connect to your project's Figma file
3. Export as JSON → save to `tokens/` directory
4. Tokens Studio maps Figma variable groups to JSON token categories automatically

### Option B: Figma Variables REST API
```bash
curl -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_ID/variables/local" \
  | node scripts/figma-to-tokens.js > tokens/primitives/color.json
```
Use a transform script to normalize Figma's variable format to Style Dictionary format.

### Token Format (Style Dictionary compatible)
```json
{
  "color": {
    "neutral": {
      "0":    { "value": "#ffffff", "type": "color" },
      "100":  { "value": "#f5f5f5", "type": "color" },
      "200":  { "value": "#e5e5e5", "type": "color" },
      "500":  { "value": "#737373", "type": "color" },
      "900":  { "value": "#171717", "type": "color" },
      "1000": { "value": "#000000", "type": "color" }
    }
  }
}
```

Semantic tokens reference primitives using the `{value}` alias syntax:
```json
{
  "color": {
    "background": {
      "default": { "value": "{color.neutral.0}", "type": "color" },
      "subtle":   { "value": "{color.neutral.100}", "type": "color" },
      "inverse":  { "value": "{color.neutral.900}", "type": "color" }
    }
  }
}
```

---

## Style Dictionary Config

```js
// tokens/config.json
{
  "source": ["tokens/primitives/**/*.json"],
  "include": ["tokens/semantic/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "prefix": "",
      "buildPath": "src/styles/",
      "files": [
        {
          "destination": "tokens.css",
          "format": "css/variables",
          "options": {
            "selector": ":root",
            "outputReferences": true
          }
        }
      ]
    },
    "tailwind": {
      "transformGroup": "js",
      "buildPath": "src/styles/",
      "files": [
        {
          "destination": "tailwind-tokens.js",
          "format": "javascript/module"
        }
      ]
    }
  }
}
```

### Multi-mode (light/dark) config
For dark mode, use a second source set and output to a separate selector:
```json
{
  "selector": "[data-theme='dark']"
}
```

---

## Build Command

```bash
# Install once
npm install --save-dev style-dictionary

# Build tokens
npx style-dictionary build --config tokens/config.json

# Watch mode (during active token work)
npx style-dictionary build --config tokens/config.json --watch
```

---

## New Project Setup Checklist

- [ ] Copy `tokens/` directory from design system repo
- [ ] Run `npm install` (style-dictionary as devDependency)
- [ ] Run `npx style-dictionary build`
- [ ] Confirm `src/styles/tokens.css` was generated
- [ ] Confirm `src/styles/tailwind-tokens.js` was generated
- [ ] Import `tokens.css` in root layout (`app/layout.tsx` or `_app.tsx`)
- [ ] Update `tailwind.config.js` to import from `tailwind-tokens.js`
- [ ] Spot-check: a color token, a spacing token, and a font token resolve correctly
- [ ] Add `npm run tokens` script to package.json for rebuild convenience

```json
"scripts": {
  "tokens": "style-dictionary build --config tokens/config.json"
}
```
