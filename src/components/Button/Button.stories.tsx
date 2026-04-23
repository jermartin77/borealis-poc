import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Button component wired to Figma design tokens. ' +
          'Variants map to Figma `Type`, sizes map to Figma `Size`. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1584-19494)',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Maps to Figma `Type`: Primary / Secondary / Tertiary',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: 'Maps to Figma `Size`: Large / Medium (Default) / Small',
    },
    label: {
      control: 'text',
      description: 'Maps to Figma `Text` layer',
    },
    disabled: {
      control: 'boolean',
      description: 'Maps to Figma `State: Disabled`',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Single variant stories ───────────────────────────────────────────────────

export const Primary: Story = {
  args: { variant: 'primary', size: 'md', label: 'Label' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', size: 'md', label: 'Label' },
};

export const Tertiary: Story = {
  args: { variant: 'tertiary', size: 'md', label: 'Label' },
};

export const Disabled: Story = {
  args: { variant: 'primary', size: 'md', label: 'Label', disabled: true },
};

// ─── Size stories ─────────────────────────────────────────────────────────────

export const Large: Story = {
  args: { variant: 'primary', size: 'lg', label: 'Label' },
};

export const Medium: Story = {
  args: { variant: 'primary', size: 'md', label: 'Label' },
};

export const Small: Story = {
  args: { variant: 'primary', size: 'sm', label: 'Label' },
};

// ─── Icon stories ─────────────────────────────────────────────────────────────

export const IconBefore: Story = {
  name: 'Icon Before',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Next',
    leftIcon: <Icon name="arrow-right" size={16} />,
  },
};

export const IconAfter: Story = {
  name: 'Icon After',
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Back',
    rightIcon: <Icon name="arrow-left" size={16} />,
  },
};

// ─── Full matrix — mirrors the Figma canvas ──────────────────────────────────

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(['primary', 'secondary', 'tertiary'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{
            fontFamily: 'var(--ds-font-family-display)',
            fontSize: 11,
            color: 'var(--ds-text-tertiary)',
            width: 68,
            textTransform: 'capitalize',
          }}>
            {variant}
          </span>
          <Button variant={variant} size="lg" label="Label" />
          <Button variant={variant} size="md" label="Label" />
          <Button variant={variant} size="sm" label="Label" />
          <Button variant={variant} size="md" label="Label" disabled />
        </div>
      ))}
    </div>
  ),
};
