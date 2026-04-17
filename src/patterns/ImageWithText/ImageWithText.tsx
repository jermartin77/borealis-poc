import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button } from '../../components/Button/Button';
import styles from './ImageWithText.module.css';

export interface ImageWithTextProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  alignment?: 'left' | 'right';
  image: string;
  imageAlt?: string;
  eyebrow?: string;
  headline: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  showEyebrow?: boolean;
  showCta?: boolean;
  onCtaClick?: () => void;
}

export function ImageWithText({
  alignment = 'left',
  image,
  imageAlt = '',
  eyebrow,
  headline,
  body,
  ctaLabel = 'Learn more',
  ctaHref,
  showEyebrow = false,
  showCta = false,
  onCtaClick,
  theme,
  className,
  ...props
}: ImageWithTextProps) {
  const cls = [styles.root, styles[alignment], className].filter(Boolean).join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
      </div>
      <div className={styles.content}>
        {showEyebrow && eyebrow && (
          <p className={`ds-type-eyebrow-large ${styles.eyebrow}`}>{eyebrow}</p>
        )}
        <h2 className={`ds-type-display-3 ${styles.headline}`}>{headline}</h2>
        <p className={`ds-type-text-large-regular ${styles.body}`}>{body}</p>
        {showCta && (
          <Button
            variant="primary"
            size="md"
            label={ctaLabel}
            onClick={onCtaClick}
            {...(ctaHref ? { as: 'a', href: ctaHref } as any : {})}
          />
        )}
      </div>
    </section>
  );
}
