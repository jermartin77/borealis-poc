/**
 * Figma Code Connect — BlogCard
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4762:4410 (BlogCard)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { BlogCard } from './BlogCard';

figma.connect(
  BlogCard,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4762-4410',
  {
    example: () => (
      <BlogCard
        image="https://placehold.co/800x500"
        imageAlt="Blog post cover"
        title="How to choose the right gear for every adventure"
        date="May 12, 2025"
        author="Borealis Team"
        href="#"
      />
    ),
  },
);
