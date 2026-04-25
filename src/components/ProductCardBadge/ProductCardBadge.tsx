import { type HTMLAttributes } from 'react';
import styles from './ProductCardBadge.module.css';

export type ProductCardBadgeStyle = 'feature' | 'sale';

export interface ProductCardBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  badgeStyle?: ProductCardBadgeStyle;
  value: string;
}

export function ProductCardBadge({
  badgeStyle = 'feature',
  value,
  className,
  ...props
}: ProductCardBadgeProps) {
  const cls = [styles.base, styles[badgeStyle], className].filter(Boolean).join(' ');
  return (
    <span className={cls} {...props}>
      {value}
    </span>
  );
}
