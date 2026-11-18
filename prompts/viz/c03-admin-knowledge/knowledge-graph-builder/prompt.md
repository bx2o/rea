# Master Prompt — C03-KNOWLEDGE-GRAPH-BUILDER (Knowledge Graph Builder) · VIZ-031

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure; the build target for this brief is the repo visualization learning environment `viz/` (plan `1794948779713-repo-viz-learning-environment.md`).  
**Output:** one separate unconsolidated Ask Mode brief (this `prompt.md`); downstream Code Mode build artifacts land in `viz/` — `lib/graph-types.ts`, `lib/graph-build.ts`, `scripts/snapshot.mjs` graph export, `public/snapshots/graph.json`, `/api/graph`, and the `/councils` route.  
**Depth:** expand data-modeling, graph-theory, technical, security, regulatory, and operational depth regardless of model specificity.  
**Agent ID:** C03-KNOWLEDGE-GRAPH-BUILDER  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge + Sparkling Curious (SC-MASTER-001) VIZ orchestration gate  
**Task:** VIZ-031 — Graph data: file↔folder↔council relationships, cross-reference edges for graph views

---

## 1. Summary

- This master prompt directs C03-KNOWLEDGE-GRAPH-BUILDER to define the **knowledge-graph data layer** for the repo visualization learning environment (`viz/`, Next.js 15 App Router).
- Objective (VIZ-031): produce a machine-readable graph dataset and TypeScript contracts so the `/councils` route renders the full interactive 16-council hierarchy, and graph views elsewhere (`/explorer` graph mode, `/` overview widget) get cross-reference edges between files, folders, and councils. Everything is **derived from source** (filesystem scan + `.stremiium/config/council-department-mapping.json`) — org structure is never hand-typed into the app — and works **offline** via a committed snapshot.
- Graph data model: **nodes** (SC root, CRD coordinators, C01–C16 councils, departments, zone roots, key folders, files) and **edges** (`parent-of`, `routes-to`, `maps-to`, `cross-references`).
- Councils view data: derived from `.stremiium/config/council-department-mapping.json` (v1.1.0, two-plane-hierarchy) → hierarchy **SC → CRD/META → C01–C16 → departments**.
- File↔council associations: `prompts/stremiium/cNN-*` ↔ council `CNN` (prefix rule), extended to `prompts/neobank/*`, `prompts/replies/**`, and `execution/results/**`.
- Layout: **force-directed** (d3-force simulation or react-force-graph 2D) with a **react-three-fiber 3D option** for the councils graph.
- Research data to ingest: `.stremiium/config/council-department-mapping.json`, `.stremiium/config/agents/agent-registry.json`, `.stremiium/agents/` (coordinators, council-agents, department-agents, executive, meta-councils), `prompts/README.md`, `docs/governance/`, `docs/architecture/`, `docs/program/`.
- Skills to ingest: `web-artifacts-builder` (shadcn patterns), `building-native-ui` (three.js/WebGL patterns), `frontend-patterns`, `frontend-code-review`, `accessibility-compliance` (WCAG graph navigation), `davila7-ui-design-system` (node color/size tokens).
- Output artifact: this unconsolidated brief; downstream build outputs are `viz/lib/graph-types.ts`, `viz/lib/graph-build.ts`, `scripts/snapshot.mjs` graph export, `public/snapshots/graph.json`, `viz/app/api/graph/route.ts`, `/councils` route spec.
- Ask Mode only: this brief specifies contracts and derivation rules; no executable build happens until Sparkling Curious hands it to Code Mode.

---

## 2. Assumptions

- `.stremiium/config/council-department-mapping.json` v1.1.0 is the canonical org source of truth: 15 CRD coordinators, 5 planes (command, workforce, staff_line, meta_councils, executive), 16 councils with 29 departments total, routing rules R1–R6, cross-council unit `notion-projection`. [FACT — read from mapping file]
- The repo is present locally with full git history; GitHub API is not required (plan §2 decision).
- Exclusions mirror the explorer: `rea/node_modules`, `.git/`, binary blobs are not graph nodes; `rea/` internals collapse to a zone node by default. [INFER from plan §3.2/§8]
- File-node inventory: `prompts/stremiium/**` (~165 prompts per `prompts/README.md`), `prompts/neobank/**` (16 departments, 37 prompts), `prompts/viz/**` (18 task prompts), `prompts/replies/**`, `execution/results/**`, `docs/**`, `.stremiium/**`. [FACT for README counts; EST for per-folder totals]
- Graph size stays in the low thousands of nodes — safe for one WebGL force pass, virtualized in any DOM fallback. [EST]
- `GraphData` aligns with the canonical C03 graph export schema `{graphId, nodes, edges, exportFormat, exportDate, nodeCount, edgeCount, integrityCheck}` from the base master prompt, extended with typed node/edge unions. [FACT]

