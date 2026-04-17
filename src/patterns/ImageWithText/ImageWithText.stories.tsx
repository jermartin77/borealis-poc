import type { Meta, StoryObj } from '@storybook/react-vite';
import { ImageWithText } from './ImageWithText';

const meta: Meta<typeof ImageWithText> = {
  title: 'Patterns/ImageWithText',
  component: ImageWithText,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    alignment: { control: 'radio', options: ['left', 'right'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof ImageWithText>;

const args = {
  image: 'https://placehold.co/800x600/c1c8cc/3e4951?text=Image',
  eyebrow: 'Our story',
  headline: 'Crafted with intention',
  body: 'Every piece in our collection is chosen for its quality, craftsmanship, and ability to elevate everyday living. We partner with makers who share our values.',
  showEyebrow: true,
  showCta: true,
  ctaLabel: 'Learn more',
};

export const ImageLeft: Story = {
  args: { ...args, alignment: 'left' },
};

export const ImageRight: Story = {
  args: { ...args, alignment: 'right' },
};

export const Dark: Story = {
  args: { ...args, theme: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};
