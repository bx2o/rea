# Master Prompt — SUB-C10-FIN-NEO-001 (NeoBank Tax and CARF Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/finance/tax-and-carf-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C10-FIN-NEO-001  
**Council:** C10 Finance-CFO  
**Gate:** Legal-Compliance + C10 Finance

---

## 1. Summary

This master prompt instructs SUB-C10-FIN-NEO-001 to ingest the NeoBank tax and CARF regulatory research data from the Stremiium repo, review and improve the NeoBank tax/CARF prompts (MP-BI06 SARS CARF Reporting Readiness, MP-BF13 CARF Reporting Mapper, MP-BD07 Taxes and Accounting Firm Pack tax sections), and produce an improved unconsolidated artifact that converts the research into actionable tax/CARF prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CARF, FATCA/CRS, SARS, tax, POPIA, FICA).

---

## 2. Assumptions

- The NeoBank tax governance research at `02-research/landscape/02-regulatory-framework/tax-governance.md` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- CARF became effective 1 March 2026 for crypto-asset and e-money reporting in South Africa.
- MP-BI06 (SARS CARF Reporting Readiness), MP-BF13 (CARF Reporting Mapper), and MP-BD07 (Taxes and Accounting Firm Pack — tax sections) are the canonical tax/CARF prompts requiring improvement; no other tax/CARF prompts are in scope for this subagent.
- The NeoBank will be a "reporting financial institution" under CARF.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- Draft for review by registered accountant/tax practitioner; do not provide final tax advice (per MP-BD07 boundary).
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are the exact CARF data fields required for crypto-asset and e-money transactions under SARS guidance effective 1 March 2026?
- What is the RCASP registration threshold and process for the NeoBank wallet service?
- How does CARF interact with FATCA/CRS reporting for the same customer base?
- What is the CARF reporting period and submission deadline?
- How does CARF handle cross-border crypto-asset transfers where counterparty jurisdiction is non-CRS?
- What TIN collection and verification obligations apply under CARF for South African vs foreign customers?
- How does POPIA data minimization interact with CARF's extensive data collection requirements?
- What is the retention period for CARF reporting records under SA tax law?
- How does CARF classify $STM token transactions and BLT loyalty token transactions?
- What VAT, income tax, STT obligations apply to NeoBank transactions?
- How does exchange control reporting interact with CARF for cross-border transfers?
- What are the penalties for non-compliance with CARF reporting under SA tax administration law?

---

## 4. Concerns

- No CARF data schema exists in current prompts; MP-BI06 and MP-BF13 lack field-level specificity.
- RCASP status determination for the NeoBank is unresolved.
- Cross-border crypto-asset transfers may create dual CARF/FATCA/CRS reporting obligations with conflicting requirements.
- POPIA data minimization may conflict with CARF's extensive data collection requirements.
- No CARF reporting calendar or submission workflow is documented.
- TIN collection for foreign customers may be incomplete; no validation process specified.
- No CARF audit trail or reconciliation with FICA transaction monitoring is specified.
- $STM and BLT token classification under CARF (crypto asset vs e-money vs neither) is unresolved.
- No external accountant/counsel review process is specified for CARF readiness.
- VAT treatment of crypto-asset transactions is unresolved.
- Exchange control reporting for cross-border crypto transfers is not integrated with CARF.

---

## 5. Suggested Improvements

