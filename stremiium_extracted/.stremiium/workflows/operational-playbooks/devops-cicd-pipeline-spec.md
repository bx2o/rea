---
document_type: 'specification'
product: 'Stremiium Ecosystem'
title: 'DevOps CI/CD Pipeline Specification & Implementation Plan'
parent: 'Stremiium (Pty) Ltd'
owner: 'Engineering-Infrastructure-Squad (C06)'
co_owners:
  - 'Dev-Engineering-Squad (C11)'
  - 'Cybersecurity-Intel-Squad (C12)'
contributors:
  - 'Web3-Finance-Squad (C13)'
  - 'Operations-Squad (C02)'
version: '1.0'
status: 'Draft for Engineering Sign-off'
last_updated: '2026-06-22'
task_ref: 'P2T03'
stack_context: 'TypeScript/Node + Hardhat (Polygon) + Jest + ESLint + husky + standard-version (per package.json)'
---

# DevOps CI/CD Pipeline Specification & Implementation Plan

> [!Important] This is the **engineering specification and phased implementation plan** for Stremiium's CI/CD pipeline. It is grounded in the actual repo stack (TypeScript/Node, Hardhat for Polygon Solidity, Jest, ESLint, husky, standard-version). It operationalizes the security program (T1.x) and underpins the Neobank PRD NFRs (§9.1 security, §9.6 observability). Monitoring/alerting is a sibling task — P2T05.

---

## 0. Document Control

| Field          | Value                                                                        |
| -------------- | ---------------------------------------------------------------------------- |
| Owner          | Chief-Technology-Officer (C06)                                               |
| Co-Owners      | Dev-Engineering-Squad-Captain (C11); Cybersecurity-Intel-Squad-Captain (C12) |
| Approval Gate  | CTO (C06) + C11 Captain + C12 Captain sign-off                               |
| Review Cadence | Quarterly (or on stack/platform change)                                      |

### Revision History

| Version | Date       | Author  | Change                       |
| ------- | ---------- | ------- | ---------------------------- |
| 1.0     | 2026-06-22 | C06/C11 | Initial pipeline spec + plan |

### Related Artifacts

- `package.json` (scripts: `ci:*`, `hardhat:*`, `security:slither`, `security:mythril`, `release:*`)
- `.github/workflows/validate-file-standards.yml` (existing standards workflow)
- Secrets program: `task/T1-critical-asset-protection/implementation/T1.1.*`
- Wallet security: `task/T1-critical-asset-protection/implementation/T1.2.*`
- Neobank PRD §9 (NFRs), §10 (architecture): `workspaces/stremiium-neobank/PRD.md`
- Sibling task: P2T05 Monitoring & Alerting

---

## 1. Purpose & Scope

### 1.1 Purpose

Define a **secure, automated, auditable** path from commit to production for all Stremiium software (core SDK, Neobank services, smart contracts, agent tooling). Goals: (1) catch defects and security issues before merge, (2) make deployments boring and reversible, (3) enforce compliance/quality gates, (4) shorten lead time without sacrificing safety.

### 1.2 Scope — In

- Source control & branching model.
- CI: lint, typecheck, unit/integration tests, SAST, dependency scan, secret scan, smart-contract analysis.
- CD: build, artifact signing/storage, environment promotion (dev → staging → prod), canary/rollback.
- Smart-contract pipeline (Hardhat/Slither/Mythril → testnet → mainnet with multisig).
- Environment & secrets management (vault, OIDC, no long-lived secrets).
- Compliance gates (audit trail, approvals, evidence capture).

### 1.3 Scope — Out

- Runtime monitoring & alerting → P2T05 (sibling).
- Incident response runbooks → existing security-compliance skill.
- Cloud/IaC provisioning details → infra repo (C06 owns).

---

## 2. Current State (as observed)

- **Stack:** TypeScript/Node monorepo (`@stremiium/core` v2.0.0), Jest tests, Hardhat for Polygon Solidity, ESLint, husky pre-commit hooks, standard-version releases.
- **Existing CI scripts** in `package.json`: `ci:typecheck`, `ci:lint`, `ci:test`, `ci:unit`, `ci:integration`, `ci:all`.
- **Existing security scripts:** `security:slither`, `security:mythril` (smart-contract analyzers).
- **Existing GH workflow:** `.github/workflows/validate-file-standards.yml` (documentation/file-standards lint).
- **Existing reference workflows:** `algo-trading-agent/workflows/{ci-cd,nodejs,python-app}.yml` (per-squad examples).
- **Gap:** no unified, multi-stage CI/CD pipeline orchestrating the above into quality gates with environment promotion and audit evidence.

