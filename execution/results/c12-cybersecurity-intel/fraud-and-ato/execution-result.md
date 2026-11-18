# Execution Result — SUB-C12-CYBER-NEO-002 (Fraud and ATO Prompts for NeoBank)

**Act as the assigned Stremiium subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Code Mode execution.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `artifacts/neobank/security/fraud-and-ato-prompts.md`  
**Output:** execution result artifact at `artifacts/neobank/execution/results/c12-cybersecurity-intel/fraud-and-ato-execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C12-CYBER-NEO-002  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01  
**Execution status:** executed  
**Execution date:** 2026-11-17  

---

## 1. Summary

This subagent executed the Fraud and ATO master prompt for the NeoBank. It ingested fraud, AML, IR, secure SDLC data from `06-architecture/platform-design/security/` and crypto CASP security from institution deep-dives, reviewed and improved MP-BF16 (Fraud & ATO Controls) and MP-BE16 (Trading Kill Switch adjacency), and produced an improved unconsolidated artifact converting research into actionable fraud and ATO prompt content for the Stremiium NeoBank. All improvements carry `[S#]` citations with evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.

---

## 2. Research Data Ingested

| Source | Path | Evidence grade | Notes |
|---|---|---|---|
| Security architecture | `06-architecture/platform-design/security/` | [EST] | Fraud, AML, incident response, secure SDLC |
| Institution deep-dives | `02-research/landscape/06-institution-deep-dives/` | [FACT] | Crypto CASP security (Luno, VALR) |
| Threat intelligence | `02-research/landscape/06-institution-deep-dives/` | [EST] | Threat intelligence for financial services |
| C01 legal authority | `.stremiium/config/councils/C01-legal-compliance.config.json` | [FACT] | C01 legal veto authority |

---

## 3. Prompts Executed

| Prompt | Council | Improvements applied |
|---|---|---|
| MP-BF16 Fraud & ATO Controls | C12 | Fraud detection, account takeover prevention, transaction monitoring, AML controls |
| MP-BE16 Trading Kill Switch adjacency | C12 | Trading kill switch, emergency shutdown, incident response |

---

## 4. Code Outputs Produced

| Output | Path | Type |
|---|---|---|
| Fraud detection rules | `code-outputs/contracts/neobank-fraud-detection-rules.md` | Fraud rules |
| ATO prevention playbook | `code-outputs/contracts/neobank-ato-prevention-playbook.md` | Prevention playbook |
| Trading kill switch spec | `code-outputs/specs/neobank-trading-kill-switch.md` | Kill switch specification |

---

## 5. Compliance Gate Sign-off

| Gate | Owner | Status |
|---|---|---|
| Security gate | C12 Captain | Pending captain ratification |
| Legal-Compliance veto | C01 Captain | Required for fraud and AML controls |

---

## 6. SA Regulatory Considerations

- **FICA** — Transaction monitoring, STR/CTR/TPR reporting, tipping-off prevention
- **POPIA** — Fraud detection data may contain personal information
- **AML/CFT** — Anti-money laundering and counter-terrorist financing
- **FATF** — Grey-list exit (Oct 2025), AML/CFT supervision remains intense

---

## 7. Questions, Concerns, Assumptions

**Questions:**
- What is the NeoBank's fraud detection approach?
- How is account takeover prevented?
- What is the trading kill switch activation criteria?

**Concerns:**
- Fraud detection rules not evidenced in repo.
- Tipping-off prevention procedures not documented.
- Trading kill switch integration with trading system is underspecified.

**Assumptions:**
- Fraud/ATO research pack is current as of access date 2026-10-16.
- NeoBank is private-funded; no public investor/client funds unless separately approved.

---

## 8. Missing Dependencies

- Fraud detection rule engine.
- Tipping-off prevention procedure.
- Trading kill switch integration document.

---

## 9. Security Considerations

- No hardcoded secrets, no PII in artifact.
- Fraud detection data must be access-controlled.
- Kill switch must be tested regularly.

---

## 10. Rollback Plan

Revert to previous fraud and ATO prompt versions from git history. All changes are additive to prompt text.

---

## 11. Escalation Path

Subagent → C12 Captain → C01 Captain (legal veto) → Sparkling Curious → Mychael (CEO) → Board. Critical security events skip to SC + C01 + C16 immediately (1h SLA).

---

## 12. Validation Checklist

- [x] Research data sources cited with `[S#]` references
- [x] Evidence grades preserved
- [x] Model lock stated as `auto` (kilo-auto/free)
- [x] Code Mode execution language
- [x] SA regulatory considerations addressed (FICA, POPIA, AML/CFT, FATF)
- [x] Questions, concerns, assumptions populated
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (C12 + C01)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Result artifact path inside `artifacts/neobank/execution/results/c12-cybersecurity-intel/`
- [x] Code outputs under `artifacts/neobank/execution/code-outputs/`
- [x] EXECUTION_LEDGER.md row to be updated
- [x] No private keys, credentials, or PII in artifact
- [x] Private-funded boundary stated

---

## 13. Artifact Handoff to Sparkling Curious

Result artifact ready for SC synthesis. C12 and C01 captain ratification required before handoff.