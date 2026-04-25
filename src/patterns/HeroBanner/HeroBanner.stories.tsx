import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroBanner } from './HeroBanner';
import heroImage from '../../assets/images/marketing/hero-banner.png';
import heroVideo from '../../assets/video/hero-banner-animated.mp4';

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

const sharedArgs = {
  eyebrow: 'New season',
  headline: 'Built for the Distance',
  subheadline: 'Performance apparel engineered for riders who go further.',
  showEyebrow: true,
  showSubheadline: true,
  showCta: true,
  showSecondaryCta: true,
  ctaLabel: 'Shop Now',
  ctaSecondaryLabel: 'Learn More',
};

export const WithVideo: Story = {
  name: 'Video — Left Middle',
  args: {
    ...sharedArgs,
    video: heroVideo,
    align: 'left-middle',
  },
};

export const LeftMiddle: Story = {
  args: { ...sharedArgs, image: heroImage, align: 'left-middle' },
};

export const CenterMiddle: Story = {
  args: { ...sharedArgs, image: heroImage, align: 'center-middle' },
};

export const LeftBottom: Story = {
  args: { ...sharedArgs, image: heroImage, align: 'left-bottom' },
};

export const RightMiddle: Story = {
  args: { ...sharedArgs, image: heroImage, align: 'right-middle' },
};
