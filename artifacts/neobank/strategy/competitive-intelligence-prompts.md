# Master Prompt — SUB-C04-STRAT-NEO-001 (NeoBank Competitive Intelligence Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/strategy/competitive-intelligence-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C04-STRAT-NEO-001  
**Council:** C04 Strategy-Growth  
**Gate:** C04 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C04-STRAT-NEO-001 to ingest the SA neobank and challenger research data from the Stremiium repo, review and improve the NeoBank competitive intelligence prompts (MP-BF05 PRD market/GTM sections, market research prompts), and produce an improved unconsolidated artifact that converts the research into actionable competitive intelligence prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness.

---

## 2. Assumptions

- The SA neobank/digital competitor research at `02-research/landscape/03-neobank-digital-competitors/` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- The institution deep-dives at `02-research/landscape/06-institution-deep-dives/` contain 10-file sets per institution with evidence-graded claims.
- The competitive matrix at `02-research/landscape/03-neobank-digital-competitors/competitive-matrix.md` compares 33 entities.
- MP-BF05 (NeoBank PRD Template) market/GTM sections are the canonical competitive intelligence prompts requiring improvement; no other competitive intelligence prompts are in scope for this subagent.
- All competitive claims carry `[S#]` references and evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]`.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which of the 33 SA neobank/challenger entities are direct competitors to the NeoBank (same customer segment, same product set)?
- What are the pricing and fee structures of key competitors (Capitec, Discovery Bank, TymeBank/GoTyme, Bank Zero, Luno, VALR)?
- What payment rails do competitors use (PayShap, EFT, card, instant EFT) and what are their cost structures?
- Which competitors have full banking licences vs sponsor-bank models vs non-bank PSP authorisations?
- What are the customer acquisition costs and channel strategies of successful SA neobanks?
- What are the common failure modes of SA neobank launches (regulatory delays, capital shortfalls, technology failures)?
- What is the market size and growth rate for digital banking in South Africa?
- What are the underserved customer segments (township, informal economy, under-banked)?
- How do competitors handle KYC/AML onboarding (digital-only, branch-assisted, partner-assisted)?
- What are the competitor app store ratings, user complaints, and common failure points?

---

## 4. Concerns

- No competitive positioning matrix exists for the NeoBank against specific SA competitors.
- No pricing benchmark analysis exists (Capitec fees as benchmark per `01-PRICING-FEE-MATRIX.md`).
- No payment rail cost comparison exists across competitors.
- No regulatory status comparison exists (licensed vs sponsor vs non-bank PSP).
- No customer segment analysis exists for under-served markets.
- No failure mode analysis exists for SA neobank launches.
- No competitor app UX analysis exists (app store ratings, complaints).
- No go-to-market channel strategy exists based on competitor evidence.
- No SWOT analysis exists for the NeoBank vs key competitors.
- No differentiation strategy exists (what makes NeoBank different from Discovery, TymeBank, Capitec).

---

## 5. Suggested Improvements

- Add competitive positioning matrix to MP-BF05 PRD market section comparing NeoBank vs key SA competitors (Discovery Bank, TymeBank/GoTyme, Capitec, Bank Zero, Luno, VALR, African Bank).
- Add pricing and fee benchmark analysis from `02-PAYMENTS-RAILS-MAP.md` and `01-PRICING-FEE-MATRIX.md` to MP-BF05.
- Add payment rail cost comparison (PayShap, EFT, card, instant EFT) across competitors to MP-BF05.
- Add regulatory status comparison (full banking licence vs sponsor-bank vs non-bank PSP) to MP-BF05.
- Add customer segment analysis (under-served, township, informal economy, under-banked) to MP-BF05.
- Add SA neobank failure mode analysis (regulatory delays, capital, technology) to MP-BF05.
- Add competitor app UX analysis (ratings, complaints, failure points) to MP-BF05.
- Add go-to-market channel strategy based on competitor evidence to MP-BF05.
- Add SWOT analysis for NeoBank vs key competitors to MP-BF05.
- Add differentiation strategy (unique value proposition) to MP-BF05.
- Add market size and growth rate for SA digital banking to MP-BF05.
- Reference `02-research/landscape/03-neobank-digital-competitors/` sources with `[S#]` citations throughout.

---

## 6. Missing Dependencies

- Competitor pricing data (may be secondary sources only; needs verification).
- Competitor app store data (Apple App Store, Google Play - external).
- Regulatory licence status confirmation from PA/FSCA/FIC (external).
- Customer segment sizing data (external market research).
- Competitor customer acquisition cost data (not publicly available; marked `[EST]`).
- External counsel review of competitive claims (no misleading comparisons under CPA).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/03-neobank-digital-competitors/README.md` and `competitive-matrix.md`.
2. Read `02-research/landscape/03-neobank-digital-competitors/sources.md` for evidence backbone `[S#]` references.
3. Read `02-research/landscape/06-institution-deep-dives/` for individual institution deep-dives (10-file sets).
4. Read `02-research/synthesis/cross-cutting/add-on/01-PRICING-FEE-MATRIX.md` for competitor pricing.
5. Read `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` for payment rail comparison.
6. Read `02-research/landscape/01-sa-banking-landscape/` for incumbent bank context.
7. Read `01-program/plan/PLAN.md` for WBS and quality gates.
8. Read MP-BF05 PRD template current text from the master prompt registry.
9. Identify gaps between competitive research and current PRD content (positioning, pricing, payment rails, regulatory status, segments, failure modes, UX, GTM, SWOT, differentiation).
10. Draft improved MP-BF05 PRD market/GTM sections with competitive intelligence integrated.
11. Add competitor positioning matrix, pricing benchmark, payment rail comparison, regulatory status comparison, segment analysis, failure mode analysis, UX analysis, GTM strategy, SWOT, differentiation.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/strategy/competitive-intelligence-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Competitor profile: `{name, type, licence_status, customer_segment, products[], pricing_fee_structure, payment_rails[], app_store_rating, key_strengths, key_weaknesses, evidence_grade, source_refs[]}$
- Pricing benchmark: `{fee_type, competitor_name, amount, currency, frequency, source_ref, evidence_grade, needs_confirmation}$
- Positioning matrix: `{dimension, neo_bank, competitor_1, competitor_2, competitor_3, differentiation_opportunity}$
- SWOT entry: `{entity, strengths[], weaknesses[], opportunities[], threats[]}$

---

## 9. Validation Checklist

- [ ] All competitive research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Competitive positioning matrix included
- [ ] Pricing and fee benchmark analysis included
- [ ] Payment rail cost comparison included
- [ ] Regulatory status comparison included
- [ ] Customer segment analysis included
- [ ] SA neobank failure mode analysis included
- [ ] Competitor app UX analysis included
- [ ] Go-to-market channel strategy included
- [ ] SWOT analysis included
- [ ] Differentiation strategy included
- [ ] Market size and growth rate included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C04 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Competitive intelligence contains strategic information; restrict access to C04, C01, C10, C15, Executive only.
- No competitor confidential information obtained through unauthorized means (lawful OSINT only).
- No pricing data presented as fact if sourced from secondary/unverified sources.
- Competitive claims must not be misleading under CPA 68 of 2008.
- External counsel review required before publishing competitive comparisons publicly.
- No competitor access credentials or API keys in artifacts (guardrail from MP-BF04).

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** competitive comparisons must not be misleading; unfair marketing practices prohibited.
- **FSCA/FAIS:** if NeoBank offers financial advice, competitive claims about advisory services are regulated.
- **Banks Act 94 of 1990:** only licensed banks can use "bank" in marketing; unlicensed competitors using "digital bank" may be operating under sponsor models.
- **NPS Act 78 of 1998:** payment rail claims must be accurate (PayShap participation, clearing access).
- **FICA Act 38 of 2001:** competitor onboarding approaches (digital vs branch) reflect different FICA implementations.
- **Exchange Control Rules:** cross-border payment claims must reflect SARB FinSurv restrictions.
- **POPIA Act 4 of 2013:** competitor customer data must not be collected or used without lawful basis.
- **FATF grey-list exit (Oct 2025):** competitor AML/CFT positioning is relevant to market trust.

---

## 12. Compliance Gate

**C04 Strategy-Growth + C01 Legal-Compliance.** Binding compliance veto on any competitive intelligence gap affecting regulatory positioning. CPA review required before any public competitive claims.

---

## 13. Rollback Plan

- If competitive data is found unverified: mark as `[UNKNOWN]`, remove from public-facing materials, obtain primary source confirmation.
- If CPA misleading-claims risk is identified: withdraw comparative marketing, obtain legal review, re-issue with approved claims.
- If regulatory status of a competitor is misstated: correct positioning matrix, obtain PA/FSCA confirmation, re-issue.
- If pricing data is stale: re-verify against current fee schedules, mark as needs confirmation.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C04-STRAT-NEO-001 → C04 Strategy-Growth Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical competitive intelligence events skip to C04 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/strategy/competitive-intelligence-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C04 competitive intelligence outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal review, C15 product overlap) and arbitrates per workflow-routing.md R3/R5.
