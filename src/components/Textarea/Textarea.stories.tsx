import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Inputs/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: 'Message', placeholder: 'Type something…' },
};

export const WithValue: Story = {
  args: { label: 'Bio', defaultValue: "I'm a product designer based in…" },
};

export const Required: Story = {
  args: { label: 'Description', placeholder: 'Required field', required: true },
};

export const Disabled: Story = {
  args: { label: 'Notes', defaultValue: 'These notes are read-only.', disabled: true },
};

export const AlertState: Story = {
  name: 'Alert (validation error)',
  args: {
    label: 'Message',
    defaultValue: '',
    alertMessage: 'This field is required.',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
      <Textarea label="Default" placeholder="Placeholder text" />
      <Textarea label="With value" defaultValue="Some entered content here." />
      <Textarea label="Required" placeholder="Required field" required />
      <Textarea label="Disabled" defaultValue="Cannot be edited." disabled />
      <Textarea label="Alert" alertMessage="This field is required." />
    </div>
  ),
};
