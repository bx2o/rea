# Research Evidence — SUB-C12-CYBER-NEO-001

**Council:** C12 Cybersecurity-Intel · **Source prompt:** `prompts/neobank/security/guardrails-and-mpc/prompt.md`

## Evidence grades applied

| Grade | Meaning | Use in this reply |
|-------|---------|-------------------|
| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |
| [EST] | Reasoned estimate | Hardware specs, preserved archive material |
| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |
| [UNKNOWN] | Unresolved | Proprietary/server-side logic |

## Substantive evidence items

### EV-1. Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-2. Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-3. FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-4. POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-5. CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

## Four-bucket evidentiary rule

1. **Evidence (Seen):** Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].
2. **Recovered Graph (Synthesised):** Architecture/state models in `docs/architecture/` [S24][S25].
3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].
4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.

Full citation map: `prompts/replies/research/SOURCE-CITATION-MAP.md`.
