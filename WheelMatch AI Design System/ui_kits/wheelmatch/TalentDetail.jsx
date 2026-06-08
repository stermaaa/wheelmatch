// WheelMatch AI — Talent detail: score breakdown + confidence (anti-hallucination).
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Avatar, ScoreGauge, ScoreBar, ConfidenceBadge } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  function Meta({ icon, label, value }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <Icon name={icon} size={15} color="var(--text-faint)" />
        <span style={{ fontSize: 13, color: 'var(--text-muted)', flex: 1 }}>{label}</span>
        <span style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{value}</span>
      </div>
    );
  }

  function ConfidenceList({ title, state, items, icon, accent }) {
    return (
      <div>
        <SectionLabel icon={icon} accent={accent}>{title}</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <ConfidenceBadge state={state} size="sm">{state === 'confirmed' ? 'Confirmé' : state === 'pending' ? 'À confirmer' : 'Absent'}</ConfidenceBadge>
              <span style={{ fontSize: 14, color: 'var(--text-body)', flex: 1 }}>{it}</span>
              {state !== 'absent' && (
                <a style={{ fontSize: 12, color: 'var(--text-link)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 4, cursor: 'pointer', textDecoration: 'none', flex: 'none' }}>
                  <Icon name="link" size={12} /> source CV
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  function TalentDetail({ talentId, goShortlist, goCV }) {
    const t = D.talents.find((x) => x.id === talentId) || D.talents[0];
    const bd = Object.entries(t.breakdown);
    return (
      <div>
        <button onClick={goShortlist} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', fontSize: 13, fontWeight: 600, padding: 0, marginBottom: 14, fontFamily: 'var(--font-sans)' }}>
          <Icon name="chevronRight" size={15} style={{ transform: 'rotate(180deg)' }} /> Retour à la shortlist
        </button>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 24 }}>
          <Avatar name={t.name} size="lg" status={t.status} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: 'var(--text-strong)', letterSpacing: '-0.02em' }}>{t.name}</h2>
              <Badge tone={t.status === 'available' ? 'success' : 'warning'} dot>{t.avail}</Badge>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: 15, color: 'var(--text-muted)' }}>{t.title} · {t.seniority} d'expérience · {t.contract}</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flex: 'none' }}>
            <Button variant="secondary" leftIcon={<Icon name="mail" size={16} />}>Contacter</Button>
            <Button variant="ai" size="md" leftIcon={<Icon name="sparkles" size={16} />} onClick={() => goCV(t.id)}>Générer CV mission-ready</Button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 18, alignItems: 'start' }}>
          {/* LEFT column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Card padding="lg" style={{ textAlign: 'center' }}>
              <ScoreGauge value={t.score} size={150} label="Matching global" />
              <p style={{ fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.5, margin: '14px 0 0', textAlign: 'left' }}>{t.summary}</p>
            </Card>

            <Card padding="lg">
              <SectionLabel icon="layers">Stack principale</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                {t.stack.map((s) => <Badge key={s} tone="primary">{s}</Badge>)}
              </div>
              <SectionLabel icon="briefcase">Profil</SectionLabel>
              <Meta icon="euro" label="TJM" value={`${t.tjm} € / jour`} />
              <Meta icon="mapPin" label="Localisation" value={t.location} />
              <Meta icon="globe" label="Mobilité" value={t.remote} />
              <Meta icon="message" label="Langues" value={t.languages.join(', ')} />
              <Meta icon="history" label="Historique" value={`${t.missionsCount} missions · ${t.placements} placements`} />
            </Card>
          </div>

          {/* RIGHT column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Card padding="lg">
              <SectionLabel icon="target" accent="var(--primary-600)">Détail du score · 7 dimensions</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {bd.map(([k, v]) => <ScoreBar key={k} label={k} value={v} />)}
              </div>
            </Card>

            <Card padding="lg">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Icon name="shield" size={17} color="var(--success-600)" />
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text-strong)' }}>Lecture anti-hallucination</h3>
                <Badge tone="neutral" size="sm" style={{ marginLeft: 'auto' }}>Sourcé depuis le CV</Badge>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <ConfidenceList title="Compétences prouvées" state="confirmed" items={t.proven} icon="checkCircle" accent="var(--success-700)" />
                <ConfidenceList title="À confirmer avec le candidat" state="pending" items={t.confirm} icon="alert" accent="var(--warning-700)" />
                {t.absent.length > 0 && <ConfidenceList title="Absent du CV" state="absent" items={t.absent} icon="x" accent="var(--text-muted)" />}
              </div>
            </Card>

            <Card padding="lg" style={{ background: 'var(--warning-50)', borderColor: 'var(--warning-100)' }}>
              <SectionLabel icon="alert" accent="var(--warning-700)">Points de vigilance</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {t.vigilance.map((v, i) => (
                  <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.45 }}>
                    <Icon name="alert" size={16} color="var(--warning-600)" style={{ flex: 'none', marginTop: 1 }} />{v}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  window.WMTalentDetail = TalentDetail;
})();