> This spec unifies the existing tooling into one pipeline; it does not invent a new toolchain.

---

## 3. Principles

1. **Shift-left security.** Secret scan, SAST, and dependency review run on every PR; smart-contract analysis on every contract change.
2. **No long-lived secrets in CI.** Use OIDC federation to cloud + vault; ephemeral credentials. (Ties to T1.1.x and the Session #15 GitLeaks remediation.)
3. **Trunk-based with short-lived branches.** Small PRs, fast review, automated merge gates.
4. **Pipeline as code.** All workflow definitions versioned in repo; no manual environment config.
5. **Boring deployments.** Automated, reversible, with canaries and one-click rollback.
6. **Auditability by default.** Every pipeline run, approval, and deployment captured as evidence for SOC 2 / FSCA audits.
7. **Smart contracts are special.** Extra gates: Slither + Mythril clean, 100% coverage on critical paths, testnet soak, multisig mainnet deploy, post-deploy verification.

---

## 4. Branching & Release Model

| Element            | Policy                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| **Default branch** | `main` (always deployable to staging)                                       |
| **Branch naming**  | `feat/*`, `fix/*`, `chore/*`, `sec/*`, `docs/*`                             |
| **PR required**    | All changes via PR; ≥1 review; CI green; secrets-clean                      |
| **Merge strategy** | Squash-merge to `main` with conventional-commit messages (standard-version) |
| **Releases**       | `release:patch/minor/major` → tagged → changelog auto-generated             |
| **Tags**           | Semantic version tags (`vX.Y.Z`) drive production releases                  |
| **Hotfixes**       | `fix/*` → `main`; cherry-pick to release branch if maintained               |

---

## 5. CI Pipeline (per PR + on `main`)

### 5.1 Stages (ordered; each is a gate)

| #   | Stage                                             | Tooling                                                                                      | Gate (fail criteria)                                                 |
| --- | ------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 1   | **Checkout & setup**                              | actions/checkout, setup-node (Node LTS), cache npm                                           | —                                                                    |
| 2   | **Secret scan**                                   | GitLeaks (pre-commit hook in repo) + gitleaks-action                                         | any secret hit                                                       |
| 3   | **Dependency review**                             | GitHub Dependabot + dependency-review-action                                                 | high/critical CVE in new deps                                        |
| 4   | **Lint & typecheck**                              | `ci:lint`, `ci:typecheck` (ESLint + tsc)                                                     | any error                                                            |
| 5   | **Unit tests**                                    | `ci:unit` (Jest)                                                                             | coverage below threshold on critical paths                           |
| 6   | **Integration tests**                             | `ci:integration` (Jest)                                                                      | any failure                                                          |
| 7   | **SAST**                                          | CodeQL (+ Semgrep optional)                                                                  | high-severity finding                                                |
| 8   | **Container/ build**                              | docker/build-push (where services are containerized), image scan (Trivy)                     | high CVE in image                                                    |
| 9   | **Smart-contract analysis** _(contracts/_ only)\* | `security:slither`, `security:mythril`, Hardhat tests                                        | any High/Medium Slither triaged-unresolved; any failing Hardhat test |
| 10  | **Build artifacts**                               | `npm run build` → archive; sign with Sigstore/cosign                                         | build failure                                                        |
| 11  | **Evidence capture**                              | upload logs, SARIF, coverage, Slither/CodeQL reports to workflow artifacts + GH Security tab | —                                                                    |

### 5.2 Pre-commit (local, husky)

- GitLeaks scan (configurable paths).
- `lint-staged`: ESLint + prettier on changed files.
- Conventional-commit message check.
  > Note: Session #15 already added GitLeaks hooks intent; this formalizes it.

### 5.3 Matrix & caching

- Node LTS matrix on PRs; cache `~/.npm` and Hardhat compile cache; parallelize stages 4–9 where independent.

---

## 6. CD Pipeline (environments & promotion)

### 6.1 Environments

| Environment | Purpose                         | Protection                                                        | Deploy trigger                 |
| ----------- | ------------------------------- | ----------------------------------------------------------------- | ------------------------------ |
| `dev`       | Developer integration           | None (auto from `main`)                                           | push to `main`                 |
| `staging`   | Pre-prod, integration/UAT, soak | Required reviewers (C11 + C12)                                    | manual approval after CI green |
| `prod`      | Live customer-facing            | Required reviewers (C11 + C06 + C12) + deployment branch/tag gate | manual approval on release tag |

### 6.2 Promotion flow

1. CI green on `main` → auto-deploy to `dev`.
2. Promote `dev` build artifact (immutable, signed) → `staging` on approval (same artifact, not a rebuild).
3. Smoke + soak + security verification on `staging`.
4. Promote the **same signed artifact** → `prod` on approval + tag.
   > Principle: **promote artifacts, not rebuilds** — what was tested is what ships.

### 6.3 Deployment patterns

- **Services:** canary (e.g., 5% → 25% → 100%) with automatic rollback on SLO breach (feeds P2T05).
- **Smart contracts:** deterministic + verified on Polygonscan; mainnet deploy only via **multisig** (treasury M-of-N) with timelocked execution.
- **DB/schema:** backward-compatible migrations; expand-then-contract.

### 6.4 Rollback

- One-click rollback to previous artifact for services.
- Smart-contract rollbacks via proxy/upgrade pattern (architecture decision) or pause+react via multisig.

---

## 7. Smart-Contract Pipeline (detailed)

Because smart contracts are immutable-on-mainnet, they get a stricter sub-pipeline:

| Step | Action                                                             | Gate                                                |
| ---- | ------------------------------------------------------------------ | --------------------------------------------------- |
| SC-1 | `hardhat compile` + `hardhat test` (unit + forked-mainnet)         | 100% coverage on critical functions; all tests pass |
| SC-2 | Slither static analysis                                            | no unresolved High/Medium                           |
| SC-3 | Mythril symbolic execution                                         | no unresolved High on critical paths                |
| SC-4 | Gas reporting + regression vs baseline                             | no unexpected gas blowup                            |
| SC-5 | External audit (when in scope — e.g., new vault/custody contracts) | clean report or triaged                             |
| SC-6 | Testnet deploy (Mumbai/Amoy) + soak (≥ N days)                     | no anomalies                                        |
| SC-7 | Mainnet deploy via multisig + timelock; verify on Polygonscan      | multisig quorum + post-deploy invariant checks      |
| SC-8 | Register in contract registry (C03/C13) with version + audit ref   | recorded                                            |

> Ties to wallet-security program T1.2.x (custody/vault contracts are the highest-criticality targets).

---

## 8. Secrets & Identity

- **No secrets in repo** (enforced by GitLeaks pre-commit + CI + the Session #15 history scrub precedent).
- **CI/CD cloud access via OIDC federation** — no long-lived AWS/GCP/Azure keys; short-lived tokens per job.
- **Secrets in a vault** (per T1.1.x); CI retrieves via OIDC-authenticated, time-boxed leases; never logged.
- **Deployment credentials** to mainnet/treasury via multisig (humans-in-the-loop), never automated in CI.
- **Rotation** schedule per T1.1.2.

---

## 9. Compliance & Audit Evidence

For every pipeline run that reaches staging/prod, capture:

- Commit SHA, branch, PR, author, reviewers.
- Stage results (pass/fail) + artifact hashes.
- Security scan reports (SARIF: CodeQL, Slither, Mythril, Trivy, Dependabot).
- Approval records (who/when) for protected environments.
- Deployment record (environment, version, artifact signature, rollback option).

This evidence feeds the SOC 2 / FSCA audit packs (per Compliance Playbook §10) and the Audit Prep Playbook.

---

## 10. SLOs for the Pipeline Itself

| SLO                                      | Target                                      |
| ---------------------------------------- | ------------------------------------------- |
| PR CI feedback (P50)                     | < 8 min                                     |
| PR CI feedback (P95)                     | < 20 min                                    |
| Pipeline availability                    | ≥ 99.5%                                     |
| Mean deployment lead time (merge → prod) | < 1 business day (excluding approvals/soak) |
| Deployment failure rate                  | < 5% (with auto-rollback)                   |
| Failed deployment recovery (rollback)    | < 5 min                                     |

---

## 11. Roles & RACI

| Activity                         | C06 CTO | C11 Dev | C12 Cyber | C13 Web3 | C02 Ops |
| -------------------------------- | :-----: | :-----: | :-------: | :------: | :-----: |
| Pipeline design & platform       | **A/R** |    R    |     C     |    C     |    I    |
| Workflow files (as code)         |    C    |  **R**  |     C     |    C     |    I    |
| Security gates (SAST/secret/dep) |    C    |    R    |  **A/R**  |    C     |    I    |
| Smart-contract pipeline          |    C    |    R    |     C     | **A/R**  |    I    |
| Environment protection config    |  **A**  |    R    |     C     |    I     |    C    |
| Production deploy approval       |  **A**  |    R    |   **A**   |    C     |    I    |
| Mainnet multisig execution       |    I    |    I    |     C     | **A/R**  |    I    |
| Audit evidence capture           |    C    |    R    |   **A**   |    C     |    C    |

---

## 12. Phased Implementation Plan

> Sequenced to deliver value fast while respecting security gating.

### Phase A — Foundation (Weeks 1–2)

- [ ] Consolidate the existing `ci:*` scripts into a single `.github/workflows/ci.yml` with the 11 stages (§5).
- [ ] Add GitLeaks pre-commit hook + gitleaks-action (formalize Session #15 intent).
- [ ] Add Dependabot + dependency-review-action.
- [ ] Add CodeQL + SARIF upload to GH Security tab.
- [ ] Document branch/release model (§4) in repo CONTRIBUTING.

### Phase B — Smart-Contract Hardening (Weeks 2–4)

- [ ] Wire `security:slither` + `security:mythril` into CI with triage-state policy (fail on unresolved High/Medium).
- [ ] Add Hardhat coverage gate on critical paths.
- [ ] Add testnet (Amoy/Mumbai) deploy workflow + multisig-gated mainnet deploy workflow.

### Phase C — CD & Environments (Weeks 4–6)

- [ ] Define `dev`/`staging`/`prod` GH environments with protection rules + required reviewers.
- [ ] Implement artifact build → sign (cosign/Sigstore) → promote (no rebuild).
- [ ] Add canary deploy + automatic rollback on SLO breach (integrates with P2T05 monitoring).
- [ ] Implement audit-evidence capture to the evidence store.

### Phase D — Hardening & Optimization (Weeks 6–8)

- [ ] OIDC federation to cloud (decommission any long-lived keys).
- [ ] Pipeline caching + parallelization to hit SLOs (§10).
- [ ] Tabletop exercises: deploy, rollback, secret-incident recovery.
- [ ] Quarterly review cadence scheduled (C06).

---

## 13. Risks & Mitigations

| Risk                                      | Mitigation                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------ |
| Secret leaks into history (recurring)     | GitLeaks pre-commit + CI + branch protection + the filter-repo precedent             |
| Burned mainnet deploy from a bad contract | Multisig + timelock + testnet soak + invariant checks + pause capability             |
| Supply-chain compromise (deps)            | Dependabot + dependency review + lockfile pinning + provenance (SLSA) where feasible |
| Pipeline becomes a bottleneck             | SLOs (§10); caching/parallelization; flaky-test quarantine process                   |
| Unauthorized prod deploy                  | Environment protection + required reviewers + tag gating + OIDC                      |
| Drift between environments                | Promote identical signed artifacts; IaC for env config                               |

---

## 14. Open Decisions (for sign-off)

| #   | Decision                                                             | Owner   |
| --- | -------------------------------------------------------------------- | ------- |
| D1  | Cloud target (AWS/GCP/Azure/hybrid) for CI runners + artifacts       | C06     |
| D2  | Artifact signing standard (cosign/Sigstore confirmed vs alternative) | C06/C12 |
| D3  | SAST toolchain finalization (CodeQL + Semgrep yes/no)                | C12     |
| D4  | Canary platform (k8s/feature-flag service)                           | C06/C11 |
| D5  | Mainnet multisig threshold per contract criticality                  | C13/C10 |
| D6  | Coverage thresholds per criticality                                  | C11/C12 |

---

## Glossary

- **OIDC** — OpenID Connect (token federation for keyless CI cloud access).
- **SAST / SARIF** — Static Application Security Testing / Static Analysis Results Interchange Format.
- **SLSA** — Supply-chain Levels for Software Artifacts.
- **Soak** — extended testnet run to surface latent issues.
- **Canary** — gradual rollout with health-gated promotion.
- **Mumbai/Amoy** — Polygon testnets.

---

**Document Status:** Draft for Engineering Sign-off (v1.0). On approval by CTO (C06) + C11 + C12, Phase A implementation begins. Status recorded in the Implementation Log.
