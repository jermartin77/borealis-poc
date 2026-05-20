/**
 * Figma Code Connect — HeroBanner
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4718:5880 (HeroBanner)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { HeroBanner } from './HeroBanner';

figma.connect(
  HeroBanner,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4718-5880',
  {
    example: () => (
      <HeroBanner
        image="https://placehold.co/1440x800"
        imageAlt="Hero banner"
        eyebrow="New collection"
        headline="The future of outdoor gear"
        subheadline="Engineered for performance. Designed for life."
        showEyebrow
        showSubheadline
        showCta
        showSecondaryCta
        ctaLabel="Shop now"
        ctaSecondaryLabel="Learn more"
      />
    ),
  },
);
