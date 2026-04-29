import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextButton } from './TextButton';

const meta: Meta<typeof TextButton> = {
  title: 'Components/Buttons/Text Button',
  component: TextButton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'radio', options: ['lg', 'md', 'sm'] },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'lg',
    leftIcon: 'arrow-left',
    rightIcon: 'arrow-right',
  },
};

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <TextButton label="Large" size="lg" leftIcon="arrow-left" rightIcon="arrow-right" />
      <TextButton label="Medium" size="md" leftIcon="arrow-left" rightIcon="arrow-right" />
      <TextButton label="Small" size="sm" leftIcon="arrow-left" rightIcon="arrow-right" />
    </div>
  ),
};

export const IconVariants: Story = {
  name: 'Icon Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <TextButton label="No icons" size="md" />
      <TextButton label="Left icon only" size="md" leftIcon="arrow-left" />
      <TextButton label="Right icon only" size="md" rightIcon="arrow-right" />
      <TextButton label="Both icons" size="md" leftIcon="arrow-left" rightIcon="arrow-right" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    size: 'lg',
    leftIcon: 'arrow-left',
    rightIcon: 'arrow-right',
    disabled: true,
  },
};
