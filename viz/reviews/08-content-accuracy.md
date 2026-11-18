# VIZ-030 Review 08 — Content Accuracy / Docs Critic

**Reviewer role:** CONTENT-ACCURACY/DOCS CRITIC (read-only; no application code modified)
**Scope:** every factual claim rendered to the user in the viz app and the 4 learning decks
**Subject:** `viz/` app (Next.js 15) · `viz/content/decks/deck-0{1..4}*.md` · repo `/workspace/app`
**Review date:** 2026-11-18
**Method:** static source + committed-snapshot verification against the live repo (git, filesystem, JSON). The dev server was not answering on `http://localhost:3000` during review (no listener bound; a `next build` was in flight), so UI strings were verified by reading `viz/app`, `viz/components`, `viz/lib` and the committed `viz/public/snapshots/*.json` that the UI serves.

**Governing rule under test:** *"nothing may be stated as fact without a citable source and an evidence grade"* — this applies to the app's UI text and to the learning decks.

---

## 1. Headline

| Metric | Count |
|---|---:|
| Distinct incorrect / stale factual claims (CA-01 … CA-32, excl. CA-28 which verifies CORRECT) | **31** |
| — of which **Critical** (shown to users, false or non-executable) | **3** |
| — **High** | **12** |
| — **Medium** | **9** |
| — **Low** | **7** |
| Broken path claims (deck + root README) | **11** |
| Open SC arbitration items still open in the implementation | **4 of 8** |

The decks are **not** wrong about the program's substance: every governance figure (16 councils, 15 coordinators, 6 routing rules, 29 departments, 61 graph nodes), every prompt/reply count (164 + 37 = 201, 603 reply files, 19 viz briefs), the $STM tokenomics, the 17-vs-30 dossier drift, and REA v6.5.0 all verify exactly. The failures are concentrated in (a) three Critical claims about features or commands that do not exist, (b) stale snapshot totals inherited from a mid-build capture, and (c) eleven broken path citations.

---

## 2. Findings table

