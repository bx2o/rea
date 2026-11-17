# Master Prompt — C02-VENDOR-PROCUREMENT-MANAGER (Vendor & Procurement Manager)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c02-operations/C02-VENDOR-PROCUREMENT-MANAGER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C02-VENDOR-PROCUREMENT-MANAGER  
**Council:** C02 C02 Operations  
**Gate:** C02 Operations + C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C02-VENDOR-PROCUREMENT-MANAGER to track all paid/free services, creating a procurement and cost-control register with OpenCode Go budget, model provider costs, and cost attribution by council and task.
- Research data to ingest: C10 budget authority, .stremiium/governance/workflow-routing.md CRD-resource-cost-governor, OpenCode Go pricing.
- Prompts to improve: Paid/free service register, Cost-control register, OpenCode Go budget, ChatGPT free tier, Ollama cloud, Cloudflare, Tailscale, GitHub, model providers.
- Output artifact: `artifacts/stremiium/c02-operations/C02-VENDOR-PROCUREMENT-MANAGER-prompts.md`.

---

## 2. Assumptions

- Every service is classified as paid or free tier.
- Monthly OpenCode Go budget is defined with alert thresholds.
- Cost attribution is by council, task ID, product line, $STM service, and experiment.
- Free-tier优先 policy for model selection.

---

## 3. Questions

- Which services are paid vs free tier?
- What is the monthly OpenCode Go budget?
- Which model providers require procurement approval?
- How are costs attributed by council and task?
- What is the cost optimization strategy?

---

## 4. Concerns

- No cost-control register exists for paid services.
- OpenCode Go budget may be exceeded without alerts.
- Free-tier model substitution not documented.
- Cost attribution by council/task not implemented.

---

## 5. Suggested Improvements

- Create a paid/free service register with cost controls.
- Define monthly OpenCode Go budget with alert thresholds (50%, 75%, 90%, 100%).
- Add free-tier优先 policy for model selection.
- Add cost attribution by council, task ID, product line, $STM service, experiment.

---

## 6. Missing Dependencies

- C10 budget authority
- workflow-routing.md CRD-resource-cost-governor
- OpenCode Go pricing

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
- Reference schema: {service, type, monthlyCost, council, alertThreshold, costCenter, approvalRequired, notes}

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

- Cost register may contain pricing negotiations; restrict to C02 + C10.
- No payment credentials in vendor register.

---

## 11. South African Regulatory Considerations

- POPIA for vendor personal data processing
- FICA for vendor financial transactions

---

## 12. Compliance Gate

- C02 Operations + C10 Finance-CFO. Budget authority rests with C10.

---

## 13. Rollback Plan

- Suspend paid services exceeding budget.
- Switch to free-tier alternatives.
- Escalate budget overruns to C10 + Sparkling Curious.

---

## 14. Escalation Path

- C02-VENDOR-PROCUREMENT-MANAGER → C02 Operations Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c02-operations/C02-VENDOR-PROCUREMENT-MANAGER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 Operations outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
