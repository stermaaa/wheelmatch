import React from 'react';

function barColor(v) {
  if (v >= 80) return 'var(--score-high)';
  if (v >= 65) return 'var(--score-mid)';
  return 'var(--score-low)';
}

/**
 * Labelled horizontal score bar — one criterion of a matching breakdown.
 */
export function ScoreBar({ label, value = 0, color, showValue = true, style }) {
  const pct = Math.max(0, Math.min(100, value));
  const fill = color || barColor(pct);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, ...style }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--text-body)', width: 120, flex: 'none' }}>{label}</span>
      <div style={{ flex: 1, height: 8, borderRadius: 999, background: 'var(--score-track)', overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', borderRadius: 999, background: fill, transition: 'width var(--dur-slow) var(--ease-out)' }} />
      </div>
      {showValue && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', width: 34, textAlign: 'right', flex: 'none' }}>{Math.round(pct)}</span>
      )}
    </div>
  );
}
