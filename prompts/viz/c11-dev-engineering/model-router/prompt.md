# Master Prompt — C11-MODEL-ROUTER (Model-Router) — VIZ-025

**Act as the assigned Stremiium agent or subagent.**

**Task:** VIZ-025 — Optional AI-assisted learning layer for the repo visualization & learning environment (`viz/`): file Q&A stub ("explain this file") and guided tour generator, routed per model-lock policy.
**Plan reference:** `/workspace/app/.kilo/plans/1794948779713-repo-viz-learning-environment.md` §3 (C11 scope: "AI-assisted learning layer (optional): file Q&A stub, routed per model-lock policy"), §5 (Core Views), §6 (Data Layer & Contracts).
**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the repo workspace structure (`viz/`, `prompts/viz/`, `docs/`).  
**Output:** produce one separate unconsolidated artifact at `prompts/viz/c11-dev-engineering/model-router/prompt.md`.  
**Depth:** expand model-routing, API-contract, privacy, security, UX, and a11y depth regardless of model specificity.  
**Agent ID:** C11-MODEL-ROUTER  
**Council:** C11 C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C12 Cybersecurity-Intel  

---

## 1. Summary

- This master prompt instructs C11-MODEL-ROUTER to own the optional AI-assisted learning layer for the `viz/` Next.js 15 repo-visualization app: a "explain this file" Q&A stub exposed as `POST /api/explain` and a deterministic guided tour generator, both executed and (if ever extended) routed per the program model-lock policy (`auto`, no substitution).
- Objective: a feature-flagged layer that helps a user learn the repository through metadata-derived explanations and step-based guided tours, with **no LLM call required in the MVP** — every summary is deterministic extraction from local file metadata (tree, git log, numstat, outline/symbol counts) — and a pluggable interface behind which a model-routed explainer may later land under the same contract.
- Deliverables: `viz/app/api/explain/route.ts`, `viz/lib/explain.ts` (deterministic extraction pipeline), `viz/lib/tours.ts` (tour generator), `ExplainSummary`/`Tour`/`TourStep` contracts (added to the VIZ-022 types surface), `viz/components/explorer/explain-panel.tsx`, `viz/components/learn/tour-player.tsx`, committed `public/snapshots/tours.json`, and a `viz/README` section documenting the model-lock routing policy plus the gated future-LLM integration requirements.
- Research data to ingest: docs/program, docs/engineering, plan §3/§5/§6, `.stremiium/config/council-department-mapping.json` (council attribution), and `.stremiium/skills/` (api-design-principles, backend-patterns, davila7-nextjs-best-practices, prompt-engineering-patterns, davila7-context-window-management, privacy-guardian, accessibility-compliance).
- Prompts to improve: file explain endpoint contract, deterministic extraction rules, guided tour generation, model-lock routing for any future LLM hook, privacy guardrails.
- Output artifact: `prompts/viz/c11-dev-engineering/model-router/prompt.md` (this file, unconsolidated).

---

## 2. Assumptions

- The learning layer is **optional and feature-flagged**; core views (dashboard, explorer, commits, learn decks, councils, globe) must function fully with the layer disabled or absent.
- The MVP makes **zero LLM calls and zero external network calls**: explain summaries derive deterministically from metadata already exposed by the VIZ-021 API routes and VIZ-022 data contracts (`FileNode`, `CommitRecord`, `RepoStats`, snapshots).
- Every agent executing this task — and any future LLM hook behind the same contract — runs under model lock `auto` (Kilo Code Auto Free, `kilo-auto/free`); no model substitution is permitted, ever.
- `viz/` is scaffolded per plan §4; API route handlers exist in server mode, and the layer degrades to snapshot JSON in git-absent or static-export modes.
- Repo zones (docs/prompts/execution/.stremiium/rea/viz/root) are classified by path prefix per plan §5 item 4; council attribution for `prompts/stremiium/**` paths comes from `.stremiium/config/council-department-mapping.json`.
- Git history is present locally; `lib/git.ts` wrappers (VIZ-021) supply last-commit and churn metadata per path.

---

## 3. Questions