| ID | Severity | Location | Claimed | Actual (with source) | Recommended Fix |
|---|---|---|---|---|---|
| **CA-01** | **Critical** | `viz/content/decks/deck-03-prompts-and-replies.md` L148 (slide "How to explore"); also `viz/content/decks/deck-01-repo-orientation.md` L175 (slide "Where to go next") | "**⌘K** — command palette: fuzzy search grouped into Files / Folders / Commits / Views"; "/explorer (virtualized tree + ⌘K command palette)" | **Not implemented.** No `cmdk` dependency (`viz/package.json` deps: next, recharts, gsap, cobe, r3f, reveal.js, lucide, next-themes — no cmdk). No `command` component in `viz/components/ui/` (badge, button, card, scroll-area, separator, skeleton, table, tabs, tooltip only). No `metaKey`/`ctrlKey`/`keydown` handler anywhere in `viz/app` or `viz/components`. The explorer has a zone filter only, no text search (`viz/components/explorer/file-tree.tsx`). The cited source is also wrong: `viz/README.md` "Views" table lists routes only and never mentions a command palette. | Remove the ⌘K bullet from deck-03 and the parenthetical in deck-01, or implement the palette before shipping the decks. Cite the implementation file, not a design brief (`prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` §7 is a *plan*, not the build). |
| **CA-02** | **Critical** | `viz/REGISTRIES.md` — install template line + all 29 registry rows + "Install sequence" block | `pnpm dlx shadcn@latest registry add @<name>` | **No `registry` subcommand exists in the shadcn CLI.** Current command set is `init, add, apply, preset, view, search/list, build, docs, info, migrate, eject` (https://ui.shadcn.com/docs/cli). Namespaced registries must be declared in `components.json` under `registries` and then consumed as `shadcn@latest add @namespace/resource-name` (https://ui.shadcn.com/docs/registry/namespace). A bare `@name` is not a valid reference — the namespace parser requires `@ns/resource`. `viz/components.json` also has **no `registries` block**, so even the correct `add @ns/item` form would fail with "Unknown registry". | Replace the template with the real two-step flow: (1) add a `registries` map to `viz/components.json`; (2) `pnpm dlx shadcn@latest add @<ns>/<component>`. Fix the same malformed command in plan §4 install step 5. |
| **CA-03** | **Critical** | `viz/REGISTRIES.md` — "Curated install set" paragraph | "These **11** core components are hand-implemented in `components/ui/` (offline-first per plan §8) with the same API surface" | The command below lists **12** names, and only **8** exist in `viz/components/ui/`: button, card, table, tabs, badge, separator, scroll-area, tooltip. **Missing: `sheet`, `command`, `dialog`, `chart`.** Present but unlisted: `skeleton`. "11" matches neither the list (12) nor the implementation (9 files). `chart` is not implemented as a component — charts are raw recharts in `viz/app/page.tsx`. | Correct the count and the list, or implement the 4 missing components. State the real number of files in `components/ui/` and which of the 12 are hand-implemented. |
| CA-04 | High | `deck-03` L162 (slide "Trace one prompt end-to-end", step 1) | `prompts/neobank/c01-legal-compliance/carf/prompt.md` | **Does not exist.** Real path: `prompts/neobank/legal/carf/prompt.md` (the reply itself names it: `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` L10 "Source prompt: `prompts/neobank/legal/carf/prompt.md`"). Note the *replies* tree is council-keyed (`c01-legal-compliance`) while the *prompts* tree is department-keyed (`legal`) — the deck conflated the two. | Correct the path to `prompts/neobank/legal/carf/prompt.md` and add a note that the reply folder uses the council-keyed path. |
| CA-05 | High | `deck-03` L164 (same slide, step 3) | `execution/results/c01-legal-compliance/carf-execution-result.md` | **Does not exist.** Real path: `execution/results/c01-legal-compliance/carf/execution-result.md` (execution results are folder-per-prompt, matching the `execution/results/<scope>/<prompt-name>/execution-result.md` convention the same deck states 2 slides earlier). | Correct the path. |
| CA-06 | High | `deck-01` L53 (slide "Reading order", step 5) | `docs/program/plan/PLAN.md` | **Does not exist.** Real path: `docs/program/plan/plan/PLAN.md` (doubled `plan/plan`). | Correct the path. |
| CA-07 | High | `deck-01` L54 (same slide, step 6) | `docs/governance/unconsolidated/README.md` | **Does not exist.** Real path: `docs/governance/unconsolidated/UnConsolidated/README.md`. | Correct the path. |
| CA-08 | High | `deck-01` L148 (slide "REA quickstart") | `docs/engineering/rea-toolkit/rea-business-toolkit/` | **Does not exist.** Real path: `docs/engineering/rea-toolkit/rea-toolkit/rea-business-toolkit/` (doubled `rea-toolkit/rea-toolkit`). The root README carries the identical broken link. | Correct the path in the deck and in the root README. |
| CA-09 | High | `/workspace/app/README.md` — "Reading order" links 1, 2, 5, 6; "TBS snapshot" T1.1 row; "REA quickstart" Toolkit row | `docs/program/tbs/PROGRAM_BRIEF.md`, `docs/program/tbs/TASK_INDEX.md`, `docs/program/plan/PLAN.md`, `docs/governance/unconsolidated/README.md`, `docs/program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md`, `docs/engineering/rea-toolkit/rea-business-toolkit/` | **All six are broken.** Real paths: `docs/program/tbs/tbs/PROGRAM_BRIEF.md`, `docs/program/tbs/tbs/TASK_INDEX.md`, `docs/program/plan/plan/PLAN.md`, `docs/governance/unconsolidated/UnConsolidated/README.md`, `docs/program/tbs/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md`, `docs/engineering/rea-toolkit/rea-toolkit/rea-business-toolkit/`. Only the *first* was flagged in the VIZ-030 brief; **five more were missed**. | Fix all six links. Add a link-check gate to `viz/scripts/verify-viz.mjs` (it currently validates data shapes, not cited paths). |
| CA-10 | High | `deck-01` L20 + L39 (slides "What this workspace is", "The six zones"); `deck-03` L112 context | "Scale: **11,677 files · 3,226 directories** (viz snapshot, 2026-11-18)"; "Total: 11,677 files" | **Stale.** `viz/public/snapshots/stats.json` was captured at `headSha 7c2b301` (one commit behind HEAD `b474113`) *mid-build*, when `viz/` held only a 16-file scaffold. Live repo: **11,745** tracked files (`git ls-files | wc -l`), **3,253** directories, at HEAD `b474113` (`feat(viz): build interactive repo visualization learning environment`). | Regenerate the snapshot at HEAD (`node viz/scripts/snapshot.mjs`) and re-derive the deck figures, or state the snapshot SHA and age on the slide. |
| CA-11 | High | `deck-01` L37 (zone table, "other" row) | `other` \| **30** \| "Root-level & unzoned (`README.md`, `.github/`, …)" | **Stale.** Live `other` = **98** files (`git ls-files` bucketed by top-level segment: docs 2981, prompts 835, execution 1613, .stremiium 2150, rea 4068, other 98 = 11,745). The 68-file delta is the `viz/` zone itself, which is unzoned and therefore lands in `other`. The zone table also omits `viz/` entirely, so the app's own source tree is invisible in the app that displays it. | Regenerate the snapshot; add a `viz` zone row or explicitly disclose that `viz/` is bucketed into `other`. |
| CA-12 | High | Dashboard stat cards, `viz/app/page.tsx` L620–647 ("Files", "Directories", "Commits") | Files **11,677**, Directories **3,226**, Commits **32** | All three read live from `stats.json` and are **stale**: actual **11,745** files / **3,253** dirs / **33** commits (`git rev-list --count HEAD` = 33; `git rev-list --count 7c2b301` = 32). The "Commits" card hint reads "full git history" — it is not; it is the commit count as of the snapshot SHA. | Regenerate snapshots before shipping; change the hint to name the snapshot SHA, or serve live git (the `/api/*` live-git fallback already exists per `viz/README.md`). |
| CA-13 | High | Explorer tree, `viz/public/snapshots/tree.json` | `viz/` subtree listed with **16 files / 4 dirs** | On disk `viz/` has **84 files / 32 dirs**. The explorer therefore under-lists 68 files of the app's own source, and the file-count stat card (CA-12) is computed from the same stale walk. | Regenerate `tree.json` at HEAD. |
| CA-14 | High | `deck-01` L17 (slide "What this workspace is"); also asserted in root `README.md` ("REA engine" row), `prompts/replies/README.md` L104 and `docs/engineering/reverse-engineering/reverse-engineering/rea-analysis/setup-and-verification.md` L25 | "the `morluto/rea` engine checked out at the repo root (**v6.5.0**, **207 MCP tools** / **153 CLI commands**)" | **Version CORRECT** (`rea/package.json` → `rea-agents 6.5.0`); **CLI count CORRECT** (`rea/src/cliCommandNames.ts` → `CLI_COMMANDS` = exactly **153** entries); **MCP count NOT REPRODUCIBLE — three different numbers exist in-repo**: `rea/docs/client-configuration.md` L109 says "with **172 tools**"; the repo's own inventory `docs/engineering/reverse-engineering/reverse-engineering/rea-analysis/tool-catalog.md` enumerates **198** distinct tool names across 23 families; the program docs (README, `prompts/replies/README.md`, execution results) assert **207**. None can be executed here (`rea/node_modules` absent → no `rea doctor` identity block). | Replace "207 MCP tools" with a graded claim: e.g. "153 CLI commands (verified: `rea/src/cliCommandNames.ts`); MCP tool surface **not independently verified** — rea's own docs cite 172, the repo catalog enumerates 198". Attach an evidence grade. |
| CA-15 | High | `/workspace/app/README.md` — "Workspace zones" table | Repo zones listed as Canonical OS, Canonical surfaces, Governance, Program, Research, Architecture, Engineering, Deliverables, Archive, Prompts, Prompt replies, Execution results, REA engine | **The `viz/` zone is entirely absent from the root README.** The repo restructured to `docs/ / prompts/ / execution/` in commit `18d156b` and then added `viz/` in `b474113`, but the root README — the repo's front door — was never updated for either. | Add a `viz/` row to the zones table plus a reading-order pointer to `viz/README.md` and `prompts/viz/TASK-INDEX.md`. |
| CA-16 | Medium | `deck-01` L114 (slide "Operational surfaces"); `deck-03` L33–36 (slide "prompts/ zone structure") | "`prompts/` — per-prompt folders: … `prompts/neobank/<department>/<prompt-name>/prompt.md` (16 departments, 37 prompts) and `prompts/stremiium/<council>/<agent-name>/prompt.md` (16 councils + orchestration, ~165 agents)" | Counts are correct (**37** NeoBank, **164** Stremiium, 16 council dirs + `orchestration/`) but the description is now incomplete: `prompts/` also holds `prompts/viz/` (**19** briefs) + `README.md` + `TASK-INDEX.md`. The `prompts/` zone is **835** files, not "one folder per Master Prompt (Stremiium + NeoBank)". | Note the viz briefs as a third prompt family and state 220 `prompt.md` files in the zone. |
| CA-17 | Medium | `deck-01` L114; `viz/app/api/explain/route.ts` `councilFor()` | "16 councils" as the count of `prompts/stremiium/<council>/` folders | The 16 folders are **not** the 16 roster councils. Three folder names do not correspond to a registered department in `.stremiium/config/council-department-mapping.json`: `c06-hardware-enable` (mapping: `c06-engineering-infrastructure`), `c13-web3-token` (mapping: `c13-web3-finance`), and `c14-banking-fintech` (mapping: `c14-customer-success`) — the last holds **9** banking-fintech agent prompts that belong to C16, including a near-duplicate `chief-banking-officer` vs C16's `chief-banking-officer-c16`. There is **no `c14-customer-success` folder**. Consequence: `/api/explain` derives the council from the `cNN` path prefix and therefore attributes those 9 banking prompts to **C14 Customer-Success**. | State that the prompts tree is keyed by historical folder names, and reconcile the three folders to the mapping (or fix `councilFor()` to consult the mapping rather than the path prefix). |
| CA-18 | Medium | `deck-01` L51 (slide "Reading order", step 3) | "`docs/research/dossiers/` — one dossier per target entity" | The path resolves, but the entity folders sit **one level deeper**: `docs/research/dossiers/dossiers/<group>/<entity>/` (doubled `dossiers/`). The physical folder layout is `docs/research/dossiers/dossiers/01-sa-traditional-banking/standard-bank/` etc. | Cite the physical path `docs/research/dossiers/dossiers/` and note the duplicated directory segment. |
| CA-19 | Medium | `deck-01` L20 / `deck-03` L112 — the *evidence discipline* of the decks themselves | Decks cite a `*Source:*` line per slide but carry **no evidence grade** on their own factual claims | `grep -c "\[FACT\]\|\[EST\]\|\[INFER\]\|\[UNKNOWN\]\|\[SEEN\]"` over the 4 deck files returns 0, 0, 4, 0 — and the 4 hits in deck-03 are the *description* of the reply format's grading scheme, not grades on deck-03's own claims. The same is true of every UI string in `viz/app` and `viz/components` (0 grade markers). By contrast `viz/REGISTRIES.md` *does* grade every row `[FACT]`/`[EST]`/`[UNKNOWN]`. This is a direct violation of the governing rule as scoped to decks and UI. | Add a grade to every deck claim and every UI stat string (e.g. `[SNAPSHOT@7c2b301]` / `[VERIFIED@HEAD]`), matching REGISTRIES.md's convention. |
| CA-20 | Medium | `viz/app/globals.css` L32–44 (light) and L75–86 (dark) vs `viz/lib/brand.ts` `ZONE_HUES`; `viz/README.md` "Brand tokens" line | "Brand tokens: **single source** `lib/brand.ts` (VIZ-017) — ZAR green `#007749`/`#4CC38A`, gold `#FFB612` (highlight only), six zone hues. **No hardcoded hex elsewhere.**" | "No hardcoded hex elsewhere" is **literally true** (0 hex *values* in `viz/app`, `viz/components`, `viz/lib` outside `brand.ts`; the 15 hex strings in `globals.css` are all inside comments). But the zone hues are **duplicated twice** in `app/globals.css` — once as `--zone-*` (6 tokens) and again as `--chart-*` (5 tokens) — as raw HSL triples, and **both copies diverge from `brand.ts`**: light `--zone-execution: 142 72% 37%` vs `execution #16A34A` → `142 76% 36%`; light `--zone-rea: 215 16% 46%` vs `rea #64748B` → `215 16% 47%`; light `--zone-other: 220 9% 64%` vs `other #9CA3AF` → `218 11% 65%`; dark `--zone-docs: 217 91% 68%` vs `#60A5FA` → `213 94% 68%`; dark `--zone-prompts: 43 96% 59%` vs `#FBBF24` → `43 96% 56%`; dark `--zone-stremiium: 255 85% 76%` vs `#A78BFA` → `255 92% 76%`; dark `--zone-other: 217 19% 79%` vs `#D1D5DB` → `216 12% 84%`. `--chart-1..5` mirror `--zone-docs..rea` exactly (so chart-5 = rea) and there is **no 6th chart token** — `other` has none. | Generate `--zone-*` and `--chart-*` from `ZONE_HUES` at build time (or delete the duplicates and keep `zoneHue()` as the sole path), and add a 6th chart token for `other`. |
| CA-21 | Medium | `viz/app/page.tsx` L529 (zone-distribution takeaway, user-visible string) | "…the same **six zone hues** are used across every view." | Not true of the charts on the same page: commits-over-time is painted `--chart-1`, churn `--chart-3` (recharts series tokens), i.e. the zone-hue *values*, not a zone encoding, and the diverging values from CA-20 apply. Only the zone-distribution strip/legend actually uses `zoneHue()` from `brand.ts`. | Reword to "the zone-distribution view uses the six zone hues; chart series use the shared chart tokens" — or make the claim true. |
| CA-22 | Medium | `viz/public/snapshots/tours.json` vs the app; plan §1.3 / §5 | Plan goal 3 is "**guided tours**"; TASK-INDEX VIZ-025 records "`tours.json` shipped" | `tours.json` (3 tours, 9 steps) is generated by `viz/scripts/snapshot.mjs` and committed, but **no code in `viz/app`, `viz/components` or `viz/lib` reads it** (grep for `tours` → 0 hits outside the generator). There is no tour UI, no tour route, and `viz/README.md`'s "Views" table does not list one. `tours.json` even describes itself as "The **five** zones" while the app has six. | Either mount the tours (VIZ-025's stated deliverable) or mark them as not-yet-implemented and drop the assertion from the status board. |
| CA-23 | Medium | `prompts/viz/TASK-INDEX.md` — task board rows + milestone log | VIZ-020/021/024/025/030/031 = `BUILDING`; VIZ-022 = `VALIDATED`; milestone log "11,677 files / 3,226 dirs / **32 commits**" | The app is built and committed (`b474113`, 2026-11-18), i.e. all 19 briefs are at least `VALIDATED`/`SHIPPED`. The logged snapshot numbers are stale (CA-10/CA-12). The board is the program's live status surface; leaving it at "BUILDING" after the build commit contradicts the repo state. | Advance the statuses to `VALIDATED`/`SHIPPED`, re-run the snapshot, and append the arbitration verdicts (see §5). |
| CA-24 | Medium | `deck-02` L129–132 (slide "Target dossier roster — 17 entities") | "The README's broader **30-entity** surface covers supporting research beyond the core roster." | **Verdict is CORRECT but the reasoning is wrong.** On disk there are exactly **30** dossier entity folders (`docs/research/dossiers/dossiers/*/*`), of which only **17** carry an `evidence-ledger.json`. So the README's "30 dossiers" is literally true and the brief's "17 entities" is a *subset with ledgers*, not a competing roster — there is no drift to flag, only a **definition** difference (30 folders vs 17 ledger-backed targets). | Replace the "fact-drift flag" with a "definition difference" note: 30 dossier folders, 17 ledger-backed target entities. Both deck-01 and deck-02 currently overstate this as a conflict. |
| CA-25 | Low | `deck-02` L206 (slide "Engineering anchors & token economics", DATA row) | "DATA: PostgreSQL (ACID core) + Redis + The Graph" | Source (`docs/program/tbs/tbs/PROGRAM_BRIEF.md` L207) reads "DATA: PostgreSQL (ACID core) + Redis (**cache**) + The Graph (**on-chain indexing**)". The deck silently trims two quoted qualifiers while quoting the other seven rows verbatim. | Restore the two qualifiers or mark the block as a paraphrase. |
| CA-26 | Low | Dashboard stat card "Councils", `viz/app/page.tsx` L643–647 | value `16`, hint `"governance: SC and C01–C16"` | The value **16** is correct and meaningful (`council-department-mapping.json` → 16 councils; `graph.json` → 16 `council` nodes of 61 total: 1 SC + 15 CRD + 16 councils + 29 departments). The **hint** is misleading: "SC and C01–C16" enumerates 17 entities while the value is 16. | Change the hint to "C01–C16 (plus SC and 15 coordinators)". |
| CA-27 | Low | `viz/README.md` "Views" table | 6 routes: `/`, `/explorer`, `/commits`, `/globe`, `/learn`, `/councils` | A 7th shipped route is unlisted: **`/explorer/view3d`** (`viz/app/explorer/view3d/page.tsx` + `viz/components/three/file-system-3d.tsx`). `tours` is also absent (CA-22). Plan §5 item 4 ("3D File System") is therefore implemented but undocumented in the app's own README. | Add the `/explorer/view3d` row. |
| CA-28 | Info | `viz/README.md` "Views" table `/learn` row | "reveal.js learning decks (≥4)" | **Correct** — exactly 4 decks exist (`viz/content/decks/deck-01..04.md`), matching `decks.json` `slides: 13/14/12/14`, which matches the actual `---`-separated slide counts (13/14/12/14) in each file. Authored (`content/decks/`) and served (`public/decks/`) copies are byte-identical for all 5 files. | No action (recorded so the count is not re-litigated). |
| CA-29 | Low | Plan §2 "Enhancement modules" + §4 install steps + §5 item 7 vs `viz/package.json` | "react-bits, wigggle-ui widgets, ui-layouts effects, motion (framer), anime.js"; install `treelike-context-menu`; §5.7 "react-bits effects, wigggle-ui widgets (clock/dashboard), thumb-zone Flo nav on mobile" | **None** of `react-bits`, `wigggle-ui`, `ui-layouts`, `motion`, `animejs` is in `viz/package.json`. `treelike-context-menu` is not implemented. A mobile Flo nav *is* implemented (`viz/components/nav/app-shell.tsx` `floPosition`). `viz/README.md`'s "Stack" line correctly lists only what is installed — the plan is the drifted document. | Mark the plan's enhancement-module row as "not adopted (offline-first)" so the plan and the build agree. |
| CA-30 | Low | `deck-02` header L7 vs `deck-04` L203 | deck-02: "Brief status: locked for Code-Mode execution · last updated **2026-11-16**" (from `PROGRAM_BRIEF.md` header); deck-04: "**Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`)" | The brief header also carries "**Engine Runtime:** DeepSeek V4.1 Flash (Low-Mode Multi-Agent Cluster)" (`PROGRAM_BRIEF.md` L7) — a third runtime claim. The two decks describe the same program with different runtime engines and no drift flag, unlike the two drifts the decks *do* flag. | Add a third fact-drift flag for the runtime engine, or scope each deck's runtime claim explicitly (brief-era vs viz-era). |
| CA-31 | Low | `deck-03` L152 — source attribution of the ⌘K bullet | "Source: `viz/README.md` 'Views' table · command palette per `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` §7" | `viz/README.md`'s "Views" table contains **no** command-palette row. The second source is a **design brief (plan)**, not an implementation file — citing a plan as the source of a shipped-app feature violates the "citable source" rule. | Cite the implementation file (`viz/components/nav/app-shell.tsx`) or drop the bullet. |
| CA-32 | Low | `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` §1 vs `viz/content/decks/decks.json` | Prompt: "Deck markdown sources live in `viz/content/decks/` and register via **`decks.manifest.json`**" | The manifest is named **`decks.json`** (`viz/content/decks/decks.json`, mirrored to `viz/public/decks/decks.json`). The build agent deviated from the brief's filename without recording it. | Update the brief's filename reference (or note the deviation in the milestone log). |

