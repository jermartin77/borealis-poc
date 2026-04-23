import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const Trigger = () => (
  <button style={{
    padding: '8px 16px',
    border: '1px solid var(--ds-border-secondary)',
    borderRadius: 'var(--ds-radius-md)',
    background: 'none',
    color: 'var(--ds-text-primary)',
    cursor: 'pointer',
    fontFamily: 'var(--ds-font-family-text)',
  }}>
    Hover me
  </button>
);

export const Above: Story = {
  args: { content: 'Hover for more info', arrowHorizontal: 'middle', arrowVertical: 'bottom' },
  render: (args) => <Tooltip {...args}><Trigger /></Tooltip>,
};

export const Below: Story = {
  args: { content: 'Hover for more info', arrowHorizontal: 'middle', arrowVertical: 'top' },
  render: (args) => <Tooltip {...args}><Trigger /></Tooltip>,
};

export const AllPositions: Story = {
  name: 'All Positions',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: 32, placeItems: 'center', padding: 64 }}>
      {(['left', 'middle', 'right'] as const).flatMap(h =>
        (['top', 'bottom'] as const).map(v => (
          <Tooltip key={`${h}-${v}`} content={`${h} / ${v}`} arrowHorizontal={h} arrowVertical={v}>
            <button style={{ padding: '6px 12px', border: '1px solid var(--ds-border-secondary)', borderRadius: 4, cursor: 'pointer', background: 'none', color: 'var(--ds-text-primary)' }}>
              {h}/{v}
            </button>
          </Tooltip>
        ))
      )}
    </div>
  ),
};
