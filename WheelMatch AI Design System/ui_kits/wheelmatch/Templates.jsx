// WheelMatch AI — Templates: cabinet charte editor + preview.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Switch } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader, SectionLabel } = window.WMShell;

  const COLORS = ['#2A52E0', '#0B1330', '#7C3AED', '#14945A', '#B42318', '#0E7CC0'];

  function Templates() {
    const [active, setActive] = React.useState(D.templates[0].id);
    const [color, setColor] = React.useState('#2A52E0');
    const tpl = D.templates.find((t) => t.id === active);
    return (
      <div>
        <PageHeader
          title="Templates & charte graphique"
          subtitle="Définissez vos modèles de CV. Tous les dossiers générés respecteront la charte du cabinet."
          actions={<Button variant="primary" leftIcon={<Icon name="plus" size={16} />}>Nouveau template</Button>}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 18, alignItems: 'start' }}>
          {/* list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {D.templates.map((t) => (
              <Card key={t.id} interactive selected={t.id === active} padding="md" onClick={() => { setActive(t.id); setColor(t.primary); }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: t.primary, flex: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon name="template" size={19} /></span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <span style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--text-strong)' }}>{t.name}</span>
                      {t.active && <Badge tone="success" size="sm">Par défaut</Badge>}
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{t.desc}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* editor + preview */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, alignItems: 'start' }}>
            <Card padding="lg">
              <SectionLabel icon="edit" accent="var(--primary-600)">Personnalisation</SectionLabel>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 8 }}>Logo du cabinet</div>
              <div style={{ border: '1.5px dashed var(--border-default)', borderRadius: 'var(--radius-md)', padding: '20px', textAlign: 'center', marginBottom: 18, background: 'var(--surface-inset)' }}>
                <Icon name="upload" size={22} color="var(--text-faint)" />
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 6 }}>Glissez votre logo ici · PNG, SVG</div>
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 8 }}>Couleur de marque</div>
              <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
                {COLORS.map((c) => (
                  <button key={c} onClick={() => setColor(c)} style={{ width: 30, height: 30, borderRadius: 999, background: c, cursor: 'pointer', border: color === c ? '2px solid var(--text-strong)' : '2px solid transparent', outline: color === c ? '2px solid #fff' : 'none', outlineOffset: -4 }} />
                ))}
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--text-strong)', marginBottom: 8 }}>Structure obligatoire</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {tpl.sections.map((s, i) => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px 11px', background: 'var(--surface-inset)', borderRadius: 'var(--radius-sm)', fontSize: 13.5, color: 'var(--text-body)' }}>
                    <Icon name="more" size={14} color="var(--text-faint)" />
                    <span style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--primary-50)', color: 'var(--primary-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 10.5, fontWeight: 700 }}>{i + 1}</span>
                    {s}
                  </div>
                ))}
              </div>
            </Card>

            {/* live preview */}
            <Card padding="md">
              <SectionLabel icon="eye">Aperçu du rendu</SectionLabel>
              <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ background: color, padding: '18px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="building" size={17} color="#fff" /></span>
                  <div>
                    <div style={{ height: 9, width: 120, background: 'rgba(255,255,255,0.92)', borderRadius: 3, marginBottom: 6 }} />
                    <div style={{ height: 6, width: 80, background: 'rgba(255,255,255,0.55)', borderRadius: 3 }} />
                  </div>
                </div>
                <div style={{ padding: '16px 18px' }}>
                  {tpl.sections.map((s, i) => (
                    <div key={s} style={{ marginBottom: 14 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color, marginBottom: 6 }}>{s}</div>
                      <div style={{ height: 6, background: 'var(--slate-200)', borderRadius: 3, marginBottom: 5 }} />
                      <div style={{ height: 6, width: '85%', background: 'var(--slate-200)', borderRadius: 3, marginBottom: 5 }} />
                      {i === 0 && <div style={{ height: 6, width: '70%', background: 'var(--slate-200)', borderRadius: 3 }} />}
                    </div>
                  ))}
                </div>
              </div>
              <Button variant="primary" fullWidth style={{ marginTop: 14 }} leftIcon={<Icon name="check" size={16} />}>Enregistrer le template</Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  window.WMTemplates = Templates;
})();
