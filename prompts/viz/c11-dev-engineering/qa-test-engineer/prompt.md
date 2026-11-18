# Master Prompt — C11-QA-TEST-ENGINEER (QA & Validation — VIZ-024)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure (`prompts/viz/**` briefs; `viz/**` app).  
**Output:** this unconsolidated task brief at `prompts/viz/c11-dev-engineering/qa-test-engineer/prompt.md`; Phase 2–6 Code Mode deliverables: `viz/scripts/verify-viz.mjs`, `viz/qa/VALIDATION-REPORT.md`, `viz/package.json` gate scripts.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C11-QA-TEST-ENGINEER  
**Council:** C11 C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C08 Design-Creative (a11y acceptance via accessibility-design-lead VIZ-014)  
**Task:** VIZ-024 — Validation: link checks, data-shape tests, a11y smoke, build gate (plan `1794948779713-repo-viz-learning-environment.md` §9)

---

## 1. Summary

- This master prompt instructs C11-QA-TEST-ENGINEER to own the validation gate for the repo visualization & learning environment (`viz/`), executing plan §9 end-to-end before the commit → merge `main` → push step.
- Objective: prove, with machine-checkable evidence, that the delivered app is source-complete, data-contract-correct, coverage-complete, accessible, and buildable — or that a documented pending-install status exists.
- Validation register (mirrors plan §9): 18 prompts present in `prompts/viz/`; `viz/` source complete and TypeScript-valid; snapshot JSON shapes match VIZ-022 contracts; explorer covers 100% of non-excluded files; commits view covers full git history; ≥ 4 learn decks; a11y smoke (keyboard tree nav, reduced-motion, AA contrast on core surfaces); build gate.
- Test scripts: `viz/scripts/verify-viz.mjs` (zero-dep Node shape checks + coverage reconciliation) and link checks over generated markdown/HTML surfaces.
- Bug triage: severity-tagged intake with SLAs per `.stremiium/governance/workflow-routing.md` §4 — Critical 1h · High 4h · Medium 24h · Low 72h.
- Research inputs: plan §8–§9, `.stremiium/governance/workflow-routing.md`, `.stremiium/skills/accessibility-compliance/` (WCAG), `.stremiium/skills/frontend-patterns/` + `frontend-code-review`, sibling briefs VIZ-020–VIZ-023, VIZ-014, VIZ-030.
- Tech stack refs: Node (zero-dep verifier), git read-only commands, WCAG 2.1 AA, Next.js 15 build as gate consumer.
- Output artifact: this brief now; `viz/qa/VALIDATION-REPORT.md` in Code Mode.

---

## 2. Assumptions

- The repo (`bx2o/rea`) is present locally with full git history; ~3,900 files with default excludes `rea/node_modules` and `.git`.
- `viz/` scaffold is source-complete; pnpm installs may have failed offline, in which case snapshot-only mode with a documented pending-install status is a valid gate outcome.
- VIZ-022 data-engineer defines the authoritative contracts (`FileNode`, `CommitRecord`, `DiffSummary`, `RepoStats`) and `scripts/snapshot.mjs` emits `public/snapshots/{tree,commits,stats}.json`.
- VIZ-014 accessibility-design-lead defines the a11y criteria QA smoke-tests: keyboard tree navigation, reduced-motion respect, AA contrast on core surfaces.
- VIZ-023 devops-engineer owns the build/deploy pipeline; QA consumes the `pnpm build` result and does not modify pipeline config.
- All 18 viz prompts carry model lock `auto` and Ask Mode framing; QA verifies this, not authors it.

---

## 3. Questions

- Did `pnpm install` succeed in the sandbox, or is the build gate in the documented pending-install state (plan §9.4)?
- Is the git binary available at validation time, or must commits-history coverage be asserted from `commits.json` alone?
- How is "explorer renders 100% of non-excluded files" proven without a browser — count reconciliation (`tree.json` leaves vs `git ls-files` minus excludes) plus virtualization config review?
- Do generated reveal.js decks and rendered markdown introduce internal links/anchors needing link checks, and are anchor targets stable across regenerations?
- Which a11y checks can be scripted offline (static attribute/media-query assertions) versus which require the documented manual keyboard pass?
- Are commit author names/emails inside `commits.json` PII if the app is deployed publicly (POPIA screen)?
- What exit-code contract should `verify-viz.mjs` expose so the Code Mode gate and CI can branch precisely?

---

## 4. Concerns

- Prompt-count drift: a 17th or 19th `prompt.md` under `prompts/viz/**` silently breaks plan §9.1 — the check must be exact (== 18), not ≥ 18.
- Snapshot drift: snapshots regenerated at a different HEAD than the live checkout produce false greens on history and coverage checks.
- Shallow shape checks (top-level keys only) miss nested violations (`children[]`, `byZone`, `churnTop[]`, per-file numstat fields).
- Exclusion-list mismatch: `repo-scan.ts` excludes `rea/node_modules` + `.git`; the verifier must apply the identical list or the 100% coverage figure lies.
- a11y smoke without a real browser can degrade to "attribute present" checks that miss focus-order and reduced-motion runtime bugs; manual passes must stay mandatory.
- Build gate false results: build may fail on unrelated lint while routes are missing elsewhere, or pass with broken client-only imports (reveal.js SSR trap, plan §8).
- Link rot: decks, file-viewer markdown, and README cross-references rot silently; external links are unverifiable offline and need an allowlist.

