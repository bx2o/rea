# 04-engineering — REA Engine, Toolkit & Reverse Engineering

Engineering substrate for REA-driven analysis and NeoBank tooling.

| Path | Purpose |
|---|---|
| [`rea-toolkit/rea-business-toolkit/`](rea-toolkit/rea-business-toolkit/) | Business-question tooling over REA (scripts, queries, evidence outputs). Set `REA_ROOT=/workspace/app/rea` (or repo-root `rea/`). |
| [`reverse-engineering/`](reverse-engineering/) | NeoBank ZA REA analysis, playbooks, custom tools, and targets (from `neobank-za/reverse-engineering/`) |
| [`../rea/`](../rea/) | **morluto/rea engine (v6.5.0)** — kept at repo root for vendor/test path compatibility. Present but **not installed** (`node_modules` absent); T1.1 doctor contract: `01-program/tbs/T1-infrastructure-setup/implementation/rea-doctor-contract.md`. |

> Compatibility note: `rea/` remains at root (not moved into this zone) to avoid breaking REA’s internal paths and historical evidence records. Treat this zone as the engineering index; the engine lives at `/workspace/app/rea`.