# Master Prompt — C03-DOCUMENTATION-SPECIALIST (Documentation-Specialist)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-DOCUMENTATION-SPECIALIST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-DOCUMENTATION-SPECIALIST  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C03-DOCUMENTATION-SPECIALIST to write user manual for Stremiium AI Agent OS with sections for Basics, Navigation, Hotkeys, Applications, AI tools, Development tools, Configuration, Dotfiles, Themes, Troubleshooting.
- Research data to ingest: 01-program/councils/ charters, 01-program/delivery/ governance, 06-architecture/ READMEs, C01 compliance documentation checklist.
- Prompts to improve: Stremiium AI Agent OS user manual, Basics section, Navigation section, Hotkeys section, Applications section, AI tools section, Development tools section, Configuration section, Dotfiles section, Themes section, Troubleshooting section.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-DOCUMENTATION-SPECIALIST-prompts.md`.

---

## 2. Assumptions

- User manual contains all 11 sections.
- Documentation is organized for different user types.
- Accessibility is addressed in documentation.
- Regulatory disclaimers are included.
- Documentation is versioned with artifacts.

---

## 3. Questions

- What sections should the user manual contain?
- How is documentation organized for different user types?
- How is accessibility addressed in documentation?
- How are regulatory disclaimers included?
- How is documentation versioned?

---

## 4. Concerns

- No user manual exists for Stremiium AI Agent OS.
- Documentation lacks legal disclaimers.
- Accessibility not addressed in docs.
- Documentation not versioned with artifacts.

---

## 5. Suggested Improvements

- Write Stremiium AI Agent OS user manual with all 11 sections.
- Include legal disclaimers and regulatory controls per C01 requirements.
- Add accessibility documentation per C08 requirements.
- Version documentation with artifact releases.

---

## 6. Missing Dependencies

- 01-program/councils/ charters
- 01-program/delivery/ governance
- 06-architecture/ READMEs
- C01 compliance documentation checklist

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
- Reference schema: {docId, title, section, content, audience, version, regulatoryDisclaimer, accessibility, lastUpdated, owner}

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

- Documentation may contain config details; restrict sensitive sections per classification.
- No secrets in documentation.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in docs
- CPA 68 of 2008 consumer disclosures
- Companies Act 71 of 2008

---

## 12. Compliance Gate

- C03 Admin-Knowledge + C01 Legal-Compliance. Documentation requires C01 disclaimer review.

---

## 13. Rollback Plan

- Revert documentation to previous version if errors found.
- Re-issue documentation with corrected disclaimers.
- Re-validate accessibility after changes.

---

## 14. Escalation Path

- C03-DOCUMENTATION-SPECIALIST → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-DOCUMENTATION-SPECIALIST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
