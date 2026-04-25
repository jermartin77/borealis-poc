import { type HTMLAttributes } from 'react';
import styles from './Breadcrumbs.module.css';
import { Icon } from '../Icon/Icon';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={[styles.nav, className].filter(Boolean).join(' ')} {...props}>
      <ol style={{ display: 'contents' }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={styles.item}>
              {i > 0 && (
                <span className={styles.separator}>
                  <Icon name="chevron-right" size={12} />
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  className={styles.current}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
