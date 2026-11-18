# Prompts

All agent prompts are split into per-prompt folders. Each prompt folder contains exactly one `prompt.md` file. No combined prompt files exist.

## Structure

```
prompts/
├── neobank/              # NeoBank program prompts (16 departments, 37 prompts)
│   └── <department>/
│       └── <prompt-name>/
│           └── prompt.md
└── stremiium/            # Stremiium agent prompts (16 councils + orchestration, ~165 agents)
    └── <council>/
        └── <agent-name>/
            └── prompt.md
```

## Naming

- Prompt folders use kebab-case names derived from the original prompt filename
- Each `prompt.md` is the canonical prompt source for its agent
- Matching execution results live at `execution/results/<scope>/<prompt-name>/execution-result.md`

## Model lock

All prompts use model `auto` (kilo-auto/free).