import { useState, type HTMLAttributes } from 'react';
import styles from './Tooltip.module.css';

export type ArrowHorizontal = 'left' | 'middle' | 'right';
export type ArrowVertical   = 'top' | 'bottom' | 'left-side' | 'right-side';

export interface TooltipProps {
  content: React.ReactNode;
  arrowHorizontal?: ArrowHorizontal;
  arrowVertical?: ArrowVertical;
  children: React.ReactElement<HTMLAttributes<HTMLElement>>;
}

export function Tooltip({
  content,
  arrowHorizontal = 'middle',
  arrowVertical = 'top',
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const verticalClass = {
    top:         styles.arrowTop,
    bottom:      styles.arrowBottom,
    'right-side': styles.arrowRightSide,
    'left-side':  styles.arrowLeftSide,
  }[arrowVertical];

  const horizontalClass = {
    left:   styles.hLeft,
    middle: styles.hMiddle,
    right:  styles.hRight,
  }[arrowHorizontal];

  const tooltipCls = [
    styles.tooltip,
    verticalClass,
    // For top/bottom, also apply horizontal alignment to the bubble
    (arrowVertical === 'top' || arrowVertical === 'bottom') ? horizontalClass : null,
  ].filter(Boolean).join(' ');

  const arrowCls = [
    styles.arrow,
    (arrowVertical === 'top' || arrowVertical === 'bottom') ? horizontalClass : null,
  ].filter(Boolean).join(' ');

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span className={`${tooltipCls} ds-type-tooltip`} role="tooltip">
          {content}
          <span className={arrowCls} />
        </span>
      )}
    </span>
  );
}
