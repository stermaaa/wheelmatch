import React from 'react';

const TONES = {
  neutral: { bg: 'var(--slate-100)', fg: 'var(--slate-600)', bd: 'var(--slate-200)' },
  primary: { bg: 'var(--primary-50)', fg: 'var(--primary-700)', bd: 'var(--primary-100)' },
  ai:      { bg: 'var(--ai-50)', fg: 'var(--ai-700)', bd: 'var(--ai-100)' },
  success: { bg: 'var(--success-50)', fg: 'var(--success-700)', bd: 'var(--success-100)' },
  warning: { bg: 'var(--warning-50)', fg: 'var(--warning-700)', bd: 'var(--warning-100)' },
  danger:  { bg: 'var(--danger-50)', fg: 'var(--danger-700)', bd: 'var(--danger-100)' },
  info:    { bg: 'var(--info-50)', fg: 'var(--info-600)', bd: 'var(--info-100)' },
};

/**
 * Compact status / category label.
 */
export function Badge({ children, tone = 'neutral', size = 'md', dot = false, solid = false, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === 'sm' ? '2px 8px' : '3px 10px';
  const fs = size === 'sm' ? 11 : 12;
  const base = solid
    ? { background: t.fg, color: '#fff', border: '1px solid transparent' }
    : { background: t.bg, color: t.fg, border: `1px solid ${t.bd}` };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: pad,
        fontFamily: 'var(--font-sans)', fontSize: fs, fontWeight: 600, lineHeight: 1.3,
        borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap', ...base, ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: 999, background: solid ? '#fff' : t.fg, flex: 'none' }} />}
      {children}
    </span>
  );
}