---

## 3. Questions

- Should every file become a node (~3,900 repo files), or only org-meaningful files (prompts, replies, execution results, agent files, docs) with the rest reachable via zone/folder drill-in? [recommend: org-meaningful files as nodes; folders as hubs]
- Should `rea/` be one zone node or depth-limited to N folder levels? [recommend: single zone node, expandable on demand]
- Do `routes-to` edges carry weight by rule priority (R1 before R2) so the layout ranks captains above departments? [recommend: yes]
- For the 3D option, is `react-force-graph-3d` acceptable as the WebGL fast path, with react-three-fiber reserved for the `/globe` zone scene? [recommend: yes — see §8.6]
- 16 councils need distinguishable nodes on `/councils`, but VIZ-017 restricts categorical hues to zones only — SC arbitration required (see §8.6 color note).
- Is the degree histogram on `/councils` (shadcn charts/recharts) in MVP scope, or deferred to the dashboard (VIZ-015)? [open — SC arbitration]

---

## 4. Concerns

- **Density**: a full file-level graph (~3,900 nodes) risks unreadable hairballs and force-layout thrash → hub-and-spoke collapses (zone roots, key folders), edge-type filters, depth limits.
- **Stale org data**: if `council-department-mapping.json` changes (v1.1.0 → v1.x), a hardcoded hierarchy would silently drift → derive at build/snapshot time only; version-stamp `GraphData.version`.
- **Folder-name mismatches**: prompt folder suffixes do not always equal department names — `prompts/stremiium/c06-hardware-enable/` vs department `c06-engineering-infrastructure`; `c13-web3-token/` vs `c13-web3-finance`; `c14-banking-fintech/` vs `c14-customer-success`. Matching by full name would drop these edges → prefix rule (§8.4). [FACT — verified against repo tree]
- **Layout non-determinism**: unseeded force simulations render differently per reload → seeded RNG + hierarchy-informed initial positions (radial clusters per council).
- **Accessibility**: pure canvas graphs are keyboard/screen-reader hostile → node-list fallback view, focus management, reduced-motion static radial layout (align with VIZ-014).
- **Route surface**: plan §3 defines five API routes owned by VIZ-021; this brief adds `/api/graph` (or a `/api/tree` extension). SC must ratify the addition during synthesis to prevent contract drift. [FACT — VIZ-021 brief covers /api/tree, /api/commits, /api/diff/[sha], /api/stats, /api/file]

---

## 5. Suggested Improvements

- Precompute node degree and simple centrality in `graph-build.ts`; use it for node sizing and a "hub" badge on high-degree folders (zones, captains).
- Edge-type filter chips in the `/councils` UI: `parent-of` / `routes-to` / `maps-to` / `cross-references` toggles (shadcn `Badge` + `ToggleGroup`).
- Second layout mode: **radial hierarchy** — SC at center, CRD/META inner ring, C01–C16 middle ring, departments outer ring — as the reduced-motion/static default.
- Degree histogram + top-connected-nodes bar (recharts) on `/councils`.
- Graph search via the shadcn `command` palette: type a council, agent, or path → focus/center that node.
- Cross-reference integrity check on every snapshot (§10) with an `integrityCheck` field on `GraphData`.

---

## 6. Missing Dependencies

- `.stremiium/config/council-department-mapping.json` — present (v1.1.0). [FACT]
- `.stremiium/config/agents/agent-registry.json` — agent↔council/department registry links for captain/department node metadata. [UNKNOWN — verify existence at build time; fall back to mapping.json]
- `viz/lib/repo-scan.ts` `FileNode` contract — owned by VIZ-022 (data-engineer); graph-build consumes it, never redefines it.
- `d3-force` / `react-force-graph` packages — plan install sequence step 4; offline fallback is a hand-rolled seeded spring layout or static radial positions (source-complete either way).
- Node color tokens — owned by VIZ-012 (design-system-architect, token implementation) and VIZ-017 (brand palette decision, `viz/lib/brand.ts` single token source).
- `/councils` route shell and `/api/*` conventions — owned by VIZ-020 (frontend-engineer) and VIZ-021 (api-integration-engineer).

