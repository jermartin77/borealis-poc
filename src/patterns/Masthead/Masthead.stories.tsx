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
  name: 'Light',
  args: { ...sharedArgs, theme: 'light' },
  decorators: [
    (Story) => (
      <div style={{ height: 400, background: '#f5f5f5' }}>
        <Story />
      </div>
    ),
  ],
};
