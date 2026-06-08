import React from 'react';

/**
 * Dashboard KPI tile with value, label, optional trend and icon.
 */
export function StatCard({ label, value, unit, icon, trend, trendDir = 'up', accent = 'primary', style }) {
  const accents = {
    primary: 'var(--primary-600)', ai: 'var(--ai-600)', success: 'var(--success-600)',
    warning: 'var(--warning-600)', info: 'var(--info-600)', neutral: 'var(--slate-500)',
  };
  const tints = {
    primary: 'var(--primary-50)', ai: 'var(--ai-50)', success: 'var(--success-50)',
    warning: 'var(--warning-50)', info: 'var(--info-50)', neutral: 'var(--slate-100)',
  };
  const trendColor = trendDir === 'down' ? 'var(--danger-600)' : 'var(--success-600)';
  return (
    <div style={{
      background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', padding: 18,
      display: 'flex', flexDirection: 'column', gap: 12, ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-muted)' }}>{label}</span>
        {icon && (
          <span style={{ width: 32, height: 32, borderRadius: 'var(--radius-md)', background: tints[accent], color: accents[accent], display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>{icon}</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--text-strong)', letterSpacing: '-0.02em', lineHeight: 1 }}>{value}</span>
        {unit && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 600, color: 'var(--text-muted)' }}>{unit}</span>}
      </div>
      {trend && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12.5 }}>
          <span style={{ color: trendColor, fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 2 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              {trendDir === 'down' ? <polyline points="6 9 12 15 18 9"/> : <polyline points="18 15 12 9 6 15"/>}
            </svg>
            {trend}
          </span>
          <span style={{ color: 'var(--text-faint)' }}>cette semaine</span>
        </div>
      )}
    </div>
  );
}
