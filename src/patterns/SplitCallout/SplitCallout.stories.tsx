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

import heroImage from '../../assets/images/marketing/hero-banner.png';

const sharedArgs = {
  image: heroImage,
  eyebrow: 'Eyebrow',
  headline: 'This is a Headline',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  showEyebrow: true,
  showPrimaryButton: true,
  showSecondaryButton: true,
  primaryButtonLabel: 'Learn More',
  secondaryButtonLabel: 'Learn More',
};

export const MediaLeft: Story = {
  name: 'Media Left',
  args: { ...sharedArgs, alignment: 'left' },
};

export const MediaRight: Story = {
  name: 'Media Right',
  args: { ...sharedArgs, alignment: 'right' },
};

export const Dark: Story = {
  name: 'Dark — Media Left',
  args: { ...sharedArgs, alignment: 'left', theme: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
};
