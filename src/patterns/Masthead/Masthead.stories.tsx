import type { Meta, StoryObj } from '@storybook/react-vite';
import { Masthead } from './Masthead';
import { Logo } from '../../components/Logo/Logo';

const meta: Meta<typeof Masthead> = {
  title: 'Patterns/Masthead',
  component: Masthead,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof Masthead>;

const navItems = [
  { label: 'Category 1', href: '#' },
  { label: 'Category 2', href: '#' },
  { label: 'Category 3', href: '#' },
  { label: 'Category 4', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Blog', href: '#' },
];

const sharedArgs = {
  logo: <Logo variant="full-logo" />,
  navItems,
};

export const Default: Story = {
  name: 'Default (dark overlay)',
  args: sharedArgs,
  decorators: [
    (Story) => (
      <div style={{ height: 400, background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
        <Story />
      </div>
    ),
  ],
};

export const Light: Story = {
  name: 'Light (scroll to see sticky dark)',
  args: { ...sharedArgs, theme: 'light' },
  decorators: [
    (Story) => (
      <div style={{ height: 600, overflowY: 'auto', background: '#f0eeeb' }}>
        <Story />
        <div style={{ padding: '80px 40px', color: '#181b1d', fontSize: 14, opacity: 0.5 }}>
          Scroll down past 80px to see the nav transition to dark mode (3s ease-in-out).
        </div>
        <div style={{ height: 800 }} />
      </div>
    ),
  ],
};
