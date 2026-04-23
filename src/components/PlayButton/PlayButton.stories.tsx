import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlayButton } from './PlayButton';

const meta: Meta<typeof PlayButton> = {
  title: 'Components/Play Button',
  component: PlayButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#444' },
        { name: 'image', value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
      ],
    },
    docs: {
      description: {
        component:
          'Circular frosted-glass play button. Intended to overlay video thumbnails. ' +
          'Size is responsive via `--ds-element-play-button` (56px mobile → 80px desktop). ' +
          'Hover darkens the background and deepens the blur. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=13753-6469)',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PlayButton>;

export const Default: Story = {};

export const OnImage: Story = {
  name: 'On Image',
  decorators: [
    (Story) => (
      <div
        style={{
          width: 320,
          height: 180,
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 8,
        }}
      >
        <Story />
      </div>
    ),
  ],
};
