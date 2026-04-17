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
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const BrandMark: Story = {
  args: { variant: 'brand-mark' },
};

export const FullLogo: Story = {
  args: { variant: 'full-logo' },
};

export const BothVariants: Story = {
  name: 'Both Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
      <Logo variant="brand-mark" />
      <Logo variant="full-logo" />
    </div>
  ),
};
