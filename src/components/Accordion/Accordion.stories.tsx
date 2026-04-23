import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionGroup } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
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

export const Group: Story = {
  name: 'Accordion Group',
  render: () => (
    <div style={{ maxWidth: 480 }}>
      <AccordionGroup defaultOpenIndex={1}>
        <Accordion header="Materials">
          Cotton 80%, Polyester 20%. Machine wash cold, tumble dry low.
        </Accordion>
        <Accordion header="Shipping + Returns">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </Accordion>
        <Accordion header="Care Instructions">
          Hand wash recommended. Do not bleach. Iron on low heat.
        </Accordion>
      </AccordionGroup>
    </div>
  ),
};
