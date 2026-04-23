import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlayerIcon } from './PlayerIcon';

const meta: Meta<typeof PlayerIcon> = {
  title: 'Design System/Icon/Player',
  component: PlayerIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Media player icons — Play and Pause in two visual styles: stroked (outline) and solid (filled). ' +
          'Default size is 32px to match the Figma spec. Color is inherited via `currentColor`. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4764-7212)',
      },
    },
  },
  argTypes: {
    name: { control: 'select', options: ['play', 'pause'] },
    iconStyle: { control: 'select', options: ['stroked', 'solid'] },
    size: { control: { type: 'range', min: 16, max: 64, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof PlayerIcon>;

export const Default: Story = {
  args: { name: 'play', iconStyle: 'stroked', size: 32 },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['stroked', 'solid'] as const).map((style) => (
        <div key={style} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{
            fontSize: 11,
            color: 'var(--ds-text-tertiary)',
            width: 56,
            textTransform: 'capitalize',
          }}>
            {style}
          </span>
          <PlayerIcon name="play" iconStyle={style} size={32} />
          <PlayerIcon name="pause" iconStyle={style} size={32} />
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[20, 24, 32, 40, 48].map((s) => (
        <PlayerIcon key={s} name="play" iconStyle="solid" size={s} />
      ))}
    </div>
  ),
};

export const Tinted: Story = {
  name: 'Tinted via currentColor',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'var(--ds-text-primary)' }}><PlayerIcon name="play" iconStyle="solid" size={32} /></span>
      <span style={{ color: 'var(--ds-background-brand)' }}><PlayerIcon name="play" iconStyle="solid" size={32} /></span>
      <span style={{ color: 'var(--ds-text-secondary)' }}><PlayerIcon name="pause" iconStyle="stroked" size={32} /></span>
    </div>
  ),
};
