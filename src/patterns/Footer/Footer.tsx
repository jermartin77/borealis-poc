import { type FormEvent, type HTMLAttributes, useState } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Accordion } from '../../components/Accordion/Accordion';
import { Icon } from '../../components/Icon/Icon';
import { Input } from '../../components/Input/Input';
import { SocialIcon, type SocialIconName } from '../../components/Icon/SocialIcon';
import styles from './Footer.module.css';

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLinkItem[];
}

export interface FooterSocialLink {
  name: SocialIconName;
  href: string;
}

export interface FooterProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  logo?: React.ReactNode;
  columns?: FooterColumn[];
  newsletterTitle?: string;
  newsletterDescription?: string;
  onNewsletterSubmit?: (email: string) => void;
  socialLinks?: FooterSocialLink[];
  legalText?: string;
  legalLinks?: FooterLinkItem[];
}

export function Footer({
  logo,
  columns = [],
  newsletterTitle = 'Newsletter Signup',
  newsletterDescription = 'Sign up to be the first to learn about new product launches, news, and promotions.',
  onNewsletterSubmit,
  socialLinks = [],
  legalText,
  legalLinks = [],
  theme = 'dark',
  className,
  ...props
}: FooterProps) {
  const [email, setEmail] = useState('');
  const cls = [styles.root, className].filter(Boolean).join(' ');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email) onNewsletterSubmit?.(email);
  }

  const submitIcon = (
    <button
      type="submit"
      className={styles.submitBtn}
      aria-label="Subscribe"
      form="footer-newsletter"
    >
      <Icon name="arrow-right" size={16} />
    </button>
  );

  return (
    <footer className={cls} data-theme={theme} {...props}>
      {/* Main content: logo + links on left, newsletter on right */}
      <div className={styles.mainLinks}>
        {logo && <div className={styles.brand}>{logo}</div>}

        {/* Tablet/Desktop: flat link columns */}
        {columns.length > 0 && (
          <div className={styles.columns}>
            {columns.map((col) => (
              <div key={col.heading} className={styles.column}>
                <p className={styles.colHeading}>{col.heading}</p>
                <ul className={styles.linkList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Mobile only: accordion link groups */}
        {columns.length > 0 && (
          <div className={styles.accordions}>
            {columns.map((col) => (
              <Accordion key={col.heading} header={col.heading}>
                <ul className={styles.accordionLinkList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </Accordion>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div className={styles.newsletter}>
        <div className={styles.newsletterCopy}>
          <p className={styles.newsletterTitle}>{newsletterTitle}</p>
          <p className={styles.newsletterDesc}>{newsletterDescription}</p>
        </div>
        <form id="footer-newsletter" onSubmit={handleSubmit} className={styles.newsletterForm}>
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            iconRight={submitIcon}
            aria-label="Email address"
          />
        </form>
        {socialLinks.length > 0 && (
          <div className={styles.socialLinks}>
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} className={styles.socialLink} aria-label={s.name}>
                <SocialIcon name={s.name} size={20} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Legal bar */}
      <div className={styles.legal}>
        <p className={styles.legalText}>
          {legalText ?? `©${new Date().getFullYear()} Borealis`}
        </p>
        {legalLinks.length > 0 && legalLinks.map((link) => (
          <a key={link.label} href={link.href} className={styles.legalLink}>{link.label}</a>
        ))}
      </div>
    </footer>
  );
}
