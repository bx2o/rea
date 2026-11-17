# Master Prompt — C04-COMPETITIVE-INTELLIGENCE-ANALYST (Competitive-Intelligence-Analyst)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c04-strategy-growth/C04-COMPETITIVE-INTELLIGENCE-ANALYST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C04-COMPETITIVE-INTELLIGENCE-ANALYST  
**Council:** C04 C04 Strategy-Growth  
**Gate:** C04 Strategy-Growth + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C04-COMPETITIVE-INTELLIGENCE-ANALYST to research competing agent OS/platform approaches, creating a competitive brief with strengths, weaknesses, opportunities, and threats for each competitor.
- Research data to ingest: 02-research/landscape/03-neobank-digital-competitors/, 02-research/landscape/06-institution-deep-dives/.
- Prompts to improve: Competitive brief, Competitor analysis, SWOT analysis, Threat assessment, Opportunity identification.
- Output artifact: `artifacts/stremiium/c04-strategy-growth/C04-COMPETITIVE-INTELLIGENCE-ANALYST-prompts.md`.

---

## 2. Assumptions

- Competing agent OS platforms are researched.
- Competitor strengths and weaknesses are analyzed.
- Opportunities are identified for Stremiium.
- Threats are assessed against competitors.

---

## 3. Questions

- Who are the competing agent OS platforms?
- What are their strengths and weaknesses?
- What opportunities exist for Stremiium?
- What threats do competitors pose?
- How should Stremiium position against competitors?

---

## 4. Concerns

- No competitive brief exists.
- Competitor analysis not systematic.
- SWOT analysis not documented.
- Threat assessment not current.

---

## 5. Suggested Improvements

- Research competing agent OS/platform approaches (OpenCode, CopilotKit, LangChain, Mastra, etc.).
- Create competitive brief with SWOT for each competitor.
- Identify Stremiium differentiation opportunities.
- Assess competitive threats to Stremiium market position.

---

## 6. Missing Dependencies

- 02-research/landscape/03-neobank-digital-competitors/
- C12 threat intelligence
- C09 market positioning

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
- Reference schema: {competitor, product, strengths, weaknesses, opportunities, threats, stremiiumDifferentiation, marketPosition, evidenceGrade, sourceRef}

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

- Competitive brief may contain intelligence; restrict to C04 + C12 + C15.
- No classified competitor information.

---

## 11. South African Regulatory Considerations

- None specific

---

## 12. Compliance Gate

- C04 Strategy-Growth + C12 Cybersecurity-Intel. Competitive brief requires C12 for security-related competitor analysis.

---

## 13. Rollback Plan

- Re-research competitors on market changes.
- Re-assess threats on new competitor moves.
- Re-position Stremiium on strategic shifts.

---

## 14. Escalation Path

- C04-COMPETITIVE-INTELLIGENCE-ANALYST → C04 Strategy-Growth Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c04-strategy-growth/C04-COMPETITIVE-INTELLIGENCE-ANALYST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C04 Strategy-Growth outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
