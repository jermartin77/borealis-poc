import type { ButtonHTMLAttributes } from 'react';
import styles from './ColorSwatch.module.css';

export type ColorSwatchSize = 'lg' | 'sm';

export interface ColorSwatchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  color?: string;
  size?: ColorSwatchSize;
  selected?: boolean;
  soldOut?: boolean;
}

export function ColorSwatch({
  color = '#111',
  size = 'lg',
  selected = false,
  soldOut = false,
  className,
  ...props
}: ColorSwatchProps) {
  const cls = [
    styles.base,
    styles[size],
    selected && styles.selected,
    soldOut && styles.soldOut,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type="button"
      className={cls}
      aria-pressed={selected}
      aria-disabled={soldOut || undefined}
      {...props}
    >
      <span className={styles.color} style={{ backgroundColor: color }} />
    </button>
  );
}