---

## 7. Step-by-Step Implementation or Research Plan

Deliverables produced by this plan (in order):

1. `viz/lib/graph-types.ts` — `GraphNode`, `GraphEdge`, `GraphData`, `CouncilsView`, node/edge type unions (schemas in §8).
2. `viz/lib/graph-build.ts` — builder that consumes `FileNode[]` from `lib/repo-scan.ts` (VIZ-022) plus `council-department-mapping.json` and emits `GraphData`.
3. `scripts/snapshot.mjs` extension — writes `public/snapshots/graph.json` alongside `tree.json`, `commits.json`, `stats.json`.
4. `viz/app/api/graph/route.ts` — serves live-derived graph when git/fs is available, else the snapshot (pending SC ratification, §4).
5. Councils view dataset — SC → CRD/META → C01–C16 → departments with captains, routing rules, cross-council units (§8.3).
6. Layout specification — force parameters (§8.6) plus the 3D option.

Research and build steps:

- 1. Read `.stremiium/config/council-department-mapping.json`; extract the 15 CRD coordinators with roles, 5 planes with roots, 16 councils with captain files and departments (29 total), routing rules R1–R6, cross-council units, vocabulary (canonical "Council", retired "Squad"). Tag extractions [FACT] against the file.
- 2. Enumerate the node inventory: `sc` root (SC-MASTER-001), 15 `crd` coordinator nodes, `meta` plane nodes, 16 `council` nodes, 29 `department` nodes, `zone` roots (`docs`, `prompts`, `execution`, `.stremiium`, `rea`, `artifacts` [EST]), `folder` hubs (per-council prompt folders, replies, execution/results, agents plane folders), and `file` nodes for org-meaningful files.
- 3. Define edge extraction rules (§8.2): `parent-of` from tree containment; `routes-to` from R1–R6; `maps-to` from file↔council prefix association; `cross-references` from reply/execution-result/artifact mirrors.
- 4. Derive file↔council associations by scanning `prompts/stremiium/cNN-*` (16 council folders + `orchestration/` → SC), `prompts/neobank/*` departments, `prompts/replies/**`, `execution/results/**`; apply the `cNN` prefix rule and record mismatch cases (§8.4).
- 5. Freeze the TypeScript contracts in §8 as `viz/lib/graph-types.ts` and align them with VIZ-022 data contracts (`FileNode`, `CommitRecord`, `RepoStats`).
- 6. Specify `graph-build.ts`: input `FileNode[]` + mapping.json → output `GraphData`, with degree precompute and referential-integrity validation.
- 7. Specify layout: force parameters per edge type, seeded initialization, radial-hierarchy alternative, 3D option (§8.6).
- 8. Specify snapshot + API: `scripts/snapshot.mjs` graph export → `public/snapshots/graph.json`; `/api/graph` route with snapshot fallback; client types import from `graph-types.ts`.
- 9. Run validation checklist (§9 below).
- 10. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode; this section is contract text only.

### 8.1 Core contracts (`viz/lib/graph-types.ts`)

```ts
type GraphNodeType = 'sc' | 'crd' | 'meta' | 'council' | 'department' | 'zone' | 'folder' | 'file';
type GraphEdgeType = 'parent-of' | 'routes-to' | 'maps-to' | 'cross-references';

interface GraphNode {
  id: string;                 // 'sc:SC-MASTER-001' | 'crd:crd-workflow-orchestrator' | 'council:C03'
                              // | 'dept:c03-admin-knowledge' | 'zone:prompts'
                              // | 'folder:prompts/stremiium/c08-design-creative'
                              // | 'file:prompts/viz/c03-admin-knowledge/knowledge-graph-builder/prompt.md'
  label: string;
  type: GraphNodeType;
  meta?: {
    councilId?: string;       // 'C01'..'C16' — present on council/dept/associated file nodes
    captain?: string;         // e.g. 'C03-chief-librarian.agent.md' (from mapping.json)
    role?: string;            // CRD coordinator role text (from mapping.json)
    path?: string;            // repo-relative path for zone/folder/file nodes
    zone?: 'docs' | 'prompts' | 'execution' | '.stremiium' | 'rea' | 'artifacts';
    size?: number;            // bytes, file nodes
    degree?: number;          // precomputed in graph-build.ts
    staffOf?: string[];       // CRD nodes: councils they staff, e.g. crd-knowledge-flow -> ['C03']
  };
}

interface GraphEdge {
  id: string;                 // `${type}:${source}->${target}`
  source: string;             // GraphNode.id
  target: string;             // GraphNode.id
  type: GraphEdgeType;
  weight?: number;            // default 1; routes-to edges carry rule priority
  rule?: 'R1' | 'R2' | 'R3' | 'R4' | 'R5' | 'R6';  // routes-to only
  label?: string;
}

interface GraphData {
  version: string;            // mapping.json version + snapshot date, e.g. '1.1.0+2026-11-18'
  nodes: GraphNode[];
  edges: GraphEdge[];
  counts: { nodes: number; edges: number; byNodeType: Record<GraphNodeType, number>;
            byEdgeType: Record<GraphEdgeType, number> };
  integrityCheck: { orphanNodes: number; danglingEdges: number; ok: boolean };
}
```

