import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'radio', options: ['full', 'xl', 'lg', 'md', 'sm', 'xs'] },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

const Box = ({ label, maxWidth }: { label: string; maxWidth: string }) => (
  <div style={{ background: 'var(--ds-background-brand-subtle)', borderRadius: 'var(--ds-radius-md)', padding: '16px 24px' }}>
    <p style={{ margin: 0, fontFamily: 'var(--ds-font-family-text)', fontSize: 14, fontWeight: 700, color: 'var(--ds-text-primary)' }}>{label}</p>
    <p style={{ margin: '4px 0 0', fontFamily: 'var(--ds-font-family-text)', fontSize: 12, color: 'var(--ds-text-secondary)' }}>{maxWidth}</p>
  </div>
);

export const AllSizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div style={{ background: 'var(--ds-background-secondary)', paddingBlock: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Container size="xl"><Box label="XL" maxWidth="max-width: 1680px" /></Container>
      <Container size="lg"><Box label="LG" maxWidth="max-width: 1440px" /></Container>
      <Container size="md"><Box label="MD" maxWidth="max-width: 1280px" /></Container>
      <Container size="sm"><Box label="SM" maxWidth="max-width: 720px" /></Container>
      <Container size="xs"><Box label="XS" maxWidth="max-width: 420px" /></Container>
      <Container size="full"><Box label="Full" maxWidth="no max-width" /></Container>
    </div>
  ),
};

export const Default: Story = {
  args: {
    size: 'xl',
    children: <Box label="Container" maxWidth="max-width: 1680px" />,
  },
};
