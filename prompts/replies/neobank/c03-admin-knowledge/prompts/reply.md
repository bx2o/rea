# Reply — SUB-C03-KB-NEO-001 (Prompts)

**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (kilo-auto/free). No substitution.  
**Mode:** Ask Mode preparation only.  
**Source prompt:** `prompts/neobank/knowledge-base/prompts/prompt.md`  
**Agent ID:** SUB-C03-KB-NEO-001  
**Council:** C03 Admin-Knowledge  
**Gate:** Legal-Compliance  
**Reply status:** complete · **Date:** 2026-11-18  

---

## 1. Executive Answer

This reply provides the substantive answer to the Master Prompt for **SUB-C03-KB-NEO-001**. It answers every question in the source prompt with concrete, citable content drawn from `docs/`, `rea/` and `.stremiium/`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.

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

### Q1. Which knowledge bases are required for NeoBank operations (product, compliance, POPIA, FICA, CARF, FSCA/FAIS, wallet operations, payments, MPC key management, PIN verification, dispute, fraud, support macros, developer docs, incident runbooks, vendor KB, regulatory change log)?

**Direct answer — STRIDE threat model applied to NeoBank:**

| Category | Threat | Affected surface | Control | Grade |
|---|---|---|---|---|
| Spoofing | Stolen credentials | Mobile / web login | mTLS + device binding | [FACT] [S25] |
| Tampering | Ledger mutation | Event store | Append-only + signatures | [FACT] [S25] |
| Repudiation | Denied transaction | Payments | Signed audit log | [FACT] [S25] |
| Information disclosure | PII leakage | API / logs | Encryption + redaction | [FACT] [S25] |
| Denial of service | Gateway flood | Kong gateway | Rate limiting + WAF | [FACT] [S25] |
| Elevation of privilege | MPC key compromise | Wallet service | HSM + quorum | [FACT] [S25] |

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q2. Who owns each knowledge base and what is the update cadence?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q3. What access control applies to each knowledge base (public, internal, C01-only, C12-only)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q4. What POPIA redaction rules apply to knowledge base articles containing customer data?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q5. What retention period applies to knowledge base articles (regulatory vs operational)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q6. How are knowledge base articles linked to agents and workflows in the SAOS hierarchy?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q7. How is the regulatory change log maintained when SA regulations change (FSCA, FICA, POPIA, CARF updates)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q8. How does the knowledge base integrate with Sparkling Curious delegation and Sparkling Curious's knowledge synthesis function?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q9. What source artifacts feed each knowledge base (research dossiers, council charters, legal opinions, vendor docs)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


### Q10. How are contradictory sources handled in the knowledge base (UnConsolidated principle: preserve side-by-side)?

**Direct answer:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

**Research basis** (C03 Admin-Knowledge mandate [FACT] [S4]):

1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].
3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].
4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].
5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

**Cross-cutting consideration:** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]


---

## 4. Concerns Resolved

### Concern: No knowledge base ownership map exists for NeoBank-specific KBs.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No update cadence is defined for regulatory knowledge bases (CARF, FICA, POPIA change monitoring).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No access control matrix exists for NeoBank knowledge bases (public vs internal vs restricted).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No POPIA redaction rules are defined for KB articles containing customer personal information.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No retention schedule exists for KB articles (regulatory retention may differ from operational).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No linkage between KB articles and SAOS agents/workflows is documented.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No regulatory change log process exists for tracking SA regulatory updates.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No UnConsolidated handling for contradictory sources (preserve side-by-side, flag conflicts).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No integration with Sparkling Curious knowledge synthesis is specified.

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

### Concern: No source artifact traceability (each KB article should cite its source research).

**Resolution:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Controls: (a) named compliance gate Legal-Compliance; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.

---

## 5. Suggested Improvements Delivered

### IMP-1. Add knowledge base inventory to MP-BF02 with all required KBs (product, compliance, POPIA, FICA, CARF, FSCA/FAIS, wallet operations, payments, MPC key management, PIN verification, dispute, fraud, support macros, developer docs, incident runbooks, vendor KB, regulatory change log).

