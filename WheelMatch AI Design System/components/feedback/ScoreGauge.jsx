import React from 'react';

function scoreColor(v) {
  if (v >= 80) return 'var(--score-high)';
  if (v >= 65) return 'var(--score-mid)';
  return 'var(--score-low)';
}

/**
 * Radial matching-score gauge. The product's hero data viz.
 */
export function ScoreGauge({ value = 0, size = 96, stroke, label, showValue = true }) {
  const sw = stroke || Math.max(6, Math.round(size * 0.09));
  const r = (size - sw) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  const dash = (pct / 100) * c;
  const color = scoreColor(pct);
  return (
    <div style={{ position: 'relative', width: size, height: size, flex: 'none' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--score-track)" strokeWidth={sw} />
        <circle
          cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={sw}
          strokeLinecap="round" strokeDasharray={`${dash} ${c}`}
          style={{ transition: 'stroke-dasharray var(--dur-slow) var(--ease-out)' }}
        />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 0,
      }}>
        {showValue && (
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: size * 0.28, color, letterSpacing: '-0.02em', lineHeight: 1 }}>
            {Math.round(pct)}<span style={{ fontSize: size * 0.15 }}>%</span>
          </span>
        )}
        {label && <span style={{ fontFamily: 'var(--font-sans)', fontSize: Math.max(9, size * 0.1), fontWeight: 600, color: 'var(--text-muted)', marginTop: 2 }}>{label}</span>}
      </div>
    </div>
  );
}
