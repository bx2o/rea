# Master Prompt — SUB-C11-DEV-NEO-002 (NeoBank Database and Wallet Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C11-DEV-NEO-002  
**Council:** C11 Dev-Engineering  
**Gate:** C11 + C13 Web3-Finance

---

## 1. Summary

This master prompt instructs SUB-C11-DEV-NEO-002 to ingest the NeoBank database and wallet architecture data from the Stremiium repo, review and improve the NeoBank database/wallet prompts (MP-BF03 Database Schema Pack, MP-BF08 Wallet Service Spec), and produce an improved unconsolidated artifact that converts the research into actionable database/wallet prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, FICA, CARF, MPC key management, no agent-held private keys).

---

## 2. Assumptions

- The NeoBank database design at `06-architecture/platform-design/data/` defines data model, governance, analytics/regulatory reporting, AI/ML.
- The NeoBank domain model at `06-architecture/platform-design/domain-model/` defines double-entry ledger, money & currency, customer data store, KYC/CDD data store, transaction monitoring store, payment instruction store, settlement store, dispute store, consent store, CARF reporting store, analytics warehouse, cache layer, archival layer.
- MP-BF03 (Database Schema Pack) and MP-BF08 (Wallet Service Spec) are the canonical database/wallet prompts requiring improvement; no other database/wallet prompts are in scope for this subagent.
- MPC key generation and management per MP-BF14 (no agent-held private keys).
- Wallet service integrates with Polygon/Conditional Tokens and $STM per MP-BF08.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank relational ledger schema (double-entry, chart of accounts, transaction immutability)?
- What is the event-sourced audit ledger schema (append-only events, deterministic fold, snapshot cadence)?
- What is the customer data store schema (POPIA classification, consent, retention)?
- What is the KYC/CDD data store schema (FICA requirements, beneficial ownership, document storage)?
- What is the transaction monitoring store schema (FICA STR/CTR/TPR, alerts, case management)?
- What is the payment instruction store schema (idempotency, payment rail, settlement status)?
- What is the settlement store schema (settlement finality, reconciliation, exception handling)?
- What is the dispute store schema (dispute lifecycle, evidence, outcome, appeal)?
- What is the consent store schema (POPIA consent, withdrawal, record of processing)?
- What is the CARF reporting store schema (CARF fields, RCASP status, reporting period, retention)?
- What is the MPC key management architecture (key generation ceremony, shard storage, device binding, recovery, signing thresholds, revocation)?
- How is wallet signing isolated (signing service isolation, HSM/enclave, no agent-held keys)?

---

## 4. Concerns

- No relational ledger schema is defined in current prompts.
- No event-sourced audit ledger schema exists.
- No POPIA data classification exists for customer data store.
- No KYC/CDD data store schema with FICA fields exists.
- No transaction monitoring store schema exists.
- No payment instruction store schema exists.
- No settlement store schema exists.
- No dispute store schema exists.
- No consent store schema with POPIA consent fields exists.
- No CARF reporting store schema exists.
- No MPC key management architecture is documented.
- No wallet signing isolation specification exists.
- No cache layer or archival layer schema exists.
- No analytics warehouse schema exists.

---

## 5. Suggested Improvements

- Add database schema pack to MP-BF03 with all schemas (relational ledger, event-sourced audit ledger, customer data store, KYC/CDD data store, transaction monitoring store, payment instruction store, settlement store, dispute store, consent store, CARF reporting store, analytics warehouse, cache layer, archival layer).
- Add schema purpose, owner, sensitivity, POPIA classification, FICA/CARF relevance, security controls, test plan, rollback for each schema.
- Add MPC key management architecture to MP-BF08 (key generation ceremony, shard storage, device binding, recovery phrases/social recovery, hardware enclave use, signing thresholds, revocation, incident response, audit logging, prohibition on agent-held keys).
- Add wallet service architecture to MP-BF08 (wallet creation, balance, transactions, send/receive, PIN verification, address book, allowlists, spending limits, audit logs, incident revocation, Polygon/Conditional Tokens integration, $STM integration).
- Add POPIA classification per data store (personal information, special personal information, financial data).
- Add FICA/CARF relevance per data store.
- Add security controls per data store (encryption at rest, encryption in transit, access control, audit logging).
- Add test plan per schema.
- Add rollback plan per schema.
- Add data retention schedule per store (FICA 5 years, CARF, POPIA minimization).
- Add cross-border transfer controls for data stores (POPIA s72).
- Reference `06-architecture/platform-design/data/`, `domain-model/` with specific citations.

---

## 6. Missing Dependencies

