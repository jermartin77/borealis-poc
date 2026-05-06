/**
 * Figma Code Connect — PDPGallery
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 24260:10273
 *
 * Figma "Breakpoint" variant (screen-sm / screen-lg) is a layout preview only —
 * PDPGallery handles responsiveness via CSS, so no prop mapping is needed.
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { PDPGallery } from './PDPGallery';

figma.connect(
  PDPGallery,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=24260-10273',
  {
    example: () => (
      <PDPGallery
        images={[
          '/images/product-1.jpg',
          '/images/product-2.jpg',
          '/images/product-3.jpg',
          '/images/product-4.jpg',
        ]}
      />
    ),
  },
);