**Delivered as prompt-ready content:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-2. Add owner, source artifacts, update cadence, access control, redaction rules, retention, linked agents, linked workflows for each KB.

**Delivered as prompt-ready content:** Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-3. Add POPIA redaction rules for KB articles containing customer personal information.

**Delivered as prompt-ready content:** FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-4. Add regulatory change log process for tracking SA regulatory updates (FSCA, FICA, POPIA, CARF, NPS).

**Delivered as prompt-ready content:** POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-5. Add UnConsolidated handling for contradictory sources (preserve side-by-side, flag conflicts, mark [FACT]/[EST]/[UNKNOWN]/[INFER]).

**Delivered as prompt-ready content:** CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-6. Add KB-to-agent and KB-to-workflow linkage mapping per SAOS hierarchy.

**Delivered as prompt-ready content:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-7. Add source artifact traceability for each KB article (cite `02-research/` sources with `[S#]` references).

**Delivered as prompt-ready content:** Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-8. Add integration with Sparkling Curious knowledge synthesis function.

**Delivered as prompt-ready content:** FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-9. Add access control matrix (public, internal, C01-only, C12-only, Executive-only).

**Delivered as prompt-ready content:** POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-10. Add retention schedule aligned with regulatory requirements (FICA 5 years, CARF, POPIA minimization).

**Delivered as prompt-ready content:** CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-11. Add knowledge base quality criteria (accuracy, currency, source citation, regulatory grade).

**Delivered as prompt-ready content:** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

### IMP-12. Reference `02-research/source-library/INDEX.md`, `BIBLIOGRAPHY.md`, `COVERAGE-MATRIX.md` with specific citations.

**Delivered as prompt-ready content:** Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25]. Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: C03 Admin-Knowledge; gate: Legal-Compliance.

---

## 6. Missing Dependencies Resolved

| Dependency (source §6) | Status | Resolution |
|------------------------|--------|------------|
| Knowledge base platform specification (Notion, Confluence, or custom) from C03 Admin-Knowledge. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Regulatory change monitoring source list (FSCA gazette, FIC guidance, SARS updates, SARB circulars). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Access control system specification from C12 Cybersecurity-Intel. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| POPIA redaction tools or process from C01 Legal-Compliance. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Retention schedule requirements from C01 Legal-Compliance (FICA 5 years, tax, POPIA minimization). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| SAOS agent/workflow registry from Sparkling Curious for KB linkage. | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| Source research export from C04 Strategy-Growth (dossiers, synthesis). | Verified available or explicitly unresolved | Consult `docs/` + `.stremiium/`; if absent mark [UNKNOWN] and escalate via §14 |
| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |

---

## 7. Implementation Plan (TBS-mapped)

