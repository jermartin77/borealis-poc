import { type ButtonHTMLAttributes } from 'react';
import { PlayerIcon } from '../Icon/PlayerIcon';
import styles from './PlayButton.module.css';

export interface PlayButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
}

export function PlayButton({
  className,
  'aria-label': ariaLabel = 'Play video',
  ...props
}: PlayButtonProps) {
  return (
    <button
      className={[styles.button, className].filter(Boolean).join(' ')}
      aria-label={ariaLabel}
      {...props}
    >
      <PlayerIcon name="play" iconStyle="solid" size={32} />
    </button>
  );
}
