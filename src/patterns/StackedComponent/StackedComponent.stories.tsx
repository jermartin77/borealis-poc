import type { Meta, StoryObj } from '@storybook/react-vite';
import { StackedComponent } from './StackedComponent';
import { Blurb } from '../Blurb/Blurb';

const meta: Meta<typeof StackedComponent> = {
  title: 'Components/StackedComponent',
  component: StackedComponent,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    theme: { control: 'radio', options: [undefined, 'light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof StackedComponent>;

const SampleBlurb = ({ theme }: { theme?: 'light' | 'dark' }) => (
  <Blurb
    heading="This is a headline"
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    showEyebrow
    eyebrow="Eyebrow"
    showPrimaryButton
    showSecondaryButton
    theme={theme}
  />
);

export const Default: Story = {
  args: { size: 'md' },
  render: (args) => (
    <StackedComponent {...args}>
      <SampleBlurb />
    </StackedComponent>
  ),
};

export const Dark: Story = {
  args: { size: 'md', theme: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
  render: (args) => (
    <StackedComponent {...args}>
      <SampleBlurb theme="dark" />
    </StackedComponent>
  ),
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => (
    <div>
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <StackedComponent key={size} size={size} style={{ background: 'var(--ds-background-secondary)' }}>
          <div style={{ background: 'var(--ds-background-primary)', padding: '16px 24px', borderRadius: 'var(--ds-radius-md)' }}>
            <p style={{ margin: 0, fontFamily: 'var(--ds-font-family-text)', fontWeight: 700, color: 'var(--ds-text-primary)' }}>
              Size: {size}
            </p>
            <p style={{ margin: '4px 0 0', fontFamily: 'var(--ds-font-family-text)', fontSize: 12, color: 'var(--ds-text-secondary)' }}>
              padding-block: {size === 'sm' ? '32px → 64px' : size === 'md' ? '48px → 96px' : '56px → 112px'}
            </p>
          </div>
        </StackedComponent>
      ))}
    </div>
  ),
};

export const SameThemeStacking: Story = {
  name: 'Same-Theme Stacking (padding collapsed)',
  render: () => (
    <div style={{ background: 'var(--ds-background-secondary)' }}>
      <StackedComponent size="md">
        <SampleBlurb />
      </StackedComponent>
      <StackedComponent size="md">
        <SampleBlurb />
      </StackedComponent>
      <StackedComponent size="md">
        <SampleBlurb />
      </StackedComponent>
    </div>
  ),
};

export const MixedThemeStacking: Story = {
  name: 'Mixed-Theme Stacking (padding preserved at boundary)',
  render: () => (
    <div>
      <StackedComponent size="md">
        <SampleBlurb />
      </StackedComponent>
      <StackedComponent size="md" theme="dark">
        <SampleBlurb theme="dark" />
      </StackedComponent>
      <StackedComponent size="md">
        <SampleBlurb />
      </StackedComponent>
    </div>
  ),
};
