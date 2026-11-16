# C02 — Internal Service Levels & Operational KPIs

- **Owner:** C02 VP Operations · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Processes:** [`process-catalogue.md`](./process-catalogue.md) · **Mechanics:** [`operating-model.md`](./operating-model.md)

> **IMPORTANT — these are internal targets, not external commitments.**
> Every number is `[TARGET]` (internal objective) or `[ASSUMPTION]` (modelled working value). **None is measured and none is a customer-facing service-level agreement.** Customer-facing SLAs must be ratified by C01 (conduct), C10 (cost), and SC before publication. External regulator deadlines (e.g. FIC CTR/STR) are **hard** and are quoted from `../../research/regulatory/` with a source, not invented here.

---

## 1. SLA framework

| Field | Meaning |
|---|---|
| Metric | What is measured |
| Target `[TARGET]` | Internal objective |
| Threshold | Value at which escalation is mandatory |
| Owner | Accountable role |
| Window | Measurement period |
| Class | Category (see `process-catalogue.md` §3) |

Service-level violation handling: first breach → owner remediation note; repeat breach in a window → captain escalation; customer-affecting → SC per PLAN.md §5 escalation SLA (Critical 1h · High 4h · Medium 24h · Low 72h).

---

## 2. Operational SLAs (internal)

| ID | Metric | Target `[TARGET]` | Threshold | Owner | Window |
|---|---|---|---|---|---|
| SLA-001 | KYC remediation queue cleared | < 24h | 48h | Onboarding Ops | daily |
| SLA-002 | EDD decision | < 5 business days | 7 days | Onboarding Ops | weekly |
| SLA-003 | Payment batch integrity | 100% | any loss | Payments Ops | per batch |
| SLA-004 | Manual payment exception triage | < 4h | 8h | Payments Ops | daily |
| SLA-005 | Real-time rail availability (scheme hours) | ≥ 99.9% | 99.5% | Payments Ops | monthly |
| SLA-006 | Settlement instruction before cut-off | ≥ 1h | 30 min | Settlement Ops | per window |
| SLA-007 | EOD reconciliation complete | before next open | +4h | Recon Ops | daily |
| SLA-008 | Suspense aged items | < 3 business days | 5 days | Recon Ops | daily |
| SLA-009 | Dispute acknowledgement | < 4h | 8h | Dispute Ops | daily |
| SLA-010 | Dispute resolution (non-scheme) | < 20 business days | 25 days | Dispute Ops | monthly |
| SLA-011 | Card block/unblock | < 5 min | 15 min | Card Ops | real-time |
| SLA-012 | Card auth-to-clear matching | 100% | any unmatched > EOD | Card Ops | daily |
| SLA-013 | Complaint acknowledgement | < 4h | 8h | Complaints Ops | daily |
| SLA-014 | Complaint resolution | < 15 business days | documented extension | Complaints Ops | monthly |
| SLA-015 | Critical incident MTTA | < 15 min | 30 min | Duty Ops | real-time |
| SLA-016 | Critical incident MTTR | < 4h | 8h | Duty Ops | per incident |
| SLA-017 | Critical-vendor DD before go-live | 100% | any gap | Ops Vendor | per vendor |
| SLA-018 | BCP critical-failover test | annual | > 12 months | Resilience | annual |

---

## 3. Regulatory deadlines (hard — sourced, not invented)

These are statutory/regulatory obligations Ops must meet. Values are taken from the regulatory research pack; verify against the consolidated instruments before reliance.

| Obligation | Deadline | Source |
|---|---|---|
| Cash Threshold Report (CTR), cash > R49,999.99 | ≤ 3 days | `../../research/regulatory/aml-fica.md` §3.4 |
| Suspicious Transaction Report (STR) | within 15 days | `../../research/regulatory/aml-fica.md` §3.4 |
| Terrorist Property Report (TPR) | without delay | `../../research/regulatory/aml-fica.md` §3.4 |
| POPIA breach notification | as soon as reasonably possible | `../../research/regulatory/privacy-popia.md` §7 |
| PAIA annual report window | 1 Apr – 30 Jun | `../../research/regulatory/privacy-popia.md` §9 |
| BA returns (BA 100/200/210/700) input | per PA submission calendar | `../c10-finance-cfo/financial-controls.md` |

---

## 4. Operational KPIs (health, not just speed)

| ID | KPI | Definition | Target `[TARGET]` | Owner |
|---|---|---|---|---|
| KPI-001 | STP (straight-through processing) rate | % payments processed without manual intervention | ≥ 95% | Payments Ops |
| KPI-002 | First-time-right rate | % transactions requiring no repair | ≥ 98% | Back-Office |
| KPI-003 | Break closure rate | % recon breaks closed within target age | ≥ 98% | Recon Ops |
| KPI-004 | Cost per transaction | ops cost / transactions | `[ASSUMPTION seed]` see unit economics `../c10-finance-cfo/unit-economics-framework.md` | Ops + C10 |
| KPI-005 | Dispute-to-transaction ratio | disputes / transactions | monitor trend | Dispute Ops |
| KPI-006 | Complaint rate per 1,000 accounts | complaints / accounts | monitor trend | Complaints Ops |
| KPI-007 | Vendor on-time critical review | % critical vendors reviewed on cadence | 100% | Ops Vendor |
| KPI-008 | BCP test pass rate | % scenarios passed | 100% critical | Resilience |

---

## 5. RTO / RPO targets (resilience)

| Process class | RTO `[TARGET]` | RPO `[TARGET]` |
|---|---|---|
| Real-time payments | < 1h | 0 (no loss) |
| Card authorisation | < 30 min | 0 |
| Core ledger read | < 1h | < 5 min |
| Reconciliation | < 8h | < 1h |
| Complaints/back-office | < 24h | < 1h |

---

## 6. Reporting cadence

- **Daily:** recon pack, payment exceptions, incident log → Ops captain.
- **Weekly:** SLA dashboard, dispute/complaint summary → Ops captain → SC.
- **Monthly:** KPI pack, vendor review outcomes, resilience status → C10 + SC.
- **Quarterly:** process-catalogue change review, BCP posture → board visibility.

---

## 7. Cross-links

- Processes → [`process-catalogue.md`](./process-catalogue.md)
- Money truth → `../c10-finance-cfo/financial-controls.md`
- Conduct obligations → `../c01-legal-compliance/` and `../../research/regulatory/conduct-fais-nca.md`
- Escalation → `../../program/` (SC SLA) and PLAN.md §5.
