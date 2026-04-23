import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusIcon, type StatusIconName } from './StatusIcon';

const ALL_STATUS: StatusIconName[] = ['alert', 'check-circle', 'info', 'warning'];

const meta: Meta<typeof StatusIcon> = {
  title: 'Components/Icon/Status',
  component: StatusIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '4 semantic status icons at 16px — alert, check-circle, info, and warning. ' +
          'A constrained wrapper over the main Icon set. Color is inherited via `currentColor`. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23883-16658)',
      },
    },
  },
  argTypes: {
    name: { control: 'select', options: ALL_STATUS },
    size: { control: { type: 'range', min: 12, max: 32, step: 2 } },
  },
};

export default meta;
type Story = StoryObj<typeof StatusIcon>;

export const Default: Story = {
  args: { name: 'info', size: 16 },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {ALL_STATUS.map((name) => (
        <div
          key={name}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}
        >
          <StatusIcon name={name} size={16} />
          <span style={{ fontSize: 10, color: 'var(--ds-text-tertiary, #666)' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const SemanticColors: Story = {
  name: 'Semantic Colors',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span style={{ color: 'var(--ds-text-error)' }}><StatusIcon name="alert" size={16} /></span>
      <span style={{ color: 'var(--ds-text-success)' }}><StatusIcon name="check-circle" size={16} /></span>
      <span style={{ color: 'var(--ds-text-primary)' }}><StatusIcon name="info" size={16} /></span>
      <span style={{ color: 'var(--ds-text-warning)' }}><StatusIcon name="warning" size={16} /></span>
    </div>
  ),
};

export const InlineWithText: Story = {
  name: 'Inline with Text',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--ds-font-family-text)', fontSize: 14 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-text-error)' }}>
        <StatusIcon name="alert" size={16} /> Something went wrong
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-text-success)' }}>
        <StatusIcon name="check-circle" size={16} /> Changes saved
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-text-primary)' }}>
        <StatusIcon name="info" size={16} /> More info available
      </span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--ds-text-warning)' }}>
        <StatusIcon name="warning" size={16} /> Proceed with caution
      </span>
    </div>
  ),
};
