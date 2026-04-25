import type { Preview, Decorator } from '@storybook/react-vite';
import '../src/index.css';

// ─── Theme config ─────────────────────────────────────────────────────────────

const THEMES = [
  { value: 'light', title: 'Light', icon: 'sun' },
  { value: 'dark',  title: 'Dark',  icon: 'moon' },
] as const;

type ThemeValue = typeof THEMES[number]['value'];

// ─── Docs page styles ─────────────────────────────────────────────────────────

// Inject once — makes the docs page chrome (wrapper, story blocks) respond to
// data-theme on <html> via the same --ds-* token cascade as components.
const DOCS_STYLE_ID = 'ds-docs-theme';
if (!document.getElementById(DOCS_STYLE_ID)) {
  const style = document.createElement('style');
  style.id = DOCS_STYLE_ID;
  style.textContent = `
    .docs-story {
      background: var(--ds-background-primary) !important;
    }
  `;
  document.head.appendChild(style);
}

// ─── Theme decorator ──────────────────────────────────────────────────────────

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] as ThemeValue | undefined) ?? 'light';

  // Apply data-theme to <html> — triggers CSS var overrides for the entire token set
  document.documentElement.dataset.theme = theme;

  // Set background via the token directly so it tracks dark/light without hardcoded hex
  document.documentElement.style.background = 'var(--ds-background-primary)';

  return Story();
};

// ─── Preview config ───────────────────────────────────────────────────────────

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color mode',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: THEMES,
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [withTheme],

  parameters: {
    // Disable built-in backgrounds panel — our decorator handles canvas bg
    backgrounds: { disable: true },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
