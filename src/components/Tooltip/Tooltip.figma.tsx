/**
 * Figma Code Connect — Tooltip
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1408:23786 (Tooltip)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Tooltip } from './Tooltip';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1408-23786',
  {
    example: () => (
      <Tooltip content="Helpful tooltip text" arrowHorizontal="middle" arrowVertical="bottom">
        <button type="button">Hover me</button>
      </Tooltip>
    ),
  },
);
