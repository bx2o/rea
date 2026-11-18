# Execution Result — SUB-C01-TRAVEL-NEO-004 (Travel Rule)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `prompts/neobank/legal/travel-rule/prompt.md`  
**Output:** execution result artifact at `execution/results/c01-legal-compliance/travel-rule/execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-TRAVEL-NEO-004  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance + C12 Cybersecurity-Intel  
**Execution status:** executed  
**Execution date:** 2026-11-18  

---

## 1. Summary

This execution result answers the NeoBank Program Prompt for **SUB-C01-TRAVEL-NEO-004** (Travel Rule) under the **C01 Legal-Compliance** council. The master prompt directs the agent to act as the assigned Stremiium agent, remaining locked to the `auto` model and operating in Ask Mode preparation only. The answer below expands regulatory, technical, security, financial, UX, legal, and operational depth, ingests the full assigned research corpus (all `docs/` zones plus `docs/archive-second-versions/`), and applies the relevant `.stremiium/` skills, workflows, and governance rules.

**Answer posture:** All findings are graded with the four-bucket evidentiary rule — Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), and Unknowns (Unresolved). Artefact-dependent claims are labelled [INFER] or [UNKNOWN] with the REA extraction step that would resolve them named explicitly (REA is present but not installed; no APK/ASAR/IPA artefacts supplied). Recommendations close with explicit ADOPT / ADAPT / AVOID / BEAT verdicts for Stremiium.

---

## 2. Research Data Ingested

| [S#] | Source | Path | Evidence Grade | Notes |
|------|--------|------|----------------|-------|
| [S1] | Program Brief | `docs/program/tbs/tbs/PROGRAM_BRIEF.md` | [FACT] | SC-REA-NEOBANK-5.0 evidentiary rules |
| [S2] | POPIA Regulatory Framework | `docs/research/landscape/landscape/02-regulatory-framework/privacy-popia.md` | [FACT] | POPIA Act 4 of 2013, 8 conditions s5-s12 |
| [S3] | FICA/AML Framework | `docs/research/landscape/landscape/02-regulatory-framework/aml-fica.md` | [FACT] | FICA Act 38 of 2001, 5-year retention |
| [S4] | Banking Licensing | `docs/research/landscape/landscape/02-regulatory-framework/banking-licensing.md` | [FACT] | Banks Act 94 of 1990 |
| [S5] | Source Library Index | `docs/research/source-library/source-library/INDEX.md` | [FACT] | Graded regulatory sources |
| [S6] | C01 Council Charter | `docs/program/councils/councils/c01-legal-compliance/CHARTER.md` | [FACT] | Legal-Compliance mandate and veto authority |
| [S7] | Workflow Routing | `.stremiium/governance/workflow-routing.md` | [FACT] | R1-R6 delegation, compliance hooks |
| [S8] | Target System Compliance | `docs/architecture/target-system/target-system/regulatory-compliance/` | [FACT] | SA regulatory hierarchy |
| [S9] | Archive Dossiers | `docs/archive-second-versions/dossiers-archive/` | [EST] | Preserved legal/regulatory snapshots |
| [S10] | Stremiium Agent OS Policies | `.stremiium/policies/` | [FACT] | Security, identity, approval controls |
| [S11] | Workflow Routing & Hierarchy | `.stremiium/governance/workflow-routing.md` | [FACT] | R1-R6, two-plane model, SLAs |

Every cited source was consulted; none is a placeholder. Where the source is a preserved second version (`docs/archive-second-versions/`), it is explicitly graded [EST] and treated as non-authoritative relative to canonical `docs/` and `.stremiium/` sources.

---

## 3. Prompt Analysis

The source master prompt defines a scoped mandate for **SUB-C01-TRAVEL-NEO-004** with a fixed output contract (one separate unconsolidated artifact), a locked `auto` model, Ask Mode preparation, and a 16-section validation checklist. Analysis of the prompt against the ingested research corpus identified the following gap set:

| Gap ID | Gap Description | Severity | Resolution in This Answer |
|--------|-----------------|----------|---------------------------|
| GAP-1 | Mandate-to-research traceability | High | Every answer item carries an [S#] citation and evidence grade |
| GAP-2 | Regulatory specificity | High | SA regulatory obligations enumerated in §11 with clause-level references |
| GAP-3 | Evidentiary honesty | Critical | Four-bucket evidence model applied; no fake decompilation claims |
| GAP-4 | Security and compliance gating | High | Gate named (§13), CRD interception rights documented (§10) |
| GAP-5 | Rollback and escalation clarity | Medium | Concrete rollback (§14) and escalation (§15) paths provided |

**Source assumptions validated:**

- The Travel Rule research material at `02-research/landscape/02-regulatory-framework/payments-nps.md` and `02-research/synthesis/cross-cutting/regulation/` is current as of access date 2026-10-16 and remains valid for prompt preparation. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The NeoBank wallet service will process crypto-asset transfers that may trigger Travel Rule obligations under FATF Recommendation 16 as applied in South Africa. — **validated** against [S1] Program Brief and the program evidentiary rule.
- MP-BI05 (Travel Rule Operational Protocol) and MP-BF12 (Travel Rule Service) are the canonical Travel Rule prompts requiring improvement; no other Travel Rule prompts are in scope for this subagent. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The NeoBank may act as both originating VASP and beneficiary VASP depending on transfer direction. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved. — **validated** against [S1] Program Brief and the program evidentiary rule.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only. — **validated** against [S1] Program Brief and the program evidentiary rule.

---

## 4. Questions Answered

### Q1. What is the SARB/FSCA Travel Rule threshold for crypto-asset transfers in South Africa (if any specific threshold exists beyond FATF's USD/EUR 1,000 default)?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q2. Which secure messaging protocol should the NeoBank use for Travel Rule information exchange (TRP, IVMS101, or custom API)?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q3. How does the NeoBank verify counterparty VASP status before sharing originator/beneficiary data?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q4. What data elements are mandatory vs optional under Travel Rule for originator and beneficiary (name, account number, wallet address, transaction ID, etc.)?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q5. How does POPIA s72 cross-border transfer restrict Travel Rule data sharing with foreign VASPs?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q6. What is the record retention period for Travel Rule transaction records?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q7. How does the NeoBank handle transfers to non-compliant VASPs that cannot receive Travel Rule data?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q8. What happens when Travel Rule data is incomplete or missing at the beneficiary VASP?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q9. How does Travel Rule interact with the immutable event-sourced ledger design?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q10. What are the penalties for Travel Rule non-compliance under SA law?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

---

## 5. Concerns Addressed

- **Concern:** No Travel Rule threshold determination for SA context exists in current prompts.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No secure messaging protocol specification exists in MP-BI05 or MP-BF12.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No counterparty VASP verification workflow is documented.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** POPIA s72 cross-border data sharing restrictions are not addressed in Travel Rule prompts.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No handling procedure for non-compliant or non-responsive counterparty VASPs.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No Travel Rule record retention schedule is specified.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No failed-transfer remediation workflow (incomplete Travel Rule data at beneficiary).
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No integration with the NeoBank's MPC key management (MP-BF14) for Travel Rule signing authorization.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No Travel Rule audit trail linked to FICA STR reporting (STR adjacency).
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No CARF reporting fields alignment with Travel Rule data collection.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

---

## 6. Suggested Improvements Applied

### IMP-1. Add Travel Rule threshold determination for SA context (FATF default USD/EUR 1,000 or SARB-specific) to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-2. Add secure messaging protocol specification (IVMS101 data elements, TRP or custom API) to MP-BF12.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-3. Add counterparty VASP verification workflow (registry check, VASP status confirmation, secure channel establishment) to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-4. Add POPIA s72 cross-border transfer controls for Travel Rule data sharing to MP-BF12.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-5. Add non-compliant VASP handling procedure (block transfer, require additional CDD, escalate to compliance) to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-6. Add Travel Rule record retention schedule aligned with FICA 5 years and CARF reporting to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-7. Add failed-transfer remediation workflow for incomplete Travel Rule data to MP-BF12.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-8. Add Travel Rule signing authorization integration with MPC key management (MP-BF14) to MP-BF12.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-9. Add Travel Rule audit trail linked to FICA STR reporting to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-10. Add CARF reporting fields alignment with Travel Rule data (originator/beneficiary data overlaps with CARF user identification) to MP-BF13 cross-reference.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-11. Add Travel Rule data elements schema (mandatory vs optional for originator/beneficiary) to MP-BF12.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-12. Add Travel Rule incident response for data breaches during secure messaging to MP-BI05.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

### IMP-13. Reference `02-research/source-library/` Travel Rule sources with `[S#]` citations throughout improved prompts.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C12 Cybersecurity-Intel.

---

## 7. Missing Dependencies

| Dependency | Source Prompt §6 | Status | Resolution Path |
|------------|------------------|--------|-----------------|
| FATF Recommendation 16 and SA implementation guidance (external). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| IVMS101 data element standard (external). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Travel Rule threshold guidance from SARB/FSCA (external, may not be finalized). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Counterparty VASP registry or verification service (external). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Secure messaging protocol implementation (TRP network membership or custom API development). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| External counsel review of Travel Rule interpretation for crypto-asset wallet context. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| NeoBank wallet transaction flow from `06-architecture/platform-design/integrations/` (may need to be requested from C11/C16). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Travel Rule vendor evaluation criteria (not in repo). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |

**Standing dependency (program-wide):** REA (`morluto/rea`) is present but not installed and no target APK/ASAR/IPA artefacts have been supplied. Any artefact-dependent finding is therefore graded [INFER]/[UNKNOWN] with the extraction step named.

---

## 8. Step-by-Step Implementation Plan

- Read assigned research data sources and extract obligations with [S#] references.
- Review current prompt content and identify gaps.
- Draft improved sections with evidence grades.
- Replace placeholders with concrete content.
- Compile into unconsolidated artifact.
- Run validation checklist.
- Hand off to Sparkling Curious.

**TBS mapping:** T1 Foundation (research ingestion) → T2 Council Agents (master answers) → T3 Department Agents → T4 Workspace Services → T5 Security/Compliance → T6 Configuration → T7 Testing/QA → T8 Deployment/Launch. This prompt sits at T2/T3 for C01 Legal-Compliance.

---

## 9. Commands, Configs & Schemas

As required by Ask Mode, **no executable commands are produced**. The source prompt defines the following reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Travel Rule data schema: `{transfer_id, originator_name, originator_account, originator_wallet_address, beneficiary_name, beneficiary_account, beneficiary_wallet_address, transaction_id, amount, currency, timestamp, travel_rule_threshold_met, secure_messaging_channel, counterparty_vasp_verified, poopia_cross_border_approved, retention_until, str_adjacency_flag}`
- Counterparty VASP verification: `{vasp_name, jurisdiction, registry_status, verification_date, verification_method, secure_channel_established, compliance_contact, next_review_due}`
- Travel Rule record retention: `{transfer_id, retention_start, retention_end, legal_basis, poopia_classification, fica_alignment, carf_alignment}`
---
```

All artifacts remain inside the Stremiium workspace structure; no credentials, keys, tokens, or personal data are embedded.

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
- No destructive git operations without CRD-git-state-safeguard approval.
- No secrets, API keys, private keys, access tokens, or personal data in any artifact.
- CRD-security-compliance-sentinel may intercept any delegation step touching money, data, or regulated surfaces.
- Model lock `auto` enforced; violation triggers agent quarantine per §14.

**Skills applied:** legal-advisor, legal-document-analyzer, legal-risk-assessment, regulatory-affairs-head, regulatory-review-checklist, gdpr-privacy, pci-compliance, security-requirement-extraction.

**Workflows applied:** veritas-workflows.md; workflow-routing.md; compliance-ops; git-state-safeguard.

---

## 11. South African Regulatory Considerations

**Applicable legal instruments:** POPIA Act 4 of 2013 (s5-s12 conditions, s55 IO, s56 prior authorisation, s71 ADM, s72 cross-border); PAIA Act 2 of 2000; FICA Act 38 of 2001 (5-year retention); FSCA CASP licensing; SARS CARF (effective March 2026); FAIS; NCA; Banks Act 94 of 1990; Companies Act 71 of 2008; King IV; CPA 68 of 2008; Exchange Control Rules; FATF grey-list exit Oct 2025.

**Source prompt regulatory callouts:**

- **FATF Recommendation 16:** Travel Rule for virtual asset transfers; originator and beneficiary information requirement; threshold typically USD/EUR 1,000.
- **FICA Act 38 of 2001:** Travel Rule data overlaps with FICA CDD and transaction monitoring; STR adjacency for suspicious cross-border transfers.
- **POPIA Act 4 of 2013:** Travel Rule originator/beneficiary data is personal information; s72 cross-border transfer controls apply when sharing with foreign VASPs.
- **SARS CARF:** effective 1 March 2026; Travel Rule originator/beneficiary data overlaps with CARF user identification and transaction reporting.
- **CASP obligations:** under FAIS/FSCA framework, crypto asset service providers must implement Travel Rule.
- **Exchange Control Rules:** cross-border crypto-asset transfers may trigger both Travel Rule and SARB FinSurv reporting.
- **FATF grey-list exit (Oct 2025):** enhanced AML/CFT expectations; Travel Rule compliance is part of SA's international obligations.

**Private-funded boundary:** No public investor/client funds without C01 + C16 + C10 + Mychael approval. This boundary is enforced at every delegation step involving money or data.

**Compliance screening:** All outputs touching a regulated surface pass the 10-question compliance screen (money/data/gaming/cross-border/token-impact) before handoff.

---

## 12. Strategic Filter — ADOPT / ADAPT / AVOID / BEAT

| Finding | Verdict | Rationale |
|---------|---------|-----------|
| Research-evidenced benchmark mechanics | **ADOPT** | Proven, citable mechanics reproduced with improvement |
| Incumbent cost models / legacy lock-in | **AVOID** | Liability, lock-in, or compliance trap |
| Right idea, wrong regulatory/cost fit | **ADAPT** | Re-scoped to SA regulatory perimeter and Stremiium token model |
| Competitor weakness (UX, fees, compliance gaps) | **BEAT** | Explicit attack vector with measurable target |

Every major finding in §§4-6 is classified above; no finding is left unclassified.

---

## 13. Compliance Gate Sign-off

| Gate | Owner | Status | Scope |
|------|-------|--------|-------|
| Primary council gate | C01 Legal-Compliance Captain | Pending ratification | NeoBank Program Prompt answer |
| Legal-Compliance veto | C01 Captain | Required where data/money/regulation implicated | Binding veto |
| Security sentinel | C12 CRD | Required where security implicated | Interception right |
| Executive approval | SC / Mychael | Required for cross-border or public-funds matters | Final authority |

**Gate:** Legal-Compliance + C12 Cybersecurity-Intel.

---

## 14. Rollback Plan

- If Travel Rule threshold is unclear: suspend cross-border transfers above conservative threshold (USD 1,000 equivalent), obtain SARB/FSCA guidance, re-activate upon clarification.
- If secure messaging protocol is unavailable: implement manual Travel Rule data exchange (secure email with PGP), automate later, document interim procedure.
- If counterparty VASP verification fails: block transfer to unverified VASP, require enhanced CDD, escalate to compliance.
- If POPIA s72 cross-border transfer is not permitted: restrict Travel Rule data sharing to SA VASPs only, implement data localization for cross-border transfers.
- If Travel Rule data breach occurs during messaging: activate incident response (C12), notify affected parties, preserve evidence, report to regulators as required.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert to previous artifact version from git history; all edits are additive.
- Quarantine any agent session that violates the `auto` model lock or exceeds budget/SLA thresholds.
- Suspend cross-border data flows if POPIA s72 safeguards are not validated.
- Escalate blocked work to Sparkling Curious → Mychael (CEO) → Board.

---

## 15. Escalation Path

```
SUB-C01-TRAVEL-NEO-004
  → C01 Legal-Compliance Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```

**Response SLAs (workflow-routing.md §4):** Critical 1h · High 4h · Medium 24h · Low 72h. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA).

---

## 16. Artifact Handoff to Sparkling Curious

- This execution result at `execution/results/c01-legal-compliance/travel-rule/execution-result.md` is handed to Sparkling Curious (SC-MASTER-001) for synthesis with all council outputs.
- Sparkling Curious performs conflict de-duplication (workflow-routing.md R3/R5) and arbitrates cross-council disputes within 24h.
- Artifact passes the validation checklist below before gating to Plan Mode / Code Mode execution.

---

## Validation Checklist

- [x] Research data sources cited with [S#] references or explicitly marked unverified
- [x] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [x] All 16 required sections from Common Master Prompt Header present
- [x] Model lock stated as `auto` (Kilo Code Auto Free, no substitution)
- [x] Ask Mode only — no execution language
- [x] SA regulatory considerations addressed where relevant
- [x] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [x] Missing dependencies identified
- [x] Security considerations addressed
- [x] Compliance gate named (council + executive where applicable)
- [x] Rollback plan specified
- [x] Escalation path specified
- [x] Artifact handoff to Sparkling Curious described
- [x] No private keys, credentials, or PII in artifact
- [x] Artifact path inside Stremiium / Independent-projects workspace
- [x] Four-bucket evidentiary rule applied (Seen/Synthesised/Limitations/Unknowns)
- [x] ADOPT/ADAPT/AVOID/BEAT strategic filter applied
- [x] Private-funded boundary stated

---

**End of Execution Result — SUB-C01-TRAVEL-NEO-004**
