# C06 — Engineering Standards

- **Owner:** C06 Chief-Technology-Officer (with C11 Dev-Engineering) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Handbook:** [`../c11-dev-engineering/engineering-handbook.md`](../c11-dev-engineering/engineering-handbook.md)
- **Gates:** [`../../program/delivery/quality-gates.md`](../../program/delivery/quality-gates.md) · **Secure SDLC:** [`../../architecture/security/secure-sdlc.md`](../../architecture/security/secure-sdlc.md)

> **Evidence discipline.** These are **DESIGN CHOICE** engineering standards — the bar the program holds itself to. The **80% coverage gate**, **no-secrets** rule and 5-role sign-off are inherited from Sparkling Curious §4 / PLAN.md §4 and are **binding on the program**; everything else is our own standard, adjustable by ADR.

---

## 1. Non-negotiable standards (inherited from Sparkling Curious)

| Standard | Rule | Source |
|---|---|---|
| **Coverage** | **≥ 80%** line/branch coverage on produced code | PLAN.md §4; G-COV |
| **No secrets** | Zero hardcoded secrets; secrets only from the vault | PLAN.md §4; G-SEC |
| **No PII in artefacts** | No live personal data in repos, tickets, logs or fixtures | PLAN.md §4 |
| **Input validation** | All external input validated; output encoded (injection defence) | PLAN.md §4; G-VAL |
| **Sign-off** | Tech Lead → CTO → Security → Privacy → Sparkling Curious | PLAN.md §4; G-SIGN |

A failure of any of these **blocks release**. Exceptions require a documented, captain-approved rationale and are re-reviewed at the next gate.

---

## 2. Code review

| Change type | Required approvals |
|---|---|
| Normal code | ≥ 1 peer reviewer |
| **Security-sensitive** (auth, crypto, payments, ledger, keys, PII) | ≥ 1 peer + ≥ 1 security reviewer (C12) |
| **Critical money/data paths** | ≥ 2 reviewers incl. C12; four-eyes on merge |
| **Config/policy** (IaC, IAM, WAF) | Review by C12/C06 |

**Reviewers must check:** input validation; authorisation (BOLA/BFLA); secrets; error handling; logging (no PII); dependencies; threat-model alignment (`../../architecture/security/secure-sdlc.md` §5).

**Review hygiene:** small PRs; merge within days; CODEOWNERS by bounded context (`../../architecture/system-design/bounded-contexts.md` §8).

---

## 3. Testing pyramid

| Layer | Scope | Where | Emphasis |
|---|---|---|---|
| **Unit** | Functions/aggregates, invariants | CI (every PR) | Fast, exhaustive on money maths |
| **Contract** | Producer/consumer API & events | CI | Backward compatibility |
| **Integration** | Service + deps (Testcontainers) | CI/ephemeral | Realistic deps |
| **End-to-end** | Critical journeys (onboarding, payment, card) | Staging | Happy path + key failures |
| **Performance/load** | To NFR peaks | Staging (quarterly) | Capacity |
| **Resilience/chaos** | Dependency failures, AZ loss | Staging/game-days | Degraded modes |
| **Security** | SAST/DAST/pen-test | CI + periodic | Injection, authz |
| **Ledger correctness** | Balances, postings, reconciliation | CI + nightly | **Mandatory and exhaustive** |
| **Accessibility** | WCAG checks on UI | CI + manual | Inclusive design |

**Ledger and money-maths tests are exhaustive** (property-based where possible) — a money bug is a banking failure, not a defect.

---

## 4. Secure SDLC hooks

Security is baked into every stage (full detail in `../../architecture/security/secure-sdlc.md`):

| Stage | Hook | Gate |
|---|---|---|
| Requirements | Data classification; regulatory triggers (POPIA/PCI/FICA) | Data-classification sheet |
| Design | **Threat modelling** (STRIDE) for new money/data flows; DPIA trigger | Threat model approved (C12) |
| Build | SAST, SCA, secret scan, IaC scan, lint | Zero high/critical; no secrets |
| Test | DAST, dependency/container scan, ≥80% coverage, abuse-case tests | Coverage + no criticals |
| Review | Peer + security review for sensitive changes | 2 approvals |
| Release | 5-role sign-off; signed artefacts; SBOM | G-SIGN |
| Operate | Monitoring, IR, patch management | Verified detection |

**Supply chain:** pinned dependencies, verified registries, signed commits/artefacts, SBOM, least-privilege CI runners (OIDC federation).

---

## 5. Static standards

| Concern | Standard `[DESIGN]` |
|---|---|
| Formatting/linting | Enforced in CI; no style debates in review |
| Languages per layer | Java 21 / Kotlin (core), Go (edge/adapters), TypeScript (UI), Python (data) — one language per layer (`technology-selection.md` §2) |
| API contracts | OpenAPI 3.1 (external), gRPC (internal) — see `../c11-dev-engineering/api-standards.md` |
| Event contracts | AsyncAPI + schema registry; backward-compatible evolution |
| Architecture tests | Enforce no vendor SDK in domain modules (ACL discipline) |
| Documentation | Public APIs documented; complex logic annotated (**why**); ADRs for decisions |

---

## 6. Definition of done (engineering view)

A change is done only when it is: **reviewed** (by the right approvers), **tested** (≥80% on produced code), **secure** (no secrets, scans clean), **observable** (metrics/logs/traces emitted), **documented** (API + runbook + changelog), **deployable** (reversible, feature-flagged), and **gate-passing** (G-COV…G-SIGN as applicable). Full program DoD: [`../../program/delivery/definition-of-done.md`](../../program/delivery/definition-of-done.md).

---

## 7. Quality gates map

| Gate | Owner | Engineering hook |
|---|---|---|
| G-COV | C11 | Coverage report in CI |
| G-SEC | C12 | Secret scan, key management |
| G-VAL | C11+C12 | Validation matrix, injection tests |
| G-DEP | C12 | SBOM + dependency scan |
| G-DOC | C03 | API docs, runbooks, changelog |
| G-RISK | C12 | No unmitigated Critical/High |
| G-SIGN | SC | 5-role sign-off |

See `../../program/delivery/quality-gates.md`. C06 owns the **infrastructure** elements of G-DEP/G-DOC (pipeline reliability, deployment docs).

---

## 8. Open items / unknowns

- `[UNKNOWN]` Final SAST/DAST/SCA/secret-scanning product selection (`../../architecture/security/secure-sdlc.md` §10).
- `[UNKNOWN]` PCI-DSS scope determines whether additional ASV scans apply (`../../architecture/security/secure-sdlc.md` §10).
- `[ASSUMPTION]` Language-per-layer split is a design choice, revisitable by ADR.

_Codename `Project Umoya` is a working label only._
