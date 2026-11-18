# C10 — Financial Controls

- **Owner:** C10 Chief Financial Officer · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Model:** [`financial-model.md`](./financial-model.md) · **Ops recon:** `../c02-operations/operating-model.md` §2
- **Grounding:** `../../research/regulatory/tax-governance.md` §7–8, `../../research/regulatory/aml-fica.md`

> Deadline values marked `[REG]` are sourced from the research pack; confirm against the consolidated instruments. "SOX-like" means the *discipline* of the US Sarbanes-Oxley internal-control framework (COSO), applied volitionally — South Africa does not impose SOX, but the **audit committee (s94)** and PA expectations create equivalent obligations (`../../research/regulatory/tax-governance.md` §7).

---

## 1. Control philosophy

A bank's financial controls must satisfy three masters: the **audit committee**, the **Prudential Authority**, and **basic integrity**. We adopt a COSO-style model: control environment → risk assessment → control activities → information & communication → monitoring.

**Five principles:**
1. **Reconcile-first** (from C02) — no balance is trusted until it ties.
2. **Segregation of duties** — initiate ≠ approve ≠ release ≠ reconcile.
3. **Maker-checker** on every journal, static change and manual payment.
4. **Evidence** — every control leaves a retrievable artefact (C03 retention).
5. **Independent assurance** — internal audit + external auditor, not self-certification.

---

## 2. SOX-like control framework

| Layer | Control | Owner |
|---|---|---|
| Entity-level | board charter, code of conduct, delegation of authority | Board / C10 |
| Entity-level | audit committee (s94) oversight | Audit Committee |
| Process-level | maker-checker, SoD, system access reviews | C10 + C02 |
| Process-level | four-eyes on journals, payments, static data | C10 + C02 |
| IT general controls (ITGC) | access management, change management, backups | C06/C11 |
| Monitoring | reconciliation sign-off, exception reporting | C02 → C10 |
| Independent | internal audit; external audit | C01/C10 |

**Control matrices:** each significant account (cash, deposits, loans, fees, capital) has a control matrix mapping risk → control → test → evidence. These live with the audit committee pack.

---

## 3. Reconciliation controls

- **Daily** three-way reconciliation: internal ledger ↔ operational sub-ledger ↔ external statement (per `../c02-operations/operating-model.md` §2).
- **Suspense accounts** aged and escalated `[ASSUMPTION: > 3 business days]`; no silent write-offs.
- **Nostro / sponsor accounts** reconciled daily.
- **Intercompany / inter-entity** positions reconciled and eliminated.
- **Sign-off:** preparer + independent reviewer; results feed the GL and BA-return inputs.

---

## 4. Journal & ledger controls

- Chart of accounts governed by C10; changes via controlled change record.
- **Manual journals:** dual authorisation above a threshold `[ASSUMPTION]`.
- **Period close:** checklist-based, with a hard-close discipline and a documented close calendar.
- **Accruals & provisions:** documented basis; conduct-redress and credit-loss provisions reviewed by C10 + C01/C12.

---

## 5. Audit

| Audit type | Provider | Cadence `[TARGET]` | Focus |
|---|---|---|---|
| **Internal audit** | in-house or co-sourced | risk-based plan | controls, credit, AML, ITGC |
| **External audit** | independent firm | annual | financial statements; PA/audit-committee reliance |
| **Regulator inspection** | PA / FSCA / FIC | as scheduled | prudential/conduct/AML |
| **AML independent review** | independent | periodic `[TARGET]` | RMCP effectiveness |

- **Audit committee (s94)** appoints/oversees the external auditor and ensures integrity of financial controls `[REG]` (`../../research/regulatory/tax-governance.md` §7).
- Findings tracked in a **remediation register** with owners and due dates.

---

## 6. BA-return reporting calendar

Prudential returns a bank must produce `[REG]` (`../../research/regulatory/tax-governance.md` §8):

| Return | Content | Standard | Tag |
|---|---|---|---|
| **BA 100** | balance sheet | quarterly (verify) | `[REG]` |
| **BA 200 / BA 210** | credit (risk-weighted / impairments) | per PA calendar | `[REG]` |
| **BA 700** | capital adequacy & leverage (reg 38; effective 1 Jul 2025) | per PA calendar | `[REG]` |
| Pillar III disclosure | annual public disclosure | annual | `[REG]` |

> **Open item:** the precise return set and submission frequencies for a *de novo* bank must be confirmed with the PA (`../../research/regulatory/tax-governance.md` §10). The calendar below is a **framework**, not the PA's schedule.

| Frequency `[ASSUMPTION]` | Activity |
|---|---|
| Daily | recon pack, settlement funding check |
| Weekly | MIS pack, exception summary |
| Monthly | management accounts, provision review, CAR/LCR/NSFR indicative |
| Quarterly | BA returns, audit-committee pack |
| Annually | audited financials, Pillar III, tax returns |

---

## 7. Other regulatory reporting (adjacent to C10/C01)

| Obligation | Deadline | Source |
|---|---|---|
| CTR (cash > R49,999.99) | ≤ 3 days | `../../research/regulatory/aml-fica.md` §3.4 |
| STR | 15 days | `../../research/regulatory/aml-fica.md` §3.4 |
| TPR | without delay | `../../research/regulatory/aml-fica.md` §3.4 |
| AEOI (CRS/FATCA; + CARF if crypto) | annual cycles | `../../research/regulatory/tax-governance.md` §4 |
| PAIA annual report | 1 Apr – 30 Jun | `../../research/regulatory/privacy-popia.md` §9 |

---

## 8. Data integrity & lineage

- Every reported number traces to a source system and a control (lineage documented).
- **Reconciliation lineage** links Ops sub-ledger → GL → BA return.
- **Change control** over financial calculation logic (e.g. ECL models, NIM) with version history.
- Interlock with C03 knowledge architecture for records of "what changed and why".

---

## 9. Open items / unknowns

- `[UNKNOWN]` Exact de-novo BA-return set/frequencies — confirm with PA.
- `[ASSUMPTION]` Journal thresholds and suspense aging are placeholders.
- `[UNKNOWN]` Whether D14/2025 large-exposure rules apply at launch and their exact limits (`../../research/regulatory/tax-governance.md` §10).

---

## 10. Cross-links

- Model → [`financial-model.md`](./financial-model.md)
- Capital → [`capital-and-funding.md`](./capital-and-funding.md)
- Ops reconciliation → `../c02-operations/operating-model.md`
- Governance → `../../research/regulatory/tax-governance.md`
- Records retention → `../c03-admin-knowledge/records-and-retention.md`
