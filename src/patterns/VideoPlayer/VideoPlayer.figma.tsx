/**
 * Figma Code Connect — VideoPlayer
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4764:7219 (VideoPlayer)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { VideoPlayer } from './VideoPlayer';

figma.connect(
  VideoPlayer,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4764-7219',
  {
    example: () => (
      <VideoPlayer
        src="https://example.com/video.mp4"
        poster="https://placehold.co/1280x720"
      />
    ),
  },
);
