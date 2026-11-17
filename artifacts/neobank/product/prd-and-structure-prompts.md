# Master Prompt — SUB-C15-PROD-NEO-001 (NeoBank PRD and Structure Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/product/prd-and-structure-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C15-PROD-NEO-001  
**Council:** C15 Product-Management  
**Gate:** C15 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C15-PROD-NEO-001 to ingest the NeoBank product planning and competitive research data from the Stremiium repo, review and improve the NeoBank PRD/structure prompts (MP-BF05 PRD Template, MP-BF01 Project Structure product pillars), and produce an improved unconsolidated artifact that converts the research into actionable PRD and structure prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CPA, POPIA, FICA, FSCA/FAIS, CARF, NCA).

---

## 2. Assumptions

- The NeoBank product charter at `01-program/councils/c15-product-management/CHARTER.md` defines the product mandate including product decision authority.
- MP-BF05 (PRD Template) is the canonical PRD prompt requiring improvement; no other PRD prompts are in scope for this subagent.
- MP-BF01 Project Structure product pillars are adjacent structure content.
- Product requirements must separate fixed frontend requirements from testable user-journey hypotheses per global rule 7.
- C15 holds product decision authority (roadmap, feature prioritisation).
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are the NeoBank product pillars (wallet, payments, savings, investments, creator payments, prediction markets, fantasy sports)?
- What are the target user personas (retail, SME, creator, under-banked, affluent)?
- What are the jobs-to-be-done for each persona?
- What are the user journeys for each product pillar (onboarding, transact, save, invest, dispute, support)?
- What are the functional requirements for each product pillar?
- What are the non-functional requirements (security, performance, availability, accessibility, compliance)?
- What are the compliance requirements (FICA, POPIA, CARF, FSCA/FAIS, CPA, NCA) per product pillar?
- What are the security requirements (encryption, MPC, PIN, fraud controls, kill switch) per product pillar?
- What are the privacy requirements (POPIA consent, data minimization, retention, cross-border) per product pillar?
- What are the accessibility requirements (WCAG, mobile tap targets, screen reader support) per product pillar?
- What are the localization requirements (SA official languages, currency, date formats) per product pillar?
- What are the success metrics and acceptance criteria per product pillar?
- What are the experiment hypotheses and launch gates per product pillar?
- What are the rollback criteria per product pillar?

---

## 4. Concerns

- No NeoBank product pillars are defined in current prompts.
- No user personas or jobs-to-be-done are documented.
- No user journey mapping exists for product pillars.
- No functional/non-functional requirements are specified per product pillar.
- No compliance requirements matrix exists per product pillar.
- No security requirements are specified per product pillar.
- No privacy requirements are specified per product pillar.
- No accessibility requirements are specified per product pillar.
- No localization requirements are specified for SA context.
- No success metrics or acceptance criteria are defined.
- No experiment hypotheses are documented.
- No launch gates or rollback criteria are specified.
- No fixed requirements vs testable hypotheses separation exists.

---

## 5. Suggested Improvements

- Add PRD template to MP-BF05 with all required sections (vision, target users, SA context, jobs-to-be-done, user personas, user journeys, functional requirements, non-functional requirements, compliance requirements, security requirements, privacy requirements, accessibility requirements, localization requirements, metrics, acceptance criteria, experiment hypotheses, launch gates, rollback criteria).
- Add product pillars definition to MP-BF01 project structure (wallet, payments, savings, investments, creator payments, prediction markets, fantasy sports, NFT marketplace).
- Add South African context section (regulatory landscape, payment rails, market segments, competitive landscape).
- Add compliance requirements matrix per product pillar (FICA, POPIA, CARF, FSCA/FAIS, CPA, NCA, Exchange Control).
- Add security requirements per product pillar (encryption, MPC, PIN verification, fraud controls, kill switch, no agent-held keys).
- Add privacy requirements per product pillar (POPIA consent, data minimization, retention, cross-border s72 controls).
- Add accessibility requirements per product pillar (WCAG 2.1 AA, mobile tap targets, screen reader, keyboard navigation).
- Add localization requirements (SA official languages, ZAR currency, SA date/time formats, SA addresses).
- Add success metrics and acceptance criteria per product pillar.
- Add experiment hypotheses (testable user-journey hypotheses per global rule 7).
- Add launch gates and rollback criteria per product pillar.
- Separate fixed frontend requirements from testable user-journey hypotheses per global rule 7.
- Reference `01-program/councils/c15-product-management/CHARTER.md`, `02-research/landscape/03-neobank-digital-competitors/` with specific citations.

---

## 6. Missing Dependencies

