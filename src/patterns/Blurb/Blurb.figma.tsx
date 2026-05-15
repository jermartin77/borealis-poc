/**
 * Figma Code Connect — Blurb
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1873:1595 (Blurb)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Blurb } from './Blurb';

figma.connect(
  Blurb,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1873-1595',
  {
    example: () => (
      <Blurb
        eyebrow="Category"
        heading="Section headline goes here"
        body="Supporting body copy that describes this section in more detail."
        primaryButtonLabel="Shop now"
        primaryButtonHref="#"
      />
    ),
  },
);
