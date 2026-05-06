/**
 * Figma Code Connect — BuyGrid
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 24260:9953
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { BuyGrid } from './BuyGrid';

figma.connect(
  BuyGrid,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=24260-9953',
  {
    example: () => (
      <BuyGrid
        title="Product name"
        price="$99.00"
        rating={4.5}
        reviewCount={128}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Category', href: '/category' },
        ]}
        colors={[
          { value: 'black', label: 'Black', color: '#1a1a1a' },
          { value: 'white', label: 'White', color: '#f5f5f5' },
        ]}
        sizes={[
          { value: 'xs', label: 'XS' },
          { value: 'sm', label: 'S' },
          { value: 'md', label: 'M' },
          { value: 'lg', label: 'L' },
        ]}
        accordions={[
          { header: 'Details', content: 'Product details here.' },
          { header: 'Shipping', content: 'Shipping information here.' },
        ]}
        onAddToCart={({ color, size }) => console.log('Add to cart', { color, size })}
      />
    ),
  },
);
