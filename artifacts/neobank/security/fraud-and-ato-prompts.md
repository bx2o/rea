# Master Prompt — SUB-C12-CYBER-NEO-002 (NeoBank Fraud and ATO Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/security/fraud-and-ato-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C12-CYBER-NEO-002  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C12-CYBER-NEO-002 to ingest the NeoBank fraud and security architecture data from the Stremiium repo, review and improve the NeoBank fraud/ATO prompts (MP-BF16 Fraud and Account Takeover Controls, MP-BE16 Trading Kill Switch adjacency), and produce an improved unconsolidated artifact that converts the research into actionable fraud and ATO prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (FICA, POPIA, STR adjacency, cybersecurity standards).

---

## 2. Assumptions

- The NeoBank security architecture at `06-architecture/platform-design/security/` defines fraud, AML, incident response, secure SDLC controls.
- MP-BF16 (Fraud and Account Takeover Controls) is the canonical fraud/ATO prompt requiring improvement; MP-BE16 (Trading Kill Switch) is adjacency context; no other fraud/ATO prompts are in scope for this subagent.
- Device fingerprinting must be lawful under POPIA.
- New payee cooling period, high-value transfer step-up, PIN verification, velocity limits are standard fraud controls.
- STR adjacency: fraud indicators may trigger FICA suspicious transaction reporting.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What fraud controls are required for NeoBank (device fingerprinting, anomalous login detection, new payee cooling period, high-value transfer step-up, PIN verification, velocity limits, social engineering indicators, wallet drainer link detection, phishing simulation, incident freeze, customer notification)?
- What is the device fingerprinting approach that complies with POPIA (lawful basis, data minimization, consent)?
- What are the velocity limits (transfers per day, amount per day, frequency thresholds)?
- What constitutes a high-value transfer requiring step-up authentication (threshold, currency, frequency)?
- What is the new payee cooling period (duration, conditions, exceptions)?
- How are social engineering indicators detected (unusual timing, unusual recipient, remote access indicators, pressure tactics)?
- How are wallet drainer links detected (known malicious addresses, phishing site detection, SIM swap indicators)?
- What is the incident freeze procedure (who can initiate, scope, duration, customer notification)?
- What is the customer notification process for fraud events (timing, channel, content, POPIA breach notification)?
- How does fraud detection integrate with FICA STR filing (STR adjacency, tipping-off prevention)?
- What are the alert rules and severity levels for fraud events?
- What are the test cases for fraud controls?

---

## 4. Concerns

- No fraud control matrix exists with alert rules, user comms, support runbook, and test cases.
- No device fingerprinting POPIA compliance assessment exists.
- No velocity limits are defined.
- No high-value transfer step-up threshold is defined.
- No new payee cooling period is specified.
- No social engineering indicator detection approach is documented.
- No wallet drainer link detection is specified.
- No incident freeze procedure is defined.
- No customer notification process for fraud events is documented.
- No STR adjacency workflow is specified (when fraud indicators trigger FICA STR).
- No tipping-off prevention is documented for fraud investigations.
- No phishing simulation program is specified.
- No fraud/ATO audit log schema exists.

---

## 5. Suggested Improvements

- Add fraud/ATO control matrix to MP-BF16 with all controls (device fingerprinting where lawful, anomalous login detection, new payee cooling period, high-value transfer step-up, PIN verification, velocity limits, social engineering indicators, wallet drainer link detection, phishing simulation, incident freeze, customer notification, STR adjacency, audit logs).
- Add control matrix columns: control, trigger, enforcement point, alert severity, owner council, test case.
- Add alert rules for fraud events (severity levels: low/medium/high/critical).
- Add user communications for fraud events (alert messages, freeze notifications, recovery instructions).
- Add support runbook for fraud/ATO incidents (triage, investigation, resolution, customer communication).
- Add device fingerprinting POPIA compliance section (lawful basis, minimization, consent, retention).
- Add STR adjacency section (fraud indicators → FICA STR evaluation, tipping-off prevention).
- Add incident freeze procedure (initiator, scope, duration, customer notification, reversal).
- Add phishing simulation program (frequency, targets, metrics, remediation).
- Add fraud/ATO audit log schema (tamper-evident, append-only per SESS).
- Add false positive handling (customer appeal, reversal of false blocks).
- Reference `06-architecture/platform-design/security/` with specific citations.

---

## 6. Missing Dependencies

