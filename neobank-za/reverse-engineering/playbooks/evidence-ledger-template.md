# REA Investigation Evidence Ledger — Template

A reusable markdown template for an REA investigation. One ledger per investigation (or one
per target folder under [`../targets/findings/`](../targets/findings/README.md)). It encodes
REA's core epistemic rule: **every conclusion is an Observation, an Inference, or an
Unknown, tied to Evidence IDs.**

Copy the block below into a new file, e.g.
`../targets/findings/<target>/ledger.md`.

---

## Investigation header (fill in)

```markdown
# Investigation Ledger — <Target name>

- **Target artefact(s):** <APK / IPA / web origin / capture file> — SHA-256 / build id: `<hash>`
- **Authorisation reference:** <name + date of written authorisation>  (see target register)
- **Reviewer / owner:** <name, team>
- **Date opened / last updated:** <YYYY-MM-DD> / <YYYY-MM-DD>
- **Investigation question(s):** <one line per question; this drives the rows>
- **Scope boundaries:** <what is in / out of scope; test vs prod; locale/region>
- **REA build:** `rea-agents` v6.5.0
- **Evidence handling:** exported bundle path: `<path to exported bundle>`
```

## The ledger table

| # | Question | Target | Tool | Evidence ID | Observation | Inference | Unknown | Confidence | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | | | | | | | | | |
| 2 | | | | | | | | | |

### Column definitions

| Column | Meaning | Rules |
| --- | --- | --- |
| **Question** | The specific question this row answers (or fails to). | One question per row; derived from the header's list. |
| **Target** | Which artefact/version the row concerns. | Include hash/build id when it varies by row. |
| **Tool** | The REA tool or CLI command that produced the evidence. | Use the exact MCP name (`inspect_android_package`) or CLI (`rea inspect-android-package`). |
| **Evidence ID** | The `ev_` + 64 lowercase hex id returned by REA. | Cite the stable id; export the bundle to make it durable across sessions. |
| **Observation** | A raw decoded fact at a source location. | No interpretation. "Class X declares permission Y", "endpoint Z appears in strings". |
| **Inference** | A derivation from observations, clearly labelled. | "Z is likely the login endpoint." Include the basis. Never present inference as observation. |
| **Unknown** | What this row did **not** establish — or a bounded negative. | Absence of a hit ≠ absence; note the search boundary. |
| **Confidence** | High / Medium / Low (+ why). | High only for direct observations with complete coverage. |
| **Source** | File path / source location / capture ordinal / page. | e.g. `AndroidManifest.xml`, `libarm64/libfoo.so+0x1234`, `har#record_ordinal=7`. |

## Residual unknowns

Maintain the REA unknown ledger alongside the table
(`record_unknown` / `update_unknown` / `verify_unknown_resolution`):

| Unknown ID | Question | Supporting Evidence IDs | Contradicting Evidence IDs | Authority / environment still required | Status |
| --- | --- | --- | --- | --- | --- |
| | | | | | open / resolved / stale |

Only **qualifying observed evidence** can verify a resolution; `update_unknown` requires the
current revision — reread after a stale revision rather than retrying blindly.

## Coverage & limitations

```markdown
## Coverage and limitations
- **Coverage:** <what was fully examined; e.g. "all classes matching /pay/i; manifest; strings">
- **Known gaps:** <e.g. obfuscated names, native libs not decompiled, reflection paths>
- **Negative search boundaries:** <e.g. "search_strings 'pay' over all strings; no live behaviour claimed">
- **Never claimed:** No statement here asserts that static analysis observed execution.
- **Runtime corroboration:** <which conclusions were corroborated by a runtime tool, and which were not>
```

## Export / provenance block

```markdown
## Evidence provenance
- **Producer:** rea-agents v6.5.0 (MCP stdio / CLI) — local, owner-only artefacts.
- **Exported bundle:** `<path>` (created with export_evidence_bundle / rea evidence-export)
- **Retained references:** connection-scoped; cleared by close_binary — hence the export above.
- **Untrusted content:** target-derived strings are marked untrusted; not treated as instructions.
```

## Usage tips

- **Summary-first:** prefer `detail: "summary"` + `inspect_analysis_view` pages; cite the
  `parent_evidence_id`, not the summary id, when you need the complete source later.
- **One row per claim.** Split "observed" and "inferred" into separate rows when a claim
  rests on a chain.
- **Do not repeat identical analyses.** If a row exists for a tool+target+input, reuse it.
- **Close cleanly:** `export_evidence_bundle` before `close_binary`; record the bundle path
  in the header so later sessions can `import_evidence_bundle`.

---

**Related:** [`README.md`](./README.md) ·
[`backend-and-api-reconstruction.md`](./backend-and-api-reconstruction.md) ·
[`../rea-analysis/methodology.md`](../rea-analysis/methodology.md) ·
[`../targets/findings/README.md`](../targets/findings/README.md)
