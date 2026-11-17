# Master Prompt — SUB-C01-WALLET-TERMS-NEO-006 (Wallet Terms & Prediction Market Terms Prompts for NeoBank)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/legal/wallet-terms-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-WALLET-TERMS-NEO-006  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance + C15 Product-Management

---

## 1. Summary

This master prompt instructs SUB-C01-WALLET-TERMS-NEO-006 to ingest the consumer protection and contract law research data from the Stremiium repo, review and improve the NeoBank-related terms prompts (MP-BI09 Wallet Terms of Use, MP-BI10 Prediction Market Terms), and produce an improved unconsolidated artifact that converts the research into actionable legal terms prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CPA, POPIA, FICA, FAIS, CARF, Companies Act).

---

## 2. Assumptions

- The consumer protection and contract research material at `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` and `tax-governance.md` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- The NeoBank wallet and neo-bank services require Terms of Use compliant with South African consumer protection law (CPA 68 of 2008).
- MP-BI09 (Wallet Terms of Use) and MP-BI10 (Prediction Market Terms) are the canonical terms prompts requiring improvement; no other terms prompts are in scope for this subagent.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- Terms are marked for external counsel review; this subagent does not provide final legal advice.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which CPA sections apply to NeoBank wallet terms (unfair terms, plain language, disclosure, cooling-off, liability limitations)?
- Does CPA apply to crypto-asset wallet services or only traditional banking services?
- What POPIA consent mechanisms are required in wallet terms for personal information processing?
- How should PIN verification opt-out warnings be drafted to satisfy both security and consumer protection requirements?
- What is the governing law and jurisdiction for NeoBank terms (South African courts, arbitration, ombud)?
- How should fee disclosures be structured to comply with CPA transparency requirements?
- What liability limitations are enforceable under South African law for wallet/service disruptions?
- How should termination clauses be drafted to comply with CPA fairness requirements?
- What age restrictions apply to NeoBank wallet and prediction market services under SA law?
- How should dispute resolution clauses reference the NFO (National Financial Ombud Scheme)?

---

## 4. Concerns

- No Wallet Terms of Use draft exists that incorporates CPA fairness requirements.
- No POPIA consent clause exists in current wallet terms prompts.
- No PIN verification opt-out warning language exists that balances security and consumer protection.
- No liability limitation analysis under South African law for wallet service disruptions.
- No governing law/jurisdiction clause tailored to SA context.
- No age restriction verification mechanism described in terms prompts.
- No NFO dispute resolution reference in current terms.
- No fee disclosure structure compliant with CPA transparency requirements.
- No termination clause fairness analysis under CPA.
- No prediction market terms with no-guaranteed-settlement or no-guaranteed-profit language.
- No external counsel review marker consistently applied to terms prompts.
- No POPIA data subject rights reference in wallet terms.

---

## 5. Suggested Improvements

- Add CPA compliance section to MP-BI09 with unfair terms assessment, plain language requirement, disclosure obligations, cooling-off rights, liability limitation analysis.
- Add POPIA consent clause to MP-BI09 covering personal information processing, special personal information, cross-border transfers, data subject rights.
- Add PIN verification opt-out warning language to MP-BI09 with security vulnerability warning, opt-out logging, reversal mechanism.
- Add governing law (South African) and jurisdiction clause to MP-BI09 and MP-BI10.
- Add fee disclosure structure compliant with CPA transparency to MP-BI09.
- Add termination clause fairness analysis under CPA to MP-BI09.
- Add age restriction clause (18+ for financial services) to MP-BI09 and MP-BI10.
- Add NFO dispute resolution reference to MP-BI09 and MP-BI10.
- Add no-guaranteed-settlement and no-guaranteed-profit language to MP-BI10.
- Add capital at risk disclosure to MP-BI10.
- Add oracle risk and settlement delay disclosure to MP-BI10.
- Add responsible participation and tax/CARF notes to MP-BI10.
- Add external counsel review marker to both MP-BI09 and MP-BI10.
- Add POPIA data subject rights (access, correction, deletion, objection) reference to MP-BI09.
- Reference `02-research/source-library/` CPA and contract law sources with `[S#]` citations throughout improved prompts.

---

## 6. Missing Dependencies

