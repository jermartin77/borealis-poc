import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    color: { control: 'radio', options: ['primary', 'neutral', 'stroked'] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: { color: 'primary', children: 'New arrival' },
};

export const Neutral: Story = {
  args: { color: 'neutral', children: 'In stock' },
};

export const Stroked: Story = {
  args: { color: 'stroked', children: 'Limited' },
};

export const WithClose: Story = {
  args: { color: 'primary', children: 'Sale', onClose: () => {} },
};

export const AllColors: Story = {
  name: 'All Colors',
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Badge color="primary">Primary</Badge>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="stroked">Stroked</Badge>
      <Badge color="primary" onClose={() => {}}>Dismissible</Badge>
    </div>
  ),
};
