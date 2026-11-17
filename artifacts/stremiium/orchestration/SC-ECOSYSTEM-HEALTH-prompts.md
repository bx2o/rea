# Master Prompt — SC-ECOSYSTEM-HEALTH (Ecosystem Health Monitor)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/orchestration/SC-ECOSYSTEM-HEALTH-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SC-ECOSYSTEM-HEALTH  
**Council:** SC Sparkling Curious (SC-MASTER-001)  
**Gate:** Sparkling Curious (SC-MASTER-001)

---

## 1. Summary

- This master prompt instructs SC-ECOSYSTEM-HEALTH to monitor agent responsiveness, task backlog age, SLA breaches, model routing failures, Ollama GPU/CPU fallback, OpenCode session errors, Hermes memory corruption, OpenClaw channel failures, CopilotKit AG-UI stream errors, aimock fixture mismatches, VS Code/Codex UI bridge errors, Hyprland instability, NVIDIA driver regressions, security alert volume, and compliance gate blockers.
- Research data to ingest: .stremiium/observability/, .stremiium/governance/workflow-routing.md §4 Escalation & SLA, 01-program/delivery/definition-of-done.md.
- Prompts to improve: Daily health summary, Critical incident list, Degraded capability list, Recommended council escalation, Task-folder update instructions.
- Output artifact: `artifacts/stremiium/orchestration/SC-ECOSYSTEM-HEALTH-prompts.md`.

---

## 2. Assumptions

- SLAs: Critical 1h initial/4h resolution, High 4h/24h, Medium 24h/72h, Low 72h/1 week.
- Health monitor routes fixes; does not fix directly.
- Ollama GPU/CPU fallback monitored on Quadro K2200 (4GB VRAM).
- All health data excludes PII and secrets.

---

## 3. Questions

- Which agents exceed SLA response times?
- Which model routing failures require fallback to `auto`?
- Which OpenClaw channel failures need C12 security review?
- Which compliance gate blockers are stalling task execution?
- What is the Ollama GPU/CPU fallback status on Quadro K2200?

---

## 4. Concerns

- Model routing ping-pong could cause deadlock (C12 deadlock detector).
- Hermes memory corruption could lose learned procedures.
- OpenClaw historical critical vulnerability risk requires isolation.
- SLA breaches may cascade across multi-council dependencies.

---

## 5. Suggested Improvements

- Add daily health summary with SLA compliance percentage.
- Add critical incident list with assigned council escalation.
- Add degraded capability list with recommended workarounds.
- Add task-folder update instructions for health-related changes.

---

## 6. Missing Dependencies

- workflow-routing.md §4 SLA definitions
- .stremiium/observability/ monitoring stack
- task/{id}/summary/ status files

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
- Reference schema: {agentId, responsiveness, backlogAge, slaBreach, modelRoutingFailure, localFallback, sessionError, memoryCorruption, channelFailure, streamError, fixtureMismatch, uiBridgeError, compositorInstability, driverRegression, alertVolume, blocker, recommendedEscalation}

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

- Security alert volume triggers C12 incident response.
- No health data may contain PII or secrets.
- Compliance gate blockers require C01 review.

---

## 11. South African Regulatory Considerations

- POPIA breach notification if health data contains personal data
- FICA STR reporting if financial anomalies detected

---

## 12. Compliance Gate

- Sparkling Curious (SC-MASTER-001) — receives health summaries and escalates critical incidents.

---

## 13. Rollback Plan

- Freeze tasks with repeated tool failure loops.
- Quarantine agents with memory corruption.
- Route health degradations to correct council per coordination matrix.

---

## 14. Escalation Path

- SC-ECOSYSTEM-HEALTH → Sparkling Curious (SC-MASTER-001) Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/orchestration/SC-ECOSYSTEM-HEALTH-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other Sparkling Curious (SC-MASTER-001) outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
