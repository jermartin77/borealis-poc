import { type HTMLAttributes, type ElementType } from 'react';
import styles from './Container.module.css';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  size?: ContainerSize;
  as?: ElementType;
}

export function Container({
  size = 'full',
  as: Tag = 'div',
  className,
  ...props
}: ContainerProps) {
  const cls = [styles.container, size !== 'full' ? styles[size] : null, className]
    .filter(Boolean).join(' ');
  return <Tag className={cls} {...props} />;
}
