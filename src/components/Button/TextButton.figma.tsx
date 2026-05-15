/**
 * Figma Code Connect — TextButton
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1278:23034 (Text Button)
 *
 * Variant mapping:
 *   Figma "Size"  → React "size"  (Large→lg, Medium (Default)→md, Small→sm)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { TextButton } from './TextButton';

figma.connect(
  TextButton,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1278-23034',
  {
    props: {
      size: figma.enum('Size', {
        Large: 'lg',
        'Medium (Default)': 'md',
        Small: 'sm',
      }),
    },
    example: ({ size }) => (
      <TextButton label="Learn more" size={size} rightIcon="arrow-right" />
    ),
  },
);
