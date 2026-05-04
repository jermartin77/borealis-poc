import type { Meta, StoryObj } from '@storybook/react-vite';
import { OptionSelect } from './OptionSelect';

const meta: Meta<typeof OptionSelect> = {
  title: 'Components/OptionSelect',
  component: OptionSelect,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    selected: { control: 'boolean' },
    soldOut:  { control: 'boolean' },
    label:    { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof OptionSelect>;

export const Default: Story = {
  args: { label: 'S' },
};

export const Selected: Story = {
  args: { label: 'S', selected: true },
};

export const SoldOut: Story = {
  args: { label: 'S', soldOut: true },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <OptionSelect label="S" />
      <OptionSelect label="M" selected />
      <OptionSelect label="L" soldOut />
      <OptionSelect label="XL" />
      <OptionSelect label="XXL" soldOut />
    </div>
  ),
};

export const SizeRange: Story = {
  name: 'Full Size Range',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
        <OptionSelect key={size} label={size} soldOut={size === 'XS' || size === 'XXL'} selected={size === 'M'} />
      ))}
    </div>
  ),
};
