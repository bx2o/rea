# Master Prompt — SUB-C12-CYBER-NEO-001 (NeoBank Guardrails and MPC Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/security/guardrails-and-mpc-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C12-CYBER-NEO-001  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C12-CYBER-NEO-001 to ingest the NeoBank security architecture data from the Stremiium repo, review and improve the NeoBank guardrails/MPC prompts (MP-BF04 Guardrails Catalogue, MP-BF14 MPC Key Management Policy, MP-BF15 PIN Verification Policy), and produce an improved unconsolidated artifact that converts the research into actionable guardrails and MPC prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (POPIA, FICA, cybersecurity standards).

---

## 2. Assumptions

- The NeoBank security architecture at `06-architecture/platform-design/security/` defines STRIDE threat model, ISO 27001, NIST CSF, IAM, fraud, AML, crypto, IR, POPIA, secure SDLC, vendor risk.
- MP-BF04 (Guardrails Catalogue), MP-BF14 (MPC Key Management Policy), and MP-BF15 (PIN Verification Policy) are the canonical guardrails/MPC prompts requiring improvement; no other guardrails/MPC prompts are in scope for this subagent.
- No agent-held private keys (guardrail from MP-BF04).
- No chat-initiated signing (guardrail from MP-BF04).
- No live payment without approval (guardrail from MP-BF04).
- No secrets in logs or dotfiles (guardrail from MP-BF04).
- No production exposure without Cybersecurity approval (guardrail from MP-BF04).
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What are all the NeoBank guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval)?
- What is the MPC key management architecture (key generation ceremony, shard storage, device binding, recovery, signing thresholds, revocation, incident response, audit logging)?
- What is the PIN verification policy (default-on, opt-out with warning, opt-out logged, opt-out reversible, step-up for high-risk, no dark patterns)?
- What is the enforcement point for each guardrail (API gateway, service layer, client UI, wallet signing service)?
- What is the audit event for each guardrail violation?
- What is the failure response for each guardrail (block, alert, escalate, quarantine)?
- What is the test case for each guardrail?
- How does MPC key shard storage comply with POPIA (if shards contain personal information)?
- How does the MPC key generation ceremony work (distributed key generation, dealer vs dealerless)?
- What are the signing thresholds (m-of-n) for wallet transactions?

---

## 4. Concerns

- No complete guardrails catalogue exists with enforcement points, audit events, failure responses, and test cases for each guardrail.
- No MPC key generation ceremony specification exists.
- No MPC shard storage location and security model is defined.
- No MPC recovery mechanism is specified (social recovery, hardware enclave, backup).
- No MPC signing threshold (m-of-n) is defined.
- No PIN verification policy with opt-out workflow is documented.
- No guardrail test cases exist.
- No guardrail violation audit event schema exists.
- No guardrail escalation path is defined.
- No MPC incident response plan exists (key compromise, shard loss, signing failure).
- No guardrail for unreviewed OpenClaw skill or unvetted MCP tool is specified.
- No guardrail for smart contract deployment audit gate is specified.

---

## 5. Suggested Improvements

- Add guardrails catalogue to MP-BF04 with all guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval).
- Add enforcement point, owner council, audit event, failure response, escalation, test case for each guardrail.
- Add MPC key management policy to MP-BF14 (key generation ceremony, shard storage, device binding, recovery phrases/social recovery where applicable, hardware enclave use, signing thresholds, revocation, incident response, audit logging, prohibition on agent-held keys).
- Add MPC threat model to MP-BF14.
- Add user education copy for MPC to MP-BF14.
- Add support runbook for MPC incidents to MP-BF14.
- Add PIN verification policy to MP-BF15 (default-on for every transfer, opt-out shows security vulnerability warning, opt-out logged, opt-out reversible, high-risk step-up, no dark patterns, POPIA consent/data minimization, FICA/AML risk considerations).
- Add PIN user flow, event schema, compliance memo, security memo, test cases, rollback plan to MP-BF15.
- Add POPIA compliance for MPC shard storage (if shards contain personal information).
- Reference `06-architecture/platform-design/security/` with specific citations.

---

## 6. Missing Dependencies

