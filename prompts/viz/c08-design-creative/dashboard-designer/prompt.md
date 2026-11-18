# Master Prompt — C08-DASHBOARD-DESIGNER (Dashboard-Designer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Task:** VIZ-015 — Overview dashboard design for the repo visualization & learning environment (`viz/` Next.js 15 app, route `/`).  
**Task folder:** `prompts/viz/c08-design-creative/dashboard-designer/`.  
**Plan reference:** `.kilo/plans/1794948779713-repo-viz-learning-environment.md` §5 view 1 (Overview dashboard) and §6 (data layer & contracts).  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/viz/c08-design-creative/C08-DASHBOARD-DESIGNER-overview-dashboard-spec.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C08-DASHBOARD-DESIGNER  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C11 Dev-Engineering

---

## 1. Summary

- This master prompt instructs C08-DASHBOARD-DESIGNER to design the **Overview dashboard** (`/` route) of the repo visualization & learning environment: the first-screen analytics summary of the `bx2o/rea` repository (~3,900 files) that orients the user before they dive into the explorer, commits timeline, learn decks, or councils graph.
- Required dashboard composition (plan §5 view 1): **stat cards** (total files, directories, commits, councils), **commits-over-time area chart** (shadcn chart/recharts), **file-type mix pie**, **top-churn bar chart** (most changed files), **zone distribution** across the five repo zones (`docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`), and a **cobe globe hero**.
- Research data to ingest: plan §5/§6, `.stremiium/skills/web-artifacts-builder/` (shadcn component patterns incl. chart), `.stremiium/skills/frontend-patterns.md`, `.stremiium/registry/capability-classification.json` (design-skill refs: davila7-ui-design-system, kv0906-premium-frontend-design), `docs/program/` brief material, `.stremiium/config/council-department-mapping.json` (council count source).
- Chart data contracts to specify exactly: commits-over-time `{date, commits}`, file-type mix `{type, count}`, top-churn `{path, insertions, deletions}`, zone distribution `{zone, files}`.
- Output artifact: `artifacts/viz/c08-design-creative/C08-DASHBOARD-DESIGNER-overview-dashboard-spec.md` (unconsolidated).

---

## 2. Assumptions

- The dashboard consumes `/api/stats` (live git + filesystem scan) with `public/snapshots/stats.json` as the committed offline fallback (plan §6); both sources return the same `RepoStats` shape (`totals`, `byZone`, `byType`, `churnTop`).
- Councils stat = 16, sourced from `.stremiium/config/council-department-mapping.json`, not hard-coded in the UI.
- recharts is available through the shadcn `chart` wrapper (ChartContainer/ChartTooltip/ChartLegend per shadcn charts convention); cobe is available for the WebGL globe hero.
- Zones are the fixed five-root model: `docs`, `prompts`, `execution`, `.stremiium`, `rea`; stray root files are grouped under an `other`/root bucket so the zone distribution always sums to total files.
- Exclusions mirror the explorer: `rea/node_modules` and `.git` are never counted in files, dirs, or churn.
- Design tokens, brand palette, and theme behavior arrive from sibling tasks VIZ-012 (design-system-architect), VIZ-017 (brand-manager), VIZ-018 (theme-designer); the dashboard spec references tokens, never raw hex values.
- Ask Mode: this task produces a design specification; no application code is written at this stage.

---

## 3. Questions

- What is the canonical churn metric for the top-churn ranking — raw `insertions + deletions`, or a weighted score (e.g., edits ÷ file size) so large generated files do not dominate?
- How many entries does top-churn show by default (10?) and what is the "show more" expansion behavior?
- What date bucketing does commits-over-time use for the repo's full history span — daily, weekly, or auto-adaptive (daily < 60 points, weekly < 60 weeks, else monthly)?
- Should the file-type pie cap slices at 8 with an `other` bucket, and is a donut preferred over a solid pie for label legibility?
- Is zone distribution best served as a donut, a horizontal stacked bar, or a small treemap — and how does the zone color legend stay consistent with the 3D file-system view (plan §5 view 4)?
- Should the cobe globe hero be decorative-only or act as a clickable navigation affordance into `/globe`?
- Number formatting: compact notation (`3.9k`) above which threshold, and do stat cards show exact values on hover/tooltip as an accessibility fallback?
- Date formatting: are chart dates rendered in UTC or the viewer's locale, and which `Intl.DateTimeFormat` options are standard across tooltip and axis?

---

## 4. Concerns

