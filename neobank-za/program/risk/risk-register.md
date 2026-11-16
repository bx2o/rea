# Risk Register — NeoBank ZA (`Project Umoya`)

**Owner:** C12 Cybersecurity-Intel · **Assured by:** C01 Legal-Compliance · **Reviewed:** monthly + at every gate
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** Seeded

> Live register of launch risks. Scoring model, bands and treatment options are defined in [`README.md`](./README.md); appetite bounds are in [`risk-appetite-statement.md`](./risk-appetite-statement.md).
> **Scales:** L = likelihood 1–5, I = impact 1–5, Score = L×I. Bands: Low 1–4 · Medium 5–9 · High 10–14 · Critical 15–25.
> Owner councils: C01 Legal · C02 Ops · C03 Admin-Knowledge · C04 Strategy · C05 HR · C06 Eng-Infra · C07 Sales · C08 Design · C09 Marketing · C10 Finance · C11 Dev · C12 Security · C13 Web3 · C14 Customer · C15 Product · C16 Banking.

---

## Register

### R-001 — Licensing delay
| Field | Value |
|---|---|
| Category | Regulatory |
| Description | PA processing of a de novo bank takes longer than the 6–9 month guidance; authorisation slips and cascades to the whole launch. |
| L / I / Score / Band | 4 / 5 / **20** / Critical |
| Mitigation | Sponsor-bank-first path (D-001) so launch is not licence-blocked; pre-application alignment with PA; complete, high-quality submission. |
| Owner | C01 (risk owner: C01 captain) |
| Status | Open · Treatment: Mitigate |
| Links | D-001, D-004 · M2/M4 |

### R-002 — Sponsor-bank dependency
| Field | Value |
|---|---|
| Category | Strategic |
| Description | Over-reliance on a single sponsor bank for funds custody/rail access creates counterparty, pricing and control risk. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | Contractual protections; service levels; contingency second sponsor/rail; documented exit plan. |
| Owner | C16 (risk owner: C16 captain) |
| Status | Open · Treatment: Transfer (contractual) + Mitigate |
| Links | D-001 · M3 |

### R-003 — Capital adequacy shortfall
| Field | Value |
|---|---|
| Category | Financial |
| Description | Minimum capital (R250m bank / R10m mutual) not fully raised, or PA imposes higher CAR/buffer for a new bank. |
| L / I / Score / Band | 3 / 5 / **15** / Critical |
| Mitigation | Sizing per D-004; staged raise; buffer modelling; investor engagement. |
| Owner | C10 (risk owner: CFO) |
| Status | Open · Treatment: Mitigate |
| Links | D-004 · M1 |

### R-004 — Funding runway shortfall
| Field | Value |
|---|---|
| Category | Financial |
| Description | Equity/debt runway insufficient to reach profitability; launch delayed or curtailed. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | Milestone-based funding tranches tied to gates; cost discipline (CRD resource-cost-governor); sponsor revenue earlier. |
| Owner | C10 |
| Status | Open · Treatment: Mitigate |
| Links | D-001 · M1/M4 |

### R-005 — BEC / bank fraud
| Field | Value |
|---|---|
| Category | Fraud |
| Description | Business email compromise, authorized-push-payment and account-takeover fraud against customers or the bank. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | Real-time transaction monitoring; device/behavioural signatures; payment confirmations; customer awareness; closed-loop learning. |
| Owner | C12 with C16 |
| Status | Open · Treatment: Mitigate |
| Links | D-005 · M7 |

### R-006 — POPIA breach / data leak
| Field | Value |
|---|---|
| Category | Privacy |
| Description | Breach of personal data triggering Information Regulator notification, fines and reputational harm. |
| L / I / Score / Band | 3 / 5 / **15** / Critical |
| Mitigation | Encryption, least privilege, DLP, breach runbook, POPIA s72 cross-border controls (D-002); regular access review. |
| Owner | C01 (risk owner: Information Officer) |
| Status | Open · Treatment: Mitigate |
| Links | D-002 · M7 |

### R-007 — AML / FICA enforcement
| Field | Value |
|---|---|
| Category | Regulatory |
| Description | Inadequate AML/CFT/CPF controls lead to FIC findings, directives or sanctions post grey-list exit. |
| L / I / Score / Band | 3 / 5 / **15** / Critical |
| Mitigation | RMCP; CDD/EDD; TFS screening; STR/CTR pipelines; independent AML audit; training. |
| Owner | C01 with C12 |
| Status | Open · Treatment: Mitigate |
| Links | D-004 · M7 |

### R-008 — Talent scarcity
| Field | Value |
|---|---|
| Category | People |
| Description | Shortage of scarce SA skills (payments, core banking, security, data) delays build and inflates cost. |
| L / I / Score / Band | 4 / 3 / **12** / High |
| Mitigation | Compelling mission/equity; partner/vendor leverage; cross-council mentoring; realistic scope. |
| Owner | C05 (risk owner: Chief People Officer) |
| Status | Open · Treatment: Mitigate |
| Links | M5/M6 |