- Which metadata fields produce the most useful deterministic "explain this file" summary per file class (markdown outline vs code symbols vs data/config)?
- How are related files derived without content analysis — same-folder siblings, co-changed files from git history, or knowledge-graph edges (VIZ-031) — and which cap applies?
- Where does the tour player mount on `/learn` (VIZ-030 surface) without colliding with reveal.js deck navigation and keyboard modes?
- What extraction caps (headings, symbols, related files, content-parse ceiling) keep every response bounded, cacheable, and deterministic?
- Under which exact conditions may a future model-routed explainer be enabled, and which gates (C12 security, C10 cost, POPIA lawful basis, user opt-in) must sign off first?
- How does the layer behave in snapshot-only mode (no git binary) — which `ExplainSummary` fields are reduced or omitted?

---

## 4. Concerns

- "AI-assisted" scope creep: any real LLM call in the MVP would violate the offline-first constraint and the privacy posture (repo content must not leave the machine); the stub must stay deterministic.
- Substitution risk: swapping to another model when the locked model is unavailable would break the model-lock policy; the layer must degrade to the deterministic path, never to a substitute model.
- Route-surface overlap with VIZ-021 (API conventions) and contract overlap with VIZ-022 (single `lib/types.ts`) — drift or duplication if uncoordinated.
- Tour content duplicating VIZ-030 reveal.js decks (slide content) instead of complementing them (guided navigation that deep-links into existing views).
- `{path}` input enabling path traversal or arbitrary filesystem reads outside the scanned tree.
- Deterministic extraction touching excluded or sensitive paths (`rea/node_modules`, `.git`, `.env`, secrets) — these must return 404, never a summary.
- Git metadata (author names/emails) surfacing in summaries is PII-adjacent; display must match what the commits view already shows and must never be transmitted anywhere.

---

## 5. Suggested Improvements

- Ship the MVP with a deterministic `ExplainSummary` that carries `confidence: 'deterministic'` and an explicit provenance note, so the UI labels output as metadata-derived rather than AI-generated (honest labeling).
- Define a pluggable `ExplainerProvider` interface (implementation `deterministic` now; `model-routed` reserved for future) behind the same `POST /api/explain` contract so the API shape never changes when an LLM hook lands.
- Hard extraction caps: ≤10 headings, ≤20 top-level symbols, ≤12 related files; content parsing only below a 1 MB ceiling — larger files get metadata-only summaries.
- Launch with three deterministic tours — repository orientation, prompt→reply system, git-history highlights — whose steps carry `route` + optional `filePath` so every step deep-links into existing views (explorer, commits, councils, learn).
- Expose the layer through the command palette (VIZ-013 surface): "Explain this file" and "Start guided tour" commands.
- Document future-LLM requirements in `viz/README`: model-lock routing config (`{routeId, route, model, costGuardrail, failover, usage, owner, date}`, model fixed to `kilo-auto/free`), explicit user opt-in, metadata-only payload (never raw file contents), and C12 + C10 gate sign-off — documentation only, not implemented in MVP.

---

## 6. Missing Dependencies

