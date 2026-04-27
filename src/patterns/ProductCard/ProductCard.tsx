import { useState, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { ProductCardBadge, type ProductCardBadgeStyle } from '../../components/ProductCardBadge/ProductCardBadge';
import { StarIcon, type StarVariant } from '../../components/Icon/StarIcon';
import { ColorSwatch } from '../../components/ColorSwatch/ColorSwatch';
import styles from './ProductCard.module.css';

export interface ProductCardSwatch {
  color: string;
  image: string;
  altImage?: string;
}

export interface ProductCardProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  image: string;
  altImage?: string;
  imageAlt?: string;
  title: string;
  description?: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeStyle?: ProductCardBadgeStyle;
  swatches?: ProductCardSwatch[];
  rating?: number;
  reviewCount?: number;
  href?: string;
}

function starVariants(rating: number): StarVariant[] {
  return Array.from({ length: 5 }, (_, i) => {
    const fill = rating - i;
    return fill >= 1 ? 'full' : fill >= 0.5 ? 'half' : 'empty';
  });
}

export function ProductCard({
  image,
  altImage,
  imageAlt = '',
  title,
  description,
  price,
  originalPrice,
  badge,
  badgeStyle = 'feature',
  swatches,
  rating,
  reviewCount,
  href,
  theme,
  className,
  ...props
}: ProductCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = swatches?.[activeIndex]?.image ?? image;
  const activeAltImage = swatches?.[activeIndex]?.altImage ?? altImage;

  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <article className={cls} data-theme={theme} {...props}>
      <a href={href ?? '#'} className={styles.link}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrap}>
            <img src={activeImage} alt={imageAlt} className={styles.imagePrimary} />
            {activeAltImage && (
              <img src={activeAltImage} alt="" aria-hidden className={styles.imageAlt} />
            )}
          </div>
          {badge && (
            <div className={styles.badge}>
              <ProductCardBadge badgeStyle={badgeStyle} value={badge} />
            </div>
          )}
        </div>

        <div className={styles.body}>
          {swatches && swatches.length > 0 && (
            <div className={styles.swatches}>
              {swatches.map((swatch, i) => (
                <ColorSwatch
                  key={i}
                  size="sm"
                  color={swatch.color}
                  selected={i === activeIndex}
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(i); }}
                  aria-label={`Select color ${i + 1}`}
                />
              ))}
            </div>
          )}

          {rating !== undefined && (
            <div className={styles.reviews}>
              <div className={styles.stars}>
                {starVariants(rating).map((variant, i) => (
                  <StarIcon key={i} variant={variant} size={12} />
                ))}
              </div>
              {reviewCount !== undefined && (
                <span className={styles.reviewCount}>({reviewCount})</span>
              )}
            </div>
          )}

          <div className={styles.copy}>
            <p className={`ds-type-product-card-title ${styles.title}`}>{title}</p>
            {description && (
              <p className={`ds-type-product-card-description ${styles.description}`}>{description}</p>
            )}
            <div className={styles.pricing}>
              <span className={`ds-type-product-card-price ${styles.price}`}>{price}</span>
              {originalPrice && (
                <span className={`ds-type-product-card-price-slashed ${styles.slashed}`}>{originalPrice}</span>
              )}
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
