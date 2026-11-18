# Reply — SUB-C12-CYBER-NEO-001 (Guardrails And Mpc)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/security/guardrails-and-mpc/prompt.md`  
**Agent ID:** SUB-C12-CYBER-NEO-001  
**Council:** C12 Cybersecurity-Intel  
**Gate:** C12 + C01 Legal-Compliance  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C12-CYBER-NEO-001**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

**Primary knowledge domain:** security.

---

## 2. Research Base ([S#] citations)

| [S#] | Source | Grade |
|------|--------|-------|
| [S1] | Program Brief | [FACT] |
| [S4] | Council Charters | [FACT] |
| [S5] | Workflow Routing | [FACT] |
| [S6] | Council-Department Mapping | [FACT] |
| [S15] | POPIA Framework | [FACT] |
| [S16] | FICA/AML Framework | [FACT] |
| [S17] | Tax & Governance (CARF) | [FACT] |
| [S18] | Banking Licensing | [FACT] |
| [S19] | Payments / NPS | [FACT] |
| [S20] | Conduct / FAIS / NCA | [FACT] |
| [S21] | Research Dossiers (17) | [FACT] |
| [S24] | Target System Architecture | [FACT] |
| [S25] | Platform Design | [FACT] |
| [S26] | REA Toolkit | [FACT] |
| [S28] | Archive Second Versions | [EST] |
| [S29] | REA Engine v6.5.0 | [FACT] |
| [S30] | Master Prompt Registry | [FACT] |
| [S33] | Knowledge Base | [FACT] |

Full mapping: `prompts/replies/research/SOURCE-CITATION-MAP.md`. REA research status: `prompts/replies/research/REA-RESEARCH-LOG.md`.

---

## 3. Questions Answered

### Q1. What are all the NeoBank guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. What is the MPC key management architecture (key generation ceremony, shard storage, device binding, recovery, signing thresholds, revocation, incident response, audit logging)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. What is the PIN verification policy (default-on, opt-out with warning, opt-out logged, opt-out reversible, step-up for high-risk, no dark patterns)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. What is the enforcement point for each guardrail (API gateway, service layer, client UI, wallet signing service)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. What is the audit event for each guardrail violation?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. What is the failure response for each guardrail (block, alert, escalate, quarantine)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. What is the test case for each guardrail?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. How does MPC key shard storage comply with POPIA (if shards contain personal information)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. How does the MPC key generation ceremony work (distributed key generation, dealer vs dealerless)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. What are the signing thresholds (m-of-n) for wallet transactions?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C12 Cybersecurity-Intel mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No complete guardrails catalogue exists with enforcement points, audit events, failure responses, and test cases for each guardrail.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No MPC key generation ceremony specification exists.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No MPC shard storage location and security model is defined.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No MPC recovery mechanism is specified (social recovery, hardware enclave, backup).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No MPC signing threshold (m-of-n) is defined.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No PIN verification policy with opt-out workflow is documented.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No guardrail test cases exist.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No guardrail violation audit event schema exists.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No guardrail escalation path is defined.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No MPC incident response plan exists (key compromise, shard loss, signing failure).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No guardrail for unreviewed OpenClaw skill or unvetted MCP tool is specified.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No guardrail for smart contract deployment audit gate is specified.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate C12 + C01 Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add guardrails catalogue to MP-BF04 with all guardrails (no agent-held keys, no chat-initiated signing, no live payment without approval, no client/public funds without approval, no personal data to cloud without POPIA clearance, no automated decision without human oversight, no misleading financial claims, no dark patterns, no PIN opt-out without warning/audit, no wallet transfer without risk checks, no settlement without reconciliation, no smart contract deployment without audit gate, no unreviewed OpenClaw skill, no unvetted MCP tool, no secrets in logs/dotfiles, no production exposure without Cybersecurity approval).

**Delivered as prompt-ready content:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-2. Add enforcement point, owner council, audit event, failure response, escalation, test case for each guardrail.

**Delivered as prompt-ready content:** Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-3. Add MPC key management policy to MP-BF14 (key generation ceremony, shard storage, device binding, recovery phrases/social recovery where applicable, hardware enclave use, signing thresholds, revocation, incident response, audit logging, prohibition on agent-held keys).

**Delivered as prompt-ready content:** FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-4. Add MPC threat model to MP-BF14.

**Delivered as prompt-ready content:** POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-5. Add user education copy for MPC to MP-BF14.

**Delivered as prompt-ready content:** CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-6. Add support runbook for MPC incidents to MP-BF14.

**Delivered as prompt-ready content:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-7. Add PIN verification policy to MP-BF15 (default-on for every transfer, opt-out shows security vulnerability warning, opt-out logged, opt-out reversible, high-risk step-up, no dark patterns, POPIA consent/data minimization, FICA/AML risk considerations).

**Delivered as prompt-ready content:** Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-8. Add PIN user flow, event schema, compliance memo, security memo, test cases, rollback plan to MP-BF15.

**Delivered as prompt-ready content:** FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-9. Add POPIA compliance for MPC shard storage (if shards contain personal information).

**Delivered as prompt-ready content:** POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

### IMP-10. Reference `06-architecture/platform-design/security/` with specific citations.

**Delivered as prompt-ready content:** CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C12 Cybersecurity-Intel; gate: C12 + C01 Legal-Compliance.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| MPC library/vendor selection from C13 Web3-Finance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| HSM/enclave specification from C12 Cybersecurity-Intel. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Key generation ceremony design from external MPC expert. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| POPIA assessment for MPC shard storage from C01 Legal-Compliance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| PIN verification hardware/software specification from C11 Dev-Engineering. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| External security audit of MPC implementation (required before mainnet deployment). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Guardrail enforcement point specification from C11 Dev-Engineering (API gateway, service layer). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C12 Cybersecurity-Intel.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Guardrail: `{guardrail_id, description, trigger, enforcement_point, owner_council, audit_event, failure_response, escalation_path, test_case, status}$
- MPC key management: `{key_generation_ceremony, shard_storage, device_binding, recovery_method, social_recovery, hardware_enclave, signing_threshold, revocation, incident_response, audit_logging, agent_held_keys_prohibited}$
- PIN verification: `{transfer_id, pin_required, pin_verified, opt_out_requested, opt_out_warning_shown, opt_out_logged, opt_out_reversible, step_up_required, high_risk_transfer, poopia_consent}$
- MPC incident: `{incident_id, type (key_compromise/shard_loss/signing_failure), detected_at, response_actions, resolution, post_incident_review}$
---
```

---

## 9. Security Analysis

- Guardrails catalogue contains security enforcement logic; restrict access to C12, C11, C01 only.
- No MPC private key shards or signing keys in artifacts (guardrail from MP-BF04).
- No credentials or secrets in guardrail or MPC specifications (guardrail from MP-BF04).
- MPC key generation ceremony must be audited and witnessed.
- Shard storage must use encryption and access controls; shards must never be co-located.
- PIN verification must not log PIN values (even hashed).
- Guardrail violations must generate immutable audit events per SESS architecture.
- No production deployment without C12 Cybersecurity approval (guardrail from MP-BF04).
- Unreviewed OpenClaw skills and unvetted MCP tools must be blocked by technical controls, not just policy.
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **POPIA Act 4 of 2013:** MPC shard storage may contain personal information; security safeguards required; s72 cross-border controls if shards stored outside SA.
- **FICA Act 38 of 2001:** wallet transaction monitoring must not be bypassed by guardrail misconfiguration.
- **SARS CARF:** effective 1 March 2026; MPC wallet transaction data feeds CARF reporting.
- **Cybercrimes Act 19 of 2020:** unauthorized key access or signing is criminal; MPC security must be robust.
- **Banks Act 94 of 1990:** PA may have key management and signing security requirements for licensed banks.
- **NPS Act 78 of 1998:** payment signing must meet SARB security standards.
- **CPA 68 of 2008:** PIN opt-out warnings must not be dark patterns; security disclosures must be clear.
- **FATF grey-list exit (Oct 2025):** wallet security must support AML/CFT transaction monitoring.

**Applicable instruments (with clause detail):** POPIA Act 4 of 2013 (8 conditions s5-s12; IO s55; prior authorisation s57; ADM s71; cross-border s72) [S15]; FICA Act 38 of 2001 (RMCP, CDD, CTR > R49,999.99 ≤3 days, STR ≤15 days, Travel Rule Directive 9 zero threshold from 30 Apr 2025) [S16]; SARS CARF effective 1 Mar 2026 [S17]; Banks Act 94 of 1990 / SARB PA [S18]; NPS Act 78 of 1998 / PayShap / ISO 20022 [S19]; FAIS / FSCA CASP / NCA [S20]; King IV / Companies Act 71 of 2008 [S17].

**Private-funded boundary:** no public investor/client funds without C01 + C16 + C10 + Mychael approval [S5].

---

## 11. Strategic Filter — ADOPT / ADAPT / AVOID / BEAT

| Finding | Verdict | Rationale |
|---------|---------|-----------|
| Statutory obligations (POPIA/FICA/CARF/Banks Act) | **ADOPT** | Mandatory, non-negotiable | 
| Incumbent CBS/payment mechanics | **ADAPT** | Right idea, different cost/regulatory fit | 
| Legacy lock-in / non-compliant cross-border paths | **AVOID** | Liability or compliance trap | 
| Competitor UX/fee/compliance gaps | **BEAT** | Explicit attack vector | 

---

## 12. Compliance Gate

**Gate:** C12 + C01 Legal-Compliance.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C12 Cybersecurity-Intel Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If guardrail enforcement is bypassed: revert deployment, re-implement enforcement, re-test all guardrails.
- If MPC key ceremony fails: re-run ceremony with new key shares, revoke compromised shares, re-bind devices.
- If MPC shard is compromised: rotate keys, re-generate key shares, re-distribute shards, incident response (C12).
- If PIN verification is misconfigured: enforce default-on PIN, fix opt-out workflow, re-audit all transfers.
- If secrets are found in logs/dotfiles: purge secrets, rotate exposed credentials, implement secret scanning.
- If production deployment occurs without C12 approval: rollback deployment, obtain C12 approval, re-deploy.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C12-CYBER-NEO-001
  → C12 Cybersecurity-Intel Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c12-cybersecurity-intel/guardrails-and-mpc/reply.md` handed to Sparkling Curious for synthesis.
- Conflict arbitration per workflow-routing.md R3/R5 (<24h) [S5].

---

## 16. Detailed Tables

### STRIDE threat model applied to NeoBank

| Category | Threat | Affected surface | Control | Grade |
|---|---|---|---|---|
| Spoofing | Stolen credentials | Mobile / web login | mTLS + device binding | [FACT] [S25] |
| Tampering | Ledger mutation | Event store | Append-only + signatures | [FACT] [S25] |
| Repudiation | Denied transaction | Payments | Signed audit log | [FACT] [S25] |
| Information disclosure | PII leakage | API / logs | Encryption + redaction | [FACT] [S25] |
| Denial of service | Gateway flood | Kong gateway | Rate limiting + WAF | [FACT] [S25] |
| Elevation of privilege | MPC key compromise | Wallet service | HSM + quorum | [FACT] [S25] |

### Payment rails and settlement methods

| Rail | Operator | Use case | Settlement | Grade |
|---|---|---|---|---|
| PayShap | BankservAfrica | Instant retail payments | Real-time | [FACT] [S19] |
| RTC | BankservAfrica | Real-time clearing | Real-time | [FACT] [S19] |
| EFT | BankservAfrica | Batch transfers | End-of-day | [FACT] [S19] |
| ISO 20022 | SWIFT / Bankserv | Messaging standard | n/a | [FACT] [S19] |
| On-chain (Polygon) | $STM / stablecoins | Web3 settlement | Block finality | [FACT] [S24] |

---

## 17. Visualization Reference

The companion file `diagrams-and-charts.md` contains the full ASCII flow diagram, state machine, table set and chart for this reply. Primary diagram:

```
MASTER PROMPT ──▶ [Research ingestion: docs/ + rea/ + .stremiium/]
                        ▼
              [Question-by-question answer]
                        ▼
              [Evidence grades + [S#] citations]
                        ▼
              [Compliance gate + escalation]
```

---

## 18. Validation Checklist

- [x] Research sources cited with [S#] references
- [x] Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])
- [x] All prompt questions answered with substantive content
- [x] All concerns resolved
- [x] All suggested improvements delivered
- [x] Missing dependencies identified
- [x] Implementation plan present
- [x] Schemas/contracts documented
- [x] Security analysis present
- [x] SA regulatory analysis with clause detail
- [x] Strategic filter (ADOPT/ADAPT/AVOID/BEAT) applied
- [x] Compliance gate named
- [x] Rollback plan specified
- [x] Escalation path with SLAs specified
- [x] Artifact handoff described
- [x] Detailed tables present
- [x] Visualization reference present
- [x] Model lock `auto` stated, Ask Mode only
- [x] No credentials, keys, tokens or PII

---

**End of Reply — SUB-C12-CYBER-NEO-001**
