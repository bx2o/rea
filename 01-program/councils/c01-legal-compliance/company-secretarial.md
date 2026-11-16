# C01 — Company Secretarial

- **Owner:** C01 Legal-Compliance Captain (Company Secretary function) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Governance grounding:** [`../../research/regulatory/tax-governance.md`](../../research/regulatory/tax-governance.md) §6–7
- **Board governance:** [`../../program/governance/authority-matrix.md`](../../program/governance/authority-matrix.md)

> **Purpose.** The company-secretarial function keeps the *entity* lawful and the *board* effective: statutory registers, CIPC filings, board/committee servicing, and the **delegations of authority** that let agents and councils act on the company's behalf. In a bank, this function is not administrative overhead — the **audit committee (s94)** and **social & ethics committee (s72)** are statutory, and the PA assesses governance as part of licensing (`../../research/regulatory/banking-licensing.md` §4).

---

## 1. Why it matters for a bank

The Prudential Authority will assess **governance, board composition and functioning, risk management and internal controls** as part of the licensing case. Company secretarial discipline is therefore a **licensing input**, not a nicety. King IV is a **voluntary "apply-and-explain"** standard, but it is effectively mandatory in practice for financial institutions and is referenced by PA/FSCA expectations.

---

## 2. Entity & structure

| Item | Requirement | Weight |
|---|---|---|
| **Legal form** | A bank must be a **public company** under the Companies Act 71 of 2008 | [STATUTE] |
| **CIPC registration** | Registration of company, directors, registered address, annual returns | [STATUTE] |
| **Controlling company** | Only a bank or a PA-approved public company may control the bank; must be registered under Banks Act **s42** | [STATUTE] |
| **Significant ownership** | No person may acquire **>15%** without PA/Minister permission; owners must be fit-and-proper | [STATUTE] |
| **Name restriction** | Use of the word "bank" requires written PA authorisation | [STATUTE] |

---

## 3. Board & committees

Establish and service (per King IV + Companies Act):

| Body | Basis | Core remit |
|---|---|---|
| **Board of directors** | Companies Act / King IV | Strategy, oversight, risk appetite, licence conditions |
| **Audit committee** | Companies Act **s94** (mandatory for public companies) | Financial-control integrity, external auditor oversight, BA-return review |
| **Risk & capital committee** | King IV / PA expectation | Risk appetite, capital/liquidity, large exposures (D14/2025) |
| **Social & ethics committee** | Companies Act **s72** (mandatory for public/state-owned; **≥3 members**, majority non-executive `[CONFIRM]` 2024 amendments) | Social/economic development, ethics, consumer relationships, labour |
| **Remuneration & nominations** | King IV | Remuneration policy, fit-and-proper appointments |
| **Board credit committee** | D14 of 2025 `[CONFIRM]` | Exposures > 10% Tier 1 capital |

**Fit-and-proper.** Directors/executives must meet the Banks Act/Regulations standards (competence, integrity, no disqualifying conduct). Where a **Key Individual** is required for FSP activities, RE1/RE3 competence requirements apply (`../../research/regulatory/conduct-fais-nca.md` §2.2).

---

## 4. Statutory registers & records

Maintain (and make available for inspection as required):

- Register of **directors and officers** (appointments, resignations, disqualifications).
- Register of **shareholders** and beneficial owners (aligned to the CIPC beneficial-ownership register; **5% threshold** under Companies Act regulations — *distinct from FICA, do not conflate*).
- Register of **company records**: minutes of board and committee meetings; resolutions.
- **Delegations of authority** register (§6).
- **Contract register** (shared with [`contract-review-process.md`](./contract-review-process.md)).
- **Regulatory correspondence** register (PA/SARB/FSCA/FIC/Information Regulator).

All records retained per [`../c03-admin-knowledge/records-and-retention.md`](../c03-admin-knowledge/records-and-retention.md).

---

## 5. Statutory filings & cadence

| Filing | Body | Cadence / deadline | Owner |
|---|---|---|---|
| Annual returns | CIPC | Annual | Company Secretary |
| Changes to directors/address/MOIs | CIPC | Within statutory window | Company Secretary |
| Beneficial-ownership register update | CIPC | On change | Company Secretary |
| Audit-committee / social-&ethics reports | Shareholders (AGM) | Annual (AGM) | Board |
| PA/FSCA regulatory notifications | PA/FSCA | On change / on request | C01 + C16 |
| **PAIA annual report** | Information Regulator | **1 Apr – 30 Jun** | C01 (IO) |
| **BA returns / AEOI** | PA / SARS | Per submission calendar | C10 |

> Deadlines marked with a source are `[STATUTE]`/`[REG]`; others are planning targets. PAIA window is from `../../research/regulatory/privacy-popia.md` §9.

---

## 6. Delegations of authority

The board delegates defined authority to executives, councils and agents. This is what lets **councils (C01–C16)** and **agents (AGT-\*)** act without a fresh board resolution each time.

- **Levels.** Board → CEO → Council Captain → Agent, with explicit monetary and risk thresholds at each level.
- **Alignment.** Delegations align to the program authority matrix ([`../../program/governance/authority-matrix.md`](../../program/governance/authority-matrix.md)) and the decision log (`../../program/governance/decision-log.md`); a strategic decision **not** in the log is **not** a decision.
- **High-risk actions** (contracts above threshold, money/data releases, regulatory filings, exceptions to gates) require the delegated **maker-checker** pair — initiator ≠ approver.
- **Review.** Delegations are reviewed at least annually and on any change of officer; the register records the delegation, holder, scope, limits and validity.

---

## 7. Serving the board

- **Agenda & papers.** Circulated with adequate notice; decisions minuted with the **rationale** and the accountable officer.
- **Committee cycle.** Board + committees meet on a defined annual calendar; a **forward agenda** ensures licence conditions, risk appetite and audit items are covered.
- **Directors' duties.** Advise the board on fiduciary duties, conflicts of interest and the Companies Act s76 standard of care.
- **Board orientation** on the licence perimeter, risk register and regulatory obligations.

---

## 8. Interlocks

| Interlock | Contract |
|---|---|
| C10 finance | Audit-committee support; BA-return review; tax governance (`../c10-finance-cfo/financial-controls.md`). |
| C03 records | Retention of minutes, registers and filings (`../c03-admin-knowledge/records-and-retention.md`). |
| C16 licensing | Governance evidence for the PA licensing case (`../c16-banking-fintech/README.md`). |
| C12 risk | Risk-committee inputs; risk-register ownership (`../../program/risk/risk-register.md`). |
| Program | Authority matrix + decision log (`../../program/governance/`). |

---

## 9. Open items / unknowns

- `[CONFIRM]` Commencement status of the **2024 Companies Act amendments** (s72(7A)) (`../../research/regulatory/tax-governance.md` §10).
- `[CONFIRM]` Exact governance evidence format the **PA** expects in a de-novo licensing pack.
- `[ASSUNMPTION]` Committee structure above is a King IV-aligned starting point; final shape depends on the licence route (D-004).

_Codename `Project Umoya` is a working label only._
