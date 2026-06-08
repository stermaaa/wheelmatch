import React from 'react';

/**
 * Vertical app navigation rail (dark navy). Items: [{id,label,icon,count}].
 */
export function SidebarNav({ items = [], active, onSelect, header, footer, style }) {
  return (
    <nav style={{
      width: 'var(--sidebar-w)', flex: 'none', height: '100%', boxSizing: 'border-box',
      background: 'var(--surface-brand)', color: 'var(--text-on-brand)',
      display: 'flex', flexDirection: 'column', padding: '18px 14px', gap: 4, ...style,
    }}>
      {header && <div style={{ marginBottom: 14 }}>{header}</div>}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {items.map((it) => {
          if (it.section) {
            return <div key={it.section} style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: 'rgba(220,228,251,0.45)', padding: '14px 12px 6px' }}>{it.section}</div>;
          }
          const on = it.id === active;
          return (
            <button key={it.id} type="button" onClick={() => onSelect && onSelect(it.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 11, padding: '9px 12px', border: 'none',
                width: '100%', textAlign: 'left', cursor: 'pointer', borderRadius: 'var(--radius-md)',
                fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: on ? 600 : 500,
                background: on ? 'rgba(74,111,240,0.18)' : 'transparent',
                color: on ? '#fff' : 'rgba(220,228,251,0.78)',
                transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)',
              }}
              onMouseEnter={(e) => { if (!on) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#fff'; } }}
              onMouseLeave={(e) => { if (!on) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(220,228,251,0.78)'; } }}
            >
              <span style={{ display: 'inline-flex', width: 18, height: 18, flex: 'none', color: on ? 'var(--primary-400)' : 'currentColor' }}>{it.icon}</span>
              <span style={{ flex: 1 }}>{it.label}</span>
              {it.count != null && (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, padding: '1px 7px', borderRadius: 999, background: on ? 'var(--primary-600)' : 'rgba(255,255,255,0.10)', color: '#fff' }}>{it.count}</span>
              )}
            </button>
          );
        })}
      </div>
      {footer && <div style={{ marginTop: 'auto', paddingTop: 12 }}>{footer}</div>}
    </nav>
  );
}
