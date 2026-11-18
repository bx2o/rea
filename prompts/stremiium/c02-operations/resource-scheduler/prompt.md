# Master Prompt — C02-RESOURCE-SCHEDULER (Resource Scheduler)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c02-operations/C02-RESOURCE-SCHEDULER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C02-RESOURCE-SCHEDULER  
**Council:** C02 C02 Operations  
**Gate:** C02 Operations

---

## 1. Summary

- This master prompt instructs C02-RESOURCE-SCHEDULER to schedule council work across CPU, RAM, GPU, model quota, human review time, and task deadlines.
- Research data to ingest: C06 hardware specifications (Xeon E5-2620 v2, 48GB DDR3 ECC, Quadro K2200), C11 model router budget guard, C02 SLA definitions.
- Prompts to improve: CPU scheduling, RAM scheduling, GPU scheduling, Model quota scheduling, Human review time scheduling, Task deadline scheduling.
- Output artifact: `artifacts/stremiium/c02-operations/C02-RESOURCE-SCHEDULER-prompts.md`.

---

## 2. Assumptions

- Quadro K2200 has 4GB VRAM — GPU time is allocated carefully.
- DDR3 ECC RAM is slow — memory bottlenecks are expected.
- Model quotas are managed per council with alerts.
- Human review time is scheduled per council SLA.

---

## 3. Questions

- How are CPU resources scheduled across councils?
- How is RAM allocated for mixed ECC modules?
- How is Quadro K2200 GPU time allocated?
- How are model quotas managed per council?
- How is human review time scheduled?

---

## 4. Concerns

- Quadro K2200 has only 4GB VRAM — GPU contention likely.
- DDR3 ECC RAM is slow — memory bottlenecks expected.
- Model quota exhaustion could stall agent work.
- Human review time not scheduled across councils.

---

## 5. Suggested Improvements

- Create resource schedule for CPU, RAM, GPU, model quota, and human review.
- Define GPU time allocation for Ollama local inference vs other tasks.
- Add model quota alerts at 50%, 75%, 90%, 100%.
- Schedule human review time per council SLA.

---

## 6. Missing Dependencies

- C06 hardware specifications
- C11 model router budget guard
- C02 SLA definitions

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
- Reference schema: {resource, council, allocation, peakUsage, alertThreshold, schedule, notes}

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

- Resource schedule may contain capacity planning; restrict to C02 + C06 + C11.
- No resource allocation may bypass C10 budget authority.

---

## 11. South African Regulatory Considerations

- None specific

---

## 12. Compliance Gate

- C02 Operations. Resource scheduling requires C02 + C10 for budget-related allocations.

---

## 13. Rollback Plan

- Re-allocate resources on contention.
- Suspend low-priority tasks during resource shortages.
- Escalate resource conflicts to C10 + Sparkling Curious.

---

## 14. Escalation Path

- C02-RESOURCE-SCHEDULER → C02 Operations Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c02-operations/C02-RESOURCE-SCHEDULER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C02 Operations outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
