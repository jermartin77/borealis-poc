import type { Preview, Decorator } from '@storybook/react-vite';
import '../src/index.css';

// ─── Theme config ─────────────────────────────────────────────────────────────

const THEMES = [
  { value: 'light', title: 'Light', icon: 'sun' },
  { value: 'dark',  title: 'Dark',  icon: 'moon' },
] as const;

type ThemeValue = typeof THEMES[number]['value'];

// Must stay in sync with tokens.css (:root) and the dark overrides in index.css
const BACKGROUND: Record<ThemeValue, string> = {
  light: '#f6f6f6',
  dark:  '#181b1d',
};

// ─── Theme decorator ──────────────────────────────────────────────────────────

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals['theme'] as ThemeValue | undefined) ?? 'light';

  // Apply data-theme to the story iframe's <html> element — triggers CSS var overrides
  document.documentElement.dataset.theme = theme;

  // Sync canvas background to the token-driven page surface color
  document.documentElement.style.backgroundColor = BACKGROUND[theme];

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
