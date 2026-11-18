# Master Prompt — C11-MODEL-ROUTER (Model-Router)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c11-dev-engineering/C11-MODEL-ROUTER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C11-MODEL-ROUTER  
**Council:** C11 C11 Dev-Engineering  
**Gate:** C11 Dev-Engineering + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C11-MODEL-ROUTER to own model routing, model selection, cost guardrails, and LLM gateway for Stremiium AI Agent OS.
- Research data to ingest: model routing, LLM gateway, OpenCode configuration, model cost.
- Prompts to improve: Model routing, Model selection, Cost guardrails, LLM gateway, OpenCode configuration, Model failover, Model usage tracking.
- Output artifact: `artifacts/stremiium/c11-dev-engineering/C11-MODEL-ROUTER-prompts.md`.

---

## 2. Assumptions

- Model routing is defined.
- Model selection is automated.
- Cost guardrails are enforced.
- LLM gateway is configured.

---

## 3. Questions

- How is model routing defined?
- How is model selection automated?
- What are the cost guardrails?
- How is LLM gateway configured?
- How is model failover handled?

---

## 4. Concerns

- No model routing defined.
- Model selection not automated.
- Cost guardrails not enforced.
- LLM gateway not configured.

---

## 5. Suggested Improvements

- Define model routing.
- Automate model selection.
- Enforce cost guardrails.
- Configure LLM gateway.
- Handle model failover.

---

## 6. Missing Dependencies

- model routing
- LLM gateway
- C10 budget for cost guardrails

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
- Reference schema: {routeId, route, model, costGuardrail, failover, usage, owner, date}

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

- Model routing may contain API keys; restrict to C11 + C12 + C10.
- No credentials in routing config.

---

## 11. South African Regulatory Considerations

- POPIA if model routing sends personal data
- CPA 68 of 2008 for consumer AI

---

## 12. Compliance Gate

- C11 Dev-Engineering + C12 Cybersecurity-Intel. Model router requires C12 for security + C10 for cost.

---

## 13. Rollback Plan

- Re-route on failures.
- Re-guard on cost overruns.
- Escalate routing conflicts to C11 + C12.

---

## 14. Escalation Path

- C11-MODEL-ROUTER → C11 Dev-Engineering Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c11-dev-engineering/C11-MODEL-ROUTER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C11 Dev-Engineering outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
