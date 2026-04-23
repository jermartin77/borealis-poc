import type { Meta, StoryObj } from '@storybook/react-vite';
import { StarIcon } from './StarIcon';

const meta: Meta<typeof StarIcon> = {
  title: 'Components/Icon/Review Stars',
  component: StarIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Star icons for review/rating displays. Three variants: empty (outline), half-filled, and full. ' +
          'Color is inherited via `currentColor`. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23963-27398)',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['empty', 'half', 'full'],
    },
    size: { control: { type: 'range', min: 12, max: 48, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof StarIcon>;

export const Default: Story = {
  args: { variant: 'empty', size: 24 },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <StarIcon variant="empty" size={24} aria-label="Empty star" />
      <StarIcon variant="half" size={24} aria-label="Half star" />
      <StarIcon variant="full" size={24} aria-label="Full star" />
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[16, 20, 24, 32, 40].map((s) => (
        <StarIcon key={s} variant="full" size={s} />
      ))}
    </div>
  ),
};

export const RatingRow: Story = {
  name: '4.5-Star Rating Row',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--ds-text-primary)' }}>
      <StarIcon variant="full" size={20} />
      <StarIcon variant="full" size={20} />
      <StarIcon variant="full" size={20} />
      <StarIcon variant="full" size={20} />
      <StarIcon variant="half" size={20} />
    </div>
  ),
};

export const Tinted: Story = {
  name: 'Tinted via currentColor',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <span style={{ color: 'var(--ds-text-primary)' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['full', 'full', 'full', 'half', 'empty'] as const).map((v, i) => (
            <StarIcon key={i} variant={v} size={24} />
          ))}
        </div>
      </span>
      <span style={{ color: 'var(--ds-background-brand)' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['full', 'full', 'full', 'half', 'empty'] as const).map((v, i) => (
            <StarIcon key={i} variant={v} size={24} />
          ))}
        </div>
      </span>
    </div>
  ),
};
