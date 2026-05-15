/**
 * Figma Code Connect — ImageWithText
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4681:4606 (ImageWithText)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { ImageWithText } from './ImageWithText';

figma.connect(
  ImageWithText,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4681-4606',
  {
    example: () => (
      <ImageWithText
        image="https://placehold.co/800x600"
        imageAlt="Product lifestyle image"
        headline="Crafted for the everyday"
        body="Timeless design meets modern performance. Explore the collection."
        primaryButtonLabel="Shop now"
        primaryButtonHref="#"
      />
    ),
  },
);
