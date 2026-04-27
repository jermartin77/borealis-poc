import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Blurb } from '../Blurb/Blurb';
import styles from './SplitCallout.module.css';

export interface SplitCalloutProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  alignment?: 'left' | 'right';
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  headline: string;
  body?: string;
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
  image,
  imageAlt = '',
  eyebrow,
  headline,
  body,
  primaryButtonLabel = 'Learn More',
  secondaryButtonLabel = 'Learn More',
  showEyebrow = false,
  showPrimaryButton = true,
  showSecondaryButton = true,
  onPrimaryClick,
  onSecondaryClick,
  theme,
  className,
  ...props
}: SplitCalloutProps) {
  const cls = [styles.root, styles[alignment], className].filter(Boolean).join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      <div className={styles.mediaWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
      <div className={styles.content}>
        <Blurb
          alignment="center"
          size="small"
          eyebrow={eyebrow}
          heading={headline}
          body={body}
          showEyebrow={showEyebrow}
          showPrimaryButton={showPrimaryButton}
          showSecondaryButton={showSecondaryButton}
          primaryButtonLabel={primaryButtonLabel}
          secondaryButtonLabel={secondaryButtonLabel}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
        />
      </div>
    </section>
  );
}
