import { type ChangeEvent, type InputHTMLAttributes, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FormField, fieldStyles } from '../FormField/FormField';
import { Icon, type IconName } from '../Icon/Icon';
import inputStyles from './Input.module.css';

// ─── Text Input ───────────────────────────────────────────────────────────────

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  iconLeft?: IconName | '';
  iconRight?: IconName | '' | React.ReactNode;
  alertMessage?: string;
  inputClassName?: string;
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
    inputClassName,
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
    inputClassName ?? null,
  ].filter(Boolean).join(' ');

  const renderRightIcon = () => {
    if (!iconRight) return null;
    if (typeof iconRight === 'string') {
      return <Icon name={iconRight} />;
    }
    return iconRight;
  };

  return (
    <FormField
      label={label}
      showLabel={showLabel}
      required={required}
      alertMessage={alertMessage}
      inputId={inputId}
      className={className}
    >
      {iconLeft && <span className={fieldStyles.iconLeft}><Icon name={iconLeft} /></span>}
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
      {iconRight && <span className={fieldStyles.iconRight}>{renderRightIcon()}</span>}
    </FormField>
  );
});

// ─── Search Input ─────────────────────────────────────────────────────────────

export type SearchInputProps = Omit<InputProps, 'iconLeft' | 'label' | 'showLabel' | 'inputClassName'> & {
  onClear?: () => void;
};

const searchIconSvg = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="8.75" cy="8.75" r="5.625" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M13.125 13.125L16.25 16.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  { className, onChange, value, defaultValue, onClear, disabled, ...props },
  forwardedRef
) {
  const innerRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(forwardedRef, () => innerRef.current!);

  const isControlled = value !== undefined;
  const [hasValue, setHasValue] = useState(() => Boolean(defaultValue));
  const showClear = !disabled && (isControlled ? Boolean(value) : hasValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!isControlled) setHasValue(Boolean(e.target.value));
    onChange?.(e);
  }

  function handleClear() {
    innerRef.current?.focus();
    if (!isControlled && innerRef.current) {
      innerRef.current.value = '';
      setHasValue(false);
    }
    onClear?.();
  }

  const rightContent = (
    <span className={inputStyles.searchRight}>
      <button
        type="button"
        className={inputStyles.clearButton}
        aria-label="Clear search"
        aria-hidden={!showClear || undefined}
        tabIndex={showClear ? 0 : -1}
        onClick={handleClear}
        style={showClear ? undefined : { visibility: 'hidden', pointerEvents: 'none' }}
      >
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
          <path d="M1.5 1.5L6.5 6.5M6.5 1.5L1.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {searchIconSvg}
    </span>
  );

  return (
    <Input
      ref={innerRef}
      iconRight={rightContent}
      inputClassName={inputStyles.hasSearchClear}
      placeholder="Search…"
      type="search"
      className={className}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={handleChange}
      {...props}
    />
  );
});
