# Master Prompt — C05-AGENT-HUMAN-TEAMING-COACH (Agent-Human-Teaming-Coach)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c05-hr-culture/C05-AGENT-HUMAN-TEAMING-COACH-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C05-AGENT-HUMAN-TEAMING-COACH  
**Council:** C05 C05 HR-Culture  
**Gate:** C05 HR-Culture + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C05-AGENT-HUMAN-TEAMING-COACH to define handoff rules between humans and agents, creating a teaming playbook with escalation, approval, and collaboration protocols.
- Research data to ingest: 01-program/councils/c05-hr-people/CHARTER.md, .stremiium/governance/workflow-routing.md.
- Prompts to improve: Teaming playbook, Handoff rules, Human-in-the-loop protocols, Agent escalation to human, Human override of agent decisions.
- Output artifact: `artifacts/stremiium/c05-hr-culture/C05-AGENT-HUMAN-TEAMING-COACH-prompts.md`.

---

## 2. Assumptions

- Handoff rules are defined between humans and agents.
- Human-in-the-loop is required for regulated decisions.
- Agents escalate to humans.
- Human override authority is documented.

---

## 3. Questions

- What are the handoff rules between humans and agents?
- When is human-in-the-loop required?
- How do agents escalate to humans?
- Can humans override agent decisions?
- What are the collaboration protocols?

---

## 4. Concerns

- No teaming playbook exists.
- Handoff rules not defined.
- Human-in-the-loop protocols not established.
- Human override authority not documented.

---

## 5. Suggested Improvements

- Create agent-human teaming playbook with handoff rules.
- Define human-in-the-loop requirements for regulated decisions.
- Establish agent-to-human escalation protocols.
- Document human override authority for agent decisions.

---

## 6. Missing Dependencies

- .stremiium/governance/workflow-routing.md escalation
- C01 legal for ADM oversight
- C12 security for human override limits

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
- Reference schema: {playbookId, scenario, handoffRule, humanInLoopRequired, agentEscalation, humanOverride, owner, reviewDate, status}

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

- Teaming playbook may contain authority limits; restrict to C05 + C01 + C12.
- No security-critical override rules without C12.

---

## 11. South African Regulatory Considerations

- POPIA s71 automated decision-making
- FAIS for financial advice human oversight

---

## 12. Compliance Gate

- C05 HR-Culture + C01 Legal-Compliance. Teaming requires C01 for ADM + human oversight compliance.

---

## 13. Rollback Plan

- Re-define handoff rules on conflicts.
- Re-establish human override on misuse.
- Escalate teaming disputes to C01 + Sparkling Curious.

---

## 14. Escalation Path

- C05-AGENT-HUMAN-TEAMING-COACH → C05 HR-Culture Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c05-hr-culture/C05-AGENT-HUMAN-TEAMING-COACH-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C05 HR-Culture outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
