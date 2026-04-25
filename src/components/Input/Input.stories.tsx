import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, SearchInput } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@example.com' },
};

export const WithValue: Story = {
  args: { label: 'Email address', defaultValue: 'hello@borealis.com' },
};

export const Required: Story = {
  args: { label: 'First name', placeholder: 'Jane', required: true },
};

export const Disabled: Story = {
  args: { label: 'Email address', defaultValue: 'hello@borealis.com', disabled: true },
};

export const AlertState: Story = {
  name: 'Alert (validation error)',
  args: {
    label: 'Email address',
    defaultValue: 'not-an-email',
    alertMessage: 'Please enter a valid email address.',
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <Input
        label="Search"
        placeholder="Search products…"
        iconLeft="search"
      />
      <Input
        label="Email"
        placeholder="you@example.com"
        iconLeft="mail"
      />
      <Input
        label="Location"
        placeholder="Enter location"
        iconRight="map-pin"
      />
    </div>
  ),
};

export const SearchStory: StoryObj<typeof SearchInput> = {
  name: 'Search Input',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <SearchInput placeholder="Search products…" />
      <SearchInput defaultValue="jacket" />
      <SearchInput placeholder="Search products…" disabled />
    </div>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Input label="Default" placeholder="Placeholder text" />
      <Input label="With value" defaultValue="Entered value" />
      <Input label="Disabled" defaultValue="Disabled value" disabled />
      <Input label="Alert" defaultValue="bad-input" alertMessage="This field is required." />
    </div>
  ),
};
