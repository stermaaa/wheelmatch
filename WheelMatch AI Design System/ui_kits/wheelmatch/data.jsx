// WheelMatch AI — realistic French mock data. Shared via window.WMData.
const WMData = {
  user: { name: 'Camille Aubert', role: 'Consultante recrutement IT', firm: 'Talent Partners' },

  kpis: [
    { id: 'missions', label: 'Missions actives', value: '14', trend: '+3', dir: 'up', accent: 'primary', icon: 'briefcase' },
    { id: 'profils', label: 'Profils proposés', value: '23', unit: '', trend: '+8', dir: 'up', accent: 'info', icon: 'users' },
    { id: 'matching', label: 'Matching moyen', value: '82', unit: '%', trend: '+4', dir: 'up', accent: 'success', icon: 'target' },
    { id: 'cv', label: 'CV générés', value: '47', trend: '+12', dir: 'up', accent: 'ai', icon: 'file' },
    { id: 'entretiens', label: 'Entretiens obtenus', value: '9', trend: '+2', dir: 'up', accent: 'warning', icon: 'message' },
    { id: 'attente', label: 'Missions en attente', value: '5', trend: '-1', dir: 'down', accent: 'neutral', icon: 'clock' },
  ],

  activity: [
    { id: 1, who: 'Camille Aubert', action: 'a généré un CV shorté pour', target: 'Thomas Martin', ctx: 'Tech Lead Java — BNP Paribas', time: 'il y a 12 min', kind: 'cv' },
    { id: 2, who: 'IA WheelMatch', action: 'a analysé la mission', target: 'Data Engineer Azure', ctx: 'Décathlon — 7 critères extraits', time: 'il y a 38 min', kind: 'ai' },
    { id: 3, who: 'Léa Fontaine', action: 'a envoyé un profil à', target: 'Société Générale', ctx: 'Mehdi Roux — DevOps AWS', time: 'il y a 1 h', kind: 'send' },
    { id: 4, who: 'Société Générale', action: 'a demandé un entretien avec', target: 'Sarah Benali', ctx: 'Lead Backend — démarrage rapide', time: 'il y a 2 h', kind: 'win' },
    { id: 5, who: 'Camille Aubert', action: 'a anonymisé le dossier de', target: 'Clara Moreau', ctx: 'PO Salesforce — grand compte', time: 'il y a 3 h', kind: 'cv' },
  ],

  currentMission: {
    title: 'Tech Lead Java / Spring Boot',
    client: 'BNP Paribas',
    sector: 'Banque / Finance',
    location: 'Lille (59)',
    remote: '2 j sur site / 3 j télétravail',
    start: 'Sous 1 mois',
    budget: '600–680 € / jour',
    urgency: 'high',
    raw: "Nous recherchons un Tech Lead Java / Spring Boot senior pour accompagner la modernisation d'une plateforme bancaire. Expérience microservices, Kubernetes, CI/CD et architecture cloud souhaitée. Contexte agile, équipe de 8 développeurs, 2 jours sur site à Lille, démarrage sous 1 mois.",
    role: 'Tech Lead',
    seniority: 'Senior (8+ ans)',
    mustHave: ['Java 17', 'Spring Boot', 'Microservices', 'Kubernetes', 'CI/CD', 'Architecture cloud'],
    niceToHave: ['Kafka', 'Terraform', 'AWS', 'Leadership d\'équipe', 'Secteur bancaire'],
    softSkills: ['Leadership', 'Communication client', 'Agilité'],
    clarify: [
      'Le budget 600–680 € couvre-t-il un profil 10+ ans d\'expérience ?',
      'La présence sur site Lille est-elle négociable les premières semaines ?',
      'Une habilitation bancaire (KYC) est-elle requise au démarrage ?',
      'Le périmètre inclut-il du management hiérarchique ou uniquement technique ?',
    ],
  },

  talents: [
    {
      id: 't1', name: 'Thomas Martin', title: 'Tech Lead Java', score: 91,
      status: 'available', avail: 'Disponible sous 2 sem.', tjm: 650, contract: 'Freelance',
      location: 'Lille', remote: 'Hybride', seniority: '11 ans', languages: ['Français', 'Anglais (C1)'],
      stack: ['Java 17', 'Spring Boot', 'Kubernetes', 'Kafka', 'CI/CD', 'AWS'],
      summary: "Tech Lead avec 11 ans d'expérience sur des plateformes Java à forte volumétrie, dont 4 ans en environnement bancaire. A piloté la migration microservices d'un core banking.",
      breakdown: { 'Compétences techniques': 94, 'Séniorité': 92, 'Secteur': 88, 'Disponibilité': 85, 'Mobilité': 90, 'Soft skills': 89, 'TJM / budget': 96 },
      proven: ['Java 17', 'Spring Boot', 'Microservices', 'CI/CD', 'Secteur bancaire'],
      confirm: ['Kubernetes (mentionné Docker Swarm)', 'Leadership de 8+ devs'],
      absent: ['Terraform'],
      vigilance: ['Préavis freelance de 2 semaines', 'Souhaite max 2 j sur site'],
      missionsCount: 12, placements: 8,
    },
    {
      id: 't2', name: 'Sarah Benali', title: 'Lead Backend Engineer', score: 84,
      status: 'available', avail: 'Disponible immédiatement', tjm: 600, contract: 'CDI (en poste)',
      location: 'Paris', remote: 'Full remote souhaité', seniority: '9 ans', languages: ['Français', 'Anglais (C1)', 'Arabe'],
      stack: ['Java', 'Spring', 'PostgreSQL', 'Docker', 'Kafka', 'GCP'],
      summary: "Lead Backend orientée systèmes distribués, 9 ans d'expérience. Forte culture qualité et mentoring. Cherche un contexte technique exigeant.",
      breakdown: { 'Compétences techniques': 90, 'Séniorité': 85, 'Secteur': 72, 'Disponibilité': 95, 'Mobilité': 60, 'Soft skills': 88, 'TJM / budget': 92 },
      proven: ['Java', 'Spring', 'Microservices', 'Kafka', 'CI/CD'],
      confirm: ['Kubernetes (GKE en contexte perso)', 'Expérience bancaire'],
      absent: ['Architecture cloud AWS'],
      vigilance: ['Souhaite full remote — incompatible 2 j sur site', 'Actuellement en poste, préavis 3 mois'],
      missionsCount: 7, placements: 4,
    },
    {
      id: 't3', name: 'Mehdi Roux', title: 'DevOps AWS / Kubernetes', score: 78,
      status: 'busy', avail: 'Disponible sous 6 sem.', tjm: 620, contract: 'Freelance',
      location: 'Lyon', remote: 'Hybride', seniority: '8 ans', languages: ['Français', 'Anglais (B2)'],
      stack: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Docker', 'Go'],
      summary: "DevOps senior spécialisé Kubernetes et infrastructure as code. A industrialisé des chaînes CI/CD pour des plateformes financières.",
      breakdown: { 'Compétences techniques': 82, 'Séniorité': 80, 'Secteur': 78, 'Disponibilité': 60, 'Mobilité': 70, 'Soft skills': 80, 'TJM / budget': 90 },
      proven: ['Kubernetes', 'CI/CD', 'AWS', 'Terraform', 'Secteur bancaire'],
      confirm: ['Java backend (profil orienté infra)', 'Leadership technique'],
      absent: ['Spring Boot'],
      vigilance: ['Profil DevOps, pas Tech Lead applicatif', 'Disponibilité différée 6 semaines'],
      missionsCount: 9, placements: 5,
    },
    {
      id: 't4', name: 'Clara Moreau', title: 'Product Owner Salesforce', score: 72,
      status: 'available', avail: 'Disponible sous 3 sem.', tjm: 550, contract: 'Freelance',
      location: 'Lille', remote: 'Hybride', seniority: '7 ans', languages: ['Français', 'Anglais (C1)', 'Espagnol'],
      stack: ['Salesforce', 'Agile', 'Product', 'JIRA', 'SQL'],
      summary: "Product Owner certifiée Salesforce, 7 ans en pilotage produit dans la banque et l'assurance. Excellente interface métier / technique.",
      breakdown: { 'Compétences techniques': 55, 'Séniorité': 78, 'Secteur': 90, 'Disponibilité': 80, 'Mobilité': 92, 'Soft skills': 94, 'TJM / budget': 88 },
      proven: ['Agilité', 'Secteur bancaire', 'Communication client'],
      confirm: ['Compétences Java (profil non technique)'],
      absent: ['Java', 'Spring Boot', 'Kubernetes', 'Microservices'],
      vigilance: ['Profil PO — ne correspond pas au besoin Tech Lead', 'Stack technique éloignée'],
      missionsCount: 6, placements: 3,
    },
    {
      id: 't5', name: 'Julien Perrin', title: 'Fullstack React / Node', score: 69,
      status: 'available', avail: 'Disponible immédiatement', tjm: 520, contract: 'Freelance',
      location: 'Remote', remote: 'Full remote', seniority: '6 ans', languages: ['Français', 'Anglais (B2)'],
      stack: ['React', 'Node.js', 'TypeScript', 'Docker', 'MongoDB'],
      summary: "Développeur fullstack JS, 6 ans d'expérience produit. Autonome, forte capacité de livraison. Peu d'exposition Java.",
      breakdown: { 'Compétences techniques': 60, 'Séniorité': 68, 'Secteur': 55, 'Disponibilité': 95, 'Mobilité': 50, 'Soft skills': 82, 'TJM / budget': 85 },
      proven: ['Docker', 'CI/CD', 'TypeScript'],
      confirm: ['Java (1 projet il y a 4 ans)'],
      absent: ['Spring Boot', 'Kubernetes', 'Secteur bancaire'],
      vigilance: ['Stack JS, pas Java/Spring', 'Full remote uniquement'],
      missionsCount: 4, placements: 2,
    },
  ],

  // CV diff for the generator (Thomas Martin)
  cvDiff: {
    kept: [
      { txt: 'Tech Lead — CGI Finance (2020–2024)', note: 'Expérience la plus pertinente pour la mission' },
      { txt: 'Migration microservices d\'un core banking Java', note: 'Match direct avec le besoin client' },
      { txt: 'Java 17, Spring Boot, CI/CD (GitLab)', note: 'Compétences obligatoires confirmées' },
    ],
    reworded: [
      { from: 'A travaillé sur le déploiement conteneurisé', to: 'A industrialisé le déploiement conteneurisé (Docker, orchestration)', note: 'Reformulé pour la lisibilité client' },
      { from: 'Encadrement de développeurs', to: 'Leadership technique d\'une équipe de 8 développeurs', note: 'Précisé d\'après le CV' },
    ],
    removed: [
      { txt: 'Stage de fin d\'études (2013)', note: 'Non pertinent pour un profil senior' },
      { txt: 'Compétences bureautiques (Excel, PowerPoint)', note: 'Hors périmètre technique' },
      { txt: 'Centres d\'intérêt : course à pied, photographie', note: 'Retiré pour la version client' },
    ],
  },

  pitch: {
    short: "Bonjour,\n\nPour votre besoin de Tech Lead Java / Spring Boot à Lille, je vous propose Thomas Martin (11 ans d'expérience, dont 4 en environnement bancaire). Il a piloté la migration microservices d'un core banking et correspond à 91 % de vos critères.\n\nDisponible sous 2 semaines, TJM 650 €. Je vous transmets son dossier mission-ready en pièce jointe.\n\nBien à vous,\nCamille Aubert",
    premium: "Bonjour,\n\nDans le cadre de la modernisation de votre plateforme bancaire, j'ai le plaisir de vous présenter Thomas Martin, Tech Lead Java / Spring Boot avec 11 ans d'expérience.\n\nPourquoi ce profil :\n• Migration microservices d'un core banking (contexte identique au vôtre)\n• Maîtrise Java 17, Spring Boot, CI/CD — compétences obligatoires confirmées\n• Leadership d'une équipe de 8 développeurs en contexte agile\n• 4 ans en environnement bancaire réglementé\n\nMatching mission : 91 %. Disponible sous 2 semaines, TJM 650 €.\nDeux points à confirmer ensemble : la maîtrise Kubernetes (Docker Swarm au CV) et la présence sur site.\n\nJe reste à votre disposition pour un échange.\n\nCordialement,\nCamille Aubert — Talent Partners",
    linkedin: "Thomas, j'ai une mission Tech Lead Java / Spring Boot qui colle à 91 % à ton profil : modernisation d'une plateforme bancaire à Lille, microservices, démarrage sous 1 mois, TJM autour de 650 €. Dispo pour en parler 15 min cette semaine ?",
  },

  questions: [
    { id: 'q1', txt: 'Confirmer la maîtrise de Kubernetes (le CV mentionne Docker Swarm).', state: 'pending', checked: false },
    { id: 'q2', txt: 'Valider la disponibilité réelle et le préavis freelance.', state: 'pending', checked: true },
    { id: 'q3', txt: 'Vérifier l\'acceptation de 2 jours sur site à Lille.', state: 'pending', checked: false },
    { id: 'q4', txt: 'Confirmer le TJM 650 € (hors frais).', state: 'confirmed', checked: true },
    { id: 'q5', txt: 'Niveau d\'anglais professionnel pour échanges avec l\'équipe ?', state: 'pending', checked: false },
    { id: 'q6', txt: 'Expérience confirmée en environnement bancaire réglementé.', state: 'confirmed', checked: true },
  ],

  history: [
    { id: 'h1', candidate: 'Thomas Martin', mission: 'Tech Lead Java', client: 'BNP Paribas', recruiter: 'Camille Aubert', date: '06/06/2026', status: 'interview' },
    { id: 'h2', candidate: 'Sarah Benali', mission: 'Lead Backend', client: 'Société Générale', recruiter: 'Léa Fontaine', date: '04/06/2026', status: 'sent' },
    { id: 'h3', candidate: 'Mehdi Roux', mission: 'DevOps AWS', client: 'Décathlon', recruiter: 'Camille Aubert', date: '02/06/2026', status: 'placed' },
    { id: 'h4', candidate: 'Clara Moreau', mission: 'PO Salesforce', client: 'AXA', recruiter: 'Karim Sayad', date: '29/05/2026', status: 'rejected' },
    { id: 'h5', candidate: 'Julien Perrin', mission: 'Fullstack React', client: 'Leboncoin', recruiter: 'Léa Fontaine', date: '27/05/2026', status: 'sent' },
    { id: 'h6', candidate: 'Thomas Martin', mission: 'Architecte Java', client: 'Crédit Agricole', recruiter: 'Camille Aubert', date: '21/05/2026', status: 'placed' },
    { id: 'h7', candidate: 'Sarah Benali', mission: 'Backend Lead', client: 'Worldline', recruiter: 'Karim Sayad', date: '18/05/2026', status: 'archived' },
  ],

  historyStatus: {
    sent: { label: 'Envoyé', tone: 'info' },
    interview: { label: 'Entretien obtenu', tone: 'warning' },
    placed: { label: 'Placé', tone: 'success' },
    rejected: { label: 'Refusé', tone: 'danger' },
    archived: { label: 'Archivé', tone: 'neutral' },
  },

  templates: [
    { id: 'tpl1', name: 'Charte Talent Partners', desc: 'Modèle premium grand compte', primary: '#2A52E0', active: true, sections: ['Synthèse', 'Compétences clés', 'Expériences', 'Formations', 'Langues'] },
    { id: 'tpl2', name: 'Appel d\'offres ESN', desc: 'Dossier de compétences détaillé', primary: '#0B1330', active: false, sections: ['Synthèse', 'Matrice de compétences', 'Références projets', 'Certifications'] },
    { id: 'tpl3', name: 'One-pager commercial', desc: 'Format court orienté pitch', primary: '#7C3AED', active: false, sections: ['Pitch', 'Top 5 compétences', 'Dernière mission'] },
  ],

  team: [
    { id: 'u1', name: 'Camille Aubert', role: 'Consultante recrutement IT', email: 'c.aubert@talent-partners.fr', perm: 'Admin', status: 'available' },
    { id: 'u2', name: 'Léa Fontaine', role: 'Business Manager ESN', email: 'l.fontaine@talent-partners.fr', perm: 'Éditeur', status: 'available' },
    { id: 'u3', name: 'Karim Sayad', role: 'Talent Manager', email: 'k.sayad@talent-partners.fr', perm: 'Éditeur', status: 'busy' },
    { id: 'u4', name: 'Nadia Lemoine', role: 'Resource Manager', email: 'n.lemoine@talent-partners.fr', perm: 'Lecture', status: 'off' },
  ],
};

window.WMData = WMData;
