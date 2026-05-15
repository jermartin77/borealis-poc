/**
 * Figma Code Connect — PlayButton
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 13753:6469 (Play Button)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { PlayButton } from './PlayButton';

figma.connect(
  PlayButton,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=13753-6469',
  {
    example: () => <PlayButton aria-label="Play video" />,
  },
);