### 8.2 Edge semantics

- `parent-of`: tree containment. SC → each council (16); council → its departments (29 total); CRD → staffed councils where mapping.json annotates staff (`crd-compliance-ops`→C01, `crd-research-ops`→C04, `crd-data-governance`→C01/C12, `crd-knowledge-flow`→C03, `crd-incident-response`→C12, `crd-deployment`→C06/C11); zone → folder → file. [FACT — staff annotations read from mapping.json]
- `routes-to`: the six routing_rules as directed edges — R1 task→owning captain, R2 captain→departments only, R3 cross-council→captains convene/SC arbitrates (<24h), R4 CRD interception of any step (git-safety/security/cost), R5 meta-councils→SC advise only, R6 subagent→registered AGT parent. R4 edges fan out from every CRD to every council (weight low, filterable). [FACT]
- `maps-to`: file↔council/department association (§8.4); captain agent file → council node; department agent file → department node; `notion-projection` unit → all councils (cross_council_units, serves: ["all"]). [FACT]
- `cross-references`: prompt.md ↔ `prompts/replies/<mirror>/reply.md`; prompt.md ↔ `execution/results/<scope>/<prompt-name>/execution-result.md`; artifacts (`artifacts/stremiium/**`) → producing agent/council; docs cross-links. [FACT — mirror convention from prompts/README.md]

### 8.3 Councils view data (hierarchy SC → CRD/META → C01–C16 → departments)

`CouncilsView` (a filtered projection of `GraphData`) fixes the `/councils` render: SC root; CRD coordinators (15) and META plane as the second layer; C01–C16 as the third; departments as the fourth. Council/department contents from mapping.json:

| Council | Captain file | Departments |
|---|---|---|
| C01 | C01-legal-compliance-captain.agent.md | c01-legal-compliance |
| C02 | C02-vp-operations.agent.md | c02-operations, c02-operations-infrastructure |
| C03 | C03-chief-librarian.agent.md | c03-admin-knowledge |
| C04 | C04-chief-strategist.agent.md | c04-strategy-growth, c04-strategy-operations, c04-strategy-research, c04-strategy-core |
| C05 | C05-chief-people-officer.agent.md | c05-hr-culture, c05-hr-people |
| C06 | C06-chief-technology-officer.agent.md | c06-engineering-infrastructure |
| C07 | C07-rainmaker-captain.agent.md | c07-sales-business-development, c07-sales-revenue |
| C08 | C08-chief-design-officer.agent.md | c08-design-creative |
| C09 | C09-chief-marketing-officer.agent.md | c09-marketing-brand, c09-marketing-growth, c09-marketing-communications |
| C10 | C10-chief-financial-officer.agent.md | c10-finance-cfo, c10-finance-investor-relations, c10-algo-trading |
| C11 | C11-dev-engineering-captain.agent.md | c11-dev-engineering |
| C12 | C12-cybersecurity-intel-captain.agent.md | c12-cybersecurity-intel |
| C13 | C13-web3-finance-captain.agent.md | c13-web3-finance |
| C14 | C14-customer-success-captain.agent.md | c14-customer-success |
| C15 | C15-product-management-captain.agent.md | c15-product-management, c15-products-blt, c15-products-fan-tokens |
| C16 | C16-banking-fintech-captain.agent.md | c16-banking-fintech, c16-website-product |

Plus: `routingRules` (R1–R6 strings) surfaced as a legend; `crossCouncilUnits` (`notion-projection`, serves all); `vocabulary` note (canonical "Council", retired "Squad").

