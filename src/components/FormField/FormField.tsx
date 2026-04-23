import type { ReactNode } from 'react';
import { StatusIcon } from '../Icon/StatusIcon';
import fieldStyles from './field.module.css';

export interface FormFieldProps {
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  alertMessage?: string;
  inputId?: string;
  className?: string;
  children: ReactNode;
}

export function FormField({
  label,
  showLabel = true,
  required,
  alertMessage,
  inputId,
  className,
  children,
}: FormFieldProps) {
  return (
    <div
      className={[
        fieldStyles.field,
        alertMessage ? fieldStyles.alert : null,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showLabel && label && (
        <label htmlFor={inputId} className={fieldStyles.label}>
          {label}
          {required && (
            <span className={fieldStyles.required} aria-hidden>
              *
            </span>
          )}
        </label>
      )}
      <div className={fieldStyles.inputWrap}>{children}</div>
      {alertMessage && (
        <span
          id={inputId ? `${inputId}-error` : undefined}
          className={fieldStyles.alertMessage}
          role="alert"
        >
          <StatusIcon name="alert" aria-hidden />
          {alertMessage}
        </span>
      )}
    </div>
  );
}

export { fieldStyles };
