# Master Prompt — SUB-C13-WEB3-NEO-001 (NeoBank Web3 Wallet and Travel Rule Prompts)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** qwen3.8-omni-flash.  
**Model policy:** LOCKED. Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C13-WEB3-NEO-001  
**Council:** C13 Web3-Finance  
**Gate:** C13 + C01 Legal-Compliance

---

## 1. Summary

This master prompt instructs SUB-C13-WEB3-NEO-001 to ingest the NeoBank Web3/crypto research data from the Stremiium repo, review and improve the NeoBank Web3 wallet/Travel Rule prompts (MP-BF08 Wallet Service Spec Web3 sections, MP-BF12 Travel Rule Service, MP-BI08 CASP Policy), and produce an improved unconsolidated artifact that converts the research into actionable Web3 wallet and Travel Rule prompt content for the Stremiium NeoBank. The output must surface questions, concerns, assumptions, suggested improvements, missing dependencies, compliance blockers, security risks, and rollback requirements, with full South African regulatory awareness (CASP, FSCA, FICA, CARF, Travel Rule, Exchange Control).

---

## 2. Assumptions

- The NeoBank Web3 research at `02-research/landscape/06-institution-deep-dives/za-crypto/` (Luno, VALR) and `03-neobank-digital-competitors/` (crypto/CASP entities) is current as of 2026-10-16.
- The NeoBank wallet service integrates with Polygon/Conditional Tokens and $STM per MP-BF08.
- MP-BF08 (Wallet Service Spec — MPC/crypto sections), MP-BF12 (Travel Rule Service), and MP-BI08 (CASP Policy) are the canonical Web3 wallet/Travel Rule prompts requiring improvement; no other Web3 wallet prompts are in scope for this subagent.
- Agents must never hold private keys (guardrail from MP-BF04/MP-BF08).
- The NeoBank may be a CASP (Crypto Asset Service Provider) under FSCA/FAIS framework.
- CARF reporting effective 1 March 2026 applies to crypto-asset transactions.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved.
- qwen3.8-omni-flash is the only execution model; historical model references are architecture notes only.

---

## 3. Questions

- What is the NeoBank Web3 wallet architecture (MPC key generation, Polygon/Conditional Tokens integration, $STM integration, BLT integration)?
- What is the Travel Rule threshold for crypto-asset transfers in South Africa (FATF default USD/EUR 1,000 or SARB-specific)?
- Which secure messaging protocol should the NeoBank use for Travel Rule information exchange (IVMS101, TRP, or custom API)?
- How does the NeoBank verify counterparty VASP status before sharing originator/beneficiary data?
- What CASP licensing is required under FSCA/FAIS for wallet services?
- How does CARF reporting classify $STM token and BLT token transactions?
- How does Exchange Control Rules affect cross-border crypto-asset transfers?
- What is the oracle/MEV risk for wallet transactions on Polygon?
- How does the NeoBank handle phygital ERC-1155 redemption (if applicable)?
- What are the smart contract audit requirements before mainnet deployment?

---

## 4. Concerns

- No Web3 wallet architecture with MPC key generation is fully specified in current prompts.
- No Travel Rule threshold determination for SA context exists.
- No secure messaging protocol specification exists for Travel Rule.
- No counterparty VASP verification workflow is documented.
- No CASP licensing analysis exists for NeoBank wallet service.
- No CARF classification for $STM/BLT tokens exists.
- No Exchange Control analysis for cross-border crypto transfers exists.
- No oracle/MEV risk analysis exists for Polygon transactions.
- No phygital ERC-1155 redemption specification exists.
- No smart contract audit gate is specified (minimum two independent audits before mainnet).
- No $STM ledger adjacency is specified in wallet service.
- No BLT ledger adjacency is specified.

---

## 5. Suggested Improvements

