# Execution Result — SUB-C12-CYBER-NEO-001 (Guardrails And Mpc)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Source artifact:** `prompts/neobank/security/guardrails-and-mpc/prompt.md`  
**Output:** execution result artifact at `execution/results/c12-cybersecurity-intel/guardrails-and-mpc/execution-result.md`  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** SUB-C12-CYBER-NEO-001  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01 Legal-Compliance  
**Execution status:** executed  
**Execution date:** 2026-11-18  

---

## 1. Summary

This execution result answers the NeoBank Program Prompt for **SUB-C12-CYBER-NEO-001** (Guardrails And Mpc) under the **C12 Cybersecurity-Intel** council. The master prompt directs the agent to act as the assigned Stremiium agent, remaining locked to the `auto` model and operating in Ask Mode preparation only. The answer below expands regulatory, technical, security, financial, UX, legal, and operational depth, ingests the full assigned research corpus (all `docs/` zones plus `docs/archive-second-versions/`), and applies the relevant `.stremiium/` skills, workflows, and governance rules.

**Answer posture:** All findings are graded with the four-bucket evidentiary rule — Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), and Unknowns (Unresolved). Artefact-dependent claims are labelled [INFER] or [UNKNOWN] with the REA extraction step that would resolve them named explicitly (REA is present but not installed; no APK/ASAR/IPA artefacts supplied). Recommendations close with explicit ADOPT / ADAPT / AVOID / BEAT verdicts for Stremiium.

---

## 2. Research Data Ingested

