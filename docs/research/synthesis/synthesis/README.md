# 02-research — Synthesis

Cross-entity derived analysis, separated from the primary per-entity dossiers under `dossiers/`.

| Path | Purpose |
|---|---|
| [`departments/`](departments/) | Cross-bank department synthesis: `customer/`, `marketing/`, `partnerships/`, `people/`, `security/` |
| [`cross-cutting/`](cross-cutting/) | Cross-cutting research: `add-on/` (pricing matrix, payments rails), `keywords/`, `macro/`, `papers/`, `regulation/` |

**Rule:** synthesis files are *derived* from `dossiers/<domain>/<entity>/`. Where a synthesis claim
conflicts with a dossier's `evidence-ledger.json`, the dossier wins.