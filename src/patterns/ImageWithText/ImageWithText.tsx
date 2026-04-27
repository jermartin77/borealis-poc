import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Blurb } from '../Blurb/Blurb';
import styles from './ImageWithText.module.css';

export interface ImageWithTextProps extends HTMLAttributes<HTMLElement>, ThemeProps {
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

export function ImageWithText({
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
}: ImageWithTextProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  const imageEl = (
    <div className={styles.imageWrap}>
      <img src={image} alt={imageAlt} className={styles.image} />
    </div>
  );

  const textEl = (
    <div className={styles.textSide}>
      <Blurb
        alignment="left"
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
  );

  return (
    <section className={cls} data-theme={theme} {...props}>
      <div className={styles.container}>
        {alignment === 'left' ? (
          <>{imageEl}{textEl}</>
        ) : (
          <>{textEl}{imageEl}</>
        )}
      </div>
    </section>
  );
}
