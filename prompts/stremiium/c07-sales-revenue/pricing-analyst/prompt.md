# Master Prompt — C07-PRICING-ANALYST (Pricing-Analyst)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c07-sales-revenue/C07-PRICING-ANALYST-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C07-PRICING-ANALYST  
**Council:** C07 C07 Sales-Revenue  
**Gate:** C07 Sales-Revenue + C10 Finance-CFO

---

## 1. Summary

- This master prompt instructs C07-PRICING-ANALYST to analyze pricing for Stremiium products and services, creating pricing models, tier structures, and price sensitivity analysis.
- Research data to ingest: C10 financial model, 02-research/landscape/03-neobank-digital-competitors/, pricing research.
- Prompts to improve: Pricing models, Tier structures, Price sensitivity analysis, Competitor pricing, Discount policy, Billing model, Revenue impact of pricing changes.
- Output artifact: `artifacts/stremiium/c07-sales-revenue/C07-PRICING-ANALYST-prompts.md`.

---

## 2. Assumptions

- Pricing models are defined.
- Tier structures are documented.
- Price sensitivity is analyzed.
- Competitor pricing is tracked.

---

## 3. Questions

- What are the pricing models?
- What are the tier structures?
- How is price sensitivity analyzed?
- What is competitor pricing?
- What is the discount policy?

---

## 4. Concerns

- No pricing models defined.
- Tier structures not documented.
- Price sensitivity not analyzed.
- Competitor pricing not tracked.

---

## 5. Suggested Improvements

- Define pricing models for Stremiium products.
- Create tier structures.
- Analyze price sensitivity.
- Track competitor pricing.
- Define discount policy.

---

## 6. Missing Dependencies

- C10 financial model
- 02-research/landscape/03-neobank-digital-competitors/
- C07 sales strategy

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
- Reference schema: {product, pricingModel, tiers, pricePoints, sensitivity, competitorPrice, discountPolicy, revenueImpact, owner, date}

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

- Pricing data is highly sensitive; restrict to C07 + C10.
- No customer-specific pricing in docs.

---

## 11. South African Regulatory Considerations

- CPA 68 of 2008 for consumer pricing
- FSCA for financial service pricing

---

## 12. Compliance Gate

- C07 Sales-Revenue + C10 Finance-CFO. Pricing requires C10 for financial approval.

---

## 13. Rollback Plan

- Re-price on competitor moves.
- Re-tier on adoption data.
- Escalate pricing disputes to C10 + C07.

---

## 14. Escalation Path

- C07-PRICING-ANALYST → C07 Sales-Revenue Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c07-sales-revenue/C07-PRICING-ANALYST-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C07 Sales-Revenue outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
