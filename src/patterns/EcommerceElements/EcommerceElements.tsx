import { type HTMLAttributes } from 'react';
import styles from './EcommerceElements.module.css';

// ─── Option Button ────────────────────────────────────────────────────────────

export interface OptionButtonProps extends HTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export function OptionButton({
  selected = false,
  disabled = false,
  children,
  className,
  ...props
}: OptionButtonProps) {
  const cls = [
    styles.optionBtn,
    selected ? styles.optionSelected : null,
    disabled ? styles.optionDisabled : null,
    className,
  ].filter(Boolean).join(' ');

  return (
    <button type="button" className={cls} disabled={disabled} aria-pressed={selected} {...props}>
      {children}
    </button>
  );
}

// ─── Option Select Group ──────────────────────────────────────────────────────

export interface OptionItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface OptionSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  options: OptionItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export function OptionSelect({
  label,
  options,
  value,
  onChange,
  className,
  ...props
}: OptionSelectProps) {
  const cls = [styles.optionGroup, className].filter(Boolean).join(' ');

  return (
    <div className={cls} {...props}>
      {label && (
        <p className={`ds-type-input-label ${styles.optionLabel}`}>{label}</p>
      )}
      <div className={styles.optionList} role="group" aria-label={label}>
        {options.map((opt) => (
          <OptionButton
            key={opt.value}
            selected={opt.value === value}
            disabled={opt.disabled}
            onClick={() => !opt.disabled && onChange?.(opt.value)}
          >
            {opt.label}
          </OptionButton>
        ))}
      </div>
    </div>
  );
}

// ─── Color Swatch ─────────────────────────────────────────────────────────────

export interface SwatchItem {
  value: string;
  label: string;
  color: string;
  disabled?: boolean;
}

export interface ColorSwatchGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  label?: string;
  swatches: SwatchItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export function ColorSwatchGroup({
  label,
  swatches,
  value,
  onChange,
  className,
  ...props
}: ColorSwatchGroupProps) {
  const cls = [styles.swatchGroup, className].filter(Boolean).join(' ');

  return (
    <div className={cls} {...props}>
      {label && (
        <p className={`ds-type-input-label ${styles.optionLabel}`}>{label}</p>
      )}
      <div className={styles.swatchList} role="group" aria-label={label}>
        {swatches.map((swatch) => (
          <button
            key={swatch.value}
            type="button"
            className={[
              styles.swatch,
              swatch.value === value ? styles.swatchSelected : null,
              swatch.disabled ? styles.swatchDisabled : null,
            ].filter(Boolean).join(' ')}
            style={{ '--swatch-color': swatch.color } as React.CSSProperties}
            disabled={swatch.disabled}
            aria-label={swatch.label}
            aria-pressed={swatch.value === value}
            onClick={() => !swatch.disabled && onChange?.(swatch.value)}
          />
        ))}
      </div>
    </div>
  );
}
