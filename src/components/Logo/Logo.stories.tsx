import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'Design System/Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Logo component wired to Figma design tokens. ' +
          'Uses `Foreground/primary` (`--ds-foreground-primary`) for fill color — ' +
          'automatically adapts to light and dark mode without extra props. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1559-23841)',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['brand-mark', 'full-logo'],
      description: 'Figma: `Brand Mark` or `Full Logo` variant',
    },
    height: {
      control: { type: 'range', min: 16, max: 80, step: 4 },
      description: 'Height in px — width scales proportionally',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const BrandMark: Story = {
  args: { variant: 'brand-mark', height: 32 },
};

export const FullLogo: Story = {
  args: { variant: 'full-logo', height: 32 },
};

export const BrandMarkLarge: Story = {
  name: 'Brand Mark — Large',
  args: { variant: 'brand-mark', height: 64 },
};

export const FullLogoLarge: Story = {
  name: 'Full Logo — Large',
  args: { variant: 'full-logo', height: 64 },
};

// ─── Both variants side by side ───────────────────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {([32, 48] as const).map((h) => (
        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <span style={{
            fontFamily: 'var(--ds-font-family-text)',
            fontSize: 11,
            color: 'var(--ds-text-tertiary)',
            width: 48,
          }}>
            {h}px
          </span>
          <Logo variant="brand-mark" height={h} />
          <Logo variant="full-logo" height={h} />
        </div>
      ))}
    </div>
  ),
};
