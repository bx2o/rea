# Master Prompt — SUB-C07-SALES-NEO-001 (NeoBank Go-to-Market and Partnership Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/sales/gtm-and-partnership-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C07-SALES-NEO-001  
**Council:** C07 Sales-Revenue  
**Gate:** C07 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C07-SALES-NEO-001 to ingest the NeoBank sales, business development, partnership, and competitive research data from the Stremiium repo, review and improve the NeoBank GTM/partnership prompts (MP-BF05 PRD GTM/commercial sections, partnership scouting prompts), and produce an improved unconsolidated artifact that converts the research into actionable GTM and partnership prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CPA, FAIS, FSCA, Exchange Control).

---

## 2. Assumptions

- The NeoBank sales/revenue charter at `01-program/councils/c07-sales-revenue/CHARTER.md` defines the sales mandate for the NeoBank program.
- The competitive research at `02-research/landscape/03-neobank-digital-competitors/` provides competitor positioning and pricing data.
- The pricing/fee matrix at `02-research/synthesis/cross-cutting/add-on/01-PRICING-FEE-MATRIX.md` provides SA bank pricing benchmarks.
- MP-BF05 PRD GTM/commercial sections are the canonical GTM prompts requiring improvement; no other GTM prompts are in scope for this subagent.
- Partnership scouting and vendor negotiations are C07 responsibilities per council charter.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank target customer segment (retail, SME, affluent, under-banked, creator economy)?
- What is the go-to-market channel strategy (direct app, partnerships, employer groups, affinity groups)?
- What is the pricing strategy relative to SA benchmarks (Capitec, Discovery, TymeBank)?
- Which partnership opportunities exist (sponsor banks, payment processors, KYC vendors, MPC wallet vendors, card issuers)?
- What are the vendor negotiation priorities (pricing, SLAs, data ownership, regulatory compliance)?
- What is the creator deal strategy (if NeoBank integrates creator payments)?
- What is the government/tender adjacency strategy (if any)?
- How does CPA 68 of 2008 restrict marketing claims and sales practices?
- How does FAIS/FSCA restrict financial product sales and advice?
- How do Exchange Control Rules restrict cross-border payment sales?

---

## 4. Concerns

- No NeoBank target customer segment is defined in current prompts.
- No GTM channel strategy exists.
- No pricing strategy relative to SA benchmarks is documented.
- No partnership opportunity inventory exists (sponsor banks, payment processors, KYC vendors, MPC vendors).
- No vendor negotiation framework exists (pricing, SLAs, data ownership, compliance).
- No creator deal strategy is documented.
- No government/tender adjacency analysis exists.
- No CPA marketing compliance review exists for sales materials.
- No FAIS/FSCA sales compliance review exists for financial product sales.
- No Exchange Control compliance review exists for cross-border payment sales.

---

## 5. Suggested Improvements

- Add NeoBank target customer segment definition to GTM prompts (segments, personas, needs, channels).
- Add GTM channel strategy (direct app, partnerships, employer groups, affinity groups, creator economy).
- Add pricing strategy relative to SA benchmarks from `01-PRICING-FEE-MATRIX.md` and `02-PAYMENTS-RAILS-MAP.md`.
- Add partnership opportunity inventory (sponsor banks, payment processors, KYC/AML vendors, MPC wallet vendors, card issuers, open banking providers).
- Add vendor negotiation framework (pricing, SLAs, data ownership, regulatory compliance, exit clauses).
- Add creator deal strategy (if NeoBank integrates creator payments/royalties).
- Add government/tender adjacency strategy (SA government procurement, if applicable).
- Add CPA marketing compliance review for sales materials (no deceptive claims, fair terms, plain language).
- Add FAIS/FSCA sales compliance review (no unlicensed financial advice, appropriate disclosures).
- Add Exchange Control compliance review for cross-border payment sales.
- Add ethical deal coaching (no dark patterns, no discriminatory targeting, no unverified financial claims).
- Reference `01-program/councils/c07-sales-revenue/CHARTER.md`, `02-research/synthesis/cross-cutting/add-on/01-PRICING-FEE-MATRIX.md`, `02-PAYMENTS-RAILS-MAP.md` with specific citations.

---

## 6. Missing Dependencies

