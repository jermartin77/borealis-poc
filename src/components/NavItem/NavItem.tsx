import type { AnchorHTMLAttributes } from 'react';
import styles from './NavItem.module.css';

export interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function NavItem({ label, className, ...props }: NavItemProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');
  return (
    <a className={cls} {...props}>
      {label}
    </a>
  );
}
