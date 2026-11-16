# REA Business Toolkit

Custom tooling that turns the REA reverse-engineering engine (`/workspace/rea`) into
**business-question** primitives for the NeoBank intelligence programme.

> REA answers *"how is this software built?"*. This toolkit answers
> *"what does that tell us about the business?"* — no fabrication, Evidence only.

## Layout

```text
tools/rea-business-toolkit/
├── README.md
├── queries/
│   └── business-question-matrix.md      # question → REA chain → fallback source
└── scripts/
    ├── rea-run.mjs                       # thin wrapper: run REA, capture Evidence JSON
    ├── web-stack-recon.mjs              # website → tech/vendor stack
    ├── app-surface-recon.mjs            # APK/IPA → SDK & feature inventory
    ├── network-capability-map.mjs       # HAR/SAZ → API taxonomy
    └── evidence-pack.mjs                # build a portable, citable Evidence bundle
```

## Prerequisites

```bash
cd /workspace/rea && npm install --engine-strict=false && npm run build:cached
```

Native targets need a caller-supplied decompiler (Ghidra/Hopper/IDA); web targets need a
Chrome-family browser. Without them the toolkit degrades gracefully to **static** analysis and the
orchestrator's `WebFetch/WebSearch` fallback.

## Usage

```bash
node tools/rea-business-toolkit/scripts/rea-run.mjs doctor
node tools/rea-business-toolkit/scripts/web-stack-recon.mjs --url https://www.fnb.co.za --out research/banks/fnb/technology
```

## Design rules

1. **Analyst-question first** (REA `docs/tool-design.md`).
2. Preserve REA Evidence provenance; never upgrade an `[INF]` to `[OBS]`.
3. Emit markdown (human) + JSON (machine) for every run.
4. Fail closed: if a provider/browser is missing, say so — never invent results.
