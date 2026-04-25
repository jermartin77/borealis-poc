import type { Meta, StoryObj } from '@storybook/react-vite';
import { CollectionCard } from './CollectionCard';
import img1 from '../../assets/images/blog/lifestyle-1.jpg';
import img2 from '../../assets/images/blog/lifestyle-2.jpg';
import img3 from '../../assets/images/marketing/fabric-detail.jpg';

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
    image: img1,
    title: 'Men\'s Collection',
    href: '#',
  },
};

export const WithDescription: Story = {
  name: 'With Description',
  args: {
    ...Default.args,
    image: img2,
    description: 'Explore our latest range of performance apparel engineered for speed, comfort, and style.',
  },
};

export const WithLink: Story = {
  name: 'With Link',
  args: {
    ...Default.args,
    image: img3,
    title: 'Technical Fabrics',
    description: 'Wind-tunnel tested materials and optimised seam placements for our most engaged fit.',
    linkLabel: 'Shop Collection',
  },
};

export const NoImage: Story = {
  name: 'No Image',
  args: {
    title: 'Men\'s Collection',
    description: 'Explore our latest range of performance apparel engineered for speed, comfort, and style.',
    linkLabel: 'Shop Collection',
    href: '#',
  },
};

export const Grid: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, padding: 40 }}>
      <CollectionCard
        image={img1}
        title="Men's Collection"
        description="Performance apparel engineered for speed and comfort."
        linkLabel="Shop Now"
        href="#"
      />
      <CollectionCard
        image={img2}
        title="Women's Collection"
        description="Designed for the modern athlete with precision and style."
        linkLabel="Shop Now"
        href="#"
      />
      <CollectionCard
        image={img3}
        title="Technical Fabrics"
        description="Wind-tunnel tested materials for our most engaged fit."
        linkLabel="Explore"
        href="#"
      />
    </div>
  ),
};