- Target customer segment research from C04 Strategy-Growth (competitive intelligence).
- Pricing benchmark data from C10 Finance (fee structure).
- Sponsor bank candidates from C16 Banking-Fintech (licensing strategy).
- Vendor evaluation criteria from C12 Cybersecurity-Intel (security assessment).
- External counsel review of sales materials (CPA, FAIS compliance).
- Creator payment terms from C10 Finance / C13 Web3-Finance.
- Government procurement rules (if pursuing tender adjacency).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c07-sales-revenue/CHARTER.md` for sales mandate and scope.
2. Read `02-research/landscape/03-neobank-digital-competitors/competitive-matrix.md` for competitor positioning.
3. Read `02-research/synthesis/cross-cutting/add-on/01-PRICING-FEE-MATRIX.md` for SA bank pricing benchmarks.
4. Read `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` for payment rail context.
5. Read `01-program/plan/PLAN.md` for GTM-related WBS items.
6. Read MP-BF05 PRD GTM/commercial sections current text from the master prompt registry.
7. Identify gaps between sales/partnership research and current prompt content (segments, channels, pricing, partnerships, vendor negotiation, creator deals, government adjacency, compliance reviews).
8. Draft improved GTM/partnership prompts with target segments, channel strategy, pricing strategy, partnership inventory, vendor negotiation framework, creator deal strategy, government adjacency, CPA/FAIS/Exchange Control compliance reviews, ethical deal coaching.
9. Add partnership scouting criteria and deal evaluation framework.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/sales/gtm-and-partnership-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Customer segment: `{segment_name, demographics, needs, pain_points, channels, acquisition_cost_estimate, regulatory_notes}$
- Partnership opportunity: `{partner_name, partner_type, value_proposition, integration_effort, regulatory_review_required, negotiation_priority, status}$
- Vendor negotiation: `{vendor_name, negotiation_items[], sla_requirements, data_ownership, compliance_requirements, exit_clauses, status}$
- Pricing benchmark: `{fee_type, benchmark_bank, amount, currency, frequency, source_ref, neo_bank_position}$

---

## 9. Validation Checklist

- [ ] All sales/partnership research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Target customer segment definition included
- [ ] GTM channel strategy included
- [ ] Pricing strategy relative to SA benchmarks included
- [ ] Partnership opportunity inventory included
- [ ] Vendor negotiation framework included
- [ ] Creator deal strategy included
- [ ] Government/tender adjacency strategy included
- [ ] CPA marketing compliance review included
- [ ] FAIS/FSCA sales compliance review included
- [ ] Exchange Control compliance review included
- [ ] Ethical deal coaching included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C07 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Sales and partnership documents contain commercial strategy; restrict access to C07, C10, C01, Executive only.
- No vendor credentials or API keys in sales artifacts (guardrail from MP-BF04).
- Partnership data ownership terms must be legally reviewed before signing.
- No competitor confidential information obtained through unauthorized means.
- Sales materials must not contain security architecture details.
- Customer acquisition cost estimates are commercial sensitive; restrict access.

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** no deceptive marketing, no unfair terms, plain language, cooling-off rights for consumer sales.
- **FAIS Act 37 of 2002:** no financial advice without FSP licence; appropriate disclosures for financial product sales.
- **FSCA:** CASP licensing for crypto asset sales; financial product classification.
- **Exchange Control Rules:** cross-border payment sales restricted; SARB FinSurv approval for ADLA activities.
- **NPS Act 78 of 1998:** payment service claims must be accurate.
- **POPIA Act 4 of 2013:** customer data collected through sales must be POPIA-compliant.
- **Companies Act 71 of 2008:** corporate capacity for partnership agreements.
- **FATF grey-list exit (Oct 2025):** sales of crypto/payment services must maintain AML/CFT messaging.

---

## 12. Compliance Gate

**C07 Sales-Revenue + C01 Legal-Compliance.** Binding compliance veto on any GTM/partnership gap affecting CPA, FAIS, or Exchange Control compliance. External counsel review required before any sales materials or partnership agreements are executed.

---

## 13. Rollback Plan

- If CPA compliance issue is found in sales materials: withdraw materials, obtain legal review, re-issue with approved claims.
- If partnership due diligence reveals compliance risk: suspend partnership negotiations, obtain C01/C12 review, re-evaluate.
- If vendor negotiation terms are non-compliant: renegotiate terms, obtain legal sign-off, document changes.
- If FAIS sales compliance issue is found: suspend financial product sales, obtain FSP licence or cease advice activities.
- If Exchange Control issue is found: suspend cross-border payment sales, obtain SARB guidance.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C07-SALES-NEO-001 → C07 Sales-Revenue Captain → C01 Legal-Compliance Captain → C10 Finance-CFO Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical sales/regulatory events skip to C07 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/sales/gtm-and-partnership-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C07 GTM/partnership outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal review, C10 budget overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
