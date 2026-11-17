# Master Prompt — C06-GPU-VRAM-ALLOCATOR (GPU-VRAM-Allocator)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-GPU-VRAM-ALLOCATOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-GPU-VRAM-ALLOCATOR  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C11 Model-Router

---

## 1. Summary

- This master prompt instructs C06-GPU-VRAM-ALLOCATOR to allocate Quadro K2200 4GB VRAM across Ollama local inference and other GPU tasks, creating VRAM allocation, model swap, and GPU scheduling policies.
- Research data to ingest: 02-research/landscape/05-hardware-specs/, C11 model router budget guard, Ollama GPU documentation.
- Prompts to improve: VRAM allocation map, Model swap policy, GPU scheduling, Per-council GPU quotas, VRAM overcommit prevention, GPU temperature monitoring, Driver compatibility.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-GPU-VRAM-ALLOCATOR-prompts.md`.

---

## 2. Assumptions

- VRAM is allocated per council/task.
- Model swap is configured for VRAM limits.
- GPU scheduling is defined.
- Per-council GPU quotas are set.

---

## 3. Questions

- How is Quadro K2200 4GB VRAM allocated?
- What is the model swap policy?
- How is GPU scheduling defined?
- What are per-council GPU quotas?
- How is VRAM overcommit prevented?

---

## 4. Concerns

- Quadro K2200 has only 4GB VRAM — GPU contention likely.
- Model swapping could cause latency.
- No GPU quotas per council.
- Driver compatibility issues with new kernels.

---

## 5. Suggested Improvements

- Create VRAM allocation map for all councils/tasks.
- Define model swap policy for VRAM limits.
- Create GPU scheduling policy.
- Set per-council GPU quotas.
- Add VRAM overcommit prevention.

---

## 6. Missing Dependencies

- 02-research/landscape/05-hardware-specs/
- C11 model router budget guard
- C02 resource scheduler

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
- Reference schema: {council, vramQuota, modelSwap, gpuPriority, currentUsage, peakUsage, temperature, driverVersion}

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

- GPU allocation may reveal model usage; restrict to C06 + C11 + C02.
- No model weights in allocation docs.

---

## 11. South African Regulatory Considerations

- None specific

---

## 12. Compliance Gate

- C06 Hardware Enable + C11 Model-Router. GPU allocation requires C11 for model quota coordination.

---

## 13. Rollback Plan

- Rebalance VRAM on contention.
- Disable GPU for non-critical tasks.
- Escalate GPU failures to C06 + C12.

---

## 14. Escalation Path

- C06-GPU-VRAM-ALLOCATOR → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-GPU-VRAM-ALLOCATOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
