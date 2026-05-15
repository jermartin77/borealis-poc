/**
 * Figma Code Connect — Collection
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 24101:6618 (Collection)
 *
 * Variant mapping:
 *   Figma "Mode" → React "layout" (Scroll→scroll, Grid→grid)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Collection } from './Collection';
import { CollectionCard } from '../CollectionCard/CollectionCard';

figma.connect(
  Collection,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=24101-6618',
  {
    props: {
      layout: figma.enum('Mode', {
        Scroll: 'scroll',
        Grid: 'grid',
      }),
    },
    example: ({ layout }) => (
      <Collection title="Shop by category" layout={layout} ctaLabel="View all" ctaHref="#">
        <CollectionCard title="Jackets" href="#" />
        <CollectionCard title="Shirts" href="#" />
        <CollectionCard title="Pants" href="#" />
      </Collection>
    ),
  },
);