- Database technology selection (PostgreSQL, event store, or alternative) from C06/C11.
- MPC library/vendor selection from C13 Web3-Finance / C12 Cybersecurity-Intel.
- HSM/enclave specification from C12 Cybersecurity-Intel.
- POPIA data classification guidance from C01 Legal-Compliance.
- FICA/KYC data field requirements from C01 Legal-Compliance.
- CARF reporting field specification from SARS (external).
- Encryption key management specification from C12 Cybersecurity-Intel.
- Backup and archival storage specification from C06 Engineering-Infrastructure.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/data/README.md` for data model, governance, analytics, regulatory reporting.
2. Read `06-architecture/platform-design/domain-model/README.md` for data stores (customer, KYC/CDD, transaction monitoring, payment instruction, settlement, dispute, consent, CARF, analytics, cache, archival).
3. Read `01-program/plan/PLAN.md` for database/wallet-related WBS items.
4. Read MP-BF03 and MP-BF08 current prompt text from the master prompt registry.
5. Identify gaps between database/wallet architecture and current prompt content (all schemas, POPIA classification, FICA/CARF relevance, security controls, MPC key management, wallet signing isolation, retention, cross-border controls).
6. Draft improved MP-BF03 Database Schema Pack with all schemas and their attributes.
7. Draft improved MP-BF08 Wallet Service Spec with MPC key management, wallet operations, Polygon/$STM integration, signing service isolation.
8. Add POPIA classification, FICA/CARF relevance, security controls, test plan, rollback per schema.
9. Add MPC key management architecture (no agent-held keys).
10. Add wallet signing isolation specification.
11. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md`.
12. Run validation checklist (§9 below).
13. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Data store definition: `{store_name, purpose, owner, sensitivity, poopia_classification, fica_carf_relevant, security_controls[], test_plan, rollback, retention_schedule, cross_border_controls}$
- MPC key management: `{key_generation_ceremony, shard_storage, device_binding, recovery_method, signing_threshold, revocation, incident_response, audit_logging, agent_held_keys_prohibited}$
- Wallet operation: `{operation_type, mpc_signing_required, pin_verification_required, risk_check_required, audit_logged, approval_required}$
- Consent record: `{consent_id, customer_id, purpose, legal_basis, granted_at, withdrawn_at, poopia_section, retention_until}$

---

## 9. Validation Checklist

- [ ] All database/wallet architecture sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Relational ledger schema included
- [ ] Event-sourced audit ledger schema included
- [ ] Customer data store schema included
- [ ] KYC/CDD data store schema included
- [ ] Transaction monitoring store schema included
- [ ] Payment instruction store schema included
- [ ] Settlement store schema included
- [ ] Dispute store schema included
- [ ] Consent store schema included
- [ ] CARF reporting store schema included
- [ ] Analytics warehouse, cache, archival layer schemas included
- [ ] POPIA classification per store included
- [ ] FICA/CARF relevance per store included
- [ ] Security controls per store included
- [ ] Test plan per schema included
- [ ] Rollback plan per schema included
- [ ] MPC key management architecture included
- [ ] No agent-held private keys prohibition included
- [ ] Wallet signing isolation specification included
- [ ] Polygon/Conditional Tokens and $STM integration included
- [ ] Data retention schedule included
- [ ] Cross-border transfer controls (POPIA s72) included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C11 + C13)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Database schemas contain sensitive data structure information; restrict access to C11, C12, C13, C01 only.
- No credentials, encryption keys, or secrets in database schema artifacts (guardrail from MP-BF04).
- MPC shards must never be stored in plaintext or in application logs.
- Wallet signing service must be isolated (HSM/enclave); agents must never hold private keys.
- Customer data must be encrypted at rest and in transit (POPIA security safeguards).
- Access to data stores must be role-based with audit trail per SESS architecture.
- CARF reporting store contains tax-sensitive data; access restricted to C01/C10/C12.
- KYC/CDD store contains identity documents; heightened POPIA protection required.
- Backup encryption keys must be managed via secrets manager/HSM.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** all data stores processing personal information require POPIA classification, security safeguards, retention limits, s72 cross-border controls.
- **FICA Act 38 of 2001:** KYC/CDD store and transaction monitoring store support FICA obligations; 5-year record retention.
- **SARS CARF:** effective 1 March 2026; CARF reporting store supports tax reporting.
- **Banks Act 94 of 1990:** PA may have data security and audit requirements for licensed banks.
- **NPS Act 78 of 1998:** payment instruction and settlement stores support payment system requirements.
- **Exchange Control Rules:** cross-border payment data may trigger SARB FinSurv reporting.
- **CPA 68 of 2008:** customer data used in disputes must be accurate and accessible.
- **Cybercrimes Act 19 of 2020:** unauthorized database access is criminal; access controls must be robust.
- **FATF grey-list exit (Oct 2025):** transaction monitoring store must support AML/CFT reporting.

---

## 12. Compliance Gate

**C11 Dev-Engineering + C13 Web3-Finance.** Binding compliance veto on any database/wallet gap affecting security or key management. C01 Legal-Compliance review required for POPIA data classification. C12 Cybersecurity-Intel review required for MPC key management and wallet signing isolation.

---

## 13. Rollback Plan

- If database schema is found incorrect: revert to previous schema version, migrate data, re-run test plan.
- If MPC key management is compromised: rotate keys, re-run key generation ceremony, re-bind devices, forensic review.
- If wallet signing isolation is breached: suspend wallet operations, rotate signing keys, re-validate isolation.
- If POPIA classification is wrong: re-classify data store, update security controls and retention, re-run compliance gate.
- If encryption keys are exposed: rotate keys, re-encrypt data, purge exposed keys from all systems.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C11-DEV-NEO-002 → C11 Dev-Engineering Captain → C13 Web3-Finance Captain → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical database/wallet/key events skip to C11 + C13 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C11 database/wallet outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C13 Web3 overlap, C12 security overlap, C01 POPIA overlap) and arbitrates per workflow-routing.md R3/R5.
