import { type HTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';
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
          <Icon name="x" size={16} aria-hidden />
        </button>
      )}
    </span>
  );
}
