import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Icon } from '../../components/Icon/Icon';
import styles from './CollectionCard.module.css';

export interface CollectionCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  linkLabel?: string;
  href?: string;
}

export function CollectionCard({
  image,
  imageAlt = '',
  title,
  description,
  linkLabel,
  href,
  theme,
  className,
  ...props
}: CollectionCardProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={cls} data-theme={theme} {...props}>
      <a href={href ?? '#'} className={styles.link}>
        {image && (
          <div className={styles.imageWrap}>
            <img src={image} alt={imageAlt} className={styles.image} />
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.copy}>
            <p className={`ds-type-display-4 ${styles.title}`}>{title}</p>
            {description && (
              <p className={`ds-type-text-medium-regular ${styles.description}`}>{description}</p>
            )}
          </div>
          {linkLabel && (
            <div className={styles.textButton}>
              <span className="ds-type-button-large">{linkLabel}</span>
              <Icon name="arrow-right" size={16} />
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
