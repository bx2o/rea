# C11 — Dev-Engineering Council Charter

**Council ID:** C11 · **Directory:** `c11-dev-engineering` · **Tier:** 2 (Technical specialization)
**SAOS identity:** Dev-Engineering · **Captain role:** Dev-Engineering Captain
**Program:** NeoBank ZA (`Project Umoya`) · **Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

Back-links: [council index](../README.md) · [program governance](../../program/governance/README.md) · [quality gates](../../program/delivery/quality-gates.md).

---

## 1. Council ID & name

**C11 — Dev-Engineering.** The implementation council. Builds the product and system components against the architecture — the "implementer" of SAOS §8.2.

## 2. Mandate

**Build the bank's software**: core/ledger implementation, payments, KYC integrations, services and APIs — meeting the 80% coverage, no-secrets and validation standards.

## 3. Captain role

**Dev-Engineering Captain** (Tier-2). Owns: engineering execution, code quality, coverage, test strategy, release readiness (with C06). Escalates to SC.

## 4. Agent roster (PROPOSED)

> ⚠️ **Proposed roster — not staffed.**

| Agent | Focus |
|---|---|
| AGT-tech-lead | Engineering standards, reviews |
| AGT-backend-engineer | Core/ledger, services, APIs |
| AGT-payments-engineer | ISO 20022, PayShap, card flows |
| AGT-integration-engineer | KYC/AML/FIC vendor integrations |
| AGT-mobile-engineer | Customer app (with C08) |
| AGT-test-engineer | Test strategy, 80% coverage, automation |
| AGT-data-engineer | Pipelines, reporting data |
| SUB-* | Feature slices, unit tests |

## 5. Scope & authority

- **In scope:** all application code and services; test strategy; release candidates.
- **Authority:** technical implementation approach within domain; sign-off on G-COV/G-VAL.
- **Out of scope:** architecture definition (C06), security posture (C12).

## 6. Key artifacts owned

| Artifact | Notes |
|---|---|
| Codebase & services | Ledger, payments, KYC, app |
| Test strategy & coverage reports | G-COV evidence |
| API documentation | G-DOC |
| Release candidates | With C06/C02 |
| REA playbooks & custom tools | Per plan W5/W6 |

## 7. Interfaces & dependencies

| Council | Interface |
|---|---|
| C06 Engineering-Infra | Architecture ↔ implementation |
| C12 Cybersecurity-Intel | Secure coding, threat model fixes |
| C15 Product-Management | Requirements ↔ build |
| C08 Design-Creative | Design ↔ implementation |
| C16 Banking-Fintech | Payment/rail specifications |

## 8. KPIs

| KPI | Target |
|---|---|
| Test coverage on shipped code | ≥ 80% |
| Build success rate | ≥ 95% |
| Defect escape rate | Declining |
| Release-candidate first-pass gates | ≥ 90% |
| Secrets in code | 0 |

## 9. Escalation path

`AGT → Dev-Engineering Captain → Chief-Technology-Officer → Sparkling Curious`.

## 10. South-Africa-specific mandate notes

- **Payments:** implement **ISO 20022** messaging and **PayShap**/instant-payment flows; accommodate PSMB→SARB transition.
- **FICA integrations:** CDD, sanctions/TFS screening, STR/CTR pipelines with local data.
- **Data residency:** implement SA-region hosting constraints (D-002) and POPIA data handling.
- **Reporting:** implement BA-return and AEOI data pipelines (with C10).
- **Resilience:** code for load-shedding/connectivity variability on the customer channel.
