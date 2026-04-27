import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavItem } from './NavItem';

const meta: Meta<typeof NavItem> = {
  title: 'Components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  args: { label: 'Menu Item', href: '#' },
};

export const Dark: Story = {
  args: { label: 'Menu Item', href: '#' },
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ padding: 24, background: 'var(--ds-background-primary)' }}>
        <Story />
      </div>
    ),
  ],
};
