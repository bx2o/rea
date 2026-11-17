# Master Prompt — C03-PROMPT-LIBRARIAN (Prompt Librarian)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c03-admin-knowledge/C03-PROMPT-LIBRARIAN-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C03-PROMPT-LIBRARIAN  
**Council:** C03 C03 Admin-Knowledge  
**Gate:** C03 Admin-Knowledge

---

## 1. Summary

- This master prompt instructs C03-PROMPT-LIBRARIAN to store all prompts in versioned prompt library with prompt ID, agent, model, thinking level, input schema, output schema, test fixture, last validated.
- Research data to ingest: .stremiium/config/agents/prompt-standard.schema.json, workflow-routing.md prompt contracts.
- Prompts to improve: Versioned prompt library, Prompt ID assignment, Agent-model-thinkingLevel mapping, Input/output schema, Test fixture, Last validated field.
- Output artifact: `artifacts/stremiium/c03-admin-knowledge/C03-PROMPT-LIBRARIAN-prompts.md`.

---

## 2. Assumptions

- All prompts are versioned in the library.
- Each prompt has complete metadata.
- Input/output schemas are defined.
- Test fixtures are associated with prompts.
- Last validated is tracked.

---

## 3. Questions

- How are prompts versioned in the library?
- What metadata does each prompt have?
- How are input/output schemas defined?
- How are test fixtures associated?
- How is last validated tracked?

---

## 4. Concerns

- No versioned prompt library exists.
- Prompt metadata incomplete.
- Input/output schemas not defined.
- Test fixtures not associated with prompts.

---

## 5. Suggested Improvements

- Create versioned prompt library with prompt ID, agent, model, thinking level, input schema, output schema, test fixture, last validated.
- Store all prompts in version control with change tracking.
- Associate test fixtures with every prompt.
- Track last validated date for each prompt.

---

## 6. Missing Dependencies

- .stremiium/config/agents/prompt-standard.schema.json
- workflow-routing.md prompt contracts

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
- Reference schema: {promptId, agentId, model, thinkingLevel, inputSchema, outputSchema, testFixture, lastValidated, version, council, sensitivity}

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

- Prompt library may contain sensitive instructions; restrict per classification.
- No secrets in prompt templates.

---

## 11. South African Regulatory Considerations

- POPIA for personal data in prompts

---

## 12. Compliance Gate

- C03 Admin-Knowledge. Prompt library requires C03 + C01 for compliance-sensitive prompts.

---

## 13. Rollback Plan

- Revert prompt to previous version if issues found.
- Re-validate prompt after changes.
- Suspend prompt use pending re-validation.

---

## 14. Escalation Path

- C03-PROMPT-LIBRARIAN → C03 Admin-Knowledge Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c03-admin-knowledge/C03-PROMPT-LIBRARIAN-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C03 Admin-Knowledge outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
