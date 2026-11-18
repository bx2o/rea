# Master Prompt — C13-WALLET-ENGINEER (Wallet-Engineer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c13-web3-token/C13-WALLET-ENGINEER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C13-WALLET-ENGINEER  
**Council:** C13 C13 Web3-Token  
**Gate:** C13 Web3-Token + C12 Cybersecurity-Intel

---

## 1. Summary

- This master prompt instructs C13-WALLET-ENGINEER to implement crypto wallet integration, key management, and wallet security for Stremiium Web3 features.
- Research data to ingest: crypto wallets, key management, wallet security, MPC.
- Prompts to improve: Wallet integration, Key management, Wallet security, MPC implementation, Wallet UI, Transaction signing, Wallet backup.
- Output artifact: `artifacts/stremiium/c13-web3-token/C13-WALLET-ENGINEER-prompts.md`.

---

## 2. Assumptions

- Wallet integration is implemented.
- Key management is defined.
- Wallet security is implemented.
- MPC is used for key sharing.

---

## 3. Questions

- How is wallet integration implemented?
- How is key management defined?
- How is wallet security implemented?
- How is MPC implemented?
- How is wallet backup handled?

---

## 4. Concerns

- No wallet integration implemented.
- Key management not defined.
- Wallet security not implemented.
- MPC not implemented.

---

## 5. Suggested Improvements

- Implement wallet integration.
- Define key management.
- Implement wallet security.
- Implement MPC.
- Create wallet backup.

---

## 6. Missing Dependencies

- crypto wallets
- key management
- C12 security for wallet security

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
- Reference schema: {walletId, walletType, keyManagement, security, mpc, ui, backup, owner, date}

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

- Wallet design is highly sensitive; restrict to C13 + C12.
- No keys in wallet docs.

---

## 11. South African Regulatory Considerations

- FSCA CASP for wallet security
- POPIA if wallet processes personal data

---

## 12. Compliance Gate

- C13 Web3-Token + C12 Cybersecurity-Intel. Wallet requires C12 for security review.

---

## 13. Rollback Plan

- Re-key on compromise.
- Re-secure on vulnerabilities.
- Escalate wallet conflicts to C13 + C12.

---

## 14. Escalation Path

- C13-WALLET-ENGINEER → C13 Web3-Token Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c13-web3-token/C13-WALLET-ENGINEER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C13 Web3-Token outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
