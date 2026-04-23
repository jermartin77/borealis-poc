/**
 * Figma Code Connect — StatusIcon (Icon/Small)
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1643:1936
 *
 * Variant mapping:
 *   Figma "name" → React "name"
 *     "Alert"        → "alert"
 *     "Check Circle" → "check-circle"
 *     "Info"         → "info"
 *     "Warning"      → "warning"
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { StatusIcon } from './StatusIcon';

figma.connect(
  StatusIcon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1643-1936',
  {
    props: {
      name: figma.enum('name', {
        'Alert': 'alert',
        'Check Circle': 'check-circle',
        'Info': 'info',
        'Warning': 'warning',
      }),
    },
    example: ({ name }) => (
      <StatusIcon name={name} />
    ),
  },
);
