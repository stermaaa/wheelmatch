import React from 'react';

const STATES = {
  confirmed: { fg: 'var(--confidence-confirmed-fg)', bg: 'var(--confidence-confirmed-bg)', bd: 'var(--confidence-confirmed-bd)', dot: 'var(--success-500)', label: 'Confirmé dans le CV' },
  pending:   { fg: 'var(--confidence-pending-fg)', bg: 'var(--confidence-pending-bg)', bd: 'var(--confidence-pending-bd)', dot: 'var(--warning-500)', label: 'À confirmer' },
  absent:    { fg: 'var(--confidence-absent-fg)', bg: 'var(--confidence-absent-bg)', bd: 'var(--confidence-absent-bd)', dot: 'var(--slate-400)', label: 'Absent du CV' },
};

const ICONS = {
  confirmed: <polyline points="20 6 9 17 4 12" />,
  pending: <><circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
  absent: <line x1="5" y1="12" x2="19" y2="12" />,
};

/**
 * Anti-hallucination confidence badge. The signature trust component.
 */
export function ConfidenceBadge({ state = 'pending', children, size = 'md', style, ...rest }) {
  const s = STATES[state] || STATES.pending;
  const fs = size === 'sm' ? 11 : 12.5;
  const pad = size === 'sm' ? '3px 9px' : '4px 11px';
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6, padding: pad,
        fontFamily: 'var(--font-sans)', fontSize: fs, fontWeight: 600, lineHeight: 1.25,
        color: s.fg, background: s.bg, border: `1px solid ${s.bd}`, borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={s.fg} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">{ICONS[state]}</svg>
      {children || s.label}
    </span>
  );
}
