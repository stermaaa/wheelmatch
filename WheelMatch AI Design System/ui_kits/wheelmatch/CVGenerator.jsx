// WheelMatch AI — CV Generator: options, preview, diff, pitch, questions.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Switch, Tabs, Checkbox, ConfidenceBadge, Avatar, ScoreGauge } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  function OptionGroup({ label, children }) {
    return (
      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 8 }}>{label}</div>
        {children}
      </div>
    );
  }

  // ---- CV preview (mission-ready) ----
  function CVPreview({ t, anon, tone }) {
    const name = anon ? `Candidat ${t.name.split(' ')[0][0]}. ${t.name.split(' ')[1][0]}.` : t.name;
    return (
      <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
        <div style={{ background: 'var(--navy-900)', padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 16 }}>
          {!anon ? <Avatar name={t.name} size="lg" /> : (
            <span style={{ width: 48, height: 48, borderRadius: 999, background: 'rgba(255,255,255,0.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-400)' }}><Icon name="shield" size={22} /></span>
          )}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{name}</div>
            <div style={{ fontSize: 13.5, color: 'var(--primary-400)', fontWeight: 600 }}>{t.title} · {t.seniority} d'expérience</div>
          </div>
          <img src="../../assets/logo-mark-light.svg" width="30" height="30" alt="" style={{ opacity: 0.95 }} />
        </div>
        <div style={{ padding: '22px 26px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 7 }}>Synthèse orientée mission</div>
          <p style={{ margin: '0 0 18px', fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.55 }}>{t.summary}</p>

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 9 }}>Compétences clés</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {t.stack.map((s) => <span key={s} style={{ fontSize: 12, fontWeight: 600, color: 'var(--primary-700)', background: 'var(--primary-50)', padding: '3px 9px', borderRadius: 'var(--radius-sm)' }}>{s}</span>)}
          </div>

          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-faint)', marginBottom: 9 }}>Expériences pertinentes</div>
          {D.cvDiff.kept.map((k, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, paddingBottom: 12, marginBottom: 12, borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none' }}>
              <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--primary-500)', marginTop: 6, flex: 'none' }} />
              <div>
                <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>{k.txt}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{k.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ---- Diff panel ----
  function DiffPanel() {
    const Block = ({ icon, color, bg, title, count, children }) => (
      <div style={{ marginBottom: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ width: 26, height: 26, borderRadius: 'var(--radius-sm)', background: bg, color, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}><Icon name={icon} size={15} /></span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-strong)' }}>{title}</span>
          <Badge tone="neutral" size="sm" style={{ marginLeft: 'auto' }}>{count}</Badge>
        </div>
        {children}
      </div>
    );
    const row = (main, note, strike) => (
      <div style={{ padding: '9px 12px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-sm)', marginBottom: 7 }}>
        <div style={{ fontSize: 13.5, color: strike ? 'var(--text-faint)' : 'var(--text-strong)', textDecoration: strike ? 'line-through' : 'none', fontWeight: 500 }}>{main}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{note}</div>
      </div>
    );
    return (
      <div>
        <Block icon="check" color="var(--success-700)" bg="var(--success-50)" title="Éléments conservés" count={D.cvDiff.kept.length}>
          {D.cvDiff.kept.map((k, i) => <div key={i}>{row(k.txt, k.note, false)}</div>)}
        </Block>
        <Block icon="edit" color="var(--info-600)" bg="var(--info-50)" title="Éléments reformulés" count={D.cvDiff.reworded.length}>
          {D.cvDiff.reworded.map((k, i) => (
            <div key={i} style={{ padding: '9px 12px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-sm)', marginBottom: 7 }}>
              <div style={{ fontSize: 13, color: 'var(--text-faint)', textDecoration: 'line-through' }}>{k.from}</div>
              <div style={{ fontSize: 13.5, color: 'var(--text-strong)', fontWeight: 600, marginTop: 3, display: 'flex', gap: 6, alignItems: 'flex-start' }}><Icon name="arrowRight" size={14} color="var(--info-600)" style={{ marginTop: 2, flex: 'none' }} />{k.to}</div>
            </div>
          ))}
        </Block>
        <Block icon="trash" color="var(--danger-600)" bg="var(--danger-50)" title="Éléments supprimés" count={D.cvDiff.removed.length}>
          {D.cvDiff.removed.map((k, i) => <div key={i}>{row(k.txt, k.note, true)}</div>)}
        </Block>
      </div>
    );
  }

  // ---- Pitch panel ----
  function PitchPanel() {
    const [v, setV] = React.useState('premium');
    const [copied, setCopied] = React.useState(false);
    const map = { short: D.pitch.short, premium: D.pitch.premium, linkedin: D.pitch.linkedin };
    function copy() { setCopied(true); setTimeout(() => setCopied(false), 1600); }
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
          <Tabs variant="segmented" value={v} onChange={setV} tabs={[{ id: 'short', label: 'Version courte' }, { id: 'premium', label: 'Premium' }, { id: 'linkedin', label: 'LinkedIn' }]} />
          <Button variant={copied ? 'primary' : 'secondary'} size="sm" leftIcon={<Icon name={copied ? 'check' : 'copy'} size={15} />} onClick={copy}>{copied ? 'Copié !' : 'Copier'}</Button>
        </div>
        <div style={{ background: 'var(--surface-inset)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '18px 20px', fontSize: 13.5, color: 'var(--text-body)', lineHeight: 1.6, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-sans)' }}>
          {map[v]}
        </div>
      </div>
    );
  }

  // ---- Questions panel ----
  function QuestionsPanel() {
    const [items, setItems] = React.useState(D.questions);
    const toggle = (id) => setItems((arr) => arr.map((q) => q.id === id ? { ...q, checked: !q.checked } : q));
    const done = items.filter((q) => q.checked).length;
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ fontSize: 13.5, color: 'var(--text-muted)' }}>Questions à valider avant envoi</span>
          <Badge tone={done === items.length ? 'success' : 'warning'} style={{ marginLeft: 'auto' }}>{done} / {items.length} validées</Badge>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((q) => (
            <div key={q.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', background: q.checked ? 'var(--success-50)' : 'var(--surface-card)', border: `1px solid ${q.checked ? 'var(--success-100)' : 'var(--border-subtle)'}`, borderRadius: 'var(--radius-md)', transition: 'background .15s' }}>
              <Checkbox checked={q.checked} onChange={() => toggle(q.id)} tone="success" />
              <span style={{ fontSize: 14, color: 'var(--text-body)', flex: 1 }}>{q.txt}</span>
              <ConfidenceBadge state={q.state} size="sm">{q.state === 'confirmed' ? 'Validé' : 'À confirmer'}</ConfidenceBadge>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function CVGenerator({ talentId, goTalent }) {
    const t = D.talents.find((x) => x.id === talentId) || D.talents[0];
    const [len, setLen] = React.useState('one');
    const [tone, setTone] = React.useState('sobre');
    const [anon, setAnon] = React.useState(false);
    const [tab, setTab] = React.useState('cv');

    return (
      <div>
        <PageHeader
          title="CV mission-ready"
          subtitle={`Dossier généré pour ${t.name} — ${D.currentMission.title} · ${D.currentMission.client}`}
          actions={<Button variant="secondary" leftIcon={<Icon name="chevronRight" size={16} style={{ transform: 'rotate(180deg)' }} />} onClick={() => goTalent(t.id)}>Retour au profil</Button>}
        />

        <div style={{ display: 'grid', gridTemplateColumns: '290px 1fr', gap: 18, alignItems: 'start' }}>
          {/* LEFT: options + export */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 0 }}>
            <Card padding="lg">
              <SectionLabel icon="settings" accent="var(--ai-600)">Options de génération</SectionLabel>
              <OptionGroup label="Longueur">
                <Tabs variant="segmented" size="sm" value={len} onChange={setLen} tabs={[{ id: 'one', label: '1 page' }, { id: 'two', label: '2 pages' }, { id: 'full', label: 'Dossier' }]} />
              </OptionGroup>
              <OptionGroup label="Ton">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {[['sobre', 'Sobre'], ['commercial', 'Commercial'], ['ao', 'Appel d\'offres'], ['grand', 'Grand compte']].map(([id, lb]) => (
                    <button key={id} onClick={() => setTone(id)} style={{ padding: '6px 12px', fontSize: 12.5, fontWeight: 600, fontFamily: 'var(--font-sans)', cursor: 'pointer', borderRadius: 'var(--radius-full)', border: `1px solid ${tone === id ? 'var(--ai-600)' : 'var(--border-default)'}`, background: tone === id ? 'var(--ai-50)' : 'var(--surface-card)', color: tone === id ? 'var(--ai-700)' : 'var(--text-body)' }}>{lb}</button>
                  ))}
                </div>
              </OptionGroup>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0 4px', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--text-strong)' }}>Anonymisation</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Masquer nom & coordonnées</div>
                </div>
                <Switch checked={anon} onChange={setAnon} tone="ai" />
              </div>
            </Card>

            <Card padding="lg">
              <SectionLabel icon="download">Export</SectionLabel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                <Button variant="primary" fullWidth leftIcon={<Icon name="file" size={16} />}>Exporter en PDF</Button>
                <Button variant="secondary" fullWidth leftIcon={<Icon name="file" size={16} />}>Exporter en Word</Button>
                <Button variant="ghost" fullWidth leftIcon={<Icon name="mail" size={16} />}>Envoyer au client</Button>
              </div>
            </Card>
          </div>

          {/* RIGHT: tabbed content */}
          <Card padding="lg">
            <Tabs value={tab} onChange={setTab} style={{ marginBottom: 20 }}
              tabs={[{ id: 'cv', label: 'CV shorté' }, { id: 'diff', label: 'Diff avant / après' }, { id: 'pitch', label: 'Pitch client' }, { id: 'questions', label: 'Questions candidat' }]} />
            {tab === 'cv' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', maxWidth: 560, margin: '0 auto' }}>
                <CVPreview t={t} anon={anon} tone={tone} />
              </div>
            )}
            {tab === 'diff' && <DiffPanel />}
            {tab === 'pitch' && <PitchPanel />}
            {tab === 'questions' && <QuestionsPanel />}
          </Card>
        </div>
      </div>
    );
  }

  window.WMCVGenerator = CVGenerator;
})();
