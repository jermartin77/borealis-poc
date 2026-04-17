import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button } from '../../components/Button/Button';
import styles from './Blurb.module.css';

export interface BlurbProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  alignment?: 'left' | 'center';
  size?: 'default' | 'small';
  eyebrow?: string;
  heading: string;
  body?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  showEyebrow?: boolean;
  showButtons?: boolean;
  showSecondaryButton?: boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export function Blurb({
  alignment = 'left',
  size = 'default',
  eyebrow,
  heading,
  body,
  primaryButtonLabel = 'Learn more',
  secondaryButtonLabel = 'View all',
  showEyebrow = false,
  showButtons = false,
  showSecondaryButton = false,
  onPrimaryClick,
  onSecondaryClick,
  theme,
  className,
  ...props
}: BlurbProps) {
  const cls = [
    styles.root,
    styles[alignment],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} data-theme={theme} {...props}>
      {showEyebrow && eyebrow && (
        <p className={`ds-type-eyebrow-large ${styles.eyebrow}`}>{eyebrow}</p>
      )}
      <h2 className={`${size === 'small' ? 'ds-type-display-4' : 'ds-type-display-3'} ${styles.heading}`}>
        {heading}
      </h2>
      {body && (
        <p className={`ds-type-text-large-regular ${styles.body}`}>{body}</p>
      )}
      {showButtons && (
        <div className={styles.actions}>
          <Button variant="primary" size="md" label={primaryButtonLabel} onClick={onPrimaryClick} />
          {showSecondaryButton && (
            <Button variant="secondary" size="md" label={secondaryButtonLabel} onClick={onSecondaryClick} />
          )}
        </div>
      )}
    </div>
  );
}