### 8.4 File↔council association rule (prefix match)

- Rule: folder/file path segment matching `^c(\d{2})-` → council `CNN`. Examples: `prompts/stremiium/c03-admin-knowledge/**` → C03; `prompts/stremiium/c08-design-creative/**` → C08; `prompts/viz/c03-admin-knowledge/**` → C03 (viz task prompts inherit the council of their folder). [FACT]
- `prompts/stremiium/orchestration/**` → maps-to SC (orchestration agents, SC-MASTER-001). [FACT]
- Documented mismatch cases where the prompt-folder suffix ≠ department name — the prefix rule still binds them; never match on full folder name: `c06-hardware-enable` (prompts) ↔ dept `c06-engineering-infrastructure`; `c13-web3-token` (prompts) ↔ dept `c13-web3-finance`; `c14-banking-fintech` (prompts) ↔ dept `c14-customer-success`. [FACT — verified against repo tree]
- `prompts/neobank/<dept>/**` (banking, customer-success, design, dev-engineering, engineering, finance, hr, knowledge-base, legal, marketing, operations, product, sales, security, strategy, web3) → maps-to the corresponding C01–C16 council by domain matrix; the neobank→council domain matrix is enumerated in `graph-build.ts` and marked [INFER] where the domain link is judgmental.
- Replies mirror the prompt path (`prompts/replies/stremiium/<council>/<agent>/reply.md`), so reply nodes inherit the prompt's council via both `parent-of` (folder tree) and `maps-to` (council).

### 8.5 Snapshot & API config

- `scripts/snapshot.mjs` writes `public/snapshots/graph.json` (zero-deps node script; reads mapping.json + walks the fs with the same exclusions as `repo-scan.ts`); regenerable offline with zero network and zero git binary.
- `viz/app/api/graph/route.ts`: live-derive when git/fs is available; else `fs.readFile('public/snapshots/graph.json')`; response `Cache-Control: public, max-age=60`. Addition beyond the five VIZ-021 routes is flagged for SC ratification (§4).

### 8.6 Layout & rendering stack (tech stack refs)

- **Force-directed (default 2D)**: `d3-force` — `forceSimulation` with `forceLink` (distance by edge type: parent-of short, cross-references long), `forceManyBody` (charge by node type: SC/councils repel stronger), `forceCollide` (radius by degree), `forceRadial` for per-council ring clustering, seeded PRNG for stable renders. Wrap in `react-force-graph` (2D) for WebGL canvas with directional link arrows and canvas-object node labels, or a custom canvas component if the package is unavailable offline.
- **3D option**: `react-force-graph-3d` as the fast WebGL path; alternatively a custom `react-three-fiber` scene — `InstancedMesh` per node type, `LineSegments`/drei `Line` for edges, `OrbitControls`, raycast hover → shadcn `Tooltip`, click → drill-down; degrade to `Points` on low-end devices and honor reduced-motion (plan §8). The `/globe` cobe scene remains separate; this 3D graph is the councils view.
- **UI shell**: shadcn `Card` (graph panel), `Badge` (council chips), `Tabs` (2D / 3D / list fallback), `Command` (graph search), `Tooltip`, `Separator`; recharts (shadcn `chart`) for the degree histogram; GSAP only for entrance transitions, respecting the reduced-motion switch (VIZ-014).
- **Node colors**: bind to the VIZ-017 decision (`prompts/viz/c08-design-creative/brand-manager/prompt.md`, single token source `viz/lib/brand.ts`) — zone hues are the ONLY categorical hues: docs #2563EB (dark #60A5FA), prompts #D97706 (#FBBF24), execution #16A34A (#4ADE80), .stremiium #7C3AED (#A78BFA), rea #64748B (#94A3B8). [FACT — VIZ-017 board decision] Council/CRD/META org nodes therefore use neutral chrome tokens + council-id badges/labels, NOT a new 16-color spectrum; if `/councils` genuinely needs per-council categorical hues, that is a VIZ-017 rule exception requiring SC arbitration (§3).
- **A11y contract**: every graph interaction must be reachable from the node-list fallback (keyboard focus order, `aria-label` per node, `role="tree"` for the list). [FACT — requirement from plan §9.6]

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#]/path references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Node types cover SC, CRD coordinators, C01–C16 councils, departments, zone roots, key folders (+files)
- [ ] Edge types `parent-of`, `routes-to`, `maps-to`, `cross-references` all defined with schemas
- [ ] Councils view derived from council-department-mapping.json: SC → CRD/META → C01–C16 → departments
- [ ] File↔council associations use the `cNN` prefix rule; mismatch cases documented
- [ ] Layout spec includes force-directed (d3-force or react-force-graph) and the react-three-fiber 3D option
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] SA regulatory considerations addressed where relevant
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

