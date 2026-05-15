/**
 * Figma Code Connect — Masthead
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1647:1507 (Masthead)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Masthead } from './Masthead';

figma.connect(
  Masthead,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1647-1507',
  {
    example: () => (
      <Masthead
        navItems={[
          { label: 'Shop', href: '#' },
          { label: 'Collections', href: '#' },
          { label: 'About', href: '#' },
        ]}
        cartCount={2}
        cartHref="#"
      />
    ),
  },
);
