/**
 * Figma Code Connect — ProductCardBadge
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 13758:12506 (ProductCardBadge)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { ProductCardBadge } from './ProductCardBadge';

figma.connect(
  ProductCardBadge,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=13758-12506',
  {
    props: {
      style: figma.enum('Style', {
        Feature: 'feature',
        Sale: 'sale',
      }),
    },
    example: ({ style }) => <ProductCardBadge style={style}>New Arrival</ProductCardBadge>,
  },
);
