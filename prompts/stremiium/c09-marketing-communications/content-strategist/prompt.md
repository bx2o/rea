# Master Prompt — C09-CONTENT-STRATEGIST (Content-Strategist)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c09-marketing-communications/C09-CONTENT-STRATEGIST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C09-CONTENT-STRATEGIST  
**Council:** C09 C09 Marketing-Communications  
**Gate:** C09 Marketing-Communications

---

## 1. Summary

- This master prompt instructs C09-CONTENT-STRATEGIST to develop content strategy, editorial calendar, and content production for Stremiium marketing channels.
- Research data to ingest: C09 marketing strategy, content marketing best practices, SEO guidelines.
- Prompts to improve: Content strategy, Editorial calendar, Content production, SEO optimization, Content distribution, Content performance, Content governance.
- Output artifact: `artifacts/stremiium/c09-marketing-communications/C09-CONTENT-STRATEGIST-prompts.md`.

---

## 2. Assumptions

- Content strategy is developed.
- Editorial calendar is created.
- Content is produced.
- SEO is optimized.

---

## 3. Questions

- What is the content strategy?
- How is the editorial calendar structured?
- How is content produced?
- How is SEO optimized?
- How is content performance measured?

---

## 4. Concerns

- No content strategy exists.
- Editorial calendar not created.
- Content production not defined.
- SEO not optimized.

---

## 5. Suggested Improvements

- Develop content strategy.
- Create editorial calendar.
- Define content production process.
- Optimize SEO.
- Measure content performance.

---

## 6. Missing Dependencies

- C09 marketing strategy
- content marketing best practices
- C08 design for visual content

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
- Reference schema: {contentId, contentType, topic, channel, publishDate, seoStatus, performance, owner, date}

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

- Content may contain product info; restrict to C09 + C08 + C15.
- No customer data in content.

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 for consumer content
- POPIA if content contains personal data

---

## 12. Compliance Gate

- C09 Marketing-Communications. Content strategy requires C09 + C01 for POPIA/CPA compliance.

---

## 13. Rollback Plan

- Re-content on performance issues.
- Re-SEO on algorithm changes.
- Escalate content conflicts to C09 + C08.

---

## 14. Escalation Path

- C09-CONTENT-STRATEGIST → C09 Marketing-Communications Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c09-marketing-communications/C09-CONTENT-STRATEGIST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C09 Marketing-Communications outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
