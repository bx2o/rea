# Execution Results

All subagent execution results, organized by council into per-prompt folders.

## Structure

```
execution/
├── EXECUTION_LEDGER.md          # Master tracking ledger for all 37 executions
├── results/
│   └── <council>/
│       └── <prompt-name>/
│           └── execution-result.md
└── code-outputs/                # Generated code artefacts
    ├── contracts/
    ├── api-specs/
    ├── configs/
    ├── scripts/
    └── specs/
```

Each execution result corresponds to a prompt at:

```
prompts/<scope>/<department-or-council>/<prompt-name>/prompt.md
```

## Model lock

`auto` (kilo-auto/free)