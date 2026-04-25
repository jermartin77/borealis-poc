import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
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
  showPrimaryButton?: boolean;
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
  showPrimaryButton = false,
  showSecondaryButton = false,
  onPrimaryClick,
  onSecondaryClick,
  theme,
  className,
  ...props
}: BlurbProps) {
  const isDefault = size === 'default';

  const cls = [
    styles.root,
    styles[alignment],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  const showArrow = alignment === 'left' && isDefault;

  return (
    <div className={cls} data-theme={theme} {...props}>
      <div className={styles.copy}>
        {showEyebrow && eyebrow && (
          <p className={`${isDefault ? 'ds-type-eyebrow-large' : 'ds-type-eyebrow-medium'} ${styles.eyebrow}`}>
            {eyebrow}
          </p>
        )}
        <h2 className={`${isDefault ? 'ds-type-display-2' : 'ds-type-display-4'} ${styles.heading}`}>
          {heading}
        </h2>
        {body && (
          <p className={`${isDefault ? 'ds-type-text-large-regular' : 'ds-type-text-medium-regular'} ${styles.body}`}>
            {body}
          </p>
        )}
      </div>
      {(showPrimaryButton || showSecondaryButton) && (
        <div className={styles.actions}>
          {showPrimaryButton && (
            <Button
              variant="primary"
              size={isDefault ? 'lg' : 'md'}
              label={primaryButtonLabel}
              rightIcon={showArrow ? <Icon name="arrow-right" /> : undefined}
              onClick={onPrimaryClick}
            />
          )}
          {showSecondaryButton && (
            <Button
              variant="tertiary"
              size={isDefault ? 'lg' : 'md'}
              label={secondaryButtonLabel}
                onClick={onSecondaryClick}
            />
          )}
        </div>
      )}
    </div>
  );
}
