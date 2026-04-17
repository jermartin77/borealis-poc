export type Theme = 'light' | 'dark';

/**
 * Extend this interface in every component that should support
 * per-instance theme overrides.
 *
 * When `theme` is set, the component renders `data-theme="light|dark"`
 * on its root element. The CSS token overrides in index.css apply to
 * that element and cascade down to all children — icons, text, borders, etc.
 *
 * When `theme` is omitted the component inherits from the nearest
 * ancestor that has a theme set, or from the document-level OS preference.
 */
export interface ThemeProps {
  theme?: Theme;
}
