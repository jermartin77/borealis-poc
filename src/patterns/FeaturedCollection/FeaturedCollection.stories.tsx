import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeaturedCollection } from './FeaturedCollection';

const meta: Meta<typeof FeaturedCollection> = {
  title: 'Patterns/FeaturedCollection',
  component: FeaturedCollection,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    layout: { control: 'radio', options: ['grid', 'overflow'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedCollection>;

const placeholder = (i: number) => `https://placehold.co/400x533/c1c8cc/3e4951?text=Collection+${i}`;

const items = ['Living Room', 'Bedroom', 'Dining', 'Outdoor'].map((title, i) => ({
  image: placeholder(i + 1),
  title,
  href: '#',
}));

export const Grid: Story = {
  args: {
    layout: 'grid',
    blurb: {
      heading: 'Shop by collection',
      eyebrow: 'Collections',
      showEyebrow: true,
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
