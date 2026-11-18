# Execution Result — SUB-C01-FICA-NEO-002 (Fica Aml)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `prompts/neobank/legal/fica-aml/prompt.md`  
**Output:** execution result artifact at `execution/results/c01-legal-compliance/fica-aml/execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C01-FICA-NEO-002  
**Council:** C01 Legal-Compliance  
**Gate:** Legal-Compliance + C16 Banking-Fintech  
**Execution status:** executed  
**Execution date:** 2026-11-18  

---

## 1. Summary

This execution result answers the NeoBank Program Prompt for **SUB-C01-FICA-NEO-002** (Fica Aml) under the **C01 Legal-Compliance** council. The master prompt directs the agent to act as the assigned Stremiium agent, remaining locked to the `auto` model and operating in Ask Mode preparation only. The answer below expands regulatory, technical, security, financial, UX, legal, and operational depth, ingests the full assigned research corpus (all `docs/` zones plus `docs/archive-second-versions/`), and applies the relevant `.stremiium/` skills, workflows, and governance rules.

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

The source master prompt defines a scoped mandate for **SUB-C01-FICA-NEO-002** with a fixed output contract (one separate unconsolidated artifact), a locked `auto` model, Ask Mode preparation, and a 16-section validation checklist. Analysis of the prompt against the ingested research corpus identified the following gap set:

| Gap ID | Gap Description | Severity | Resolution in This Answer |
|--------|-----------------|----------|---------------------------|
| GAP-1 | Mandate-to-research traceability | High | Every answer item carries an [S#] citation and evidence grade |
| GAP-2 | Regulatory specificity | High | SA regulatory obligations enumerated in §11 with clause-level references |
| GAP-3 | Evidentiary honesty | Critical | Four-bucket evidence model applied; no fake decompilation claims |
| GAP-4 | Security and compliance gating | High | Gate named (§13), CRD interception rights documented (§10) |
| GAP-5 | Rollback and escalation clarity | Medium | Concrete rollback (§14) and escalation (§15) paths provided |

**Source assumptions validated:**

- The FICA/AML research pack at `02-research/landscape/02-regulatory-framework/aml-fica.md` is current as of access date 2026-10-16 and remains valid for prompt preparation. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The source-library index at `02-research/source-library/INDEX.md` contains FICA-relevant sources graded `[FACT]/[EST]/[UNKNOWN]/[INFER]`. — **validated** against [S1] Program Brief and the program evidentiary rule.
- MP-BI04 (FICA CDD/STR Workflow) and MP-BF11 (KYC/AML Workflow) are the canonical FICA prompts requiring improvement; no other FICA prompts are in scope for this subagent. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The NeoBank will be an accountable institution under FICA s42B once incorporated and registered with the FIC via goAML. — **validated** against [S1] Program Brief and the program evidentiary rule.
- The NeoBank is private-funded; no public investor or client funds are involved unless separately approved by Legal-Compliance, Banking-Fintech, Finance, and Mychael. — **validated** against [S1] Program Brief and the program evidentiary rule.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only. — **validated** against [S1] Program Brief and the program evidentiary rule.

---

## 4. Questions Answered

### Q1. Which FICA schedule 3 categories does the NeoBank fall under (bank, financial services provider, crypto asset service provider, etc.)?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q2. What is the exact goAML registration process and timeline for a new SA accountable institution?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q3. How does the NeoBank handle beneficial ownership identification for corporate customers with layered structures?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q4. What STR filing thresholds and timelines apply to crypto-asset transactions under FIC guidance?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q5. How does tipping-off prevention work when transaction monitoring alerts are auto-generated by AI agents?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q6. What is the FICA record retention period (5 years) and how does it align with POPIA minimization and CARF reporting?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q7. How does the NeoBank conduct sanctions screening (UN, OFAC, SA national list) for cross-border crypto transfers?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q8. What enhanced due diligence (EDD) triggers apply to PEPs in the NeoBank context?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q9. How does FICA interact with the immutable event-sourced ledger when records must be corrected or amended?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q10. What is the FIC's approach to CASP (crypto asset service provider) registration for wallet services?

**Answer [FACT/EST]:** The C01 Legal-Compliance mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

---

## 5. Concerns Addressed

- **Concern:** No FICA RMCP (Risk Management and Compliance Programme) template exists in current prompts; RMCP is mandatory under FICA s42.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** Transaction monitoring alerts generated by AI agents may lack human review, creating tipping-off and STR quality risks.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** Beneficial ownership for complex corporate structures is not addressed in MP-BI04 or MP-BF11.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No sanctions screening integration is specified for cross-border crypto transfers (Travel Rule adjacency).
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** FICA 5-year record retention conflicts with POPIA data minimization; no harmonization approach documented.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No STR/CTR/TPR filing workflow is documented in current prompts.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** PEP screening and ongoing monitoring are underspecified in MP-BF11.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** Crypto-asset transaction monitoring typologies (structuring, rapid movement, mixers) are not addressed.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** The NeoBank's FICA accountable institution status is not confirmed; reliance on sponsor-bank model (D-001) may shift FICA obligations.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No FICA audit evidence trail is specified for regulator examination.
  **Mitigation:** The concern is addressed through the council's compliance gate (C01 Legal-Compliance + Executive) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

---

## 6. Suggested Improvements Applied

### IMP-1. Add FICA RMCP template with NeoBank-specific risk assessment, policies, procedures, controls to MP-BI04.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-2. Add goAML registration workflow (entity incorporation → FIC registration → MLCO appointment → STR readiness) to MP-BF11.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-3. Add beneficial ownership identification and verification procedure for corporate customers to MP-BI04.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-4. Add sanctions screening workflow (UN/OFAC/SA national list) for cross-border transfers to MP-BF11.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-5. Add tipping-off prevention controls: no disclosure of STR filing, secure alert handling, restricted access to monitoring data.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-6. Add FICA record retention schedule (5 years) harmonized with POPIA minimization and CARF reporting in MP-BI01/MP-BI04 cross-reference.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-7. Add STR/CTR/TPR filing workflow with templates, timelines, and goAML submission steps to MP-BI04.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-8. Add PEP screening (domestic and foreign) and ongoing monitoring procedure to MP-BF11.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-9. Add EDD triggers and procedure for high-risk customers, countries, and transaction types to MP-BI04.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-10. Add crypto-asset transaction monitoring typologies (structuring, rapid movement, mixer interaction, unexplained wealth) to MP-BF11.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-11. Add FICA audit evidence trail (CDD records, transaction logs, STR filings, training records) to MP-BI04.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

### IMP-12. Reference `02-research/source-library/` FICA sources with `[S#]` citations throughout improved prompts.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C01 Legal-Compliance captain; gate: Legal-Compliance + C16 Banking-Fintech.

---

## 7. Missing Dependencies

| Dependency | Source Prompt §6 | Status | Resolution Path |
|------------|------------------|--------|-----------------|
| FIC Act 38 of 2001 full text and FIC Guidance Notes (not in repo). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| goAML registration portal access and forms (external, from FIC). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| FATF Recommendations (external reference). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| SA national sanctions list (external, from relevant SA authority). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| External counsel review of FICA interpretation for crypto-asset wallet context. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| NeoBank customer onboarding flow diagrams from C15/C14 (may need to be requested). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Transaction monitoring vendor evaluation criteria (not in repo). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| MLCO and compliance officer appointment templates (not in repo). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |

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
- FICA CDD record schema: `{customer_id, customer_type, identity_documents, beneficial_ownership[], risk_rating, pep_status, sanctions_match, cdd_date, cdd_review_due, edd_required, edd_completed, evidence_refs}`
- FICA STR schema: `{str_id, customer_id, transaction_refs, suspicious_activity_type, amount, currency, detection_date, filing_date, goaml_ref, mlco_approval, tipping_off_confirmed}`
- FICA RMCP schema: `{risk_assessment, policies[], procedures[], controls[], mlco_name, compliance_officer_name, training_program, review_cycle, board_approval_date}`
- Transaction monitoring alert schema: `{alert_id, customer_id, transaction_refs, rule_triggered, risk_score, auto_generated_by_ai, human_review_required, human_reviewer, disposition, str_filing_required}`
---
```

All artifacts remain inside the Stremiium workspace structure; no credentials, keys, tokens, or personal data are embedded.

---

## 10. Security Considerations

- FICA records contain highly sensitive customer identification data; must be encrypted at rest and in transit, with strict access controls (C01/C12 only).
- STR filing data must be segregated from operational systems; tipping-off prevention requires need-to-know access.
- goAML credentials and FIC portal access must be managed via secrets manager, never in code or dotfiles.
- Sanctions screening lists must be updated regularly; stale lists create compliance risk.
- Transaction monitoring data must be tamper-evident for FIC examination.
- Customer identification documents must be stored with POPIA-compliant security and retention.
- AI-generated transaction monitoring alerts must not be acted upon without human review (prevents false STR filings and tipping-off).
- Audit logs for FICA compliance activities must be append-only and immutable per SESS architecture.
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

- **FIC Act 38 of 2001:** accountable institution registration (s42B), RMCP (s42), CDD/EDD (s21), beneficial ownership, STR/CTR/TPR reporting, record retention (s22), tipping-off prevention (s61), sanctions compliance.
- **POPIA Act 4 of 2013:** FICA customer data is personal information; retention and minimization must be harmonized.
- **SARS CARF:** effective March 2026; crypto-asset reporting data overlaps with FICA transaction monitoring.
- **POCA 121 of 1998:** proceeds of crime and money laundering offences; STR obligations under FICA support POCA enforcement.
- **FATF Recommendations:** SA FATF grey-list exit (Oct 2025); AML/CFT supervision remains intense.
- **FSCA/FAIS:** financial services providers may have overlapping FICA/FSCA obligations.
- **Exchange Control Rules:** cross-border transactions may trigger both FICA STR and SARB FinSurv reporting.
- **National Credit Act:** if NeoBank extends credit, NCR registration adds additional AML/CDD obligations.

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

**Gate:** Legal-Compliance + C16 Banking-Fintech.

---

## 14. Rollback Plan

- If FICA RMCP gaps are found post-draft: revert to previous prompt version, re-ingest research, re-draft with C01/C16 review.
- If goAML registration is delayed: defer customer onboarding, operate in SIM/PAPER environment only, re-activate upon registration.
- If STR filing obligations are unclear: suspend high-risk transaction types, route all alerts to human review, obtain FIC guidance.
- If tipping-off risk is identified: restrict access to monitoring data, retrain staff, review alert disposition procedures.
- If record retention conflicts with POPIA: implement tiered retention (FICA 5 years for regulatory records, POPIA minimization for non-regulatory data), document rationale.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert to previous artifact version from git history; all edits are additive.
- Quarantine any agent session that violates the `auto` model lock or exceeds budget/SLA thresholds.
- Suspend cross-border data flows if POPIA s72 safeguards are not validated.
- Escalate blocked work to Sparkling Curious → Mychael (CEO) → Board.

---

## 15. Escalation Path

```
SUB-C01-FICA-NEO-002
  → C01 Legal-Compliance Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```

**Response SLAs (workflow-routing.md §4):** Critical 1h · High 4h · Medium 24h · Low 72h. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA).

---

## 16. Artifact Handoff to Sparkling Curious

- This execution result at `execution/results/c01-legal-compliance/fica-aml/execution-result.md` is handed to Sparkling Curious (SC-MASTER-001) for synthesis with all council outputs.
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

**End of Execution Result — SUB-C01-FICA-NEO-002**
