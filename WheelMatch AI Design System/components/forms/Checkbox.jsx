import React from 'react';

/**
 * Checkbox with label — used in candidate question checklists.
 */
export function Checkbox({ label, checked = false, onChange, disabled = false, tone = 'primary', style, ...rest }) {
  const accent = tone === 'success' ? 'var(--success-500)' : 'var(--primary-600)';
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-body)', opacity: disabled ? 0.55 : 1, ...style,
    }}>
      <span style={{
        width: 18, height: 18, flex: 'none', borderRadius: 'var(--radius-xs)',
        border: `1.5px solid ${checked ? accent : 'var(--border-strong)'}`,
        background: checked ? accent : 'var(--surface-card)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      }}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        )}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
      {label && <span>{label}</span>}
    </label>
  );
}