- ~3,900 files and a long commit history can produce dense series; recharts must stay interactive (no full re-render on tooltip move) or the dashboard will feel broken on low-end devices.
- Churn hotspots may be dominated by snapshots/generated content under `docs/archive-second-versions/` and vendor trees; without exclusions the "most changed files" chart misinforms the learning goal.
- A pie with many file types (`.md`, `.ts`, `.tsx`, `.json`, `.mjs`, `.mdx`, images, dotfiles) becomes unreadable; uncapped slices also break the color token budget.
- The cobe globe is WebGL; without a reduced-motion static fallback and a points-degraded mode (plan §8 failure modes) the hero can block the whole dashboard on weak GPUs.
- Empty and loading states are unspecified risks: a fresh clone with one commit, snapshot-only mode (no git binary), or a failed `/api/stats` fetch must all render intentionally, not as blank cards or `NaN`.
- Color-encoding insertions vs deletions must survive color-blindness and dark/light themes; red/green alone is insufficient.

---

## 5. Suggested Improvements

- Stat cards: 4-up responsive grid (2×2 on mobile), each with icon, label, value, and a 30-day delta micro-sparkline; consistent card anatomy (icon → label → value → sub-line) and focus ring for keyboard users.
- Commits-over-time: gradient-filled area chart, x-axis tick thinning, ChartTooltip showing exact ISO date + exact commit count, and an optional range toggle (30d / 90d / all) once data volume justifies it.
- File-type mix: donut with center KPI (total files), max 8 slices + `other`, legend with counts and percentages.
- Top-churn: horizontal diverging bars — insertions (+) and deletions (−) stacked per file, sorted by total churn; middle-ellipsis path truncation; each row links to the file in `/explorer` and its history in `/commits`.
- Zone distribution: donut or stacked bar using the shared zone color tokens (same palette as explorer badges and 3D scene), with file counts per zone; `.stremiium` label rendered without leading dot confusion.
- Cobe globe hero: auto-rotating points globe above the fold, subtle grid/graticule, click/hint affordance routing to `/globe`; `prefers-reduced-motion` renders a static SVG fallback; WebGL failure degrades to a flat branded panel that preserves layout height.
- Empty/loading/error states: shadcn Skeleton cards per chart while fetching; zero-state (empty repo / 0 commits) with explanatory copy and a CTA to run the snapshot generator; error state with retry that never breaks the stat cards already loaded from snapshot data.
- Entrance motion: staggered fade/slide for cards via motion/GSAP, all gated behind reduced-motion.

---

## 6. Missing Dependencies

- `RepoStats` data contract from VIZ-022 (data-engineer): `totals {files, dirs, commits, councils}`, `byZone`, `byType`, `churnTop`, plus `CommitRecord {sha, date, author, message, filesChanged, insertions, deletions}` for the time series.
- Design tokens and shadcn registry manifest from VIZ-012; brand palette from VIZ-017; light/dark/system theme behavior from VIZ-018.
- Accessibility requirements from VIZ-014 (AA contrast, keyboard navigation, reduced-motion, screen-reader chart summaries).
- Layout/navigation shell from VIZ-013 (header, sidebar, mobile thumb-zone Flo nav) into which the dashboard mounts.
- Skills & references: `.stremiium/skills/web-artifacts-builder/SKILL.md` (shadcn chart patterns), `.stremiium/skills/frontend-patterns.md`, `.stremiium/registry/capability-classification.json` (davila7-ui-design-system, kv0906-premium-frontend-design refs), `.stremiium/config/council-department-mapping.json`, `docs/program/` program-brief material.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §5 view 1 and §6; extract the required dashboard composition and the exact data shapes available from `/api/stats` and snapshots.
- 2. Read assigned research inputs: `.stremiium/skills/web-artifacts-builder/`, `.stremiium/skills/frontend-patterns.md`, design-skill refs in `.stremiium/registry/capability-classification.json`, and `docs/program/` brief material; record evidence grades [FACT]/[EST]/[UNKNOWN]/[INFER].
- 3. Draft the page-level information architecture: hero (cobe globe + repo title) → stat cards → commits-over-time → file-type mix + zone distribution (side-by-side) → top-churn table/chart, with responsive collapse order documented.
- 4. Specify each visualization at component level: stat cards, area chart, type-mix donut, top-churn bars, zone distribution, globe hero — anatomy, tokens, interactions, and target components under `viz/components/charts/` and `viz/components/three/`.
- 5. Pin the four chart data contracts and the formatting rules (§8) so VIZ-020/VIZ-022 can implement without design ambiguity.
- 6. Define empty, loading, error, and degraded states per visualization, including snapshot-only and reduced-motion modes.
- 7. Draft acceptance criteria and hand them to QA (VIZ-024) vocabulary: what "done" means per chart.
- 8. Run validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains prompt/spec text only.
- Chart data contracts (canonical, shared with VIZ-022):
  - Commits-over-time: `{ date: string, commits: number }[]` — `date` ISO `yyyy-mm-dd` (UTC day bucket); ordered ascending; one point per bucket.
  - File-type mix: `{ type: string, count: number }[]` — `type` lowercase extension (`.md`, `.ts`, …) or `other`; sorted by count descending; chart caps display at 8 slices + aggregated `other`.
  - Top-churn: `{ path: string, insertions: number, deletions: number }[]` — sorted by `insertions + deletions` descending; top 10 by default; paths repo-relative, exclusions applied.
  - Zone distribution: `{ zone: "docs" | "prompts" | "execution" | ".stremiium" | "rea", files: number }[]` — counts non-excluded files per root zone; includes an `other` bucket for stray root files so Σfiles = total.
  - Stat cards: sourced from `RepoStats.totals { files: number, dirs: number, commits: number, councils: number }`; `councils` from `council-department-mapping.json` length.
