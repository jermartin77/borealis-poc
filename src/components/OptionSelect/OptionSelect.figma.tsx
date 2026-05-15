/**
 * Figma Code Connect — OptionSelect
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 10096:40268 (OptionSelect)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { OptionSelect } from './OptionSelect';

figma.connect(
  OptionSelect,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=10096-40268',
  {
    props: {
      selected: figma.boolean('Selected'),
      soldOut: figma.boolean('Sold Out'),
    },
    example: ({ selected, soldOut }) => (
      <OptionSelect label="Medium" selected={selected} soldOut={soldOut} />
    ),
  },
);
