// WheelMatch AI — App shell: Sidebar, Topbar, PageHeader, helpers.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { SidebarNav, Avatar, IconButton, Badge } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;

  const NAV = [
    { id: 'dashboard', label: 'Dashboard', icon: <Icon name="dashboard" /> },
    { section: 'Pipeline' },
    { id: 'missions', label: 'Missions', count: 14, icon: <Icon name="briefcase" /> },
    { id: 'shortlist', label: 'Shortlist', count: 5, icon: <Icon name="shortlist" /> },
    { id: 'talents', label: 'Talents', icon: <Icon name="users" /> },
    { id: 'cv', label: 'CV Generator', icon: <Icon name="sparkles" /> },
    { section: 'Cabinet' },
    { id: 'history', label: 'Historique', icon: <Icon name="history" /> },
    { id: 'templates', label: 'Templates', icon: <Icon name="template" /> },
    { id: 'settings', label: 'Paramètres', icon: <Icon name="settings" /> },
  ];

  function Logo() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '4px 8px 2px' }}>
        <img src="../../assets/logo-mark-light.svg" width="34" height="34" alt="WheelMatch AI" />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>
          WheelMatch <span style={{ color: 'var(--primary-400)' }}>AI</span>
        </span>
      </div>
    );
  }

  function SidebarFooter() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 10px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <Avatar name={D.user.name} size="sm" status="available" />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{D.user.name}</div>
          <div style={{ fontSize: 11, color: 'rgba(220,228,251,0.55)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{D.user.firm}</div>
        </div>
      </div>
    );
  }

  function Sidebar({ page, setPage }) {
    return <SidebarNav items={NAV} active={page} onSelect={setPage} header={<Logo />} footer={<SidebarFooter />} />;
  }

  function Topbar({ title, crumb }) {
    return (
      <header style={{
        height: 'var(--topbar-h)', flex: 'none', display: 'flex', alignItems: 'center', gap: 16,
        padding: '0 28px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-card)',
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {crumb && <div style={{ fontSize: 12, color: 'var(--text-faint)', fontWeight: 600, marginBottom: 2 }}>{crumb}</div>}
          <h1 style={{ margin: 0, fontSize: 19, fontWeight: 700, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>{title}</h1>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, height: 38, padding: '0 12px', width: 260, background: 'var(--surface-inset)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)' }}>
          <Icon name="search" size={16} color="var(--text-faint)" />
          <span style={{ fontSize: 13.5, color: 'var(--text-faint)' }}>Rechercher un talent, une mission…</span>
        </div>
        <IconButton label="Notifications"><Icon name="bell" size={19} /></IconButton>
        <Avatar name={D.user.name} size="md" status="available" />
      </header>
    );
  }

  function PageHeader({ title, subtitle, actions }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, marginBottom: 22 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>{title}</h2>
          {subtitle && <p style={{ margin: '6px 0 0', fontSize: 14.5, color: 'var(--text-muted)', maxWidth: 620 }}>{subtitle}</p>}
        </div>
        {actions && <div style={{ display: 'flex', gap: 10, flex: 'none' }}>{actions}</div>}
      </div>
    );
  }

  // Section title used inside cards
  function SectionLabel({ icon, children, accent = 'var(--text-faint)' }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
        {icon && <Icon name={icon} size={15} color={accent} />}
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11.5, fontWeight: 700, letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase', color: accent }}>{children}</span>
      </div>
    );
  }

  window.WMShell = { Sidebar, Topbar, PageHeader, SectionLabel, NAV };
})();
