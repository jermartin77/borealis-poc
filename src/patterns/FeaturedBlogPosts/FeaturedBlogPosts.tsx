import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Blurb, type BlurbProps } from '../Blurb/Blurb';
import { BlogCard, type BlogCardProps } from '../BlogCard/BlogCard';
import styles from './FeaturedBlogPosts.module.css';

export interface FeaturedBlogPostsProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  blurb?: Omit<BlurbProps, 'theme'>;
  items: BlogCardProps[];
}

export function FeaturedBlogPosts({
  blurb,
  items,
  theme,
  className,
  ...props
}: FeaturedBlogPostsProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      {blurb && <Blurb {...blurb} className={styles.blurb} />}
      <div className={styles.grid}>
        {items.map((item, i) => (
          <BlogCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
