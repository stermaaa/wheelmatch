import React from 'react';

/**
 * Toggle switch — anonymisation, remote, premium options.
 */
export function Switch({ checked = false, onChange, label, disabled = false, tone = 'primary', style, ...rest }) {
  const on = tone === 'ai' ? 'var(--ai-600)' : 'var(--primary-600)';
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--text-body)', opacity: disabled ? 0.55 : 1, ...style,
    }}>
      <span
        onClick={() => { if (!disabled && onChange) onChange(!checked); }}
        style={{
          width: 38, height: 22, flex: 'none', borderRadius: 999, position: 'relative',
          background: checked ? on : 'var(--slate-300)',
          transition: 'background var(--dur-base) var(--ease-out)',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 18 : 2, width: 18, height: 18, borderRadius: 999,
          background: '#fff', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label && <span>{label}</span>}
    </label>
  );
}
