# Master Prompt — C04-MARKET-ANALYST (Market-Analyst)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c04-strategy-growth/C04-MARKET-ANALYST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C04-MARKET-ANALYST  
**Council:** C04 C04 Strategy-Growth  
**Gate:** C04 Strategy-Growth + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C04-MARKET-ANALYST to research AI agent OS, Web3 fintech, and developer tooling trends, creating a market brief with competitive analysis, market sizing, and trend identification.
- Research data to ingest: 02-research/landscape/03-neobank-digital-competitors/, 02-research/landscape/06-institution-deep-dives/, 02-research/synthesis/.
- Prompts to improve: Market brief, Competitive analysis, Market sizing, Trend identification, Technology radar.
- Output artifact: `artifacts/stremiium/c04-strategy-growth/C04-MARKET-ANALYST-prompts.md`.

---

## 2. Assumptions

- AI agent OS market trends are researched.
- Web3 fintech competitive landscape is analyzed.
- Developer tooling market size is modeled.
- Trends are identified systematically.

---

## 3. Questions

- What are the AI agent OS market trends?
- What is the Web3 fintech competitive landscape?
- What is the developer tooling market size?
- Which trends are most relevant to Stremiium?
- How does Stremiium compare to competitors?

---

## 4. Concerns

- No market brief exists.
- Competitive analysis not current.
- Market sizing not modeled.
- Trend identification not systematic.

---

## 5. Suggested Improvements

- Research AI agent OS, Web3 fintech, and developer tooling trends.
- Create competitive analysis from neobank/digital competitor research.
- Model market size for Stremiium target segments.
- Identify trends relevant to Stremiium product strategy.

---

## 6. Missing Dependencies

- 02-research/landscape/03-neobank-digital-competitors/
- 02-research/synthesis/
- C12 threat intelligence for security trends

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
- Reference schema: {trend, category, relevance, marketSize, growthRate, stremiiumPosition, competitiveAdvantage, evidenceGrade, sourceRef}

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

- Market brief may contain competitive intelligence; restrict to C04 + C12 + C15.
- No public competitor confidential data.

---

## 11. South African Regulatory Considerations

- FSCA for fintech market analysis
- C12 security trend analysis

---

## 12. Compliance Gate

- C04 Strategy-Growth + C12 Cybersecurity-Intel. Market brief requires C12 for security-related trends.

---

## 13. Rollback Plan

- Re-research on market shifts.
- Re-analyze competitors on new entrants.
- Re-model market sizing on data updates.

---

## 14. Escalation Path

- C04-MARKET-ANALYST → C04 Strategy-Growth Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c04-strategy-growth/C04-MARKET-ANALYST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C04 Strategy-Growth outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
