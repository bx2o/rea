# C02 — Operations Council Charter

**Council ID:** C02 · **Directory:** `c02-operations` · **Tier:** 1 (Strategic)
**SAOS identity:** Operations · **Captain role:** VP-Operations
**Program:** NeoBank ZA (`Project Umoya`) · **Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

Back-links: [council index](../README.md) · [program governance](../../program/governance/README.md) · [delivery model](../../program/delivery/README.md).

---

## 1. Council ID & name

**C02 — Operations.** The operating-cadence and delivery-governance council. Owns how the program runs: RACI, delivery model, runbooks, incident response, vendor management and shared-resource allocation.

## 2. Mandate

Keep the program **running and resilient**: define ways of working, own the delivery lifecycle, operate service management, govern vendors, and ensure operational readiness to launch and scale.

## 3. Captain role

**VP-Operations** (Tier-2). Owns: operational strategy, delivery governance, RACI and escalation protocol, incident response, vendor lifecycle, shared-resource allocation (with C10). Escalates to SC.

## 4. Agent roster (PROPOSED)

> ⚠️ **Proposed roster — not staffed.**

| Agent | Focus |
|---|---|
| AGT-operations-manager | Day-to-day delivery orchestration |
| AGT-incident-commander | Incident response, SLAs, post-mortems |
| AGT-vendor-manager | Vendor lifecycle & concentration risk |
| AGT-process-analyst | Ways of working, runbooks, continuous improvement |
| SUB-* | Runbook drills, status collation |

## 5. Scope & authority

- **In scope:** delivery model, RACI, escalation protocols, runbooks, incident response, vendor management, shared-resource allocation, operational readiness for launch.
- **Authority:** owns [RACI](../../program/governance/raci.md) and [escalation protocols](../../program/governance/escalation-protocols.md); vendor-selection authority (with C10/C01).
- **Out of scope:** domain strategy (C04), building controls (C11/C12).

## 6. Key artifacts owned

| Artifact | Notes |
|---|---|
| [`raci.md`](../../program/governance/raci.md) | Program RACI |
| [`escalation-protocols.md`](../../program/governance/escalation-protocols.md) | Escalation ladder & SLAs |
| [`delivery/`](../../program/delivery/README.md) | Delivery model, DoD, ways of working |
| Operations runbooks | Service management |
| Incident/post-mortem log | Resilience evidence |
| Vendor register | With C10/C01 |

## 7. Interfaces & dependencies

| Council | Interface |
|---|---|
| C10 Finance-CFO | Resource & budget allocation (joint) |
| C06 Engineering-Infra | Runtime resilience, monitoring, deployment |
| C12 Cybersecurity-Intel | Incident response for security events |
| C03 Admin-Knowledge | Records, knowledge management |
| C14 Customer-Success | Service support, SLA tracking |

## 8. KPIs

| KPI | Target |
|---|---|
| Critical incident response | ≤ 1h |
| SLA adherence (all severities) | ≥ 98% |
| Runbook coverage of critical services | 100% |
| Vendor risk reviews current | 100% |
| Post-mortems within window (24h/72h) | 100% |

## 9. Escalation path

`AGT → VP-Operations → Sparkling Curious → Board`.

## 10. South-Africa-specific mandate notes

- **NPS / clearing:** coordinate operational readiness for PayShap/instant payments and the **PSMB→SARB** transition from Aug 2026.
- **Power/connectivity resilience:** design for load-shedding and connectivity variance (customer channel availability).
- **Regulatory operations:** support **BA returns** production (with C10) and **FICA** reporting operations (with C01).
- **Service continuity:** align DR/BCP with SARB operational-resilience expectations for payment services.
