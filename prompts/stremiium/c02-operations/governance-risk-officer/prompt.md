# Master Prompt — C02-GOVERNANCE-RISK-OFFICER (Governance & Risk Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c02-operations/C02-GOVERNANCE-RISK-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C02-GOVERNANCE-RISK-OFFICER  
**Council:** C02 C02 Operations  
**Gate:** C02 Operations

---

## 1. Summary

- This master prompt instructs C02-GOVERNANCE-RISK-OFFICER to create the risk register for hardware failure, BIOS bricking, NVIDIA driver breakage, AUR supply chain, model hallucination, prompt injection, data leakage, regulatory breach, budget overrun, and agent deadlock.
- Research data to ingest: 01-program/delivery/risk/, 06-architecture/platform-design/security/, C12 cybersecurity risk register.
- Prompts to improve: Risk register, Hardware failure risk, BIOS bricking risk, NVIDIA driver breakage risk, AUR supply chain risk, Model hallucination risk, Prompt injection risk, Data leakage risk, Regulatory breach risk, Budget overrun risk, Agent deadlock risk.
- Output artifact: `artifacts/stremiium/c02-operations/C02-GOVERNANCE-RISK-OFFICER-prompts.md`.

---

## 2. Assumptions

- Every T-phase risk is identified and assigned.
- Risk owners and mitigations are defined.
- Risk tolerance thresholds are set per council.
- Deadlock detection and recovery procedures exist.

---

## 3. Questions

- What are the top risks for each T-phase?
- How are risks mitigated and assigned?
- What is the risk tolerance for hardware failure?
- How is BIOS bricking risk contained?
- What is the mitigation for agent deadlock?

---

## 4. Concerns

- BIOS bricking could render hardware unrecoverable without SPI programmer.
- AUR supply chain attacks could compromise the home lab.
- Model hallucination could produce non-compliant prompts.
- Agent deadlock could stall multi-council workflows.

---

## 5. Suggested Improvements

- Create a comprehensive risk register for all T1–T10 phases.
- Assign risk owners and mitigation actions for each risk.
- Define risk tolerance thresholds per council.
- Add deadlock detection and recovery procedures.

---

## 6. Missing Dependencies

- workflow-routing.md §4
- 01-program/delivery/risk/
- C12 cybersecurity risk register

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read assigned research data sources and extract obligations tagged [STATUTE]/[REG]/[REG-GUIDE] with [S#] references.
- 2. Read current prompt text for assigned MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ prompts from the master prompt registry.
- 3. Identify gaps between research data and current prompt content.
- 4. Draft improved prompt sections with concrete research citations and [FACT]/[EST]/[UNKNOWN]/[INFER] evidence grades.
- 5. Replace all placeholders/TBD with concrete content.
- 6. Add South African regulatory considerations where relevant (FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM restrictions).
- 7. Compile all improvements into the unconsolidated artifact at the stated output path.
- 8. Run validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains prompt text only.
- Reference schema: {riskId, category, description, likelihood, impact, owner, mitigation, status, reviewDate}

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Risk register may contain security vulnerabilities; restrict to C02 + C12.
- No exploit details in risk register.

---

## 11. South African Regulatory Considerations

- POPIA for data breach risk
- FSCA/FICA for financial regulatory risk

---

## 12. Compliance Gate

- C02 Operations. Risk register requires C02 + C12 for security risks.

---

## 13. Rollback Plan

- Activate risk mitigation for high-impact risks.
- Escalate critical risks to Sparkling Curious + C12.
- Suspend tasks with unmitigated critical risks.

---

## 14. Escalation Path

- C02-GOVERNANCE-RISK-OFFICER → C02 Operations Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c02-operations/C02-GOVERNANCE-RISK-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 Operations outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
