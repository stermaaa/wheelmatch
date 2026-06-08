import React from 'react';

/**
 * Tab strip. `variant="underline"` (default) or `variant="segmented"` (pill group).
 */
export function Tabs({ tabs = [], value, onChange, variant = 'underline', size = 'md', style }) {
  const norm = tabs.map((t) => (typeof t === 'string' ? { id: t, label: t } : t));
  const fs = size === 'sm' ? 13 : 14;
  if (variant === 'segmented') {
    return (
      <div style={{ display: 'inline-flex', gap: 3, padding: 3, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-lg)', ...style }}>
        {norm.map((t) => {
          const active = t.id === value;
          return (
            <button key={t.id} type="button" onClick={() => onChange && onChange(t.id)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '7px 14px', border: 'none',
                fontFamily: 'var(--font-sans)', fontSize: fs, fontWeight: 600, cursor: 'pointer',
                borderRadius: 'var(--radius-md)', whiteSpace: 'nowrap',
                background: active ? 'var(--surface-card)' : 'transparent',
                color: active ? 'var(--text-strong)' : 'var(--text-muted)',
                boxShadow: active ? 'var(--shadow-xs)' : 'none',
                transition: 'all var(--dur-fast) var(--ease-out)',
              }}>
              {t.icon}{t.label}
              {t.count != null && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: active ? 'var(--primary-600)' : 'var(--text-faint)' }}>{t.count}</span>}
            </button>
          );
        })}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--border-subtle)', ...style }}>
      {norm.map((t) => {
        const active = t.id === value;
        return (
          <button key={t.id} type="button" onClick={() => onChange && onChange(t.id)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 7, padding: '11px 2px', border: 'none', background: 'transparent',
              fontFamily: 'var(--font-sans)', fontSize: fs, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
              color: active ? 'var(--primary-700)' : 'var(--text-muted)',
              borderBottom: `2px solid ${active ? 'var(--primary-600)' : 'transparent'}`, marginBottom: -1,
              transition: 'color var(--dur-fast) var(--ease-out)',
            }}>
            {t.icon}{t.label}
            {t.count != null && (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, padding: '1px 6px', borderRadius: 999,
                background: active ? 'var(--primary-50)' : 'var(--surface-sunken)', color: active ? 'var(--primary-700)' : 'var(--text-faint)',
              }}>{t.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
