import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeaturedBlogPosts } from './FeaturedBlogPosts';

const meta: Meta<typeof FeaturedBlogPosts> = {
  title: 'Patterns/FeaturedBlogPosts',
  component: FeaturedBlogPosts,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedBlogPosts>;

const items = [
  {
    image: 'https://placehold.co/800x500/dfe3e4/5e7582?text=Post+1',
    title: 'How to style a modern living room',
    excerpt: 'Discover the key principles behind creating a comfortable, stylish living space.',
    date: 'April 12, 2025',
    category: 'Inspiration',
    href: '#',
  },
  {
    image: 'https://placehold.co/800x500/c1c8cc/3e4951?text=Post+2',
    title: 'The minimalist bedroom guide',
    excerpt: 'Less is more — learn how to create a serene sleeping space with fewer pieces.',
    date: 'March 28, 2025',
    category: 'Design',
    href: '#',
  },
  {
    image: 'https://placehold.co/800x500/dfa7ab/181b1d?text=Post+3',
    title: 'Sustainable materials in home decor',
    excerpt: 'How to build a beautiful home while making responsible material choices.',
    date: 'March 10, 2025',
    category: 'Sustainability',
    href: '#',
  },
];

export const Default: Story = {
  args: {
    blurb: {
      heading: 'From our journal',
      eyebrow: 'Blog',
      showEyebrow: true,
      showButtons: true,
      primaryButtonLabel: 'View all posts',
    },
    items,
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
