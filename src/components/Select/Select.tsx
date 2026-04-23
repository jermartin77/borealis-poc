import { type SelectHTMLAttributes, forwardRef } from 'react';
import { FormField, fieldStyles } from '../FormField/FormField';
import selectStyles from './Select.module.css';

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

  const selectCls = [
    fieldStyles.input,
    selectStyles.select,
    selectStyles.hasIconRight,
    icon ? selectStyles.hasIconLeft : null,
  ].filter(Boolean).join(' ');

  return (
    <FormField
      label={label}
      showLabel={showLabel}
      required={required}
      alertMessage={alertMessage}
      inputId={selectId}
      className={className}
    >
      {icon && <span className={fieldStyles.iconLeft}>{icon}</span>}
      <select
        ref={ref}
        id={selectId}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(alertMessage) || undefined}
        aria-describedby={alertMessage && selectId ? `${selectId}-error` : undefined}
        className={selectCls}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      <span className={selectStyles.selectArrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </FormField>
  );
});
