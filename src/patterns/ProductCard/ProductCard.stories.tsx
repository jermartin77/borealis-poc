import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCard } from './ProductCard';

const meta: Meta<typeof ProductCard> = {
  title: 'Patterns/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

const placeholder = 'https://placehold.co/400x533/dfe3e4/5e7582?text=Product';

export const Default: Story = {
  args: {
    image: placeholder,
    imageAlt: 'Product image',
    title: 'Linen Throw Pillow',
    description: 'Natural linen, 18" × 18"',
    price: '$48.00',
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: 'New',
  },
};

export const WithSalePrice: Story = {
  args: {
    ...Default.args,
    price: '$36.00',
    originalPrice: '$48.00',
    badge: 'Sale',
  },
};

export const WithAddToCart: Story = {
  args: {
    ...Default.args,
    badge: 'New',
    onAddToCart: () => alert('Added to cart'),
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