### R-009 — Payment rail access
| Field | Value |
|---|---|
| Category | Operational |
| Description | Failure to secure clearing/settlement or PayShap/instant-payment access in time. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | Sponsor-based rail access early; confirm PSMB→SARB transition impact; contingency rails. |
| Owner | C16 |
| Status | Open · Treatment: Mitigate |
| Links | M3 |

### R-010 — Cloud residency / cross-border data
| Field | Value |
|---|---|
| Category | Technology |
| Description | Production data processed outside SA without adequate POPIA safeguards; or in-region capacity/SoC constraints. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Target SA region (D-002); cross-border transfer mechanisms if needed; data-flow mapping. |
| Owner | C06 with C01 |
| Status | Open · Treatment: Mitigate |
| Links | D-002 · M5 |

### R-011 — Scope creep / over-scoped MVP
| Field | Value |
|---|---|
| Category | Operational |
| Description | MVP expands beyond D-005, delaying pilot and diluting quality. |
| L / I / Score / Band | 4 / 3 / **12** / High |
| Mitigation | Frozen D-005 scope; change control via C15 product authority; gate discipline. |
| Owner | C15 |
| Status | Open · Treatment: Mitigate |
| Links | D-005 · M6 |

### R-012 — Downtime / availability
| Field | Value |
|---|---|
| Category | Operational |
| Description | Outage of core/payments harms customers and trust; SLA breach. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | HA architecture, DR/BCP tested, capacity headroom, incident response, error budgets. |
| Owner | C02 with C06 |
| Status | Open · Treatment: Mitigate |
| Links | M8/M12 |

### R-013 — Model risk
| Field | Value |
|---|---|
| Category | Credit |
| Description | Fraud/credit models mis-specified or unmonitored drive losses or unfair outcomes. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Model validation, monitoring, governance, human review; fairness checks. |
| Owner | C12 with C10 |
| Status | Open · Treatment: Mitigate |
| Links | D-005 |

### R-014 — Competition
| Field | Value |
|---|---|
| Category | Market |
| Description | TymeBank, Discovery Bank, Bank Zero, OM Bank and wallet/MoMo challengers out-compete on price/reach; adoption below forecast. |
| L / I / Score / Band | 4 / 3 / **12** / High |
| Mitigation | Differentiated under-served-segment focus; low cost-to-serve; fast UX; partnerships. |
| Owner | C04 with C09 |
| Status | Open · Treatment: Mitigate |
| Links | M11 |

### R-015 — AML supervisory intensity post grey-list exit
| Field | Value |
|---|---|
| Category | Regulatory |
| Description | After FATF grey-list exit (Oct 2025), supervision remains intense; higher expectations on new entrants. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Above-baseline AML programme; independent audit; regulator engagement. |
| Owner | C01 |
| Status | Open · Treatment: Mitigate |
| Links | R-007 |

### R-016 — Funding cost / interest-rate exposure
| Field | Value |
|---|---|
| Category | Financial |
| Description | Adverse rate moves raise funding cost and compress margin. |
| L / I / Score / Band | 3 / 3 / **9** / Medium |
| Mitigation | Asset-liability management; funding diversification; pricing review. |
| Owner | C10 |
| Status | Open · Treatment: Monitor/Mitigate |

### R-017 — Credit risk
| Field | Value |
|---|---|
| Category | Credit |
| Description | If lending is in scope, unsecured consumer credit losses exceed appetite. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Affordability assessment (NCA); conservative policy; phased product rollout. |
| Owner | C10 with C16 |
| Status | Open · Treatment: Mitigate |
| Links | D-005 (lending deferred) |

### R-018 — Supplier / vendor concentration
| Field | Value |
|---|---|
| Category | Supplier |
| Description | Concentration risk in a key vendor (cloud, core, KYC, card processor). |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Multi-vendor strategy where feasible; exit plans; vendor risk reviews. |
| Owner | C02 with C06 |
| Status | Open · Treatment: Transfer + Mitigate |

### R-019 — Cyber attack / ransomware
| Field | Value |
|---|---|
| Category | Cyber |
| Description | Ransomware or targeted intrusion disrupts operations or exfiltrates data. |
| L / I / Score / Band | 4 / 5 / **20** / Critical |
| Mitigation | Hardening, segmentation, backups, IR playbook, pen-testing, zero-trust access. |
| Owner | C12 |
| Status | Open · Treatment: Mitigate |
| Links | R-006 |

### R-020 — Insider fraud / privileged abuse
| Field | Value |
|---|---|
| Category | Fraud |
| Description | Internal actors abuse access for fraud or data theft. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Least privilege, segregation of duties, monitoring, vetting, audit trails. |
| Owner | C12 with C05 |
| Status | Open · Treatment: Mitigate |

