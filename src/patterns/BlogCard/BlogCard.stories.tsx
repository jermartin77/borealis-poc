import type { Meta, StoryObj } from '@storybook/react-vite';
import { BlogCard } from './BlogCard';
import img1 from '../../assets/images/blog/lifestyle-1.jpg';
import img2 from '../../assets/images/blog/lifestyle-2.jpg';
import img3 from '../../assets/images/blog/lifestyle-3.jpg';

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
    image: img1,
    title: 'How to style a modern living room',
    excerpt: 'Discover the key principles behind creating a comfortable, stylish living space that feels both current and timeless.',
    date: 'January 31, 2024',
    author: 'Henry Aaron',
    categories: ['Inspiration'],
    href: '#',
  },
};

export const MultipleCategories: Story = {
  name: 'Multiple Categories',
  args: {
    ...Default.args,
    image: img2,
    categories: ['Category 1', 'Category 2'],
  },
};

export const NoExcerpt: Story = {
  name: 'No Excerpt',
  args: {
    ...Default.args,
    image: img3,
    excerpt: undefined,
  },
};

export const Grid: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: 40 }}>
      <BlogCard
        image={img1}
        title="How to style a modern living room"
        excerpt="Discover the key principles behind creating a comfortable, stylish living space."
        date="January 31, 2024"
        author="Henry Aaron"
        categories={['Inspiration']}
        href="#"
      />
      <BlogCard
        image={img2}
        title="The art of layering textures in interior design"
        excerpt="Learn how to combine different materials and textures to add depth and interest to any room."
        date="February 14, 2024"
        author="Sarah Kim"
        categories={['Design', 'Tips']}
        href="#"
      />
      <BlogCard
        image={img3}
        title="Minimalist décor: less is more"
        excerpt="Explore how a minimalist approach can create calm, functional spaces without sacrificing style."
        date="March 5, 2024"
        author="James Okafor"
        categories={['Minimalism']}
        href="#"
      />
    </div>
  ),
};
