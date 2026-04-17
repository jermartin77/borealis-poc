import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Patterns/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

const Logo = () => (
  <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
    <span style={{ fontFamily: 'var(--ds-font-family-display)', fontWeight: 600, fontSize: 20, color: 'var(--ds-foreground-primary)' }}>
      Borealis
    </span>
  </a>
);

const columns = [
  {
    heading: 'Shop',
    links: [
      { label: 'All products', href: '#' },
      { label: 'New arrivals', href: '#' },
      { label: 'Best sellers', href: '#' },
      { label: 'Sale', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Sustainability', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { label: 'FAQ', href: '#' },
      { label: 'Shipping & returns', href: '#' },
      { label: 'Contact us', href: '#' },
      { label: 'Privacy policy', href: '#' },
    ],
  },
];

export const Default: Story = {
  args: {
    logo: <Logo />,
    columns,
    legalText: '© 2025 Borealis. All rights reserved.',
    socialLinks: [
      { label: 'Instagram', href: '#' },
      { label: 'Pinterest', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
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
