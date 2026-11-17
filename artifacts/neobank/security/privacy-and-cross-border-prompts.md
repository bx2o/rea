# Master Prompt — SUB-C12-CYBER-NEO-003 (NeoBank Privacy and Cross-Border Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/security/privacy-and-cross-border-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C12-CYBER-NEO-003  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C12-CYBER-NEO-003 to ingest the NeoBank privacy and cross-border security data from the Stremiium repo, review and improve the NeoBank privacy/cross-border prompts (MP-BI02 POPIA DPIA security sections, MP-BI03 POPIA Cross-Border SCCs, MP-BI01 POPIA Data Inventory security sections), and produce an improved unconsolidated artifact that converts the research into actionable privacy and cross-border prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA s72, PAIA, FICA, CARF, Exchange Control, cybersecurity standards).

---

## 2. Assumptions

- The NeoBank security architecture at `06-architecture/platform-design/security/` defines POPIA, secure SDLC, vendor risk, incident response controls.
- MP-BI02 (POPIA DPIA), MP-BI03 (POPIA Cross-Border SCCs), and MP-BI01 (POPIA Data Inventory) are the canonical privacy prompts requiring improvement; security sections of these prompts are in scope for this subagent.
- POPIA s72 governs cross-border transfers of personal information from South Africa.
- PAIA Act 2 of 2000 governs access to public records and information officer duties.
- Cross-border MPC shard storage and cloud model usage trigger POPIA s72.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What personal information does the NeoBank process that may cross South African borders (wallet data, KYC documents, transaction data, MPC shards, agent logs, model prompts, voice data)?
- What is the POPIA s72 mechanism for each cross-border transfer (adequacy assessment, binding corporate rules, standard contractual clauses, consent)?
- Which countries/jurisdictions receive NeoBank personal information (cloud providers, MPC shard hosts, KYC vendors, analytics providers)?
- What is the Information Officer registration status under POPIA s55?
- What is the PAIA manual status and content?
- What are the POPIA breach notification requirements (Information Regulator, data subjects, timing)?
- How does POPIA s71 automated decision-making apply to fraud scoring, transaction monitoring, credit decisions?
- What is the cross-border transfer impact assessment process?
- What are the onward transfer restrictions (downstream recipients must also comply with POPIA-equivalent standards)?
- What are the security measures required for cross-border transfers (encryption, access controls, audit logging)?
- What is the breach notification timeline (72 hours awareness to Information Regulator)?
- How does POPIA interact with FICA record retention (5 years) and CARF reporting?

---

## 4. Concerns

- No cross-border transfer inventory exists (what data leaves SA, to where, under what mechanism).
- No POPIA s72 adequacy assessment or SCCs exist for cross-border transfers.
- No Information Officer registration under POPIA s55 is documented.
- No PAIA manual exists.
- No POPIA breach notification runbook exists.
- No automated decision-making (POPIA s71) safeguards are documented for fraud scoring/transaction monitoring.
- No cross-border transfer impact assessment process exists.
- No onward transfer restrictions are documented.
- No security measures for cross-border transfers are specified (encryption, access controls).
- No POPIA s72 register of transfers exists.
- MPC shard storage outside SA may trigger POPIA s72 without adequate safeguards.
- Cloud model usage may send personal information to non-SA jurisdictions without POPIA clearance.
- No cross-border transfer termination procedure exists.

---

## 5. Suggested Improvements

- Add cross-border transfer inventory to privacy prompts (data types, destination jurisdictions, transfer mechanism, POPIA s72 basis, security measures, retention).
- Add POPIA s72 adequacy assessment framework (adequate jurisdiction, BCRs, SCCs, consent, necessary for contract).
- Add standard contractual clauses framework for inter-CASP cross-border transfers (data exporter, data importer, purpose, categories, safeguards, onward transfer, security measures, breach notification, data subject rights, audit, termination, SA law governing clause).
- Add Information Officer registration (POPIA s55) and PAIA manual content to privacy prompts.
- Add POPIA breach notification runbook (72-hour awareness → Information Regulator → data subjects, content, timing, evidence preservation).
- Add POPIA s71 automated decision-making safeguards (human review, explanation, appeal, override) for fraud scoring, transaction monitoring, credit-like decisions.
- Add cross-border transfer impact assessment process (necessity, proportionality, risks, mitigations, residual risk).
- Add onward transfer restrictions (downstream recipients must comply with POPIA-equivalent standards).
- Add security measures for cross-border transfers (encryption in transit/at rest, access controls, audit logging, key management).
- Add POPIA s72 register of transfers (transfer ID, data types, destination, mechanism, date, status).
- Add MPC shard storage POPIA assessment (shards outside SA require s72 safeguards).
- Add cloud model usage POPIA clearance process (no personal data to cloud without POPIA clearance).
- Add cross-border transfer termination procedure (suspend transfer, migrate data, notify affected parties).
- Reference `06-architecture/platform-design/security/`, `02-research/landscape/02-regulatory-framework/privacy-popia.md` with specific citations.

---

## 6. Missing Dependencies

