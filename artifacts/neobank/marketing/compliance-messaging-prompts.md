# Master Prompt — SUB-C09-MKTG-NEO-001 (NeoBank Marketing Compliance Messaging Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/marketing/compliance-messaging-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C09-MKTG-NEO-001  
**Council:** C09 Marketing-Communications  
**Gate:** C09 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C09-MKTG-NEO-001 to ingest the NeoBank marketing, communications, and competitive research data from the Stremiium repo, review and improve the NeoBank marketing compliance prompts (MP-BF05 PRD marketing/localization/accessibility sections, financial-marketing compliance review), and produce an improved unconsolidated artifact that converts the research into actionable marketing compliance prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CPA, FAIS, FSCA, POPIA, anti-slop rules).

---

## 2. Assumptions

- The NeoBank marketing charter at `01-program/councils/c09-marketing-growth/CHARTER.md` defines the marketing mandate for the NeoBank program.
- The competitive research at `02-research/landscape/03-neobank-digital-competitors/` provides competitor marketing positioning.
- MP-BF05 PRD marketing/localization/accessibility sections are the canonical marketing prompts requiring improvement; no other marketing prompts are in scope for this subagent.
- Financial marketing compliance review is required (no deceptive marketing, no dark patterns, no unverified financial claims, no discriminatory targeting per MP-BD03).
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank brand messaging framework (value proposition, positioning, tone of voice)?
- Which marketing channels are planned (social media, content, PR, influencer, performance, email, SMS)?
- What are the CPA 68 of 2008 restrictions on financial services marketing (no deceptive claims, fair terms, plain language)?
- How does FAIS/FSCA restrict financial product marketing (no unlicensed advice, appropriate risk warnings)?
- What are the anti-slop rules for NeoBank marketing content (no low-value, no AI-generated spam, no unverified claims)?
- How does POPIA restrict marketing communications (consent for direct marketing, opt-out, data minimization)?
- What is the women-as-tastemakers research relevance to NeoBank marketing?
- What is the creator trend origin analysis relevance to NeoBank marketing?
- How are financial claims substantiated (no guaranteed returns, capital at risk disclosure)?
- What is the crisis communications plan for NeoBank (security incident, regulatory action, service outage)?

---

## 4. Concerns

- No NeoBank brand messaging framework exists in current prompts.
- No marketing channel strategy is documented.
- No CPA marketing compliance review exists for marketing materials.
- No FAIS/FSCA financial marketing compliance review exists.
- No anti-slop rules are defined for NeoBank marketing content.
- No POPIA direct marketing consent framework exists.
- No financial claim substantiation process exists.
- No crisis communications plan exists for NeoBank.
- No localization strategy exists for SA official languages.
- No accessibility communications plan exists.
- No influencer sourcing compliance review exists (disclosure of paid partnerships).
- No campaign analytics compliance framework exists (POPIA for marketing analytics).

---

## 5. Suggested Improvements

- Add NeoBank brand messaging framework to marketing prompts (value proposition, positioning, tone of voice, key messages).
- Add marketing channel strategy (social media, content, PR, influencer, performance, email, SMS with compliance per channel).
- Add CPA marketing compliance review (no deceptive claims, fair terms, plain language, cooling-off rights visible).
- Add FAIS/FSCA financial marketing compliance review (no unlicensed advice, risk warnings, no guaranteed returns, capital at risk).
- Add anti-slop rules (no low-value content, no AI-generated spam, no unverified financial claims, no discriminatory targeting).
- Add POPIA direct marketing consent framework (consent for electronic marketing, opt-out mechanism, data minimization).
- Add financial claim substantiation process (all claims must be evidenced, no unsubstantiated performance claims).
- Add crisis communications plan (security incident, regulatory action, service outage, customer notification).
- Add localization strategy for SA official languages.
- Add accessibility communications plan (accessible marketing materials, plain language, alternative formats).
- Add influencer sourcing compliance review (paid partnership disclosure, no misleading claims by influencers).
- Add campaign analytics compliance framework (POPIA for marketing analytics, consent for tracking).
- Reference `01-program/councils/c09-marketing-growth/CHARTER.md`, `02-research/landscape/03-neobank-digital-competitors/` with specific citations.

---

## 6. Missing Dependencies

