import { type HTMLAttributes } from 'react';
import styles from './Pagination.module.css';
import { Icon } from '../Icon/Icon';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  total: number;
  current: number;
  onChange: (page: number) => void;
}

function getPages(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 4) return [1, 2, 3, 4, 5, '…', total];
  if (current >= total - 3) return [1, '…', total - 4, total - 3, total - 2, total - 1, total];
  return [1, '…', current - 1, current, current + 1, '…', total];
}

export function Pagination({ total, current, onChange, className, ...props }: PaginationProps) {
  const pages = getPages(current, total);

  return (
    <nav aria-label="Pagination" className={[styles.nav, className].filter(Boolean).join(' ')} {...props}>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
      >
        <Icon name="arrow-left" size={16} />
      </button>

      <div className={styles.pages}>
        {pages.map((p, i) =>
          p === '…' ? (
            <span key={`ellipsis-${i}`} className={styles.ellipsis}>…</span>
          ) : (
            <button
              key={p}
              type="button"
              className={[styles.page, p === current ? styles.active : null].filter(Boolean).join(' ')}
              onClick={() => p !== current && onChange(p)}
              aria-label={`Page ${p}`}
              aria-current={p === current ? 'page' : undefined}
            >
              {p}
            </button>
          )
        )}
      </div>

      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
      >
        <Icon name="arrow-right" size={16} />
      </button>
    </nav>
  );
}