---

## 3. Deck fact-check — every number, per deck

Verdicts: **CORRECT** · **INCORRECT** (wrong) · **STALE** (was true, no longer) · **N/V** (not verifiable from repo state).

### deck-01 — Repo Orientation (13 slides)

| # | Slide | Claim | Verdict | Source of truth |
|---|---|---|---|---|
| 1 | What this workspace is | REA = `morluto/rea` at repo root | CORRECT | `rea/` at root |
| 2 | What this workspace is | REA **v6.5.0** | CORRECT | `rea/package.json` → `rea-agents 6.5.0` |
| 3 | What this workspace is | **207** MCP tools | **INCORRECT / unverifiable** | `rea/docs/client-configuration.md` says 172; `docs/.../rea-analysis/tool-catalog.md` enumerates 198; 207 asserted only in program prose |
| 4 | What this workspace is | **153** CLI commands | CORRECT | `rea/src/cliCommandNames.ts` → `CLI_COMMANDS` = 153 |
| 5 | What this workspace is | "present but not installed (`node_modules` absent)" | CORRECT | `rea/node_modules` absent |
| 6 | What this workspace is | Unified 2026-11-18, four `trae/agent-*` branches integrated | CORRECT | `PROGRAM_BRIEF.md` header names `agent-vOC0E6, agent-D7hbv6, agent-9l0OdM, agent-08wapu`; merges `367f0ed`, `16a7780`, `4eb6d72` in git log |
| 7 | What this workspace is | **11,677** files | **STALE** | actual **11,745** (`git ls-files`) |
| 8 | What this workspace is | **3,226** directories | **STALE** | actual **3,253** |
| 9 | The six zones | docs **2,981** | CORRECT (but stale-vs-HEAD unchanged) | `stats.json`; `git ls-files` = 2981 |
| 10 | The six zones | prompts **835** | CORRECT | = 835 |
| 11 | The six zones | execution **1,613** | CORRECT | = 1613 |
| 12 | The six zones | .stremiium **2,150** | CORRECT | = 2150 |
| 13 | The six zones | rea **4,068** | CORRECT | = 4068 |
| 14 | The six zones | other **30** | **STALE** | actual **98** (absorbed `viz/`) |
| 15 | The six zones | Total **11,677** | **STALE** | 11,677 = table sum ✓ internally, actual 11,745 |
| 16 | The six zones | Zone order docs→…→other | CORRECT | `viz/lib/brand.ts` `ZONE_ORDER` |
| 17 | Reading order | 6 steps | CORRECT in count; **2 paths broken** | steps 5 & 6 → see §4 |
| 18 | Canonical zones | `.stremiium/`, `.github/` as canonical | CORRECT | both present |
| 19 | Program & governance zones | `docs/program/` subdirs (tbs, plan, councils, delivery, artifacts, skills, templates, workflows) | CORRECT | all 9 subdirs exist |
| 20 | Research & architecture | **30** dossiers / **6** domain groups | CORRECT | 30 entity folders, 6 groups |
| 21 | Research & architecture | brief §3 = **17**-entity roster | CORRECT | `PROGRAM_BRIEF.md` §3 header "(17 entities)" |
| 22 | Operational surfaces | 16 departments / **37** NeoBank prompts | CORRECT | `find prompts/neobank -name prompt.md` = 37 |
| 23 | Operational surfaces | 16 councils + orchestration / ~165 agents | CORRECT in count (164) | but see CA-17 on folder↔council mismatch |
| 24 | Operational surfaces | **201** replies (164 + 37) | CORRECT | 164 + 37 = 201 |
| 25 | Conventions | conventional commits, no credentials | CORRECT | git log prefixes |
| 26 | REA quickstart | Node 24.18.0, `npm ci --engine-strict=false`, `npm run build:cached` | CORRECT (quoted from README) | root README |
| 27 | REA quickstart | Toolkit path | **INCORRECT (path)** | → `docs/engineering/rea-toolkit/rea-toolkit/rea-business-toolkit/` |
| 28 | TBS snapshot | T1.0 PARTIAL / T1.1 PENDING / T1.2 ACTIVE / T2–T7 ACTIVE / T8.0 COMPLETED | CORRECT (quoted from README) | root README table matches |
| 29 | Where to go next | `/explorer` + **⌘K command palette** | **INCORRECT (feature absent)** | see CA-01 |
| 30 | Where to go next | `/councils`, `/commits` routes exist | CORRECT | `viz/app/councils/page.tsx`, `viz/app/commits/page.tsx` |

