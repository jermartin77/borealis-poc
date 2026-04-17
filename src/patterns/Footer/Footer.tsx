import { type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import styles from './Footer.module.css';

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLinkItem[];
}

export interface FooterProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  logo?: React.ReactNode;
  columns?: FooterColumn[];
  legalText?: string;
  socialLinks?: FooterLinkItem[];
}

export function Footer({
  logo,
  columns = [],
  legalText,
  socialLinks = [],
  theme,
  className,
  ...props
}: FooterProps) {
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <footer className={cls} data-theme={theme} {...props}>
      <div className={styles.inner}>
        {/* Logo / brand area */}
        {logo && (
          <div className={styles.brand}>
            {logo}
          </div>
        )}

        {/* Link columns */}
        {columns.length > 0 && (
          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <p className={`ds-type-text-small-bold ${styles.colHeading}`}>{col.heading}</p>
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className={`ds-type-text-small-regular ${styles.link}`}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={`ds-type-text-xsmall-regular ${styles.legal}`}>
          {legalText ?? `© ${new Date().getFullYear()} Borealis. All rights reserved.`}
        </p>
        {socialLinks.length > 0 && (
          <ul className={styles.socialList}>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={`ds-type-text-xsmall-regular ${styles.link}`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
