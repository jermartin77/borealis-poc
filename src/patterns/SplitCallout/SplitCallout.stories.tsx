import type { Meta, StoryObj } from '@storybook/react-vite';
import { SplitCallout } from './SplitCallout';

const meta: Meta<typeof SplitCallout> = {
  title: 'Patterns/SplitCallout',
  component: SplitCallout,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    alignment: { control: 'radio', options: ['left', 'right'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof SplitCallout>;

const mediaImg = (
  <img
    src="https://placehold.co/960x700/c1c8cc/3e4951?text=Media"
    alt="Callout media"
    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
  />
);

const args = {
  media: mediaImg,
  eyebrow: 'Limited edition',
  headline: 'Explore the new season',
  body: 'Thoughtfully designed for the way you live. Discover pieces that bring warmth and intention to every room.',
  showEyebrow: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
};

export const MediaLeft: Story = {
  args: { ...args, alignment: 'left' },
};

export const MediaRight: Story = {
  args: { ...args, alignment: 'right' },
};

export const Dark: Story = {
  args: { ...args, theme: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};
