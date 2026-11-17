# Master Prompt — C08-CHIEF-DESIGN-OFFICER (Chief-Design-Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c08-design-creative/C08-CHIEF-DESIGN-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C08-CHIEF-DESIGN-OFFICER  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C08-CHIEF-DESIGN-OFFICER to own design vision, brand, visual identity, and design system for Stremiium products, creating design guidelines and component standards.
- Research data to ingest: 01-program/plan/PLAN.md, 06-architecture/platform-design/ui/, brand guidelines.
- Prompts to improve: Design vision, Brand guidelines, Visual identity, Design system, Component standards, Accessibility standards, Design review process.
- Output artifact: `artifacts/stremiium/c08-design-creative/C08-CHIEF-DESIGN-OFFICER-prompts.md`.

---

## 2. Assumptions

- Design vision is defined.
- Brand guidelines are documented.
- Visual identity is established.
- Design system is created.

---

## 3. Questions

- What is the design vision for Stremiium products?
- What are the brand guidelines?
- What is the visual identity?
- How is the design system structured?
- What are the accessibility standards?

---

## 4. Concerns

- No design vision defined.
- Brand guidelines not documented.
- Visual identity not established.
- Design system not created.

---

## 5. Suggested Improvements

- Define design vision for Stremiium products.
- Create brand guidelines.
- Establish visual identity.
- Create design system with component standards.
- Define accessibility standards (WCAG 2.1).

---

## 6. Missing Dependencies

- 01-program/plan/PLAN.md
- 06-architecture/platform-design/ui/
- brand guidelines

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
- Reference schema: {designElement, specification, guideline, component, accessibility, owner, version, lastUpdated}

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

- Design assets may contain unreleased product info; restrict to C08 + C15 + Executive.
- No customer data in design docs.

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 for consumer accessibility
- Employment Equity Act 55 of 1998 (reasonable accommodation)

---

## 12. Compliance Gate

- C08 Design-Creative + C01 Legal-Compliance. Design system requires C01 for accessibility compliance.

---

## 13. Rollback Plan

- Re-version design system on issues.
- Re-audit accessibility on failures.
- Escalate design conflicts to C08 + C15.

---

## 14. Escalation Path

- C08-CHIEF-DESIGN-OFFICER → C08 Design-Creative Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c08-design-creative/C08-CHIEF-DESIGN-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 Design-Creative outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