### deck-02 — Program Brief (14 slides)

| # | Slide | Claim | Verdict | Source of truth |
|---|---|---|---|---|
| 1 | Header | Stremiium (Pty) Ltd, Bloemfontein | CORRECT | `PROGRAM_BRIEF.md` L4 |
| 2 | Header | Architectural parent SC-MASTER-001 | CORRECT | `PROGRAM_BRIEF.md` L5 |
| 3 | Header | Two-Phase Dual Engine | CORRECT | `PROGRAM_BRIEF.md` L6 |
| 4 | Header | locked for Code-Mode, updated 2026-11-16 | CORRECT | `PROGRAM_BRIEF.md` L8–9 |
| 5 | Why this program exists | 3 capability tiers (incumbents / first-movers / CASPs) + entity lists | CORRECT | `PROGRAM_BRIEF.md` §1 |
| 6 | Why this program exists | `$STM` ERC-20 on Polygon PoS / ZK-EVM | CORRECT | `PROGRAM_BRIEF.md` §1 |
| 7 | The 16 councils | **16** councils in 3 tiers (C01–C10 / C11–C13 / C14–C16) | CORRECT | `PROGRAM_BRIEF.md` §2 table; mapping has 16 |
| 8 | Tier 1 C01–C05 | 5 captain IDs + mandates | CORRECT | verbatim vs `PROGRAM_BRIEF.md` §2 |
| 9 | Tier 1 C06–C10 | 5 captain IDs + mandates | CORRECT | verbatim |
| 10 | Tier 2/3 C11–C16 | 6 captain IDs + mandates | CORRECT | verbatim |
| 11 | Target dossier roster | **17** entities across 6 domain groups | CORRECT | `PROGRAM_BRIEF.md` §3 table (17 rows) |
| 12 | Target dossier roster | Lead councils (Std Bank → C16/C10; Luno → C13/C01) | CORRECT | §3 rows 1 and 8 |
| 13 | Target dossier roster | "30-entity README surface" flagged as drift | **INCORRECT framing** (CA-24) | 30 folders exist; 17 have ledgers — a definition difference, not a contradiction |
| 14 | Dossier template | 8 sections + `evidence-ledger.json` ≥ 20 entries | CORRECT | §4 template + §4.0 table |
| 15 | Depth bar | research/architecture/UnConsolidated **400–900 lines / 12–30 KB**; task files **150–350 lines / 5–12 KB** | CORRECT | §4.0 table |
| 16 | Four evidentiary outputs | Seen / Synthesised / Limitations / Unknowns | CORRECT | §5 |
| 17 | Honesty rule | REA not installed, no APK/ASAR supplied | CORRECT (verbatim) | §5 blockquote |
| 18 | Ledger schema | id, claim, evidence_class, source_type, source_ref, confidence, verified_at | CORRECT | §6 JSON |
| 19 | Strategic filter | ADOPT / ADAPT / AVOID / BEAT | CORRECT | §7 |
| 20 | Engineering anchors | Mambu / BankservAfrica / Polygon / Kafka / PostgreSQL+Redis+The Graph / GraphQL+Kong / React Native+Next.js 15 | CORRECT except minor DATA-row trim (CA-25) | §8 |
| 21 | Token economics | **1,000,000,000** fixed supply | CORRECT | `PROGRAM_BRIEF.md` L213 |
| 22 | Token economics | **20%** of net quarterly fees → buy-back & burn until **50%** retired | CORRECT | L213–214 |
| 23 | Token economics | **25%** fee discount in `$STM` | CORRECT | L214 |
| 24 | Closing | Governing rule quote | CORRECT | §1 verbatim |

