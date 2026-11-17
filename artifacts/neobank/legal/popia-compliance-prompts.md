# Master Prompt — SUB-C01-POPIA-NEO-001 (POPIA Compliance Prompts for NeoBank)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/legal/popia-compliance-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-POPIA-NEO-001  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C01-POPIA-NEO-001 to ingest the POPIA regulatory research data from the Stremiium repo, review and improve the NeoBank-related POPIA prompts (MP-BI01 POPIA Data Inventory, MP-BI02 POPIA DPIA, MP-BI03 POPIA Cross-Border SCCs), and produce an improved unconsolidated artifact that converts the research into actionable POPIA compliance prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, FICA, CARF, PAIA).

---

## 2. Assumptions

- The POPIA research pack at `02-research/landscape/02-regulatory-framework/privacy-popia.md` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- The source-library index at `02-research/source-library/INDEX.md` and bibliography at `02-research/source-library/BIBLIOGRAPHY.md` contain POPIA-relevant sources graded `[FACT]/[EST]/[UNKNOWN]/[INFER]`.
- The NeoBank platform design at `06-architecture/platform-design/` describes wallet, payments, ledger, and customer data flows that POPIA applies to.
- MP-BI01, MP-BI02, and MP-BI03 are the canonical POPIA prompts requiring improvement; no other POPIA prompts are in scope for this subagent.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- Which NeoBank data flows (wallet creation, PIN verification, MPC key shards, transaction history, dispute records) constitute "personal information" vs "special personal information" under POPIA s1?
- Does the NeoBank process personal information of children, and if so, what POPIA s30 conditions apply?
- What is the exact cross-border transfer mechanism for shards stored outside South Africa under POPIA s72?
- Which regulator (Information Regulator vs FSCA vs FIC) has primary oversight for POPIA breaches in a crypto-asset wallet context?
- How does POPIA s71 (automated decision-making) apply to NeoBank fraud scoring, transaction monitoring, and credit-like decisions?
- What is the retention period for POPIA records given simultaneous FICA (5 years) and CARF reporting obligations?
- Are there any POPIA prior-authorisation requirements under s56 for unique identifiers or special personal information in the NeoBank?
- How does POPIA interact with the immutable event-sourced ledger design described in `06-architecture/platform-design/domain-model/`?

---

## 4. Concerns

- The event-sourced append-only ledger conflicts with POPIA s24 (right to deletion/correction); no clear remediation path exists in current prompts.
- Cross-border MPC shard storage may trigger POPIA s72 without adequate safeguards documented in MP-BI03.
- Automated fraud/transaction monitoring decisions may constitute automated decision-making under POPIA s71 without human oversight documented.
- No POPIA breach-notification runbook exists in the current prompt set; breach reporting to the Information Regulator is underspecified.
- The distinction between POPIA "responsible party" and "operator" for third-party KYC/AML vendors is unclear in MP-BI01.
- Special personal information (biometrics for liveness, voice data) may be processed without prior authorisation under POPIA s26/s56.
- Agent logs and model prompts containing customer data may fall under POPIA without explicit inventory coverage.
- No PoPIA impact assessment exists for the NeoBank wallet service spec (MP-BF08) or MPC key management policy (MP-BF14).

---

## 5. Suggested Improvements

- Add a POPIA condition-by-condition mapping table (8 conditions under s5–s12) to MP-BI01, with NeoBank-specific examples for each.
- Expand MP-BI02 DPIA to include a NeoBank-specific threat model: wallet key compromise, voice data leakage, cross-border shard transfer, automated fraud scoring.
- Add POPIA s72 cross-border transfer clauses to MP-BI03 SCCs, including adequacy assessments for recipient jurisdictions.
- Add a POPIA breach notification workflow (72-hour awareness → Information Regulator notification → data subject communication) as a new section in MP-BI02.
- Add POPIA s71 automated decision-making safeguards to MP-BF04 Guardrails Catalogue (no automated decision without human oversight).
- Add POPIA s55 Information Officer registration and s51 PAIA manual requirements to MP-BI01.
- Add POPIA s26 special personal information handling (biometric liveness, voice) as a dedicated section in MP-BI01.
- Add POPIA retention schedule aligned with FICA 5-year and CARF reporting periods in MP-BI01.
- Add POPIA data subject rights (access, correction, deletion, objection) workflow to MP-BI02.
- Reference the `02-research/source-library/` POPIA sources with `[S#]` citations throughout improved prompts.

---

## 6. Missing Dependencies

