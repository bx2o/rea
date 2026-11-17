# Master Prompt — SUB-C13-WEB3-NEO-002 (NeoBank Crypto Compliance Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/web3/crypto-compliance-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C13-WEB3-NEO-002  
**Council:** C13 Web3-Finance  
**Gate:** C13 + C10 Finance

---

## 1. Summary

This master prompt instructs SUB-C13-WEB3-NEO-002 to ingest the NeoBank crypto compliance research data from the Stremiium repo, review and improve the NeoBank crypto compliance prompts (MP-BI15 Creator Payments crypto portions, MP-BJ06 ZKP research for privacy-preserving KYC, MP-BI08 CASP Policy crypto sections), and produce an improved unconsolidated artifact that converts the research into actionable crypto compliance prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CARF, FATCA/CRS, FSCA, FICA, Exchange Control, POPIA).

---

## 2. Assumptions

- The NeoBank crypto research at `02-research/landscape/06-institution-deep-dives/za-crypto/` (Luno, VALR) and `03-neobank-digital-competitors/` (crypto/CASP entities) is current as of 2026-10-16.
- MP-BI15 (Creator Payments — crypto portions), MP-BJ06 (ZKP research), and MP-BI08 (CASP Policy crypto sections) are the canonical crypto compliance prompts requiring improvement; no other crypto compliance prompts are in scope for this subagent.
- CARF reporting effective 1 March 2026 applies to crypto-asset and e-money transactions.
- FATCA/CRS reporting may overlap with CARF for the same customer base.
- ZKP research is for privacy-preserving KYC and trading audit proofs (research stage only).
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- Draft for review by external accountant/counsel; not final legal or tax advice.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- How does CARF classify $STM token transactions and BLT loyalty token transactions (crypto asset vs e-money vs neither)?
- What is the RCASP registration threshold and process for the NeoBank?
- How does FATCA/CRS reporting interact with CARF reporting for the same customer base?
- What TIN collection and verification obligations apply under CARF for South African vs foreign customers?
- What are the exchange control implications for cross-border crypto-asset transfers?
- How can ZKPs be applied to privacy-preserving KYC in the NeoBank context?
- How can ZKPs be applied to trading audit proofs?
- What are the creator payment crypto compliance considerations (withholding, PAYE, VAT, cross-border, exchange control)?
- What are the crypto asset tax classification rules under SARS?
- What are the penalties for CARF non-compliance under SA tax administration law?

---

## 4. Concerns

- No $STM/BLT token CARF classification exists in current prompts.
- No RCASP registration analysis exists for the NeoBank.
- No FATCA/CRS/CARF harmonization matrix exists.
- No TIN collection and verification workflow for foreign customers exists.
- No exchange control analysis for cross-border crypto transfers exists.
- No ZKP implementation plan exists for privacy-preserving KYC (research only).
- No creator payment crypto compliance framework exists (withholding, PAYE, VAT, cross-border).
- No crypto asset tax classification under SARS is documented.
- No external accountant/counsel review process is specified for crypto compliance.
- No CARF audit trail or reconciliation with FICA data is specified.

---

## 5. Suggested Improvements

- Add $STM and BLT token CARF classification memo to crypto compliance prompts (classification rationale, regulatory basis, disclosure requirements).
- Add RCASP readiness checklist (registration thresholds, documentation, submission timeline) to crypto compliance prompts.
- Add FATCA/CRS/CARF harmonization matrix (overlapping and distinct reporting requirements per data field).
- Add TIN collection and verification workflow (foreign TIN validation, retention, POPIA minimization).
- Add exchange control analysis for cross-border crypto-asset transfers (SARB FinSurv, ADLA, reporting obligations).
- Add ZKP research application to privacy-preserving KYC (research stage, implementation prompts, risk register).
- Add ZKP research application to trading audit proofs (research stage, implementation prompts, risk register).
- Add creator payment crypto compliance framework (contractor classification, withholding, PAYE where applicable, VAT, royalties, cross-border payments, exchange control, POPIA, AML per MP-BI15).
- Add crypto asset tax classification under SARS (capital asset vs trading stock, income tax, CGT, VAT treatment).
- Add external accountant/counsel review questions for crypto compliance readiness.
- Add CARF audit trail and reconciliation with FICA STR/CTR data.
- Add CARF reporting calendar (reporting period, submission deadline, late-filing penalties).
- Add POPIA data minimization overlay for CARF data collection.
- Reference `02-research/landscape/06-institution-deep-dives/za-crypto/` and `02-research/synthesis/cross-cutting/papers/` with specific `[S#]` citations.

---

## 6. Missing Dependencies

