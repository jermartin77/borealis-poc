/**
 * Figma Code Connect — Accordion
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1608:20086 (Accordion)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Accordion } from './Accordion';

figma.connect(
  Accordion,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1608-20086',
  {
    props: {
      defaultOpen: figma.enum('Open', {
        Yes: true,
        No: false,
      }),
    },
    example: ({ defaultOpen }) => (
      <Accordion header="Accordion heading" defaultOpen={defaultOpen}>
        <p>Accordion body content goes here.</p>
      </Accordion>
    ),
  },
);
