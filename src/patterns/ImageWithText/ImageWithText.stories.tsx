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

import heroImage from '../../assets/images/marketing/hero-banner.png';

const sharedArgs = {
  image: heroImage,
  eyebrow: 'Eyebrow',
  headline: 'This is a headline',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.',
  showEyebrow: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
  primaryButtonLabel: 'Learn More',
  secondaryButtonLabel: 'Learn More',
};

export const ImageLeft: Story = {
  name: 'Image Left',
  args: { ...sharedArgs, alignment: 'left' },
};

export const ImageRight: Story = {
  name: 'Image Right',
  args: { ...sharedArgs, alignment: 'right' },
};

export const Dark: Story = {
  name: 'Dark — Image Left',
  args: { ...sharedArgs, alignment: 'left', theme: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};