- Device fingerprinting library/vendor selection (POPIA-compliant) from C11 Dev-Engineering.
- Velocity limit thresholds from C10 Finance (risk appetite) and C16 Banking-Fintech.
- High-value transfer threshold from C10 Finance.
- New payee cooling period duration from C01 Legal-Compliance / C14 Customer Success.
- STR filing templates and goAML integration from C01 Legal-Compliance.
- Customer notification templates from C14 Customer Success / C09 Marketing-Communications.
- Phishing simulation platform selection from C12 Cybersecurity-Intel.
- External security review of fraud controls from C12.

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/security/README.md` for fraud, AML, incident response controls.
2. Read `06-architecture/platform-design/domain-model/` for transaction and account data flows.
3. Read `01-program/plan/PLAN.md` for security/fraud-related WBS items.
4. Read MP-BF16 current prompt text from the master prompt registry.
5. Read MP-BE16 Trading Kill Switch for kill-switch adjacency context.
6. Identify gaps between fraud/security architecture and current prompt content (control matrix, device fingerprinting POPIA, velocity limits, step-up thresholds, cooling period, social engineering, drainer detection, incident freeze, customer notification, STR adjacency, tipping-off, phishing simulation, audit logs).
7. Draft improved MP-BF16 Fraud and ATO Controls with control matrix, alert rules, user comms, support runbook, test cases.
8. Add device fingerprinting POPIA compliance section.
9. Add STR adjacency workflow with tipping-off prevention.
10. Add incident freeze procedure.
11. Add customer notification process.
12. Add phishing simulation program.
13. Add false positive handling and appeal process.
14. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/security/fraud-and-ato-prompts.md`.
15. Run validation checklist (§9 below).
16. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Fraud control: `{control_id, name, trigger, enforcement_point, alert_severity, owner_council, test_case, status}$
- Fraud alert: `{alert_id, customer_id, trigger_type, risk_score, severity, detected_at, investigator, disposition, str_filing_required, tipping_off_confirmed}$
- Device fingerprint: `{device_id, customer_id, fingerprint_hash, first_seen, last_seen, lawful_basis, poopia_consent, retention_until}$
- Incident freeze: `{freeze_id, customer_id, initiator, scope, start_at, end_at, reason, customer_notified, reversed_at, reversal_approver}$

---

## 9. Validation Checklist

- [ ] All fraud/security architecture sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Fraud/ATO control matrix included with all controls
- [ ] Device fingerprinting POPIA compliance section included
- [ ] Velocity limits defined
- [ ] High-value transfer step-up threshold defined
- [ ] New payee cooling period specified
- [ ] Social engineering indicator detection included
- [ ] Wallet drainer link detection included
- [ ] Phishing simulation program included
- [ ] Incident freeze procedure included
- [ ] Customer notification process included
- [ ] STR adjacency workflow with tipping-off prevention included
- [ ] Fraud/ATO audit log schema included
- [ ] Alert rules with severity levels included
- [ ] User communications included
- [ ] Support runbook included
- [ ] False positive handling included
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

- Fraud control matrix contains detection logic; restrict access to C12, C01, C14 only.
- Device fingerprint data may be POPIA personal information; minimize data, obtain lawful basis, limit retention.
- STR filing data must be segregated from operational systems; tipping-off prevention requires need-to-know access.
- Incident freeze actions must be audited and reversible only with proper authorization.
- Customer notification must not tip off suspected fraudsters (no disclosure of STR filing or investigation).
- No fraud detection rules or thresholds in application logs (guardrail from MP-BF04).
- Fraud audit logs must be tamper-evident and append-only per SESS architecture.
- Phishing simulation must not use real customer data or credentials.

---

## 11. South African Regulatory Considerations

- **FICA Act 38 of 2001:** fraud indicators may trigger STR reporting; tipping-off prevention (s61); record retention 5 years.
- **POPIA Act 4 of 2013:** device fingerprinting and fraud monitoring are personal information processing; lawful basis, minimization, retention required.
- **CPA 68 of 2008:** customer notification for fraud events must be clear and not misleading.
- **SARS CARF:** effective 1 March 2026; fraud-related transaction data may feed CARF reporting.
- **Cybercrimes Act 19 of 2020:** fraud and ATO are criminal offences; evidence preservation for law enforcement.
- **Exchange Control Rules:** fraud involving cross-border transfers may trigger SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** fraud detection and STR reporting must maintain rigour post-grey-list-exit.
- **Consumer Protection Act:** customers have rights to dispute fraudulent transactions and receive timely notification.

---

## 12. Compliance Gate

**C12 Cybersecurity-Intel + C01 Legal-Compliance.** Binding compliance veto on any fraud/ATO gap. STR adjacency decisions require C01 review. Customer notification for fraud events requires C01 + C14 coordination.

---

## 13. Rollback Plan

- If device fingerprinting POPIA compliance is inadequate: cease fingerprinting, obtain C01 lawful basis assessment, re-implement with consent.
- If velocity limits are too restrictive: adjust thresholds with C10/C16 approval, monitor false positives.
- If STR adjacency workflow creates tipping-off risk: suspend STR filing from fraud alerts, obtain C01 guidance, implement tipping-off controls.
- If incident freeze is misapplied: unfreeze affected accounts, review freeze authorization, retrain staff.
- If customer notification is inadequate: re-notify customers with corrected information, report to regulators if breach.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C12-CYBER-NEO-002 → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → C14 Customer-Success Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical fraud/security events skip to C12 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/security/fraud-and-ato-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C12 fraud/ATO outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/STR overlap, C14 customer success overlap, C10 finance risk overlap) and arbitrates per workflow-routing.md R3/R5.