- Add Web3 wallet architecture to MP-BF08 (MPC key generation, recovery, policy engine, signing service, transaction simulation, address book, allowlists, spending limits, PIN verification, audit logs, incident revocation, Polygon/Conditional Tokens integration, $STM integration).
- Add MPC key management (key generation ceremony, shard storage, device binding, social recovery, hardware enclave, signing thresholds, revocation, audit logging, prohibition on agent-held keys).
- Add Travel Rule threshold determination for SA context to MP-BF12.
- Add secure messaging protocol specification (IVMS101 data elements, TRP or custom API) to MP-BF12.
- Add counterparty VASP verification workflow to MP-BF12 (registry check, VASP status confirmation, secure channel establishment).
- Add CASP licensing analysis to MP-BI08 (service classification, custody boundaries, client asset segregation, AML/CDD, Travel Rule, CARF, disclosures, complaints, record keeping, incident response, licensing status, prohibited activities).
- Add $STM and BLT token CARF classification memo to MP-BI06/MP-BF13 cross-reference.
- Add Exchange Control analysis for cross-border crypto-asset transfers to MP-BF12.
- Add oracle/MEV risk analysis for Polygon wallet transactions to MP-BF08.
- Add phygital ERC-1155 redemption specification (if applicable) to MP-BF08.
- Add smart contract audit gate (minimum two independent audits before mainnet deployment) to MP-BF08.
- Add $STM ledger adjacency to MP-BF09 cross-reference.
- Add BLT ledger adjacency to MP-BF09 cross-reference.
- Reference `02-research/landscape/06-institution-deep-dives/za-crypto/` with specific `[S#]` citations.

---

## 6. Missing Dependencies

- CASP licensing guidance from FSCA (external).
- Travel Rule threshold guidance from SARB/FSCA (external, may not be finalized).
- IVMS101 data element standard (external).
- Counterparty VASP registry or verification service (external).
- Polygon network documentation and testnet access (external).
- MPC library/vendor selection (from C12 Cybersecurity-Intel / C11 Dev-Engineering).
- Smart contract audit firms (minimum two independent audits, external).
- $STM token contract address and specification (from C13 Web3-Finance).
- BLT token contract specification (from C13 Web3-Finance / C15 Product).

---

## 7. Step-by-Step Implementation or Research Plan

1. Read `02-research/landscape/06-institution-deep-dives/za-crypto/` for Luno, VALR crypto CASP research.
2. Read `02-research/landscape/03-neobank-digital-competitors/` for crypto/CASP entity research.
3. Read `02-research/landscape/02-regulatory-framework/` for CASP, FICA, CARF, Exchange Control content.
4. Read `06-architecture/platform-design/domain-model/` for $STM/BLT ledger adjacency.
5. Read `01-program/plan/PLAN.md` for Web3-related WBS items.
6. Read MP-BF08, MP-BF12, and MP-BI08 current prompt text from the master prompt registry.
7. Identify gaps between Web3/crypto research and current prompt content (wallet architecture, MPC, Travel Rule threshold, messaging protocol, VASP verification, CASP licensing, CARF classification, Exchange Control, oracle/MEV risk, phygital ERC-1155, audit gate, $STM/BLT ledger adjacency).
8. Draft improved MP-BF08 Wallet Service Spec with Web3 sections (MPC, Polygon/$STM integration, signing service isolation, oracle/MEV risk, phygital ERC-1155, audit gate).
9. Draft improved MP-BF12 Travel Rule Service with threshold, messaging protocol, VASP verification, Exchange Control analysis.
10. Draft improved MP-BI08 CASP Policy with service classification, custody boundaries, client asset segregation.
11. Add $STM/BLT CARF classification and ledger adjacency cross-references.
12. Compile all improvements into the unconsolidated artifact at `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md`.
13. Run validation checklist (§9 below).
14. Hand off to Sparkling Curious (§14 below).

---

## 8. Commands/Configs/Schemas Where Applicable

No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:

- Web3 wallet: `{wallet_id, customer_id, mpc_status, polygon_address, stm_balance, blt_balance, pin_verified, spending_limits, allowlists[], audit_logs[], incident_revoked}$
- MPC key management: `{key_id, generation_ceremony, shard_storage[], device_binding, signing_threshold, revocation_status, audit_log_ref, agent_held_keys_prohibited}$
- Travel Rule transfer: `{transfer_id, originator_vasp, beneficiary_vasp, originator_data, beneficiary_data, amount, asset, threshold_met, secure_messaging_channel, counterparty_vasp_verified, exchange_control_flag}$
- CASP policy entry: `{activity, custody_boundary, client_asset_segregation, aml_cdd, travel_rule, carf, disclosures, complaints, record_keeping, incident_response, licensing_status, prohibited}$

---

## 9. Validation Checklist

