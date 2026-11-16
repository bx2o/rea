# C02 — Operational Process Catalogue

- **Owner:** C02 VP Operations · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Mechanics:** [`operating-model.md`](./operating-model.md) · **Targets:** [`service-levels.md`](./service-levels.md)

> **How to read.** Each process has an `ID` (`OPS-###`), an owner role, inputs, outputs, controls, and RTO/RPO `[TARGET]` where relevant. Owners are **roles**, not named people. All thresholds are `[ASSUMPTION]`/`[TARGET]` pending ratification. Process IDs are stable references for change records and evidence ledgers.
>
> **Change rule (from README §2):** any change to a process here must name an RTB owner, update controls, and carry a service-level impact statement.

---

## 1. Catalogue (summary)

| ID | Process | Owner role | Control class |
|---|---|---|---|
| OPS-001 | Customer onboarding ops (KYC/CDD remediation) | Onboarding Ops Lead | AML |
| OPS-002 | Enhanced due diligence (EDD) queue | Onboarding Ops Lead | AML |
| OPS-003 | Payment processing (outbound/inbound) | Payments Ops Lead | Payment |
| OPS-004 | Real-time rail operations (PayShap/ISO 20022) | Payments Ops Lead | Payment |
| OPS-005 | Clearing & settlement | Settlement Ops Lead | Settlement |
| OPS-006 | Reconciliation & suspense management | Recon Ops Lead | Financial |
| OPS-007 | Chargeback / dispute lifecycle | Dispute Ops Lead | Conduct |
| OPS-008 | Card lifecycle & authorisation exceptions | Card Ops Lead | Card |
| OPS-009 | Complaints handling | Complaints Ops Lead | Conduct |
| OPS-010 | Back-office exception processing | Back-Office Lead | Operational |
| OPS-011 | BPO management | Ops Vendor Lead | Outsourcing |
| OPS-012 | Procurement | Procurement Lead | Governance |
| OPS-013 | Vendor / third-party risk management | Ops Vendor Lead | Governance |
| OPS-014 | Business continuity & resilience testing | Resilience Lead | Resilience |
| OPS-015 | Operational incident management | Duty Ops Lead | Operational |
| OPS-016 | Regulatory reporting hand-off (to C10/FIC) | Ops Reporting Lead | Compliance |

---

## 2. Process detail

### OPS-001 — Customer onboarding ops (KYC/CDD remediation)
- **Inputs:** application event, identity documents, screening results, adverse-media flags.
- **Outputs:** verified client record, risk rating, or a documented decline.
- **Controls:** CDD per FICA (natural + legal persons, UBO tracing) `[reg]`; maker-checker on risk-rating overrides; PEP screening; audit trail. Ref: `../../research/regulatory/aml-fica.md` §3.
- **RTO/RPO:** N/A (batch-tolerant) — `[TARGET]` remediation queue cleared < 24h.

### OPS-002 — Enhanced due diligence (EDD) queue
- **Inputs:** risk-rated high-risk clients, PEP/foreign-PIP matches, high-value relationships.
- **Outputs:** EDD decision, senior sign-off, or exit.
- **Controls:** independent senior approval; documented source of funds/wealth; TFS re-screening `[reg]` (`../../research/regulatory/aml-fica.md` §4).
- **RTO/RPO:** `[TARGET]` decision < 5 business days.

### OPS-003 — Payment processing (outbound/inbound)
- **Inputs:** payment instructions (app/API/file), beneficiary data, funding balance.
- **Outputs:** submitted payment file, status callbacks, exception queue.
- **Controls:** cut-off enforcement; duplicate detection; beneficiary name-matching; sanctions/TFS screen at instruction level; maker-checker for manual release.
- **RTO/RPO:** `[TARGET]` batch integrity 100%; exceptions triaged < 4h.

### OPS-004 — Real-time rail operations (PayShap/ISO 20022)
- **Inputs:** real-time payment requests, alias directory (ShapID), scheme responses.
- **Outputs:** immediate accept/reject, settlement obligations, exception records.
- **Controls:** ISO 20022 message validation; per-transaction limit enforcement `[ASSUMPTION: current PayShap limit per `../../research/regulatory/payments-nps.md` §4 — confirm current value]`; real-time fraud interlock (C12).
- **RTO/RPO:** `[TARGET]` rail availability ≥ 99.9% during scheme hours.

### OPS-005 — Clearing & settlement
- **Inputs:** clearing files, scheme obligations, funding position.
- **Outputs:** settled positions, settlement confirmations, funding instructions to C10.
- **Controls:** cut-off discipline; dual release of funding; reconciliation to settlement account (`../../research/regulatory/payments-nps.md` §110–114).
- **RTO/RPO:** `[TARGET]` no missed settlement window; funding instructions issued ≥ 1h before cut-off.

### OPS-006 — Reconciliation & suspense management
- **Inputs:** internal ledgers, sponsor/scheme/processor statements.
- **Outputs:** reconciled positions, break register, C10 recon pack.
- **Controls:** independent sign-off; suspense aging `[ASSUMPTION: 3 business days]`; four-eyes; break register with root cause.
- **RTO/RPO:** `[TARGET]` EOD recon complete before next business day open; nostros reconciled daily.

