import React from 'react';

const SIZES = {
  sm: { height: 'var(--control-h-sm)', padding: '0 12px', fontSize: 13, gap: 6, radius: 'var(--radius-md)' },
  md: { height: 'var(--control-h-md)', padding: '0 16px', fontSize: 14, gap: 7, radius: 'var(--radius-md)' },
  lg: { height: 'var(--control-h-lg)', padding: '0 22px', fontSize: 15, gap: 8, radius: 'var(--radius-lg)' },
};

const VARIANTS = {
  primary: { background: 'var(--primary-600)', color: 'var(--text-on-primary)', border: '1px solid var(--primary-600)', shadow: 'var(--shadow-xs)' },
  ai:      { background: 'var(--ai-600)', color: '#fff', border: '1px solid var(--ai-600)', shadow: 'var(--shadow-xs)' },
  secondary: { background: 'var(--surface-card)', color: 'var(--text-strong)', border: '1px solid var(--border-default)', shadow: 'var(--shadow-xs)' },
  ghost:   { background: 'transparent', color: 'var(--text-body)', border: '1px solid transparent', shadow: 'none' },
  subtle:  { background: 'var(--primary-50)', color: 'var(--primary-700)', border: '1px solid transparent', shadow: 'none' },
  danger:  { background: 'var(--danger-600)', color: '#fff', border: '1px solid var(--danger-600)', shadow: 'var(--shadow-xs)' },
};

/**
 * WheelMatch primary action button.
 */
export function Button({
  children, variant = 'primary', size = 'md', leftIcon, rightIcon,
  disabled = false, fullWidth = false, type = 'button', onClick, style, ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 600, lineHeight: 1,
        color: v.color, background: v.background, border: v.border,
        borderRadius: s.radius, boxShadow: v.shadow,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, whiteSpace: 'nowrap',
        transition: 'filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(0.5px) scale(0.99)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.filter = 'none'; }}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.filter = 'brightness(0.96)'; }}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
