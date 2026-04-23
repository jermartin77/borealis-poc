import { type TextareaHTMLAttributes, forwardRef } from 'react';
import { FormField, fieldStyles } from '../FormField/FormField';
import textareaStyles from './Textarea.module.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  showLabel?: boolean;
  required?: boolean;
  alertMessage?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    label,
    showLabel = true,
    required,
    alertMessage,
    className,
    id,
    disabled,
    ...props
  },
  ref
) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <FormField
      label={label}
      showLabel={showLabel}
      required={required}
      alertMessage={alertMessage}
      inputId={inputId}
      className={className}
    >
      <textarea
        ref={ref}
        id={inputId}
        disabled={disabled}
        required={required}
        aria-invalid={Boolean(alertMessage) || undefined}
        aria-describedby={alertMessage && inputId ? `${inputId}-error` : undefined}
        className={[fieldStyles.input, textareaStyles.textarea].join(' ')}
        {...props}
      />
    </FormField>
  );
});
