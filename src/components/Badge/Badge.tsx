import { type HTMLAttributes } from 'react';
import styles from './Badge.module.css';

export type BadgeColor = 'primary' | 'neutral' | 'stroked';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  icon?: React.ReactNode;
  onClose?: () => void;
  children: React.ReactNode;
}

export function Badge({
  color = 'primary',
  icon,
  onClose,
  children,
  className,
  ...props
}: BadgeProps) {
  const cls = [styles.base, styles[color], className].filter(Boolean).join(' ');

  return (
    <span className={cls} {...props}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
      {onClose && (
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Remove"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </span>
  );
}
