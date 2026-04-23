import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = { args: { label: 'Accept terms and conditions' } };
export const Checked: Story = { args: { label: 'Receive marketing emails', defaultChecked: true } };
export const Indeterminate: Story = { args: { label: 'Select all', indeterminate: true } };
export const Disabled: Story = { args: { label: 'Unavailable option', disabled: true } };
export const DisabledChecked: Story = { args: { label: 'Locked selection', disabled: true, defaultChecked: true } };
export const Alert: Story = { args: { label: 'You must accept to continue', isAlert: true } };

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled + Checked" disabled defaultChecked />
      <Checkbox label="Alert state" isAlert />
    </div>
  ),
};