- Product pillar prioritization from C10 Finance (budget authority) and C04 Strategy-Growth (market opportunity).
- Regulatory requirements per product pillar from C01 Legal-Compliance (FICA, POPIA, CARF, FSCA/FAIS).
- Security requirements per product pillar from C12 Cybersecurity-Intel.
- Accessibility requirements from C08 Design-Creative / accessibility gate.
- Localization resources for SA official languages (external vendors).
- User research data from C14 Customer Success (may need to be requested).
- Competitive research from C04 Strategy-Growth (competitive intelligence).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c15-product-management/CHARTER.md` for product mandate and product decision authority.
2. Read `02-research/landscape/03-neobank-digital-competitors/` for competitive product landscape.
3. Read `02-research/landscape/02-regulatory-framework/` for regulatory requirements per product type.
4. Read `06-architecture/platform-design/domain-model/` for product domain context (wallet, ledger, payments).
5. Read `01-program/plan/PLAN.md` for product-related WBS items.
6. Read MP-BF05 PRD Template current text from the master prompt registry.
7. Read MP-BF01 Project Structure product pillars section for adjacency.
8. Identify gaps between product planning and current prompt content (pillars, personas, journeys, requirements, compliance matrix, security, privacy, accessibility, localization, metrics, hypotheses, launch gates, rollback criteria).
9. Draft improved MP-BF05 PRD Template with all required sections including SA context, compliance requirements matrix, security requirements, privacy requirements, accessibility requirements, localization requirements, metrics, acceptance criteria, experiment hypotheses, launch gates, rollback criteria.
10. Draft improved MP-BF01 product pillars section.
11. Separate fixed frontend requirements from testable user-journey hypotheses per global rule 7.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/product/prd-and-structure-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Product pillar: `{pillar_name, vision, target_users[], jobs_to_be_done[], user_journeys[], functional_requirements[], non_functional_requirements[], compliance_requirements[], security_requirements[], privacy_requirements[], accessibility_requirements[], localization_requirements[], metrics[], acceptance_criteria[], experiment_hypotheses[], launch_gates[], rollback_criteria[]}$
- Compliance requirement: `{requirement_id, regulation, scope, mandatory, owner_council, evidence_required, launch_gate}$
- User journey hypothesis: `{hypothesis_id, journey, assumption, test_method, success_criterion, falsifiable}$
- Persona: `{persona_name, demographics, goals, pain_points, channels, regulatory_segment}$

---

## 9. Validation Checklist

- [ ] All product planning sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] PRD template with all required sections included
- [ ] Product pillars definition included
- [ ] South African context section included
- [ ] Compliance requirements matrix per product pillar included
- [ ] Security requirements per product pillar included
- [ ] Privacy requirements per product pillar included
- [ ] Accessibility requirements per product pillar included
- [ ] Localization requirements for SA context included
- [ ] Success metrics and acceptance criteria included
- [ ] Experiment hypotheses included
- [ ] Launch gates and rollback criteria included
- [ ] Fixed requirements separated from testable hypotheses
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C15 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- PRD documents contain product strategy; restrict access to C15, C10, C01, Executive only.
- No security architecture details in PRD (keep at requirements level, not implementation).
- No customer data or PII in PRD examples.
- Compliance requirements must be verified by C01 before PRD approval.
- Security requirements must be validated by C12 before PRD approval.
- Product decisions must not bypass compliance gates (C01 legal veto).

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** product requirements must include consumer protection (plain language, no deceptive claims, cooling-off rights).
- **POPIA Act 4 of 2013:** privacy requirements per product pillar; consent, minimization, retention, s72 cross-border.
- **FICA Act 38 of 2001:** FICA requirements for payment and wallet product pillars; CDD, STR, record retention.
- **SARS CARF:** effective 1 March 2026; CARF reporting requirements for crypto-asset product pillars.
- **FSCA/FAIS:** FSCA/FAIS requirements for financial advice and investment product pillars; FSP licensing.
- **NCA 34 of 2005:** NCA requirements if credit product pillars are included; NCR registration.
- **Exchange Control Rules:** cross-border payment and crypto product pillars; SARB FinSurv reporting.
- **NGB (National Gambling Board):** prediction market and fantasy sports product pillars may require gambling licensing.
- **FATF grey-list exit (Oct 2025):** AML/CFT requirements for all money-handling product pillars.

---

## 12. Compliance Gate

**C15 Product-Management + C01 Legal-Compliance.** Binding compliance veto on any PRD gap affecting regulatory compliance. Product decision authority (C15) must not override compliance gates (C01, C12, C16).

---

## 13. Rollback Plan

- If product pillar is found non-compliant: suspend pillar development, obtain C01/C12/C16 review, re-scope or de-prioritize.
- If compliance requirement is missing: add requirement to PRD, obtain compliance sign-off, re-assess launch readiness.
- If security requirement is inadequate: suspend feature, obtain C12 review, implement security controls.
- If accessibility requirement is not met: suspend UI release, remediate accessibility, re-test with assistive technologies.
- If experiment hypothesis is invalid: roll back feature, analyze results, re-formulate hypothesis.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C15-PROD-NEO-001 → C15 Product-Management Captain → C01 Legal-Compliance Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical product/regulatory events skip to C15 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/product/prd-and-structure-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C15 PRD/structure outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal compliance overlap, C12 security overlap, C16 banking compliance overlap, C14 customer success overlap) and arbitrates per workflow-routing.md R3/R5.
