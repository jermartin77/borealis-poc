import { useState, type HTMLAttributes } from 'react';
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

  function toggle() {
    const next = !isOpen;
    setInternalOpen(next);
    onToggle?.(next);
  }

  const rootCls = [styles.root, isOpen ? styles.open : null, className].filter(Boolean).join(' ');

  return (
    <div className={rootCls} {...props}>
      <button
        type="button"
        className={styles.trigger}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span>{header}</span>
        <span className={styles.icon} aria-hidden>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {isOpen && <div className={styles.divider} />}
      <div className={styles.panel} role="region" hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
}
