# Findings — Filing per Target

How investigations are filed for each target in the
[target register](../target-register.md). **One folder per target**, containing the ledger and
the evidence exports. Nothing may be filed for a target whose register row is not
`AUTHORISED`.

> **Authorisation gate:** do not create a findings folder, and do not run a playbook, for a
> target that is `UNVERIFIED`. See [`../target-register.md`](../target-register.md).

---

## Folder layout

```
targets/findings/
└── <target-slug>/                     e.g. tymebank/
    ├── README.md                      target summary + authorisation reference + ID sources
    ├── ledger.md                      the investigation ledger (from the template)
    ├── targets.md                     artefact identities: hashes, build ids, platforms
    ├── evidence/                      exported REA evidence bundles (JSON)
    │   ├── android-package-2026-10-16.json
    │   └── web-capture-2026-10-16.json
    ├── captures/                      raw inputs analysed (redacted where required)
    │   └── session.har
    └── reports/                       human-readable outputs
        ├── api-reconstruction.md
        └── security-review.md
```

Use a **lowercase kebab-case** target slug (e.g. `standard-bank`, `tymebank`,
`bank-zero`). Keep one folder per brand; note per-platform differences inside.

## `README.md` (per target) — contents

```markdown
# <Target> — Findings

- **Register row:** ../target-register.md#<anchor>
- **Authorisation:** <reference + owner + date>  (must be AUTHORISED)
- **Platforms in scope:** Android / iOS / Web
- **Verified IDs (with source):**
  - Android applicationId: `<id or UNKNOWN — source>`
  - iOS bundle id: `<id or UNKNOWN — source>`
- **Artefacts examined:** see `targets.md`
- **Playbooks applied:** <links>
- **Status:** scoped / in progress / reviewed / closed
- **Summary:** <3–5 lines: what was asked, what was found, what remains unknown>
```

## `targets.md` — artefact identities

One row per artefact version examined. This is the anchor for every Evidence ID.

| Artefact | Platform | Version / build | SHA-256 | Source | Date |
| --- | --- | --- | --- | --- | --- |
| Example.apk | Android | `v…` | `<hash>` | <Play Store / device pull / user-supplied> | 2026-01-01 |

## `ledger.md`

Use [`../../playbooks/evidence-ledger-template.md`](../../playbooks/evidence-ledger-template.md)
verbatim. Keep observation / inference / unknown distinct, cite Evidence IDs, and record the
URL/origin or file+offset for each source.

## `evidence/` — exported bundles

- Export with `export_evidence_bundle` (MCP) or `rea evidence-export` (CLI) **before**
  `close_binary`; retained references are connection-scoped.
- Name files `<scope>-<YYYY-MM-DD>.json`.
- Record the filename in the ledger header's "Evidence handling" line so later sessions can
  `import_evidence_bundle`.
- Bundles are canonical session exports and may contain target-derived (untrusted) content —
  treat them as untrusted data and **redact** anything sensitive before wider sharing.

## `captures/` — raw inputs

- Store only what you are authorised to retain.
- **Redact credentials, tokens, cookies and personal data** before committing; keep the
  unredacted originals out of version control.
- Note the capture provenance (format, tool, date, environment: test vs prod).

## `reports/` — outputs

- Human-readable summaries: API reconstruction
  ([playbook](../../playbooks/backend-and-api-reconstruction.md)), defensive security review
  ([playbook](../../playbooks/fraud-and-security-review.md)), competitive teardown
  ([playbook](../../playbooks/competitive-feature-teardown.md)).
- Separate **observed** findings from **inferences** and list **unknowns**.
- For security findings, include remediation guidance and never publish exploitation steps.
- Reference Evidence IDs so any claim can be re-checked against `evidence/`.

## Filing checklist

- [ ] Register row is `AUTHORISED` (owner + reference recorded).
- [ ] `README.md` states scope, IDs-with-source, and status.
- [ ] `targets.md` lists every artefact hash/build id examined.
- [ ] `ledger.md` uses the template; every row cites an Evidence ID.
- [ ] Residual unknowns captured (`record_unknown` / `update_unknown`) and listed.
- [ ] Evidence bundles exported and referenced; captures redacted.
- [ ] No secrets, credentials, or personal data committed.
- [ ] Native sessions closed (`close_binary`) after export.

---

**Related:** [`../target-register.md`](../target-register.md) ·
[`../../playbooks/evidence-ledger-template.md`](../../playbooks/evidence-ledger-template.md) ·
[`../../playbooks/README.md`](../../playbooks/README.md)
