/**
 * Figma Code Connect — Button
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 1584:19494
 *
 * Variant mapping:
 *   Figma "Type"  → React "variant"  (Primary→primary, Secondary→secondary, Tertiary→tertiary)
 *   Figma "Size"  → React "size"     (Large→lg, Medium (Default)→md, Small→sm)
 *   Figma "Text"  → React "label"
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=1584-19494',
  {
    props: {
      variant: figma.enum('Type', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
      }),
      size: figma.enum('Size', {
        Large: 'lg',
        'Medium (Default)': 'md',
        Small: 'sm',
      }),
      label: figma.string('Text'),
    },
    example: ({ variant, size, label }) => (
      <Button variant={variant} size={size} label={label} />
    ),
  },
);
