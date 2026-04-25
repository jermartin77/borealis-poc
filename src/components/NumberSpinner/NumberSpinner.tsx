import { type HTMLAttributes, useId, useState } from 'react';
import { FormField } from '../FormField/FormField';
import { Icon } from '../Icon/Icon';
import styles from './NumberSpinner.module.css';

export interface NumberSpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  size?: 'sm' | 'md';
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  alertMessage?: string;
}

export function NumberSpinner({
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min,
  max,
  step = 1,
  disabled,
  size = 'md',
  label,
  showLabel = true,
  required,
  alertMessage,
  className,
  id,
  ...props
}: NumberSpinnerProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = isControlled ? controlledValue : internalValue;

  const atMin = min !== undefined && value <= min;
  const atMax = max !== undefined && value >= max;

  function increment() {
    const next = value + step;
    const clamped = max !== undefined ? Math.min(next, max) : next;
    if (!isControlled) setInternalValue(clamped);
    onChange?.(clamped);
  }

  function decrement() {
    const next = value - step;
    const clamped = min !== undefined ? Math.max(next, min) : next;
    if (!isControlled) setInternalValue(clamped);
    onChange?.(clamped);
  }

  const spinnerCls = [
    styles.spinner,
    styles[size],
    alertMessage ? styles.error : null,
    disabled ? styles.disabled : null,
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
      <div
        role="spinbutton"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-disabled={disabled}
        aria-labelledby={label ? `${inputId}-label` : undefined}
        className={spinnerCls}
        {...props}
      >
        <button
          type="button"
          className={styles.btn}
          onClick={decrement}
          disabled={disabled || atMin}
          aria-label="Decrease"
          tabIndex={disabled ? -1 : 0}
        >
          <Icon name="minus" size={size === 'sm' ? 14 : 16} />
        </button>
        <span className={styles.value}>{value}</span>
        <button
          type="button"
          className={styles.btn}
          onClick={increment}
          disabled={disabled || atMax}
          aria-label="Increase"
          tabIndex={disabled ? -1 : 0}
        >
          <Icon name="plus" size={size === 'sm' ? 14 : 16} />
        </button>
      </div>
    </FormField>
  );
}
