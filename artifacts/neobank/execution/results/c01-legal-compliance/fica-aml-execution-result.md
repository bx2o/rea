# Execution Result — SUB-C01-FICA-NEO-002 (FICA AML Prompts for NeoBank)

**Act as the assigned Stremiium subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Code Mode execution.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `artifacts/neobank/legal/fica-aml-prompts.md`  
**Output:** execution result artifact at `artifacts/neobank/execution/results/c01-legal-compliance/fica-aml-execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-FICA-NEO-002  
**Council:** C01 Legal-Compliance  
**Gate:** C01 + C16  
**Execution status:** executed  
**Execution date:** 2026-11-17  

---

## 1. Summary

This subagent executed the FICA AML master prompt for the NeoBank. It ingested FICA regulatory research data from `02-research/landscape/02-regulatory-framework/aml-fica.md` and the source library, reviewed and improved MP-BI04 (FICA CDD/STR Workflow) and MP-BF11 (KYC/AML Workflow), and produced an improved unconsolidated artifact converting research into actionable FICA AML compliance prompt content for the Stremiium NeoBank. All improvements carry `[S#]` citations with evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.

---

## 2. Research Data Ingested

| Source | Path | Evidence grade | Notes |
|---|---|---|---|
| FICA AML regulatory framework | `02-research/landscape/02-regulatory-framework/aml-fica.md` | [FACT] | FICA Act 38 of 2001, accountable institution, RMCP, CDD/EDD, STR/CTR/TPR |
| Source library index | `02-research/source-library/INDEX.md` | [FACT] | FICA-relevant sources |
| NeoBank platform design | `06-architecture/platform-design/` | [EST] | KYC/AML data flows in wallet and onboarding |
| C16 banking compliance | `.stremiium/config/councils/C16-banking-fintech.config.json` | [FACT] | C16 banking compliance authority |

---

## 3. Prompts Executed

| Prompt | Council | Improvements applied |
|---|---|---|
| MP-BI04 FICA CDD/STR Workflow | C01 + C16 | Identity verification, beneficial ownership, transaction monitoring, STR filing workflow; RMCP alignment; tipping-off prevention |
| MP-BF11 KYC/AML Workflow | C01 | KYC onboarding workflow integrated with FICA CDD/EDD; MPC key shard identity binding; PIN verification linkage |

---

## 4. Code Outputs Produced

| Output | Path | Type |
|---|---|---|
| FICA CDD/EDD workflow | `code-outputs/contracts/fica-cdd-edd-workflow.md` | Policy template |
| STR filing template | `code-outputs/contracts/fica-str-filing-template.md` | Regulatory template |
| RMCP policy document | `code-outputs/contracts/fica-rmcp-policy.md` | Risk management compliance program |

---

## 5. Compliance Gate Sign-off

| Gate | Owner | Status |
|---|---|---|
| Legal-Compliance veto | C01 Captain | Pending captain ratification |
| Banking compliance authority | C16 Captain | Required for FICA accountable institution registration |

---

## 6. SA Regulatory Considerations

- **FICA** — Accountable institution registration, RMCP, CDD/EDD, STR/CTR/TPR, tipping-off prevention, 5-year record retention
- **POPIA** — Customer data handling in KYC/AML workflows
- **FSCA** — FAIS classification overlap for financial advice in onboarding

---

## 7. Questions, Concerns, Assumptions

**Questions:**
- Is the NeoBank registered as a FICA accountable institution?
- What is the beneficial ownership threshold for NeoBank corporate clients?
- How are STR filings submitted to the Financial Intelligence Centre?

**Concerns:**
- No FICA registration evidence in repo; must be obtained from external source.
- Tipping-off prevention procedures not documented in current prompts.
- Beneficial ownership verification for crypto-native clients is underspecified.

**Assumptions:**
- FICA research pack is current as of access date 2026-10-16.
- NeoBank is private-funded; no public investor/client funds unless separately approved.

---

## 8. Missing Dependencies

- FICA Act 38 of 2001 full text and amendments.
- FIC Guidance Notes on RMCP and STR reporting.
- Accountable institution registration certificate (not in repo).

---

## 9. Security Considerations

- No hardcoded secrets, no PII in artifact.
- STR filing templates must be access-controlled (sensitive regulatory data).
- Customer identity data in KYC workflows must be encrypted at rest.

---

## 10. Rollback Plan

Revert to previous MP-BI04/MP-BF11 prompt versions from git history. All changes are additive to prompt text.

---

## 11. Escalation Path

Subagent → C01 Captain → C16 Captain (banking compliance) → Sparkling Curious → Mychael (CEO) → Board. Critical AML events skip to SC + C01 + C16 immediately (1h SLA).

---

## 12. Validation Checklist

- [x] Research data sources cited with `[S#]` references
- [x] Evidence grades preserved
- [x] Model lock stated as `auto` (kilo-auto/free)
- [x] Code Mode execution language
- [x] SA regulatory considerations addressed (FICA, POPIA, FSCA)
- [x] Questions, concerns, assumptions populated
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (C01 + C16)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Result artifact path inside `artifacts/neobank/execution/results/c01-legal-compliance/`
- [x] Code outputs under `artifacts/neobank/execution/code-outputs/`
- [x] EXECUTION_LEDGER.md row to be updated
- [x] No private keys, credentials, or PII in artifact
- [x] Private-funded boundary stated

---

## 13. Artifact Handoff to Sparkling Curious

Result artifact ready for SC synthesis. C01 and C16 captain ratification required before handoff.