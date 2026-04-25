import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberSpinner } from './NumberSpinner';

const meta: Meta<typeof NumberSpinner> = {
  title: 'Components/NumberSpinner',
  component: NumberSpinner,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<typeof NumberSpinner>;

export const Default: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 0,
  },
};

export const Small: Story = {
  args: {
    label: 'Quantity',
    size: 'sm',
    defaultValue: 0,
  },
};

export const WithMinMax: Story = {
  name: 'With Min / Max',
  args: {
    label: 'Quantity',
    defaultValue: 1,
    min: 0,
    max: 10,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 3,
    disabled: true,
  },
};

export const Alert: Story = {
  args: {
    label: 'Quantity',
    defaultValue: 0,
    alertMessage: 'Please select at least 1 item.',
  },
};

export const NoLabel: Story = {
  name: 'No Label',
  args: {
    showLabel: false,
    defaultValue: 0,
  },
};
