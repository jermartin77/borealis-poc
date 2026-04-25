import { useRef, useState, type HTMLAttributes } from 'react';
import type { ThemeProps } from '../../lib/theme';
import { Button } from '../../components/Button/Button';
import { VideoControls } from '../../components/VideoControls/VideoControls';
import styles from './HeroBanner.module.css';

export type HeroAlign =
  | 'left-top'
  | 'left-middle'
  | 'left-bottom'
  | 'center-middle'
  | 'right-top'
  | 'right-middle'
  | 'right-bottom';

export interface HeroBannerProps extends HTMLAttributes<HTMLElement>, ThemeProps {
  image?: string;
  imageAlt?: string;
  video?: string;
  showVideoControls?: boolean;
  align?: HeroAlign;
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  ctaLabel?: string;
  ctaSecondaryLabel?: string;
  showEyebrow?: boolean;
  showSubheadline?: boolean;
  showCta?: boolean;
  showSecondaryCta?: boolean;
  onCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

const alignMap: Record<HeroAlign, string> = {
  'left-top':      styles.leftTop,
  'left-middle':   styles.leftMiddle,
  'left-bottom':   styles.leftBottom,
  'center-middle': styles.centerMiddle,
  'right-top':     styles.rightTop,
  'right-middle':  styles.rightMiddle,
  'right-bottom':  styles.rightBottom,
};

export function HeroBanner({
  image,
  imageAlt = '',
  video,
  showVideoControls = true,
  align = 'left-middle',
  eyebrow,
  headline,
  subheadline,
  ctaLabel = 'Shop now',
  ctaSecondaryLabel = 'Learn more',
  showEyebrow = false,
  showSubheadline = false,
  showCta = true,
  showSecondaryCta = false,
  onCtaClick,
  onSecondaryCtaClick,
  theme = 'dark',
  className,
  ...props
}: HeroBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function handleVideoToggle() {
    const el = videoRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
    } else {
      el.play();
    }
    setIsPlaying(!isPlaying);
  }

  const cls = [styles.root, alignMap[align], className].filter(Boolean).join(' ');

  return (
    <section className={cls} data-theme={theme} {...props}>
      {video ? (
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={styles.media}
        />
      ) : image ? (
        <img src={image} alt={imageAlt} className={styles.media} />
      ) : null}
      <div className={styles.overlay} />
      <div className={styles.content}>
        {showEyebrow && eyebrow && (
          <p className={`ds-type-eyebrow-large ${styles.eyebrow}`}>{eyebrow}</p>
        )}
        <h1 className={`ds-type-display-1 ${styles.headline}`}>{headline}</h1>
        {showSubheadline && subheadline && (
          <p className={`ds-type-text-large-regular ${styles.subheadline}`}>{subheadline}</p>
        )}
        {(showCta || showSecondaryCta) && (
          <div className={styles.actions}>
            {showCta && (
              <Button variant="primary" size="lg" label={ctaLabel} onClick={onCtaClick} />
            )}
            {showSecondaryCta && (
              <Button variant="secondary" size="lg" label={ctaSecondaryLabel} onClick={onSecondaryCtaClick} />
            )}
          </div>
        )}
      </div>
      {video && showVideoControls && (
        <div className={styles.videoControls}>
          <VideoControls
            state={isPlaying ? 'playing' : 'paused'}
            onToggle={handleVideoToggle}
          />
        </div>
      )}
    </section>
  );
}
