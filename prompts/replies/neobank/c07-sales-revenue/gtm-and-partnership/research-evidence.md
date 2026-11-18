# Research Evidence — SUB-C07-SALES-NEO-001

**Council:** C07 Sales-Revenue · **Source prompt:** `prompts/neobank/sales/gtm-and-partnership/prompt.md`

## Evidence grades applied

| Grade | Meaning | Use in this reply |
|-------|---------|-------------------|
| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |
| [EST] | Reasoned estimate | Hardware specs, preserved archive material |
| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |
| [UNKNOWN] | Unresolved | Proprietary/server-side logic |

## Substantive evidence items

### EV-1. Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-2. NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-3. Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-4. Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-5. Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

## Four-bucket evidentiary rule

1. **Evidence (Seen):** Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].
2. **Recovered Graph (Synthesised):** Architecture/state models in `docs/architecture/` [S24][S25].
3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].
4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.

Full citation map: `prompts/replies/research/SOURCE-CITATION-MAP.md`.