- POPIA Act 4 of 2013 full text (not in repo; must be obtained from external legal source).
- POPIA Regulations and s72 cross-border transfer guidance from the Information Regulator.
- PAIA Act 2 of 2000 manual template (not in repo).
- Information Regulator registration forms and fees.
- External counsel review of POPIA interpretation for crypto-asset wallet context.
- NeoBank data flow diagrams from `06-architecture/platform-design/domain-model/` (may need to be requested from C06/C11).
- Vendor contracts for KYC/AML providers to determine responsible-party vs operator status.
- Breach notification thresholds from the Information Regulator (not in repo).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` and extract all POPIA obligations tagged `[STATUTE]`, `[REG]`, `[REG-GUIDE]`.
2. Read `02-research/source-library/INDEX.md` and `BIBLIOGRAPHY.md` for POPIA-relevant sources; note `[S#]` references.
3. Read `06-architecture/platform-design/domain-model/` and `integrations/` to map NeoBank personal-information flows.
4. Read MP-BI01, MP-BI02, MP-BI03 current prompt text from the master prompt registry.
5. Identify gaps between POPIA research and current prompt content (retention, cross-border, automated decision-making, breach notification).
6. Draft improved MP-BI01 POPIA Data Inventory with NeoBank-specific data categories, sources, purposes, legal bases, retention, cross-border, consent, minimization, security, ADM relevance.
7. Draft improved MP-BI02 POPIA DPIA with NeoBank wallet/trading/AI-specific necessity, proportionality, risks, mitigations, residual risk, approval, review date.
8. Draft improved MP-BI03 POPIA Cross-Border SCCs with NeoBank inter-CASP transfer clauses, safeguards, breach notification, data subject rights, audit, termination, SA law governing clause.
9. Add POPIA s71 automated decision-making safeguards to MP-BF04 Guardrails Catalogue cross-reference.
10. Add POPIA breach notification workflow as a new section in MP-BI02.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/legal/popia-compliance-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- POPIA data inventory schema: `{data_category, source, purpose, legal_basis, retention_period, cross_border_transfer, consent_required, minimization_applied, security_controls, adm_relevance, evidence_grade, source_ref}`
- POPIA DPIA schema: `{system_name, necessity, proportionality, risks[], mitigations[], residual_risk, approval_date, review_date, poopia_section_refs}`
- POPIA SCC schema: `{data_exporter, data_importer, purpose, categories_of_data, safeguards, onward_transfer, security_measures, breach_notification, data_subject_rights, audit_rights, termination, governing_law}`

---

## 9. Validation Checklist

- [ ] All POPIA obligations from `privacy-popia.md` are mapped to specific prompt sections
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] POPIA s72 cross-border transfer addressed
- [ ] POPIA s71 automated decision-making safeguards addressed
- [ ] POPIA s55 Information Officer registration addressed
- [ ] POPIA s26 special personal information (biometrics, voice) addressed
- [ ] POPIA breach notification workflow included
- [ ] POPIA retention schedule aligned with FICA 5-year and CARF periods
- [ ] Data subject rights workflow (access, correction, deletion, objection) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01 + Executive)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Agent logs and model prompts may contain customer personal information; must be classified as POPIA-sensitive and encrypted at rest.
- Cross-border MPC shard storage must use POPIA s72-compliant safeguards (binding corporate rules, SCCs, or adequacy decision).
- Voice/audio data (biometric special personal information) requires POPIA s26/s56 prior authorisation assessment.
- Automated fraud scoring must have human-in-the-loop review per POPIA s71.
- No secrets in logs or dotfiles (guardrail from MP-BF04).
- POPIA data inventory itself contains sensitive operational details; restrict access to C01 and C12 only.
- Breach notification must preserve evidence chain for Information Regulator and FIC reporting.
- Data subject deletion requests must be reconciled with append-only ledger immutability (cryptographic erasure or shard revocation).

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** 8 conditions for lawful processing (s5–s12), Information Officer registration (s55), prior authorisation (s56), cross-border transfers (s72), breach notification, automated decision-making (s71).
- **PAIA Act 2 of 2000:** manual requirements, information officer duties.
- **FICA Act 38 of 2001:** 5-year record retention overlaps with POPIA retention; CDD/KYC data is personal information under POPIA.
- **SARS CARF:** effective March 2026; crypto-asset and e-money reporting data is personal information under POPIA.
- **FSCA/FAIS:** financial advice and intermediary services data is personal information under POPIA.
- **Consumer Protection Act 68 of 2008:** consumer data disclosures overlap with POPIA notification requirements.
- **FATF grey-list exit (Oct 2025):** AML/CFT supervision remains intense; POPIA and FICA obligations operate in parallel.
- **Exchange Control Rules:** cross-border data and fund transfers may trigger both POPIA s72 and SARB FinSurv reporting.

---

## 12. Compliance Gate

**C01 Legal-Compliance + Executive.** Binding compliance veto on any POPIA gap. External counsel review required before any POPIA-dependent artifact ships. No POPIA-covered data surface may launch without C01 sign-off.

---

## 13. Rollback Plan

- If POPIA compliance gaps are found post-draft: revert to previous prompt version, re-ingest research, re-draft with C01 review.
- If cross-border transfer mechanism is invalid: suspend shard storage outside SA, migrate shards to SA-hosted enclaves, re-run DPIA.
- If automated decision-making lacks human oversight: disable automated fraud scoring, route all decisions to human review, update guardrails.
- If breach notification is required: activate incident response (C12), notify Information Regulator and affected data subjects, preserve logs.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C01-POPIA-NEO-001 → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical POPIA/privacy events skip to C01 + C16 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/legal/popia-compliance-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 POPIA/FICA/CARF outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C12 security overlap, C16 banking compliance overlap) and arbitrates per workflow-routing.md R3/R5.
