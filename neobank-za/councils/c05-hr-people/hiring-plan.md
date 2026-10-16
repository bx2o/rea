# C05 — Hiring Plan (by Phase)

- **Owner:** C05 Chief People Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Structure:** [`org-design.md`](./org-design.md)
- **Grounding:** `../../research/regulatory/banking-licensing.md` §4, `../../research/regulatory/conduct-fais-nca.md` §2.2, `../../research/regulatory/licensing-roadmap.md`

> **No salaries are stated.** Compensation is an `[OPEN ITEM]` requiring a South African reward benchmark. Headcounts are `[ASSUMPTION]` placeholders. Role descriptions below are **capability statements**, not job adverts.

---

## 1. Regulator "fit-and-proper" roles (non-negotiable)

These roles are assessed by the Prudential Authority and/or FSCA for competence and integrity. They must exist (or be interim-appointed) before the corresponding regulatory filing.

| Role | Regulator basis | Why it must be early | Council |
|---|---|---|---|
| Directors (incl. independent NEDs) | Banks Act fit-and-proper; King IV | Board seated before s12 filing | SC / board |
| CEO | Banks Act fit-and-proper | Signs the authorisation application | EXEC |
| Chief Compliance Officer / MLCO | FICA RMCP; FSCA fit-and-proper | Draft RMCP is a Phase-0 gate | C01 |
| Risk Officer / CRO | Banks Act risk framework | Risk framework required for s12 | C12/C01 |
| **Internal audit** lead / outsourced auditor | Audit committee (s94) oversight; King IV | Independent assurance from build | C01/C10 |
| **External auditor** | Companies Act s94; PA expectations | Appointed by audit committee | C10 |
| Compliance Officer (FICA) | FICA accountable-institution obligation | RMCP owner | C01 |
| Information Officer (+ Deputy IOs) | POPIA s55 | Must be registered before duties | C01/C03 |
| Key Individuals (FAIS, if any advice/intermediary/crypto) | FAIS; BN 194 of 2017 | Needed for FSP licence + RE exams | C01/C16 |
| Money-Laundering Compliance Officer functions | FICA | Sanctions/reporting ownership | C01 |

> Per `../../research/regulatory/banking-licensing.md` §4 and `../../research/regulatory/conduct-fais-nca.md` §2.2. **Fit-and-proper includes regulatory exams (RE1/RE3 for KIs, RE5 for representatives)** for FAIS-related roles.

---

## 2. Hiring sequence (Phase 0 → Phase 3)

### Phase 0 — Foundations (Months 0–3)
| # | Role | Council | Priority |
|---|---|---|---|
| H01 | Chair (independent) | Board | blocker |
| H02 | Independent NEDs (2–3) | Board | blocker |
| H03 | CEO | EXEC | blocker |
| H04 | Interim Compliance Officer / MLCO | C01 | blocker |
| H05 | Information Officer (POPIA) | C01/C03 | blocker |
| H06 | Company Secretary / governance | C01 | high |
| H07 | Interim CFO (capital strategy) | C10 | high |

**Gate:** board seated; IO registered; draft RMCP; credible capital plan (`../../research/regulatory/licensing-roadmap.md`).

### Phase 1 — Applications (Months 3–9)
| # | Role | Council | Priority |
|---|---|---|---|
| H08 | Chief Compliance Officer (permanent) | C01 | blocker |
| H09 | Risk Officer / CRO | C12/C01 | blocker |
| H10 | AML Officer (RMCP + reporting) | C01 | blocker |
| H11 | CFO (permanent) | C10 | blocker |
| H12 | CTO | C06 | blocker |
| H13 | Head of Payments / Rails | C16/C02 | high |
| H14 | Regulatory Affairs / licensing manager | C01 | high |
| H15 | Head of People (CPO) | C05 | high |

### Phase 2 — Build (Months 6–18)
| # | Role | Council | Priority |
|---|---|---|---|
| H16 | Head of Treasury | C10 | high |
| H17 | Financial Controller / BA-return owner | C10 | high |
| H18 | Backend/platform engineers (core ledger, payments) | C11 | high |
| H19 | Security engineers / CISO-track | C12 | high |
| H20 | Data engineers / data governance | C06/C12 | medium |
| H21 | Product manager (banking) | C15 | medium |
| H22 | Operations leads (recon, dispute, card) | C02 | high |
| H23 | Internal audit capability | C01 | high |
| H24 | Solution/enterprise architects | C06/C11 | medium |

### Phase 3 — Launch & scale (Months 12–24)
| # | Role | Council | Priority |
|---|---|---|---|
| H25 | Customer Success / contact-centre lead | C14 | high |
| H26 | Growth/marketing lead | C09 | high |
| H27 | BPO vendor manager | C02 | medium |
| H28 | Credit/collections specialists | C10/C07 | medium |
| H29 | Fraud ops analysts | C12/C02 | high |
| H30 | Web3/digital-asset lead (if in scope) | C13 | medium |

---

## 3. Role capability descriptions (selected)

**H04/H08 — Chief Compliance Officer / MLCO (C01).** Owns the RMCP, FICA accountable-institution obligations, conduct framework, and fit-and-proper register. Must understand Banks Act, FICA, POPIA, FAIS and NCA interplay. Evidence: professional compliance qualification + track record in a regulated SA financial institution `[ASSUMPTION]`.

**H09 — Risk Officer / CRO (C12/C01).** Owns enterprise risk framework, credit risk policy, operational risk, and stress testing inputs to CAR/LCR/NSFR. Aligns to Basel III/IV post-2025 framework (`../../research/regulatory/banking-licensing.md` §5).

**H13 — Head of Payments / Rails (C16/C02).** Owns clearing/settlement participation design, ISO 20022 and PayShap readiness, sponsor-bank relationship (`../../research/regulatory/payments-nps.md`).

**H17 — Financial Controller / BA-return owner (C10).** Owns BA 100/200/210/700 production and sign-off (`../c10-finance-cfo/financial-controls.md`).

**H30 — Web3/digital-asset lead (C13).** Owns crypto/stablecoin regulatory posture and FSCA/FIC gates (`../c13-web3-finance/README.md`).

---

## 4. Sourcing & employer brand

- **Channels `[ASSUMPTION]`:** specialist networks (banking compliance/risk), engineering communities, referrals, targeted search for fit-and-proper roles.
- **Employer brand:** anchored in culture (`culture-and-values.md`) — trust, craft, inclusion. Avoid overpromising; a licensed bank's brand risk is reputational *and* regulatory.
- **Assessment:** structured interviews + work samples; for fit-and-proper roles, integrity due diligence is mandatory and documented.

---

## 5. Fit-and-proper governance

- Maintain a **fit-and-proper register** (role, incumbent, competence evidence, exam status, review date).
- **RE exams** completed before the relevant licence reliance (`../../research/regulatory/conduct-fais-nca.md` §2.2).
- **Ongoing:** annual competence review; immediate review on adverse integrity events.

---

## 6. Open items / unknowns

- `[OPEN ITEM]` **Compensation bands** — requires SA market data (reward survey). Not stated here.
- `[ASSUMPTION]` Headcount ranges are placeholders pending C10's cost model.
- `[UNKNOWN]` Final KI/exam matrix depends on the licence stack actually pursued (bank + FSP + NCR).

---

## 7. Cross-links

- Structure → [`org-design.md`](./org-design.md)
- Capability building → [`learning-and-development.md`](./learning-and-development.md)
- Regulatory roles → `../c01-legal-compliance/`, `../../research/regulatory/banking-licensing.md`
- Cost model → `../c10-finance-cfo/financial-model.md`
