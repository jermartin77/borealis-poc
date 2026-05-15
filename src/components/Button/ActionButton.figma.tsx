/**
 * Figma Code Connect — ActionButton
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4670:2764 (Button/Action)
 *
 * Variant mapping:
 *   Figma "Type"  → React "variant"  (Primary→primary, Secondary→secondary)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { ActionButton } from './ActionButton';
import { Icon } from '../Icon/Icon';

figma.connect(
  ActionButton,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4670-2764',
  {
    props: {
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
      }),
    },
    example: ({ variant }) => (
      <ActionButton
        variant={variant}
        icon={<Icon name="arrow-right" size={20} />}
        aria-label="Action"
      />
    ),
  },
);
