import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { VideoControls } from './VideoControls';

const meta: Meta<typeof VideoControls> = {
  title: 'Components/VideoControls',
  component: VideoControls,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof VideoControls>;

export const Playing: Story = {
  args: { state: 'playing' },
};

export const Paused: Story = {
  args: { state: 'paused' },
};

export const Interactive: Story = {
  render: () => {
    const [state, setState] = useState<'playing' | 'paused'>('playing');
    return (
      <VideoControls
        state={state}
        onToggle={() => setState(s => s === 'playing' ? 'paused' : 'playing')}
      />
    );
  },
};
