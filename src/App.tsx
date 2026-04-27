import { useState } from 'react';
import { Button } from './components/Button/Button';
import { Logo } from './components/Logo/Logo';
import { Footer } from './patterns/Footer/Footer';
import { HeroBanner } from './patterns/HeroBanner/HeroBanner';
import heroVideo from './assets/video/hero-banner-animated.mp4';

// ─── Theme toggle ─────────────────────────────────────────────────────────────

type ThemeChoice = 'light' | 'dark';

function getSystemTheme(): ThemeChoice {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeChoice | null>(null);

  function toggle() {
    const current = theme ?? getSystemTheme();
    const next: ThemeChoice = current === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }

  const effectiveTheme = theme ?? getSystemTheme();

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${effectiveTheme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'none',
        border: '1px solid var(--ds-border-secondary)',
        borderRadius: 'var(--ds-radius-md)',
        padding: '8px 12px',
        cursor: 'pointer',
        color: 'var(--ds-text-secondary)',
        fontFamily: 'var(--ds-font-family-text)',
        fontSize: 12,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      {effectiveTheme === 'dark' ? '☀ Light' : '☾ Dark'}
    </button>
  );
}

// ─── Type scale data ──────────────────────────────────────────────────────────

const typeScale = [
  { slug: 'display-1',   label: 'Display/1',         sample: 'The quick brown fox' },
  { slug: 'display-2',   label: 'Display/2',         sample: 'The quick brown fox' },
  { slug: 'display-3',   label: 'Display/3',         sample: 'The quick brown fox' },
  { slug: 'display-4',   label: 'Display/4',         sample: 'The quick brown fox' },
  { slug: 'display-5',   label: 'Display/5',         sample: 'The quick brown fox' },
  { slug: 'display-6',   label: 'Display/6',         sample: 'The quick brown fox' },
  { slug: 'text-large-regular',  label: 'Text/Large/Regular',  sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-large-bold',     label: 'Text/Large/Bold',     sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-medium-regular', label: 'Text/Medium/Regular', sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-medium-bold',    label: 'Text/Medium/Bold',    sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-small-regular',  label: 'Text/Small/Regular',  sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-small-bold',     label: 'Text/Small/Bold',     sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-xsmall-regular', label: 'Text/XSmall/Regular', sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'text-xsmall-bold',    label: 'Text/XSmall/Bold',    sample: 'The quick brown fox jumps over the lazy dog' },
  { slug: 'eyebrow-large',  label: 'Eyebrow/Large',  sample: 'Section label' },
  { slug: 'eyebrow-medium', label: 'Eyebrow/Medium', sample: 'Section label' },
  { slug: 'blockquote',     label: 'Block Quote',    sample: '"Design is intelligence made visible."' },
  { slug: 'tag',            label: 'Tag',            sample: 'New arrival' },
  { slug: 'tooltip',        label: 'Tooltip',        sample: 'Hover for more info' },
  { slug: 'navigation-primary', label: 'Navigation/Primary', sample: 'Shop All' },
  { slug: 'footer-link',    label: 'Footer/Link',    sample: 'Privacy Policy' },
  { slug: 'footer-legal',   label: 'Footer/Legal',   sample: '© 2025 Borealis. All rights reserved.' },
] as const;

// ─── App ──────────────────────────────────────────────────────────────────────

const footerColumns = [
  {
    heading: 'Support',
    links: [
      { label: 'My Account', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Return Policy', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  {
    heading: 'About',
    links: [
      { label: 'Our Story', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Dealer Locator', href: '#' },
      { label: 'Partnerships', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Programs',
    links: [
      { label: 'Rewards', href: '#' },
      { label: 'Wholesale Login', href: '#' },
      { label: 'Pro Program', href: '#' },
      { label: 'Partnerships', href: '#' },
    ],
  },
];

function App() {
  return (
    <>
    <HeroBanner
      headline="Built for the Distance"
      eyebrow="New Season"
      subheadline="Performance apparel engineered for riders who go further."
      video={heroVideo}
      showEyebrow
      showSubheadline
      showCta
      showSecondaryCta
      ctaLabel="Shop Now"
      ctaSecondaryLabel="Learn More"
    />
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--ds-background-primary)', padding: '40px 48px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Logo variant="full-logo" />
            <ThemeToggle />
          </div>
          <div>
            <p className="ds-type-eyebrow-large" style={{ color: 'var(--ds-text-tertiary)', marginBottom: 8 }}>
              Component Library
            </p>
            <h1 className="ds-type-display-2" style={{ color: 'var(--ds-text-primary)', margin: 0 }}>
              Design System
            </h1>
          </div>
        </div>

        {/* Logo */}
        <section>
          <p className="ds-type-eyebrow-large" style={{ color: 'var(--ds-text-tertiary)', marginBottom: 24, borderBottom: '1px solid var(--ds-border-secondary)', paddingBottom: 12 }}>
            Logo
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
              <Logo variant="full-logo" />
              <span style={{ fontFamily: 'var(--ds-font-family-text)', fontSize: 11, color: 'var(--ds-text-tertiary)' }}>Full Logo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
              <Logo variant="brand-mark" />
              <span style={{ fontFamily: 'var(--ds-font-family-text)', fontSize: 11, color: 'var(--ds-text-tertiary)' }}>Brand Mark</span>
            </div>
          </div>
        </section>

        {/* Type scale */}
        <section>
          <p className="ds-type-eyebrow-large" style={{ color: 'var(--ds-text-tertiary)', marginBottom: 24, borderBottom: '1px solid var(--ds-border-secondary)', paddingBottom: 12 }}>
            Type styles — {typeScale.length} styles
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {typeScale.map(({ slug, label, sample }) => (
              <div key={slug} style={{
                display: 'grid',
                gridTemplateColumns: '200px 1fr',
                gap: 24,
                padding: '16px 0',
                borderBottom: '1px solid var(--ds-border-secondary)',
                alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: 'var(--ds-font-family-text)', fontSize: 11, color: 'var(--ds-text-tertiary)', paddingTop: 4 }}>
                  {label}
                </span>
                <span className={`ds-type-${slug}`} style={{ color: 'var(--ds-text-primary)' }}>
                  {sample}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <section>
          <p className="ds-type-eyebrow-large" style={{ color: 'var(--ds-text-tertiary)', marginBottom: 24, borderBottom: '1px solid var(--ds-border-secondary)', paddingBottom: 12 }}>
            Buttons
          </p>
          {(['primary', 'secondary', 'tertiary'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <span style={{ fontFamily: 'var(--ds-font-family-text)', fontSize: 11, color: 'var(--ds-text-tertiary)', width: 72, textTransform: 'capitalize' }}>
                {variant}
              </span>
              <Button variant={variant} size="lg" label="Label" />
              <Button variant={variant} size="md" label="Label" />
              <Button variant={variant} size="sm" label="Label" />
              <Button variant={variant} size="md" label="Label" disabled />
            </div>
          ))}
        </section>

      </div>
    </main>
    <Footer
      logo={<Logo variant="full-logo" />}
      columns={footerColumns}
      socialLinks={[
        { name: 'Instagram', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'X Twitter', href: '#' },
        { name: 'Youtube', href: '#' },
      ]}
      legalText="©2025 The ZaneRay Group"
      legalLinks={[
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Accessibility', href: '#' },
      ]}
    />
    </>
  );
}

export default App;
