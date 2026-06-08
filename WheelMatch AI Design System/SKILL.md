---
name: wheelmatch-design
description: Use this skill to generate well-branded interfaces and assets for WheelMatch AI (an AI SaaS for IT recruitment agencies, ESNs and staffing teams), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Tokens & global CSS:** link `styles.css` (it `@import`s `tokens/*`). Use semantic vars: `--primary-600`, `--ai-600`, `--navy-900`, `--surface-card`, `--text-strong`, the confidence trio (`--confidence-confirmed/pending/absent-*`), `--score-high/mid/low`.
- **Fonts:** Schibsted Grotesk (UI), JetBrains Mono (data/scores).
- **Components:** load `_ds_bundle.js`, read from `window.WheelMatchAIDesignSystem_84fa8f` — Button, IconButton, Badge, Avatar, Card, Input, Textarea, Select, Checkbox, Switch, ScoreGauge, ScoreBar, ConfidenceBadge, StatCard, Tabs, SidebarNav.
- **Signature pattern:** the anti-hallucination confidence system — tag every AI-asserted fact with `<ConfidenceBadge state="confirmed|pending|absent">`.
- **Full reference app:** `ui_kits/wheelmatch/` shows the complete product flow.

## Aesthetic in one line
Premium, calm, data-first B2B SaaS: light slate background, indigo-blue actions, violet for AI, navy chrome; soft layered shadows; 12px card radius; restrained motion; French copy; the matching score is always the hero.
