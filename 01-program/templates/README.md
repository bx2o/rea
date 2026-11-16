# Project Umoya — Template Index

- **Owner:** C03 (knowledge) · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Related:** [`../skills/README.md`](../skills/README.md), [`../workflows/README.md`](../workflows/README.md), [`../councils/c03-admin-knowledge/knowledge-architecture.md`](../councils/c03-admin-knowledge/knowledge-architecture.md)

> Templates standardise outputs so that artifacts from any council are consistent, complete, cross-linkable and RAG-friendly. **Copy a template; do not edit it in place.**

---

## 1. How to use a template

1. Copy the template into the target location (usually a council folder or `artifacts/`).
2. Fill the header block (owner, version, date, parent, grounding).
3. Preserve the **evidence tags** — the templates assume observe/infer/unknown and `[ASSUMPTION]`/`[TARGET]`/`[UNVERIFIED]`/`[REG]` discipline.
4. Cross-link: **UP** to evidence, **ACROSS** to peer councils, **DOWN** to other templates.
5. Keep it granular (UnConsolidated principle) — if a filled template sprawls, split it.

---

## 2. Template index

| Template | Use for | File |
|---|---|---|
| **Decision Record (ADR)** | An architectural/product/process decision that must be explainable later | [`decision-record.md`](./decision-record.md) |
| **Research Report** | A research finding set with observe/infer/unknown + sources | [`research-report.md`](./research-report.md) |
| **Evidence Ledger** | An investigation's evidence trail (esp. REA outputs) | [`evidence-ledger.md`](./evidence-ledger.md) |
| **Feature Spec** | A product feature specification (problem → design → controls) | [`feature-spec.md`](./feature-spec.md) |
| **Risk Entry** | A single risk-register entry | [`risk-entry.md`](./risk-entry.md) |

---

## 3. Conventions shared by all templates

- **Header block:** owner · version · date · parent/related · grounding.
- **Evidence tags:** observe / infer / unknown, plus the program's bracket tags.
- **IDs:** use the ratified prefixes (`Cnn`, `AGT-`, `SUB-`, `CRD-`, `META-`, `EXEC`, `SPEC`, `SC`) where an ID is needed (`../councils/c03-admin-knowledge/knowledge-architecture.md` §4).
- **Cross-links:** relative markdown links.
- **No secrets/PII** in any filled template.
- **Status field:** `draft → proposed → ratified → superseded`.

---

## 4. Which template for which workflow stage

| Workflow stage | Likely template |
|---|---|
| Research/intake | research-report |
| Reverse-engineering | evidence-ledger |
| Design decision | decision-record |
| Product design | feature-spec |
| Risk assessment | risk-entry |
| Synthesis/delivery | (council README + linked templates) |

---

## 5. Open items / unknowns

- `[ASSUMPTION]` Additional templates (e.g. incident post-mortem, runbook) will be added as the program matures — each requires SC/C03 registration to avoid duplication.

---

_Codename `Project Umoya` is a working label only._
