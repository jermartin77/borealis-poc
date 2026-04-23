import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, type IconName } from './Icon';

const ALL_ICONS: IconName[] = [
  'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up',
  'bookmark', 'calendar', 'check',
  'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up',
  'circle', 'circle-alert', 'circle-check',
  'download', 'funnel', 'handbag', 'info',
  'mail', 'map-pin', 'menu', 'minus', 'plus',
  'search', 'send', 'settings', 'settings-2',
  'shopping-cart', 'sparkles', 'square-arrow-out-up-right',
  'tag', 'trash-2', 'triangle-alert', 'user', 'x',
  'zoom-in', 'zoom-out',
];

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '37 Lucide icons wrapped in a consistent design system interface. ' +
          'Color is inherited via `currentColor` — wrap the icon in any colored element to tint it. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23963-26822)',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: ALL_ICONS,
    },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 } },
    strokeWidth: { control: { type: 'range', min: 0.5, max: 4, step: 0.5 } },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { name: 'user', size: 24 },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[16, 20, 24, 32, 40, 48].map((s) => (
        <Icon key={s} name="search" size={s} />
      ))}
    </div>
  ),
};

export const StrokeWeights: Story = {
  name: 'Stroke Weights',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[1, 1.5, 2, 2.5, 3].map((w) => (
        <div key={w} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon name="settings" size={24} strokeWidth={w} />
          <span style={{ fontSize: 10, color: 'var(--ds-text-secondary)' }}>{w}</span>
        </div>
      ))}
    </div>
  ),
};

export const Tinted: Story = {
  name: 'Tinted via currentColor',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'var(--ds-text-primary)' }}><Icon name="check" size={24} /></span>
      <span style={{ color: 'var(--ds-text-success)' }}><Icon name="circle-check" size={24} /></span>
      <span style={{ color: 'var(--ds-text-error)' }}><Icon name="x" size={24} /></span>
      <span style={{ color: 'var(--ds-text-warning)' }}><Icon name="triangle-alert" size={24} /></span>
      <span style={{ color: 'var(--ds-text-secondary)' }}><Icon name="info" size={24} /></span>
    </div>
  ),
};

export const AllIcons: Story = {
  name: 'All Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {ALL_ICONS.map((name) => (
        <div
          key={name}
          title={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 72 }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: 10, textAlign: 'center', color: 'var(--ds-text-secondary)', lineHeight: 1.2 }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