### deck-03 — Prompts & Replies (12 slides)

| # | Slide | Claim | Verdict | Source of truth |
|---|---|---|---|---|
| 1 | Header | **201** Master Prompts answered | CORRECT | `prompts/replies/README.md` L23 |
| 2 | Header | Generated 2026-11-18, model lock `auto` | CORRECT | `prompts/replies/README.md` L7 |
| 3 | The prompt system | Stremiium **164** | CORRECT | `find prompts/stremiium -name prompt.md` = 164 |
| 4 | The prompt system | NeoBank **37** | CORRECT | = 37 |
| 5 | The prompt system | Total **201** | CORRECT | 164 + 37 |
| 6 | The prompt system | CARF question answered with the real CARF schema (user id, jurisdiction, R-CASP, transaction type, asset type, dates, values, counterparty) | CORRECT | `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` L484–491 (schema table) |
| 7 | prompts/ zone structure | 16 departments / 37 prompts; 16 councils + orchestration / ~165 agents | CORRECT in count; incomplete (CA-16) | see deck-01 #22–23 |
| 8 | The replies system | `reply.md` **201** | CORRECT | = 201 |
| 9 | The replies system | `research-evidence.md` **201** | CORRECT | = 201 |
| 10 | The replies system | `diagrams-and-charts.md` **201** | CORRECT | = 201 |
| 11 | The replies system | Total files **603** + index/research/tools | CORRECT | 603 + 5 md (README, MASTER-INDEX, 3× research) = 608 total |
| 12 | The 18-section format | 18 named sections + header block | CORRECT | `prompts/replies/README.md` §"The 18-Section UnConsolidated Reply Format" |
| 13 | Evidence grades | `[FACT]`/`[EST]`/`[UNKNOWN]`/`[INFER]` + `[S#]` map | CORRECT | same README + `research/SOURCE-CITATION-MAP.md` |
| 14 | Research apparatus | 5 named files (KNOWLEDGE-BASE, SOURCE-CITATION-MAP, REA-RESEARCH-LOG, generate-replies.mjs, verify-replies.mjs) | CORRECT | all 5 exist |
| 15 | Research apparatus | "201 prompts verified, **0 errors**" | CORRECT (quoted) | `prompts/replies/README.md` L115 |
| 16 | Execution results | ledger = 37 artifacts / 37 subagents / C01–C16 / 2026-11-17 / "Project Umoya" | CORRECT | `execution/EXECUTION_LEDGER.md` header + Summary table |
| 17 | The viz program | **19** prompt files = 1 orchestration + 18 briefs (C08 ×10, C11 ×6, C03 ×2) | CORRECT | `find prompts/viz -name prompt.md` = 19; breakdown 1/10/6/2 ✓ |
| 18 | The viz program | plan headline "18 task prompts / C08 (9)" vs 10-row C08 table | CORRECT | plan §3 L47 heading "C08 Design-Creative (9)" + L77 "Total: 18 task prompts" vs VIZ-010–019 rows |
| 19 | How to explore | `/explorer`, `/commits`, `/councils`, `/globe`, `/learn` routes | CORRECT | all five routes exist |
| 20 | How to explore | **⌘K command palette, fuzzy search** | **INCORRECT (feature absent)** | CA-01 |
| 21 | Trace one prompt | `prompts/neobank/c01-legal-compliance/carf/prompt.md` | **INCORRECT (path)** | → `prompts/neobank/legal/carf/prompt.md` |
| 22 | Trace one prompt | `prompts/replies/neobank/c01-legal-compliance/carf/reply.md` (+2 companions) | CORRECT | all 3 files exist |
| 23 | Trace one prompt | `execution/results/c01-legal-compliance/carf-execution-result.md` | **INCORRECT (path)** | → `execution/results/c01-legal-compliance/carf/execution-result.md` |
| 24 | Trace one prompt | CARF schema content of the answer | CORRECT | reply.md L484–491 |

### deck-04 — Councils & Governance (14 slides)

