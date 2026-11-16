# C02 — Day-to-Day Operating Model

- **Owner:** C02 VP Operations · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Processes:** [`process-catalogue.md`](./process-catalogue.md) · **Targets:** [`service-levels.md`](./service-levels.md)
- **Grounding:** `../../research/regulatory/payments-nps.md`, `../../research/regulatory/aml-fica.md`, `../../research/regulatory/conduct-fais-nca.md`

> All monetary/time figures below are `[ASSUMPTION]` or `[TARGET]`. None is measured.

---

## 1. Operating philosophy

1. **Reconcile-first.** Every value that enters the bank must be matched to a counterparty statement before it is considered settled. An unreconciled balance is an incident, not a rounding error.
2. **Maker-checker everywhere money or customer data moves.** No single operator can both initiate and release.
3. **Cut-offs are law.** Payment and settlement cut-offs are fixed by clearing rules, not by convenience.
4. **Evidence, then action.** Every break, dispute or complaint leaves an immutable record (see `../c03-admin-knowledge/records-and-retention.md`).
5. **Sponsor-aware.** Until the bank is a direct clearing/settlement participant, Ops runs on a sponsor bank's rails and must meet *their* rulebook as well as ours (`../../research/regulatory/payments-nps.md` §112).

---

## 2. Reconciliation

**Objective:** prove that internal balances equal external reality on a defined cadence.

| Layer | What is reconciled | Frequency `[TARGET]` | Owner |
|---|---|---|---|
| Customer sub-ledger ↔ core ledger | per-account balances | intraday / EOD | Recon Ops |
| Core ledger ↔ matching account at partner/sponsor bank | aggregate balances | daily | Recon Ops |
| Internal ↔ scheme/scheme-file | payment files in/out | per batch | Payments Ops |
| Internal ↔ card processor files | authorisations, clearing, settlement | daily | Card Ops |
| Internal ↔ ATM/cash-acceptor | cash-in/cash-out | daily | Cash Ops |
| Suspense/nostro accounts | unallocated entries | daily | Recon Ops |

**Controls:**
- **Suspense aging:** any item in suspense beyond a defined age `[ASSUMPTION: 3 business days]` escalates to a break owner and is reported to C10.
- **Four-eyes override:** a reconciliation sign-off requires preparer + independent reviewer.
- **Break register:** every unmatched item is logged with root cause and closure date; no silent write-offs.
- **Output to C10:** daily recon pack feeds the GL and BA-return inputs (`../c10-finance-cfo/financial-controls.md`).

---

## 3. Settlements & clearing

**Objective:** obligate and discharge interbank value on the correct rail, on time.

- **Rails in scope `[ASSUMPTION]`:** low-value retail real-time (PayShap, ISO 20022), account-to-account EFT, card schemes, and (if licensed) high-value RTGS.
- **Participation model `[ASSUMPTION]`:** launch via **sponsor bank**; direct SARB settlement account and clearing membership pursued post-licence (`../../research/regulatory/payments-nps.md` §110–114).
- **Cut-offs:** defined per rail in `process-catalogue.md`; missed cut-offs are recorded incidents with client-notification rules.
- **Settlement account:** HQLA held in South Africa; settlement integrity is a joint C02/C10/C16 responsibility (`../../research/regulatory/banking-licensing.md` §5).
- **Rulebook dependency:** clearing rules currently administered via PSMB, transitioning to the SARB with a key milestone of **11 Aug 2026** `[regulator source]` (`../../research/regulatory/payments-nps.md` §1) — Ops must re-baseline cut-offs and message formats as this lands.

---

## 4. Chargebacks & disputes

**Objective:** resolve disputed transactions within scheme, NCA and ombud rules, and learn from them.

| Stage | Description | Owner | Target `[TARGET]` |
|---|---|---|---|
| S1 Capture | Customer raises dispute (any channel) | C14 → Dispute Ops | ack 4h |
| S2 Triage | Classify (fraud / non-receipt / unauthorised / goods) | Dispute Ops | 1 business day |
| S3 Provisional | Apply scheme provisional credit rules | Dispute Ops | per scheme |
| S4 Investigation | Gather evidence, contact parties | Dispute Ops + C12 | 10 business days |
| S5 Representation | Chargeback / representment cycle | Dispute Ops | per scheme |
| S6 Final | Resolve, load to ledger, notify customer | Dispute Ops → C10 | 20 business days |
| S7 Learning | Root-cause → fraud/product feedback | Ops + C12 + C15 | monthly review |

