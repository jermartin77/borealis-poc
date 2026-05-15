/**
 * Figma Code Connect — CollectionCard
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4718:7164 (CollectionCard)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { CollectionCard } from './CollectionCard';

figma.connect(
  CollectionCard,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4718-7164',
  {
    example: () => (
      <CollectionCard
        image="https://placehold.co/400x500"
        imageAlt="Collection category"
        title="Jackets"
        description="Explore the full range"
        href="#"
      />
    ),
  },
);
