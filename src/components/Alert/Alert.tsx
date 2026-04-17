import { type HTMLAttributes } from 'react';
import styles from './Alert.module.css';

export type AlertStyle = 'default' | 'error' | 'success';

// ─── Alert ───────────────────────────────────────────────────────────────────

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: AlertStyle;
  headline: string;
  caption?: string;
  showIcon?: boolean;
  showClose?: boolean;
  showCaption?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  onClose?: () => void;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

const defaultIcons: Record<AlertStyle, React.ReactNode> = {
  default: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export function Alert({
  style: alertStyle = 'default',
  headline,
  caption,
  showIcon = true,
  showClose = false,
  showCaption = false,
  showButton = false,
  buttonLabel = 'Learn more',
  onClose,
  onButtonClick,
  icon,
  className,
  ...props
}: AlertProps) {
  const cls = [styles.base, styles[alertStyle], className].filter(Boolean).join(' ');

  return (
    <div role="alert" className={cls} {...props}>
      <div className={styles.header}>
        {showIcon && (
          <span className={styles.icon}>{icon ?? defaultIcons[alertStyle]}</span>
        )}
        <div className={styles.content}>
          <p className={styles.headline}>{headline}</p>
          {showCaption && caption && (
            <p className={styles.caption}>{caption}</p>
          )}
          {showButton && (
            <button type="button" className={styles.action} onClick={onButtonClick}>
              {buttonLabel}
            </button>
          )}
        </div>
        {showClose && (
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Dismiss alert"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// ─── AlertBanner ──────────────────────────────────────────────────────────────

export type AlertBannerType = 'default' | 'error' | 'success';

export interface AlertBannerProps extends HTMLAttributes<HTMLDivElement> {
  type?: AlertBannerType;
  message: string;
  showIcon?: boolean;
  showAction?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

export function AlertBanner({
  type = 'default',
  message,
  showIcon = true,
  showAction = false,
  buttonLabel = 'Learn more',
  onButtonClick,
  icon,
  className,
  ...props
}: AlertBannerProps) {
  const cls = [styles.banner, styles[type], className].filter(Boolean).join(' ');

  return (
    <div role="alert" className={cls} {...props}>
      {showIcon && (
        <span className={styles.icon}>{icon ?? defaultIcons[type]}</span>
      )}
      <p className={styles.bannerMessage}>{message}</p>
      {showAction && (
        <button type="button" className={styles.bannerAction} onClick={onButtonClick}>
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