---

## 5. Suggested Improvements

- `verify-viz.mjs` emits per-check structured results (`{checkId, area, status, expected, actual, detail}`) plus a human-readable summary, with distinct exit codes per failure class.
- Embed contract shapes in the verifier as the executable mirror of `viz/lib/types.ts` (single source of truth referenced, not duplicated prose).
- Reconcile coverage numerically: `tree.json` file-leaf count == `git ls-files` count minus excludes; `commits.json` length == `git rev-list --count HEAD`; both numbers recorded in the report.
- Assert ≥ 4 decks under `viz/content/decks/` with non-empty slide content and no unresolved `TBD`/placeholder tokens.
- Assert reduced-motion three ways where possible: CSS `@media (prefers-reduced-motion)` present, GSAP/reveal config honors the toggle, manual smoke documented.
- Run link checks with an offline-safe rule: internal links/anchors must resolve; external URLs are reported as `warn` (network-dependent), never `fail`.
- Add `viz/package.json` scripts `viz:verify`, `viz:links`, `viz:a11y`, `viz:gate` (verify + build) so the gate is one command for VIZ-023 CI.
- Tag every check result with a severity at intake so triage SLAs (§14) bind automatically to failures.

---

## 6. Missing Dependencies

- Internal (must exist before Code Mode verification is meaningful): VIZ-022 `viz/lib/types.ts` + `viz/scripts/snapshot.mjs` + committed snapshots; VIZ-020 explorer/virtualized tree; VIZ-021 API routes; VIZ-023 build config + pending-install documentation; VIZ-030 deck sources; VIZ-014 a11y criteria sheet.
- External (optional; sandbox may lack network): axe-core / Playwright for automated a11y; WCAG 2.1 AA quick reference; Next.js 15 build documentation.
- Governance: `.stremiium/governance/workflow-routing.md` §4 SLA table (present in repo — cite, do not restate, authority).

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read plan §9 (Validation Plan), §8 (Failure Modes), and `workflow-routing.md` §4 (Escalation & SLA); extract the authoritative validation register.
- 2. Enumerate checks with stable IDs (VIZ-V01 … VIZ-V12): prompt count, source completeness, TypeScript validity, snapshot shapes, coverage, history, decks, a11y, links, build, report, triage.
- 3. Specify `viz/scripts/verify-viz.mjs`: zero-dep Node, reads `public/snapshots/*.json`, asserts shapes against embedded contract mirrors, writes `viz/qa/report.json`.
- 4. Specify coverage reconciliation (files and commits) and deck-count assertions with expected values derived from the real repo.
- 5. Specify link-check scope and algorithm: crawl rendered markdown/HTML sources, resolve relative paths and anchors, allowlist external hosts as `warn`.
- 6. Specify a11y smoke: scripted static assertions (tree nodes carry keyboard semantics — `role="treeitem"`/`aria-expanded` or equivalent; reduced-motion media query present) plus documented manual keyboard walkthrough and reduced-motion toggle pass.
- 7. Specify the build gate: `pnpm build` exit 0 when installed; otherwise verify the documented pending-install status exists (plan §9.4) and mark build as `warn`-deferred, never silently `pass`.
- 8. Define bug triage: severity assignment at intake (Critical/High/Medium/Low), SLA clock per §14, owner routing to the task owning the failing surface (VIZ-020 explorer/UI, VIZ-021 API, VIZ-022 data/snapshots, VIZ-023 build/deploy, VIZ-014 a11y, VIZ-030 decks; security findings to C12; anything unresolved to C11 Captain).
- 9. Compile `viz/qa/VALIDATION-REPORT.md` template: per-check evidence, environment facts (git present? installs?), deferred items, sign-off block.
- 10. Run this brief's own §9 Validation Checklist, then hand off to Sparkling Curious (§15).

---

## 8. Commands/Configs/Schemas Where Applicable

- No execution in Ask Mode. The commands below define the Code Mode contract only.
- `node viz/scripts/verify-viz.mjs [--snapshots viz/public/snapshots] [--report viz/qa/report.json]` — exit 0 = all pass; 1 = contract/shape failure; 2 = coverage/count failure; 3 = missing artifact (snapshot, deck, or prompt file); 4 = a11y static assertion failure.
- Read-only git commands permitted inside the verifier (allowlist): `git ls-files`, `git rev-list --count HEAD`, `git log -1 --format=%H`.
- `viz/package.json` scripts: `viz:verify`, `viz:links`, `viz:a11y`, `viz:gate` (= verify + build).
- Check result schema: `{checkId, area: prompts|source|snapshots|coverage|decks|a11y|links|build, status: pass|fail|warn|deferred, expected, actual, detail, severity, owner}`
- Contract mirrors asserted by the verifier (VIZ-022 authoritative):
  - `FileNode`: `{ path, name, type: 'file'|'dir', size, zone, children?: FileNode[] }`
  - `CommitRecord`: `{ sha, date, author, message, filesChanged, insertions, deletions }`
  - `DiffSummary`: `{ sha, files: [{ path, insertions, deletions }] }`
  - `RepoStats`: `{ totals, byZone, byType, churnTop }`

