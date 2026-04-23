/**
 * Figma Code Connect — SocialIcon (Icon/Social)
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 23919:10
 *
 * Variant mapping:
 *   Figma "name" → React "name"  (exact string match)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { SocialIcon } from './SocialIcon';

figma.connect(
  SocialIcon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23919-10',
  {
    props: {
      name: figma.enum('name', {
        'TikTok': 'TikTok',
        'Pinterest': 'Pinterest',
        'Youtube': 'Youtube',
        'Google': 'Google',
        'X Twitter': 'X Twitter',
        'Facebook': 'Facebook',
        'LinkedIn': 'LinkedIn',
        'Instagram': 'Instagram',
      }),
    },
    example: ({ name }) => (
      <SocialIcon name={name} />
    ),
  },
);
