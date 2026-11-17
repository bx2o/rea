# Master Prompt — SUB-C14-CS-NEO-002 (NeoBank Onboarding and Launch Readiness Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C14-CS-NEO-002  
**Council:** C14 Customer-Success  
**Gate:** C14 + C15 Product-Management

---

## 1. Summary

This master prompt instructs SUB-C14-CS-NEO-002 to ingest the NeoBank customer onboarding, launch readiness, and under-banked segment research data from the Stremiium repo, review and improve the NeoBank onboarding/readiness prompts (MP-BF18 Launch Gate customer readiness, MP-BF02 Knowledge Base onboarding content), and produce an improved unconsolidated artifact that converts the research into actionable onboarding and readiness prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (FICA, POPIA, CPA, NCA).

---

## 2. Assumptions

- The NeoBank customer success charter at `01-program/councils/c14-customer-success/CHARTER.md` defines the CS mandate for the NeoBank program.
- The wallets/mobile money research at `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md` covers under-banked and informal economy segments.
- MP-BF18 (Launch Gate Checklist) customer readiness sections and MP-BF02 Knowledge Base onboarding content are the canonical onboarding/readiness prompts requiring improvement; no other onboarding prompts are in scope for this subagent.
- FICA KYC/AML onboarding must be complete before customer activation.
- POPIA consent must be obtained before processing customer personal information.
- CPA cooling-off rights and disclosure requirements apply to onboarding.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank customer onboarding journey (registration, KYC/AML, POPIA consent, wallet creation, PIN setup, first transaction)?
- What is the FICA CDD/EDD process for customer onboarding (identity verification, beneficial ownership, sanctions screening)?
- How does POPIA consent work during onboarding (consent for personal information processing, marketing consent, separate opt-ins)?
- What are the CPA cooling-off rights and disclosure requirements for onboarding?
- How does the NeoBank serve the under-banked and informal economy segments (wallets, mobile money, cash-in/cash-out)?
- What is the customer support readiness for launch (support runbooks, SLAs, macros, channels)?
- What is the onboarding abandonment rate target and optimization approach?
- How are onboarding exceptions handled (failed KYC, sanctions match, PEP identification)?
- What is the customer education approach (financial literacy, security awareness, fraud prevention)?
- What is the onboarding analytics framework (conversion funnel, drop-off points, compliance bottlenecks)?

---

## 4. Concerns

- No NeoBank customer onboarding journey is defined in current prompts.
- No FICA CDD/EDD onboarding process is documented.
- No POPIA consent flow is specified for onboarding.
- No CPA cooling-off rights disclosure is documented for onboarding.
- No under-banked/informal economy segment strategy exists.
- No customer support readiness checklist exists for launch.
- No onboarding abandonment optimization approach is defined.
- No onboarding exception handling process is documented.
- No customer education program is specified.
- No onboarding analytics framework is defined.
- No launch readiness customer support SLAs are defined.

---

## 5. Suggested Improvements

- Add onboarding journey map to onboarding/readiness prompts (registration, KYC/AML, POPIA consent, wallet creation, PIN setup, first transaction).
- Add FICA CDD/EDD onboarding process (identity verification, document capture, beneficial ownership, sanctions screening, PEP screening).
- Add POPIA consent flow (consent for personal information processing, marketing consent, separate opt-ins, consent withdrawal).
- Add CPA cooling-off rights and disclosure requirements for onboarding.
- Add under-banked/informal economy segment strategy (wallets, mobile money, cash-in/cash-out, township POS distribution).
- Add customer support readiness checklist (runbooks, SLAs, macros, channels, escalation paths).
- Add onboarding abandonment optimization (conversion funnel, drop-off analysis, A/B testing hypotheses).
- Add onboarding exception handling (failed KYC, sanctions match, PEP identification, manual review).
- Add customer education program (financial literacy, security awareness, fraud prevention, safe banking practices).
- Add onboarding analytics framework (conversion metrics, compliance bottlenecks, time-to-activate).
- Add launch readiness customer support SLAs (2-4 hours by severity per C14 SLA).
- Reference `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md`, `01-program/councils/c14-customer-success/CHARTER.md` with specific citations.

---

## 6. Missing Dependencies

