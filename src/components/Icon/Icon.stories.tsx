import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, type IconName } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Design System/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '41 inline SVG icons wired to the design token color cascade. ' +
          'Color is inherited via `currentColor` — wrap the icon in any colored element to tint it. ' +
          'UI icons render as stroked paths; social icons render as filled paths. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23919-10)',
      },
    },
  },
  argTypes: {
    name: {
      control: 'select',
      options: [
        'Account', 'Bag', 'Pin', 'Envelope', 'Zoom In', 'Zoom Out',
        'Calendar', 'Settings', 'Camera', 'Gear', 'Share', 'Tag',
        'Trash', 'Star Full', 'Star Half', 'Star Empty', 'Download',
        'Filter', 'Placeholder', 'Lightning', 'Arrow Down', 'Arrow Left',
        'Arrow Up', 'Arrow Right', 'Plus', 'Minus', 'Caret Down',
        'Caret Left', 'Caret Up', 'Caret Right', 'Check', 'X', 'Menu',
        'Search', 'TikTok', 'Pinterest', 'Youtube', 'Google',
        'X Twitter', 'Facebook', 'LinkedIn', 'Instagram',
      ],
    },
    size: { control: { type: 'range', min: 12, max: 64, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { name: 'Account', size: 24 },
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[16, 20, 24, 32, 40, 48].map((s) => (
        <Icon key={s} name="Search" size={s} />
      ))}
    </div>
  ),
};

export const Tinted: Story = {
  name: 'Tinted via currentColor',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'var(--ds-foreground-primary)' }}><Icon name="Check" size={24} /></span>
      <span style={{ color: 'var(--ds-status-success)' }}><Icon name="Check" size={24} /></span>
      <span style={{ color: 'var(--ds-status-error)' }}><Icon name="X" size={24} /></span>
      <span style={{ color: 'var(--ds-status-warning)' }}><Icon name="Lightning" size={24} /></span>
    </div>
  ),
};

const UI_ICONS: IconName[] = [
  'Account', 'Bag', 'Pin', 'Envelope', 'Zoom In', 'Zoom Out',
  'Calendar', 'Settings', 'Camera', 'Gear', 'Share', 'Tag',
  'Trash', 'Star Full', 'Star Half', 'Star Empty', 'Download',
  'Filter', 'Placeholder', 'Lightning', 'Arrow Down', 'Arrow Left',
  'Arrow Up', 'Arrow Right', 'Plus', 'Minus', 'Caret Down',
  'Caret Left', 'Caret Up', 'Caret Right', 'Check', 'X', 'Menu', 'Search',
];

const SOCIAL_ICONS: IconName[] = [
  'Instagram', 'LinkedIn', 'Facebook', 'X Twitter', 'Google', 'Youtube', 'Pinterest', 'TikTok',
];

export const AllUIIcons: Story = {
  name: 'All UI Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {UI_ICONS.map((name) => (
        <div
          key={name}
          title={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 64 }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: 10, textAlign: 'center', color: 'var(--ds-foreground-secondary, #666)', lineHeight: 1.2 }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const AllSocialIcons: Story = {
  name: 'All Social Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {SOCIAL_ICONS.map((name) => (
        <div
          key={name}
          title={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 64 }}
        >
          <Icon name={name} size={24} />
          <span style={{ fontSize: 10, textAlign: 'center', color: 'var(--ds-foreground-secondary, #666)', lineHeight: 1.2 }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};
