import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeaturedProducts } from './FeaturedProducts';

const meta: Meta<typeof FeaturedProducts> = {
  title: 'Patterns/FeaturedProducts',
  component: FeaturedProducts,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    layout: { control: 'radio', options: ['grid', 'overflow'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedProducts>;

const placeholder = (i: number) => `https://placehold.co/400x533/dfe3e4/5e7582?text=Product+${i}`;

const items = Array.from({ length: 4 }, (_, i) => ({
  image: placeholder(i + 1),
  title: `Product ${i + 1}`,
  description: 'Material · Size',
  price: `$${(48 + i * 12).toFixed(2)}`,
  badge: i === 0 ? 'New' : undefined,
}));

export const Grid: Story = {
  args: {
    layout: 'grid',
    blurb: {
      heading: 'Featured products',
      eyebrow: 'Shop now',
      showEyebrow: true,
      showButtons: true,
      showSecondaryButton: true,
      alignment: 'left',
    },
    items,
  },
};

export const Overflow: Story = {
  args: {
    ...Grid.args,
    layout: 'overflow',
    items: [...items, ...items],
  },
};

export const Dark: Story = {
  args: {
    ...Grid.args,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
