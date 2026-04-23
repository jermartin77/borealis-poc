import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionButton } from './ActionButton';
import { Icon } from '../Icon/Icon';

const meta: Meta<typeof ActionButton> = {
  title: 'Design System/Action Button',
  component: ActionButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Icon-only square button. Size is responsive — 40×40px on mobile, 48×48px at 1024px+. ' +
          'Shares variant colors and base styles with Button. `aria-label` is required. ' +
          '[Figma component ↗](https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4670-2764)',
      },
    },
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    variant: 'primary',
    'aria-label': 'Go',
    icon: <Icon name="arrow-right" />,
  },
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['primary', 'secondary'] as const).map((variant) => (
        <>
          <ActionButton
            key={`${variant}-default`}
            variant={variant}
            aria-label={`${variant}`}
            icon={<Icon name="arrow-right" />}
          />
          <ActionButton
            key={`${variant}-disabled`}
            variant={variant}
            disabled
            aria-label={`${variant} disabled`}
            icon={<Icon name="arrow-right" />}
          />
        </>
      ))}
    </div>
  ),
};
