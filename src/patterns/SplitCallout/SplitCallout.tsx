import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button } from '../../components/Button/Button';
import styles from './SplitCallout.module.css';

export interface SplitCalloutProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  alignment?: 'left' | 'right';
  media: React.ReactNode;
  eyebrow?: string;
  headline: string;
  body: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  showEyebrow?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function SplitCallout({
  alignment = 'left',
  media,
  eyebrow,
  headline,
  body,
  primaryButtonLabel = 'Shop now',
  secondaryButtonLabel = 'Learn more',
  showEyebrow = false,
  showPrimaryButton = false,
  showSecondaryButton = false,
  onPrimaryClick,
  onSecondaryClick,
  theme,
  className,
  ...props
}: SplitCalloutProps) {
  const cls = [styles.root, styles[alignment], className].filter(Boolean).join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      <div className={styles.mediaWrap}>{media}</div>
      <div className={styles.content}>
        {showEyebrow && eyebrow && (
          <p className={`ds-type-eyebrow-large ${styles.eyebrow}`}>{eyebrow}</p>
        )}
        <h2 className={`ds-type-display-2 ${styles.headline}`}>{headline}</h2>
        <p className={`ds-type-text-large-regular ${styles.body}`}>{body}</p>
        {(showPrimaryButton || showSecondaryButton) && (
          <div className={styles.actions}>
            {showPrimaryButton && (
              <Button variant="primary" size="md" label={primaryButtonLabel} onClick={onPrimaryClick} />
            )}
            {showSecondaryButton && (
              <Button variant="secondary" size="md" label={secondaryButtonLabel} onClick={onSecondaryClick} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
