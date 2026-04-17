import type { Meta, StoryObj } from '@storybook/react-vite';
import { CollectionCard } from './CollectionCard';

const meta: Meta<typeof CollectionCard> = {
  title: 'Patterns/CollectionCard',
  component: CollectionCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof CollectionCard>;

export const Default: Story = {
  args: {
    image: 'https://placehold.co/400x533/c1c8cc/3e4951?text=Collection',
    title: 'Living Room',
    href: '#',
  },
};
