import React from 'react';

/**
 * Native select styled to match the system. `options` = [{value,label}] or strings.
 */
export function Select({ label, options = [], size = 'md', id, value, onChange, style, containerStyle, ...rest }) {
  const heights = { sm: 'var(--control-h-sm)', md: 'var(--control-h-md)', lg: 'var(--control-h-lg)' };
  const inputId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...containerStyle }}>
      {label && <label htmlFor={inputId} style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-strong)' }}>{label}</label>}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={inputId} value={value} onChange={onChange} {...rest}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%', height: heights[size],
            padding: '0 34px 0 12px', fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500,
            color: 'var(--text-strong)', background: 'var(--surface-card)',
            border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-xs)', outline: 'none', cursor: 'pointer', ...style,
          }}
        >
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <span style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-faint)' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </div>
    </div>
  );
}
