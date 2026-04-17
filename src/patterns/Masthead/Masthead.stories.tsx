import type { Meta, StoryObj } from '@storybook/react-vite';
import { Masthead } from './Masthead';
import { Button } from '../../components/Button/Button';

const meta: Meta<typeof Masthead> = {
  title: 'Patterns/Masthead',
  component: Masthead,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Masthead>;

const Logo = () => (
  <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <span style={{ fontFamily: 'var(--ds-font-family-display)', fontWeight: 600, fontSize: 20, color: 'var(--ds-foreground-primary)' }}>
      Borealis
    </span>
  </a>
);

const navItems = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'Journal', href: '#journal' },
  { label: 'About', href: '#about' },
];

const Actions = () => (
  <>
    <Button variant="tertiary" size="sm" label="Sign in" />
    <Button variant="primary" size="sm" label="Cart (0)" />
  </>
);

export const Default: Story = {
  args: {
    logo: <Logo />,
    navItems,
    actions: <Actions />,
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};
