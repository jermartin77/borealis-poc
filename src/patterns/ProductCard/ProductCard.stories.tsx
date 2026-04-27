import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './ProductCard';
import img1 from '../../assets/images/product/product-image-1.jpg';
import img1Alt from '../../assets/images/product/product-image-1-alt.jpg';
import img2 from '../../assets/images/product/product-image-2.jpg';
import img2Alt from '../../assets/images/product/product-image-2-alt.jpg';

const COLORS = {
  jetBlack:  '#111111',
  blushPink: '#f2a8c2',
};

const meta: Meta<typeof ProductCard> = {
  title: 'Patterns/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    image: img1,
    altImage: img1Alt,
    imageAlt: 'Men\'s Pro Team Aero Jersey IV',
    title: 'Men\'s Pro Team Aero Jersey IV',
    price: '$270.00',
    swatches: [
      { color: COLORS.jetBlack, image: img1, altImage: img1Alt },
      { color: COLORS.blushPink, image: img2, altImage: img2Alt },
    ],
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: 'New',
    badgeStyle: 'feature',
  },
};

export const WithSalePrice: Story = {
  args: {
    ...Default.args,
    price: '$150.00',
    originalPrice: '$270.00',
    badge: 'Sale',
    badgeStyle: 'sale',
  },
};

export const WithSwatches: Story = {
  name: 'With Swatches',
  args: {
    image: img1,
    altImage: img1Alt,
    imageAlt: 'Men\'s Pro Team Aero Jersey IV',
    title: 'Men\'s Pro Team Aero Jersey IV',
    description: 'Our fastest jersey. Wind-tunnel tested fabrics, optimised seam placements and our most engaged fit',
    price: '$270.00',
    swatches: [
      { color: COLORS.jetBlack, image: img1, altImage: img1Alt },
      { color: COLORS.blushPink, image: img2, altImage: img2Alt },
    ],
  },
};

export const WithReviews: Story = {
  name: 'With Reviews',
  args: {
    ...Default.args,
    rating: 4.5,
    reviewCount: 396,
  },
};

export const Full: Story = {
  args: {
    image: img1,
    altImage: img1Alt,
    imageAlt: 'Men\'s Pro Team Aero Jersey IV',
    title: 'Men\'s Pro Team Aero Jersey IV',
    description: 'Our fastest jersey. Wind-tunnel tested fabrics, optimised seam placements and our most engaged fit',
    price: '$150.00',
    originalPrice: '$270.00',
    badge: 'Sale',
    badgeStyle: 'sale',
    swatches: [
      { color: COLORS.jetBlack, image: img1, altImage: img1Alt },
      { color: COLORS.blushPink, image: img2, altImage: img2Alt },
    ],
    rating: 4.5,
    reviewCount: 396,
    href: '#',
  },
};

export const Dark: Story = {
  args: {
    ...Full.args,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
