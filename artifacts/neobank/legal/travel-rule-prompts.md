# Master Prompt — SUB-C01-TRAVEL-NEO-004 (Travel Rule Prompts for NeoBank)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/legal/travel-rule-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-TRAVEL-NEO-004  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance + C12 Cybersecurity-Intel

---

## 1. Summary

This master prompt instructs SUB-C01-TRAVEL-NEO-004 to ingest the Travel Rule regulatory research data from the Stremiium repo, review and improve the NeoBank-related Travel Rule prompts (MP-BI05 Travel Rule Operational Protocol, MP-BF12 Travel Rule Service), and produce an improved unconsolidated artifact that converts the research into actionable Travel Rule compliance prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (Travel Rule, FICA, POPIA, CARF, CASP).

---

## 2. Assumptions

- The Travel Rule research material at `02-research/landscape/02-regulatory-framework/payments-nps.md` and `02-research/synthesis/cross-cutting/regulation/` is current as of access date 2026-10-16 and remains valid for prompt preparation.
- The NeoBank wallet service will process crypto-asset transfers that may trigger Travel Rule obligations under FATF Recommendation 16 as applied in South Africa.
- MP-BI05 (Travel Rule Operational Protocol) and MP-BF12 (Travel Rule Service) are the canonical Travel Rule prompts requiring improvement; no other Travel Rule prompts are in scope for this subagent.
- The NeoBank may act as both originating VASP and beneficiary VASP depending on transfer direction.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the SARB/FSCA Travel Rule threshold for crypto-asset transfers in South Africa (if any specific threshold exists beyond FATF's USD/EUR 1,000 default)?
- Which secure messaging protocol should the NeoBank use for Travel Rule information exchange (TRP, IVMS101, or custom API)?
- How does the NeoBank verify counterparty VASP status before sharing originator/beneficiary data?
- What data elements are mandatory vs optional under Travel Rule for originator and beneficiary (name, account number, wallet address, transaction ID, etc.)?
- How does POPIA s72 cross-border transfer restrict Travel Rule data sharing with foreign VASPs?
- What is the record retention period for Travel Rule transaction records?
- How does the NeoBank handle transfers to non-compliant VASPs that cannot receive Travel Rule data?
- What happens when Travel Rule data is incomplete or missing at the beneficiary VASP?
- How does Travel Rule interact with the immutable event-sourced ledger design?
- What are the penalties for Travel Rule non-compliance under SA law?

---

## 4. Concerns

- No Travel Rule threshold determination for SA context exists in current prompts.
- No secure messaging protocol specification exists in MP-BI05 or MP-BF12.
- No counterparty VASP verification workflow is documented.
- POPIA s72 cross-border data sharing restrictions are not addressed in Travel Rule prompts.
- No handling procedure for non-compliant or non-responsive counterparty VASPs.
- No Travel Rule record retention schedule is specified.
- No failed-transfer remediation workflow (incomplete Travel Rule data at beneficiary).
- No integration with the NeoBank's MPC key management (MP-BF14) for Travel Rule signing authorization.
- No Travel Rule audit trail linked to FICA STR reporting (STR adjacency).
- No CARF reporting fields alignment with Travel Rule data collection.

---

## 5. Suggested Improvements

- Add Travel Rule threshold determination for SA context (FATF default USD/EUR 1,000 or SARB-specific) to MP-BI05.
- Add secure messaging protocol specification (IVMS101 data elements, TRP or custom API) to MP-BF12.
- Add counterparty VASP verification workflow (registry check, VASP status confirmation, secure channel establishment) to MP-BI05.
- Add POPIA s72 cross-border transfer controls for Travel Rule data sharing to MP-BF12.
- Add non-compliant VASP handling procedure (block transfer, require additional CDD, escalate to compliance) to MP-BI05.
- Add Travel Rule record retention schedule aligned with FICA 5 years and CARF reporting to MP-BI05.
- Add failed-transfer remediation workflow for incomplete Travel Rule data to MP-BF12.
- Add Travel Rule signing authorization integration with MPC key management (MP-BF14) to MP-BF12.
- Add Travel Rule audit trail linked to FICA STR reporting to MP-BI05.
- Add CARF reporting fields alignment with Travel Rule data (originator/beneficiary data overlaps with CARF user identification) to MP-BF13 cross-reference.
- Add Travel Rule data elements schema (mandatory vs optional for originator/beneficiary) to MP-BF12.
- Add Travel Rule incident response for data breaches during secure messaging to MP-BI05.
- Reference `02-research/source-library/` Travel Rule sources with `[S#]` citations throughout improved prompts.

---

## 6. Missing Dependencies

- FATF Recommendation 16 and SA implementation guidance (external).
- IVMS101 data element standard (external).
- Travel Rule threshold guidance from SARB/FSCA (external, may not be finalized).
- Counterparty VASP registry or verification service (external).
- Secure messaging protocol implementation (TRP network membership or custom API development).
- External counsel review of Travel Rule interpretation for crypto-asset wallet context.
- NeoBank wallet transaction flow from `06-architecture/platform-design/integrations/` (may need to be requested from C11/C16).
- Travel Rule vendor evaluation criteria (not in repo).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/02-regulatory-framework/payments-nps.md` and `02-research/synthesis/cross-cutting/regulation/` for Travel Rule content.
2. Read `02-research/source-library/INDEX.md` and `BIBLIOGRAPHY.md` for Travel Rule sources; note `[S#]` references.
3. Read `06-architecture/platform-design/integrations/` to map NeoBank wallet transfer flows where Travel Rule applies.
4. Read MP-BI05 and MP-BF12 current prompt text from the master prompt registry.
5. Identify gaps between Travel Rule research and current prompt content (thresholds, messaging protocol, VASP verification, POPIA s72, retention, remediation).
6. Draft improved MP-BI05 Travel Rule Operational Protocol with originator/beneficiary data, threshold rules, counterparty VASP verification, secure messaging, record retention, POPIA minimization, cross-border controls, FICA readiness, CARF fields.
7. Draft improved MP-BF12 Travel Rule Service with data map, workflow, vendor evaluation criteria, security controls, legal memo, test fixtures.
8. Add Travel Rule data elements schema (mandatory vs optional) to MP-BF12.
9. Add secure messaging protocol specification to MP-BF12.
10. Add counterparty VASP verification workflow to MP-BI05.
11. Add POPIA s72 cross-border controls to MP-BF12.
12. Add non-compliant VASP handling procedure to MP-BI05.
13. Add Travel Rule record retention schedule to MP-BI05.
14. Add failed-transfer remediation workflow to MP-BF12.
15. Add Travel Rule signing authorization integration with MPC (MP-BF14) to MP-BF12.
16. Add Travel Rule audit trail linked to FICA STR to MP-BI05.
17. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/legal/travel-rule-prompts.md`.
18. Run validation checklist (§9 below).
19. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Travel Rule data schema: `{transfer_id, originator_name, originator_account, originator_wallet_address, beneficiary_name, beneficiary_account, beneficiary_wallet_address, transaction_id, amount, currency, timestamp, travel_rule_threshold_met, secure_messaging_channel, counterparty_vasp_verified, poopia_cross_border_approved, retention_until, str_adjacency_flag}`
- Counterparty VASP verification: `{vasp_name, jurisdiction, registry_status, verification_date, verification_method, secure_channel_established, compliance_contact, next_review_due}`
- Travel Rule record retention: `{transfer_id, retention_start, retention_end, legal_basis, poopia_classification, fica_alignment, carf_alignment}`

---

## 9. Validation Checklist

- [ ] All Travel Rule obligations from regulatory research are mapped to specific prompt sections
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Travel Rule threshold determination included
- [ ] Secure messaging protocol specification included
- [ ] Counterparty VASP verification workflow included
- [ ] POPIA s72 cross-border controls included
- [ ] Non-compliant VASP handling procedure included
- [ ] Travel Rule record retention schedule included
- [ ] Failed-transfer remediation workflow included
- [ ] MPC signing authorization integration included
- [ ] Travel Rule audit trail linked to FICA STR included
- [ ] CARF reporting fields alignment included
- [ ] Travel Rule data elements schema (mandatory vs optional) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C01 + C12)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Travel Rule data contains sensitive customer identification and transaction details; must be encrypted end-to-end via secure messaging channel.
- Counterparty VASP verification must use authenticated channels; unverified counterparties create data leakage risk.
- Travel Rule data must not be logged in plaintext (guardrail from MP-BF04: no secrets in logs).
- Secure messaging protocol must use mutual TLS or equivalent; no unencrypted Travel Rule data transmission.
- MPC key management integration must ensure agent-held key prohibition (guardrail from MP-BF04).
- Travel Rule records must be tamper-evident for regulatory examination.
- Cross-border Travel Rule data sharing must comply with POPIA s72 safeguards.
- Access to Travel Rule system must be role-based with audit trail per SESS architecture.

---

## 11. South African Regulatory Considerations

- **FATF Recommendation 16:** Travel Rule for virtual asset transfers; originator and beneficiary information requirement; threshold typically USD/EUR 1,000.
- **FICA Act 38 of 2001:** Travel Rule data overlaps with FICA CDD and transaction monitoring; STR adjacency for suspicious cross-border transfers.
- **POPIA Act 4 of 2013:** Travel Rule originator/beneficiary data is personal information; s72 cross-border transfer controls apply when sharing with foreign VASPs.
- **SARS CARF:** effective 1 March 2026; Travel Rule originator/beneficiary data overlaps with CARF user identification and transaction reporting.
- **CASP obligations:** under FAIS/FSCA framework, crypto asset service providers must implement Travel Rule.
- **Exchange Control Rules:** cross-border crypto-asset transfers may trigger both Travel Rule and SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** enhanced AML/CFT expectations; Travel Rule compliance is part of SA's international obligations.

---

## 12. Compliance Gate

**C01 Legal-Compliance + C12 Cybersecurity-Intel.** Binding compliance veto on any Travel Rule gap. External counsel review required before any Travel Rule-dependent artifact ships. No cross-border crypto-asset transfer processing may launch without C01 + C12 sign-off.

---

## 13. Rollback Plan

- If Travel Rule threshold is unclear: suspend cross-border transfers above conservative threshold (USD 1,000 equivalent), obtain SARB/FSCA guidance, re-activate upon clarification.
- If secure messaging protocol is unavailable: implement manual Travel Rule data exchange (secure email with PGP), automate later, document interim procedure.
- If counterparty VASP verification fails: block transfer to unverified VASP, require enhanced CDD, escalate to compliance.
- If POPIA s72 cross-border transfer is not permitted: restrict Travel Rule data sharing to SA VASPs only, implement data localization for cross-border transfers.
- If Travel Rule data breach occurs during messaging: activate incident response (C12), notify affected parties, preserve evidence, report to regulators as required.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C01-TRAVEL-NEO-004 → C01 Legal-Compliance Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical Travel Rule/security events skip to C01 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/legal/travel-rule-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 Travel Rule outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C12 security overlap, C13 Web3 overlap) and arbitrates per workflow-routing.md R3/R5.
