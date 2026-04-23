import { type InputHTMLAttributes, forwardRef } from 'react';
import { FormField, fieldStyles } from '../FormField/FormField';
import inputStyles from './Input.module.css';

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

  const inputCls = [
    fieldStyles.input,
    iconLeft  ? inputStyles.hasIconLeft  : null,
    iconRight ? inputStyles.hasIconRight : null,
  ].filter(Boolean).join(' ');

  return (
    <FormField
      label={label}
      showLabel={showLabel}
      required={required}
      alertMessage={alertMessage}
      inputId={inputId}
      className={className}
    >
      {iconLeft && <span className={fieldStyles.iconLeft}>{iconLeft}</span>}
      <input
        ref={ref}
        id={inputId}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(alertMessage) || undefined}
        aria-describedby={alertMessage && inputId ? `${inputId}-error` : undefined}
        className={inputCls}
        {...props}
      />
      {iconRight && <span className={fieldStyles.iconRight}>{iconRight}</span>}
    </FormField>
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