- Add CARF data schema with all required fields (user identification, jurisdiction, TIN, asset type, transaction type, dates, values, counterparty, reporting period, RCASP status, retention, consent, cross-border implications) to MP-BI06.
- Add RCASP readiness checklist with registration thresholds, documentation, and submission timeline to MP-BI06.
- Add CARF reporting mapper with field-level mapping from NeoBank transaction records to CARF reportable items to MP-BF13.
- Add FATCA/CRS/CARF harmonization matrix showing overlapping and distinct reporting requirements to MP-BI06.
- Add cross-border transfer reporting rules for crypto-asset transactions where counterparty jurisdiction is non-CRS to MP-BF13.
- Add POPIA data minimization overlay for CARF data collection (collect only what CARF requires, retain only as long as needed) to MP-BF13.
- Add CARF reporting calendar (reporting period, submission deadline, late-filing penalties) to MP-BI06.
- Add TIN collection and verification workflow with foreign TIN validation to MP-BF13.
- Add CARF record retention schedule aligned with tax administration law (typically 5 years) to MP-BI06.
- Add $STM and BLT token classification memo under CARF to MP-BI06.
- Add CARF reconciliation with FICA STR/CTR data to MP-BF13.
- Add external accountant/counsel review questions for CARF readiness to MP-BI06.
- Add VAT treatment of crypto-asset transactions to MP-BD07 tax sections.
- Add exchange control reporting integration with CARF to MP-BF13.
- Reference `02-research/landscape/02-regulatory-framework/tax-governance.md` with specific `[S#]` citations.

---

## 6. Missing Dependencies

- SARS CARF legislation and guidance (effective 1 March 2026, not fully in repo).
- CRS/FATCA reporting requirements for comparison/harmonization (external).
- RCASP registration forms and thresholds from SARS (external).
- External accountant/counsel review of CARF interpretation.
- NeoBank transaction data model from `06-architecture/platform-design/domain-model/` (may need to be requested from C06/C11).
- FATCA/CRS existing reporting processes (if any) from C10 Finance.
- SARS eFiling or CARF submission portal specifications (external).
- VAT treatment opinion on crypto-asset transactions from external tax practitioner.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` and extract all CARF/tax obligations tagged `[STATUTE]`, `[REG]`, `[REG-GUIDE]`.
2. Read `02-research/synthesis/cross-cutting/regulation/` for CARF-related content (FICA/POPIA/NCA cross-references).
3. Read `02-research/source-library/INDEX.md` and `BIBLIOGRAPHY.md` for CARF-relevant sources; note `[S#]` references.
4. Read `06-architecture/platform-design/domain-model/` and `data/` to map NeoBank transaction records to CARF reportable fields.
5. Read MP-BI06, MP-BF13, and MP-BD07 tax sections current prompt text from the master prompt registry.
6. Identify gaps between CARF/tax research and current prompt content (data schema, RCASP status, FATCA/CRS harmonization, cross-border, retention, reconciliation, VAT, exchange control).
7. Draft improved MP-BI06 SARS CARF Reporting Readiness with data fields, RCASP status, reporting calendar, retention, privacy controls, external accountant questions.
8. Draft improved MP-BF13 CARF Reporting Mapper with CARF data schema, field mapping, readiness checklist, missing fields, privacy controls, test fixtures.
9. Draft improved MP-BD07 tax sections with VAT treatment, corporate tax, international tax, transfer pricing, exchange control reporting.
10. Add FATCA/CRS/CARF harmonization matrix to MP-BI06.
11. Add cross-border transfer reporting rules to MP-BF13.
12. Add POPIA data minimization overlay for CARF data collection to MP-BF13.
13. Add $STM/BLT token classification memo to MP-BI06.
14. Add CARF reconciliation with FICA data to MP-BF13.
15. Add external accountant/counsel review questions to MP-BI06.
16. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/finance/tax-and-carf-prompts.md`.
17. Run validation checklist (§9 below).
18. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- CARF data schema: `{user_id, jurisdiction, tin, asset_type, transaction_type, transaction_date, value, counterparty, reporting_period, rcasp_status, poopia_consent, retention_until, cross_border_flag}$
- CARF reporting calendar: `{reporting_period_start, reporting_period_end, submission_deadline, submission_channel, late_filing_penalty, correction_window}$
- RCASP readiness: `{registration_threshold_met, registration_date, tin_collected, data_schema_mapped, retention_configured, privacy_review_completed, external_review_scheduled}$
- FATCA/CRS/CARF harmonization: `{data_field, fatca_required, crs_required, carf_required, overlapping_requirements, unique_requirements}$
- VAT treatment: `{transaction_type, vat_applicable, vat_rate, zero_rated, vat_treatment_basis, external_tax_ref}$

---

## 9. Validation Checklist

- [ ] All tax/CARF obligations from `tax-governance.md` are mapped to specific prompt sections
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] CARF data schema included with all required fields
- [ ] RCASP status determination addressed
- [ ] FATCA/CRS/CARF harmonization matrix included
- [ ] Cross-border transfer reporting rules included
- [ ] POPIA data minimization overlay included
- [ ] CARF reporting calendar included
- [ ] TIN collection and verification workflow included
- [ ] CARF record retention schedule included
- [ ] $STM/BLT token classification memo included
- [ ] CARF reconciliation with FICA data included
- [ ] External accountant/counsel review questions included
- [ ] VAT treatment of crypto-asset transactions included
- [ ] Exchange control reporting integration included
- [ ] Draft-for-review marker (not final tax advice) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01 + C10)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- CARF data contains sensitive customer identification and transaction data; must be encrypted at rest and in transit, with strict access controls (C01/C10 only).
- TIN collection and storage must comply with POPIA; TINs are special categories of personal information requiring heightened protection.
- CARF submission portal credentials must be managed via secrets manager, never in code or dotfiles.
- Cross-border reporting data must use POPIA s72-compliant safeguards if transmitted outside SA.
- CARF records must be tamper-evident for SARS audit.
- CARF reporting data must be reconciled with FICA transaction monitoring to prevent duplicate or contradictory reporting.
- No CARF data in logs or dotfiles (guardrail from MP-BF04).
- Access to CARF reporting system must be role-based with audit trail per SESS architecture.