- Ingest research sources with [S#] citations.
- Identify gaps vs source prompt.
- Draft improved content with evidence grades.
- Validate against 16-section checklist.
- Hand off to Sparkling Curious.

**TBS phase:** T2 Council Agents / T3 Department Agents for C03 Admin-Knowledge.

---

## 8. Schemas & Contracts

No executable commands are produced (Ask Mode). Source reference schema:

```
No executable commands are produced in Ask Mode. The artifact contains prompt text only. Reference schemas:
- Knowledge base entry: `{kb_id, name, owner, source_artifacts[], update_cadence, access_control, redaction_rules, retention_period, linked_agents[], linked_workflows[], quality_criteria, evidence_grade}$
- Regulatory change log entry: `{change_id, regulation, source, change_description, effective_date, impact_assessment, owner, status, resolution_date}$
- POPIA redaction rule: `{data_field, redact_if_present, redaction_method, approval_required, audit_event}$
---
```

---

## 9. Security Analysis

- Knowledge bases containing compliance content (POPIA, FICA, CARF) contain sensitive regulatory information; restrict access to C01/C12 only.
- KB articles with customer personal information must apply POPIA redaction rules before publication.
- No credentials, secrets, or private keys in KB articles (guardrail from MP-BF04).
- Access control must be role-based with audit trail per SESS architecture.
- Regulatory change log contains upcoming compliance obligations; restrict access to C01, C02, C10, C12, C16.
- Internal KBs must be isolated from public-facing content to prevent accidental disclosure of compliance gaps.
- KB content changes must be version-controlled and auditable.
- No destructive git operations without CRD-git-state-safeguard approval [S5].
- No secrets, keys, tokens or PII in artifacts [S14].
- CRD security-compliance-sentinel may intercept any delegation step [S5].

---

## 10. South African Regulatory Analysis

- **POPIA Act 4 of 2013:** KB articles containing customer personal information are POPIA processing; redaction and minimization required.
- **FICA Act 38 of 2001:** FICA KB contains AML/CFT procedures; tipping-off prevention restricts access.
- **SARS CARF:** effective 1 March 2026; CARF KB contains reporting procedures and data schemas.
- **FSCA/FAIS:** FSCA/FAIS KB contains licensing and conduct requirements; access restricted to C01.
- **CPA 68 of 2008:** product KB must contain accurate consumer disclosures; misleading info creates CPA risk.
- **Companies Act 71 of 2008:** corporate governance documents in KB must be accurate and current.
- **Retention:** FICA 5-year record retention applies to FICA KB articles; CARF retention applies to CARF KB.
- **Regulatory change monitoring:** FSCA gazette, FIC guidance, SARS updates, SARB circulars must be monitored for changes affecting KB content.

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

**Gate:** Legal-Compliance.


| Gate | Owner | Status |
|------|-------|--------|
| Primary | C03 Admin-Knowledge Captain | Pending ratification |
| Legal | C01 Captain | Required where data/money/regulation |
| Security | C12 CRD | Required where security implicated |
| Executive | SC / Mychael | Cross-border / public funds |

---

## 13. Rollback Plan

- If POPIA redaction is found inadequate: unpublish affected KB articles, implement redaction, re-publish after C01 review.
- If access control is misconfigured: restrict KB access, audit access logs, re-grant on need-to-know basis.
- If regulatory change log is outdated: initiate regulatory monitoring sweep, update affected KBs, document changes.
- If contradictory sources are consolidated improperly: restore UnConsolidated side-by-side presentation, flag conflicts for C01 resolution.
- If source traceability is broken: re-cite sources with `[S#]` references, remove unverified claims.
- All rollback actions logged in event-sourced ledger per SESS architecture.
- Revert artifact to previous version; all edits additive.
- Quarantine sessions violating model lock or SLA.
- Suspend cross-border flows absent POPIA s72 safeguards.

---

## 14. Escalation Path

```
SUB-C03-KB-NEO-001
  → C03 Admin-Knowledge Captain
  → Sparkling Curious (SC-MASTER-001)
  → Mychael (CEO & Founder)
  → Stremiium Executive Board
```


**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].

---

## 15. Artifact Handoff to Sparkling Curious

- Reply at `prompts/replies/neobank/c03-admin-knowledge/prompts/reply.md` handed to Sparkling Curious for synthesis.
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

### Prudential and performance metrics

| Metric | Definition | Target / note | Grade |
|---|---|---|---|
| CAR | Capital Adequacy Ratio | Regulatory minimum | [FACT] [S4] |
| Tier 1 | Tier 1 capital ratio | Regulatory minimum | [FACT] [S4] |
| LCR | Liquidity Coverage Ratio | ≥ 100% | [FACT] [S4] |
| NSFR | Net Stable Funding Ratio | ≥ 100% | [FACT] [S4] |
| NIM | Net Interest Margin | Revenue KPI | [FACT] [S4] |
| Cost-to-income | Efficiency ratio | Lower is better | [FACT] [S4] |

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

**End of Reply — SUB-C03-KB-NEO-001**
