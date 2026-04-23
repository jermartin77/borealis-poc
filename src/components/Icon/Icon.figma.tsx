/**
 * Figma Code Connect — Icon
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 23963:26822
 *
 * Variant mapping:
 *   Figma "icon" prop (kebab-case Lucide names) → React "name" prop
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Icon } from './Icon';

figma.connect(
  Icon,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=23963-26822',
  {
    props: {
      name: figma.enum('icon', {
        'arrow-down': 'arrow-down',
        'arrow-left': 'arrow-left',
        'arrow-right': 'arrow-right',
        'arrow-up': 'arrow-up',
        'bookmark': 'bookmark',
        'calendar': 'calendar',
        'check': 'check',
        'chevron-down': 'chevron-down',
        'chevron-left': 'chevron-left',
        'chevron-right': 'chevron-right',
        'chevron-up': 'chevron-up',
        'circle': 'circle',
        'circle-alert': 'circle-alert',
        'circle-check': 'circle-check',
        'download': 'download',
        'funnel': 'funnel',
        'handbag': 'handbag',
        'info': 'info',
        'mail': 'mail',
        'map-pin': 'map-pin',
        'menu': 'menu',
        'minus': 'minus',
        'plus': 'plus',
        'search': 'search',
        'send': 'send',
        'settings': 'settings',
        'settings-2': 'settings-2',
        'shopping-cart': 'shopping-cart',
        'sparkles': 'sparkles',
        'square-arrow-out-up-right': 'square-arrow-out-up-right',
        'tag': 'tag',
        'trash-2': 'trash-2',
        'triangle-alert': 'triangle-alert',
        'user': 'user',
        'x': 'x',
        'zoom-in': 'zoom-in',
        'zoom-out': 'zoom-out',
      }),
    },
    example: ({ name }) => (
      <Icon name={name} />
    ),
  },
);