| # | Slide | Claim | Verdict | Source of truth |
|---|---|---|---|---|
| 1 | Header | model `two-plane-hierarchy`, mapping **v1.1.0** (**2026-08-22**) | CORRECT | `council-department-mapping.json` `version: "1.1.0"`, `generated: "2026-08-22"` |
| 2 | Header | owner Sparkling Curious | CORRECT | `owner: "SC-MASTER-001"` |
| 3 | Two-plane hierarchy | META / CRD / C01–C16 / cNN-* / AGT-* / SUB-* | CORRECT | `planes` block + `.stremiium/agents/*` tree |
| 4 | Two-plane hierarchy | `EXEC-council-ceo.agent.md` (CEO proxy) | CORRECT | `.stremiium/agents/executive/EXEC-council-ceo.agent.md` |
| 5 | Sparkling Curious | STEP 1 Intake → STEP 2 Council assign → STEP 5 Synthesis → STEP 6 Audit; arbitration < 24h; escalation Captain → SC → Mychael → Board | CORRECT | `workflow-routing.md` §3/§4 |
| 6 | R1 | "task → owning council captain by domain matrix **before any department contact**" | CORRECT | `routing_rules[0]` verbatim |
| 7 | R2 | "captain decomposes to departments **listed above only**" | CORRECT | `routing_rules[1]` verbatim |
| 8 | R2 | C15 → `c15-product-management, c15-products-blt, c15-products-fan-tokens` | CORRECT | mapping C15.departments |
| 9 | R3 | "cross-council tasks convene captains; **SC arbitrates conflicts <24h**" | CORRECT | `routing_rules[2]` verbatim |
| 10 | R4 | "coordinators (CRD-*) may intercept any step for **git-safety/security/cost gates**" | CORRECT | `routing_rules[3]` verbatim |
| 11 | R4 | 4 standing gates | CORRECT | named consistently in mapping + workflow-routing |
| 12 | R5 | "meta-councils advise SC **on request; never command departments directly**" | CORRECT | `routing_rules[4]` verbatim |
| 13 | R6 | "subagents (SUB-/The-*) instantiate **only under a registered AGT parent**" | CORRECT | `routing_rules[5]` verbatim |
| 14 | Captain map | 16 rows: captain IDs + departments (29 total, C04 abbreviations disclosed) | CORRECT | mapping `councils` — all 16 captain files exist, 29 distinct departments, table sums to 29 |
| 15 | Coordinators | **15** CRD coordinators, duties listed | CORRECT | mapping `coordinators` = exactly 15 keys, table lists 15 |
| 16 | Escalation + SLAs | Critical **1h** · High **4h** · Medium **24h** · Low **72h**; Captain → SC → Mychael → Board | CORRECT | `workflow-routing.md` §4 L60–61 |
| 17 | Private-funded boundary | C01 + C16 + C10 + Mychael approval; artifacts state private-funded-only | CORRECT | `.kilo/plans/1794948779713-neobank-code-mode-execution.md` L247 |
| 18 | Model lock | `auto` (Kilo Code Auto Free, `kilo-auto/free`) | CORRECT | `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` header |
| 19 | Vocabulary law | "Council" canonical, "Squad" retired, `aliases: [squad]` tolerated one cycle | CORRECT | mapping `vocabulary` block |
| 20 | Closing | `/councils` = SC → CRD → C01–C16 → departments | CORRECT | `graph.json`: 1 sc + 15 crd + 16 council + 29 department = 61 nodes |

---

## 4. Broken path claims

### 4a. In the learning decks (5 broken)

| Deck | Slide | Cited path | Resolves to |
|---|---|---|---|
| deck-01 | Reading order, step 5 | `docs/program/plan/PLAN.md` | `docs/program/plan/plan/PLAN.md` |
| deck-01 | Reading order, step 6 | `docs/governance/unconsolidated/README.md` | `docs/governance/unconsolidated/UnConsolidated/README.md` |
| deck-01 | REA quickstart | `docs/engineering/rea-toolkit/rea-business-toolkit/` | `docs/engineering/rea-toolkit/rea-toolkit/rea-business-toolkit/` |
| deck-03 | Trace one prompt, step 1 | `prompts/neobank/c01-legal-compliance/carf/prompt.md` | `prompts/neobank/legal/carf/prompt.md` |
| deck-03 | Trace one prompt, step 3 | `execution/results/c01-legal-compliance/carf-execution-result.md` | `execution/results/c01-legal-compliance/carf/execution-result.md` |

Also imprecise (path resolves but points at the wrong level): deck-01 reading-order step 3 → `docs/research/dossiers/` (entity folders are at `docs/research/dossiers/dossiers/<group>/<entity>/`).

### 4b. In the root README (6 broken)

| Cited | Resolves to |
|---|---|
| `docs/program/tbs/PROGRAM_BRIEF.md` | `docs/program/tbs/tbs/PROGRAM_BRIEF.md` |
| `docs/program/tbs/TASK_INDEX.md` | `docs/program/tbs/tbs/TASK_INDEX.md` |
| `docs/program/plan/PLAN.md` | `docs/program/plan/plan/PLAN.md` |
| `docs/governance/unconsolidated/README.md` | `docs/governance/unconsolidated/UnConsolidated/README.md` |
| `docs/program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md` | `docs/program/tbs/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md` |
| `docs/engineering/rea-toolkit/rea-business-toolkit/` | `docs/engineering/rea-toolkit/rea-toolkit/rea-business-toolkit/` |

> The VIZ-030 brief flagged only the first of these six. **Five additional broken links exist in the root README**, and the root README still does not mention the `viz/` zone at all (CA-15).
> **Not broken** (correctly flagged inside deck-01 as a quoted error): the deck's own mention of `docs/program/tbs/PROGRAM_BRIEF.md` appears inside the "Fact-drift flag" callout and is correct *as a quotation of the README's error*.

### 4c. Correct — verified to resolve

`docs/program/tbs/tbs/PROGRAM_BRIEF.md` · `docs/program/tbs/tbs/TASK_INDEX.md` · `docs/research/dossiers/` · `docs/architecture/target-system/00-SYSTEM-OVERVIEW.md` · `docs/architecture/target-system/core-banking/stremiium-rea-banking-plugin.ts` · `docs/governance/unconsolidated/UnConsolidated/README.md` · `docs/program/plan/plan/PLAN.md` · `prompts/replies/README.md` · `prompts/replies/MASTER-INDEX.md` · `prompts/replies/research/{KNOWLEDGE-BASE,SOURCE-CITATION-MAP,REA-RESEARCH-LOG}.md` · `prompts/replies/tools/{generate-replies,verify-replies}.mjs` · `execution/EXECUTION_LEDGER.md` · `.stremiium/registry/master-registry.json` · `.stremiium/governance/workflow-routing.md` · `.stremiium/config/council-department-mapping.json` · `.stremiium/agents/{council-agents,department-agents,coordinators,meta-councils}/` · `.stremiium/agents/executive/EXEC-council-ceo.agent.md` · `prompts/viz/c03-admin-knowledge/documentation-specialist/prompt.md` · `prompts/viz/c08-design-creative/ui-ux-designer/prompt.md` · `viz/lib/brand.ts` · `viz/README.md` · `viz/REGISTRIES.md` · `viz/lib/types.ts` · `.kilo/plans/1794948779713-repo-viz-learning-environment.md` · `.kilo/plans/1794948779713-neobank-code-mode-execution.md`.

---

## 5. Still-open SC arbitrations (`prompts/viz/TASK-INDEX.md` watchlist)

