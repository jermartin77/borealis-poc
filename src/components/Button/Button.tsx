import { type ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  // Background/brand + Foreground/on-brand
  primary: {
    backgroundColor: 'var(--ds-background-brand)',
    color: 'var(--ds-foreground-on-brand)',
    border: 'none',
  },
  // Background/inverse + Foreground/on-inverse
  secondary: {
    backgroundColor: 'var(--ds-background-inverse)',
    color: 'var(--ds-foreground-on-inverse)',
    border: 'none',
  },
  // Background/primary + Foreground/tertiary + Border/secondary
  tertiary: {
    backgroundColor: 'var(--ds-background-primary)',
    color: 'var(--ds-foreground-tertiary)',
    border: `var(--ds-button-border-weight) solid var(--ds-border-secondary)`,
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  lg: {
    paddingInline: 'var(--ds-button-padding-horizontal-lg)',
    paddingBlock: 'var(--ds-button-padding-vertical-lg)',
    gap: 'var(--ds-button-gap-lg)',
    fontSize: 'var(--ds-text-button-large)',
  },
  md: {
    paddingInline: 'var(--ds-button-padding-horizontal-md)',
    paddingBlock: 'var(--ds-button-padding-vertical-md)',
    gap: 'var(--ds-button-gap-md)',
    fontSize: 'var(--ds-text-button-medium)',
  },
  sm: {
    paddingInline: 'var(--ds-button-padding-horizontal-sm)',
    paddingBlock: 'var(--ds-button-padding-vertical-sm)',
    gap: 'var(--ds-button-gap-sm)',
    fontSize: 'var(--ds-text-button-small)',
  },
};

const baseStyle: React.CSSProperties = {
  fontFamily: 'var(--ds-font-family-display)',
  fontWeight: 'var(--ds-font-weight-medium)' as never,
  borderRadius: 'var(--ds-radius-md)',
  lineHeight: 1,
  letterSpacing: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'opacity 0.15s ease',
  boxSizing: 'border-box',
};

export function Button({
  variant = 'primary',
  size = 'md',
  label,
  leftIcon,
  rightIcon,
  style,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      style={{
        ...baseStyle,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...(disabled ? { opacity: 0.4, cursor: 'not-allowed' } : {}),
        ...style,
      }}
      {...props}
    >
      {leftIcon && <span style={{ display: 'flex', flexShrink: 0 }}>{leftIcon}</span>}
      {label}
      {rightIcon && <span style={{ display: 'flex', flexShrink: 0 }}>{rightIcon}</span>}
    </button>
  );
}