- POPIA Act 4 of 2013 full text and regulations (external).
- PAIA Act 2 of 2000 manual template (external).
- Information Regulator registration forms and guidance (external).
- Adequacy assessment for recipient jurisdictions (external legal opinion).
- SCC templates adapted for SA POPIA context (external counsel).
- Cloud provider data residency and compliance documentation (external vendors).
- MPC shard storage location list (from C13 Web3-Finance / C11 Dev-Engineering).
- External counsel review of POPIA s72 interpretation.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/security/README.md` for POPIA, secure SDLC, vendor risk controls.
2. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA obligations (8 conditions, s55, s71, s72, breach notification).
3. Read `02-research/landscape/02-regulatory-framework/tax-governance.md` for CARF cross-border implications.
4. Read `01-program/plan/PLAN.md` for privacy-related WBS items.
5. Read MP-BI01, MP-BI02, and MP-BI03 current prompt text from the master prompt registry.
6. Identify gaps between privacy/cross-border research and current prompt content (transfer inventory, s72 mechanism, SCCs, IO registration, PAIA manual, breach notification, s71 ADM, impact assessment, onward transfer, security measures, register of transfers, MPC shard POPIA, cloud model clearance).
7. Draft improved privacy/cross-border prompts with cross-border transfer inventory, POPIA s72 adequacy assessment, SCCs framework, IO registration, PAIA manual, breach notification runbook, s71 ADM safeguards, impact assessment process, onward transfer restrictions, security measures, register of transfers, MPC shard POPIA assessment, cloud model clearance process, termination procedure.
8. Add POPIA breach notification runbook with 72-hour timeline.
9. Add cross-border transfer impact assessment (necessity, proportionality, risks, mitigations, residual risk, approval, review date).
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/security/privacy-and-cross-border-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Cross-border transfer: `{transfer_id, data_types[], destination_jurisdiction, transfer_mechanism, poopia_s72_basis, security_measures[], retention_until, onward_transfer_restrictions, status, last_reviewed}$
- SCC clause: `{clause_id, data_exporter, data_importer, purpose, categories_of_data, safeguards, onward_transfer, security_measures, breach_notification, data_subject_rights, audit_rights, termination, governing_law}$
- Breach notification: `{breach_id, detected_at, detected_by, data_types_affected, data_subjects_count, ir_notified_at, ds_notified_at, containment_actions, resolution, post_incident_review}$
- ADM safeguard: `{decision_id, decision_type, human_reviewer, review_date, explanation_provided, appeal_available, override_available, poopia_s71_compliant}$

---

## 9. Validation Checklist

- [ ] All privacy/cross-border sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Cross-border transfer inventory included
- [ ] POPIA s72 adequacy assessment framework included
- [ ] Standard contractual clauses framework included
- [ ] Information Officer registration (s55) included
- [ ] PAIA manual content included
- [ ] POPIA breach notification runbook included
- [ ] POPIA s71 automated decision-making safeguards included
- [ ] Cross-border transfer impact assessment process included
- [ ] Onward transfer restrictions included
- [ ] Security measures for cross-border transfers included
- [ ] POPIA s72 register of transfers included
- [ ] MPC shard storage POPIA assessment included
- [ ] Cloud model usage POPIA clearance process included
- [ ] Cross-border transfer termination procedure included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C12 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Cross-border transfer inventory contains sensitive data flow information; restrict access to C12, C01 only.
- SCCs contain legal obligations; restrict access to C01, C12, Executive only.
- Breach notification runbook contains incident response procedures; restrict access to C12, C01, C02 only.
- Encryption keys for cross-border transfers must be managed via secrets manager/HSM.
- Cross-border transfer data must be encrypted in transit (TLS 1.3+) and at rest.
- Access to cross-border transfer data must be role-based with audit trail per SESS architecture.
- No transfer mechanism credentials in logs or dotfiles (guardrail from MP-BF04).
- Onward transfer restrictions must be technically enforceable, not just contractual.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** s72 cross-border transfer controls (adequacy, BCRs, SCCs, consent, necessary for contract); s55 Information Officer registration; s71 automated decision-making; s72 register of transfers; breach notification; 8 conditions for lawful processing.
- **PAIA Act 2 of 2000:** information officer duties, access to records, manual requirements.
- **FICA Act 38 of 2001:** cross-border transaction data may trigger SARB FinSurv reporting; FICA records retention 5 years interacts with POPIA minimization.
- **SARS CARF:** effective 1 March 2026; CARF reporting data cross-border implications.
- **Exchange Control Rules:** cross-border data and fund transfers may trigger SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** cross-border AML/CFT data sharing expectations remain high.
- **GDPR (adequacy reference):** if transferring to EU, POPIA s72 adequacy may reference GDPR adequacy findings.

---

## 12. Compliance Gate

**C12 Cybersecurity-Intel + C01 Legal-Compliance.** Binding compliance veto on any privacy/cross-border gap. No cross-border transfer of personal information may proceed without C01 POPIA s72 approval and C12 security review.

---

## 13. Rollback Plan

- If POPIA s72 mechanism is inadequate: suspend cross-border transfers, implement SCCs or BCRs, obtain C01 approval, re-activate.
- If Information Officer is not registered: register with Information Regulator, appoint IO, update all privacy documentation.
- If breach notification is required: activate incident response (C12), notify Information Regulator and data subjects, preserve evidence.
- If automated decision-making lacks safeguards: disable automated decisions, implement human review, update s71 safeguards.
- If MPC shards outside SA lack s72 safeguards: migrate shards to SA-hosted enclaves, implement s72-compliant transfers.
- If cloud model usage sends personal data without POPIA clearance: suspend cloud model usage for personal data, implement data anonymization or local processing.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C12-CYBER-NEO-003 → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical privacy/cross-border events skip to C12 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/security/privacy-and-cross-border-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C12 privacy/cross-border outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C13 Web3 MPC cross-border overlap, C11 dev-engineering data residency overlap) and arbitrates per workflow-routing.md R3/R5.
