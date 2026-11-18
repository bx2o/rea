# Master Prompt — VIZ-016 C08-DESIGN-RESEARCHER (Design-Researcher)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Task:** VIZ-016 — learning-workflow research for the Repo Visualization & Learning Environment (plan: `.kilo/plans/1794948779713-repo-viz-learning-environment.md` §3, C08 scope).  
**Workspace:** all artifacts inside the `bx2o/rea` repo workspace; the research subject is this repository itself (~3,900 files across five zones: `docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`).  
**Output:** produce one separate unconsolidated artifact at `artifacts/viz/c08-design-creative/VIZ-016-design-researcher-research.md`.  
**Depth:** expand UX-research, learning-science, information-architecture, and workflow depth regardless of model specificity.  
**Agent ID:** C08-DESIGN-RESEARCHER  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C03 Admin-Knowledge  

---

## 1. Summary

- This master prompt instructs C08-DESIGN-RESEARCHER to conduct learning-workflow research: how a user explores and learns a ~3,900-file repository through the planned `viz/` web app, and to convert those findings into ranked design requirements for the C08 design tasks and data/view requirements for the C11 build tasks.
- The research defines the five-stage learning journey the app must serve end-to-end: **orient** (overview stats — "what is this repo and how big is it?") → **browse** (explorer tree — "where do I go next?") → **inspect** (file viewer + history — "what exactly is this file and how did it get here?") → **connect** (councils graph, zone maps, 3D scene — "how does this piece relate to the whole?") → **learn** (reveal.js decks — "can I internalize this structure and explain it back?").
- Research covers four personas (new team member, auditor, executive, developer), the recurring learning loops that keep the journey alive ("why does this folder exist" answers, commit storytelling), and the two content-discovery patterns (search-first vs browse-first) that determine navigation, command-palette, and result-shape design.
- Research data to ingest: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` (16-council authority map, folder conventions), `.kilo/plans/1794948779713-repo-viz-learning-environment.md` (goal, views, data contracts), `.stremiium/registry/master-registry.json` (council registry), and a structural scan of the five repo zones.
- Skills to apply: `.stremiium/skills/houke-user-flow-design` (journey flows), `davila7-onboarding-cro` (first-run conversion), `sandraschi-uiux-design-consultant` and `carlheath-design` (UX guidance), `anthropics-knowledge-synthesis`, `anthropics-data-visualization`, `accessibility-compliance` (WCAG 2.1 AA gates), `nguyenthienthanh-design-expert` (component-design rules).
- Output artifact: `artifacts/viz/c08-design-creative/VIZ-016-design-researcher-research.md`.

---

## 2. Assumptions

- The repository is present locally with full git history; the app reads local git + filesystem scan (GitHub API not required), with committed JSON snapshots (`tree.json`, `commits.json`, `stats.json`) as the offline fallback.
- The five-zone model (`docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`) is the primary mental model offered to learners; `rea/` internals and `node_modules` are collapsed by default in the tree.
- ~3,900 files makes the tree the core scale problem: rendering must be virtualized and cognitive load must be managed by zone filters and progressive disclosure.
- The four personas are synthetic composites derived from program roles; no live human-subject testing is in scope — research is desk research, heuristic evaluation, and repo-informed journey mapping.
- The app is web-based (Next.js 15 + shadcn/ui), desktop-first with mobile thumb-zone (Flo-menu) patterns; learning happens in the browser, not in an IDE.
- The 16-council structure plus `.stremiium/registry/master-registry.json` provide the ownership layer that turns file navigation into organizational learning ("who owns this and why does it exist").

---

## 3. Questions

- What are the five learning stages in practice — what question does each stage answer, which view serves it, and what triggers a user to move from one stage to the next?
- What does each persona need in the first 30 seconds, the first 5 minutes, and the first week — and which stage do they enter on?
- Which question most often blocks a newcomer in a large repo, and where must its answer surface (point-of-browse inline, or a separate manual that nobody reads)?
- When do users search vs browse, what makes a search result feel like a dead end, and how can every search hit double as a browse entry point?
- How does commit history become a story: what narrative does the repo-arc timeline tell, and how does a user follow one file's arc versus the whole repo's arc?
- How do learning decks close the loop back into the live repo (slide → file, and file → deck), so learning is reinforced rather than decoupled?
- What measurable signals prove learning happened: time-to-first-find, dead-end rate, deck completion, return-visit activity?
- How does the journey degrade gracefully in snapshot-only mode, on mobile, and under reduced-motion?

---

## 4. Concerns

- Cognitive overload at 3,900 files: an unfiltered, flat tree is unusable; without zone defaults and progressive disclosure the browse stage collapses at first render.
- Dead ends: search with no guidance on zero results, folders with no explanation, files with no context — each dead end ends the journey instead of redirecting it.
- 3D novelty vs learning value: the globe and 3D file-system scene must answer questions ("where are the hotspots, what zones exist") rather than decorate; if the connect stage does not teach, it will be skipped.
- Persona conflict: the executive wants abstraction (one screen), the auditor wants provenance (raw diffs); a single dashboard cannot serve both without explicit modes or progressive depth.
- Learning without retention: a one-time guided tour decays within days; the environment needs return-visit hooks (what changed since last visit, recent churn).
- History as noise: a raw commit log is not a story; without conventional-commit categorization (`feat:`, `docs:`, `analysis:` …) and magnitude cues (+/-), the commits timeline is a wall of text.
- Mobile: executives and new members will open the app on phones; a tree-heavy layout without thumb-zone navigation kills the orient and learn stages on mobile.
- Offline fallback must preserve the entire journey, not just the orient stage — snapshots must carry enough shape (zones, purposes, commit records) for browse/inspect/learn to function.

---

## 5. Suggested Improvements

### 5.1 Five-stage journey, mapped to views

| Stage | Question answered | Primary view | Research requirement |
|---|---|---|---|
| Orient | "What is this repo and how big is it?" | `/` overview | Stat cards (files, dirs, commits, councils), commits-over-time area chart, type/language mix, top-churn bar, cobe globe hero; executive-readable in ≤ 30 seconds, with "start here" guidance into stage 2 |
| Browse | "Where do I go next?" | `/explorer` | Virtualized lazy tree, zone filters, `rea/` collapsed by default, folder-purpose tooltips (§5.3), ⌘K command palette, breadcrumbs |
| Inspect | "What exactly is this file and how did it get here?" | file viewer + history | Markdown rendering, metadata (size, last commit), per-file history link, per-commit diff summary (+/-), "who owns this zone" |
| Connect | "How does this piece relate to the whole?" | `/councils`, zone maps, 3D scene | File↔folder↔council relationship edges, 16-council hierarchy graph (SC → CRD → C01–C16), zone coloring, hover tooltips, click-to-select |
| Learn | "Can I internalize and explain this back?" | `/learn` | reveal.js decks generated from repo docs (repo orientation, program brief, council structure, prompt/reply system), keyboard + speaker modes, deck→repo deep links |

- Every stage must offer both a "go deeper" and a "zoom out" exit, and every stage transition is ≤ 1 click.
- The journey is explicitly non-linear: auditors start at inspect via search; executives rarely leave orient/learn; the app must support entry at any stage without forcing a linear tour.

### 5.2 Personas

| Persona | Primary goal | Entry stage | Dominant discovery pattern | Success metric |
|---|---|---|---|---|
| New team member (onboarding) | Build a mental model: where things live, who owns what, how work is organized | orient → browse → learn | Browse-first with search fallback once a task keyword is known | Locates the correct folder/council for a given task in ≤ 5 minutes without asking a human |
| Auditor (compliance/evidence) | Verify claims, trace provenance, reconstruct the timeline of a decision or artifact | search-first → inspect → connect | Search-first | Reconstructs a file's full history (who changed what, when, why) unaided, and cites the commit |
| Executive | 30-second scope/health overview plus board-ready talking points | orient, learn (speaker mode) | Curated-only: dashboard and decks, never raw tree unless guided | Speaks to repo scope and status without opening a single file |
| Developer (contributor) | Make convention-compliant changes; find churn hotspots, ownership, and conventions | search-first → inspect → connect | Search-first with graph fallback for unfamiliar zones | Finds the convention doc plus the target file, and lands a convention-compliant edit |

- Persona cards in the artifact must each list: goal, entry stage, discovery pattern, top-3 blockers, required UI elements, and the success metric above.
- Persona conflicts are resolved by modes and depth, not by compromise: the overview dashboard gets an executive mode (headline stats, sparklines) and a detail mode (drill-down churn) rather than one diluted layout.

### 5.3 Learning loops

- **"Why does this folder exist" answers** — the highest-frequency onboarding question is "why", not "what". Every folder node in the tree carries a purpose layer: one-paragraph role, owning council, notable files, recent activity, and a related-deck link. The answer surfaces at point-of-browse (tooltip/side panel), sourced from existing `README.md`/index files where present, else generated from structure (naming patterns, contents, git history) and marked `[INFER]` until C03 ratifies. Never route the learner to a separate manual to answer an inline question.
- **Commit storytelling** — two distinct narratives:
  - *Repo-arc*: the `/commits` GSAP ScrollTrigger timeline tells the whole repo's story (program phases, the 2026-11-16 consolidation, churn waves); conventional-commit prefixes become story categories with color/icon coding; insertions/deletions become visual magnitude.
  - *File-arc*: from any file, "history" opens that file's own timeline — first appearance, major rewrites, recent touch — answering "how did this file get to this state?".
  - Every commit entry links forward into inspect (diff view) and connect (which zone/council owns the changed files), so the story always hands off into the rest of the journey.
- **Deck ↔ repo loop** — every deck slide carries deep links into live repo locations; every repo page that has an explaining deck links back to it. Learning content and the artifact under study must never be more than one click apart.
- **Return-visit loop** — the orient stage surfaces "what changed since your last visit" (recent commits, churn deltas) so repeat exposure compounds instead of restarting.

### 5.4 Content discovery patterns: search-first vs browse-first

- **Search-first** (auditor; developer with a known target): ⌘K shadcn command palette as the universal bridge; results must show full path, zone badge, and parent folder so each hit is simultaneously a browse entry point; zero-results state must guide (suggest zone filters and near-matches, never a blank dead end); search must be scoped-to-folder ("search within `.stremiium/`") for auditors working one zone.
- **Browse-first** (new team member; executive on a guided tour): scannable virtualized tree, sane zone defaults, breadcrumbs, "start here" markers per zone, and folder-purpose tooltips (§5.3) so browsing teaches rather than merely navigates.
- **Mode switching is the norm, not the exception**: research must assume users switch mid-journey — search results must offer browse context, and browse must offer a search entry at every level (per-folder filter box).
- **Serendipitous discovery**: churn hotspots and the commit timeline answer "what's hot right now"; the councils graph answers "what else does this council own" — both are discovery surfaces, not just analytics.

### 5.5 Measurement plan (proposed instrumentation, POPIA-minimal)

- Time-to-first-find (search → correct file opened), dead-end rate (searches with zero productive clicks), deck completion rate, stage-transition frequency, and return-visit action rate. All aggregate, no PII (see §10–§11).

---

## 6. Missing Dependencies

- `.stremiium/config/council-department-mapping.json` — referenced by the plan for the councils view but **not present** in the workspace; must be generated from `.stremiium/registry/master-registry.json` + PROGRAM_BRIEF §2, or the gap escalated to C11 (VIZ-031 knowledge-graph-builder).
- No live analytics exist; §5.5 metrics are proposals to instrument in Code Mode, not observations.
- Persona validation with real Stremiium team members (C05 HR-Culture coordination) is out of Ask Mode scope; personas remain synthetic until C05 reviews.
- Folder-purpose source texts: many folders lack a `README.md`; the purpose layer (§5.3) needs a generation rule ratified by C03 (markdown standards owner).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read the plan §1–§7 and `docs/program/tbs/tbs/PROGRAM_BRIEF.md`; extract the five-zone structure, the 16-council authority map, and the six core views (`/`, `/explorer`, `/commits`, `/globe`, `/learn`, `/councils`).
- 2. Structural scan: sample each zone (`docs/`, `prompts/`, `execution/`, `.stremiium/`, `rea/`); record folder naming patterns, README coverage, file-type mix; grade findings `[FACT]`/`[INFER]`/`[UNKNOWN]` with `[S#]` source references.
- 3. Map the five-stage journey (§5.1) to views and data; define entry criteria, exit criteria, and one-click transitions per stage.
- 4. Build the four persona cards (§5.2): goal, entry stage, discovery pattern, blockers, required UI elements, success metric.
- 5. Specify both learning loops (§5.3): the "why does this folder exist" answer format (data fields, sourcing rules, `[INFER]` labeling) and commit storytelling (repo-arc + file-arc, category taxonomy from conventional commits).
- 6. Define search-first vs browse-first (§5.4): palette behavior, result shape, no-results guidance, scoped search, browse affordances, mode-switch bridges.
- 7. Convert findings into ranked, ID-tagged design requirements (`DR-###`) addressed to C08 siblings — VIZ-011 (concept/IA), VIZ-013 (navigation/palette UX), VIZ-014 (a11y of research features), VIZ-015 (dashboard depth modes) — and data requirements for C11 (additive optional fields on `FileNode`/`CommitRecord`/`RepoStats`, e.g. folder `purpose`, zone, council ownership).
- 8. Compile the unconsolidated artifact at `artifacts/viz/c08-design-creative/VIZ-016-design-researcher-research.md` with tables, a journey ASCII diagram, and the `DR-###` requirement register.
- 9. Run validation checklist (§9 below).
- 10. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains research text and requirement definitions only.
- Reference schemas:

```
{personaId, goal, entryStage, discoveryPattern, blockers[], requiredUiElements[], successMetric}
{journeyStage, question, view, entryCriteria, exitCriteria, transitions[]}
{loopId, trigger, answerSurface, dataSource, inferGrade, exitAction}
{patternId, mode, entryPoint, resultShape, noResultsGuidance, scopedSearchBehavior}
{requirementId (DR-###), title, rationale, personaRef, viewRef, priority, ownerTask (VIZ-0xx)}
```

- Data-contract hooks (additive, optional fields only — never breaking changes to C11 VIZ-022 contracts): `FileNode { path, name, type, size, zone, purpose?, councilOwner?, children? }`; `CommitRecord { sha, date, author, message, filesChanged, insertions, deletions, category? }`; `RepoStats { totals, byZone, byType, churnTop }`.
- Tech stack refs: shadcn `command` (⌘K palette), `tooltip`, `scroll-area`, `treelike-context-menu`, `chart`; GSAP ScrollTrigger (repo-arc timeline); reveal.js (decks, speaker mode); react-three-fiber + cobe (connect stage); recharts/shadcn charts (orient stage); lucide-react + bootstrap-icons (category/story iconography).

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Five learning stages covered with views, entry/exit criteria, and transitions
- [ ] All four personas covered with goals, blockers, and success metrics
- [ ] Both learning loops specified ("why does this folder exist" answers + commit storytelling) with data sources
- [ ] Search-first vs browse-first specified with result shapes, no-results guidance, and mode-switch bridges
- [ ] Findings graded `[FACT]`/`[EST]`/`[UNKNOWN]`/`[INFER]` with `[S#]` references or explicitly marked unverified
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified (including absent `council-department-mapping.json`)
- [ ] Data-contract additions are additive-optional only
- [ ] Accessibility requirements for every proposed feature stated (WCAG 2.1 AA, aligns with VIZ-014)
- [ ] Security considerations addressed
- [ ] POPIA/regulatory considerations addressed where relevant
- [ ] Compliance gate named (C08 + C03)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside the repo workspace

---

## 10. Security Considerations

- Personas are synthetic composites; no personal data is collected or stored.
- The research artifact may quote short file excerpts for evidence; it must not embed secrets, keys, or tokens if any are encountered during the repo scan — report their location only, never their value.
- Proposed analytics (§5.5) must be aggregate and POPIA-minimal (no user accounts, no cross-site tracking).
- Git author names appear in commit storytelling; display them as the repo already publishes internally, with no enrichment or cross-referencing to external identity sources.

---

## 11. South African Regulatory Considerations

- POPIA: research uses synthetic personas (no human subjects); any future instrumentation must avoid PII and honor data-minimization principles.
- WCAG 2.1 AA is an inclusion obligation for a learning environment (C08 mandate; VIZ-014 gate): keyboard-navigable tree, reduced-motion alternates for GSAP/3D features, AA contrast on all learning surfaces.
- If decks are reused for board or consumer education, CPA 68 of 2008 honest-presentation applies: statistics shown on the overview dashboard must not overstate scope or status.

---

## 12. Compliance Gate

- C08 Design-Creative + C03 Admin-Knowledge. Learning-content structure and folder-purpose sourcing rules require C03 (artifact system, TBS folders, markdown standards owner).
- C05 HR-Culture consulted for persona and human-factors realism; C14 Customer-Success consulted for onboarding-pattern alignment.

---

## 13. Rollback Plan

- Re-conduct research on invalid or unverified findings; re-grade affected requirement IDs.
- Re-map journeys if the plan's view set changes; supersede affected `DR-###` entries rather than mutating ratified design docs.
- Escalate persona-realism conflicts to C05 and content-standard conflicts to C03 per §14.

---

## 14. Escalation Path

- C08-DESIGN-RESEARCHER → C08 Design-Creative Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Viz-specific: scope or journey-model changes escalate to VIZ-010 (captain, design authority) and VIZ-001 (sparkling-curious, orchestration); C08↔C11 requirement conflicts (e.g. data-contract additions in §8) are arbitrated by SC per plan §3.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/viz/c08-design-creative/VIZ-016-design-researcher-research.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with the other C08 Design-creative outputs (VIZ-011 concept, VIZ-013 navigation, VIZ-014 accessibility, VIZ-015 dashboard), conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- The `DR-###` requirement register is the cross-referencing key: C08 siblings cite the requirements they implement; C11 tasks (VIZ-020–VIZ-025, VIZ-030–VIZ-031) cite the data fields and views the research requires.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