- MPC library/vendor selection from C13 Web3-Finance.
- HSM/enclave specification from C12 Cybersecurity-Intel.
- Key generation ceremony design from external MPC expert.
- POPIA assessment for MPC shard storage from C01 Legal-Compliance.
- PIN verification hardware/software specification from C11 Dev-Engineering.
- External security audit of MPC implementation (required before mainnet deployment).
- Guardrail enforcement point specification from C11 Dev-Engineering (API gateway, service layer).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `06-architecture/platform-design/security/README.md` for threat model, controls, secure SDLC.
2. Read `06-architecture/platform-design/domain-model/` for key management and wallet data flows.
3. Read `01-program/plan/PLAN.md` for security-related WBS items.
4. Read MP-BF04, MP-BF14, and MP-BF15 current prompt text from the master prompt registry.
5. Identify gaps between security architecture and current prompt content (guardrails catalogue completeness, MPC key management, PIN verification, enforcement points, audit events, test cases, incident response).
6. Draft improved MP-BF04 Guardrails Catalogue with all 16 guardrails, each with trigger, enforcement point, owner council, audit event, failure response, escalation, test case.
7. Draft improved MP-BF14 MPC Key Management Policy with key generation ceremony, shard storage, device binding, recovery, signing thresholds, revocation, incident response, audit logging, prohibition on agent-held keys, threat model, user education copy, support runbook, compliance notes.
8. Draft improved MP-BF15 PIN Verification Policy with default-on, opt-out warning, opt-out logging, opt-out reversal, step-up authentication, no dark patterns, POPIA consent, FICA/AML considerations, user flow, event schema, compliance memo, security memo, test cases, rollback plan.
9. Add POPIA compliance for MPC shard storage.
10. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/security/guardrails-and-mpc-prompts.md`.
11. Run validation checklist (§9 below).
12. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Guardrail: `{guardrail_id, description, trigger, enforcement_point, owner_council, audit_event, failure_response, escalation_path, test_case, status}$
- MPC key management: `{key_generation_ceremony, shard_storage, device_binding, recovery_method, social_recovery, hardware_enclave, signing_threshold, revocation, incident_response, audit_logging, agent_held_keys_prohibited}$
- PIN verification: `{transfer_id, pin_required, pin_verified, opt_out_requested, opt_out_warning_shown, opt_out_logged, opt_out_reversible, step_up_required, high_risk_transfer, poopia_consent}$
- MPC incident: `{incident_id, type (key_compromise/shard_loss/signing_failure), detected_at, response_actions, resolution, post_incident_review}$

---

## 9. Validation Checklist

- [ ] All security architecture sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] All 16 guardrails listed with complete attributes
- [ ] Enforcement point, owner council, audit event, failure response, escalation, test case per guardrail
- [ ] MPC key generation ceremony included
- [ ] MPC shard storage included
- [ ] MPC device binding included
- [ ] MPC recovery mechanism included
- [ ] MPC signing thresholds included
- [ ] MPC revocation included
- [ ] MPC incident response included
- [ ] MPC audit logging included
- [ ] No agent-held private keys prohibition included
- [ ] PIN verification policy with opt-out workflow included
- [ ] PIN opt-out security vulnerability warning included
- [ ] PIN opt-out logging included
- [ ] PIN opt-out reversal included
- [ ] High-risk step-up authentication included
- [ ] No dark patterns included
- [ ] POPIA consent/data minimization included
- [ ] FICA/AML risk considerations included
- [ ] MPC threat model included
- [ ] MPC user education copy included
- [ ] MPC support runbook included
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

- Guardrails catalogue contains security enforcement logic; restrict access to C12, C11, C01 only.
- No MPC private key shards or signing keys in artifacts (guardrail from MP-BF04).
- No credentials or secrets in guardrail or MPC specifications (guardrail from MP-BF04).
- MPC key generation ceremony must be audited and witnessed.
- Shard storage must use encryption and access controls; shards must never be co-located.
- PIN verification must not log PIN values (even hashed).
- Guardrail violations must generate immutable audit events per SESS architecture.
- No production deployment without C12 Cybersecurity approval (guardrail from MP-BF04).
- Unreviewed OpenClaw skills and unvetted MCP tools must be blocked by technical controls, not just policy.

---

## 11. South African Regulatory Considerations

- **POPIA Act 4 of 2013:** MPC shard storage may contain personal information; security safeguards required; s72 cross-border controls if shards stored outside SA.
- **FICA Act 38 of 2001:** wallet transaction monitoring must not be bypassed by guardrail misconfiguration.
- **SARS CARF:** effective 1 March 2026; MPC wallet transaction data feeds CARF reporting.
- **Cybercrimes Act 19 of 2020:** unauthorized key access or signing is criminal; MPC security must be robust.
- **Banks Act 94 of 1990:** PA may have key management and signing security requirements for licensed banks.
- **NPS Act 78 of 1998:** payment signing must meet SARB security standards.
- **CPA 68 of 2008:** PIN opt-out warnings must not be dark patterns; security disclosures must be clear.
- **FATF grey-list exit (Oct 2025):** wallet security must support AML/CFT transaction monitoring.

---

## 12. Compliance Gate

**C12 Cybersecurity-Intel + C01 Legal-Compliance.** Binding compliance veto on any guardrail/MPC gap. No wallet signing service may launch without C12 approval. No MPC key ceremony may proceed without C12 + C01 review.

---

## 13. Rollback Plan

- If guardrail enforcement is bypassed: revert deployment, re-implement enforcement, re-test all guardrails.
- If MPC key ceremony fails: re-run ceremony with new key shares, revoke compromised shares, re-bind devices.
- If MPC shard is compromised: rotate keys, re-generate key shares, re-distribute shards, incident response (C12).
- If PIN verification is misconfigured: enforce default-on PIN, fix opt-out workflow, re-audit all transfers.
- If secrets are found in logs/dotfiles: purge secrets, rotate exposed credentials, implement secret scanning.
- If production deployment occurs without C12 approval: rollback deployment, obtain C12 approval, re-deploy.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C12-CYBER-NEO-001 → C12 Cybersecurity-Intel Captain → C01 Legal-Compliance Captain → C11 Dev-Engineering Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical security/MPC events skip to C12 + C01 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/security/guardrails-and-mpc-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C12 guardrails/MPC outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/POPIA overlap, C13 Web3 MPC overlap, C11 dev-engineering enforcement overlap) and arbitrates per workflow-routing.md R3/R5.
