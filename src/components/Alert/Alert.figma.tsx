/**
 * Figma Code Connect — Alert
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1429:26271 (Alert)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Alert } from './Alert';

figma.connect(
  Alert,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1429-26271',
  {
    props: {
      style: figma.enum('Style', {
        Default: 'default',
        Error: 'error',
        Success: 'success',
      }),
    },
    example: ({ style }) => (
      <Alert
        style={style}
        headline="Alert headline"
        caption="Supporting detail text goes here."
      />
    ),
  },
);
