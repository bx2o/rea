# Master Prompt — C08-DASHBOARD-DESIGNER (Dashboard-Designer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c08-design-creative/C08-DASHBOARD-DESIGNER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C08-DASHBOARD-DESIGNER  
**Council:** C08 C08 Design-Creative  
**Gate:** C08 Design-Creative + C11 Model-Router

---

## 1. Summary

- This master prompt instructs C08-DASHBOARD-DESIGNER to design agent dashboards, monitoring dashboards, and operational dashboards for the Stremiium AI Agent OS.
- Research data to ingest: 06-architecture/platform-design/ui/, C11 model router data, observability stack.
- Prompts to improve: Agent dashboard design, Monitoring dashboard design, Operational dashboard design, Data visualization, Dashboard layout, Dashboard interactions, Dashboard accessibility.
- Output artifact: `artifacts/stremiium/c08-design-creative/C08-DASHBOARD-DESIGNER-prompts.md`.

---

## 2. Assumptions

- Agent dashboards are designed.
- Monitoring dashboards are designed.
- Operational dashboards are designed.
- Data visualization is defined.

---

## 3. Questions

- What are the agent dashboards?
- How are monitoring dashboards designed?
- What operational dashboards are needed?
- What data visualization is used?
- How are dashboard interactions defined?

---

## 4. Concerns

- No dashboard designs exist.
- Data visualization not defined.
- Dashboard layout not documented.
- Dashboard accessibility not addressed.

---

## 5. Suggested Improvements

- Design agent dashboards.
- Design monitoring dashboards.
- Design operational dashboards.
- Define data visualization.
- Ensure dashboard accessibility.

---

## 6. Missing Dependencies

- 06-architecture/platform-design/ui/
- C11 model router data
- C02 operations monitoring

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
- Reference schema: {dashboardId, dashboardType, audience, visualization, layout, interactions, accessibility, owner, date}

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

- Dashboard designs may reveal operational data; restrict to C08 + C11 + C02.
- No secrets in dashboard configs.

---

## 11. South African Regulatory Considerations

- POPIA if dashboards display personal data
- CPA 68 of 2008 for consumer-facing dashboards

---

## 12. Compliance Gate

- C08 Design-Creative + C11 Model-Router. Dashboard design requires C11 for data source alignment.

---

## 13. Rollback Plan

- Re-design on usability issues.
- Re-visualize on data changes.
- Escalate dashboard conflicts to C08 + C11.

---

## 14. Escalation Path

- C08-DASHBOARD-DESIGNER → C08 Design-Creative Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c08-design-creative/C08-DASHBOARD-DESIGNER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C08 Design-Creative outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
