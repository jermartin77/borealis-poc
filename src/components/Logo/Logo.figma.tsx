/**
 * Figma Code Connect — Logo
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1559:23841
 *
 * Variant mapping:
 *   Figma "Variant" → React "variant"  (Brand Mark→brand-mark, Full Logo→full-logo)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Logo } from './Logo';

figma.connect(
  Logo,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1559-23841',
  {
    props: {
      variant: figma.enum('Type', {
        'Brand Mark': 'brand-mark',
        'Full Logo': 'full-logo',
      }),
    },
    example: ({ variant }) => (
      <Logo variant={variant} />
    ),
  },
);
