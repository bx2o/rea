---
title: Feature Spec — <feature name>
id: SPEC-<NNNN>
status: draft
owner: <council / role>
date: YYYY-MM-DD
---

# Feature Spec — `<feature name>`

- **Council:** `<Cnn>` · **Version:** 0.1 · **Status:** draft
- **Related:** `<decision-record / research-report / risk-entry>`
- **Grounding:** `<evidence / regulatory links>`

> Product feature specification template. Any feature touching **money, customer data, or a regulatory surface** must complete §7 (Controls) and pass the compliance gates before shipping (PLAN.md §4).

---

## 1. Summary

One paragraph: what the feature is and who it is for.

## 2. Problem & rationale

What user/business problem does it solve? What evidence supports it? Link to research (`../../templates/research-report.md`).

## 3. Scope

- **In scope:** …
- **Out of scope:** …
- **Non-goals:** …

## 4. Users & use cases

| Persona | Use case | Success signal |
|---|---|---|
| | | |

## 5. Requirements

### 5.1 Functional
| # | Requirement | Priority (MoSCoW) |
|---|---|---|
| F1 | | Must/Should/Could/Won't |

### 5.2 Non-functional
| # | Requirement | Target |
|---|---|---|
| N1 | Performance | `[TARGET]` |
| N2 | Availability | `[TARGET]` |
| N3 | Security | |
| N4 | Accessibility | |

## 6. Design

- **Flow:** step-by-step user/agent flow.
- **Data:** what data is processed; lawful basis; retention (`../../councils/c03-admin-knowledge/records-and-retention.md`).
- **Interfaces:** APIs/events (ISO 20022 if payments).
- **Dependencies:** systems, vendors, councils.

## 7. Controls & compliance (mandatory for money/data surfaces)

| Regime | Applicability | Control | Ref |
|---|---|---|---|
| FICA / AML | | CDD, screening, reporting | `../../research/regulatory/aml-fica.md` |
| POPIA | | lawful basis, minimisation, cross-border | `../../research/regulatory/privacy-popia.md` |
| FAIS / conduct | | disclosure, complaints, NFO | `../../research/regulatory/conduct-fais-nca.md` |
| NCA | | affordability, reckless-credit guardrails | `../../research/regulatory/conduct-fais-nca.md` |
| PCI-DSS | | card data scope | PLAN.md §4 |

**Sign-off required (PLAN.md §4):** Tech Lead → CTO → Security → Privacy → Sparkling Curious.

## 8. Acceptance criteria

| # | Given | When | Then |
|---|---|---|---|
| A1 | | | |

> Testable, binary, independent of implementation.

## 9. Metrics

Leading + lagging signals. Tag targets `[TARGET]`. Unit-economic impact → `../../councils/c10-finance-cfo/unit-economics-framework.md`.

## 10. Risks

Link risk entries (`../../templates/risk-entry.md`).

## 11. Rollout & rollback

- Phasing / feature flags.
- Rollback trigger and procedure.

## 12. Open questions

- `[UNKNOWN]` …

## 13. Cross-links

- UP: `<research>` · ACROSS: `<councils>` · DOWN: `<decision-record / risk-entry>`
