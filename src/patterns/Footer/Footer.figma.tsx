/**
 * Figma Code Connect — Footer
 *
 * Figma file: https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC
 * Component node: 4770:8788 (Footer)
 *
 * Publish: FIGMA_ACCESS_TOKEN=<token> npm run figma:connect
 */

import figma from '@figma/code-connect';
import { Footer } from './Footer';

figma.connect(
  Footer,
  'https://www.figma.com/design/I6QFi7hLxmg1bRuA9VXAJv/Design-System-AI-POC?node-id=4770-8788',
  {
    example: () => (
      <Footer
        columns={[
          {
            heading: 'Shop',
            links: [
              { label: 'New Arrivals', href: '#' },
              { label: 'Best Sellers', href: '#' },
              { label: 'Sale', href: '#' },
            ],
          },
          {
            heading: 'Company',
            links: [
              { label: 'About', href: '#' },
              { label: 'Careers', href: '#' },
              { label: 'Contact', href: '#' },
            ],
          },
        ]}
        socialLinks={[
          { name: 'Instagram', href: '#' },
          { name: 'Facebook', href: '#' },
        ]}
        legalLinks={[
          { label: 'Privacy Policy', href: '#' },
          { label: 'Terms of Service', href: '#' },
        ]}
        legalText="© 2025 Borealis. All rights reserved."
      />
    ),
  },
);
