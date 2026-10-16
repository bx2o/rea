# C01 — Contract Review Process

- **Owner:** C01 Legal-Compliance Captain · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Register:** [`regulatory-obligation-register.md`](./regulatory-obligation-register.md)
- **Vendor grounding:** [`../../architecture/integrations/third-party-catalogue.md`](../../architecture/integrations/third-party-catalogue.md)

> **Purpose.** Every material contract the NeoBank signs — vendor, partner, sponsor bank, or customer terms & conditions — is reviewed before signature against a fixed **clause checklist** and recorded in the **contract register**. The review is a control: no money/data surface goes live behind an unreviewed contract (this is the legal half of gate **G-COMP**).

---

## 1. Scope & triggering events

A contract review is triggered by any of:

- a **new vendor** (payment, KYC, cloud, comms, data) from the third-party catalogue;
- a **contract renewal or material amendment** (price, term, data flows, sub-processors);
- a **sponsor-bank, BIN-sponsor or rail agreement**;
- **customer terms & conditions**, pricing schedules and consents;
- any agreement that moves **personal information** or **money**, or that touches a **regulated activity**.

**Triage tiers** (set the review depth):

| Tier | Example | Review depth | Sign-off |
|---|---|---|---|
| **T1 — Critical** | Sponsor bank, card scheme, clearing, cloud, core | Full legal + C12 + C10 + C16 | C01 captain |
| **T2 — Standard** | KYC/bureau vendor, comms, analytics | Full legal + C12 security annex | C01 delegate |
| **T3 — Light** | Tools with no PII/no money (e.g. BI) | Clause checklist + residency question | C01 delegate |

---

## 2. Clause checklist (applies to all vendor/partner contracts)

| # | Clause area | What we require | Driver |
|---|---|---|---|
| 1 | **Data protection & POPIA** | Operator (s20/s21) terms; lawful-basis alignment; breach-notification flow back to us "as soon as reasonably possible" | POPIA `[STATUTE]` |
| 2 | **Cross-border / residency (s72)** | Where data is processed/stored; a s72 basis (BCR / binding agreement / SCCs) if offshore; onward-transfer duties | POPIA s72 `[STATUTE]`; D-002 |
| 3 | **Security schedule** | ISO 27001/SOC 2 evidence; encryption; access control; right to audit; pen-test disclosure | Controls `VND-01..06` |
| 4 | **Availability & SLA** | Uptime, support, RTO/RPO, service credits | [`../../architecture/system-design/non-functional-requirements.md`](../../architecture/system-design/non-functional-requirements.md) |
| 5 | **Outsourcing / materiality** | Notification of material change; PA-facing outsourcing expectations; sub-processor (fourth-party) approval | PA outsourcing `[REG-GUIDE]` |
| 6 | **Concentration & exit** | Data export format; portability; exit assistance; termination for convenience on breach | Risk R-018 |
| 7 | **Financial-crime cooperation** | Support for CDD/screening/reporting; not a "tipping-off" exposure | FICA `[STATUTE]` |
| 8 | **Conduct & fair treatment** | Fair T&Cs, disclosure, complaint routing to the NFO where relevant | FAIS/NCA/CPA/Code `[STATUTE]/[INDUSTRY]` |
| 9 | **Commercials** | Pricing model, FX exposure, escalation caps, tax (VAT), audit of fees | C10 |
| 10 | **Governing law & dispute** | SA law and jurisdiction preferred; ombud/regulator routing | C01 |
| 11 | **IP & licence** | Rights to use, no hidden encumbrance; open-source licence compatibility | C11/C12 |
| 12 | **Termination & survival** | Termination triggers; surviving confidentiality/data-deletion duties | C01/C12 |

---

## 3. Customer terms & conditions (a distinct track)

Customer T&Cs are **product-facing conduct documents**, so they get an additional pass:

- **Plain-language + disclosure** review against the Code of Banking Practice (2025 edn) and CPA.
- **Fee/pricing schedule** consistency with the product catalogue ([`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md)).
- **Consent capture** wording for POPIA lawful bases and cross-border transfers.
- **Complaint and ombud routing** (NFO) stated clearly.
- **Termination, variation and debicheck mandate** terms aligned to rails rules.

T&Cs are versioned; each version is recorded with an effective date and the approving officer (see [`../../templates/decision-record.md`](../../templates/decision-record.md) pattern for change records).

---

## 4. Process

```text
REQUEST → TRIAGE → REVIEW → NEGOTIATE → SIGN-OFF → REGISTER → RETAIN
```

| Step | Owner | Output |
|---|---|---|
| **1 Request** | Requesting council | Contract + data-flow description |
| **2 Triage** | C01 | Tier (T1/T2/T3) |
| **3 Review** | C01 (+C12 for security, +C10 for commercials) | Redline + clause checklist result |
| **4 Negotiate** | Requesting council (C01 advises) | Revised draft |
| **5 Sign-off** | Per tier (§1) | Approval record |
| **6 Register** | C01 | Contract-register entry |
| **7 Retain** | C03 | Filed per retention schedule |

**Turnaround targets** `[TARGET]`: T3 ≤ 3 business days; T2 ≤ 5 business days; T1 ≤ 10 business days (excluding counterparty negotiation delays). Breaches escalate per the council SLA.

---

## 5. Vendor due diligence (security & compliance annex)

Before signature, C01 and C12 complete the due-diligence checklist from the third-party catalogue (`../../architecture/integrations/third-party-catalogue.md` §9): residency, certifications, breach history, PCI/FICA posture, sub-processors, SLA, exit, SA presence. Results are attached to the contract-register entry. No **Critical**-tier vendor signs without this annex.

---

## 6. Contract register

Every executed contract (and every material amendment) is recorded in a register with at least:

| Field | Meaning |
|---|---|
| `contractId` | Unique ID |
| Counterparty | Vendor/partner/sponsor/customer-T&C |
| Tier | T1/T2/T3 |
| Category | Payment / KYC / cloud / comms / data / partner |
| Value & term | Fees, dates, renewal |
| Data class | Personal info? money? both? |
| Residency | In-region / offshore + s72 basis |
| Security annex | Y/N + date |
| Owner council | Accountable council |
| Next review | Renewal/amendment date |

The register links to the regulatory-obligation register and the risk register. Retention follows `../c03-admin-knowledge/records-and-retention.md`.

---

## 7. Escalation

- A clause that **cannot** be obtained (e.g. no s72 basis, no right-to-audit) → **do not sign**; escalate to C01 captain; document as an accepted risk only with a Level-3 decision (see `../../program/governance/decision-log.md`).
- A contract that would breach law → binding **veto** under C01's special authority; escalate per `../../program/governance/escalation-protocols.md` (High 4h / Medium 24h).

---

## 8. Open items / unknowns

- `[UNKNOWN]` Current PA **outsourcing/cloud directive** text and any local-residency conditions (`../../architecture/security/third-party-and-cloud-risk.md`).
- `[UNKNOWN]` Final **non-bank payment** framework's effect on sponsor/partner contract terms (`../../research/regulatory/payments-nps.md` §3).
- `[ASSUMPTION]` Turnaround targets above are planning values, not commitments.

_Codename `Project Umoya` is a working label only._
