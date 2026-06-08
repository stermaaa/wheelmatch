// WheelMatch AI — History: table of sent CVs with statuses.
(function () {
  const DS = window.WheelMatchAIDesignSystem_84fa8f;
  const { Card, Button, Badge, Avatar, Tabs } = DS;
  const Icon = window.WMIcon;
  const D = window.WMData;
  const { PageHeader } = window.WMShell;

  function History() {
    const [filter, setFilter] = React.useState('all');
    const rows = filter === 'all' ? D.history : D.history.filter((r) => r.status === filter);
    const th = { textAlign: 'left', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-faint)', padding: '0 16px 12px' };
    const td = { padding: '14px 16px', fontSize: 14, color: 'var(--text-body)', borderTop: '1px solid var(--border-subtle)' };
    return (
      <div>
        <PageHeader
          title="Historique des envois"
          subtitle="Tous les CV envoyés aux clients, avec leur statut de suivi."
          actions={<Button variant="secondary" leftIcon={<Icon name="download" size={16} />}>Exporter</Button>}
        />
        <div style={{ marginBottom: 16 }}>
          <Tabs variant="segmented" value={filter} onChange={setFilter}
            tabs={[{ id: 'all', label: 'Tous', count: D.history.length }, { id: 'sent', label: 'Envoyés' }, { id: 'interview', label: 'Entretiens' }, { id: 'placed', label: 'Placés' }, { id: 'rejected', label: 'Refusés' }]} />
        </div>
        <Card padding="md">
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={th}>Candidat</th>
                <th style={th}>Mission</th>
                <th style={th}>Client</th>
                <th style={th}>Recruteur</th>
                <th style={th}>Date</th>
                <th style={{ ...th, textAlign: 'right' }}>Statut</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const st = D.historyStatus[r.status];
                return (
                  <tr key={r.id}>
                    <td style={td}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <Avatar name={r.candidate} size="sm" />
                        <span style={{ fontWeight: 600, color: 'var(--text-strong)' }}>{r.candidate}</span>
                      </div>
                    </td>
                    <td style={td}>{r.mission}</td>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--text-strong)' }}>{r.client}</td>
                    <td style={td}>{r.recruiter}</td>
                    <td style={{ ...td, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>{r.date}</td>
                    <td style={{ ...td, textAlign: 'right' }}><Badge tone={st.tone} dot>{st.label}</Badge></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    );
  }

  window.WMHistory = History;
})();
