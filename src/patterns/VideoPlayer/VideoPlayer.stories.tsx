import type { Meta, StoryObj } from '@storybook/react-vite';
import { VideoPlayer } from './VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
  title: 'Patterns/VideoPlayer',
  component: VideoPlayer,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Default: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://placehold.co/1280x720/2b3239/f6f3f3?text=Video+Poster',
    caption: 'Big Buck Bunny — sample video',
  },
};

export const Autoplay: Story = {
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    autoplay: true,
    loop: true,
    muted: true,
  },
};
