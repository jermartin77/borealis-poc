/**
 * Figma Code Connect — ColorSwatch
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 10096:40281 (ColorSwatch)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { ColorSwatch } from './ColorSwatch';

figma.connect(
  ColorSwatch,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=10096-40281',
  {
    example: () => <ColorSwatch color="#2563eb" aria-label="Blue" />,
  },
);