- FICA KYC/AML onboarding specification from C01 Legal-Compliance (may need to be requested).
- POPIA consent management system specification from C11 Dev-Engineering.
- Customer support platform specification from C11 Dev-Engineering / C06 Engineering-Infrastructure.
- Under-banked segment research from C04 Strategy-Growth (competitive intelligence).
- Onboarding UI/UX design from C08 Design-Creative.
- Customer education content from C09 Marketing-Communications.
- External counsel review of onboarding disclosures (CPA, POPIA consent).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c14-customer-success/CHARTER.md` for CS mandate and scope.
2. Read `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md` for under-banked segment research.
3. Read `02-research/landscape/02-regulatory-framework/aml-fica.md` for FICA CDD/EDD requirements.
4. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA consent requirements.
5. Read `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` for CPA and conduct requirements.
6. Read `01-program/delivery/` for SLA targets and ways of working.
7. Read MP-BF18 Launch Gate customer readiness sections current text from the master prompt registry.
8. Read MP-BF02 Knowledge Base onboarding content section for adjacency.
9. Identify gaps between onboarding/readiness research and current prompt content (journey map, FICA CDD/EDD, POPIA consent, CPA cooling-off, under-banked segment, support readiness, abandonment optimization, exception handling, customer education, analytics, SLAs).
10. Draft improved onboarding/readiness prompts with journey map, FICA CDD/EDD, POPIA consent, CPA disclosures, under-banked strategy, support readiness, abandonment optimization, exception handling, customer education, analytics framework, SLAs.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Onboarding journey: `{step_id, step_name, customer_action, system_action, compliance_gate, poopia_consent_required, fica_check_required, drop_off_point, optimization_hypothesis}$
- FICA CDD record: `{customer_id, identity_verification_status, document_capture_status, beneficial_ownership_status, sanctions_match, pep_status, risk_rating, cdd_completed_at, edd_required, edd_completed}$
- POPIA consent: `{consent_id, customer_id, purpose, legal_basis, granted_at, withdrawn_at, marketing_consent, poopia_section, retention_until}$
- Onboarding analytics: `{metric_name, definition, target, current_value, trend, bottleneck, optimization_action}$

---

## 9. Validation Checklist

- [ ] All customer onboarding/readiness research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Onboarding journey map included
- [ ] FICA CDD/EDD onboarding process included
- [ ] POPIA consent flow included
- [ ] CPA cooling-off rights and disclosure included
- [ ] Under-banked/informal economy segment strategy included
- [ ] Customer support readiness checklist included
- [ ] Onboarding abandonment optimization included
- [ ] Onboarding exception handling included
- [ ] Customer education program included
- [ ] Onboarding analytics framework included
- [ ] Launch readiness customer support SLAs included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C14 + C15)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Onboarding data contains sensitive customer identification information; restrict access to C14, C01, C12 only.
- KYC/AML documents must be encrypted at rest and in transit; access limited to compliance officers.
- POPIA consent records must be tamper-evident and auditable.
- No customer credentials or authentication data stored in onboarding system (use secure authentication service).
- Sanctions screening results must be handled with tipping-off prevention (no disclosure to customer of match).
- Onboarding analytics must not contain raw PII; use anonymized/aggregated data for analytics.
- Support macros must not contain security-sensitive information or customer PII.

---

## 11. South African Regulatory Considerations

- **FICA Act 38 of 2001:** CDD/EDD for customer onboarding; sanctions screening; PEP screening; record retention 5 years.
- **POPIA Act 4 of 2013:** consent for personal information processing during onboarding; data minimization; retention limits; s72 cross-border if data leaves SA.
- **CPA 68 of 2008:** cooling-off rights, disclosure requirements, plain language, no unfair terms in onboarding.
- **National Credit Act:** if onboarding includes credit products, NCR registration and affordability assessment.
- **Consumer Protection Act:** complaint handling, escalation to ombud, fair treatment.
- **Exchange Control Rules:** if onboarding includes foreign customers or cross-border funding, SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** KYC/AML onboarding must maintain rigour post-grey-list-exit.
- **NGB (National Gambling Board):** if onboarding includes prediction markets or fantasy, gambling licensing may apply.

---

## 12. Compliance Gate

**C14 Customer-Success + C15 Product-Management.** Binding compliance veto on any onboarding/readiness gap affecting FICA, POPIA, or CPA compliance. C01 Legal-Compliance review required for onboarding disclosures and consent flows.

---

## 13. Rollback Plan

- If FICA CDD/EDD process is inadequate: suspend customer onboarding, remediate KYC process, obtain C01 review, re-activate.
- If POPIA consent flow is invalid: suspend personal information processing during onboarding, implement compliant consent, re-obtain consent.
- If CPA cooling-off disclosure is missing: add disclosure to onboarding, obtain C01 review, re-issue onboarding materials.
- If under-banked segment approach creates compliance risk: suspend segment targeting, obtain C01/C16 review, re-approach with compliant strategy.
- If customer support is not ready for launch: delay customer-facing launch, complete support runbooks and SLAs, re-assess readiness.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C14-CS-NEO-002 → C14 Customer-Success Captain → C15 Product-Management Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical onboarding/readiness events skip to C14 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C14 onboarding/readiness outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/FICA overlap, C15 product roadmap overlap, C08 design onboarding UI overlap) and arbitrates per workflow-routing.md R3/R5.