- Brand messaging framework from C08 Design-Creative (visual identity, tone of voice).
- Competitor marketing analysis from C04 Strategy-Growth (competitive intelligence).
- External counsel review of marketing materials (CPA, FAIS compliance).
- POPIA consent management system specification (from C11 Dev-Engineering).
- Crisis communications templates from C14 Customer Success.
- Localization resources for SA official languages (external vendors).
- Campaign analytics platform POPIA assessment (from C01 Legal-Compliance).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c09-marketing-growth/CHARTER.md` for marketing mandate and scope.
2. Read `02-research/landscape/03-neobank-digital-competitors/` for competitor marketing positioning.
3. Read `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` for FAIS marketing restrictions.
4. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA direct marketing restrictions.
5. Read `01-program/plan/PLAN.md` for marketing-related WBS items.
6. Read MP-BF05 PRD marketing/localization/accessibility sections current text from the master prompt registry.
7. Read MP-BD03 Marketing Agency Firm Subagent Pack for anti-slop rules and financial-marketing compliance review.
8. Identify gaps between marketing/compliance research and current prompt content (messaging framework, channels, CPA/FAIS compliance, anti-slop, POPIA consent, claim substantiation, crisis comms, localization, accessibility, influencer compliance, campaign analytics).
9. Draft improved marketing compliance prompts with brand messaging, channel strategy, CPA/FAIS compliance reviews, anti-slop rules, POPIA consent, claim substantiation, crisis communications, localization, accessibility, influencer compliance, campaign analytics.
10. Add prohibited content list (deceptive marketing, dark patterns, unverified financial claims, discriminatory targeting).
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/marketing/compliance-messaging-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Marketing message: `{message_id, channel, target_audience, key_claims, evidence_refs[], cpa_compliance, fais_compliance, poopia_consent_required, approved_by, approval_date, expiry_date}$
- Anti-slop check: `{content_id, low_value_check, ai_spam_check, unverified_claims_check, discriminatory_targeting_check, passed, reviewer, review_date}$
- Financial claim substantiation: `{claim_id, claim_text, evidence_required, evidence_provided, substantiated, regulator_reference, approved_by}$

---

## 9. Validation Checklist

- [ ] All marketing/compliance research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Brand messaging framework included
- [ ] Marketing channel strategy included
- [ ] CPA marketing compliance review included
- [ ] FAIS/FSCA financial marketing compliance review included
- [ ] Anti-slop rules included
- [ ] POPIA direct marketing consent framework included
- [ ] Financial claim substantiation process included
- [ ] Crisis communications plan included
- [ ] Localization strategy for SA official languages included
- [ ] Accessibility communications plan included
- [ ] Influencer sourcing compliance review included
- [ ] Campaign analytics compliance framework included
- [ ] Prohibited content list included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C09 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Marketing materials containing security information (security features, fraud controls) must not reveal security architecture details.
- No customer data in marketing campaign examples (use anonymized/sample data only).
- Influencer contracts and partner agreements contain commercial terms; restrict access to C07, C09, C01, C10 only.
- Crisis communications templates must be pre-approved and securely stored.
- Marketing analytics data must be POPIA-compliant; no tracking without consent.
- No marketing credentials or API keys in artifacts (guardrail from MP-BF04).

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** no deceptive marketing, no unfair terms, plain language, cooling-off rights, no false representations.
- **FAIS Act 37 of 2002:** no financial advice without FSP licence; appropriate risk warnings for financial product marketing.
- **FSCA:** CASP marketing restrictions; no misleading claims about crypto assets; no guaranteed returns.
- **POPIA Act 4 of 2013:** direct marketing consent (s 69), opt-out mechanism, data minimization for marketing analytics.
- **Consumer Protection Act:** no bait marketing, no negative option marketing, no unsolicited communications without consent.
- **Trade Marks Act:** marketing materials must not infringe existing SA trademarks.
- **Advertising Standards Authority (ASA) of SA:** marketing code compliance.
- **FATF grey-list exit (Oct 2025):** marketing of crypto/payment services must not undermine AML/CFT messaging.
- **Electronic Communications and Transactions Act 25 of 2002:** electronic marketing communications requirements.

---

## 12. Compliance Gate

**C09 Marketing-Communications + C01 Legal-Compliance.** Binding compliance veto on any marketing gap affecting CPA, FAIS, FSCA, or POPIA compliance. External counsel review required before any marketing campaign launches.

---

## 13. Rollback Plan

- If CPA compliance issue is found in marketing materials: withdraw campaign, obtain legal review, re-issue with approved claims.
- If FAIS/FSCA compliance issue is found: suspend financial product marketing, obtain FSP licence or cease advice marketing.
- If POPIA direct marketing consent is invalid: cease electronic marketing, implement compliant consent, re-obtain opt-in from existing contacts.
- If anti-slop violation is found: remove low-value/unverified content, implement content review process.
- If influencer disclosure is missing: require influencer to add paid partnership disclosure, review all influencer content.
- If crisis communications plan is activated: follow incident response, notify customers per POPIA breach requirements if applicable.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C09-MKTG-NEO-001 → C09 Marketing-Communications Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical marketing/regulatory events skip to C09 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/marketing/compliance-messaging-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C09 marketing compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/CPA overlap, C07 sales overlap, C08 design brand overlap) and arbitrates per workflow-routing.md R3/R5.
