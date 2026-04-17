import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Badge } from '../../components/Badge/Badge';
import styles from './ProductCard.module.css';

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  href?: string;
  onAddToCart?: () => void;
}

export function ProductCard({
  image,
  imageAlt = '',
  title,
  description,
  price,
  originalPrice,
  badge,
  href,
  onAddToCart,
  theme,
  className,
  ...props
}: ProductCardProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  const inner = (
    <>
      <div className={styles.imageWrap}>
        <img src={image} alt={imageAlt} className={styles.image} />
        {badge && (
          <span className={styles.badge}>
            <Badge color="primary">{badge}</Badge>
          </span>
        )}
      </div>
      <div className={styles.body}>
        <p className={`ds-type-product-card-title ${styles.title}`}>{title}</p>
        {description && (
          <p className={`ds-type-product-card-description ${styles.description}`}>{description}</p>
        )}
        <div className={styles.pricing}>
          <span className="ds-type-product-card-price">{price}</span>
          {originalPrice && (
            <span className={`ds-type-product-card-price-slashed ${styles.slashed}`}>{originalPrice}</span>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div className={cls} data-theme={theme} {...props}>
      {href ? (
        <a href={href} className={styles.link}>{inner}</a>
      ) : (
        inner
      )}
      {onAddToCart && (
        <button type="button" className={styles.addToCart} onClick={onAddToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
}
