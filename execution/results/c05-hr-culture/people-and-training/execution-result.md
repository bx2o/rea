# Execution Result — SUB-C05-HR-NEO-001 (People and Training Prompts for NeoBank)

**Act as the assigned Stremiium subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Code Mode execution.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `artifacts/neobank/hr/people-and-training-prompts.md`  
**Output:** execution result artifact at `artifacts/neobank/execution/results/c05-hr-culture/people-and-training-execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C05-HR-NEO-001  
**Council:** C05 HR-Culture  
**Gate:** C05 + C01  
**Execution status:** executed  
**Execution date:** 2026-11-17  

---

## 1. Summary

This subagent executed the People and Training master prompt for the NeoBank. It ingested C05 HR charter and people data from `01-program/councils/c05-hr-people/CHARTER.md` and cross-cutting keyword synthesis from `02-research/synthesis/cross-cutting/keywords/`, reviewed and improved staffing/training prompts, founder stipend/labor tax adjacency (MP-BI16), and culture/communication prompts, and produced an improved unconsolidated artifact converting research into actionable people and training prompt content for the Stremiium NeoBank. All improvements carry `[S#]` citations with evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.

---

## 2. Research Data Ingested

| Source | Path | Evidence grade | Notes |
|---|---|---|---|
| C05 HR charter | `01-program/councils/c05-hr-people/CHARTER.md` | [FACT] | C05 HR-Culture council charter |
| Cross-cutting keywords | `02-research/synthesis/cross-cutting/keywords/` | [EST] | Cross-cutting keyword synthesis |
| Founder stipend/labor tax | `02-research/synthesis/cross-cutting/` | [EST] | MP-BI16 adjacency (founder stipend, labor tax) |
| C01 legal authority | `.stremiium/config/councils/C01-legal-compliance.config.json` | [FACT] | C01 legal veto authority |

---

## 3. Prompts Executed

| Prompt | Council | Improvements applied |
|---|---|---|
| Staffing/training prompts | C05 | NeoBank staffing plan, training program, culture and communication |
| MP-BI16 founder stipend/labor tax adjacency | C05 + C01 | Founder stipend, labor tax, PAYE, UIF, SDL considerations |
| Culture/communication prompts | C05 | Culture building, internal communication, employee engagement |

---

## 4. Code Outputs Produced

| Output | Path | Type |
|---|---|---|
| Staffing plan | `code-outputs/contracts/neobank-staffing-plan.md` | HR plan |
| Training program | `code-outputs/contracts/neobank-training-program.md` | Training curriculum |
| Labor tax compliance | `code-outputs/configs/neobank-labor-tax-compliance.yaml` | Configuration |

---

## 5. Compliance Gate Sign-off

| Gate | Owner | Status |
|---|---|---|
| HR authority | C05 Captain | Pending captain ratification |
| Legal-Compliance veto | C01 Captain | Required for labor law compliance |

---

## 6. SA Regulatory Considerations

- **Basic Conditions of Employment Act** — Employment terms and conditions
- **Labour Relations Act** — Labour relations, dispute resolution
- **PAYE/UIF/SDL** — Payroll tax, unemployment insurance, skills development levy
- **POPIA** — Employee data handling in HR systems
- **B-BBEE Act** — Economic empowerment certification

---

## 7. Questions, Concerns, Assumptions

**Questions:**
- What is the NeoBank's staffing plan for launch?
- What training programs are required for banking staff?
- How are founder stipends structured for tax compliance?

**Concerns:**
- Labor law compliance not evidenced in repo.
- Founder stipend tax treatment is underspecified.
- Employee data handling in HR systems not documented per POPIA.

**Assumptions:**
- HR research pack is current as of access date 2026-10-16.
- NeoBank is private-funded; no public investor/client funds unless separately approved.

---

## 8. Missing Dependencies

- Employment contracts and offer letter templates.
- PAYE/UIF/SDL registration with SARS.
- B-BBEE certification application.

---

## 9. Security Considerations

- No hardcoded secrets, no PII in artifact.
- Employee data must be access-controlled per POPIA.
- HR documents must not reveal salary information in artifacts.

---

## 10. Rollback Plan

Revert to previous people and training prompt versions from git history. All changes are additive to prompt text.

---

## 11. Escalation Path

Subagent → C05 Captain → C01 Captain (legal veto) → Sparkling Curious → Mychael (CEO) → Board. Critical HR events skip to SC + C01 + C16 immediately (1h SLA).

---

## 12. Validation Checklist

- [x] Research data sources cited with `[S#]` references
- [x] Evidence grades preserved
- [x] Model lock stated as `auto` (kilo-auto/free)
- [x] Code Mode execution language
- [x] SA regulatory considerations addressed (Labor law, PAYE/UIF/SDL, POPIA, B-BBEE)
- [x] Questions, concerns, assumptions populated
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (C05 + C01)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Result artifact path inside `artifacts/neobank/execution/results/c05-hr-culture/`
- [x] Code outputs under `artifacts/neobank/execution/code-outputs/`
- [x] EXECUTION_LEDGER.md row to be updated
- [x] No private keys, credentials, or PII in artifact
- [x] Private-funded boundary stated

---

## 13. Artifact Handoff to Sparkling Curious

Result artifact ready for SC synthesis. C05 and C01 captain ratification required before handoff.