| # | Surface | Verdict in the **implementation** | Evidence |
|---|---|---|---|
| 1 | Data-contract drift (VIZ-021) | **RESOLVED** | Single contract source honoured: `viz/lib/types.ts` (header: "the single type source for the viz app… Do not redefine these shapes elsewhere"). All six API routes import from it — `app/api/_lib.ts:25`, `app/api/diff/[sha]/route.ts:16`, `app/api/explain/route.ts:6`, `app/api/file/route.ts:6`, `app/api/stats/route.ts:4`, `app/api/tree/route.ts:23`. No route redefines a contract type. |
| 2 | `/api/explain` ownership (VIZ-025) | **RESOLVED** | `app/api/explain/route.ts` imports `ExplainSummary, NodeType` from `@/lib/types` and defines no local types. (Residual, not an arbitration: it hardcodes a 16-entry `NEOBANK_COUNCIL` map that duplicates the council roster — see CA-17 for the resulting mis-attribution.) |
| 3 | Tours vs decks boundary (VIZ-025 / VIZ-030) | **STILL OPEN** | The split is clean on the decks side — `app/learn/page.tsx` serves decks only, manifest `decks.json`. But the tours side has **no UI at all**: `public/snapshots/tours.json` is generated and committed, and **no file under `viz/app`, `viz/components` or `viz/lib` references `tours`** (grep → 0 hits outside `scripts/snapshot.mjs`). Plan §1.3 and §5 promise guided tours; `tours.json` itself describes "The **five** zones" against the app's six. |
| 4 | Section-name variants (VIZ-013) | RESOLVED (no code surface) | Presentation-layer naming only; no structural effect in the build. |
| 5 | Roster count drift (VIZ-001) | RESOLVED | 19 `prompt.md` files physically present; `TASK-INDEX.md` and both decks flag the plan's "18 / C08 (9)" headline. `viz/scripts/verify-viz.mjs` `checkPromptsRegister` asserts the register count. |
| 6 | **README fact drift (VIZ-030)** | **STILL OPEN** | The root README's reading-order links are **still broken** — and worse than flagged: 6 broken links, not 1 (`docs/program/tbs/PROGRAM_BRIEF.md`, `docs/program/tbs/TASK_INDEX.md`, `docs/program/plan/PLAN.md`, `docs/governance/unconsolidated/README.md`, `docs/program/tbs/T1-infrastructure-setup/…/rea-doctor-contract.md`, `docs/engineering/rea-toolkit/rea-business-toolkit/`). The root README also **omits the `viz/` zone entirely**. Decks cite the physical paths (correct), but the source document was never fixed. No link-existence check exists in `verify-viz.mjs` to prevent regression. |
| 7 | **Brand token authority (VIZ-017)** | **RESOLVED in code, partially undermined** | No hex literal is used as a *value* outside `viz/lib/brand.ts` (0 matches across `app/`, `components/`, `lib/`; the 15 hex strings in `globals.css` are all in comments) — the stated rule holds literally. But `app/globals.css` **duplicates** the zone hues twice, as `--zone-*` (6 tokens) and `--chart-*` (5 tokens), and both copies **diverge in value** from `ZONE_HUES` (CA-20: light execution/rea/other, dark docs/prompts/stremiium/other all differ). The single-source claim in `viz/README.md` is therefore only half true, and the `--zone-*` tokens carry no `other` → `--chart-*` counterpart. |
| 8 | **Chart-token assignment (VIZ-012 / VIZ-015 / VIZ-018)** | **PARTIALLY RESOLVED — still drifting** | The zone-distribution chart does honour the brand source: `app/page.tsx` uses `zoneHue(point.zone, theme)` from `lib/brand.ts` for the strip and legend bars, in `ZONE_ORDER`. But the `chart-N` tokens remain a second, divergent hue set (CA-20) used for the commits-over-time series (`--chart-1`) and churn bars (`--chart-3`), so the "chart tokens = zone hues" resolution is true in *order* for 5 of 6 zones and false in *value* for 5 of 5. |

**Net: 4 of 8 items (3, 6, 7-partially, 8-partially) are still open in the code.** No SC arbitration verdicts have been appended to the watchlist — the board still ends at the instruction line "SC arbitration verdicts are appended here with date + gate as conflicts surface".

---

## 6. Plan vs implementation drift (plan §4 file tree, §5 views)

| Plan element | Implementation | Divergence |
|---|---|---|
| §4 `components/ (ui/ = shadcn; three/; charts/; timeline/; explorer/; viz/)` | `components/{ui,three,timeline,explorer,graph,decks,nav}/` + `components/theme-provider.tsx` | **No `charts/` and no `viz/` directory.** Charts are inline in `app/page.tsx`; `graph/` and `decks/` were added but never planned. |
| §4 `app/api/ (tree, commits, diff/[sha], stats)` | + `file`, `graph`, `explain`, `_lib` | 3 unplanned routes (all justified by briefs). |
| §4 `lib/ (git, repo-scan, types, utils)` | + `brand.ts` | 1 unplanned file (VIZ-017 token source) — correct addition. |
| §4 `scripts/ (snapshot.mjs)` | + `verify-viz.mjs`, `README.md` | 2 unplanned files (VIZ-024). |
| §4 `public/snapshots/ (tree, commits, stats)` | + `graph.json`, `tours.json` | 2 unplanned files (VIZ-031, VIZ-025). |
| §4 install step 3 `… sheet command tooltip dialog chart treelike-context-menu` | `components/ui/` has badge, button, card, scroll-area, separator, skeleton, table, tabs, tooltip | **4 of the listed components absent** (`sheet`, `command`, `dialog`, `chart`) → CA-03, and the `command` absence is the root cause of CA-01. |
| §4 install step 5 `shadcn@latest registry add @…` | — | **Non-existent CLI command** → CA-02. |
| §5 view 2 Explorer: "search via shadcn `command`" | Zone filter only; no text search, no command palette | → CA-01. |
| §5 view 5 Learn | 4 decks ✓ | matches. |
| §5 view 4 3D File System | `app/explorer/view3d/` ✓ | implemented but unlisted in `viz/README.md` → CA-27. |
| §1 goal 3 "guided tours" | `tours.json` only, no UI | → CA-22 / arbitration 3. |
| §2 enhancement modules (react-bits, wigggle-ui, ui-layouts, motion, animejs) | none in `package.json` | → CA-29. |
| §5 view 7 "Flo nav on mobile" | implemented (`components/nav/app-shell.tsx`) ✓ | matches. |
| §3 headline "18 task prompts" | 19 on disk | already flagged by the decks ✓ (consistent). |

---

## 7. Root README documentation gap

`/workspace/app/README.md` **does not document the `viz/` zone** (CA-15). The zones table stops at "REA engine". The repo's own restructure history is: `18d156b docs: consolidate workspace into docs/, prompts/, execution/` (2026-11-18) → `b474113 feat(viz): build interactive repo visualization learning environment` (2026-11-18). The root README was updated for neither. Missing from the root README:

