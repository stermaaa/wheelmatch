import React from 'react';

/**
 * Text input with optional label, leading icon and hint/error.
 */
export function Input({
  label, hint, error, leftIcon, size = 'md', id, style, containerStyle, ...rest
}) {
  const heights = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--primary-600)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...containerStyle }}>
      {label && (
        <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, height: heights[size], padding: '0 12px',
        background: 'var(--surface-card)', border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? (error ? 'var(--ring-danger)' : 'var(--ring-focus)') : 'var(--shadow-xs)',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {leftIcon && <span style={{ color: 'var(--text-faint)', display: 'inline-flex', flex: 'none' }}>{leftIcon}</span>}
        <input
          id={inputId}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: size === 'lg' ? 15 : 14, color: 'var(--text-strong)',
            minWidth: 0, ...style,
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 12, color: error ? 'var(--danger-600)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
