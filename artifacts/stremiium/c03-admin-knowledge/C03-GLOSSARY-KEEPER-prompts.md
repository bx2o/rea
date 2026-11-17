# Master Prompt — C03-GLOSSARY-KEEPER (Glossary Keeper)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-GLOSSARY-KEEPER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-GLOSSARY-KEEPER  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-GLOSSARY-KEEPER to maintain Stremiium glossary: $STM, council, subagent, AG-UI, aimock, CARF, FICA, POPIA, Omarchy, Hyprland, Hermes, OpenClaw.
- Research data to ingest: .stremiium/config/agents/taxonomy.json, workflow-routing.md §5 Vocabulary Law.
- Prompts to improve: Stremiium glossary, $STM definition, Council definition, Subagent definition, AG-UI definition, aimock definition, CARF definition, FICA definition, POPIA definition, Omarchy definition, Hyprland definition, Hermes definition, OpenClaw definition.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-GLOSSARY-KEEPER-prompts.md`.

---

## 2. Assumptions

- All Stremiium terms are in the glossary.
- Definitions are maintained with source references.
- New terms are added systematically.
- Glossary is versioned.

---

## 3. Questions

- What terms are in the Stremiium glossary?
- How are definitions maintained?
- How are new terms added?
- How are definitions versioned?
- How is glossary consistency verified?

---

## 4. Concerns

- No Stremiium glossary exists.
- Term definitions inconsistent across documents.
- New terms not added systematically.
- Glossary not versioned.

---

## 5. Suggested Improvements

- Maintain Stremiium glossary ($STM, council, subagent, AG-UI, aimock, CARF, FICA, POPIA, Omarchy, Hyprland, Hermes, OpenClaw).
- Define each term with source reference and context.
- Add new terms as they emerge in agent work.
- Version glossary with change log.

---

## 6. Missing Dependencies

- .stremiium/config/agents/taxonomy.json
- workflow-routing.md §5 Vocabulary Law

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
- Reference schema: {term, definition, source, context, category, version, lastUpdated, approvedBy}

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

- Glossary may contain org-specific terms; restrict sensitive definitions.
- No secrets in glossary entries.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in definitions (none expected)

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Glossary requires C03 + Sparkling Curious for vocabulary law compliance.

---

## 13. Rollback Plan

- Revert glossary to previous version if inconsistent.
- Re-define terms after glossary changes.
- Re-validate terminology consistency.

---

## 14. Escalation Path

- C03-GLOSSARY-KEEPER → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-GLOSSARY-KEEPER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
