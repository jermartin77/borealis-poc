import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Blurb, type BlurbProps } from '../Blurb/Blurb';
import { ProductCard, type ProductCardProps } from '../ProductCard/ProductCard';
import styles from './FeaturedProducts.module.css';

export interface FeaturedProductsProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  layout?: 'overflow' | 'grid';
  blurb?: Omit<BlurbProps, 'theme'>;
  items: ProductCardProps[];
}

export function FeaturedProducts({
  layout = 'grid',
  blurb,
  items,
  theme,
  className,
  ...props
}: FeaturedProductsProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');
  const listCls = [styles.list, styles[layout]].join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      {blurb && <Blurb {...blurb} className={styles.blurb} />}
      <div className={listCls}>
        {items.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
