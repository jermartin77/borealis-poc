import { useRef, useState, useCallback, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button, type ButtonVariant } from '../../components/Button/Button';
import { ActionButton } from '../../components/Button/ActionButton';
import { Icon } from '../../components/Icon/Icon';
import styles from './Collection.module.css';

export interface CollectionProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaVariant?: ButtonVariant;
  layout?: 'scroll' | 'grid';
  cardSize?: 'sm' | 'lg';
  children: React.ReactNode;
}

export function Collection({
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaVariant = 'secondary',
  layout = 'scroll',
  cardSize = 'sm',
  theme,
  className,
  children,
  ...props
}: CollectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * scrollRef.current.clientWidth, behavior: 'smooth' });
  };

  const hasHeader = !!(title || description || ctaLabel);

  const rootCls = [styles.root, className].filter(Boolean).join(' ');
  const trackCls = [
    layout === 'scroll' ? styles.track : styles.grid,
    cardSize === 'lg' ? styles.large : styles.small,
    layout === 'scroll' ? 'ds-scrollbar' : null,
  ].filter(Boolean).join(' ');

  return (
    <section className={rootCls} data-theme={theme} {...props}>
      {hasHeader && (
        <div className={styles.header}>
          <div className={styles.headerText}>
            {title && <p className={styles.title}>{title}</p>}
            {description && <p className={styles.description}>{description}</p>}
            {ctaLabel && (
              <a href={ctaHref ?? '#'} className={`${styles.cta} ${styles.ctaMobile}`}>
                <Button
                  variant={ctaVariant}
                  label={ctaLabel}
                  rightIcon={<Icon name="arrow-right" size={16} />}
                />
              </a>
            )}
          </div>
          {ctaLabel && (
            <a href={ctaHref ?? '#'} className={`${styles.cta} ${styles.ctaDesktop}`}>
              <Button
                variant={ctaVariant}
                label={ctaLabel}
                rightIcon={<Icon name="arrow-right" size={16} />}
              />
            </a>
          )}
        </div>
      )}

      <div className={styles.contentWrap}>
        {layout === 'scroll' && (
          <div className={`${styles.prevBtn} ${atStart ? styles.hidden : ''}`}>
            <ActionButton
              variant="secondary"
              aria-label="Previous"
              icon={<Icon name="arrow-left" size={20} />}
              onClick={() => scrollBy(-1)}
            />
          </div>
        )}

        <div
          ref={layout === 'scroll' ? scrollRef : undefined}
          className={trackCls}
          onScroll={layout === 'scroll' ? handleScroll : undefined}
        >
          {children}
        </div>

        {layout === 'scroll' && (
          <div className={`${styles.nextBtn} ${atEnd ? styles.hidden : ''}`}>
            <ActionButton
              variant="secondary"
              aria-label="Next"
              icon={<Icon name="arrow-right" size={20} />}
              onClick={() => scrollBy(1)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
