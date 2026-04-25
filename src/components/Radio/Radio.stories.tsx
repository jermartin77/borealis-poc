import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = { args: { label: 'Option A' } };
export const Checked: Story = { args: { label: 'Option A', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Unavailable option', disabled: true } };
export const DisabledChecked: Story = { args: { label: 'Locked selection', disabled: true, defaultChecked: true } };
export const Alert: Story = { args: { label: 'Please select an option', isAlert: true } };

export const Group: Story = {
  name: 'Radio Group',
  render: () => (
    <fieldset style={{ border: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <legend style={{ fontFamily: 'var(--ds-font-family-display)', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>Delivery method</legend>
      <Radio label="Standard (3–5 days)" name="delivery" defaultChecked />
      <Radio label="Express (1–2 days)" name="delivery" />
      <Radio label="Same day" name="delivery" disabled />
    </fieldset>
  ),
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Radio label="Default" />
      <Radio label="Checked" defaultChecked />
      <Radio label="Alert" isAlert />
      <Radio label="Disabled" disabled />
      <Radio label="Disabled + Checked" disabled defaultChecked />
    </div>
  ),
};
