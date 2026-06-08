// WheelMatch AI — Missions: paste brief → AI analysis → extracted criteria.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Textarea, Input, Select } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  function Spinner() {
    return (
      <span style={{ display: 'inline-flex' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" style={{ animation: 'wm-spin 0.8s linear infinite' }}>
          <path d="M21 12a9 9 0 1 1-6.2-8.5" />
        </svg>
      </span>
    );
  }

  function CriteriaChips({ items, tone }) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {items.map((c) => <Badge key={c} tone={tone}>{c}</Badge>)}
      </div>
    );
  }

  function Field({ icon, label, value }) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          <Icon name={icon} size={13} />{label}
        </span>
        <span style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--text-strong)' }}>{value}</span>
      </div>
    );
  }

  function Missions({ phase, setPhase, goShortlist }) {
    const m = D.currentMission;
    const [text, setText] = React.useState(m.raw);

    function analyze() {
      setPhase('analyzing');
      setTimeout(() => setPhase('result'), 1700);
    }

    return (
      <div>
        <PageHeader
          title="Nouvelle mission"
          subtitle="Collez la fiche mission ou le brief client. L'IA en extrait les critères structurés — sans rien inventer."
          actions={phase === 'result' && <Button variant="secondary" leftIcon={<Icon name="refresh" size={16} />} onClick={() => setPhase('input')}>Nouvelle analyse</Button>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: phase === 'result' ? '0.85fr 1.15fr' : '1fr', gap: 18, alignItems: 'start' }}>
          {/* LEFT: brief input */}
          <Card padding="lg">
            <SectionLabel icon="file">Fiche mission</SectionLabel>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 14 }}>
              <Input label="Client" defaultValue={m.client} />
              <Input label="Intitulé du poste" defaultValue={m.title} />
            </div>
            <Textarea label="Brief client" rows={phase === 'result' ? 8 : 12} value={text} onChange={(e) => setText(e.target.value)} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
              <Button variant="ai" size="lg" disabled={phase === 'analyzing'}
                leftIcon={phase === 'analyzing' ? <Spinner /> : <Icon name="sparkles" size={17} />}
                onClick={analyze}>
                {phase === 'analyzing' ? 'Analyse en cours…' : 'Analyser avec l\'IA'}
              </Button>
              <span style={{ fontSize: 12.5, color: 'var(--text-faint)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <Icon name="shield" size={13} color="var(--success-600)" /> Aucune donnée inventée — extraction sourcée
              </span>
            </div>
          </Card>

          {/* RIGHT: result */}
          {phase === 'result' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Card padding="lg">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                  <SectionLabel icon="target" accent="var(--ai-600)">Critères extraits</SectionLabel>
                  <Badge tone="ai" dot>Analysé par IA · 7 critères</Badge>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginBottom: 20 }}>
                  <Field icon="users" label="Rôle" value={m.role} />
                  <Field icon="trendUp" label="Séniorité" value={m.seniority} />
                  <Field icon="building" label="Secteur" value={m.sector} />
                  <Field icon="mapPin" label="Localisation" value={m.location} />
                  <Field icon="globe" label="Remote" value={m.remote} />
                  <Field icon="euro" label="Budget" value={m.budget} />
                </div>
                <div style={{ marginBottom: 16 }}>
                  <SectionLabel icon="checkCircle" accent="var(--success-600)">Compétences obligatoires</SectionLabel>
                  <CriteriaChips items={m.mustHave} tone="success" />
                </div>
                <div>
                  <SectionLabel icon="plus" accent="var(--warning-600)">Compétences souhaitées</SectionLabel>
                  <CriteriaChips items={m.niceToHave} tone="warning" />
                </div>
              </Card>

              <Card padding="lg" style={{ background: 'var(--surface-ai-tint)', borderColor: 'var(--ai-100)' }}>
                <SectionLabel icon="alert" accent="var(--warning-700)">Points à clarifier avec le client</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {m.clarify.map((q, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--text-body)', lineHeight: 1.45 }}>
                      <span style={{ width: 20, height: 20, flex: 'none', borderRadius: 999, background: 'var(--warning-100)', color: 'var(--warning-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, marginTop: 1 }}>{i + 1}</span>
                      {q}
                    </div>
                  ))}
                </div>
              </Card>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button variant="primary" size="lg" rightIcon={<Icon name="arrowRight" size={17} />} onClick={goShortlist}>
                  Trouver les meilleurs profils
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  window.WMMissions = Missions;
})();
