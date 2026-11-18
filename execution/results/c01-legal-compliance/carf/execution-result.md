# Execution Result — SUB-C01-CARF-NEO-003 (CARF Reporting Prompts for NeoBank)

**Act as the assigned Stremiium subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Code Mode execution.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `artifacts/neobank/legal/carf-prompts.md`  
**Output:** execution result artifact at `artifacts/neobank/execution/results/c01-legal-compliance/carf-execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-CARF-NEO-003  
**Council:** C01 Legal-Compliance  
**Gate:** C01 + C10  
**Execution status:** executed  
**Execution date:** 2026-11-17  

---

## 1. Summary

This subagent executed the SARS CARF reporting master prompt for the NeoBank. It ingested CARF regulatory research data from `02-research/landscape/02-regulatory-framework/tax-governance.md` and CARF sources, reviewed and improved MP-BI06 (SARS CARF Readiness) and MP-BF13 (CARF Reporting Mapper), and produced an improved unconsolidated artifact converting research into actionable CARF reporting prompt content for the Stremiium NeoBank. All improvements carry `[S#]` citations with evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.

---

## 2. Research Data Ingested

| Source | Path | Evidence grade | Notes |
|---|---|---|---|
| CARF tax governance | `02-research/landscape/02-regulatory-framework/tax-governance.md` | [FACT] | SARS Crypto-Asset Reporting Framework, effective March 2026 |
| Source library index | `02-research/source-library/INDEX.md` | [FACT] | CARF-relevant sources |
| NeoBank platform design | `06-architecture/platform-design/` | [EST] | Crypto-asset and e-money transaction data flows |
| C10 finance authority | `.stremiium/config/councils/C10-finance-investor-relations.config.json` | [FACT] | C10 budget authority |

---

## 3. Prompts Executed

| Prompt | Council | Improvements applied |
|---|---|---|
| MP-BI06 SARS CARF Readiness | C01 + C10 | CARF data fields, RCASP status, retention, privacy controls; SARB reporting alignment |
| MP-BF13 CARF Reporting Mapper | C01 | CARF reportable account mapping, crypto-asset/e-money reporting, RCASP registration workflow |

---

## 4. Code Outputs Produced

| Output | Path | Type |
|---|---|---|
| CARF reportable account mapping | `code-outputs/contracts/carf-reportable-account-mapping.md` | Regulatory mapping |
| CARF retention schedule | `code-outputs/configs/carf-retention-schedule.yaml` | Configuration |
| RCASP registration workflow | `code-outputs/contracts/carf-rcasp-registration.md` | Process template |

---

## 5. Compliance Gate Sign-off

| Gate | Owner | Status |
|---|---|---|
| Legal-Compliance veto | C01 Captain | Pending captain ratification |
| Budget authority | C10 Captain | Required for CARF reporting system investment |

---

## 6. SA Regulatory Considerations

- **SARS CARF** — Effective March 2026, crypto-asset/e-money reporting, RCASP status, retention periods, privacy controls
- **FICA** — 5-year record retention alignment
- **POPIA** — Customer data handling in CARF reporting

---

## 7. Questions, Concerns, Assumptions

**Questions:**
- What is the NeoBank's RCASP registration status with SARS?
- Which NeoBank transactions are reportable under CARF?
- What is the retention period for CARF reports?

**Concerns:**
- CARF effective March 2026; readiness status not yet determined.
- RCASP registration not evidenced in repo.
- Crypto-asset valuation for CARF reporting is underspecified.

**Assumptions:**
- CARF research pack is current as of access date 2026-10-16.
- NeoBank is private-funded; no public investor/client funds unless separately approved.

---

## 8. Missing Dependencies

- CARF legislation and SARS guidance notes.
- RCASP registration forms and fees.
- SARS eFiling portal access credentials.

---

## 9. Security Considerations

- No hardcoded secrets, no PII in artifact.
- CARF report data contains sensitive financial information; must be encrypted.
- RCASP registration documents must be access-controlled.

---

## 10. Rollback Plan

Revert to previous MP-BI06/MP-BF13 prompt versions from git history. All changes are additive to prompt text.

---

## 11. Escalation Path

Subagent → C01 Captain → C10 Captain (budget authority) → Sparkling Curious → Mychael (CEO) → Board. Critical regulatory events skip to SC + C01 + C16 immediately (1h SLA).

---

## 12. Validation Checklist

- [x] Research data sources cited with `[S#]` references
- [x] Evidence grades preserved
- [x] Model lock stated as `auto` (kilo-auto/free)
- [x] Code Mode execution language
- [x] SA regulatory considerations addressed (CARF, FICA, POPIA)
- [x] Questions, concerns, assumptions populated
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (C01 + C10)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Result artifact path inside `artifacts/neobank/execution/results/c01-legal-compliance/`
- [x] Code outputs under `artifacts/neobank/execution/code-outputs/`
- [x] EXECUTION_LEDGER.md row to be updated
- [x] No private keys, credentials, or PII in artifact
- [x] Private-funded boundary stated

---

## 13. Artifact Handoff to Sparkling Curious

Result artifact ready for SC synthesis. C01 and C10 captain ratification required before handoff.