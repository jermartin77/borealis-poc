import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Design System/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Shop', href: '/shop' },
      { label: 'Candles', href: '/shop/candles' },
      { label: 'Cedar & Pine' },
    ],
  },
};

export const Short: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'About' },
    ],
  },
};
