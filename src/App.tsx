import { Button } from './components/Button/Button';

function App() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'var(--ds-background-primary)', padding: '40px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>

        <h1 style={{
          fontFamily: 'var(--ds-font-family-display)',
          fontWeight: 'var(--ds-font-weight-medium)',
          fontSize: 36,
          color: 'var(--ds-background-inverse)',
          margin: 0,
        }}>
          Borealis Design System
        </h1>

        {/* Variant × Size matrix — mirrors the Figma canvas */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{
            fontFamily: 'var(--ds-font-family-display)',
            fontSize: 16,
            fontWeight: 'var(--ds-font-weight-medium)',
            color: 'var(--ds-text-tertiary)',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Buttons
          </h2>

          {(['primary', 'secondary', 'tertiary'] as const).map((variant) => (
            <div key={variant} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{
                fontFamily: 'var(--ds-font-family-display)',
                fontSize: 12,
                color: 'var(--ds-text-tertiary)',
                width: 72,
                textTransform: 'capitalize',
              }}>
                {variant}
              </span>
              <Button variant={variant} size="lg" label="Label" />
              <Button variant={variant} size="md" label="Label" />
              <Button variant={variant} size="sm" label="Label" />
              <Button variant={variant} size="md" label="Label" disabled />
            </div>
          ))}
        </section>

        {/* Token swatches */}
        <section style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{
            fontFamily: 'var(--ds-font-family-display)',
            fontSize: 16,
            fontWeight: 'var(--ds-font-weight-medium)',
            color: 'var(--ds-text-tertiary)',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}>
            Tokens
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            {[
              { label: 'Background/brand',    color: 'var(--ds-background-brand)' },
              { label: 'Background/inverse',  color: 'var(--ds-background-inverse)' },
              { label: 'Background/primary',  color: 'var(--ds-background-primary)' },
              { label: 'Foreground/on-brand', color: 'var(--ds-foreground-on-brand)' },
              { label: 'Foreground/tertiary', color: 'var(--ds-foreground-tertiary)' },
              { label: 'Border/secondary',    color: 'var(--ds-border-secondary)' },
            ].map(({ label, color }) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--ds-radius-md)',
                  backgroundColor: color,
                  border: '1px solid var(--ds-border-secondary)',
                }} />
                <span style={{
                  fontFamily: 'var(--ds-font-family-display)',
                  fontSize: 10,
                  color: 'var(--ds-text-tertiary)',
                  textAlign: 'center',
                  maxWidth: 72,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default App;
