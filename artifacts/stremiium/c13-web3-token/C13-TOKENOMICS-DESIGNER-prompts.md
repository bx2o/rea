# Master Prompt — C13-TOKENOMICS-DESIGNER (Tokenomics-Designer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c13-web3-token/C13-TOKENOMICS-DESIGNER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C13-TOKENOMICS-DESIGNER  
**Council:** C13 C13 Web3-Token  
**Gate:** C13 Web3-Token + C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C13-TOKENOMICS-DESIGNER to design $STM tokenomics including supply, distribution, vesting, and economic model.
- Research data to ingest: tokenomics design, token supply, token distribution.
- Prompts to improve: Token supply, Token distribution, Vesting schedules, Economic model, Token velocity, Incentive design, Token valuation.
- Output artifact: `artifacts/stremiium/c13-web3-token/C13-TOKENOMICS-DESIGNER-prompts.md`.

---

## 2. Assumptions

- Token supply is defined.
- Token distribution is designed.
- Vesting schedules are set.
- Economic model is documented.

---

## 3. Questions

- What is the token supply?
- How is token distribution designed?
- What are the vesting schedules?
- What is the economic model?
- How is token velocity managed?

---

## 4. Concerns

- No token supply defined.
- Token distribution not designed.
- Vesting schedules not set.
- Economic model not documented.

---

## 5. Suggested Improvements

- Define token supply.
- Design token distribution.
- Set vesting schedules.
- Document economic model.
- Manage token velocity.

---

## 6. Missing Dependencies

- tokenomics design
- C10 finance for economic model

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
- Reference schema: {tokenomicsId, supply, distribution, vesting, economicModel, velocity, incentives, valuation, owner, date}

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

- Tokenomics are sensitive; restrict to C13 + C10 + Executive.
- No internal financial data in tokenomics.

---

## 11. South African Regulatory Considerations

- FSCA CASP for token offerings
- SARS CARF for token transactions
- CPA 68 of 2008 for consumer tokens

---

## 12. Compliance Gate

- C13 Web3-Token + C10 Finance-CFO. Tokenomics requires C10 for financial modeling.

---

## 13. Rollback Plan

- Re-supply on market feedback.
- Re-distribute on governance issues.
- Escalate tokenomics conflicts to C13 + C10.

---

## 14. Escalation Path

- C13-TOKENOMICS-DESIGNER → C13 Web3-Token Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c13-web3-token/C13-TOKENOMICS-DESIGNER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C13 Web3-Token outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
