# Master Prompt — C06-STORAGE-LAYOUT-DESIGNER (Storage-Layout-Designer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c06-hardware-enable/C06-STORAGE-LAYOUT-DESIGNER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C06-STORAGE-LAYOUT-DESIGNER  
**Council:** C06 C06 Hardware Enable  
**Gate:** C06 Hardware Enable + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C06-STORAGE-LAYOUT-DESIGNER to design NVMe storage layout, partitioning, filesystems, encryption, backup, and retention for the home lab.
- Research data to ingest: 02-research/landscape/05-hardware-specs/, C03 archive retention policy, POPIA retention requirements.
- Prompts to improve: NVMe storage layout, Partitioning scheme, Filesystem selection, Encryption at rest, Backup schedule, Retention policy, Disk health monitoring, SMART checks.
- Output artifact: `artifacts/stremiium/c06-hardware-enable/C06-STORAGE-LAYOUT-DESIGNER-prompts.md`.

---

## 2. Assumptions

- Storage layout is designed for home lab.
- Encryption at rest is configured.
- Backup schedule is defined.
- Retention policy matches POPIA/FICA.

---

## 3. Questions

- What is the NVMe storage layout?
- What partitioning scheme is used?
- Which filesystems are selected?
- Is encryption at rest configured?
- What is the backup schedule?

---

## 4. Concerns

- No storage layout documented.
- Encryption at rest may not be configured.
- Backup schedule not defined.
- Retention policy not aligned with POPIA/FICA.

---

## 5. Suggested Improvements

- Design NVMe storage layout with partitioning.
- Select filesystems (ext4, btrfs, xfs).
- Configure encryption at rest (LUKS).
- Define backup schedule and retention policy.
- Add disk health monitoring and SMART checks.

---

## 6. Missing Dependencies

- 02-research/landscape/05-hardware-specs/
- C03 archive retention policy
- POPIA retention requirements
- FICA 5-year retention

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
- Reference schema: {device, partition, filesystem, mountPoint, encryption, size, backupSchedule, retentionPeriod, smartStatus}

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

- Storage layout may contain data locations; restrict to C06 + C01 + C12.
- No encryption keys in storage docs.

---

## 11. South African Regulatory Considerations

- POPIA retention schedule
- FICA 5-year record retention

---

## 12. Compliance Gate

- C06 Hardware Enable + C01 Legal-Compliance. Storage requires C01 for POPIA/FICA retention alignment.

---

## 13. Rollback Plan

- Restore from backup if storage fails.
- Re-encrypt if keys compromised.
- Re-align retention on regulatory changes.

---

## 14. Escalation Path

- C06-STORAGE-LAYOUT-DESIGNER → C06 Hardware Enable Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c06-hardware-enable/C06-STORAGE-LAYOUT-DESIGNER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C06 Hardware Enable outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
