import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import styles from './BlogCard.module.css';

export interface BlogCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image: string;
  imageAlt?: string;
  title: string;
  excerpt?: string;
  date?: string;
  category?: string;
  href?: string;
}

export function BlogCard({
  image,
  imageAlt = '',
  title,
  excerpt,
  date,
  category,
  href,
  theme,
  className,
  ...props
}: BlogCardProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <article className={cls} data-theme={theme} {...props}>
      <a href={href ?? '#'} className={styles.link}>
        <div className={styles.imageWrap}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
        <div className={styles.body}>
          {category && (
            <p className={`ds-type-eyebrow-large ${styles.category}`}>{category}</p>
          )}
          <h3 className={`ds-type-display-5 ${styles.title}`}>{title}</h3>
          {excerpt && (
            <p className={`ds-type-text-medium-regular ${styles.excerpt}`}>{excerpt}</p>
          )}
          {date && (
            <time className={`ds-type-text-small-regular ${styles.date}`}>{date}</time>
          )}
        </div>
      </a>
    </article>
  );
}
