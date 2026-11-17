# Master Prompt — SUB-C01-FSCA-FAIS-NEO-005 (FSCA/FAIS/CASP Prompts for NeoBank)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/legal/fsca-fais-casp-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-FSCA-FAIS-NEO-005  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C01-FSCA-FAIS-NEO-005 to ingest the FSCA/FAIS regulatory research data from the Stremiium repo, review and improve the NeoBank-related FSCA/FAIS/CASP prompts (MP-BI07 FSCA/FAIS Classification Matrix, MP-BI08 CASP Policy), and produce an improved unconsolidated artifact that converts the research into actionable FSCA/FAIS/CASP compliance prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (FSCA, FAIS, Twin Peaks, FSR Act, CASP, COFI Bill).

---

## 2. Assumptions

- The FSCA/FAIS research pack at `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- The NeoBank may require an FSP (Financial Services Provider) licence under FAIS Act for advice/intermediary activities including crypto assets.
- MP-BI07 (FSCA/FAIS Classification Matrix) and MP-BI08 (CASP Policy) are the canonical FSCA/FAIS/CASP prompts requiring improvement; no other FSCA/FAIS prompts are in scope for this subagent.
- Stremiium Trading Firm is private-funded; no public investor funds, no client funds, no pooled public capital unless separately approved by Legal-Compliance, Banking-Fintech, Finance, and Mychael.
- The COFI Bill (2026) is a Bill, not yet enacted; current Twin Peaks framework (FSRA 9 of 2017) applies.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which FAIS FSP category (Cat I–IV) applies to the NeoBank's wallet, advisory, and intermediary activities?
- Does the NeoBank's $STM token or BLT token constitute a "financial product" under FAIS Act s1?
- Does providing crypto asset wallet services constitute rendering a financial service under FAIS?
- What fit-and-proper requirements apply to Key Individuals and Representatives under FAIS?
- Does the NeoBank's automated portfolio/trading feature constitute automated financial advice requiring FSCA oversight?
- What disclosure requirements apply under FAIS for crypto asset services (risk warnings, fees, conflicts of interest)?
- How does the COFI Bill (if enacted) change the FAIS/FSCA landscape for the NeoBank?
- What is the FSCA's approach to CASP licensing under FAIS Act as amended by FSRA 9 of 2017?
- Does fantasy sports or prediction market activity fall under FSCA or NGB (National Gambling Board) jurisdiction?
- What complaints handling and ombud (NFO) obligations apply under FAIS?

---

## 4. Concerns

- No FSCA/FAIS classification matrix exists for NeoBank services (wallet, neo-bank, prediction markets, fantasy sports, fan tokens, phygital NFTs).
- CASP policy lacks specific custody boundaries and client asset segregation rules.
- No licensing requirements analysis for each NeoBank service line.
- Automated trading/portfolio features may constitute financial advice without FSCA authorisation.
- No client categorization (retail vs professional) framework documented.
- No conflict of interest management policy for NeoBank's dual role as wallet provider and token issuer ($STM).
- No complaint handling or NFO (National Financial Ombud Scheme) membership documented.
- No disclosure requirements for crypto asset services (risk warnings, capital at risk, no guaranteed returns).
- No securities law adjacency analysis for $STM token or BLT token.
- No COFI Bill transitional arrangements analysis.

---

## 5. Suggested Improvements

- Add FSCA/FAIS classification matrix with NeoBank service lines (wallet, neo-bank, trading firm, prediction markets, $STM token, BLT token, fantasy sports, fan tokens, phygital NFTs, creator payments, automated trading) classified by licensing requirement to MP-BI07.
- Add licensing requirements analysis (FSP Cat I–IV, CASP, NGB) for each NeoBank service to MP-BI07.
- Add CASP custody boundaries and client asset segregation rules to MP-BI08.
- Add fit-and-proper requirements for Key Individuals and Representatives to MP-BI07.
- Add disclosure requirements for crypto asset services (risk warnings, fees, conflicts, no guaranteed returns) to MP-BI07/MP-BI08.
- Add client categorization framework (retail vs professional) to MP-BI07.
- Add conflict of interest management policy for $STM token issuer/wallet provider dual role to MP-BI08.
- Add complaint handling and NFO membership workflow to MP-BI07.
- Add securities law adjacency analysis for $STM and BLT tokens to MP-BI08.
- Add COFI Bill impact analysis and transitional arrangements to MP-BI07.
- Add automated financial advice assessment for NeoBank's trading/portfolio features to MP-BI07.
- Add prediction market and fantasy sports jurisdiction analysis (FSCA vs NGB) to MP-BI07.
- Reference `02-research/source-library/` FSCA/FAIS sources with `[S#]` citations throughout improved prompts.

---

## 6. Missing Dependencies

- FAIS Act 37 of 2002 full text and FSCA guidance notes (external).
- FSRA 9 of 2017 Twin Peaks framework (external).
- COFI Bill 2026 text and status (external, Bill not yet enacted).
- FSCA licensing application forms and fees (external).
- Fit-and-proper assessment templates (external, from FSCA).
- External counsel review of FSCA/FAIS interpretation for crypto-asset context.
- NeoBank service catalogue with detailed activity descriptions (from C15 Product).
- NFO (National Financial Ombud Scheme) membership requirements (external).
- Securities law opinion on $STM/BLT token classification (external counsel).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` and extract all FSCA/FAIS obligations tagged `[STATUTE]`, `[REG]`, `[REG-GUIDE]`.
2. Read `02-research/source-library/INDEX.md` and `BIBLIOGRAPHY.md` for FSCA/FAIS/CASP sources; note `[S#]` references.
3. Read `01-program/councils/c15-product-management/CHARTER.md` and `06-architecture/platform-design/` to understand NeoBank service lines.
4. Read MP-BI07 and MP-BI08 current prompt text from the master prompt registry.
5. Identify gaps between FSCA/FAIS research and current prompt content (classification matrix, licensing, CASP, fit-and-proper, disclosures, complaints, COFI Bill).
6. Draft improved MP-BI07 FSCA/FAIS Classification Matrix with NeoBank service line classification, licensing requirements, sandbox applicability, disclosure requirements, client categorization, conflict management, complaint handling.
7. Draft improved MP-BI08 CASP Policy with service classification, custody boundaries, client asset segregation, AML/CDD, Travel Rule, CARF, disclosures, complaints, record keeping, incident response, licensing status, prohibited activities.
8. Add licensing requirements analysis for each NeoBank service to MP-BI07.
9. Add CASP custody boundaries and client asset segregation to MP-BI08.
10. Add fit-and-proper requirements to MP-BI07.
11. Add disclosure requirements for crypto assets to MP-BI07/MP-BI08.
12. Add client categorization framework to MP-BI07.
13. Add conflict of interest management for $STM dual role to MP-BI08.
14. Add complaint handling and NFO membership to MP-BI07.
15. Add securities law adjacency analysis for $STM/BLT to MP-BI08.
16. Add COFI Bill impact analysis to MP-BI07.
17. Add automated financial advice assessment to MP-BI07.
18. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/legal/fsca-fais-casp-prompts.md`.
19. Run validation checklist (§9 below).
20. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- FSCA/FAIS classification entry: `{service_line, activity_description, fais_category, licensing_required, regulator, sandbox_applicable, disclosure_required, client_categorization, conflict_management, complaint_handling, evidence_grade, source_ref}`
- CASP policy entry: `{activity, custody_boundary, client_asset_segregation, aml_cdd, travel_rule, carf, disclosures, complaints, record_keeping, incident_response, licensing_status, prohibited, evidence_grade, source_ref}$
- Fit-and-proper record: `{individual_name, role, qualification, experience, criminal_check, credit_check, regulatory_approval, appointment_date, review_due}$
- Complaint record: `{complaint_id, customer_id, service_line, nature, received_date, resolution, nfo_referral, resolution_date, evidence_ref}$

---

## 9. Validation Checklist

- [ ] All FSCA/FAIS obligations from `conduct-fais-nca.md` are mapped to specific prompt sections
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] FSCA/FAIS classification matrix for all NeoBank service lines included
- [ ] Licensing requirements analysis included
- [ ] CASP custody boundaries included
- [ ] Client asset segregation rules included
- [ ] Fit-and-proper requirements included
- [ ] Disclosure requirements for crypto assets included
- [ ] Client categorization framework included
- [ ] Conflict of interest management for $STM dual role included
- [ ] Complaint handling and NFO membership included
- [ ] Securities law adjacency analysis for $STM/BLT included
- [ ] COFI Bill impact analysis included
- [ ] Automated financial advice assessment included
- [ ] Prediction market/fantasy sports jurisdiction analysis included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- FSP licence and regulatory correspondence contain sensitive commercial information; restrict access to C01 and Executive only.
- Client asset segregation rules must be technically enforced (separate wallets, separate ledger accounts) not just policy.
- Custody boundaries must prevent commingling of NeoBank funds and customer funds.
- Disclosure documents must be version-controlled and approved before customer-facing use.
- Complaint handling data contains customer personal information; POPIA-compliant access controls required.
- No FSCA/FAIS application details in logs or dotfiles (guardrail from MP-BF04).
- Regulatory examination files must be tamper-evident and retainable for the required period.
- Fit-and-proper personal information (criminal checks, credit checks) requires heightened POPIA protection.

---

## 11. South African Regulatory Considerations

- **FAIS Act 37 of 2002:** FSP categories (Cat I–IV), fit-and-proper requirements, disclosure obligations, code of conduct, complaints handling.
- **FSRA 9 of 2017:** Twin Peaks framework; FSCA as market conduct regulator; CASP licensing under FAIS as amended.
- **FSCA:** Crypto Asset Service Provider (CASP) licensing; financial product classification; fit-and-proper examinations (RE5/RE1).
- **COFI Bill 2026:** Second Twin Peaks pillar; consolidates market-conduct law; transitional arrangements TBD.
- **Consumer Protection Act 68 of 2008:** consumer disclosures, unfair business practices, cooling-off rights.
- **National Credit Act 34 of 2005:** if NeoBank offers credit-like features, NCR registration and conduct requirements.
- **NGB (National Gambling Board):** prediction markets and fantasy sports may fall under gambling jurisdiction, not FSCA.
- **NFO (National Financial Ombud Scheme):** mandatory membership for FSPs; complaint resolution.
- **FATF grey-list exit (Oct 2025):** enhanced market conduct supervision expectations.

---

## 12. Compliance Gate

**C01 Legal-Compliance.** Binding compliance veto on any FSCA/FAIS/CASP gap. External counsel review required before any FSCA/FAIS-dependent artifact ships. No FSP-licensable activity may launch without C01 sign-off. No claims of licensure unless verified.

---

## 13. Rollback Plan

- If FSCA/FAIS classification is unclear for a service line: suspend that service line, obtain FSCA guidance, re-activate upon classification.
- If CASP licensing is required but not obtained: suspend crypto asset services, operate in fiat-only mode, apply for CASP licence.
- If fit-and-proper requirements are not met: replace Key Individuals/Representatives, suspend affected activities, re-apply with qualified personnel.
- If disclosure requirements are not met: withdraw non-compliant customer-facing materials, obtain legal approval, re-issue with approved disclosures.
- If conflict of interest is identified: disclose to customers, implement information barriers, obtain FSCA guidance if needed.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C01-FSCA-FAIS-NEO-005 → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical FSCA/FAIS events skip to C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/legal/fsca-fais-casp-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 FSCA/FAIS/CASP outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C13 Web3 overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
