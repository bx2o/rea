# /workspace — Index

This workspace contains three things:

| Path | What it is |
|---|---|
| [`rea/`](file:///workspace/rea) | `morluto/rea` (Reverse Engineer Anything) — cloned, installed, built, verified. v6.5.0, 207 MCP tools + 153 CLI commands. |
| [`_stremiium/`](file:///workspace/_stremiium) | The extracted Stremiium Agent OS from `stremiium.zip` — governance rules, council agents, skills, workflows. Used as the session's operating instructions. |
| [`neobank-za/`](file:///workspace/neobank-za/README.md) | **The main deliverable.** UnConsolidated project architecture for launching a NeoBank in South Africa: REA analysis, SA banking/neobank/regulatory research, platform architecture, security, councils, governance. |

## Start here

- Master plan → [neobank-za/PLAN.md](file:///workspace/neobank-za/PLAN.md)
- Master index → [neobank-za/README.md](file:///workspace/neobank-za/README.md)
- REA setup & verification → [neobank-za/reverse-engineering/rea-analysis/setup-and-verification.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/setup-and-verification.md)
- REA worked demonstration (real evidence) → [neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md](file:///workspace/neobank-za/reverse-engineering/rea-analysis/demonstration-bankapp.md)

## REA quickstart (from this workspace)

```bash
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 24.18.0
cd /workspace/rea
node scripts/rea.mjs --help
node scripts/rea.mjs doctor --json
node scripts/rea.mjs analyze-javascript-application <path> --json
```

`stremiium.zip` (original archive) is retained at the workspace root.
