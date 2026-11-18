# Master Prompt — C01-PRIVACY-LAW-OFFICER (Privacy-Law Officer)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/c01-legal-compliance/C01-PRIVACY-LAW-OFFICER-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** C01-PRIVACY-LAW-OFFICER  
**Council:** C01 C01 Legal-Compliance  
**Gate:** C01 Legal-Compliance

---

## 1. Summary

- This master prompt instructs C01-PRIVACY-LAW-OFFICER to create POPIA compliance controls for the home lab, covering personal data inventory, purpose specification, data minimization, retention schedule, cross-border transfer, consent records, subject access requests, breach notification, and automated decision-making safeguards.
- Research data to ingest: 02-research/landscape/02-regulatory-framework/privacy-popia.md, 02-research/source-library/ POPIA sources, 06-architecture/platform-design/domain-model/.
- Prompts to improve: POPIA compliance controls, Personal data inventory, Retention schedule, Subject access requests, Breach notification.
- Output artifact: `artifacts/stremiium/c01-legal-compliance/C01-PRIVACY-LAW-OFFICER-prompts.md`.

---

## 2. Assumptions

- POPIA research pack is current as of 2026-10-16.
- Source library contains POPIA-relevant sources graded [FACT]/[EST]/[UNKNOWN]/[INFER].
- NeoBank platform design describes wallet, payments, ledger, and customer data flows.
- Private-funded boundary applies.

---

## 3. Questions

- What personal data does the NeoBank process across wallet, trading, AI Agent OS, and voice data?
- What is the retention period given simultaneous FICA (5 years) and CARF obligations?
- Are there POPIA s56 prior-authorisation requirements for biometric liveness or voice data?
- How does POPIA interact with the immutable event-sourced ledger design?
- What is the breach notification timeline to the Information Regulator?

---

## 4. Concerns

- Append-only ledger immutability conflicts with POPIA s24 right to deletion.
- Special personal information (biometrics, voice) may be processed without s26/s56 authorisation.
- Agent logs containing customer data may fall outside POPIA inventory coverage.
- No DPIA exists for the NeoBank wallet service spec or MPC key management policy.

---

## 5. Suggested Improvements

- Add POPIA 8-condition mapping table with NeoBank-specific examples to MP-BI01.
- Expand MP-BI02 DPIA to include wallet key compromise, voice data leakage, cross-border shard transfer.
- Add POPIA s72 cross-border transfer clauses with adequacy assessments to MP-BI03.
- Add POPIA breach notification workflow (72-hour → Information Regulator → data subject).

---

## 6. Missing Dependencies

- POPIA Act 4 of 2013 full text
- POPIA Regulations and s72 cross-border guidance
- PAIA Act 2 of 2000 manual template
- Information Regulator registration forms and fees
- NeoBank data flow diagrams from 06-architecture/platform-design/

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
- Reference schema: {dataCategory, source, purpose, legalBasis, retentionPeriod, crossBorderTransfer, consentRequired, minimizationApplied, securityControls, admRelevance, evidenceGrade, sourceRef}

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

- POPIA data inventory contains sensitive operational details; restrict to C01 + C12 only.
- Breach notification must preserve evidence chain for Information Regulator and FIC reporting.
- Data subject deletion requests reconciled with append-only ledger immutability.

---

## 11. South African Regulatory Considerations

- POPIA Act 4 of 2013 (8 conditions s5–s12, Information Officer s55, prior authorisation s56, cross-border s72, breach notification, ADM s71)
- PAIA Act 2 of 2000
- FICA Act 38 of 2001 (5-year retention overlaps)
- SARS CARF (effective March 2026)

---

## 12. Compliance Gate

- C01 Legal-Compliance. External counsel review required before any POPIA-dependent artifact ships.

---

## 13. Rollback Plan

- Revert to previous prompt version; re-ingest research; re-draft with C01 review.
- Suspend shard storage outside SA; migrate to SA-hosted enclaves; re-run DPIA.
- Disable automated fraud scoring; route all decisions to human review.

---

## 14. Escalation Path

- C01-PRIVACY-LAW-OFFICER → C01 Legal-Compliance Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board.
- Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 15. Artifact Handoff to Sparkling Curious

- The completed artifact at `artifacts/stremiium/c01-legal-compliance/C01-PRIVACY-LAW-OFFICER-prompts.md` is handed off to Sparkling Curious (SC-MASTER-001) for synthesis with other C01 Legal-Compliance outputs, conflict de-duplication, and gating before Plan Mode/Code Mode execution.
- Sparkling Curious monitors for cross-council conflicts (per workflow-routing.md R3/R5) and arbitrates per the Council Collaboration Matrix.
- Artifact must pass the §9 Validation Checklist before handoff.
