import React from 'react';

/**
 * Surface container. The base building block for panels & cards.
 */
export function Card({ children, padding = 'md', interactive = false, selected = false, style, ...rest }) {
  const pads = { none: 0, sm: 14, md: 20, lg: 28 };
  return (
    <div
      style={{
        background: 'var(--surface-card)',
        border: `1px solid ${selected ? 'var(--primary-600)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: selected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding: pads[padding] ?? pads.md,
        transition: 'box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={(e) => { if (interactive) { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.borderColor = 'var(--border-default)'; } }}
      onMouseLeave={(e) => { if (interactive && !selected) { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; } }}
      {...rest}
    >
      {children}
    </div>
  );
}
