# Capability Maturity Model — NeoBank ZA

**Owner:** C04 Strategy-Growth · **Assured by:** C12 Cybersecurity-Intel (security), C02 Operations (ops)
**Version:** 1.0 · **Date:** 2026-10-16

> Maturity levels **1–5** per capability. Used to (a) baseline where the program is, (b) set the target level required to pass each launch gate, and (c) sequence investment. This is a **capability** model, not a calendar.

Back-links: [roadmap guide](./README.md) · [implementation plan](./implementation-plan.md) · [launch roadmap](./launch-roadmap.md).

---

## 1. Level definitions (generic)

| Level | Name | Characteristics |
|---|---|---|
| **1** | Ad hoc | Unstructured, undocumented, person-dependent. Works by luck. |
| **2** | Repeatable | Basic process exists and is documented; still reactive. |
| **3** | Defined | Standard, measured process; tooling in place; roles clear. |
| **4** | Managed | Quantitatively managed; monitored, tuned; SLAs/SLOs enforced. |
| **5** | Optimising | Continuous improvement; predictive; industry-leading. |

**Target rule:** no capability ships to production below **Level 3**; capabilities touching money, identity or personal data must reach **Level 4** before Public launch (M11); **Level 5** is aspirational at Phase 5.

---

## 2. Payments

| Level | Description |
|---|---|
| 1 | Manual/semi-manual transfers; no reconciliation discipline |
| 2 | Basic payment runs; single rail; manual reconciliation |
| 3 | ISO 20022 messaging; PayShap/RTC rails; automated reconciliation; dispute process |
| 4 | Multi-rail; SLO-monitored; fraud-screened; near-real-time reconciliation; failover |
| 5 | Predictive settlement/liquidity; instant everywhere; zero-touch ops |

**Current (planning):** Level 1 · **Target at M6:** Level 3 · **Target at M11:** Level 4.
**Owner:** C16 Banking-Fintech with C11 Dev-Engineering.

---

## 3. KYC / CDD

| Level | Description |
|---|---|
| 1 | Ad hoc identity capture; no standard |
| 2 | Manual document checks; FICA Tier-1 basics |
| 3 | Standardised CDD; UBO tracing; sanctions screening; audit trail |
| 4 | Automated IDV/biometrics; risk-based EDD; continuous screening; measurable SLAs |
| 5 | Behavioural + network risk; adaptive; near-zero false positives |

**Current:** Level 2 · **Target at M6:** Level 3 · **Target at M11:** Level 4.
**Owner:** C01 Legal-Compliance with C12 Cybersecurity-Intel.

---

## 4. Fraud

| Level | Description |
|---|---|
| 1 | Reactive; discovered after loss |
| 2 | Basic rules; manual review |
| 3 | Rules + device/behavioural signals; transaction monitoring; BEC defences |
| 4 | Real-time scoring; model-monitored; chargeback/fraud-rate SLAs; closed-loop learning |
| 5 | Predictive, self-tuning; industry-leading loss rates |

**Current:** Level 1 · **Target at M6:** Level 3 · **Target at M11:** Level 4.
**Owner:** C12 Cybersecurity-Intel with C16 Banking-Fintech.

---

## 5. Data

| Level | Description |
|---|---|
| 1 | Spreadsheets; no lineage |
| 2 | Central store; manual reports; basic quality checks |
| 3 | Governed warehouse/lakehouse; lineage; defined metrics; POPIA-aligned handling |
| 4 | Data-quality SLOs; contracts; governed access; reporting automation (BA returns) |
| 5 | Self-serve + governed; predictive; real-time |

**Current:** Level 2 · **Target at M6:** Level 3 · **Target at M11:** Level 4.
**Owner:** C06 Engineering-Infrastructure with C10 Finance-CFO.

---

## 6. Operations

| Level | Description |
|---|---|
| 1 | Heroic; undocumented runbooks |
| 2 | Basic runbooks; reactive support |
| 3 | Standard runbooks; incident response; SLA monitoring; on-call |
| 4 | Quantitatively managed; DR/BCP tested; error budgets; capacity headroom |
| 5 | Predictive ops; resilience-by-design; auto-remediation |

**Current:** Level 2 · **Target at M9:** Level 3 · **Target at M11:** Level 4.
**Owner:** C02 Operations with C06.

---

## 7. Security

| Level | Description |
|---|---|
| 1 | No formal posture; secrets in code |
| 2 | Basic controls; reactive patching |
| 3 | Threat model; secrets/keys management; dependency scanning; access control |
| 4 | Continuous monitoring; pen-tested; least privilege at scale; incident response tested |
| 5 | Threat-informed, predictive defence; industry-leading assurance |

**Current:** Level 1 · **Target at M8:** Level 3 · **Target at M11:** Level 4.
**Owner:** C12 Cybersecurity-Intel.

---

## 8. Maturity scorecard (planning baseline)

| Capability | Current | Target @ M6 | Target @ M9 | Target @ M11 | Owner |
|---|---|---|---|---|---|
| Payments | 1 | 3 | 3 | 4 | C16 |
| KYC/CDD | 2 | 3 | 3 | 4 | C01 |
| Fraud | 1 | 3 | 3 | 4 | C12 |
| Data | 2 | 3 | 3 | 4 | C06 |
| Operations | 2 | 3 | 3 | 4 | C02 |
| Security | 1 | 3 | 3 | 4 | C12 |

> "Current" values are **planning assumptions** for a greenfield program, not measured baselines. They are validated at M1 and re-scored at each gate by the owning council.

---

## 9. How maturity ties to gates

- A launch gate **cannot close** if any listed capability is below its target level (`launch-roadmap.md` G-5…G-11).
- Maturity claims require **evidence** (tests, monitoring, audits, runbooks) — not assertion, consistent with the evidence-over-report rule.
- Gaps feed the [risk register](../risk/risk-register.md) and the [delivery quality gates](../delivery/quality-gates.md).
