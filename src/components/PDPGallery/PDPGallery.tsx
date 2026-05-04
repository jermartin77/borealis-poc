import styles from './PDPGallery.module.css';

export interface PDPGalleryProps {
  images: string[];
  className?: string;
}

export function PDPGallery({ images, className }: PDPGalleryProps) {
  const [hero, ...rest] = images;
  const cls = [styles.root, className].filter(Boolean).join(' ');

  return (
    <div className={cls}>
      {/* Mobile: horizontal scroll strip */}
      <div className={[styles.mobileScroll, 'ds-scrollbar'].join(' ')}>
        {images.map((src, i) => (
          <div key={i} className={styles.mobileCell}>
            <img src={src} alt={`Product image ${i + 1}`} className={styles.img} />
          </div>
        ))}
      </div>

      {/* Desktop: stacked 2-col grid */}
      <div className={styles.grid}>
        {hero && (
          <div className={styles.hero}>
            <img src={hero} alt="Product" className={styles.img} />
          </div>
        )}
        {rest.map((src, i) => (
          <div key={i} className={styles.cell}>
            <img src={src} alt={`Product detail ${i + 1}`} className={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
}
