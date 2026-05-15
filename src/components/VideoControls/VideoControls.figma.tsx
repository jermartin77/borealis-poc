/**
 * Figma Code Connect — VideoControls
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 13753:6478 (Button/Video Controls)
 *
 * Variant mapping:
 *   Figma "State"  → React "state"  (Playing→playing, Paused→paused)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { VideoControls } from './VideoControls';

figma.connect(
  VideoControls,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=13753-6478',
  {
    props: {
      state: figma.enum('State', {
        Playing: 'playing',
        Paused: 'paused',
      }),
    },
    example: ({ state }) => <VideoControls state={state} />,
  },
);