Acceptance criteria (Code Mode gate for the built graph layer):

- [ ] `/councils` renders the full hierarchy from mapping.json: 1 SC root, 15 CRD coordinators, META layer, 16 councils, 29 departments — every captain and department from §8.3 present as nodes. [FACT-anchored counts]
- [ ] Every `prompts/stremiium/cNN-*` folder (16 council folders) has ≥1 `maps-to` edge to council `CNN`; total `maps-to` edges cover the ~165 stremiium prompts, 37 neobank prompts, and 18 viz prompts. [EST on totals]
- [ ] All four edge types exist in `graph.json` with `counts.byEdgeType` populated; `integrityCheck.ok === true` (zero orphan nodes, zero dangling edges)
- [ ] `GraphData` shape matches §8.1 contracts exactly; `graph-types.ts` compiles; snapshots regenerate offline with zero network and zero git binary
- [ ] Force layout is stable across reloads (seeded); toggling 2D↔3D does not re-fetch or lose selection
- [ ] Node click drills: council → departments → prompts/files → file viewer deep-link (`/explorer?path=…`)
- [ ] Node-list fallback fully keyboard-navigable; reduced-motion switches to the static radial layout [FACT — plan §9.6 gate]

---

## 10. Security Considerations

- The graph mirrors org structure and repo paths only — no secrets, tokens, credentials, or `.git` internals in `graph.json`; the snapshot writer applies the same exclusions as the tree scan. [FACT — exclusion rule from plan §3.2]
- No PII in graph data (council IDs, agent role names, file paths). If agent identities ever map to real persons, route through C01 redaction before export.
- Export integrity: every snapshot runs a referential-integrity check (`orphanNodes`, `danglingEdges`) and stamps `GraphData.version` from mapping.json so stale org data is detectable.

---

## 11. South African Regulatory Considerations

- POPIA exposure is minimal — graph content is organizational metadata (council IDs, roles, paths), not personal data; treat any personal-data addition as a C01 gate trigger. [INFER]
- FICA/financial-regulatory surface: none in this layer — if `/councils` later displays regulated content (C10/C16 artifacts), C01 + C16 re-gate. [INFER]

---

## 12. Compliance Gate

- C03 Admin-Knowledge (data/knowledge governance) + Sparkling Curious VIZ orchestration.
- Cross-council route data (R1–R6 edges) and any council-conflict visualization require SC sign-off per routing_rules R3/R5 before Code Mode execution.
- Graph export with cross-council links additionally requires Sparkling Curious per the base master prompt gate.

---

## 13. Rollback Plan

- Re-export `graph.json` from the last known-good snapshot; the committed snapshot makes rollback a file-swap, not a rebuild. [FACT — snapshot strategy from plan §4/§6]
- Re-run `graph-build.ts` after `council-department-mapping.json` or repo structure changes.
- Revert `viz/` graph modules (`graph-types.ts`, `graph-build.ts`, `/api/graph`, `/councils` components) to the prior commit on a contract break.
- Escalate graph-integrity failures (non-zero orphans/dangling edges) to C03 + SC before re-export.

---

## 14. Escalation Path

- C03-KNOWLEDGE-GRAPH-BUILDER → C03 Admin-Knowledge Captain (C03-chief-librarian) → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact (this unconsolidated brief at `prompts/viz/c03-admin-knowledge/knowledge-graph-builder/prompt.md`) is handed to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 output (VIZ-030 learning decks, which cross-link the graph views), cross-council conflict de-duplication, and gating before Code Mode Phases 2–6.
- SC also arbitrates the dependency and conflict surfaces named here: VIZ-022 data contracts (`FileNode` input — no redefinition), VIZ-012/VIZ-017 node color tokens (zones-only categorical hue rule vs 16-council distinguishability, §8.6), VIZ-014 a11y gates, VIZ-020/021 route surface (`/api/graph` addition beyond the five plan routes, §4), and VIZ-015 ownership of the degree histogram if deferred from `/councils`.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
