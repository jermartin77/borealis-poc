---
name: component-usage
description: >
  Apply component usage rules whenever building, implementing, or reviewing any UI
  component or layout. Use this skill any time the user is: importing or using a
  component from the design system or Storybook library, implementing a Figma design
  in code, handling differences between mobile and desktop layouts, building responsive
  layouts, or asking how a component should behave, be composed, or be styled.
  Also trigger when the user says "build this from the design", "match the Figma",
  "make this responsive", or "implement this component". Always read this skill before
  writing component code — it governs token usage, component sourcing, and layout rules.
---

# Component Usage Skill

This skill defines the rules for implementing components and layouts from a Figma
design source, using a Storybook component library and the project's design token system.

**Three rules govern all component work:**
1. Always use design tokens for all visual properties
2. Always source components from the Storybook library when available
3. Never duplicate elements for responsive layouts — use CSS to reposition

---

## Rule 1: Always Use Design Tokens

Before writing any component styles, load the `design-tokens` skill.

Every visual property must resolve to a token — no exceptions:

| Property | ✓ Use token | ✗ Never hardcode |
|---|---|---|
| Color | `var(--color-background-default)` / `bg-background-default` | `#181B1D`, `rgba(...)` |
| Font size | `var(--font-size-lg)` / `text-size-lg` | `18px`, `1.125rem` |
| Font family | `var(--font-display)` / `font-display` | `'Neue Haas Grotesk...'` |
| Spacing | `var(--spacing-4)` / `p-4 gap-6` | `16px`, `p-[13px]` |
| Radius | `var(--radius-md)` / `rounded-md` | `8px`, `rounded-[8px]` |
| Shadow | `var(--shadow-md)` / `shadow-md` | raw `box-shadow` values |

If a Figma design uses a value that doesn't exist in the token system, flag it —
do not invent a new hardcoded value. Either map it to the nearest token or note that
a new token needs to be added to the source.

---

## Rule 2: Always Source Components from Storybook

The Storybook library is the single source of truth for components.


### Component Customization
Customize via:
- **Props** — use documented variant/size/state props first
- **className** — extend with Tailwind token classes for layout adjustments
- **CSS vars** — override component-level CSS custom properties if the component exposes them

Never modify the component source file directly for one-off styling needs.

```tsx
// ✓ Correct — extend via className with token classes
<Button className="w-full mt-spacing-4" variant="primary" size="lg">
  Submit
</Button>

// ✗ Wrong — inline styles with hardcoded values
<Button style={{ marginTop: '16px', width: '100%' }}>
  Submit
</Button>
```

### When a Component Doesn't Exist in Storybook
1. Check if it can be composed from existing primitives (e.g. Card + Button + Input)
2. If genuinely new, build it using design tokens and document it — do not treat
   it as a one-off; it should be added to the library

---

## Rule 3: Responsive Layout — CSS Only, Never Duplicate Elements

When a Figma file shows different layouts for mobile and desktop, **never solve this
by rendering two versions of the same element.** Use CSS to reposition the single element.

### The Core Rule
```tsx
// ✗ Wrong — two elements, conditional rendering
<>
  <div className="hidden md:block"><Sidebar /></div>
  <div className="block md:hidden"><MobileMenu /></div>
</>

// ✓ Correct — one element, CSS repositioning
<Sidebar className="
  fixed bottom-0 w-full          // mobile: bottom nav
  md:relative md:w-64 md:h-full  // desktop: left sidebar
" />
```

### Reading Figma for Responsive Differences

When reviewing a Figma file that has both mobile and desktop frames:

1. **Identify what changed** — position, size, visibility, order, or layout direction
2. **Identify what didn't change** — content, hierarchy, component identity
3. **Map changes to CSS** — use Tailwind responsive prefixes or media queries
4. **Preserve the DOM structure** — the element order in HTML should reflect
   the logical reading order, not the visual layout

### Tailwind Responsive Prefixes
```tsx
// Layout direction change
<div className="flex flex-col md:flex-row">

// Reposition an element
<nav className="
  order-last w-full px-spacing-4 py-spacing-2    // mobile: bottom bar
  md:order-first md:w-64 md:h-screen md:px-0     // desktop: left rail
">

// Show/hide (only for decorative or supplementary content — not for primary UI)
<aside className="hidden lg:block">
```

### CSS Media Queries (for complex repositioning)
When Tailwind responsive prefixes become unwieldy, use CSS:
```css
.layout-sidebar {
  /* Mobile: full-width bottom */
  position: fixed;
  bottom: 0;
  width: 100%;
}

@media (min-width: 768px) {
  .layout-sidebar {
    /* Desktop: left rail */
    position: relative;
    width: 16rem;
    height: 100%;
  }
}
```

### Container Queries (for component-level responsiveness)
Use container queries when a component's layout should respond to its container
width, not the viewport:
```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 480px) {
  .card-body {
    flex-direction: row;
  }
}
```

---

## Implementing a Figma Design — Checklist

When given a Figma design to implement:

- [ ] Load `design-tokens` skill before writing any styles
- [ ] Identify every component in the design — check Storybook before building
- [ ] Note any Figma values that don't map to tokens — flag them before coding
- [ ] Identify mobile vs. desktop layout differences — plan CSS strategy before writing markup
- [ ] Write HTML/JSX structure once — responsive via CSS only
- [ ] Use Tailwind token classes for spacing, color, type, radius, shadow
- [ ] Use CSS custom properties for values not expressible in Tailwind
- [ ] Verify the implementation against both mobile and desktop Figma frames before shipping

---

## Common Patterns

### Stack → Side-by-side (mobile → desktop)
```tsx
<div className="flex flex-col gap-spacing-4 md:flex-row md:gap-spacing-8">
  <main className="flex-1">...</main>
  <aside className="w-full md:w-80">...</aside>
</div>
```

### Full-width → Contained
```tsx
<section className="w-full px-spacing-4 md:max-w-screen-lg md:mx-auto md:px-spacing-8">
```

### Bottom nav → Left nav
```tsx
<nav className="
  fixed bottom-0 left-0 right-0 h-16 flex flex-row
  md:static md:h-full md:w-64 md:flex-col
">
```
