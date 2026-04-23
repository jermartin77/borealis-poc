import { Pause, Play } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import styles from './Icon.module.css';

export type PlayerIconName = 'play' | 'pause';
export type PlayerIconStyle = 'stroked' | 'solid';

export interface PlayerIconProps extends Omit<LucideProps, 'ref'> {
  name?: PlayerIconName;
  iconStyle?: PlayerIconStyle;
  size?: number;
  'aria-label'?: string;
}

export function PlayerIcon({
  name = 'play',
  iconStyle = 'stroked',
  size = 32,
  className,
  'aria-label': ariaLabel,
  ...props
}: PlayerIconProps) {
  const isSolid = iconStyle === 'solid';

  const shared = {
    size,
    className: [styles.icon, className].filter(Boolean).join(' '),
    fill: isSolid ? 'currentColor' : 'none',
    strokeWidth: isSolid ? 0 : 2,
    'aria-hidden': ariaLabel ? undefined : true,
    'aria-label': ariaLabel,
    role: ariaLabel ? 'img' : undefined,
    ...props,
  } as const;

  return name === 'pause' ? <Pause {...shared} /> : <Play {...shared} />;
}
