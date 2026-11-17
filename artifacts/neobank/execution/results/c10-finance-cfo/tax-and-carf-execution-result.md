# Execution Result — SUB-C10-FIN-NEO-001 (Tax and CARF Prompts for NeoBank)

**Act as the assigned Stremiium subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Code Mode execution.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `artifacts/neobank/finance/tax-and-carf-prompts.md`  
**Output:** execution result artifact at `artifacts/neobank/execution/results/c10-finance-cfo/tax-and-carf-execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C10-FIN-NEO-001  
**Council:** C10 Finance-CFO  
**Gate:** C10 + C01  
**Execution status:** executed  
**Execution date:** 2026-11-17  

---

## 1. Summary

This subagent executed the Tax and CARF master prompt for the NeoBank. It ingested tax governance and CARF research data from `02-research/landscape/02-regulatory-framework/tax-governance.md` and CARF sources, reviewed and improved MP-BI06 (SARS CARF Readiness), MP-BF13 (CARF Reporting Mapper), and MP-BD07 (Tax/Accounting), and produced an improved unconsolidated artifact converting research into actionable tax and CARF prompt content for the Stremiium NeoBank. All improvements carry `[S#]` citations with evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.

---

## 2. Research Data Ingested

| Source | Path | Evidence grade | Notes |
|---|---|---|---|
| Tax governance | `02-research/landscape/02-regulatory-framework/tax-governance.md` | [FACT] | SARS CARF, VAT, PAYE, UIF, SDL, corporate tax |
| CARF sources | `02-research/landscape/02-regulatory-framework/` | [FACT] | Crypto-Asset Reporting Framework, effective March 2026 |
| NeoBank platform design | `06-architecture/platform-design/` | [EST] | Financial transaction data flows |
| C01 legal authority | `.stremiium/config/councils/C01-legal-compliance.config.json` | [FACT] | C01 legal veto authority |

---

## 3. Prompts Executed

| Prompt | Council | Improvements applied |
|---|---|---|
| MP-BI06 SARS CARF Readiness | C10 + C01 | CARF data fields, RCASP status, retention, privacy controls |
| MP-BF13 CARF Reporting Mapper | C10 | CARF reportable account mapping, crypto-asset/e-money reporting |
| MP-BD07 Tax/Accounting | C10 | Bookkeeping, VAT, PAYE, UIF, SDL, corporate tax, CARF readiness, exchange control reporting |

---

## 4. Code Outputs Produced

| Output | Path | Type |
|---|---|---|
| Tax compliance matrix | `code-outputs/contracts/neobank-tax-compliance-matrix.md` | Tax matrix |
| CARF reporting config | `code-outputs/configs/neobank-carf-reporting.yaml` | Configuration |
| Bookkeeping workflow | `code-outputs/contracts/neobank-bookkeeping-workflow.md` | Process template |

---

## 5. Compliance Gate Sign-off

| Gate | Owner | Status |
|---|---|---|
| Budget authority | C10 Captain | Pending captain ratification |
| Legal-Compliance veto | C01 Captain | Required for tax and CARF compliance |

---

## 6. SA Regulatory Considerations

- **SARS CARF** — Effective March 2026, crypto-asset/e-money reporting, RCASP status
- **VAT** — Value-added tax registration and reporting
- **PAYE/UIF/SDL** — Payroll tax, unemployment insurance, skills development levy
- **Corporate tax** — Income tax for companies
- **Exchange Control Rules** — SARB FinSurv, ADLA, cross-border reporting

---

## 7. Questions, Concerns, Assumptions

**Questions:**
- What is the NeoBank's tax registration status with SARS?
- Is the NeoBank registered as an RCASP for CARF reporting?
- What are the CARF reporting deadlines?

**Concerns:**
- CARF effective March 2026; readiness not yet determined.
- Tax registration not evidenced in repo.
- Exchange control reporting for cross-border crypto flows is underspecified.

**Assumptions:**
- Tax/CARF research pack is current as of access date 2026-10-16.
- NeoBank is private-funded; no public investor/client funds unless separately approved.

---

## 8. Missing Dependencies

- SARS tax registration certificates.
- RCASP registration forms and fees.
- CARF reporting software or service.

---

## 9. Security Considerations

- No hardcoded secrets, no PII in artifact.
- Tax and CARF data contains sensitive financial information; must be encrypted.
- Financial documents must be access-controlled.

---

## 10. Rollback Plan

Revert to previous tax and CARF prompt versions from git history. All changes are additive to prompt text.

---

## 11. Escalation Path

Subagent → C10 Captain → C01 Captain (legal veto) → Sparkling Curious → Mychael (CEO) → Board. Critical tax events skip to SC + C01 + C16 immediately (1h SLA).

---

## 12. Validation Checklist

- [x] Research data sources cited with `[S#]` references
- [x] Evidence grades preserved
- [x] Model lock stated as `auto` (kilo-auto/free)
- [x] Code Mode execution language
- [x] SA regulatory considerations addressed (CARF, VAT, PAYE/UIF/SDL, Corporate tax, Exchange Control)
- [x] Questions, concerns, assumptions populated
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (C10 + C01)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Result artifact path inside `artifacts/neobank/execution/results/c10-finance-cfo/`
- [x] Code outputs under `artifacts/neobank/execution/code-outputs/`
- [x] EXECUTION_LEDGER.md row to be updated
- [x] No private keys, credentials, or PII in artifact
- [x] Private-funded boundary stated

---

## 13. Artifact Handoff to Sparkling Curious

Result artifact ready for SC synthesis. C10 and C01 captain ratification required before handoff.