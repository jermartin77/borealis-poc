import { useState, useRef, useEffect, type HTMLAttributes } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Accordion.module.css';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onToggle'> {
  header: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: (open: boolean) => void;
}

export function Accordion({
  header,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onToggle,
  className,
  ...props
}: AccordionProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const panelRef = useRef<HTMLDivElement>(null);

  function toggle() {
    const next = !isOpen;
    setInternalOpen(next);
    onToggle?.(next);
  }

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    if (isOpen) {
      el.style.height = el.scrollHeight + 'px';
    } else {
      el.style.height = el.scrollHeight + 'px';
      requestAnimationFrame(() => {
        el.style.height = '0px';
      });
    }
  }, [isOpen]);

  const rootCls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={rootCls} {...props}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className={`${styles.label} ds-type-display-5`}>{header}</span>
        <span className={styles.icon} aria-hidden>
          <Icon name={isOpen ? 'chevron-up' : 'chevron-down'} size={16} />
        </span>
      </button>
      <div
        ref={panelRef}
        className={styles.panel}
        style={{ height: defaultOpen ? undefined : '0px' }}
        aria-hidden={!isOpen}
      >
        <div className={`${styles.panelInner} ds-type-text-medium-regular`}>
          {children}
        </div>
      </div>
    </div>
  );
}

export interface AccordionGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  defaultOpenIndex?: number;
}

export function AccordionGroup({
  children,
  defaultOpenIndex,
  className,
  ...props
}: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);

  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={[styles.group, className].filter(Boolean).join(' ')} {...props}>
      {items.map((child, i) => {
        if (!child) return null;
        return (
          <Accordion
            key={i}
            {...(child as React.ReactElement<AccordionProps>).props}
            open={openIndex === i}
            onToggle={(next) => setOpenIndex(next ? i : null)}
          />
        );
      })}
    </div>
  );
}
