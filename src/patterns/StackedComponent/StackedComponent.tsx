import { type HTMLAttributes, type ElementType } from 'react';
import type { ThemeProps } from '../../lib/theme';
import styles from './StackedComponent.module.css';

export type StackedSize = 'sm' | 'md' | 'lg';

export interface StackedComponentProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  size?: StackedSize;
  as?: ElementType;
}

export function StackedComponent({
  size = 'md',
  as: Tag = 'section',
  theme,
  className,
  ...props
}: StackedComponentProps) {
  const cls = [styles.root, styles[size], className].filter(Boolean).join(' ');
  return <Tag className={cls} data-theme={theme} data-stacked {...props} />;
}
