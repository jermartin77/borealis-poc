import { useState, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { NavItem } from '../../components/NavItem/NavItem';
import styles from './Masthead.module.css';

export interface NavItem {
  label: string;
  href: string;
}

export interface MastheadProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  logo: React.ReactNode;
  navItems?: NavItem[];
  actions?: React.ReactNode;
}

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export function Masthead({
  logo,
  navItems = [],
  actions,
  theme,
  className,
  ...props
}: MastheadProps) {
  const [open, setOpen] = useState(false);
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <header className={cls} data-theme={theme} {...props}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logoWrap}>{logo}</div>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <NavItem href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions (cart, account, etc.) */}
        <div className={styles.actions}>{actions}</div>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <ul className={styles.mobileNavList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`ds-type-navigation-primary ${styles.mobileNavLink}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {actions && (
            <div className={styles.mobileActions}>{actions}</div>
          )}
        </nav>
      )}
    </header>
  );
}
