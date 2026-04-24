import { type HTMLAttributes } from 'react';
import styles from './Alert.module.css';
import { StatusIcon } from '../Icon/StatusIcon';

export type AlertStyle = 'default' | 'error' | 'success';

// ─── Alert ───────────────────────────────────────────────────────────────────

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: AlertStyle;
  headline: string;
  caption?: string;
  showIcon?: boolean;
  showClose?: boolean;
  showButton?: boolean;
  buttonLabel?: string;
  onClose?: () => void;
  onButtonClick?: () => void;
  icon?: React.ReactNode;
}

const defaultIcons: Record<AlertStyle, React.ReactNode> = {
  default: <StatusIcon name="info" />,
  error:   <StatusIcon name="alert" />,
  success: <StatusIcon name="check-circle" />,
};

export function Alert({
  style: alertStyle = 'default',
  headline,
  caption,
  showIcon = true,
  showClose = false,
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
          {caption && (
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

