import { useState } from 'react';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import type { BreadcrumbItem } from '../Breadcrumbs/Breadcrumbs';
import { StarIcon } from '../Icon/StarIcon';
import { ColorSwatch } from '../ColorSwatch/ColorSwatch';
import { OptionSelect } from '../OptionSelect/OptionSelect';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { AccordionGroup, Accordion } from '../Accordion/Accordion';
import styles from './BuyGrid.module.css';

export interface BuyGridColor {
  value: string;
  label: string;
  color: string;
}

export interface BuyGridSize {
  value: string;
  label: string;
  soldOut?: boolean;
}

export interface BuyGridAccordion {
  header: string;
  content: string;
  defaultOpen?: boolean;
}

export interface BuyGridProps {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  description?: string;
  price: string;
  rating?: number;
  reviewCount?: number;
  colors?: BuyGridColor[];
  sizes?: BuyGridSize[];
  accordions?: BuyGridAccordion[];
  onAddToCart?: (options: { color?: string; size?: string }) => void;
  className?: string;
}

function renderStars(rating: number) {
  return [1, 2, 3, 4, 5].map((i) => {
    const variant =
      i <= Math.floor(rating) ? 'full' : i - 0.5 <= rating ? 'half' : 'empty';
    return <StarIcon key={i} variant={variant} size={16} />;
  });
}

export function BuyGrid({
  breadcrumbs,
  title,
  description,
  price,
  rating = 0,
  reviewCount = 0,
  colors = [],
  sizes = [],
  accordions = [],
  onAddToCart,
  className,
}: BuyGridProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value ?? '');
  const [selectedSize, setSelectedSize] = useState('');

  const cls = [styles.root, className].filter(Boolean).join(' ');
  const defaultOpenIdx = accordions.findIndex((a) => a.defaultOpen);

  return (
    <div className={cls}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      <div className={styles.productInfo}>
        <h1 className={`ds-type-display-2 ${styles.title}`}>{title}</h1>

        {reviewCount > 0 && (
          <div className={styles.ratingRow}>
            <div className={styles.stars}>{renderStars(rating)}</div>
            <span className={`ds-type-text-small-regular ${styles.reviewCount}`}>
              {reviewCount} reviews
            </span>
          </div>
        )}

        {description && (
          <p className={`ds-type-text-small-regular ${styles.description}`}>
            {description}
          </p>
        )}
      </div>

      {colors.length > 0 && (
        <div className={styles.selectorGroup}>
          <p className={`ds-type-text-medium-bold ${styles.selectorLabel}`}>
            Select Color
          </p>
          <div className={styles.swatches}>
            {colors.map((c) => (
              <ColorSwatch
                key={c.value}
                color={c.color}
                size="lg"
                selected={selectedColor === c.value}
                onClick={() => setSelectedColor(c.value)}
                aria-label={c.label}
              />
            ))}
          </div>
        </div>
      )}

      {sizes.length > 0 && (
        <div className={styles.selectorGroup}>
          <p className={`ds-type-text-medium-bold ${styles.selectorLabel}`}>
            Select Size
          </p>
          <div className={styles.sizeOptions}>
            {sizes.map((s) => (
              <OptionSelect
                key={s.value}
                label={s.label}
                selected={selectedSize === s.value}
                soldOut={s.soldOut}
                onClick={() => !s.soldOut && setSelectedSize(s.value)}
              />
            ))}
          </div>
        </div>
      )}

      <p className={`ds-type-display-4 ${styles.price}`}>{price}</p>

      <Button
        variant="primary"
        size="lg"
        label="Add to Cart"
        rightIcon={<Icon name="handbag" size={20} />}
        className={styles.addToCart}
        onClick={() => onAddToCart?.({ color: selectedColor, size: selectedSize })}
      />

      {accordions.length > 0 && (
        <div className={styles.accordionSection}>
          <AccordionGroup defaultOpenIndex={defaultOpenIdx >= 0 ? defaultOpenIdx : undefined}>
            {accordions.map((item) => (
              <Accordion key={item.header} header={item.header}>
                {item.content}
              </Accordion>
            ))}
          </AccordionGroup>
        </div>
      )}
    </div>
  );
}
