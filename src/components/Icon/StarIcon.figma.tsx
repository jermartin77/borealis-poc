/**
 * Figma Code Connect — StarIcon (Icon/Review Stars)
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 23963:27398
 *
 * Variant mapping:
 *   Figma "property1" → React "variant"
 *     "star"       → "empty"
 *     "Star Half"  → "half"
 *     "Star Full"  → "full"
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { StarIcon } from './StarIcon';

figma.connect(
  StarIcon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23963-27398',
  {
    props: {
      variant: figma.enum('property1', {
        'star': 'empty',
        'Star Half': 'half',
        'Star Full': 'full',
      }),
    },
    example: ({ variant }) => (
      <StarIcon variant={variant} />
    ),
  },
);
