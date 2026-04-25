import { type InputHTMLAttributes, forwardRef, useId } from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  isAlert?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { label, isAlert, disabled, className, id, ...props },
  ref
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const wrapCls = [
    styles.wrapper,
    disabled ? styles.disabled : null,
    isAlert ? styles.alert : null,
    className,
  ].filter(Boolean).join(' ');

  return (
    <label htmlFor={inputId} className={wrapCls}>
      <span className={styles.control}>
        <input
          ref={ref}
          type="radio"
          id={inputId}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        <span className={styles.circle}>
          <span className={styles.dot} aria-hidden />
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