- Sibling tasks: VIZ-020 (explorer file viewer mount point for the explain panel), VIZ-021 (API route conventions; git wrappers), VIZ-022 (`lib/types.ts` contracts + snapshot script for `tours.json`), VIZ-030 (`/learn` surface for the tour player), VIZ-031 (graph edges as a related-files source), VIZ-024 (QA data-shape and route tests).
- Data inputs: `.stremiium/config/council-department-mapping.json`, `public/snapshots/{tree,commits,stats}.json`, `lib/git.ts` last-commit and numstat lookups.
- UI: shadcn/ui (sheet, card, badge, button, separator), lucide-react icons for the explain and tour actions.
- Design bindings (cite, do not re-derive): zone display hues and microcopy verb lexicon per the VIZ-017 brand decisions (single token source `viz/lib/brand.ts`); explain-panel and tour-player consume tokens, never hardcoded hex. The explain panel's action label stays "Explain this file" per task scope; chrome microcopy follows the VIZ-017 verb lexicon.
- Future-LLM only (not MVP): LLM gateway config with cost guardrails, C10 budget line, C12 threat-model review, user opt-in mechanism.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §3 (VIZ-025 scope), §5 (core views), §6 (data layer) and the `.stremiium/skills/` references listed in §1.
- 2. Read the C11/C03 sibling briefs (VIZ-020, VIZ-021, VIZ-022, VIZ-030, VIZ-031) to align mount points, route conventions, type ownership, and learn-surface boundaries.
- 3. Specify the `POST /api/explain` contract: request `{path}`; status codes 200 (summary), 400 (missing/invalid path), 404 (outside scanned tree or excluded path); the `ExplainSummary` schema; deterministic extraction rules per file class.
- 4. Specify `viz/lib/explain.ts`: zone and type classification, markdown heading outline, code import/export/symbol/TODO counts, git last-commit + churn via `lib/git.ts`, council attribution via the council-department mapping, related files, and the template-assembled summary string — all with §5 caps.
- 5. Specify `viz/lib/tours.ts`: three deterministic tours built from snapshot data (stats churn, commits, tree) with `TourStep` deep-links; output `public/snapshots/tours.json` via the VIZ-022 snapshot script.
- 6. Specify UI wiring: `explain-panel` in the explorer file viewer, `tour-player` on `/learn`, command palette entries; a11y per VIZ-014 (full keyboard operation, reduced-motion honored, AA contrast).
- 7. Specify the feature flag and degradation matrix: layer off → hidden; snapshot-only mode → reduced `ExplainSummary`; static export → tours/explains served from committed JSON.
- 8. Specify the future model-routed explainer as documentation only: `ExplainerProvider` interface, model-lock routing config, opt-in flow, C12 + C10 + POPIA gates — explicitly out of MVP scope.
- 9. Compile all improvements into this unconsolidated artifact at the stated output path; run the validation checklist (§9 below).
- 10. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- Ask Mode produces design content only; the contract below is specified for later Code Mode execution — it is not implemented in this phase.
- API: `POST /api/explain` — request/response (deterministic, no LLM call):

```json
// request
{ "path": "docs/program/README.md" }

// response 200 — deterministic structured summary
{
  "path": "docs/program/README.md",
  "name": "README.md",
  "extension": ".md",
  "zone": "docs",
  "type": "markdown",
  "sizeBytes": 4812,
  "lines": 143,
  "headings": ["Program Structure", "Councils", "Delivery"],
  "todos": 0,
  "lastCommit": { "sha": "a1b2c3d", "date": "2026-11-01", "author": "…", "message": "…" },
  "churn": { "commits": 12, "insertions": 340, "deletions": 51 },
  "council": null,
  "relatedFiles": ["docs/program/plan/README.md"],
  "summary": "Markdown document in the docs zone, 4.8 KB, 143 lines, last changed 2026-11-01 …",
  "confidence": "deterministic"
}
```

- `ExplainSummary` / `Tour` / `TourStep` contracts (added to the VIZ-022 `lib/types.ts` surface — no duplicate contract files):

```ts
interface ExplainSummary {
  path: string; name: string; extension: string;
  zone: 'docs' | 'prompts' | 'execution' | '.stremiium' | 'rea' | 'viz' | 'root';
  type: 'markdown' | 'code' | 'data' | 'config' | 'binary' | 'other';
  sizeBytes: number; lines?: number;
  headings?: string[];            // markdown outline, ≤10
  imports?: number; exports?: number; symbols?: string[]; // code, ≤20 symbols
  todos?: number;                 // TODO/FIXME count
  lastCommit?: { sha: string; date: string; author: string; message: string };
  churn?: { commits: number; insertions: number; deletions: number };
  council?: string | null;        // from council-department-mapping.json for prompts/**
  relatedFiles?: string[];        // siblings / co-changed, ≤12
  summary: string;                // template-assembled, metadata-only
  confidence: 'deterministic';
}

interface TourStep { id: string; title: string; description: string; route: string; filePath?: string; }
interface Tour { id: string; title: string; description: string; steps: TourStep[]; }
```

