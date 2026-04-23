/**
 * Figma Code Connect — PlayerIcon (Icon/Player)
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4764:7212
 *
 * Variant mapping:
 *   Figma "name"  → React "name"   ("Pause" → "pause", "Play" → "play")
 *   Figma "style" → React "style"  ("Stroked" → "stroked", "Solid" → "solid")
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { PlayerIcon } from './PlayerIcon';

figma.connect(
  PlayerIcon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4764-7212',
  {
    props: {
      name: figma.enum('name', {
        'Play': 'play',
        'Pause': 'pause',
      }),
      style: figma.enum('style', {
        'Stroked': 'stroked',
        'Solid': 'solid',
      }),
    },
    example: ({ name, style }) => (
      <PlayerIcon name={name} iconStyle={style} />
    ),
  },
);
