// WheelMatch AI — Settings: team & permissions.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Avatar, Switch, Select } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  const PERM = { Admin: 'primary', 'Éditeur': 'info', Lecture: 'neutral' };

  function Settings() {
    const [aiCheck, setAiCheck] = React.useState(true);
    const [anonDefault, setAnonDefault] = React.useState(false);
    return (
      <div>
        <PageHeader
          title="Paramètres de l'équipe"
          subtitle="Gérez les membres, les permissions et les réglages IA du cabinet."
          actions={<Button variant="primary" leftIcon={<Icon name="plus" size={16} />}>Inviter un membre</Button>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, alignItems: 'start' }}>
          <Card padding="lg">
            <SectionLabel icon="users">Membres de l'équipe · {D.team.length}</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {D.team.map((u, i) => (
                <div key={u.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 0', borderTop: i ? '1px solid var(--border-subtle)' : 'none' }}>
                  <Avatar name={u.name} size="md" status={u.status} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{u.name}</div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{u.role} · {u.email}</div>
                  </div>
                  <Badge tone={PERM[u.perm]}>{u.perm}</Badge>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', padding: 6 }}><Icon name="more" size={18} /></button>
                </div>
              ))}
            </div>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Card padding="lg">
              <SectionLabel icon="shield" accent="var(--success-600)">Garde-fous IA</SectionLabel>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Mode anti-hallucination</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>Signaler chaque compétence non sourcée dans le CV.</div>
                </div>
                <Switch checked={aiCheck} onChange={setAiCheck} tone="ai" />
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: '10px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-strong)' }}>Anonymisation par défaut</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginTop: 2 }}>Masquer le candidat sur les premiers envois.</div>
                </div>
                <Switch checked={anonDefault} onChange={setAnonDefault} />
              </div>
            </Card>

            <Card padding="lg">
              <SectionLabel icon="settings">Préférences cabinet</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Select label="Langue des CV générés" options={['Français', 'Anglais', 'Bilingue FR / EN']} />
                <Select label="Template par défaut" options={D.templates.map((t) => t.name)} />
                <Select label="Devise TJM" options={['Euro (€)', 'Dollar ($)', 'Livre (£)']} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  window.WMSettings = Settings;
})();
