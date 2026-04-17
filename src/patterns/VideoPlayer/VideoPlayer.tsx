import { useRef, useState, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import styles from './VideoPlayer.module.css';

export interface VideoPlayerProps extends HTMLAttributes<HTMLDivElement>, ThemeProps {
  src: string;
  poster?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  caption?: string;
}

const PlayIcon = () => (
  <svg viewBox="0 0 80 80" fill="none" aria-hidden>
    <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.15)" />
    <circle cx="40" cy="40" r="38" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
    <path d="M32 26l24 14-24 14V26z" fill="#ffffff" />
  </svg>
);

export function VideoPlayer({
  src,
  poster,
  autoplay = false,
  loop = false,
  muted = autoplay,
  caption,
  theme,
  className,
  ...props
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(autoplay);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  function handleVideoClick() {
    handlePlay();
  }

  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={cls} data-theme={theme} {...props}>
      <div className={styles.playerWrap}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoplay}
          loop={loop}
          muted={muted}
          playsInline
          className={styles.video}
          onClick={handleVideoClick}
        />
        {!playing && (
          <button
            type="button"
            className={styles.playBtn}
            onClick={handlePlay}
            aria-label="Play video"
          >
            <PlayIcon />
          </button>
        )}
      </div>
      {caption && (
        <p className={`ds-type-text-small-regular ${styles.caption}`}>{caption}</p>
      )}
    </div>
  );
}