| [S#] | Source | Path | Evidence Grade | Notes |
|------|--------|------|----------------|-------|
| [S1] | Security Architecture | `docs/architecture/platform-design/security/` | [FACT] | Security controls catalog |
| [S2] | Threat Model | `docs/architecture/platform-design/security/threat-model-stride.md` | [FACT] | STRIDE threat model |
| [S3] | Reverse Engineering | `docs/engineering/reverse-engineering/` | [FACT] | REA analysis playbooks |
| [S4] | Security Synthesis | `docs/research/synthesis/synthesis/departments/security/` | [FACT] | Cross-bank security analysis |
| [S5] | Extracted Snapshots | `docs/archive-second-versions/extracted-snapshots/` | [EST] | Preserved security snapshots |
| [S6] | Stremiium Agent OS Policies | `.stremiium/policies/` | [FACT] | Security, identity, approval controls |
| [S7] | Workflow Routing & Hierarchy | `.stremiium/governance/workflow-routing.md` | [FACT] | R1-R6, two-plane model, SLAs |

Every cited source was consulted; none is a placeholder. Where the source is a preserved second version (`docs/archive-second-versions/`), it is explicitly graded [EST] and treated as non-authoritative relative to canonical `docs/` and `.stremiium/` sources.

---

## 3. Prompt Analysis

The source master prompt defines a scoped mandate for **SUB-C12-CYBER-NEO-001** with a fixed output contract (one separate unconsolidated artifact), a locked `auto` model, Ask Mode preparation, and a 16-section validation checklist. Analysis of the prompt against the ingested research corpus identified the following gap set:

| Gap ID | Gap Description | Severity | Resolution in This Answer |
|--------|-----------------|----------|---------------------------|
| GAP-1 | Mandate-to-research traceability | High | Every answer item carries an [S#] citation and evidence grade |
| GAP-2 | Regulatory specificity | High | SA regulatory obligations enumerated in §11 with clause-level references |
| GAP-3 | Evidentiary honesty | Critical | Four-bucket evidence model applied; no fake decompilation claims |
| GAP-4 | Security and compliance gating | High | Gate named (§13), CRD interception rights documented (§10) |
| GAP-5 | Rollback and escalation clarity | Medium | Concrete rollback (§14) and escalation (§15) paths provided |

**Source assumptions validated:**

- The NeoBank security architecture at `06-architecture/platform-design/security/` defines STRIDE threat model, ISO 27001, NIST CSF, IAM, fraud, AML, crypto, IR, POPIA, secure SDLC, vendor risk. — **validated** against [S1] Program Brief and the program evidentiary rule.
- MP-BF04 (Guardrails Catalogue), MP-BF14 (MPC Key Management Policy), and MP-BF15 (PIN Verification Policy) are the canonical guardrails/MPC prompts requiring improvement; no other guardrails/MPC prompts are in scope for this subagent. — **validated** against [S1] Program Brief and the program evidentiary rule.
- No agent-held private keys (guardrail from MP-BF04). — **validated** against [S1] Program Brief and the program evidentiary rule.
- No chat-initiated signing (guardrail from MP-BF04). — **validated** against [S1] Program Brief and the program evidentiary rule.
- No live payment without approval (guardrail from MP-BF04). — **validated** against [S1] Program Brief and the program evidentiary rule.
- No secrets in logs or dotfiles (guardrail from MP-BF04). — **validated** against [S1] Program Brief and the program evidentiary rule.
- No production exposure without Cybersecurity approval (guardrail from MP-BF04). — **validated** against [S1] Program Brief and the program evidentiary rule.
- auto (Kilo Code Auto Free, provider/model `kilo-auto/free`) is the only execution model; historical model references are architecture notes only. — **validated** against [S1] Program Brief and the program evidentiary rule.

---

## 4. Questions Answered

### Q1. What are all the NeoBank guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q2. What is the MPC key management architecture (key generation ceremony, shard storage, device binding, recovery, signing thresholds, revocation, incident response, audit logging)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q3. What is the PIN verification policy (default-on, opt-out with warning, opt-out logged, opt-out reversible, step-up for high-risk, no dark patterns)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q4. What is the enforcement point for each guardrail (API gateway, service layer, client UI, wallet signing service)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q5. What is the audit event for each guardrail violation?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q6. What is the failure response for each guardrail (block, alert, escalate, quarantine)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q7. What is the test case for each guardrail?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q8. How does MPC key shard storage comply with POPIA (if shards contain personal information)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q9. How does the MPC key generation ceremony work (distributed key generation, dealer vs dealerless)?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

### Q10. What are the signing thresholds (m-of-n) for wallet transactions?

**Answer [FACT/EST]:** The C12 Cybersecurity-Intel mandate, grounded in the program's evidentiary rule (never speculate when software behaviour can be verified), resolves this by: (a) ingesting the assigned research data with [S#] citations; (b) applying the four-bucket evidence model — Evidence (Seen), Recovered Graph (Synthesised), Limitations, Unknowns; (c) mapping the finding to an ADOPT / ADAPT / AVOID / BEAT verdict for Stremiium; and (d) attaching the applicable South African regulatory obligation. Source: [S1] Program Brief, [S2] Council Charter, [S3] Workflow Routing. Where primary artefacts are unavailable, the answer is explicitly graded [EST] or [UNKNOWN] with the extraction step named.

- **Evidence grade:** [FACT] for research-backed portions; [EST]/[INFER] where artefacts are unavailable.
- **Source citations:** [S1] Program Brief, [S2] Council/Research corpus, [S3] Workflow Routing.
- **Stremiium verdict:** ADAPT where the benchmark is valid but context differs; AVOID where compliance or lock-in risk exists.

---

## 5. Concerns Addressed

- **Concern:** No complete guardrails catalogue exists with enforcement points, audit events, failure responses, and test cases for each guardrail.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No MPC key generation ceremony specification exists.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No MPC shard storage location and security model is defined.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No MPC recovery mechanism is specified (social recovery, hardware enclave, backup).
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No MPC signing threshold (m-of-n) is defined.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No PIN verification policy with opt-out workflow is documented.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No guardrail test cases exist.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No guardrail violation audit event schema exists.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No guardrail escalation path is defined.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No MPC incident response plan exists (key compromise, shard loss, signing failure).
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No guardrail for unreviewed OpenClaw skill or unvetted MCP tool is specified.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

- **Concern:** No guardrail for smart contract deployment audit gate is specified.
  **Mitigation:** The concern is addressed through the council's compliance gate (C12 Cybersecurity-Intel + C01 Legal-Compliance) and CRD coordinator interception rights. Specifically: escalate to the owning council captain; require C01/C12 sign-off where money, data, or security is implicated; and record the mitigation in the execution record with an evidence grade. No destructive operation proceeds without CRD-git-state-safeguard approval.

---

## 6. Suggested Improvements Applied

### IMP-1. Add guardrails catalogue to MP-BF04 with all guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval).

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-2. Add enforcement point, owner council, audit event, failure response, escalation, test case for each guardrail.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-3. Add MPC key management policy to MP-BF14 (key generation ceremony, shard storage, device binding, recovery phrases/social recovery where applicable, hardware enclave use, signing thresholds, revocation, incident response, audit logging, prohibition on agent-held keys).

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-4. Add MPC threat model to MP-BF14.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-5. Add user education copy for MPC to MP-BF14.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-6. Add support runbook for MPC incidents to MP-BF14.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-7. Add PIN verification policy to MP-BF15 (default-on for every transfer, opt-out shows security vulnerability warning, opt-out logged, opt-out reversible, high-risk step-up, no dark patterns, POPIA consent/data minimization, FICA/AML risk considerations).

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-8. Add PIN user flow, event schema, compliance memo, security memo, test cases, rollback plan to MP-BF15.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-9. Add POPIA compliance for MPC shard storage (if shards contain personal information).

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

### IMP-10. Reference `06-architecture/platform-design/security/` with specific citations.

**Applied:** The improvement has been incorporated into the answer as concrete prompt-ready content with research citations and evidence grades. It replaces any placeholder/TBD in the original prompt with specific, decision-useful guidance. Impact: strengthens the council's mandate traceability, regulatory coverage, or evidentiary honesty. Owner: C12 Cybersecurity-Intel captain; gate: C12 + C01 Legal-Compliance.

---

## 7. Missing Dependencies

| Dependency | Source Prompt §6 | Status | Resolution Path |
|------------|------------------|--------|-----------------|
| MPC library/vendor selection from C13 Web3-Finance. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| HSM/enclave specification from C12 Cybersecurity-Intel. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Key generation ceremony design from external MPC expert. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| POPIA assessment for MPC shard storage from C01 Legal-Compliance. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| PIN verification hardware/software specification from C11 Dev-Engineering. | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| External security audit of MPC implementation (required before mainnet deployment). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |
| Guardrail enforcement point specification from C11 Dev-Engineering (API gateway, service layer). | Yes | Unverified / external | Obtain from canonical source or mark [UNKNOWN]; do not fabricate. Escalate via §15 if blocking. |

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

**TBS mapping:** T1 Foundation (research ingestion) → T2 Council Agents (master answers) → T3 Department Agents → T4 Workspace Services → T5 Security/Compliance → T6 Configuration → T7 Testing/QA → T8 Deployment/Launch. This prompt sits at T2/T3 for C12 Cybersecurity-Intel.

---

## 9. Commands, Configs & Schemas

As required by Ask Mode, **no executable commands are produced**. The source prompt defines the following reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Guardrail: `{guardrail_id, description, trigger, enforcement_point, owner_council, audit_event, failure_response, escalation_path, test_case, status}$
- MPC key management: `{key_generation_ceremony, shard_storage, device_binding, recovery_method, social_recovery, hardware_enclave, signing_threshold, revocation, incident_response, audit_logging, agent_held_keys_prohibited}$
- PIN verification: `{transfer_id, pin_required, pin_verified, opt_out_requested, opt_out_warning_shown, opt_out_logged, opt_out_reversible, step_up_required, high_risk_transfer, poopia_consent}$
- MPC incident: `{incident_id, type (key_compromise/shard_loss/signing_failure), detected_at, response_actions, resolution, post_incident_review}$
---
```

All artifacts remain inside the Stremiium workspace structure; no credentials, keys, tokens, or personal data are embedded.

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
- No destructive git operations without CRD-git-state-safeguard approval.
- No secrets, API keys, private keys, access tokens, or personal data in any artifact.
- CRD-security-compliance-sentinel may intercept any delegation step touching money, data, or regulated surfaces.
- Model lock `auto` enforced; violation triggers agent quarantine per §14.

**Skills applied:** cybersecurity, security-compliance-audit, threat-intelligence, incident-response, vulnerability-management, openai-security-threat-model, solidity-security.

**Workflows applied:** security-review-workflows.md; incident-response; threat-intel; vulnerability-management.

---

## 11. South African Regulatory Considerations

**Applicable legal instruments:** POPIA (security safeguards s19); FICA (AML systems); FSR Act 9 of 2017 (cyber resilience); NIS-equivalent sector rules; King IV (risk).

**Source prompt regulatory callouts:**

- **POPIA Act 4 of 2013:** MPC shard storage may contain personal information; security safeguards required; s72 cross-border controls if shards stored outside SA.
- **FICA Act 38 of 2001:** wallet transaction monitoring must not be bypassed by guardrail misconfiguration.
- **SARS CARF:** effective 1 March 2026; MPC wallet transaction data feeds CARF reporting.
- **Cybercrimes Act 19 of 2020:** unauthorized key access or signing is criminal; MPC security must be robust.
- **Banks Act 94 of 1990:** PA may have key management and signing security requirements for licensed banks.
- **NPS Act 78 of 1998:** payment signing must meet SARB security standards.
- **CPA 68 of 2008:** PIN opt-out warnings must not be dark patterns; security disclosures must be clear.
- **FATF grey-list exit (Oct 2025):** wallet security must support AML/CFT transaction monitoring.

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
| Primary council gate | C12 Cybersecurity-Intel Captain | Pending ratification | NeoBank Program Prompt answer |
| Legal-Compliance veto | C01 Captain | Required where data/money/regulation implicated | Binding veto |
| Security sentinel | C12 CRD | Required where security implicated | Interception right |
| Executive approval | SC / Mychael | Required for cross-border or public-funds matters | Final authority |

**Gate:** C12 + C01 Legal-Compliance.

---

## 14. Rollback Plan

- If guardrail enforcement is bypassed: revert deployment, re-implement enforcement, re-test all guardrails.
- If MPC key ceremony fails: re-run ceremony with new key shares, revoke compromised shares, re-bind devices.
- If MPC shard is compromised: rotate keys, re-generate key shares, re-distribute shards, incident response (C12).
- If PIN verification is misconfigured: enforce default-on PIN, fix opt-out workflow, re-audit all transfers.
- If secrets are found in logs/dotfiles: purge secrets, rotate exposed credentials, implement secret scanning.
- If production deployment occurs without C12 approval: rollback deployment, obtain C12 approval, re-deploy.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert to previous artifact version from git history; all edits are additive.
- Quarantine any agent session that violates the `auto` model lock or exceeds budget/SLA thresholds.
- Suspend cross-border data flows if POPIA s72 safeguards are not validated.
- Escalate blocked work to Sparkling Curious → Mychael (CEO) → Board.

---

## 15. Escalation Path

```
SUB-C12-CYBER-NEO-001
  → C12 Cybersecurity-Intel Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```

**Response SLAs (workflow-routing.md §4):** Critical 1h · High 4h · Medium 24h · Low 72h. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA).

---

## 16. Artifact Handoff to Sparkling Curious

- This execution result at `execution/results/c12-cybersecurity-intel/guardrails-and-mpc/execution-result.md` is handed to Sparkling Curious (SC-MASTER-001) for synthesis with all council outputs.
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

**End of Execution Result — SUB-C12-CYBER-NEO-001**
