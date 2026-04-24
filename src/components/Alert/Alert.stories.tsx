import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    style: { control: 'radio', options: ['default', 'error', 'success'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { style: 'default', headline: 'Your changes have been saved.' },
};

export const Error: Story = {
  args: { style: 'error', headline: 'Something went wrong. Please try again.' },
};

export const Success: Story = {
  args: { style: 'success', headline: 'Order placed successfully!' },
};

export const WithCaption: Story = {
  args: {
    style: 'default',
    headline: 'Heads up',
    caption: 'This action cannot be undone once confirmed.',
  },
};

export const WithButton: Story = {
  args: {
    style: 'error',
    headline: 'Payment failed.',
    caption: 'Please update your payment method.',
    showButton: true,
    buttonLabel: 'Update payment',
  },
};

export const Dismissible: Story = {
  args: {
    style: 'success',
    headline: 'Subscribed to newsletter.',
    showClose: true,
    onClose: () => {},
  },
};

export const AllStyles: Story = {
  name: 'All Styles',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      <Alert style="default" headline="Your changes have been saved." />
      <Alert style="error" headline="Something went wrong. Please try again." />
      <Alert style="success" headline="Order placed successfully!" />
    </div>
  ),
};

