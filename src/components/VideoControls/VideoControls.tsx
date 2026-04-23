import { type ButtonHTMLAttributes } from 'react';
import { PlayerIcon } from '../Icon/PlayerIcon';
import styles from './VideoControls.module.css';

export type VideoControlsState = 'playing' | 'paused';

export interface VideoControlsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  state?: VideoControlsState;
  onToggle?: () => void;
}

export function VideoControls({
  state = 'playing',
  onToggle,
  onClick,
  className,
  'aria-label': ariaLabel,
  ...props
}: VideoControlsProps) {
  const label = ariaLabel ?? (state === 'playing' ? 'Pause' : 'Play');

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    onToggle?.();
    onClick?.(e);
  }

  return (
    <button
      type="button"
      className={[styles.button, className].filter(Boolean).join(' ')}
      aria-label={label}
      onClick={handleClick}
      {...props}
    >
      <PlayerIcon
        name={state === 'playing' ? 'pause' : 'play'}
        iconStyle="stroked"
        size={16}
        aria-hidden
      />
    </button>
  );
}