- Number formatting: `Intl.NumberFormat` — exact values with group separators below 10,000 (`9,412`), compact notation at/above 10,000 (`39.1k`); stat-card tooltips always show the exact value; deltas signed (`+128`, `-14`).
- Date formatting: `Intl.DateTimeFormat` — axis labels short (`d MMM`), tooltips long (`EEEE, d MMMM yyyy`); ISO strings parsed as UTC (`T00:00:00Z`) to avoid timezone day-drift; relative phrases (`3 days ago`) only in tooltips, never as sole encoding.
- Churn formatting: insertions/deletions shown as signed pairs (`+1,204 / −386`) with color + sign + pattern differentiation (AA-safe pairings, e.g., teal/rose plus arrow glyphs).
- Component/config references: shadcn `chart` (recharts wrapper: ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend), `card`, `tabs`, `badge`, `separator`, `skeleton`, `tooltip`, `scroll-area`; cobe config for the globe (auto-rotate speed, marker count, glow color from tokens); lucide-react icons per stat card.
- Reference schema (spec artifact): `{cardId, vizType, dataContract, layout, tokens, interactions, emptyState, loadingState, errorState, reducedMotion, a11y, owner, date}`.

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Overview dashboard composition covers all six required elements: stat cards (files, dirs, commits, councils), commits-over-time area chart, file-type mix pie, top-churn bar chart, zone distribution (docs/prompts/execution/.stremiium/rea), cobe globe hero
- [ ] All four chart data contracts stated exactly: `{date, commits}`, `{type, count}`, `{path, insertions, deletions}`, `{zone, files}`
- [ ] Empty, loading, error, snapshot-only, and degraded/reduced-motion states specified per visualization
- [ ] Number formatting and date formatting rules specified (Intl-based, UTC parsing, compact thresholds)
- [ ] Zone color tokens shared with explorer/3D views (consistency with VIZ-012/VIZ-013)
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (VIZ-012, VIZ-013, VIZ-014, VIZ-017, VIZ-018, VIZ-022)
- [ ] Security considerations addressed
- [ ] SA regulatory considerations addressed where relevant
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- The dashboard renders repository metadata only (counts, paths, dates); it must never display secrets, tokens, credentials, or file contents — chart specs must exclude any path-matching of credential files from labels.
- Git author names/emails are personal data by default: the overview dashboard aggregates to counts only; if author identity is ever surfaced, it is restricted per POPIA guidance and cleared with C01.
- Snapshot JSONs (`public/snapshots/*.json`) must be generated with the same exclusions (`rea/node_modules`, `.git`, credential patterns) so committed fallbacks leak nothing.
- No secrets in dashboard configs; chart color tokens come from the design system, not environment-specific values.

---

## 11. South African Regulatory Considerations

- POPIA: commit author names/emails constitute personal information; the dashboard spec defaults to aggregate-only analytics and documents the rule if author data is added later.
- CPA 68 of 2008: plain-language card labels, readable number/date formatting, and no misleading visual encodings (truncated axes must be marked) for consumer-facing surfaces.

---

## 12. Compliance Gate

- C08 Design-Creative + C11 Dev-Engineering. Dashboard design requires C11 alignment for the data contracts (`RepoStats`/`CommitRecord` shapes owned by VIZ-022) and API/snapshot behavior; ratification via C08 captain (VIZ-010) before Code Mode.

---

## 13. Rollback Plan

- Revert to stat-cards-only dashboard if chart data contracts fail validation in Code Mode (cards consume only `totals`).
- Disable the cobe hero (static branded panel) on WebGL/perf failure or reduced-motion; charts render without it.
- Re-visualize on data-shape changes; re-design on usability/a11y failures; escalate dashboard-vs-data-contract conflicts to C08 + C11.

---

## 14. Escalation Path

- C08-DASHBOARD-DESIGNER → C08 Design-Creative Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Data-contract conflicts escalate directly to C11 Dev-Engineering (VIZ-022) with SC arbitrating per the Council Collaboration Matrix.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/viz/c08-design-creative/C08-DASHBOARD-DESIGNER-overview-dashboard-spec.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other viz outputs (VIZ-011 design vision, VIZ-012 tokens, VIZ-013 layouts, VIZ-014 accessibility, VIZ-017 brand, VIZ-018 themes, VIZ-022 data contracts), conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix, prioritizing C08/C11 contract alignment for the four chart data contracts.
- Artifact must pass the §9 Validation Checklist before handoff.
