/**
 * Figma Code Connect — Badge
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1281:1741 (Badge)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Badge } from './Badge';

figma.connect(
  Badge,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1281-1741',
  {
    props: {
      color: figma.enum('Color', {
        Primary: 'primary',
        Neutral: 'neutral',
        Stroked: 'stroked',
      }),
    },
    example: ({ color }) => <Badge color={color}>New</Badge>,
  },
);
