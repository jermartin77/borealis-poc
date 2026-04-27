import { useState, useEffect, useRef, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { NavItem } from '../../components/NavItem/NavItem';
import { Icon } from '../../components/Icon/Icon';
import { Input } from '../../components/Input/Input';
import styles from './Masthead.module.css';

export interface MastheadNavItem {
  label: string;
  href: string;
}

export interface MastheadProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  logo: React.ReactNode;
  navItems?: MastheadNavItem[];
  onSearchClick?: () => void;
  onAccountClick?: () => void;
  onCartClick?: () => void;
}

function IconBtn({ onClick, label, children }: { onClick?: () => void; label: string; children: React.ReactNode }) {
  return (
    <button type="button" className={styles.iconBtn} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
}

export function Masthead({
  logo,
  navItems = [],
  onSearchClick,
  onAccountClick,
  onCartClick,
  theme,
  className,
  ...props
}: MastheadProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const THRESHOLD = 8;
    const onScroll = () => {
      const y = window.scrollY;
      if (open || y < 80) {
        setHidden(false);
      } else if (y - lastScrollY.current > THRESHOLD) {
        setHidden(true);
      } else if (lastScrollY.current - y > THRESHOLD) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const cls = [styles.root, open ? styles.open : '', hidden ? styles.hidden : '', className].filter(Boolean).join(' ');

  return (
    <header className={cls} data-theme={theme ?? 'dark'} {...props}>

      {/* ── Top bar ─────────────────────────────────────────────── */}
      <div className={styles.bar}>

        <div className={styles.mobileIcons}>
          <IconBtn label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </IconBtn>
          <IconBtn onClick={onSearchClick} label="Search">
            <Icon name="search" size={24} />
          </IconBtn>
        </div>

        <div className={styles.logoNav}>
          <div className={styles.logoWrap}>{logo}</div>
          <nav aria-label="Main navigation">
            <ul className={styles.navListDesktop}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavItem href={item.href} label={item.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.utilityIcons}>
          <IconBtn onClick={onAccountClick} label="Account">
            <Icon name="user" size={24} />
          </IconBtn>
          <IconBtn onClick={onCartClick} label="Cart">
            <Icon name="handbag" size={24} />
          </IconBtn>
        </div>

      </div>

      {/* ── Nav container: clipped until open ───────────────────── */}
      <div className={styles.navContainer} aria-hidden={!open}>

        <div className={styles.drawerSearch} style={{ animationDelay: '0.1s' }}>
          <Input placeholder="Search" type="search" />
        </div>

        <ul className={styles.navListMobile}>
          {navItems.map((item, i) => (
            <li
              key={item.href}
              className={styles.navItem}
              style={{ animationDelay: `${(i + 2) * 0.1}s` }}
            >
              <a
                href={item.href}
                className={`ds-type-navigation-primary ${styles.navItemLink}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

      </div>

    </header>
  );
}
