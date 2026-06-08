// WheelMatch AI — Dashboard screen.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { StatCard, Card, Button, Badge, Avatar, ScoreGauge } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  const ACT_ICON = {
    cv: { name: 'file', color: 'var(--ai-600)', bg: 'var(--ai-50)' },
    ai: { name: 'sparkles', color: 'var(--ai-600)', bg: 'var(--ai-50)' },
    send: { name: 'mail', color: 'var(--info-600)', bg: 'var(--info-50)' },
    win: { name: 'checkCircle', color: 'var(--success-600)', bg: 'var(--success-50)' },
  };

  function ActivityRow({ a }) {
    const ic = ACT_ICON[a.kind] || ACT_ICON.cv;
    return (
      <div style={{ display: 'flex', gap: 12, padding: '13px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <span style={{ width: 34, height: 34, flex: 'none', borderRadius: 'var(--radius-md)', background: ic.bg, color: ic.color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={ic.name} size={17} />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, color: 'var(--text-body)', lineHeight: 1.45 }}>
            <strong style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{a.who}</strong> {a.action} <strong style={{ color: 'var(--text-strong)', fontWeight: 600 }}>{a.target}</strong>
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>{a.ctx}</div>
        </div>
        <span style={{ fontSize: 12, color: 'var(--text-faint)', whiteSpace: 'nowrap', flex: 'none' }}>{a.time}</span>
      </div>
    );
  }

  function Dashboard({ goMission }) {
    const m = D.currentMission;
    return (
      <div>
        <PageHeader
          title={`Bonjour ${D.user.name.split(' ')[0]} 👋`}
          subtitle="Voici l'état de votre pipeline de placement cette semaine."
          actions={<Button variant="ai" size="lg" leftIcon={<Icon name="plus" size={17} />} onClick={goMission}>Nouvelle mission</Button>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 22 }}>
          {D.kpis.map((k) => (
            <StatCard key={k.id} label={k.label} value={k.value} unit={k.unit} trend={k.trend} trendDir={k.dir} accent={k.accent} icon={<Icon name={k.icon} size={17} />} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 18, alignItems: 'start' }}>
          <Card padding="lg">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <SectionLabel icon="zap" accent="var(--primary-600)">Mission prioritaire</SectionLabel>
              <Badge tone="danger" dot>Urgent · démarrage &lt; 1 mois</Badge>
            </div>
            <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
              <ScoreGauge value={91} size={104} label="Top match" />
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 700, color: 'var(--text-strong)', letterSpacing: '-0.01em' }}>{m.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--text-muted)', fontSize: 13.5, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="building" size={14} />{m.client}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="mapPin" size={14} />{m.location}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Icon name="euro" size={14} />{m.budget}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Avatar name="Thomas Martin" size="sm" status="available" />
                  <span style={{ fontSize: 13.5, color: 'var(--text-body)' }}><strong style={{ color: 'var(--text-strong)' }}>Thomas Martin</strong> — meilleur profil identifié</span>
                  <Button variant="secondary" size="sm" rightIcon={<Icon name="arrowRight" size={15} />} onClick={goMission} style={{ marginLeft: 'auto' }}>Ouvrir</Button>
                </div>
              </div>
            </div>
          </Card>

          <Card padding="lg">
            <SectionLabel icon="refresh">Activité récente</SectionLabel>
            <div>
              {D.activity.map((a) => <ActivityRow key={a.id} a={a} />)}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  window.WMDashboard = Dashboard;
})();
