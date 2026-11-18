---
name: aml-fica-screening
description: Use when performing AML/KYC/FICA screening procedures for a South African financial institution — CDD/EDD, UBO tracing, sanctions/TFS, PEP, and FIC reporting. Triggers on "KYC", "FICA", "sanctions screening", "STR", "CTR", "enhanced due diligence".
council: C01 (with C12, C02)
version: 1.0
status: draft
---

# Skill — AML / FICA Screening

> **Purpose.** A consistent procedure for customer due diligence, screening and reporting under South Africa's FIC Act framework, so outcomes are lawful, documented and auditable.
>
> **Not legal advice.** C01 and a SA admitted attorney/MLCO must validate procedures and thresholds against the consolidated FIC Act before reliance.

---

## 1. When to use / not use

**Use when:**
- Onboarding a client (natural or legal person) as a FICA accountable institution.
- Running sanctions/TFS, PEP or adverse-media screening.
- Handling enhanced due diligence, or preparing CTR/STR/TPR reports.

**Do not use when:**
- The task is purely technical (e.g. wiring a screening vendor API) — that is C11/C06, though it should follow this procedure's logic.

---

## 2. Prerequisites

- The institution is **registered as a FICA accountable institution on goAML** `[REG]` (`../../research/regulatory/aml-fica.md` §2).
- A **board-approved RMCP** exists `[REG]`.
- Screening tooling and record-keeping are in place (interlock C12/C03).

---

## 3. Procedure

### 3.1 Customer Due Diligence (CDD)
1. **Identify & verify** the client per FICA s21 and Regulations — natural and legal persons `[REG]`.
2. **Trace beneficial ownership** to the **natural persons who ultimately own or control** a legal entity `[REG]`. (Do **not** conflate this with the CIPC 5% disclosure threshold, which is a separate Companies Act rule — see `../../research/regulatory/aml-fica.md` §3.2.)
3. **Risk-rate** the relationship (low / standard / high).
4. **Screen** against sanctions/TFS and PEP lists on onboarding and continuously.

### 3.2 Enhanced Due Diligence (EDD)
5. Trigger EDD for high-risk relationships and for **foreign prominent public officials / domestic prominent influential persons** `[REG]`.
6. Obtain independent senior approval; document source of funds/wealth.

### 3.3 Screening & TFS
7. On any **TFS match** (ss26A–26C): **prohibit making property/financial services available**, subject to permitted exceptions, and report a **Terrorist Property Report (s28A)** `[REG]`.
8. Keep screening result records with reason codes and disposition.

### 3.4 Reporting (the "four reports")
9. **CTR:** cash received/paid **> R49,999.99** → submit **≤ 3 days** `[REG]`.
10. **STR/SAR:** suspicion of ML/TF/PF → **within 15 days** of becoming aware `[REG]`.
11. **TPR:** designated-person property → **without delay** `[REG]`.
12. **Cross-border/conveyance:** per the Act `[REG]`.

### 3.5 Record-keeping
13. Retain CDD and transaction records for the prescribed period (confirm exact period with C01). `[REG]` (see `../../research/regulatory/aml-fica.md` §8; `../../councils/c03-admin-knowledge/records-and-retention.md`).

### 3.6 Crypto (if in scope)
14. If the institution is a **CASP** (item 12): second FIC registration + **travel rule** — originator/beneficiary data with **every** transfer, **zero threshold** `[REG]` (`../../research/regulatory/aml-fica.md` §5).

---

## 4. Outputs

- Verified client record + risk rating.
- Screening dispositions (with reason codes).
- Filed reports (CTR/STR/TPR) with evidence.
- EDD files with senior sign-off.
- All retained per the retention schedule.

---

## 5. Evidence requirements

- Every decision documented with who/when/why.
- Distinguish **observed** (screening match) from **inferred** (risk assessment) from **unknown** (unresolved ownership).
- No PII beyond what is necessary (POPIA minimisation) `[REG]`.

---

## 6. Failure modes & recovery

| Failure | Recovery |
|---|---|
| Screening tooling down | Manual/alternate screening; log the break; escalate (C12). |
| Missing UBO data | Do not onboard until traced; treat as open unknown, not "clean". |
| Late STR | Escalate immediately; document; remediate process. |
| Sanctions false positive | Documented disposition with analyst + reviewer sign-off. |
| Cross-border data transfer for screening | Check POPIA s72 basis before transfer `[REG]` (`../../research/regulatory/privacy-popia.md` §6). |

---

## 7. Related controls

- RMCP ownership: C01 (MLCO).
- Ops execution: `../../councils/c02-operations/process-catalogue.md` (OPS-001, OPS-002, OPS-016).
- Screening design: C12.

---

## 8. Cross-links

- SA domain → [`../sa-banking-domain/SKILL.md`](../sa-banking-domain/SKILL.md)
- AML research → `../../research/regulatory/aml-fica.md`
- Records → `../../councils/c03-admin-knowledge/records-and-retention.md`
- Crypto rails → `../../councils/c13-web3-finance/stablecoin-and-digital-asset-rails.md`
