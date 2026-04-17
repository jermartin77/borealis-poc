import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blurb } from './Blurb';

const meta: Meta<typeof Blurb> = {
  title: 'Patterns/Blurb',
  component: Blurb,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    alignment: { control: 'radio', options: ['left', 'center'] },
    size: { control: 'radio', options: ['default', 'small'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Blurb>;

export const Default: Story = {
  args: {
    heading: 'Discover our collection',
    body: 'Explore handpicked pieces designed for modern living. Each item is crafted with care and built to last.',
    showEyebrow: true,
    eyebrow: 'New arrivals',
    showButtons: true,
    showSecondaryButton: true,
    alignment: 'left',
    size: 'default',
  },
};

export const Centered: Story = {
  args: {
    ...Default.args,
    alignment: 'center',
  },
};

export const Small: Story = {
  args: {
    heading: 'Featured products',
    body: 'Handpicked for you.',
    showEyebrow: true,
    eyebrow: 'Collection',
    showButtons: true,
    size: 'small',
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
