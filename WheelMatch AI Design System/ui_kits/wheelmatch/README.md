# WheelMatch AI — UI Kit

Interactive single-page recreation of the WheelMatch AI recruitment SaaS. Composes the design-system primitives (`window.WheelMatchAIDesignSystem_84fa8f`) — it does not re-implement them.

## Run
Open `index.html`. The app boots on the Dashboard; navigate via the sidebar or follow the core flow:

**Nouvelle mission → Analyse IA → Shortlist → Fiche talent → CV mission-ready → Export**

## Files
| File | Screen |
|------|--------|
| `App.jsx` | Shell + client-side router |
| `shell.jsx` | Sidebar, Topbar, PageHeader, SectionLabel |
| `Dashboard.jsx` | KPI grid, mission spotlight, activity feed |
| `Missions.jsx` | Paste brief → simulated AI extraction → criteria + clarifications |
| `Shortlist.jsx` | Ranked profiles with score gauges + filters |
| `TalentDetail.jsx` | Score breakdown + anti-hallucination confidence panels |
| `CVGenerator.jsx` | Options, CV preview, diff, pitch, candidate questions, export |
| `History.jsx` | Sent-CV table with status tracking |
| `Templates.jsx` | Charte editor + live preview |
| `Settings.jsx` | Team, permissions, AI guardrails |
| `data.jsx` | All mock data (`window.WMData`) |
| `icons.jsx` | Stroke icon set (`window.WMIcon`) |

## Notes
- Data is mocked in `data.jsx`; AI actions are simulated with timeouts.
- Icons are a self-contained Lucide-style set (no CDN dependency) — see `icons.jsx`.
