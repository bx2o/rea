# Master Prompt — C12-CRYPTO-SECURITY-ENGINEER (Crypto-Security-Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c12-cybersecurity-intel/C12-CRYPTO-SECURITY-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C12-CRYPTO-SECURITY-ENGINEER  
**Council:** C12 C12 Cybersecurity-Intel  
**Gate:** C12 Cybersecurity-Intel + C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C12-CRYPTO-SECURITY-ENGINEER to own cryptographic design, key management, and MPC security for Stremiium wallet and $STM systems.
- Research data to ingest: cryptography, key management, MPC, wallet security.
- Prompts to improve: Cryptographic design, Key management, MPC security, Wallet security, Key rotation, Cipher suites, Crypto auditing.
- Output artifact: `artifacts/stremiium/c12-cybersecurity-intel/C12-CRYPTO-SECURITY-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Cryptographic design is defined.
- Key management is implemented.
- MPC security is defined.
- Wallet security is implemented.

---

## 3. Questions

- What is the cryptographic design?
- How is key management implemented?
- What is the MPC security model?
- How is wallet security implemented?
- How is key rotation handled?

---

## 4. Concerns

- No cryptographic design defined.
- Key management not implemented.
- MPC security not defined.
- Wallet security not implemented.

---

## 5. Suggested Improvements

- Define cryptographic design.
- Implement key management.
- Define MPC security.
- Implement wallet security.
- Manage key rotation.

---

## 6. Missing Dependencies

- cryptography
- key management
- MPC
- C01 legal for CASP/crypto compliance

---

## 7. Step-by-Step Implementation or Research Plan

- 1. Read assigned research data sources and extract obligations tagged [STATUTE]/[REG]/[REG-GUIDE] with [S#] references.
- 2. Read current prompt text for assigned MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ prompts from the master prompt registry.
- 3. Identify gaps between research data and current prompt content.
- 4. Draft improved prompt sections with concrete research citations and [FACT]/[EST]/[UNKNOWN]/[INFER] evidence grades.
- 5. Replace all placeholders/TBD with concrete content.
- 6. Add South African regulatory considerations where relevant (FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM restrictions).
- 7. Compile all improvements into the unconsolidated artifact at the stated output path.
- 8. Run validation checklist (§9 below).
- 9. Hand off to Sparkling Curious (§15 below).

---

## 8. Commands/Configs/Schemas Where Applicable

- No executable commands are produced in Ask Mode. The artifact contains prompt text only.
- Reference schema: {cryptoId, cryptoType, algorithm, keyManagement, mpcModel, walletSecurity, rotation, owner, date}

---

## 9. Validation Checklist

- [ ] Research data sources cited with [S#] references or explicitly marked unverified
- [ ] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] No private keys, credentials, or PII in artifact
- [ ] Artifact path inside Stremiium / Independent-projects workspace

---

## 10. Security Considerations

- Crypto design is highly sensitive; restrict to C12 + C01 + C13.
- No keys in crypto docs.

---

## 11. South African Regulatory Considerations

- FSCA CASP for crypto asset security
- POPIA if crypto processes personal data

---

## 12. Compliance Gate

- C12 Cybersecurity-Intel + C01 Legal-Compliance. Crypto security requires C01 for CASP compliance.

---

## 13. Rollback Plan

- Re-key on compromise.
- Re-design on weaknesses.
- Escalate crypto conflicts to C12 + C01.

---

## 14. Escalation Path

- C12-CRYPTO-SECURITY-ENGINEER → C12 Cybersecurity-Intel Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c12-cybersecurity-intel/C12-CRYPTO-SECURITY-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C12 Cybersecurity-Intel outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
