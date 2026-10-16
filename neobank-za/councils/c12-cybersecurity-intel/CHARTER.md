# C12 — Cybersecurity-Intel Council Charter

**Council ID:** C12 · **Directory:** `c12-cybersecurity-intel` · **Tier:** 2 (Technical specialization)
**SAOS identity:** Cybersecurity-Intel · **Captain role:** Cybersecurity-Intelligence Captain
**Program:** NeoBank ZA (`Project Umoya`) · **Version:** 1.0 · **Date:** 2026-10-16 · **Status:** PROPOSED

Back-links: [council index](../README.md) · [program governance](../../program/governance/README.md) · [risk register](../../program/risk/risk-register.md).

---

## 1. Council ID & name

**C12 — Cybersecurity-Intel.** The security, fraud and threat-intelligence council. The "inspector" of SAOS §8.2 and holder of the **security special authority**.

## 2. Mandate

Protect the bank and its customers: threat modelling, secure architecture, fraud detection, incident response, and the security gates that block unsafe releases. C12 is the program's **risk-register owner**.

## 3. Captain role

**Cybersecurity-Intelligence Captain** (Tier-2). Owns: security posture, threat model, fraud controls, incident response, security gates (G-SEC/G-DEP), and the [risk register](../../program/risk/risk-register.md). Binding security authority. Escalates to SC.

## 4. Agent roster (PROPOSED)

> ⚠️ **Proposed roster — not staffed.** SAOS C12 is a small, senior council.

| Agent | Focus |
|---|---|
| AGT-security-architect | Threat model, secure architecture |
| AGT-threat-intel-analyst | Threat intelligence, monitoring |
| AGT-fraud-analyst | Transaction monitoring, BEC/A2P defences |
| AGT-incident-responder | IR playbooks, forensics |
| AGT-appsec-engineer | Secure code review, pen-testing |
| SUB-* | Scanning, alert triage |

## 5. Scope & authority

- **In scope:** security posture, threat modelling, fraud controls, incident response, vulnerability management, security gates, program risk register.
- **Authority:** **security special authority** (binding); may halt a release on a gate breach (with the CRD staff line); owns R-005/R-006/R-013/R-019/R-020.
- **Out of scope:** infra build (C06/C11 implement controls C12 specifies).

## 6. Key artifacts owned

| Artifact | Notes |
|---|---|
| [Risk register](../../program/risk/risk-register.md) | Program risk |
| Threat model | Per money/data surface |
| Fraud-control design | Monitoring & screening |
| Incident-response playbook | With C02 |
| Security review / pen-test reports | G-SEC evidence |
| [Quality gates](../../program/delivery/quality-gates.md) (security view) | G-SEC/G-DEP |

## 7. Interfaces & dependencies

| Council | Interface |
|---|---|
| C01 Legal-Compliance | POPIA, FICA, incident legal duties |
| C06 Engineering-Infra | Secure infrastructure |
| C11 Dev-Engineering | Secure code, fixes |
| C02 Operations | Incident response execution |
| C16 Banking-Fintech | Fraud in payment flows |

## 8. KPIs

| KPI | Target |
|---|---|
| Critical unmitigated findings at release | 0 |
| Secrets in artifacts | 0 |
| Critical incident response | ≤ 1h |
| Pen-tests passed before money/data release | 100% |
| Fraud-loss rate (pilot) | Within tolerance |

## 9. Escalation path

`AGT → Cybersecurity-Intelligence Captain → Sparkling Curious → Board` (critical security skips to SC directly, 1h).

## 10. South-Africa-specific mandate notes

- **Bank fraud landscape:** BEC, APP/authorized-push-payment, SIM-swap and account-takeover fraud are prevalent — build defences for these specifically.
- **POPIA breach duties:** support the Information Officer with s22 breach notification readiness.
- **AML enablement:** provide the technical controls C01 requires (screening, monitoring, reporting).
- **FATF context:** post grey-list-exit, supervisory scrutiny of AML/CFT controls remains high.
- **Data residency/security:** enforce least privilege and encryption for SA-region data (D-002).
