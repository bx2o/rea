# Master Prompt — SUB-C14-CS-NEO-001 (NeoBank Dispute and Support Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/customer-success/dispute-and-support-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C14-CS-NEO-001  
**Council:** C14 Customer-Success  
**Gate:** C14 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C14-CS-NEO-001 to ingest the NeoBank customer success, dispute, and support research data from the Stremiium repo, review and improve the NeoBank dispute/support prompts (MP-BF17 Dispute and Chargeback Workflow, MP-BF02 Knowledge Base support macros), and produce an improved unconsolidated artifact that converts the research into actionable dispute and support prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CPA, POPIA, NFO, FAIS, FICA).

---

## 2. Assumptions

- The NeoBank customer success charter at `01-program/councils/c14-customer-success/CHARTER.md` defines the CS mandate for the NeoBank program.
- MP-BF17 (Dispute and Chargeback Workflow) is the canonical dispute workflow prompt requiring improvement; no other dispute workflow prompts are in scope for this subagent.
- MP-BF02 Knowledge Base support macros are adjacent content for customer support.
- The NFO (National Financial Ombud Scheme) is the relevant ombud for financial services disputes in South Africa.
- POPIA s71-style safeguards apply to automated decision explanations in dispute handling.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank dispute intake process (user dispute entry, evidence upload, transaction context)?
- What are the dispute resolution timelines and SLA targets (C14 SLA: support 2-4 hours by severity)?
- How does the NFO dispute resolution process work for South African financial services?
- What evidence is required for different dispute types (unauthorized transaction, billing error, failed payment, wallet issue)?
- How does POPIA redaction apply to dispute evidence (customer personal information in dispute records)?
- What is the chargeback process for card transactions (if applicable)?
- How are fraud indicators identified in dispute cases (STR adjacency, FICA)?
- What is the human review workflow for disputes (reviewer, escalation, deadline tracking)?
- How are dispute outcomes explained to users (automated decision explanation per POPIA s71-style safeguards)?
- What is the appeal process for dispute outcomes?
- What customer support macros are needed for common dispute scenarios?
- What is the audit log requirement for dispute handling?

---

## 4. Concerns

- No NeoBank dispute intake workflow is defined in current prompts.
- No dispute resolution timelines or SLA targets exist.
- No NFO dispute resolution process integration is documented.
- No dispute evidence requirements are specified.
- No POPIA redaction rules for dispute evidence exist.
- No chargeback process is documented (if card transactions are supported).
- No fraud indicator identification in dispute cases is specified.
- No human review workflow for disputes is defined.
- No automated decision explanation process exists (POPIA s71-style).
- No appeal process is documented.
- No customer support macros exist for dispute scenarios.
- No dispute audit log schema exists.

---

## 5. Suggested Improvements

- Add dispute workflow to MP-BF17 (user dispute entry, evidence upload, transaction context, fraud indicators, settlement status, chargeback, refund, human review, deadline tracking, outcome explanation, appeal, audit log, POPIA redaction).
- Add UI spec for dispute entry and evidence upload to MP-BF17.
- Add event schema for dispute lifecycle events to MP-BF17.
- Add support macros for common dispute scenarios to MP-BF02 cross-reference.
- Add compliance notes for dispute handling (CPA, NFO, POPIA, FICA STR adjacency).
- Add dispute SLA targets aligned with C14 SLA (2-4 hours by severity).
- Add NFO referral process and deadlines.
- Add POPIA redaction rules for dispute evidence.
- Add automated decision explanation (POPIA s71-style safeguards).
- Add appeal process with deadlines.
- Add fraud indicator identification (STR adjacency) in dispute workflow.
- Add human review queue and escalation path.
- Reference `01-program/councils/c14-customer-success/CHARTER.md`, `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` (NFO), `privacy-popia.md` with specific citations.

---

## 6. Missing Dependencies

