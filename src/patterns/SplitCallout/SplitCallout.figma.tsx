/**
 * Figma Code Connect — SplitCallout
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4712:4291 (SplitCallout)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { SplitCallout } from './SplitCallout';

figma.connect(
  SplitCallout,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4712-4291',
  {
    example: () => (
      <SplitCallout
        image="https://placehold.co/800x600"
        imageAlt="Campaign image"
        headline="Bold statement headline"
        body="A short compelling description that supports the headline and drives action."
        primaryButtonLabel="Discover more"
        primaryButtonHref="#"
      />
    ),
  },
);
