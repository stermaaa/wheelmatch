# WheelMatch AI — Design System

A premium B2B SaaS design system for **WheelMatch AI**, an AI product for **IT recruitment agencies, ESNs, and staffing teams**. The product turns a client mission brief + a candidate CV into an explainable matching score, a mission-ready shorted CV, a client pitch, candidate questions, and an anonymized version — cutting ~45 minutes of manual work down to ~3.

> **Origin:** Created from a product brief (no pre-existing codebase, Figma, or brand assets were supplied). The visual language below is original. Fonts are loaded via Google Fonts CDN and the logo is an original mark — both are flagged for replacement with real brand assets when available.

## Who it's for
1. **Consultant en recrutement IT** — receives client needs, finds profiles fast, adapts CVs, sends profiles with a convincing pitch.
2. **Business Manager ESN** — positions consultants on missions, reformats skill dossiers, answers RFPs quickly.
3. **Talent / Resource Manager** — maintains a talent base (availability, TJM, skills, history).

## Product principles
- **Reliability, speed, precision, seriousness, AI mastery.** Premium recruitment-agency feel — not flashy startup.
- **The matching score is the hero** — instantly legible (radial gauge, color-thresholded).
- **Anti-hallucination is a first-class UX system** — every AI-asserted fact is tagged *Confirmé dans le CV* (green) / *À confirmer* (amber) / *Absent du CV* (grey), with "voir source" affordances. The AI must never appear to invent.

---

## CONTENT FUNDAMENTALS
- **Language:** French (fr-FR). Professional, concise, recruitment-trade vocabulary (mission, TJM, séniorité, shortlist, ESN, freelance/CDI, charte).
- **Voice:** confident and calm. Speaks *to* the recruiter ("vous"), positions the AI as an assistant that surfaces evidence, never as an oracle. Example CTA: **"Analyser avec l'IA"**, **"Trouver les meilleurs profils"**, **"Générer CV mission-ready"**.
- **Casing:** Sentence case for body and most buttons; UPPERCASE only for small overlines/eyebrows (letter-spaced). Never ALL-CAPS headlines.
- **Numbers & data:** monospace (JetBrains Mono) for scores, TJM, counts, dates — reinforces precision. Scores shown as `91%`, TJM as `650 €`.
- **Tone of microcopy:** reassuring about trust ("Aucune donnée inventée — extraction sourcée"), explicit about uncertainty ("À confirmer avec le candidat").
- **Emoji:** essentially none in product chrome. A single waving 👋 in the dashboard greeting is the only sanctioned use — keep it rare.

## VISUAL FOUNDATIONS
- **Colors:** light app background (`--bg-app` cool off-white). Trustworthy **indigo-blue** primary (`--primary-600 #2A52E0`), **violet AI accent** (`--ai-600 #7C3AED`) reserved for IA-generation moments, deep **navy** (`--navy-900 #0B1330`) for the sidebar and brand panels. Cool **slate** neutrals throughout. Semantic confidence trio: green / amber / red-grey.
- **Type:** **Schibsted Grotesk** for everything UI (400–900; tight negative tracking on headings, weight 700–800 for titles, 800 for display numbers). **JetBrains Mono** for data. No serif.
- **Spacing:** 4px base grid; generous card padding (20–28px); 16–18px gaps between cards. Calm, well-spaced — never dense dashboards.
- **Backgrounds:** flat color only. No gradients, no photographic hero imagery, no textures. The one "rich" surface is the navy sidebar and occasional navy spotlight bars.
- **Cards:** white surface, 1px `--border-subtle` border, `--radius-lg` (12px) corners, soft layered `--shadow-sm`; hover lifts to `--shadow-md`. Selected state swaps border to primary. This is the dominant container.
- **Corner radii:** controls 8px (`md`), cards 12px (`lg`), pills/badges/avatars full. Inputs/buttons share 8px.
- **Shadows:** soft, cool-slate, low opacity, layered (ambient + contact). A violet `--shadow-ai` glow is available for AI emphasis but used sparingly.
- **Borders:** hairline 1px; `--border-subtle` (slate-200) default, `--border-default` (slate-300) on interactive controls.
- **Animation:** restrained. 120–280ms, `--ease-out` (cubic-bezier(.22,1,.36,1)). Buttons brighten ~4% on hover and nudge down 0.5px + scale .99 on press. Score gauges/bars animate their fill on mount. One looped spinner for the AI-analysis state. No bounces, no decorative motion.
- **Hover states:** subtle background tint (sidebar items, icon buttons → `--surface-sunken`), elevation lift on cards, brightness on filled buttons.
- **Press states:** slight translate-down + scale-down on buttons.
- **Transparency / blur:** minimal. Sidebar active item uses a translucent primary wash (`rgba(74,111,240,0.18)`); navy panels use translucent white for sub-elements. No glassmorphism.
- **Imagery vibe:** none by default — the product is data-first. Avatars fall back to deterministic colored initials.

## ICONOGRAPHY
- **System:** a self-contained **Lucide-style** stroke set — 24×24 viewBox, 2px stroke, round caps/joins, `currentColor`. Implemented in `ui_kits/wheelmatch/icons.jsx` (`window.WMIcon`) so the kit has **no CDN dependency**. For new work you may also load Lucide from CDN — it matches the stroke weight and style exactly.
- **Usage:** icons are monochrome, inherit text color, sit at 14–20px inline. Status/accent color is applied via container, not the icon itself. KPI tiles wrap an icon in a soft tinted square.
- **No emoji as icons. No filled/duotone icon styles.** Keep stroke-only for consistency.
- **Logo:** original mark in `assets/logo-mark.svg` (dark tile) and `assets/logo-mark-light.svg` (white tile) — a dashed "precision ring" (the *wheel*) around a green check (the *match*). Wordmark: "WheelMatch" + "AI" in primary blue, set in Schibsted Grotesk 800.

---

## INDEX (manifest)
**Root**
- `styles.css` — global entry; `@import`s all tokens + fonts. **Consumers link this.**
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `fonts.css`
- `assets/` — `logo-mark.svg`, `logo-mark-light.svg`
- `guidelines/` — foundation specimen cards (Type, Colors, Spacing, Brand)
- `SKILL.md` — Agent-Skill wrapper

**Components** (`components/`, namespace `window.WheelMatchAIDesignSystem_84fa8f`)
- `core/` — Button, IconButton, Badge, Avatar, Card
- `forms/` — Input, Textarea, Select, Checkbox, Switch
- `feedback/` — ScoreGauge, ScoreBar, ConfidenceBadge, StatCard
- `navigation/` — Tabs, SidebarNav

**UI kits** (`ui_kits/`)
- `wheelmatch/` — full interactive SaaS prototype (Dashboard, Missions, Shortlist, Talent, CV Generator, History, Templates, Settings). Entry: `index.html`.

## Substitutions to confirm (flagged)
1. **Fonts** — Schibsted Grotesk + JetBrains Mono via Google Fonts CDN (no self-hosted binaries). Provide brand fonts to self-host, or confirm these.
2. **Logo** — original placeholder mark. Replace with the cabinet's real logo when available.
