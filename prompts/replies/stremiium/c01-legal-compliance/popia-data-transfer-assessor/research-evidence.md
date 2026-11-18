# Research Evidence — C01-POPIA-DATA-TRANSFER-ASSESSOR

**Council:** C01 Legal-Compliance · **Source prompt:** `prompts/stremiium/c01-legal-compliance/popia-data-transfer-assessor/prompt.md`

## Evidence grades applied

| Grade | Meaning | Use in this reply |
|-------|---------|-------------------|
| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |
| [EST] | Reasoned estimate | Hardware specs, preserved archive material |
| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |
| [UNKNOWN] | Unresolved | Proprietary/server-side logic |

## Substantive evidence items

### EV-1. POPIA Act 4 of 2013 is fully in force; the Information Regulator actively enforces with fines up to R10m and criminal exposure up to 10 years [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-2. Eight lawful-processing conditions (Chapter 3): accountability; processing limitation; purpose specification; further-processing limitation; information quality; openness; security safeguards; data-subject participation [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-3. Information Officer must be registered under s55; s57 prior authorisation applies to unique-identifier cross-source linking, credit reporting and criminal-behaviour processing; s58(2) mechanism applicable since 1 Feb 2022 [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-4. Special personal information (biometrics, health, etc.) requires consent or a listed ground — directly relevant to NeoBank biometric KYC [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-5. Cross-border transfers under s72 require one of seven bases; there is no formal adequacy list — the test is per-recipient (BCRs, binding agreements, SCCs) [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-6. Breach notification to Regulator and data subjects as soon as reasonably possible; PAIA Manual required, 30-day response, annual report 1 Apr–30 Jun [S15].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

## Four-bucket evidentiary rule

1. **Evidence (Seen):** POPIA Act 4 of 2013 is fully in force; the Information Regulator actively enforces with fines up to R10m and criminal exposure up to 10 years [S15].
2. **Recovered Graph (Synthesised):** Architecture/state models in `docs/architecture/` [S24][S25].
3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].
4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.

Full citation map: `prompts/replies/research/SOURCE-CITATION-MAP.md`.
