import { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ActionButtonVariant = 'primary' | 'secondary';

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ActionButtonVariant;
  icon: React.ReactNode;
  'aria-label': string;
}

export function ActionButton({
  variant = 'primary',
  icon,
  className,
  disabled,
  ...props
}: ActionButtonProps) {
  const cls = [styles.base, styles[variant], styles.action, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled} {...props}>
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}