- Committed snapshot artifact: `public/snapshots/tours.json` (three tours, generated by the VIZ-022 snapshot script, editable source under `viz/content/tours/`).
- Verification command (later Code Mode / QA phase): `curl -s -X POST http://localhost:3000/api/explain -H 'content-type: application/json' -d '{"path":"docs/program/README.md"}'`.
- Future model-routing reference schema (documentation only, mirrors the C11 model-router registry schema): `{routeId, route, model: 'kilo-auto/free', costGuardrail, failover: 'deterministic-fallback', usage, owner, date}` — substitution of another model is prohibited; on unavailability the route falls back to the deterministic provider.

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] `POST /api/explain {path}` contract specified: deterministic `ExplainSummary`, **no LLM call in MVP**
- [ ] Deterministic extraction specified: metadata-only, capped (≤10 headings, ≤20 symbols, ≤12 related files, 1 MB parse ceiling), 400/404 handling, excluded paths rejected
- [ ] Guided tour generator specified: ≥3 deterministic tours, `TourStep` deep-links into existing routes, `tours.json` committed via snapshot script
- [ ] Privacy gate specified: no secrets/PII from the repo sent anywhere; local-only processing; POPIA note present
- [ ] Future LLM hook documented as gated (model-lock `auto`, opt-in, C12 + C10 + POPIA) and explicitly not implemented
- [ ] Sibling coordination surfaces named (VIZ-020, VIZ-021, VIZ-022, VIZ-030, VIZ-031, VIZ-024)
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact

---

## 10. Security Considerations

- `{path}` is validated against the scanned `FileNode` tree: canonicalize, reject `..`, absolute paths, and symlink escapes; excluded paths (`rea/node_modules`, `.git`, `.env`, secrets) return 404, never a summary.
- Route handlers read from the repo-scan cache or committed snapshots — no arbitrary filesystem reads and no raw-content streaming into responses.
- Response caps and the 1 MB parse ceiling bound memory use; binary files get metadata-only summaries.
- No credentials, tokens, or `.env` values may appear in explain/tour payloads; placeholder tokens only.
- Any future LLM integration is local-first, opt-in, and requires a C12 threat-model review (reference skill: openai-security-threat-model) before activation; payload is derived metadata, never raw file contents.

---

## 11. South African Regulatory Considerations

- POPIA (Protection of Personal Information Act 13 of 2013): git metadata (author names/emails) is personal information. The deterministic layer processes it locally only and transmits nothing to any external model or service; a future external-model integration would constitute cross-border processing requiring lawful basis and minimization review under POPIA before activation — default posture: never transmit.
- CPA 68 of 2008 (consumer protection): the UI must not mislead — deterministic output is labeled metadata-derived (`confidence: 'deterministic'`), not presented as AI-generated explanation.
- The layer adds no new processing of regulated financial data; it reads repository structure and metadata only.

---

## 12. Compliance Gate

- C11 Dev-Engineering + C12 Cybersecurity-Intel. The learning layer touches PII-adjacent git metadata and reserves a future LLM hook; C12 signs off the privacy/security posture before Code Mode execution. C10 Finance-CFO joins the gate only if/when an LLM cost guardrail is requested.

---

## 13. Rollback Plan

- Feature flag off → learning layer hidden; all core views remain fully functional (zero core dependencies).
- Remove the route, panel, player, and tours.json via git revert on the feature branch; regenerate snapshots without tours.
- If explain summaries mislead (wrong metadata mapping): disable the flag, fix `lib/explain.ts` extraction, re-run VIZ-024 data-shape tests before re-enabling.
- If a future model-routed provider misbehaves: disable its `routeId` in the gateway config; the deterministic provider resumes automatically — never substitute another model.

---

## 14. Escalation Path

- C11-MODEL-ROUTER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events (e.g., suspected transmission of repo content, secrets, or PII to any external model or service) skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Model substitution attempts or routing misconfiguration escalate to C11 + C12 for re-lock and re-guard.

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `prompts/viz/c11-dev-engineering/model-router/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C11 Dev-Engineering viz outputs (VIZ-020 frontend scaffold, VIZ-021 API routes, VIZ-022 data contracts, VIZ-023 build/deploy, VIZ-024 QA validation) and the C03 learning-content tasks (VIZ-030 decks, VIZ-031 graph data).
- Declared arbitration surfaces for Sparkling Curious: (1) `/api/explain` route ownership vs VIZ-021 — VIZ-021 owns route conventions, VIZ-025 owns the explain contract and its implementation; (2) `/learn` surface vs VIZ-030 — decks are slide content, tours are guided navigation, both mount under `/learn` without overlap; (3) `ExplainSummary`/`Tour`/`TourStep` type additions vs VIZ-022 — single `lib/types.ts`, no duplicate contracts; (4) command palette entries vs VIZ-013.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
