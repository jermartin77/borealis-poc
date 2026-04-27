import { type ButtonHTMLAttributes } from 'react';
import { Icon, type IconName } from '../Icon/Icon';
import styles from './TextButton.module.css';

export type TextButtonSize = 'sm' | 'md' | 'lg';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: TextButtonSize;
  leftIcon?: IconName;
  rightIcon?: IconName;
}

export function TextButton({
  label,
  size = 'md',
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...props
}: TextButtonProps) {
  const cls = [styles.base, styles[size], className].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled} {...props}>
      {leftIcon && <Icon name={leftIcon} size={size === 'lg' ? 16 : size === 'md' ? 14 : 12} />}
      <span>{label}</span>
      {rightIcon && <Icon name={rightIcon} size={size === 'lg' ? 16 : size === 'md' ? 14 : 12} />}
    </button>
  );
}
