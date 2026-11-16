# Execution Ledger — NeoBank ZA

**Owner:** Sparkling Curious (SC-MASTER-001) · **Maintained by:** C03 Admin-Knowledge
**Status:** Draft v1.0 (UnConsolidated) · **As-of:** 2026-10-16

> **Purpose.** The master index proving the programme's workstreams produced their deliverables. This ledger satisfies the Stremiium rule that **every prompt execution has a traceable entry** (see [`README.md`](./README.md) §2). Rows are **append-only**: corrections are new lines, never silent edits.

Columns: **Date | Workstream | Council | Task | Artifact | Status**. Status uses ✅ DONE / 🔄 IN PROGRESS / ⏳ PENDING.

---

## 1. Initial execution wave (W1–W10)

| Date | Workstream | Council | Task | Artifact | Status |
|---|---|---|---|---|---|
| 2026-10-16 | **W1** | C06, C11 | REA install, setup & capability verification | [`reverse-engineering/rea-analysis/`](../reverse-engineering/rea-analysis/) | ✅ DONE |
| 2026-10-16 | **W2** | C04 | SA traditional banking landscape research | [`research/sa-banking-landscape/`](../research/sa-banking-landscape/) | ✅ DONE |
| 2026-10-16 | **W3** | C04 | SA neobank / challenger research | [`research/neobank-competitors/`](../research/neobank-competitors/) | ✅ DONE |
| 2026-10-16 | **W4** | C01, C12 | SA regulatory & licensing pack | [`research/regulatory/`](../research/regulatory/) | ✅ DONE |
| 2026-10-16 | **W5** | C11, C12, C16 | REA reverse-engineering playbooks (banking targets) | [`reverse-engineering/playbooks/`](../reverse-engineering/playbooks/) | ✅ DONE |
| 2026-10-16 | **W6** | C11, C06 | REA custom-tool authoring guide | [`reverse-engineering/custom-tools/`](../reverse-engineering/custom-tools/) | ✅ DONE |
| 2026-10-16 | **W7** | C06, C11, C16, C15 | NeoBank platform architecture (UnConsolidated) | [`architecture/`](../architecture/) | ✅ DONE |
| 2026-10-16 | **W8** | C15, C14, C09, C07 | Customer / product / GTM design & council documentation | [`councils/`](../councils/) | ✅ DONE |
| 2026-10-16 | **W9** | C12, C01 | Security, fraud & compliance controls | [`architecture/security/`](../architecture/security/) | ✅ DONE |
| 2026-10-16 | **W10** | C03 | Skills / workflows / templates localisation | [`skills/`](../skills/), [`workflows/`](../workflows/), [`templates/`](../templates/) | ✅ DONE |

> **Note.** These rows record the **first execution wave** and are all marked ✅ DONE because their deliverable roots are populated. W0 (program governance) and W11 (synthesis & master index) are managed on [`PLAN.md`](../PLAN.md) §2 and are **not** part of this wave.

---

## 2. Detail — what each row produced

| Workstream | Deliverable root | Key products |
|---|---|---|
| W1 | `reverse-engineering/rea-analysis/` | REA setup & verification record; capability map (MCP tools, CLI commands) |
| W2 | `research/sa-banking-landscape/` | Incumbent bank profiles, sector structure |
| W3 | `research/neobank-competitors/` | Competitive matrix, digital-bank profiles, fintech landscape |
| W4 | `research/regulatory/` | Banking licensing, AML/FICA, POPIA, conduct (FAIS/NCA), payments/NPS, tax & governance, licensing roadmap |
| W5 | `reverse-engineering/playbooks/` | REA playbooks mapped to SA banking targets |
| W6 | `reverse-engineering/custom-tools/` | Custom-tool authoring guide |
| W7 | `architecture/` | System design, domain model, integrations, data, platform, security architecture |
| W8 | `councils/` | 16 council charters + full documentation sets |
| W9 | `architecture/security/` | Threat model, controls catalogue, secure SDLC, incident response, fraud/AML |
| W10 | `skills/`, `workflows/`, `templates/` | Localised skills, workflow routing, artefact templates |

---

## 3. How to append a row

When new work completes:

1. Add a row with the **actual date**, **workstream ID**, **owning council(s)**, a short **task**, the **artifact root** (relative link), and **status**.
2. Link the artifact root, not an individual file, unless the row is about a specific file.
3. If a figure is asserted in the artifact, ensure it carries its origin tag in the artifact itself — the ledger links, it does not restate claims.
4. Never edit a completed row's content; add an amendment row if something changes.

---

## 4. Evidence discipline

- Status reflects **physical workspace evidence** — a root is ✅ DONE only when it is actually populated ([`PLAN.md`](../PLAN.md) §0).
- Observe vs. infer vs. unknown is preserved; a "populated" root does not imply every figure within it is `[FACT]`.
- No secrets or live PII in ledger entries.

---

## 5. Open items / unknowns

- `[ASSUMPTION]` All rows reflect the wave executed as at 2026-10-16.
- `[UNKNOWN]` Retention policy for this ledger follows [`councils/c03-admin-knowledge/records-and-retention.md`](../councils/c03-admin-knowledge/records-and-retention.md).
- `[UNKNOWN]` Whether a machine-readable export (CSV/JSON) of the ledger is required.

_Codename `Project Umoya` is a working label only._
