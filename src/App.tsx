import { Button } from './components/Button/Button';
import { Logo } from './components/Logo/Logo';

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

function App() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--ds-background-primary)', padding: '40px 48px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>

        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Logo variant="full-logo" height={32} />
          <div>
            <p className="ds-type-eyebrow-large" style={{ color: 'var(--ds-text-tertiary)', marginBottom: 8 }}>
              Component Library
            </p>
            <h1 className="ds-type-display-2" style={{ color: 'var(--ds-background-inverse)', margin: 0 }}>
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
              <Logo variant="full-logo" height={32} />
              <span style={{ fontFamily: 'var(--ds-font-family-text)', fontSize: 11, color: 'var(--ds-text-tertiary)' }}>Full Logo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
              <Logo variant="brand-mark" height={32} />
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
                <span className={`ds-type-${slug}`} style={{ color: 'var(--ds-background-inverse)' }}>
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
  );
}

export default App;
