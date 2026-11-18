# Master Prompt — C11-DEVOPS-ENGINEER (DevOps-Engineer) — VIZ-023

**Act as the assigned Stremiium agent or subagent.**

**Task:** VIZ-023 — Build/deploy for the repo visualization & learning environment (`viz/`).
**Plan reference:** `/workspace/app/.kilo/plans/1794948779713-repo-viz-learning-environment.md` §4 (App Scaffold) and §9 (Validation Plan).
**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the repo workspace structure (`viz/`, `prompts/viz/`, `docs/`).  
**Output:** produce one separate unconsolidated artifact at `prompts/viz/c11-dev-engineering/devops-engineer/prompt.md`.  
**Depth:** expand build, deploy, offline-fallback, snapshot, and validation depth regardless of model specificity.  
**Agent ID:** C11-DEVOPS-ENGINEER  
**Council:** C11 C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C12 Cybersecurity-Intel  

---

## 1. Summary

- This master prompt instructs C11-DEVOPS-ENGINEER to own build, deploy, and environment operations for the `viz/` Next.js 15 repo-visualization app: pnpm script definitions, the dependency install sequence, build validation gates, the static export fallback, and the offline procedure.
- Objective: the app must be buildable, runnable, and verifiable in two environments — (a) online sandbox with working pnpm/registry access, and (b) offline sandbox where installs fail and the app runs from committed snapshots with exact install commands documented for later execution.
- Deliverables: `viz/package.json` scripts (dev/build/start/lint/snapshot via `node scripts/snapshot.mjs`), documented install sequence, `tsc --noEmit` + `next build` validation gate, `viz/README` offline procedure, and committed `public/snapshots/*.json`.
- Research data to ingest: docs/engineering, docs/program, `.stremiium/skills/` (web-artifacts-builder, frontend-patterns, building-native-ui, accessibility-compliance), plan §4/§8/§9.
- Prompts to improve: pnpm scripts, install sequence, build gate, offline fallback, snapshot regeneration, static export.
- Output artifact: `prompts/viz/c11-dev-engineering/devops-engineer/prompt.md` (this file, unconsolidated).

---

## 2. Assumptions

- `viz/` is a Next.js 15 App Router TypeScript app with Tailwind CSS and shadcn/ui, scaffolded per plan §4.
- pnpm is the package manager; Node ≥ 20 is available (or its absence is explicitly documented).
- The sandbox may have no network: `pnpm dlx create-next-app` and shadcn registry installs may fail; the manual scaffold + committed snapshots path is mandatory and first-class.
- The repo has full local git history; snapshot generation uses local git/fs only (no GitHub API).
- API route handlers (`/api/tree`, `/api/commits`, `/api/diff/[sha]`, `/api/stats`) require a Node server target; static export is a documented fallback mode only.

---

## 3. Questions

- Which shadcn components must the init+add step install (button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu — per plan §4 step 3)?
- Does the deployment target support Node (`next start`) or static hosting only, and which does the static export fallback preclude (route handlers, SSR)?
- What are the exact Node/pnpm version pins recorded in `viz/README` so a later online execution reproduces the same environment?
- How is snapshot staleness detected and regenerated (`pnpm snapshot`) when the repo evolves after snapshots are committed?
- Which validation failures block merge (type errors, build errors) versus warn (bundle size warnings)?

---

## 4. Concerns

- Sandbox has no network: create-next-app and shadcn registry commands fail, leaving `viz/` without installed node_modules; the app must still be source-complete and verifiable offline.
- Static export (`output: 'export'`) disables API route handlers; the fallback must document the mode switch explicitly, not silently.
- Committed snapshots (`public/snapshots/*.json`) drift from live repo state if not regenerated before commit.
- Repo scale (~3,900 files) may stress build memory/time; the build gate must not be skipped under timeout pressure.
- Client-only libraries (reveal.js, three, cobe) can break SSR/build if not dynamically imported.

---

## 5. Suggested Improvements

- Define exactly five pnpm scripts in `viz/package.json`: `dev` (`next dev`), `build` (`next build`), `start` (`next start`), `lint` (`next lint`), `snapshot` (`node scripts/snapshot.mjs`).
- Gate every build with `tsc --noEmit` before `next build`; fail fast on type errors.
- Document the full install sequence (create-next-app, shadcn init+add, dependency install) verbatim in `viz/README` so it can be executed later in an online environment without redesign.
- Commit `public/snapshots/tree.json`, `commits.json`, `stats.json` so the app works with no git binary and no network.
- Add `next-themes` to the dependency set for flash-free light/dark/system theme boot (supports VIZ-018 theme work).
- Record the offline-fallback decision matrix (installs fail → manual scaffold; git absent → snapshot-only mode) in `viz/README` per plan §8.

---

## 6. Missing Dependencies

