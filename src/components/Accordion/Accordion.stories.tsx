import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Design System/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Closed: Story = {
  args: {
    header: 'What is your return policy?',
    children: 'We offer a 30-day return policy on all unused items in original packaging. Simply contact our support team to initiate a return.',
  },
};

export const Open: Story = {
  args: {
    header: 'What is your return policy?',
    children: 'We offer a 30-day return policy on all unused items in original packaging. Simply contact our support team to initiate a return.',
    defaultOpen: true,
  },
};

export const StackedGroup: Story = {
  name: 'Stacked group',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 560 }}>
      <Accordion header="What is your return policy?">
        We offer a 30-day return policy on all unused items in original packaging.
      </Accordion>
      <Accordion header="How long does shipping take?" defaultOpen>
        Standard shipping takes 5–7 business days. Express options are available at checkout.
      </Accordion>
      <Accordion header="Do you offer international shipping?">
        Yes, we ship to over 50 countries. International shipping rates and times vary by destination.
      </Accordion>
    </div>
  ),
};