---

## 11. South African Regulatory Considerations

- **SARS CARF:** effective 1 March 2026; crypto-asset and e-money reporting under Tax Administration Act; RCASP status; reporting period; submission deadlines; penalties for non-compliance.
- **FATCA/CRS:** US FATCA and OECD Common Reporting Standard for financial account information exchange; may overlap with CARF for same customer base.
- **POPIA Act 4 of 2013:** CARF data collection is personal information processing; s72 cross-border transfer controls apply to CARF data sent outside SA.
- **FICA Act 38 of 2001:** CARF reporting overlaps with FICA transaction monitoring; records may serve both CARF and FICA obligations.
- **Exchange Control Rules:** cross-border crypto-asset transfers may trigger both CARF reporting and SARB FinSurv reporting.
- **VAT Act:** VAT treatment of crypto-asset transactions (zero-rated, exempt, or standard-rated) requires external tax opinion.
- **Income Tax Act:** corporate income tax on NeoBank profits; trading profit/loss characterization.
- **Tax Administration Act:** CARF reporting obligations and penalties under SA tax law.
- **FATF grey-list exit (Oct 2025):** enhanced transparency expectations; CARF compliance is part of SA's international tax cooperation commitments.

---

## 12. Compliance Gate

**C01 Legal-Compliance + C10 Finance.** Binding compliance veto on any CARF gap. External accountant/counsel review required before any CARF-dependent artifact ships. No CARF-reportable transaction processing may launch without C01 + C10 sign-off. This is draft for review by registered accountant/tax practitioner — not final tax advice.

---

## 13. Rollback Plan

- If CARF data schema gaps are found post-draft: revert to previous prompt version, re-ingest SARS guidance, re-draft with C01/C10 review.
- If RCASP status is unclear: suspend crypto-asset reporting, obtain SARS determination, re-activate upon classification.
- If FATCA/CRS/CARF conflicts are identified: harmonize reporting fields, prioritize statutory requirements, document conflict resolution.
- If POPIA minimization conflicts with CARF collection: implement field-level minimization (collect only CARF-mandated fields), document legal basis.
- If CARF submission deadline is missed: file late with penalty disclosure, implement automated submission reminders, revise reporting calendar.
- If VAT treatment is unclear: suspend affected transaction types, obtain external tax opinion, re-activate upon classification.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C10-FIN-NEO-001 → C10 Finance-CFO Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical CARF/tax events skip to C10 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/finance/tax-and-carf-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C10 tax/CARF outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal overlap, C12 security overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
