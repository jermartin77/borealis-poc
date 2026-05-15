/**
 * Figma Code Connect — ProductCard
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1603:20030 (ProductCard)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { ProductCard } from './ProductCard';

figma.connect(
  ProductCard,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1603-20030',
  {
    example: () => (
      <ProductCard
        image="https://placehold.co/400x500"
        imageAlt="Product image"
        title="Essential Trail Jacket"
        price="$189"
        badge="New"
        badgeStyle="feature"
        href="#"
      />
    ),
  },
);
