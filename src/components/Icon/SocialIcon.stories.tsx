import type { Meta, StoryObj } from '@storybook/react-vite';
import { SocialIcon, type SocialIconName } from './SocialIcon';

const ALL_SOCIAL: SocialIconName[] = [
  'TikTok', 'Pinterest', 'Youtube', 'Google',
  'X Twitter', 'Facebook', 'LinkedIn', 'Instagram',
];

const meta: Meta<typeof SocialIcon> = {
  title: 'Components/Icon/Social',
  component: SocialIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '8 social/brand logos as inline filled SVGs. Color is inherited via `currentColor` — ' +
          'wrap in any colored element to tint. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23919-10)',
      },
    },
  },
  argTypes: {
    name: { control: 'select', options: ALL_SOCIAL },
    size: { control: { type: 'range', min: 12, max: 48, step: 4 } },
  },
};

export default meta;
type Story = StoryObj<typeof SocialIcon>;

export const Default: Story = {
  args: { name: 'Instagram', size: 24 },
};

export const AllIcons: Story = {
  name: 'All Social Icons',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
      {ALL_SOCIAL.map((name) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, width: 72 }}
        >
          <SocialIcon name={name} size={24} aria-label={name} />
          <span style={{ fontSize: 10, textAlign: 'center', color: 'var(--ds-foreground-secondary, #666)', lineHeight: 1.2 }}>
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {[16, 20, 24, 32, 40].map((s) => (
        <SocialIcon key={s} name="Instagram" size={s} />
      ))}
    </div>
  ),
};

export const Tinted: Story = {
  name: 'Tinted via currentColor',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'var(--ds-text-primary)' }}><SocialIcon name="TikTok" size={24} /></span>
      <span style={{ color: 'var(--ds-text-secondary)' }}><SocialIcon name="Instagram" size={24} /></span>
      <span style={{ color: 'var(--ds-background-brand)' }}><SocialIcon name="Pinterest" size={24} /></span>
    </div>
  ),
};