### R-021 — Mis-selling / conduct risk
| Field | Value |
|---|---|
| Category | Conduct |
| Description | Product communications or sales mislead customers; FAIS/COFI/Code of Banking Practice breach. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Conduct governance; disclosure standards; complaints handling; NFO membership. |
| Owner | C01 with C09 |
| Status | Open · Treatment: Mitigate |
| Links | M11 |

### R-022 — Reputational damage
| Field | Value |
|---|---|
| Category | Strategic |
| Description | A public incident (fraud, breach, outage, mis-selling) damages trust for a brand-new bank. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Crisis communications; transparency; rapid remediation; customer advocacy. |
| Owner | C09 with SC |
| Status | Open · Treatment: Mitigate |

### R-023 — Key-person dependency
| Field | Value |
|---|---|
| Category | People |
| Description | Critical knowledge held by few individuals; departure stalls work. |
| L / I / Score / Band | 4 / 3 / **12** / High |
| Mitigation | Documentation (C03 knowledge capture); succession; cross-training. |
| Owner | C05 with C03 |
| Status | Open · Treatment: Mitigate |

### R-024 — Regulatory framework change
| Field | Value |
|---|---|
| Category | Regulatory |
| Description | COFI Bill enactment or the draft non-bank payments framework finalisation changes obligations mid-launch. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Framework-mapping (COFI readiness); monitor SARB/FSCA; flexible architecture. |
| Owner | C01 with C16 |
| Status | Open · Treatment: Mitigate |
| Links | M11 |

### R-025 — Operational single point of failure
| Field | Value |
|---|---|
| Category | Operational |
| Description | A single component (core, ledger, auth service) is a SPOF for the whole platform. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Redundancy, failover, chaos testing, dependency mapping. |
| Owner | C06 with C02 |
| Status | Open · Treatment: Mitigate |
| Links | R-012 |

### R-026 — Adoption below forecast
| Field | Value |
|---|---|
| Category | Market |
| Description | Customer acquisition and activation underperform; unit economics fail to close. |
| L / I / Score / Band | 4 / 4 / **16** / Critical |
| Mitigation | Pilot validation; low cost-to-serve; partnerships; retention focus. |
| Owner | C04 with C14 |
| Status | Open · Treatment: Mitigate |
| Links | M10/M11 |

### R-027 — FX / ADLA exposure
| Field | Value |
|---|---|
| Category | Financial |
| Description | If forex products are offered, ADLA conditions/limits and FX exposure create compliance and loss risk. |
| L / I / Score / Band | 2 / 3 / **6** / Medium |
| Mitigation | Defer forex from MVP; ADLA category review if pursued. |
| Owner | C10 with C16 |
| Status | Open · Treatment: Avoid (for MVP) |

### R-028 — Data quality
| Field | Value |
|---|---|
| Category | Data |
| Description | Poor data quality undermines reporting (BA returns), monitoring and decisions. |
| L / I / Score / Band | 3 / 3 / **9** / Medium |
| Mitigation | Data governance, lineage, quality SLOs, validation at source. |
| Owner | C06 with C10 |
| Status | Open · Treatment: Mitigate |

### R-029 — Crypto / CASP regulatory uncertainty
| Field | Value |
|---|---|
| Category | Regulatory |
| Description | Crypto-enabled product lines face shifting CASP/travel-rule obligations. |
| L / I / Score / Band | 3 / 3 / **9** / Medium |
| Mitigation | Defer crypto from MVP; monitor FSCA CASP regime; C13 rulings. |
| Owner | C13 with C01 |
| Status | Open · Treatment: Avoid (for MVP) |

### R-030 — Macro / economic downturn
| Field | Value |
|---|---|
| Category | Macro |
| Description | SA macro stress (rates, unemployment, consumer strain) raises credit losses and lowers deposits. |
| L / I / Score / Band | 3 / 4 / **12** / High |
| Mitigation | Conservative underwriting; stress testing; diversified funding; cost flexibility. |
| Owner | C10 |
| Status | Open · Treatment: Monitor/Mitigate |

---

## Register index (by band)

| Band | Risks |
|---|---|
| **Critical (15–25)** | R-001, R-002, R-003, R-004, R-005, R-006, R-007, R-009, R-012, R-019, R-026 |
| **High (10–14)** | R-008, R-010, R-011, R-013, R-014, R-015, R-017, R-018, R-020, R-021, R-022, R-023, R-024, R-025, R-030 |
| **Medium (5–9)** | R-016, R-027, R-028, R-029 |

**Total: 30 risks** (11 Critical · 15 High · 4 Medium · 0 Low) — a deliberately conservative greenfield baseline.

> Scores are **ex ante planning estimates** (likelihood/impact before mitigation shown separately). Residual scores after treatment are maintained at each gate review. All Open risks above appetite require a Level-3 decision to accept (see [`README.md`](./README.md)).
