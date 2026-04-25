import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductCardBadge } from './ProductCardBadge';

const meta: Meta<typeof ProductCardBadge> = {
  title: 'Components/ProductCardBadge',
  component: ProductCardBadge,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof ProductCardBadge>;

export const Feature: Story = {
  args: {
    badgeStyle: 'feature',
    value: 'New',
  },
};

export const Sale: Story = {
  args: {
    badgeStyle: 'sale',
    value: 'Sale',
  },
};

export const CustomValue: Story = {
  name: 'Custom Value',
  args: {
    badgeStyle: 'feature',
    value: 'Limited',
  },
};

export const Both: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <ProductCardBadge badgeStyle="feature" value="New" />
      <ProductCardBadge badgeStyle="sale" value="Sale" />
    </div>
  ),
};
