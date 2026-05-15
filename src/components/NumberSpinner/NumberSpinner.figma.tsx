/**
 * Figma Code Connect — NumberSpinner
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 3788:2727 (Inpout/Number Spinner)
 *
 * Variant mapping:
 *   Figma "Size"  → React "size"  (Medium (Default)→md, Small→sm)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { NumberSpinner } from './NumberSpinner';

figma.connect(
  NumberSpinner,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=3788-2727',
  {
    props: {
      size: figma.enum('Size', {
        'Medium (Default)': 'md',
        Small: 'sm',
      }),
    },
    example: ({ size }) => (
      <NumberSpinner label="Quantity" defaultValue={1} min={1} max={99} size={size} />
    ),
  },
);
