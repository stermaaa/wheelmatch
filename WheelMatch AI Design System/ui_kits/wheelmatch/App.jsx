// WheelMatch AI — App shell + router.
(function () {
  const { Sidebar, Topbar } = window.WMShell;
  const D = window.WMData;

  const META = {
    dashboard: { title: 'Dashboard', crumb: 'Vue d\'ensemble' },
    missions: { title: 'Missions', crumb: 'Pipeline' },
    shortlist: { title: 'Shortlist', crumb: 'Pipeline · Matching' },
    talents: { title: 'Talents', crumb: 'Base de talents' },
    talent: { title: 'Fiche talent', crumb: 'Pipeline · Shortlist' },
    cv: { title: 'CV Generator', crumb: 'Pipeline · CV mission-ready' },
    history: { title: 'Historique', crumb: 'Cabinet' },
    templates: { title: 'Templates', crumb: 'Cabinet' },
    settings: { title: 'Paramètres', crumb: 'Cabinet' },
  };

  function App() {
    const [page, setPage] = React.useState('dashboard');
    const [missionPhase, setMissionPhase] = React.useState('input');
    const [talentId, setTalentId] = React.useState('t1');
    const scrollRef = React.useRef(null);

    function nav(p) { setPage(p); if (scrollRef.current) scrollRef.current.scrollTop = 0; }

    const goMission = () => nav('missions');
    const goShortlist = () => nav('shortlist');
    const openTalent = (id) => { setTalentId(id); nav('talent'); };
    const goCV = (id) => { if (id) setTalentId(id); nav('cv'); };
    const goTalent = (id) => { if (id) setTalentId(id); nav('talent'); };

    // sidebar active highlight maps sub-pages to their nav root
    const navActive = page === 'talent' ? 'shortlist' : page;
    const meta = META[page] || META.dashboard;

    let content;
    if (page === 'dashboard') content = <window.WMDashboard goMission={goMission} />;
    else if (page === 'missions') content = <window.WMMissions phase={missionPhase} setPhase={setMissionPhase} goShortlist={goShortlist} />;
    else if (page === 'shortlist' || page === 'talents') content = <window.WMShortlist onOpen={openTalent} />;
    else if (page === 'talent') content = <window.WMTalentDetail talentId={talentId} goShortlist={goShortlist} goCV={goCV} />;
    else if (page === 'cv') content = <window.WMCVGenerator talentId={talentId} goTalent={goTalent} />;
    else if (page === 'history') content = <window.WMHistory />;
    else if (page === 'templates') content = <window.WMTemplates />;
    else if (page === 'settings') content = <window.WMSettings />;

    return (
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: 'var(--bg-app)' }}>
        <Sidebar page={navActive} setPage={nav} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          <Topbar title={meta.title} crumb={meta.crumb} />
          <main ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '28px 32px 60px' }}>
            <div style={{ maxWidth: 1180, margin: '0 auto' }}>{content}</div>
          </main>
        </div>
      </div>
    );
  }

  window.WMApp = App;
})();