- CPA 68 of 2008 full text and regulations (external).
- POPIA Act 4 of 2013 consent requirements guidance (external).
- External counsel review of terms drafts.
- NeoBank fee schedule from C10 Finance (for fee disclosure section).
- NFO membership details and referral process (external).
- Age verification mechanism specification (from C14 Customer Success / C11 Dev-Engineering).
- Dispute resolution workflow from C14 Customer Success (may need to be requested).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` for CPA and FAIS content.
2. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA consent requirements.
3. Read `02-research/source-library/INDEX.md` and `BIBLIOGRAPHY.md` for CPA/contract law sources; note `[S#]` references.
4. Read `01-program/councils/c15-product-management/CHARTER.md` for product context.
5. Read MP-BI09 and MP-BI10 current prompt text from the master prompt registry.
6. Identify gaps between CPA/POPIA research and current prompt content (unfair terms, consent, PIN opt-out, governing law, fees, termination, age, NFO, no-guarantee language).
7. Draft improved MP-BI09 Wallet Terms of Use with service scope, eligibility, KYC/AML, PIN verification, MPC key management, prohibited use, risk disclosure, fees, settlement, disputes, liability, privacy, termination, governing law, CPA context, external counsel marker.
8. Draft improved MP-BI10 Prediction Market Terms with market question, resolution criteria, oracle, dispute window, settlement finality, fees, payout, risk disclosure, no financial advice, capital at risk, responsible participation, age restrictions, tax/CARF notes, governing law, no guaranteed settlement/profit language.
9. Add CPA compliance section to MP-BI09.
10. Add POPIA consent clause to MP-BI09.
11. Add PIN verification opt-out warning to MP-BI09.
12. Add governing law/jurisdiction to MP-BI09 and MP-BI10.
13. Add fee disclosure structure to MP-BI09.
14. Add termination clause fairness analysis to MP-BI09.
15. Add age restriction clause to MP-BI09 and MP-BI10.
16. Add NFO dispute resolution reference to MP-BI09 and MP-BI10.
17. Add no-guaranteed language and capital at risk to MP-BI10.
18. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/legal/wallet-terms-prompts.md`.
19. Run validation checklist (§9 below).
20. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Wallet terms section map: `{section, cpa_compliance, poopia_consent, fica_aml, carf_reporting, governing_law, dispute_resolution, external_counsel_review_required}$
- PIN opt-out flow: `{opt_out_requested, warning_shown, warning_acknowledged, opt_out_logged, reversal_available, high_risk_step_up_required}$
- Prediction market risk disclosure: `{no_guaranteed_profit, capital_at_risk, oracle_risk, settlement_delay, responsible_participation, age_restriction, tax_carf_notes}$

---

## 9. Validation Checklist

- [ ] All CPA obligations mapped to specific prompt sections
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] CPA unfair terms assessment included
- [ ] Plain language requirement included
- [ ] POPIA consent clause included
- [ ] PIN verification opt-out warning included
- [ ] Governing law/jurisdiction clause included
- [ ] Fee disclosure structure included
- [ ] Termination clause fairness analysis included
- [ ] Age restriction clause included
- [ ] NFO dispute resolution reference included
- [ ] No-guaranteed-settlement/no-guaranteed-profit language included (MP-BI10)
- [ ] Capital at risk disclosure included (MP-BI10)
- [ ] External counsel review marker included
- [ ] POPIA data subject rights reference included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01 + C15)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Terms documents contain binding legal commitments; version control and approval workflow required before customer-facing use.
- PIN verification opt-out warnings must be security-focused, not dark patterns that discourage opt-out.
- POPIA consent mechanisms must be freely given, specific, informed, and unambiguous.
- Liability limitations must be reviewed by external counsel for enforceability under SA law.
- No terms content in logs or dotfiles (guardrail from MP-BF04).
- Data subject rights mechanisms must be technically implementable, not just policy statements.
- Fee disclosures must be accurate and updated when fees change; stale disclosures create CPA risk.

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** unfair contract terms, plain language, disclosure, cooling-off, liability limitations, supplier warranties, consumer rights.
- **POPIA Act 4 of 2013:** consent for personal information processing, data subject rights, cross-border transfers, breach notification.
- **FICA Act 38 of 2001:** KYC/AML obligations referenced in wallet terms.
- **SARS CARF:** effective 1 March 2026; tax reporting notes in prediction market terms.
- **FAIS Act 37 of 2002:** financial advice disclaimers in wallet terms.
- **Consumer protection:** no misleading financial claims, no dark patterns (guardrail from MP-BF04).
- **Companies Act 71 of 2008:** corporate capacity to enter into terms.
- **Electronic Communications and Transactions Act 25 of 2002:** electronic contract validity, electronic signatures.

---

## 12. Compliance Gate

**C01 Legal-Compliance + C15 Product-Management.** Binding compliance veto on any terms gap. External counsel review required before any terms-dependent artifact ships. No customer-facing wallet or prediction market service may launch without C01 + C15 sign-off.

---

## 13. Rollback Plan

- If CPA compliance gaps are found: revert to previous terms version, obtain external counsel review, re-issue with approved terms.
- If POPIA consent mechanism is invalid: suspend personal information processing, implement compliant consent, re-obtain consent from existing customers.
- If PIN opt-out warning is inadequate: disable opt-out until warning is corrected, retrain support staff, update terms.
- If governing law/jurisdiction is challenged: obtain external counsel opinion, amend terms, notify customers of changes.
- If fee disclosure is inaccurate: correct fees, issue corrected disclosures, compensate affected customers if required.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C01-WALLET-TERMS-NEO-006 → C01 Legal-Compliance Captain → C15 Product-Management Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical legal/terms events skip to C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/legal/wallet-terms-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 terms outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C15 product overlap, C14 customer success dispute overlap) and arbitrates per workflow-routing.md R3/R5.
