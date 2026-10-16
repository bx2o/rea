---
doc_type: architecture_contract
version: 1.0
owner: SC-MASTER-001
---

# Data-Model & File Contracts (UnConsolidated)

Every research artifact in this workspace obeys these contracts so files remain **self-contained**
(UnConsolidated) and machine-indexable.

## 1. File Naming

```text
<NN>-<slug>.md            # e.g. 03-marketing-campaigns.md
<slug>.csv                # tabular data (metrics, vendors, pricing)
<slug>.json               # structured/reverse-engineered objects
<slug>.md                 # narrative
```

## 2. Required Front-Matter (markdown)

```yaml
---
bank: "FNB"                         # or competitor/entity name
council: "C09"                      # owning council (C01..C16)
department: "marketing"
status: "verified | partial | unverified"
confidence: "high | medium | low"
sources:
  - "https://..."
last_updated: "2026-10-16"
---
```

## 3. Epistemic Tags (inline)

| Tag | Meaning |
|---|---|
| `[OBS]` | Direct observation from a source |
| `[DER]` | Derived (computed/aggregated from observations) |
| `[INF]` | Inference (analyst reasoning; not directly stated) |
| `[EST]` | Estimate |
| `[UNK]` | Unknown / not publicly available |
| `[UNVERIFIED]` | Claim found but not corroborated |

## 4. Source Citation

Use markdown links. Every non-obvious claim cites ≥1 source. The `source-library/` maintains the
master index (`INDEX.md`) and per-source notes (`sources/SRC-XXXX.md`).

## 5. Council Output Contract (STEP 5/6 of SAOS routing)

Each council pass writes:
- its artifacts, plus
- a `governance/execution/<date>-<council>-<slug>.md` ledger entry
  `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT, RESULT, EVIDENCE}`.

## 6. No-Fabrication Gate

A file marked `status: verified` must have ≥2 independent sources for all `[OBS]`/`[DER]` claims.
Single-source claims are `partial`. Analyst reasoning is always `[INF]`.
