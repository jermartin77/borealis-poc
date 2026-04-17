import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
  title: 'Design System/Loader',
  component: Loader,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Medium: Story = { args: { size: 'md' } };
export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </div>
  ),
};
