// WheelMatch AI — Shortlist: ranked profiles with scores + filters.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Avatar, ScoreGauge, Select } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  const STATUS = {
    available: { label: 'Disponible', tone: 'success' },
    busy: { label: 'En mission', tone: 'warning' },
    off: { label: 'Indisponible', tone: 'neutral' },
  };

  function MiniBar({ label, value }) {
    const color = value >= 80 ? 'var(--success-500)' : value >= 65 ? 'var(--warning-500)' : 'var(--danger-500)';
    return (
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 4 }}>
          <span style={{ color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--text-strong)' }}>{value}</span>
        </div>
        <div style={{ height: 5, borderRadius: 999, background: 'var(--score-track)' }}>
          <div style={{ width: `${value}%`, height: '100%', borderRadius: 999, background: color }} />
        </div>
      </div>
    );
  }

  function ProfileCard({ t, rank, onOpen }) {
    const st = STATUS[t.status];
    const top3 = Object.entries(t.breakdown).slice(0, 4);
    return (
      <Card interactive padding="md" onClick={() => onOpen(t.id)} style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, width: 108, flex: 'none' }}>
          <ScoreGauge value={t.score} size={84} />
          <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-faint)', letterSpacing: '0.04em' }}>#{rank} MATCH</span>
        </div>
        <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--border-subtle)' }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 8 }}>
            <Avatar name={t.name} size="md" status={t.status} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>{t.name}</span>
                <Badge tone={st.tone} size="sm" dot>{st.label}</Badge>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{t.title} · {t.seniority} · {t.contract}</div>
            </div>
            <div style={{ textAlign: 'right', flex: 'none' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 700, color: 'var(--text-strong)' }}>{t.tjm} €</div>
              <div style={{ fontSize: 11.5, color: 'var(--text-faint)' }}>{t.avail}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 10 }}>
            {top3.map(([k, v]) => <MiniBar key={k} label={k} value={v} />)}
          </div>
        </div>
        <Icon name="chevronRight" size={20} color="var(--text-faint)" />
      </Card>
    );
  }

  function FilterBar() {
    const wrap = { display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' };
    return (
      <div style={wrap}>
        <Select options={['Disponibilité : toutes', 'Disponible', 'Sous 1 mois']} containerStyle={{ minWidth: 170 }} />
        <Select options={['Stack : Java', 'Toutes stacks', 'DevOps', 'Frontend']} containerStyle={{ minWidth: 150 }} />
        <Select options={['Localisation : Lille', 'Toutes', 'Remote']} containerStyle={{ minWidth: 160 }} />
        <Select options={['TJM : ≤ 700 €', 'Tous', '≤ 600 €']} containerStyle={{ minWidth: 130 }} />
        <Select options={['Statut : tous', 'Freelance', 'CDI']} containerStyle={{ minWidth: 130 }} />
      </div>
    );
  }

  function Shortlist({ onOpen }) {
    const m = D.currentMission;
    const talents = [...D.talents].sort((a, b) => b.score - a.score);
    return (
      <div>
        <PageHeader
          title="Shortlist"
          subtitle={`${talents.length} profils classés pour la mission. Le score combine 7 dimensions pondérées.`}
          actions={<Button variant="secondary" leftIcon={<Icon name="download" size={16} />}>Exporter la shortlist</Button>}
        />

        <Card padding="md" style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 16, background: 'var(--navy-900)', borderColor: 'transparent' }}>
          <span style={{ width: 40, height: 40, flex: 'none', borderRadius: 'var(--radius-md)', background: 'rgba(74,111,240,0.22)', color: 'var(--primary-400)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="briefcase" size={20} />
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{m.title}</div>
            <div style={{ fontSize: 13, color: 'rgba(220,228,251,0.7)' }}>{m.client} · {m.location} · {m.budget}</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', maxWidth: 320, justifyContent: 'flex-end' }}>
            {m.mustHave.slice(0, 4).map((s) => <Badge key={s} tone="primary" size="sm">{s}</Badge>)}
            <Badge tone="neutral" size="sm">+{m.mustHave.length - 4}</Badge>
          </div>
        </Card>

        <div style={{ marginBottom: 16 }}><FilterBar /></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {talents.map((t, i) => <ProfileCard key={t.id} t={t} rank={i + 1} onOpen={onOpen} />)}
        </div>
      </div>
    );
  }

  window.WMShortlist = Shortlist;
})();
