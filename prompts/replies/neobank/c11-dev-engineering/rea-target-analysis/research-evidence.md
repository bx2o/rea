# Research Evidence — SUB-C11-DEV-NEO-003

**Council:** C11 Dev-Engineering · **Source prompt:** `prompts/neobank/dev-engineering/rea-target-analysis/prompt.md`

## Evidence grades applied

| Grade | Meaning | Use in this reply |
|-------|---------|-------------------|
| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |
| [EST] | Reasoned estimate | Hardware specs, preserved archive material |
| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |
| [UNKNOWN] | Unresolved | Proprietary/server-side logic |

## Substantive evidence items

### EV-1. REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-2. Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-3. Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

### EV-4. Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].

- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.
- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.
- **Extraction step (if unresolved):** REA artefact extraction per `REA-RESEARCH-LOG.md`.

## Four-bucket evidentiary rule

1. **Evidence (Seen):** REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].
2. **Recovered Graph (Synthesised):** Architecture/state models in `docs/architecture/` [S24][S25].
3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].
4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.

Full citation map: `prompts/replies/research/SOURCE-CITATION-MAP.md`.