- Toolchain: Node ≥ 20, pnpm ≥ 9.
- Framework: next 15, react 19, typescript, tailwindcss, shadcn/ui (components.json).
- Runtime deps to install: three, @react-three/fiber, @react-three/drei, gsap, @gsap/react, reveal.js, lucide-react, recharts, cobe, motion, animejs, next-themes.
- Dev deps: @types/three (or three's bundled types), eslint config from create-next-app.
- Sibling tasks: VIZ-022 `scripts/snapshot.mjs` generator and data contracts; VIZ-021 API routes; VIZ-024 QA build-gate ownership.
- C12 Cybersecurity-Intel for pipeline and supply-chain security review.

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §4 (scaffold + install sequence + offline fallback) and §9 (validation gates) plus this repo's `.stremiium/skills/` engineering references.
- 2. Read the C11 viz sibling briefs (VIZ-020 frontend scaffold, VIZ-022 snapshot script, VIZ-024 QA validation) to align script names and gate ownership.
- 3. Specify the five pnpm scripts and the exact commands each runs.
- 4. Specify the install sequence: create-next-app flags, shadcn init + component add list, and the one-line dependency install for three, @react-three/fiber, @react-three/drei, gsap, @gsap/react, reveal.js, lucide-react, recharts, cobe, motion, animejs, next-themes.
- 5. Specify the build validation gate: `tsc --noEmit` first, then `next build`; record expected exit-0 criterion for plan §9.4.
- 6. Specify the offline procedure: exact commands documented in `viz/README` for later execution; snapshots generated by `pnpm snapshot` and committed so the app functions offline.
- 7. Draft the static export fallback (mode switch, what it disables, who decides).
- 8. Compile all improvements into this unconsolidated artifact at the stated output path.
- 9. Run validation checklist (§9 below).
- 10. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- Ask Mode produces design content only; the commands below are specified for `viz/README` documentation and later Code Mode execution — they are not executed in this phase.
- `viz/package.json` scripts schema:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "snapshot": "node scripts/snapshot.mjs"
  }
}
```

- Install sequence (online path, per plan §4):

```bash
pnpm dlx create-next-app@latest viz --ts --tailwind --app --src-dir=false
cd viz && pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card table tabs badge separator scroll-area sheet command tooltip dialog chart treelike-context-menu
pnpm add three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe motion animejs next-themes
```

- Build validation gate:

```bash
pnpm exec tsc --noEmit && pnpm build
```

- Offline procedure (documented in `viz/README` for later execution): manual scaffold of all config + source files, `pnpm snapshot` → committed `public/snapshots/{tree,commits,stats}.json`, then run the install sequence above verbatim when network is available.
- Reference schema: `{script, command, phase, gate, fallback, owner, date}`.

---

## 9. Validation Checklist

- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] pnpm scripts specified exactly: dev/build/start/lint/snapshot (`node scripts/snapshot.mjs`)
- [ ] Install sequence documented: create-next-app, shadcn init+add, deps (three @react-three/fiber @react-three/drei gsap @gsap/react reveal.js lucide-react recharts cobe motion animejs next-themes)
- [ ] Build validation gate defined: `tsc --noEmit` then `next build`, exit 0 required
- [ ] Offline procedure specified: exact commands documented in viz/README for later execution
- [ ] Snapshots committed: public/snapshots/tree.json, commits.json, stats.json
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

- Snapshot files and README commands must contain no credentials, tokens, or `.env` values; placeholder tokens only.
- `scripts/snapshot.mjs` reads git metadata and filesystem paths/sizes only — no file contents that could embed secrets.
- Git exec wrappers (VIZ-021 surface) must pass arguments as arrays, never interpolated shell strings.
- Supply-chain: dependency list is fixed and explicit; C12 reviews any additions before install.

---

## 11. South African Regulatory Considerations

- POPIA: commit metadata (author names/emails) enters snapshots; keep data local, do not upload to third-party services via scripts or CI.
- The viz app displays SA regulatory documentation (FSCA, POPIA, FICA materials) without altering their compliance status; build/deploy tooling introduces no new processing of personal data.

---

## 12. Compliance Gate

- C11 Dev-Engineering + C12 Cybersecurity-Intel. Build/deploy pipeline and dependency supply chain require C12 for pipeline security sign-off before Code Mode execution.

---

## 13. Rollback Plan

- Rollback `viz/` via git revert on the feature branch; snapshots regenerable at any time with `pnpm snapshot`.
- If `tsc --noEmit` or `next build` fails: do not merge; fix type/build errors, then re-run the gate.
- If installs fail (offline): keep manual scaffold, keep committed snapshots, keep README commands pending; the app remains source-complete.
- If static export breaks route handlers: revert to server mode and document the decision in viz/README.

---

## 14. Escalation Path

- C11-DEVOPS-ENGINEER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `prompts/viz/c11-dev-engineering/devops-engineer/prompt.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C11 Dev-Engineering viz outputs (VIZ-020 frontend scaffold, VIZ-021 API routes, VIZ-022 data contracts, VIZ-024 QA validation, VIZ-025 model routing).
- Sparkling Curious arbitrates the known conflict surface: build-gate ownership overlap with VIZ-024 (QA owns checklist execution; DevOps owns gate definition) and script-name alignment with VIZ-022 (snapshot script).
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
