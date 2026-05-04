import type { ButtonHTMLAttributes } from 'react';
import styles from './OptionSelect.module.css';

export interface OptionSelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  selected?: boolean;
  soldOut?: boolean;
}

export function OptionSelect({
  label,
  selected = false,
  soldOut = false,
  className,
  ...props
}: OptionSelectProps) {
  const cls = [
    styles.base,
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
      {label}
    </button>
  );
}
