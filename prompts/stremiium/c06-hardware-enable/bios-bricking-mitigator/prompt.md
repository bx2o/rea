# Master Prompt — C06-BIOS-BRICKING-MITIGATOR (BIOS-Bricking-Mitigator)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-BIOS-BRICKING-MITIGATOR-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-BIOS-BRICKING-MITIGATOR  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C06-BIOS-BRICKING-MITIGATOR to prevent and recover from BIOS/UEFI bricking during home lab firmware updates, creating SPI programmer backup, firmware rollback, and safe update procedures.
- Research data to ingest: 02-research/landscape/05-hardware-specs/, C06 NVIDIA driver runbook, motherboard vendor BIOS documentation.
- Prompts to improve: BIOS/UEFI safe update procedure, SPI programmer backup and restore, Firmware rollback procedure, BIOS settings backup, Dual-BIOS configuration, Bricking recovery runbook.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-BIOS-BRICKING-MITIGATOR-prompts.md`.

---

## 2. Assumptions

- BIOS updates follow safe update procedure.
- SPI programmer backup exists.
- Firmware rollback is possible.
- BIOS settings are backed up before changes.

---

## 3. Questions

- How is BIOS bricking prevented during firmware updates?
- What SPI programmer is used for backup/restore?
- How is firmware rolled back if update fails?
- How are BIOS settings backed up?
- Is dual-BIOS configured?

---

## 4. Concerns

- BIOS bricking could render hardware unrecoverable without SPI programmer.
- No SPI programmer backup documented.
- Firmware rollback procedure missing.
- BIOS settings not backed up before changes.

---

## 5. Suggested Improvements

- Create BIOS/UEFI safe update procedure with rollback criteria.
- Document SPI programmer backup and restore procedure.
- Create firmware rollback procedure.
- Backup BIOS settings before changes.
- Configure dual-BIOS where available.

---

## 6. Missing Dependencies

- motherboard vendor BIOS documentation
- C06 hardware enablement report
- C12 cybersecurity incident response

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
- Reference schema: {updateId, motherboard, currentVersion, targetVersion, backupMethod, rollbackMethod, spiProgrammer, riskLevel, status}

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

- BIOS procedures may contain hardware access details; restrict to C06 + C12.
- No physical access credentials in docs.

---

## 11. South African Regulatory Considerations

- None specific

---

## 12. Compliance Gate

- C06 Hardware Enable + C12 Cybersecurity-Intel. BIOS changes require C12 security review.

---

## 13. Rollback Plan

- Restore BIOS from backup if update fails.
- Use SPI programmer for hardware-level recovery.
- Escalate unrecoverable bricking to C06 + C12 + C02.

---

## 14. Escalation Path

- C06-BIOS-BRICKING-MITIGATOR → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-BIOS-BRICKING-MITIGATOR-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
