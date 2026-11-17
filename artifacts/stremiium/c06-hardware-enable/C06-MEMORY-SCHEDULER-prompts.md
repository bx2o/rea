# Master Prompt — C06-MEMORY-SCHEDULER (Memory-Scheduler)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-MEMORY-SCHEDULER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-MEMORY-SCHEDULER  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable

---

## 1. Summary

- This master prompt instructs C06-MEMORY-SCHEDULER to manage 48GB DDR3 ECC mixed memory modules across councils and agents, creating memory allocation, NUMA node balancing, and OOM prevention procedures.
- Research data to ingest: 02-research/landscape/05-hardware-specs/, C02 resource scheduler, Ollama memory management docs.
- Prompts to improve: Memory allocation map, NUMA node balancing, OOM prevention, Memory overcommit policy, Per-council memory quotas, Memory leak detection, Swap configuration.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-MEMORY-SCHEDULER-prompts.md`.

---

## 2. Assumptions

- Memory is allocated per council.
- NUMA nodes are balanced.
- OOM prevention is configured.
- Per-council memory quotas are defined.

---

## 3. Questions

- How is 48GB DDR3 ECC memory allocated across councils?
- How are NUMA nodes balanced?
- How is OOM prevented?
- What are per-council memory quotas?
- How are memory leaks detected?

---

## 4. Concerns

- 48GB DDR3 ECC is slow — memory bottlenecks expected.
- NUMA imbalance could cause performance degradation.
- No memory quotas per council.
- OOM killer could terminate critical agents.

---

## 5. Suggested Improvements

- Create memory allocation map for all councils.
- Balance NUMA nodes for dual-socket Xeon.
- Configure OOM prevention and OOM killer priorities.
- Define per-council memory quotas.
- Add memory leak detection.

---

## 6. Missing Dependencies

- 02-research/landscape/05-hardware-specs/
- C02 resource scheduler
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
- Reference schema: {council, memoryQuota, numaNode, oomPriority, currentUsage, peakUsage, alertThreshold, leakDetection}

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

- Memory allocation may reveal capacity; restrict to C06 + C02 + C11.
- No secrets in memory configs.

---

## 11. South African Regulatory Considerations

- None specific

---

## 12. Compliance Gate

- C06 Hardware Enable. Memory scheduling requires C06 + C02 for cross-council allocation.

---

## 13. Rollback Plan

- Re-balance NUMA nodes on imbalance.
- Adjust memory quotas on contention.
- Escalate OOM events to C06 + C02 + C12.

---

## 14. Escalation Path

- C06-MEMORY-SCHEDULER → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-MEMORY-SCHEDULER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
