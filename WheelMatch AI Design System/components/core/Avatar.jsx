import React from 'react';

const SIZES = { xs: 24, sm: 32, md: 40, lg: 48 };
const PALETTE = ['var(--primary-600)', 'var(--ai-600)', 'var(--success-600)', 'var(--info-600)', 'var(--warning-600)'];

function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0] || '').join('').toUpperCase();
}

/**
 * User / candidate avatar with deterministic color fallback.
 */
export function Avatar({ name = '', src, size = 'md', status, style, ...rest }) {
  const dim = SIZES[size] || SIZES.md;
  const color = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  const statusColor = { available: 'var(--success-500)', busy: 'var(--warning-500)', off: 'var(--slate-400)' }[status];
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flex: 'none', ...style }} {...rest}>
      {src ? (
        <img src={src} alt={name} width={dim} height={dim}
          style={{ width: dim, height: dim, borderRadius: 999, objectFit: 'cover', display: 'block' }} />
      ) : (
        <span style={{
          width: dim, height: dim, borderRadius: 999, background: color, color: '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: dim * 0.38, letterSpacing: '-0.01em',
        }}>{initials(name)}</span>
      )}
      {statusColor && (
        <span style={{
          position: 'absolute', right: -1, bottom: -1, width: dim * 0.28, height: dim * 0.28,
          minWidth: 8, minHeight: 8, borderRadius: 999, background: statusColor,
          border: '2px solid var(--surface-card)',
        }} />
      )}
    </span>
  );
}
