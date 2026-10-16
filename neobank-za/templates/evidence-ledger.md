# Evidence Ledger — `<investigation title>`

- **ID:** `<EVL-…>` · **Status:** open | closed
- **Owner:** `<council / agent>` · **Date:** `YYYY-MM-DD`
- **Target:** `<artifact / system investigated>`
- **Related:** `<links>` · **Methodology:** `../../skills/rea-reverse-engineering/SKILL.md`, `../../reverse-engineering/rea-analysis/methodology.md`

> Investigation/evidence ledger template. Designed for **REA-style** work but usable for any investigation. The ledger is **append-only**: corrections are new entries, never edits (`STATE`, `.stremiium/governance/state-architecture.md`).

---

## 1. Scope & boundaries

- Question(s) the investigation must answer.
- What is **in scope** / **out of scope**.
- Search boundaries (what was and was not searched).
- Authorization basis (only investigate targets you are permitted to).

## 2. Artifact identity

| Field | Value |
|---|---|
| Artifact | `<name / hash>` |
| Type | APK / IPA / ASAR / exe / HAR / pcap / SQLite / web |
| Version | |
| Session | `<REA session / binary_session id>` |

## 3. Evidence entries

| # | Evidence ID | Observation | Class | Source location | Confidence | Limitation |
|---|---|---|---|---|---|---|
| E1 | `ev-…` | | observed / inferred / unknown | file/offset/line/module | high/med/low | |

**Class rules (from `../../reverse-engineering/rea-analysis/methodology.md` §4):**
- **observed** — a raw fact recorded by a parser/decoder at a source location.
- **inferred** — a labelled derivation.
- **unknown** — not established.
- **Never** claim static analysis observed execution.

## 4. Corroboration

| Claim | Evidence type required | Evidence used | Result |
|---|---|---|---|
| | static / runtime / comparison | `ev-…` | confirmed / partial / unresolved |

> A matching pattern is a **hypothesis**, not causality. Runtime observation is required for execution claims.

## 5. Residual unknowns ledger

| # | Unknown | Supporting evidence | Contradicting evidence | Authority/env needed |
|---|---|---|---|---|
| U1 | | `ev-…` | `ev-…` | |

## 6. Finding summary

- **Answered:** …
- **Partially answered:** …
- **Unresolved:** …

> Do not mark the investigation complete while required questions remain open.

## 7. Session closure

- [ ] Evidence bundle exported (if retained source must survive).
- [ ] Native session closed (`close_binary`).
- [ ] Ledger archived (C03).

## 8. Cross-links

- UP: `<artifact / capture>` · ACROSS: `<playbook>` · DOWN: `<research-report / decision-record>`