- [ ] All Web3/crypto research sources referenced
- [ ] Every research claim carries `[S#]` reference or is explicitly marked unverified
- [ ] Evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` preserved throughout
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] Web3 wallet architecture with MPC included
- [ ] Polygon/Conditional Tokens integration included
- [ ] $STM integration included
- [ ] MPC key management included (no agent-held keys)
- [ ] Travel Rule threshold determination included
- [ ] Secure messaging protocol specification included
- [ ] Counterparty VASP verification workflow included
- [ ] CASP licensing analysis included
- [ ] $STM/BLT CARF classification included
- [ ] Exchange Control analysis for cross-border crypto included
- [ ] Oracle/MEV risk analysis included
- [ ] Phygital ERC-1155 redemption specification included
- [ ] Smart contract audit gate (two independent audits) included
- [ ] $STM/BLT ledger adjacency included
- [ ] No placeholders or "TBD" in any section
- [ ] No private keys, credentials, or PII in artifact
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (C13 + C01)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described

---

## 10. Security Considerations

- Web3 wallet architecture contains key management design; restrict access to C13, C12, C11 only.
- No MPC private key shards or signing keys in artifacts (guardrail from MP-BF04).
- No wallet credentials or mnemonics in artifacts (guardrail from MP-BF04).
- MPC key generation ceremony must be audited and witnessed.
- Smart contracts must not be deployed to mainnet without minimum two independent audits.
- Signing service must be isolated (HSM/enclave); agents must never hold private keys.
- Travel Rule data must be encrypted end-to-end via secure messaging channel.
- Counterparty VASP verification must use authenticated channels.
- Oracle/MEV risks must be mitigated (oracle deviation thresholds, MEV protection).
- No Web3 secrets in logs or dotfiles (guardrail from MP-BF04).

---

## 11. South African Regulatory Considerations

- **CASP (Crypto Asset Service Provider):** under FSCA/FAIS framework; wallet services may require CASP licensing; no claims of licensure unless verified.
- **FSCA:** crypto asset service provider regulation; financial product classification; fit-and-proper requirements.
- **FICA Act 38 of 2001:** crypto asset transactions are accountable institution activities; CDD, STR reporting, record retention.
- **SARS CARF:** effective 1 March 2026; crypto-asset and e-money reporting; RCASP status.
- **Travel Rule:** FATF Recommendation 16; originator/beneficiary data for crypto-asset transfers.
- **Exchange Control Rules:** SARB FinSurv oversight of cross-border crypto-asset transfers; ADLA for forex.
- **Companies Act 71 of 2008:** corporate capacity for token issuance ($STM, BLT).
- **CPA 68 of 2008:** no misleading claims about crypto assets; capital at risk disclosures.
- **FATF grey-list exit (Oct 2025):** enhanced AML/CFT expectations for crypto asset services.

---

## 12. Compliance Gate

**C13 Web3-Finance + C01 Legal-Compliance.** Binding compliance veto on any Web3 wallet/Travel Rule gap. No mainnet deployment without minimum two independent audits. No CASP-licensable activity without C01 + C13 sign-off.

---

## 13. Rollback Plan

- If CASP licensing is required but not obtained: suspend crypto asset services, operate in fiat-only mode, apply for CASP licence.
- If Travel Rule threshold is unclear: suspend cross-border crypto transfers above conservative threshold, obtain SARB/FSCA guidance.
- If VASP verification fails: block transfer to unverified VASP, require enhanced CDD, escalate to compliance.
- If smart contract audit is incomplete: delay mainnet deployment, complete two independent audits, remediate findings.
- If MPC key compromise is suspected: rotate keys, re-run key generation ceremony, revoke compromised shares.
- If Exchange Control violation is suspected: suspend cross-border crypto transfers, obtain SARB guidance.
- All rollback actions logged in event-sourced ledger per SESS architecture.

---

## 14. Escalation Path

**SUB-C13-WEB3-NEO-001 → C13 Web3-Finance Captain → C01 Legal-Compliance Captain → C12 Cybersecurity-Intel Captain → Sparkling Curious → Mychael (CEO) → Board.** Critical Web3/security events skip to C13 + C01 + C12 + SC immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

The completed artifact at `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C13 Web3 wallet/Travel Rule outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution. Sparkling Curious monitors for cross-council conflicts (C01 legal/CASP overlap, C12 security/MPC overlap, C10 finance/CARF overlap) and arbitrates per workflow-routing.md R3/R5.