### OPS-007 — Chargeback / dispute lifecycle
- **Inputs:** customer dispute, transaction records, scheme rules.
- **Outputs:** resolved dispute, ledger entry, customer notification, root-cause record.
- **Controls:** scheme-timeline tracking; NFO escalation documented; no closure without customer notification; redress coded for C10 provisioning.
- **RTO/RPO:** see lifecycle table in `operating-model.md` §4.

### OPS-008 — Card lifecycle & authorisation exceptions
- **Inputs:** card order/replacement events, authorisation stream, PIN/activation requests.
- **Outputs:** issued/blocked cards, force-post/reversal decisions, token lifecycle.
- **Controls:** dual control on card issuance data; auth-to-clear matching; sensitive-data (PAN) handling per PCI-DSS gates (PLAN.md §4).
- **RTO/RPO:** `[TARGET]` card block/unblock < 5 min; exception handling < 4h.

### OPS-009 — Complaints handling
- **Inputs:** complaint (any channel), transaction/account context.
- **Outputs:** reference number, resolution, redress, theme record.
- **Controls:** NFO/Code-of-Banking-Practice alignment; deadline tracking; themes routed to C01/C15. Ref: `../../research/regulatory/conduct-fais-nca.md` §5–6.
- **RTO/RPO:** `[TARGET]` acknowledgement < 4h; resolution < 15 business days or documented extension.

### OPS-010 — Back-office exception processing
- **Inputs:** STP exceptions, failed payments, static-data change requests.
- **Outputs:** repaired transactions, updated static data.
- **Controls:** maker-checker on static-data and manual repairs; reason codes mandatory.
- **RTO/RPO:** `[TARGET]` queue cleared < 24h.

### OPS-011 — BPO management
- **Inputs:** outsourcing agreements, capacity forecasts, quality metrics.
- **Outputs:** delivered capacity, quality/QA reports, escalation records.
- **Controls:** contractual SLAs; data-handling terms (POPIA cross-border if offshore `../../research/regulatory/privacy-popia.md` §6); periodic QA sampling; exit plan.
- **RTO/RPO:** governed by vendor SLA + `service-levels.md`.

### OPS-012 — Procurement
- **Inputs:** internal demand, budget approval from C10, vendor options.
- **Outputs:** POs, contracts, onboarding records.
- **Controls:** spend-threshold approvals; SoD between buyer/approver/payer; conflict-of-interest declarations.
- **RTO/RPO:** N/A.

### OPS-013 — Vendor / third-party risk management
- **Inputs:** vendor register, due-diligence packs, performance data.
- **Outputs:** tier assignments, risk ratings, review outcomes, exit plans.
- **Controls:** tiering rules (`operating-model.md` §9); concentration register; critical-vendor annual review; sub-outsourcing disclosure.
- **RTO/RPO:** `[TARGET]` critical-vendor onboarding DD complete before go-live; annual renewal.

### OPS-014 — Business continuity & resilience testing
- **Inputs:** BIA, RTO/RPO targets, scenario library.
- **Outputs:** test plans, test evidence, remediation actions.
- **Controls:** annual live test of critical failover; board visibility of single points of failure; joint cyber scenarios with C12.
- **RTO/RPO:** defined per process (see `service-levels.md` §5).

### OPS-015 — Operational incident management
- **Inputs:** monitoring alerts, staff/customer reports, vendor notifications.
- **Outputs:** incident record, comms, root-cause analysis, corrective actions.
- **Controls:** severity taxonomy; mandated comms for customer-affecting incidents; POPIA breach-notification trigger if personal info involved (`../../research/regulatory/privacy-popia.md` §7); post-incident review.
- **RTO/RPO:** Critical MTTA `[TARGET]` < 15 min (aligns to SC Critical 1h SLA).

### OPS-016 — Regulatory reporting hand-off (to C10/FIC)
- **Inputs:** transactional and client data, control attestations.
- **Outputs:** FIC reports (CTR/STR/TPR) and BA-return input feeds.
- **Controls:** CTR > R49,999.99 within 3 days; STR within 15 days; TPR without delay `[reg]` (`../../research/regulatory/aml-fica.md` §3.4); BA 100/200/210/700 input integrity (`../c10-finance-cfo/financial-controls.md`).
- **RTO/RPO:** statutory deadlines are hard; no late filing.

---

## 3. Control taxonomy used

| Class | Meaning | Example control |
|---|---|---|
| AML | Financial-crime prevention | CDD, screening, reporting |
| Payment | Payment integrity | cut-offs, duplicate detection |
| Settlement | Interbank obligation discharge | dual release, recon |
| Financial | Ledger truth | maker-checker, suspense aging |
| Conduct | Fair customer outcomes | complaint/dispute timelines |
| Card | Card & sensitive-data safety | tokenisation, PCI-DSS |
| Governance | Buy/approve separation | spend thresholds, SoD |
| Outsourcing | Vendor risk | DD, concentration, exit |
| Resilience | Continuity | RTO/RPO, testing |
| Operational | Run integrity | incident mgmt, RCA |
| Compliance | Regulatory reporting | statutory deadlines |

---

## 4. Cross-links

- Mechanics per process → [`operating-model.md`](./operating-model.md)
- Targets → [`service-levels.md`](./service-levels.md)
- Money truth → `../c10-finance-cfo/financial-controls.md`
- Records retention → `../c03-admin-knowledge/records-and-retention.md`
- Routing → `../../workflows/agent-routing.md`
