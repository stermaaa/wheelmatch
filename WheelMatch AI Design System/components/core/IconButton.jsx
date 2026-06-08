import React from 'react';

const SIZES = { sm: 32, md: 38, lg: 44 };

/**
 * Square icon-only button. Pass an SVG node as children.
 */
export function IconButton({
  children, size = 'md', variant = 'ghost', label, disabled = false, onClick, style, ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const variants = {
    ghost: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid transparent' },
    secondary: { background: 'var(--surface-card)', color: 'var(--text-body)', border: '1px solid var(--border-default)' },
    subtle: { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid transparent' },
  };
  const v = variants[variant] || variants.ghost;
  return (
    <button
      type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, flex: 'none', padding: 0,
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1, ...v,
        transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
        ...style,
      }}
      onMouseEnter={(e) => { if (!disabled && variant === 'ghost') { e.currentTarget.style.background = 'var(--surface-sunken)'; e.currentTarget.style.color = 'var(--text-strong)'; } }}
      onMouseLeave={(e) => { if (variant === 'ghost') { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-muted)'; } }}
      {...rest}
    >
      {children}
    </button>
  );
}
