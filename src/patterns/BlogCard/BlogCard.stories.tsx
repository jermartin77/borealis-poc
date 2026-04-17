import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlogCard } from './BlogCard';

const meta: Meta<typeof BlogCard> = {
  title: 'Patterns/BlogCard',
  component: BlogCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof BlogCard>;

export const Default: Story = {
  args: {
    image: 'https://placehold.co/800x500/dfe3e4/5e7582?text=Blog+Image',
    title: 'How to style a modern living room',
    excerpt: 'Discover the key principles behind creating a comfortable, stylish living space that feels both current and timeless.',
    date: 'April 12, 2025',
    category: 'Inspiration',
    href: '#',
  },
};
