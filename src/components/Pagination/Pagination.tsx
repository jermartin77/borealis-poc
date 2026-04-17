import { type HTMLAttributes } from 'react';
import styles from './Pagination.module.css';

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

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

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
        <ChevronLeft />
      </button>

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

      <button
        type="button"
        className={styles.arrow}
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        aria-label="Next page"
      >
        <ChevronRight />
      </button>
    </nav>
  );
}
