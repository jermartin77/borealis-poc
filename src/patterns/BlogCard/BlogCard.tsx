import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { TextButton } from '../../components/Button/TextButton';
import styles from './BlogCard.module.css';

export interface BlogCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image: string;
  imageAlt?: string;
  title: string;
  excerpt?: string;
  date?: string;
  author?: string;
  categories?: string[];
  href?: string;
  readMoreLabel?: string;
}

export function BlogCard({
  image,
  imageAlt = '',
  title,
  excerpt,
  date,
  author,
  categories,
  href,
  readMoreLabel = 'Read More',
  theme,
  className,
  ...props
}: BlogCardProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');
  const meta = [date, author].filter(Boolean).join(' | ');

  return (
    <article className={cls} data-theme={theme} {...props}>
      <a href={href ?? '#'} className={styles.link}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrap}>
            <img src={image} alt={imageAlt} className={styles.image} />
          </div>
          {categories && categories.length > 0 && (
            <div className={styles.badges}>
              {categories.map((cat) => (
                <span key={cat} className={styles.badge}>{cat}</span>
              ))}
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.copy}>
            <h3 className={`ds-type-display-4 ${styles.title}`}>{title}</h3>
            {meta && (
              <p className={`ds-type-text-small-bold ${styles.meta}`}>{meta}</p>
            )}
            {excerpt && (
              <p className={`ds-type-text-small-regular ${styles.excerpt}`}>{excerpt}</p>
            )}
          </div>
          <TextButton label={readMoreLabel} rightIcon="arrow-right" size="lg" tabIndex={-1} />
        </div>
      </a>
    </article>
  );
}
