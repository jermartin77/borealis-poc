import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertBanner } from './Alert';

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
    showCaption: true,
  },
};

export const WithButton: Story = {
  args: {
    style: 'error',
    headline: 'Payment failed.',
    caption: 'Please update your payment method.',
    showCaption: true,
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

export const BannerDefault: Story = {
  name: 'Banner — Default',
  render: () => <AlertBanner type="default" message="Free shipping on orders over $75." showAction buttonLabel="Shop now" onButtonClick={() => {}} />,
};

export const BannerError: Story = {
  name: 'Banner — Error',
  render: () => <AlertBanner type="error" message="Your session has expired. Please sign in again." showAction buttonLabel="Sign in" />,
};

export const BannerSuccess: Story = {
  name: 'Banner — Success',
  render: () => <AlertBanner type="success" message="Your order has been confirmed." />,
};
