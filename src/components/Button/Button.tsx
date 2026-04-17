import { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const cls = [styles.base, styles[variant], styles[size], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} disabled={disabled} {...props}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      {label}
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
}