- NFO membership and referral process details (external).
- Dispute evidence requirements from C01 Legal-Compliance (regulatory requirements).
- POPIA redaction tools or process from C01/C12.
- Chargeback rules from card scheme (Visa/Mastercard) if card transactions supported (external).
- Customer support platform specification (from C11 Dev-Engineering / C06 Engineering-Infrastructure).
- Fraud detection integration specification from C12 Cybersecurity-Intel.
- External counsel review of dispute workflow (CPA, NFO compliance).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `01-program/councils/c14-customer-success/CHARTER.md` for CS mandate and scope.
2. Read `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md` for NFO and conduct requirements.
3. Read `02-research/landscape/02-regulatory-framework/privacy-popia.md` for POPIA redaction and s71 requirements.
4. Read `01-program/delivery/` for SLA targets and ways of working.
5. Read `06-architecture/platform-design/domain-model/` for dispute store schema context.
6. Read MP-BF17 current prompt text from the master prompt registry.
7. Read MP-BF02 Knowledge Base support macros section for adjacency.
8. Identify gaps between dispute/support research and current prompt content (intake workflow, SLAs, NFO integration, evidence requirements, POPIA redaction, chargeback, fraud indicators, human review, decision explanation, appeal, support macros, audit log).
9. Draft improved MP-BF17 Dispute and Chargeback Workflow with dispute lifecycle, UI spec, event schema, compliance notes, SLA targets, NFO referral, POPIA redaction, decision explanation, appeal process, fraud indicators, human review.
10. Add support macros to MP-BF02 cross-reference.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/customer-success/dispute-and-support-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Dispute case: `{dispute_id, customer_id, transaction_ref, dispute_type, evidence_uploaded, evidence_refs[], fraud_indicators[], settlement_status, chargeback_applicable, human_review_required, reviewer, deadline, outcome, outcome_explanation, appeal_deadline, audit_log_ref, poopia_redacted}$
- Dispute event: `{event_id, dispute_id, event_type, actor, timestamp, details, audit_ref}$
- Support macro: `{macro_id, scenario, response_template, poopia_redaction_required, fica_str_adjacency, nfo_referral_applicable, approval_required}$

---

## 9. Validation Checklist

- [ ] All customer success/dispute research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Dispute intake workflow included
- [ ] Dispute resolution timelines and SLA targets included
- [ ] NFO dispute resolution process included
- [ ] Dispute evidence requirements included
- [ ] POPIA redaction rules for dispute evidence included
- [ ] Chargeback process included (if applicable)
- [ ] Fraud indicator identification in disputes included
- [ ] Human review workflow included
- [ ] Automated decision explanation (POPIA s71-style) included
- [ ] Appeal process included
- [ ] Customer support macros included
- [ ] Dispute audit log schema included
- [ ] Compliance notes (CPA, NFO, POPIA, FICA) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C14 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Dispute records contain sensitive customer information and transaction details; restrict access to C14, C01, C12 only.
- Dispute evidence may contain POPIA personal information; apply redaction rules before sharing.
- STR adjacency data (fraud indicators in disputes) must be segregated; tipping-off prevention required.
- Dispute audit logs must be tamper-evident and append-only per SESS architecture.
- No customer credentials or authentication data in dispute records.
- Support macros must not contain security-sensitive information.
- Human review access must be role-based with audit trail.

---

## 11. South African Regulatory Considerations

- **CPA 68 of 2008:** consumer dispute rights, complaint handling, fair resolution, no unfair terms.
- **NFO (National Financial Ombud Scheme):** mandatory membership for financial services providers; dispute resolution; referral process.
- **POPIA Act 4 of 2013:** dispute records contain personal information; s72 cross-border if evidence shared outside SA; s71-style safeguards for automated decision explanations; redaction requirements.
- **FICA Act 38 of 2001:** fraud indicators in disputes may trigger STR reporting; STR adjacency; tipping-off prevention.
- **FAIS Act 37 of 2002:** financial services dispute handling; appropriate disclosures and explanations.
- **Consumer Protection Act:** complaint resolution timelines, escalation to ombud.
- **Electronic Communications and Transactions Act 25 of 2002:** electronic dispute records validity.
- **FATF grey-list exit (Oct 2025):** dispute-related STR reporting must maintain AML/CFT rigour.

---

## 12. Compliance Gate

**C14 Customer-Success + C01 Legal-Compliance.** Binding compliance veto on any dispute/support gap affecting CPA, POPIA, NFO, or FICA compliance. NFO referral requires C01 review. STR adjacency decisions require C01 review.

---

## 13. Rollback Plan

- If dispute workflow is found non-compliant: suspend automated dispute processing, route to manual review, obtain C01 review, re-implement.
- If POPIA redaction is inadequate: unpublish dispute evidence, implement redaction, notify affected customers if breach.
- If NFO referral process is incorrect: suspend NFO referrals, obtain NFO guidance, re-implement with correct process.
- If fraud indicator identification creates tipping-off risk: suspend STR filing from disputes, obtain C01 guidance.
- If automated decision explanation is inadequate: disable automated decisions, implement human review and explanation.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C14-CS-NEO-001 → C14 Customer-Success Captain → C01 Legal-Compliance Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical dispute/security events skip to C14 + C01 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/customer-success/dispute-and-support-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C14 dispute/support outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C12 security/fraud overlap, C15 product roadmap overlap) and arbitrates per workflow-routing.md R3/R5.
