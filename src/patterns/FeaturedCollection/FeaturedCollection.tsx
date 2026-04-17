import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Blurb, type BlurbProps } from '../Blurb/Blurb';
import { CollectionCard, type CollectionCardProps } from '../CollectionCard/CollectionCard';
import styles from './FeaturedCollection.module.css';

export interface FeaturedCollectionProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  layout?: 'overflow' | 'grid';
  blurb?: Omit<BlurbProps, 'theme'>;
  items: CollectionCardProps[];
}

export function FeaturedCollection({
  layout = 'grid',
  blurb,
  items,
  theme,
  className,
  ...props
}: FeaturedCollectionProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');
  const listCls = [styles.list, styles[layout]].join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      {blurb && <Blurb {...blurb} className={styles.blurb} />}
      <div className={listCls}>
        {items.map((item, i) => (
          <CollectionCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
