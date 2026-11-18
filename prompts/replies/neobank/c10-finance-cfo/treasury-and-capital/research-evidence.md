# Research Evidence — SUB-C10-FIN-NEO-003

**Council:** C10 Finance-CFO · **Source prompt:** `prompts/neobank/finance/treasury-and-capital/prompt.md`

## Evidence grades applied

| Grade | Meaning | Use in this reply |
|-------|---------|-------------------|
| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |
| [EST] | Reasoned estimate | Hardware specs, preserved archive material |
| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |
| [UNKNOWN] | Unresolved | Proprietary/server-side logic |

## Substantive evidence items

### EV-1. C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-2. CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-3. Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

## Four-bucket evidentiary rule

1. **Evidence (Seen):** C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].
2. **Recovered Graph (Synthesised):** Architecture/state models in `docs/architecture/` [S24][S25].
3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].
4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.

Full citation map: `prompts/replies/research/SOURCE-CITATION-MAP.md`.
