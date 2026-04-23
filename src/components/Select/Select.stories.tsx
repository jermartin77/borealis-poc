import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const COUNTRY_OPTIONS = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  args: {
    label: 'Country',
    placeholder: 'Select a country',
    options: COUNTRY_OPTIONS,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const Required: Story = {
  args: { required: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AlertState: Story = {
  name: 'Alert (validation error)',
  args: { alertMessage: 'Please select a country.' },
};

export const NoLabel: Story = {
  name: 'No Label',
  args: { showLabel: false },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
      <Select label="Default" placeholder="Select a country" options={COUNTRY_OPTIONS} />
      <Select label="Required" placeholder="Select a country" options={COUNTRY_OPTIONS} required />
      <Select label="Disabled" options={COUNTRY_OPTIONS} defaultValue="us" disabled />
      <Select label="Alert" options={COUNTRY_OPTIONS} alertMessage="Please select a country." />
    </div>
  ),
};
