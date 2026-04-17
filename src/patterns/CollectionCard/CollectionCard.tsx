import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import styles from './CollectionCard.module.css';

export interface CollectionCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image: string;
  imageAlt?: string;
  title: string;
  href?: string;
}

export function CollectionCard({
  image,
  imageAlt = '',
  title,
  href,
  theme,
  className,
  ...props
}: CollectionCardProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={cls} data-theme={theme} {...props}>
      <a href={href ?? '#'} className={styles.link}>
        <div className={styles.imageWrap}>
          <img src={image} alt={imageAlt} className={styles.image} />
          <div className={styles.overlay} />
          <p className={`ds-type-display-5 ${styles.title}`}>{title}</p>
        </div>
      </a>
    </div>
  );
}
