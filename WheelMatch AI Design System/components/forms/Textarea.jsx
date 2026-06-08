import React from 'react';

/**
 * Multi-line text input — the mission-brief paste zone.
 */
export function Textarea({ label, hint, error, rows = 5, id, style, containerStyle, ...rest }) {
  const inputId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--primary-600)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...containerStyle }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</label>}
      <textarea
        id={inputId} rows={rows}
        onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
        {...rest}
        style={{
          width: '100%', boxSizing: 'border-box', resize: 'vertical', padding: '11px 13px',
          fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-strong)',
          background: 'var(--surface-card)', border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
          boxShadow: focus ? 'var(--ring-focus)' : 'var(--shadow-xs)', outline: 'none',
          transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
          ...style,
        }}
      />
      {(hint || error) && <span style={{ fontSize: 12, color: error ? 'var(--danger-600)' : 'var(--text-muted)' }}>{error || hint}</span>}
    </div>
  );
}
