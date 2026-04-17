import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroBanner } from './HeroBanner';

const meta: Meta<typeof HeroBanner> = {
  title: 'Patterns/HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    align: {
      control: 'select',
      options: ['left-top', 'left-middle', 'left-bottom', 'center-middle', 'right-top', 'right-middle', 'right-bottom'],
    },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof HeroBanner>;

const heroImage = 'https://placehold.co/1920x960/2b3239/f6f3f3?text=Hero+Image';

const args = {
  image: heroImage,
  eyebrow: 'New season',
  headline: 'Beautifully made, thoughtfully designed',
  subheadline: 'Explore our latest collection of home essentials.',
  showEyebrow: true,
  showSubheadline: true,
  showCta: true,
  showSecondaryCta: true,
};

export const LeftMiddle: Story = {
  args: { ...args, align: 'left-middle' },
};

export const CenterMiddle: Story = {
  args: { ...args, align: 'center-middle' },
};

export const LeftBottom: Story = {
  args: { ...args, align: 'left-bottom' },
};

export const RightMiddle: Story = {
  args: { ...args, align: 'right-middle' },
};
