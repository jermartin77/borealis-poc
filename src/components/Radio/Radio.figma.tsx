/**
 * Figma Code Connect — Radio
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1574:20094 (Radio Button)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Radio } from './Radio';

figma.connect(
  Radio,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1574-20094',
  {
    example: () => <Radio label="Option A" name="example-group" />,
  },
);