---

## 9. Validation Checklist

- [ ] `prompts/viz/` contains exactly 18 `prompt.md` files, each with model lock `auto`, a named gate, and acceptance criteria (plan §9.1)
- [ ] `viz/` source complete: all routes/components/lib files present; TypeScript syntactically valid (plan §9.2)
- [ ] `viz/public/snapshots/`: `tree.json`, `commits.json`, `stats.json` generated from the real repo; shapes match VIZ-022 contracts (plan §9.3)
- [ ] Build gate: `pnpm build` exits 0 if installs succeeded; otherwise documented pending-install status verified (plan §9.4)
- [ ] Explorer coverage: 100% of non-excluded files (leaf-count reconciliation against `git ls-files` minus `rea/node_modules`, `.git`) (plan §9.5)
- [ ] Commits view covers full git history (`commits.json` length == `git rev-list --count HEAD`) (plan §9.5)
- [ ] Learn decks ≥ 4 with rendered, placeholder-free content (plan §9.5)
- [ ] a11y smoke: keyboard-navigable file tree; reduced-motion respected; AA contrast on core surfaces (plan §9.6)
- [ ] `verify-viz.mjs` shape checks pass; link checks pass (internal), external links `warn`-allowlisted
- [ ] Bug triage SLAs applied per workflow-routing.md §4: Critical 1h · High 4h · Medium 24h · Low 72h
- [ ] Validation report blocks plan §9.7 (commit on `kilo/virtual-capybara-6wy` → merge `main` → push) until all checks pass or are explicitly `deferred` with documented cause
- [ ] Research inputs cited with [S#] references or explicitly marked unverified; evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution); Ask Mode only — no execution language
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD); missing dependencies identified
- [ ] Security considerations addressed; no private keys, credentials, or PII in artifacts

---

## 10. Security Considerations

- `commits.json` embeds author names/emails from git history — personal data; scrub or restrict if the app is deployed beyond local use.
- `/api/diff/[sha]` must validate `sha` against `^[0-9a-f]{7,40}$` before any git invocation; the verifier asserts this validation exists (command-injection surface).
- No secrets, tokens, or credentials in snapshots, reports, or the validation report; registry placeholder tokens stay placeholders (plan §2 media/registry rule).
- The verifier itself runs only the allowlisted read-only git commands (§8); it never mutates repo state, so it is safe inside the CRD-git-state-safeguard gate regime.

---

## 11. South African Regulatory Considerations

- POPIA: commit author emails are personal information; public deployment of the viz app requires a minimization decision (scrub authors, or keep deployment local/offline).
- CPA 68 of 2008: consumer software quality — the validation report is the evidence that the learning environment is reasonably fit for purpose.
- King IV: the §9 gate, per-check evidence, and sign-off block constitute IT-governance quality evidence for the program record.

---

## 12. Compliance Gate

- C11 Dev-Engineering + C08 Design-Creative. QA holds the technical gate; C08 (accessibility-design-lead, VIZ-014) signs off a11y acceptance before plan §9.7 proceeds.
- Critical security/regulatory/privacy findings skip to SC + C01 + C16 immediately per workflow-routing.md §4.

---

## 13. Rollback Plan

- Any `fail` blocks the commit → merge → push step (plan §9.7); re-run `viz:gate` after the owning task fixes the defect; never re-baseline expected values to make a check pass.
- Snapshot contract failure: regenerate via `scripts/snapshot.mjs` at current HEAD, re-verify; if contracts themselves are wrong, escalate to VIZ-022, not a verifier edit.
- a11y failure: prefer degraded mode (disable offending motion/3D per plan §8) as the immediate mitigation; the underlying defect still routes through triage.
- Build-gate failure in pending-install mode: keep the documented pending-install status; mark build `deferred`, do not fake a pass.
- Unresolvable failures escalate per §14 with the severity tag assigned at intake.

---

## 14. Escalation Path

- C11-QA-TEST-ENGINEER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).
- Bug triage SLAs (workflow-routing.md §4, binding at intake): Critical 1h initial response · High 4h · Medium 24h · Low 72h; severity is assigned when the failing check is filed, and the SLA clock routes with the owner task (VIZ-020/021/022/023/030, VIZ-014, or C12 for security-classified findings).

---

## 15. Artifact Handoff to Sparkling Curious

- This brief (and, in Code Mode, `viz/qa/VALIDATION-REPORT.md` + `viz/qa/report.json`) is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with all other viz outputs, conflict de-duplication, and gating before plan §9.7 executes.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) — notably C11 coverage claims vs C08 a11y acceptance — and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff; deferred items must carry documented cause and an owning task.
