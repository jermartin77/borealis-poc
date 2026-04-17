import { type InputHTMLAttributes, forwardRef, useId } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  isAlert?: boolean;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, isAlert, indeterminate, disabled, className, id, ...props },
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
          type="checkbox"
          id={inputId}
          disabled={disabled}
          className={styles.input}
          {...(indeterminate ? { ref: (el) => {
            if (el) el.indeterminate = true;
            if (typeof ref === 'function') ref(el);
            else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
          }} : {})}
          {...props}
        />
        <span className={styles.box}>
          <svg className={styles.check} width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
            <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.mixed} aria-hidden />
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
});
