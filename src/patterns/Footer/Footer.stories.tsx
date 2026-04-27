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
    <span style={{ fontFamily: 'var(--ds-font-family-display)', fontWeight: 700, fontSize: 24, color: 'var(--ds-text-primary)' }}>
      datmos
    </span>
  </a>
);

const columns = [
  {
    heading: 'Support',
    links: [
      { label: 'My Account', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Return Policy', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Dealer Locator', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Rewards', href: '#' },
      { label: 'Wholesale Login', href: '#' },
      { label: 'Pro Program', href: '#' },
      { label: 'Partnerships', href: '#' },
    ],
  },
];

const socialLinks = [
  { name: 'Instagram' as const, href: '#' },
  { name: 'Facebook' as const, href: '#' },
  { name: 'X Twitter' as const, href: '#' },
  { name: 'Youtube' as const, href: '#' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Accessibility', href: '#' },
];

const sharedArgs = {
  logo: <Logo />,
  columns,
  socialLinks,
  legalText: '©2025 The ZaneRay Group',
  legalLinks,
};

export const Default: Story = {
  name: 'Dark (Default)',
  args: {
    ...sharedArgs,
    theme: 'dark',
  },
};

export const Light: Story = {
  args: {
    ...sharedArgs,
    theme: 'light',
  },
};
