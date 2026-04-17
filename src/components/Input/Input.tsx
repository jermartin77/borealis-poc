import { type InputHTMLAttributes, type SelectHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';

// ─── Text Input ───────────────────────────────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  alertMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    showLabel = true,
    required,
    iconLeft,
    iconRight,
    alertMessage,
    className,
    id,
    disabled,
    ...props
  },
  ref
) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isAlert = Boolean(alertMessage);

  const wrapCls = [isAlert ? styles.alert : null, className].filter(Boolean).join(' ');
  const inputCls = [
    styles.input,
    iconLeft  ? styles.hasIconLeft  : null,
    iconRight ? styles.hasIconRight : null,
  ].filter(Boolean).join(' ');

  return (
    <div className={[styles.field, wrapCls].filter(Boolean).join(' ')}>
      {showLabel && label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden>*</span>}
        </label>
      )}
      <div className={styles.inputWrap}>
        {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={isAlert || undefined}
          aria-describedby={isAlert && inputId ? `${inputId}-error` : undefined}
          className={inputCls}
          {...props}
        />
        {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      </div>
      {isAlert && alertMessage && (
        <span id={inputId ? `${inputId}-error` : undefined} className={styles.alertMessage} role="alert">
          {alertMessage}
        </span>
      )}
    </div>
  );
});

// ─── Select ───────────────────────────────────────────────────────────────────

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  icon?: React.ReactNode;
  alertMessage?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    showLabel = true,
    required,
    icon,
    alertMessage,
    options,
    placeholder,
    className,
    id,
    disabled,
    ...props
  },
  ref
) {
  const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const isAlert = Boolean(alertMessage);

  const wrapCls = [isAlert ? styles.alert : null, className].filter(Boolean).join(' ');
  const selectCls = [styles.input, styles.select, styles.hasIconRight].filter(Boolean).join(' ');

  return (
    <div className={[styles.field, wrapCls].filter(Boolean).join(' ')}>
      {showLabel && label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden>*</span>}
        </label>
      )}
      <div className={styles.inputWrap}>
        {icon && <span className={styles.iconLeft}>{icon}</span>}
        <select
          ref={ref}
          id={selectId}
          disabled={disabled}
          required={required}
          aria-invalid={isAlert || undefined}
          className={[selectCls, icon ? styles.hasIconLeft : null].filter(Boolean).join(' ')}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span className={styles.selectArrow}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {isAlert && alertMessage && (
        <span id={selectId ? `${selectId}-error` : undefined} className={styles.alertMessage} role="alert">
          {alertMessage}
        </span>
      )}
    </div>
  );
});

// ─── Search Input ─────────────────────────────────────────────────────────────

export type SearchInputProps = Omit<InputProps, 'iconLeft' | 'label' | 'showLabel'>;

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, ...props },
  ref
) {
  const searchIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  return (
    <Input
      ref={ref}
      iconLeft={searchIcon}
      placeholder="Search…"
      type="search"
      className={className}
      {...props}
    />
  );
});