- a `viz/` zones-table row (Interactive visualization & learning environment — `/`, `/explorer`, `/explorer/view3d`, `/commits`, `/globe`, `/learn`, `/councils`; 4 reveal.js decks; source of `viz/public/snapshots/*.json`),
- a reading-order pointer to `viz/README.md` and `prompts/viz/TASK-INDEX.md`,
- a pointer to the 19 `prompts/viz/` briefs (the repo's own "Prompts" zone row still says only "All agent prompts split into per-prompt folders" with the two legacy patterns),
- any mention that the repo is now **33 commits** with a `viz/` zone and a `prompts/viz/` program.

---

## 8. Documentation-consistency check (viz/README.md, viz/REGISTRIES.md, prompts/viz/README.md, prompts/viz/TASK-INDEX.md)

| Doc | Claim | Verdict |
|---|---|---|
| `viz/README.md` | script names `dev`, `snapshot`, `verify`, `build` | **CORRECT** — all present in `viz/package.json` `scripts` (plus `start`, `lint`). |
| `viz/README.md` | `pnpm snapshot` → `scripts/snapshot.mjs`; `node scripts/snapshot.mjs --collapse-rea` | **CORRECT** — the flag is implemented (`snapshot.mjs` L17, L132). |
| `viz/README.md` | Views table (6 routes) | **Correct but incomplete** — `/explorer/view3d` unlisted (CA-27). |
| `viz/README.md` | "full 29-registry manifest (VIZ-012)" | **CORRECT** — REGISTRIES.md lists exactly 29 rows. |
| `viz/README.md` | "Brand tokens: single source `lib/brand.ts` … No hardcoded hex elsewhere" | **Half true** — CA-20 (duplicated, divergent HSL in `globals.css`). |
| `viz/README.md` | "The app serves from committed `public/snapshots/*.json` … falls back to live git" | **CORRECT** — `scripts/snapshot.mjs` + `app/api/_lib.ts` implement it. |
| `viz/REGISTRIES.md` | "29 registries" | **CORRECT** — 29 rows. |
| `viz/REGISTRIES.md` | `pnpm dlx shadcn@latest registry add @<name>` | **INVALID COMMAND** — CA-02. |
| `viz/REGISTRIES.md` | "These 11 core components are hand-implemented in `components/ui/`" | **INCORRECT** — CA-03 (8 of 12 exist). |
| `viz/REGISTRIES.md` | "These 11 core components … with the same API surface" | **Not verifiable** — no shadcn upstream to diff against offline; claim is unsubstantiated. |
| `viz/REGISTRIES.md` | per-row grades `[FACT]`/`[EST]`/`[UNKNOWN]` + `PENDING` status | **CORRECT and exemplary** — the only doc in the repo that follows the evidence-grade rule. |
| `prompts/viz/README.md` | 19 prompt files = 1 + 18 (C08 ×10, C11 ×6, C03 ×2) | **CORRECT** — 19 `prompt.md` on disk with exactly that breakdown; all 19 folder paths listed resolve. |
| `prompts/viz/README.md` | "the plan §3 headline ('Total: 18 task prompts / C08 (9)') trails its own 10-row C08 table" | **CORRECT** — plan L47 vs L50–59 and L77. |
| `prompts/viz/README.md` | "Exploring a ~3,900-file repo" (VIZ-016 scope in TASK-INDEX) | **STALE** — the repo is 11,745 files. Also appears in `TASK-INDEX.md` VIZ-016 row. |
| `prompts/viz/TASK-INDEX.md` | "11,677 files, 3,226 dirs, 32 commits, graph 61 nodes" | **STALE** (11,745 / 3,253 / 33 / 61 ✓) → CA-10, CA-23. |
| `prompts/viz/TASK-INDEX.md` | "REGISTRIES.md (29 registries)" | **CORRECT**. |
| `prompts/viz/TASK-INDEX.md` | `graph.json` "61 nodes" | **CORRECT** — 1 sc + 15 crd + 16 council + 29 department = 61. |
| `prompts/viz/TASK-INDEX.md` | task statuses (6 × BUILDING, 1 × VALIDATED) | **STALE** — app built and committed at `b474113` → CA-23. |
| `prompts/viz/TASK-INDEX.md` | arbitration watchlist, 8 items, "verdicts appended here" | **STALE** — no verdicts appended → §5. |

---

## 9. Git-metadata claims

| Claim | Verdict |
|---|---|
| "Unified 2026-11-18 — all four `trae/agent-*` branches integrated into `main`" (deck-01) | **CORRECT** — `PROGRAM_BRIEF.md` header names all four (`agent-vOC0E6`, `agent-D7hbv6`, `agent-9l0OdM`, `agent-08wapu`); merge commits `367f0ed`, `16a7780`, `4eb6d72` present in `git log`. |
| "Workspace status: unified, zone-organised (2026-11-18)" | **CORRECT** — consolidation commit `18d156b` dated 2026-11-18. |
| "no folders or files deleted in consolidation or reorganisation" | **N/V** — not reconstructible from git history alone; asserted by the README/brief, not independently verifiable. Should carry a grade. |
| Commit count **32** (`stats.json`, dashboard card, TASK-INDEX log) | **STALE** — HEAD `b474113` ⇒ **33** commits (`git rev-list --count HEAD`); 32 was the count at the snapshot SHA `7c2b301`. |
| Snapshot `meta.headSha = 7c2b301…` | **CORRECT** as a record, but it is **one commit behind HEAD** — the snapshot predates the app it ships inside. |
| `churnTop[0] = README.md +193/−119 ×8` | **CORRECT** — matches `stats.json` and `git log --numstat` for `README.md`. |
| Deck-02 "Brief status … last updated 2026-11-16" | **CORRECT** — `PROGRAM_BRIEF.md` L9. |
| Deck-02 "TBS snapshot (2026-11-16)" | **CORRECT** — quoted from the root README, which is itself dated 2026-11-16. |

---

## 10. What is right (so the fix list stays small)

Everything the decks say about the **program's substance** verifies exactly against the repo: the 16 councils and their tiers/captains/mandates, the 15 CRD coordinators, the 6 routing rules R1–R6 (verbatim), the 29 registered departments, the two-plane hierarchy, the escalation chain and the 1h/4h/24h/72h SLAs, the private-funded boundary, the model lock, the vocabulary law, the 4-bucket evidentiary model and the 6-field honesty rule, the ledger schema, the ADOPT/ADAPT/AVOID/BEAT filter, the dossier template and depth bar, the $STM tokenomics (1,000,000,000 / 20% / 50% / 25%), REA v6.5.0 and 153 CLI commands, the 201 = 164 + 37 prompt arithmetic, the 603 reply files, the 19 viz briefs, the 18-section reply format, the four evidence grades, the "201 prompts verified, 0 errors" validation line, the execution ledger's 37/37/C01–C16/2026-11-17/"Project Umoya", the 61-node councils graph, and all four slide counts (13 / 14 / 12 / 14, matching both `decks.json` and the `---` separators in each file). The deck-01/deck-02 handling of the 17-vs-30 dossier question is *directionally* right (both numbers are real and both are quoted with their source) — it only mis-describes the relationship between them (CA-24).

---

## 11. Priority fix order

1. **CA-01** — remove or implement the ⌘K command palette claim (2 decks + the `viz/README.md` omission it implies).
2. **CA-02 / CA-03** — fix the `shadcn registry add` command form and the "11 components" claim in `REGISTRIES.md` (and plan §4 step 5).
3. **CA-10 → CA-13** — regenerate `viz/public/snapshots/*.json` at HEAD and refresh the deck totals; this single regeneration fixes the dashboard cards, the explorer tree and the zone table's `other` row.
4. **CA-04 → CA-09** — fix the 11 broken path citations (5 in decks, 6 in the root README); add a path-existence check to `verify-viz.mjs`.
5. **CA-15** — add the `viz/` zone to the root README.
6. **CA-14** — regrade the "207 MCP tools" figure.
7. **CA-19** — add evidence grades to deck claims and UI stat strings.
8. **CA-20 / CA-21 / CA-27** — converge the chart tokens on `lib/brand.ts`, fix the zone-hue claim, list `/explorer/view3d`.
9. **CA-22 / CA-23** — mount the tours or drop them; advance the TASK-INDEX statuses and append the SC arbitration verdicts.
10. **CA-17 / CA-18 / CA-24 / CA-25 / CA-30 / CA-32** — documentation precision items.
