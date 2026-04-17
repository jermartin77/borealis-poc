/**
 * Figma Code Connect — Icon
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 23919:10
 *
 * Variant mapping:
 *   Figma "Name" → React "name"  (exact string match, e.g. "Account" → "Account")
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Icon } from './Icon';

figma.connect(
  Icon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23919-10',
  {
    props: {
      name: figma.enum('Name', {
        'Account': 'Account',
        'Share': 'Share',
        'Bag': 'Bag',
        'Pin': 'Pin',
        'Envelope': 'Envelope',
        'Zoom In': 'Zoom In',
        'Zoom Out': 'Zoom Out',
        'Calendar': 'Calendar',
        'Settings': 'Settings',
        'Camera': 'Camera',
        'Gear': 'Gear',
        'Tag': 'Tag',
        'Trash': 'Trash',
        'Star Full': 'Star Full',
        'Star Half': 'Star Half',
        'Star Empty': 'Star Empty',
        'Download': 'Download',
        'Filter': 'Filter',
        'Placeholder': 'Placeholder',
        'Lightning': 'Lightning',
        'Arrow Down': 'Arrow Down',
        'Arrow Left': 'Arrow Left',
        'Arrow Up': 'Arrow Up',
        'Arrow Right': 'Arrow Right',
        'Plus': 'Plus',
        'Minus': 'Minus',
        'Caret Down': 'Caret Down',
        'Caret Left': 'Caret Left',
        'Caret Up': 'Caret Up',
        'Caret Right': 'Caret Right',
        'Check': 'Check',
        'X': 'X',
        'Menu': 'Menu',
        'Search': 'Search',
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
      <Icon name={name} />
    ),
  },
);
