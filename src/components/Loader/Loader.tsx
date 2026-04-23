import { type HTMLAttributes } from 'react';
import styles from './Loader.module.css';

export type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  size?: LoaderSize;
  label?: string;
}

export function Loader({ size = 'md', label = 'Loading…', className, ...props }: LoaderProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <svg
        className={[styles.circle, styles[size]].join(' ')}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" stroke="var(--ds-border-subtle)" strokeWidth="2.5"/>
        <path
          d="M12 2a10 10 0 0 1 10 10"
          stroke="var(--ds-foreground-primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