**Controls:** scheme-timeline tracking; no dispute closed without a customer-notification artefact; **NFO** escalation path documented (`../../research/regulatory/conduct-fais-nca.md` §6).

---

## 5. Card operations

- **Lifecycle:** card ordering, embossing/tokenisation, activation, PIN set/reset, replacement, block/unblock, closure.
- **Authorisation ops:** real-time rules owned by C12; Ops owns exception handling (holds, reversals, force-post).
- **3-D Secure & tokenisation:** merchant/device token lifecycle; dispute interactions handled with §4.
- **Cash & ATM:** cash-in/cash-out reconciliation per §2.
- **Auth-to-clear control:** every authorisation is matched to a clearing record or expired per rules; unmatched authorisations are breaks.

---

## 6. Complaints operations

**Objective:** treat complaints as a regulated obligation *and* a product signal.

- **Intake channels:** app, web, WhatsApp, call, email, NFO referrals.
- **Categorisation:** conduct, fees, fraud, service, product.
- **Regulatory frame:** Code of Banking Practice + NFO jurisdiction; complaints handling must be fair and must inform customers of the ombud (`../../research/regulatory/conduct-fais-nca.md` §5–6).
- **Controls:** every complaint gets a reference; deadlines tracked; systemic themes routed to C15 (product) and C01 (conduct risk).
- **Output:** monthly complaints register → C01 (conduct) and C10 (provisions for redress).

---

## 7. Back-office processing

Covers the human/exception work a straight-through pipeline still throws off:

- Manual KYC remediation queues and EDD escalations (`../../research/regulatory/aml-fica.md` §3).
- Failed-payment repair and beneficiary correction.
- Statement/report generation and ad-hoc client requests.
- Static-data maintenance (client details, mandates) under maker-checker.
- Collections/servicing support for credit (interlock with C10/C07).

---

## 8. BPO & procurement

**Objective:** buy capacity and capability without importing unmanaged risk.

- **BPO (business process outsourcing):** candidate functions `[ASSUMPTION]` — tier-1 contact centre overflow, document/OCR review, collections. All BPO must be **sponsorable** and auditable; offshore BPO raises POPIA cross-border transfer questions (`../../research/regulatory/privacy-popia.md` §6).
- **Procurement:** standardised intake → evaluation → due diligence → contract → onboarding; spend thresholds set an approval level.
- **Segregation-of-duties:** procurement (who buys) is separated from vendor risk (who approves) and payment release (C10).

---

## 9. Vendor / third-party risk management

| Tier `[ASSUMPTION]` | Examples | Due diligence | Review cadence |
|---|---|---|---|
| Critical | core ledger, card processor, sponsor bank, cloud | full DD + BCP test + PA-relevant | annual |
| Material | CRM, KYC vendor, comms | risk-based DD | biennial |
| Standard | tooling, office | self-attestation | triennial |

- **Concentration register:** any single vendor supporting >1 critical process is flagged (see §10 BCP).
- **Exit plans:** every critical vendor has a documented exit/replace plan with a target migration window `[TARGET: ≤6 months]`.
- **Sub-outsourcing:** vendors must disclose their own critical subcontractors.

---

## 10. Business continuity & operational resilience

- **BIA (business impact analysis):** each process in `process-catalogue.md` carries an RTO/RPO `[TARGET]`.
- **Resilience scenarios:** sponsor-bank outage, card-processor outage, cloud-region loss, key-person loss, cyber incident (joint with C12).
- **BCP testing:** at least annual live test of critical-process failover `[TARGET]`.
- **Vendor concentration:** single points of failure are explicitly listed and mitigated or accepted with board visibility.
- **Regulatory reading:** operational resilience expectations align with PA/King IV governance (`../../research/regulatory/tax-governance.md` §6–8).

---

## 11. Cross-links

- Process detail → [`process-catalogue.md`](./process-catalogue.md)
- Targets → [`service-levels.md`](./service-levels.md)
- Money truth → `../c10-finance-cfo/financial-controls.md`
- Insurance of conduct risk → `../c01-legal-compliance/` (C01 captain)
- Records → `../c03-admin-knowledge/records-and-retention.md`
- Routing → `../../workflows/agent-routing.md`