- SARS CARF legislation and guidance (effective 1 March 2026, not fully in repo).
- CRS/FATCA reporting requirements for comparison/harmonization (external).
- RCASP registration forms and thresholds from SARS (external).
- External accountant/counsel review of crypto compliance interpretation.
- ZKP cryptography expertise (research stage, from C12 Cybersecurity-Intel or external).
- SARS tax classification opinion on $STM/BLT tokens (external tax practitioner).
- Creator payment terms and withholding requirements (from C10 Finance / C01 Legal-Compliance).
- Exchange Control guidance from SARB FinSurv (external).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/06-institution-deep-dives/za-crypto/` for Luno, VALR crypto CASP compliance research.
2. Read `02-research/landscape/03-neobank-digital-competitors/` for crypto/CASP entity compliance research.
3. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` for CARF/FATCA/CRS content.
4. Read `02-research/synthesis/cross-cutting/papers/` for ZKP research (if applicable).
5. Read `01-program/plan/PLAN.md` for crypto compliance-related WBS items.
6. Read MP-BI15, MP-BJ06, and MP-BI08 crypto sections current prompt text from the master prompt registry.
7. Identify gaps between crypto compliance research and current prompt content ($STM/BLT CARF classification, RCASP, FATCA/CRS/CARF harmonization, TIN verification, exchange control, ZKP applications, creator payments, tax classification, external review, CARF audit trail).
8. Draft improved crypto compliance prompts with all improvements listed above.
9. Add ZKP research section (privacy-preserving KYC, trading audit proofs, research stage only).
10. Add creator payment crypto compliance framework (MP-BI15 crypto portions).
11. Add external accountant/counsel review questions.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/web3/crypto-compliance-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Token CARF classification: `{token_id, token_name, carf_classification (crypto_asset/e-money/neither), regulatory_basis, disclosure_required, reporting_fields[], retention_period}$
- RCASP readiness: `{registration_threshold_met, registration_date, tin_collected, data_schema_mapped, retention_configured, privacy_review_completed, external_review_scheduled}$
- FATCA/CRS/CARF harmonization: `{data_field, fatca_required, crs_required, carf_required, overlapping_requirements, unique_requirements}$
- Creator payment: `{creator_id, contractor_classification, invoice_ref, withholding_applicable, paye_applicable, vat_applicable, royalty_amount, cross_border_flag, exchange_control_ref, poopia_consent, aml_screened}$
- ZKP application: `{application_type (privacy_preserving_kyc/trading_audit_proof), research_stage, implementation_prompt, risk_register_ref, adoption_decision}$

---

## 9. Validation Checklist

- [ ] All crypto compliance research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] $STM/BLT token CARF classification included
- [ ] RCASP readiness checklist included
- [ ] FATCA/CRS/CARF harmonization matrix included
- [ ] TIN collection and verification workflow included
- [ ] Exchange control analysis for cross-border crypto included
- [ ] ZKP research application (privacy-preserving KYC, trading audit proofs) included
- [ ] Creator payment crypto compliance framework included
- [ ] Crypto asset tax classification under SARS included
- [ ] External accountant/counsel review questions included
- [ ] CARF audit trail and reconciliation with FICA data included
- [ ] CARF reporting calendar included
- [ ] POPIA data minimization overlay included
- [ ] Draft-for-review marker included (not final legal/tax advice)
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C13 + C10)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Crypto compliance data contains sensitive token and transaction information; restrict access to C13, C10, C01, C12 only.
- No private keys, mnemonics, or signing credentials in crypto compliance artifacts (guardrail from MP-BF04).
- ZKP research is research stage only; no production ZKP implementation without C12 security review.
- TIN collection and storage must comply with POPIA; heightened protection required.
- CARF reporting data must be tamper-evident for SARS audit.
- Creator payment data contains personal and financial information; POPIA-compliant access controls required.
- No crypto compliance secrets in logs or dotfiles (guardrail from MP-BF04).

---

## 11. South African Regulatory Considerations

- **SARS CARF:** effective 1 March 2026; crypto-asset and e-money reporting; RCASP status; reporting period; submission deadlines; penalties.
- **FATCA/CRS:** US FATCA and OECD Common Reporting Standard; may overlap with CARF for same customer base.
- **FSCA/FAIS:** CASP licensing; crypto asset service provider regulation; financial product classification.
- **FICA Act 38 of 2001:** crypto asset transactions are accountable institution activities; CDD, STR, record retention.
- **Exchange Control Rules:** SARB FinSurv oversight of cross-border crypto-asset transfers; ADLA appointments.
- **POPIA Act 4 of 2013:** CARF data collection is personal information processing; s72 cross-border controls.
- **Tax Administration Act:** CARF reporting obligations and penalties under SA tax law.
- **Income Tax Act / CGT:** crypto asset tax classification (capital asset vs trading stock).
- **VAT Act:** VAT treatment of crypto-asset transactions requires external tax opinion.
- **FATF grey-list exit (Oct 2025):** enhanced transparency expectations; CARF compliance is part of SA's international tax cooperation commitments.

---

## 12. Compliance Gate

**C13 Web3-Finance + C10 Finance.** Binding compliance veto on any crypto compliance gap. External accountant/counsel review required before any crypto compliance-dependent artifact ships. Draft for review — not final legal or tax advice.

---

## 13. Rollback Plan

- If $STM/BLT CARF classification is challenged: suspend token reporting, obtain SARS/tax counsel determination, re-classify.
- If RCASP registration is delayed: suspend crypto-asset reporting, operate in non-reporting mode, apply for RCASP status.
- If FATCA/CRS/CARF conflicts are identified: harmonize reporting fields, prioritize statutory requirements, document conflict resolution.
- If TIN collection is incomplete: implement foreign TIN validation, re-collect from existing customers, document gaps.
- If ZKP research advances to implementation: obtain C12 security review, implement in isolated sandbox, no production deployment without audit.
- If creator payment compliance gaps are found: suspend affected creator payments, obtain external accountant review, remediate withholding/PAYE/VAT.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C13-WEB3-NEO-002 → C13 Web3-Finance Captain → C10 Finance-CFO Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical crypto compliance events skip to C13 + C10 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/web3/crypto-compliance-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C13 crypto compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C10 finance/CARF overlap, C01 legal/CASP overlap, C12 security/ZKP overlap) and arbitrates per workflow-routing.md R3/R5.
