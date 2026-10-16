# Authoring a New REA Tool — Step-by-Step Guide

How to add a first-class MCP tool **inside the REA source** at `/workspace/rea`, so it is
exposed on both the MCP surface and the `rea` CLI with a shared Evidence contract. This
guide uses **real file paths** from the v6.5.0 checkout.

> **Read first:** `/workspace/rea/docs/tool-design.md` (the canonical rules) and
> `/workspace/rea/AGENTS.md` (repo guidelines). The layered architecture is in
> [`../rea-analysis/architecture.md`](../rea-analysis/architecture.md).

---

## Step 0 — Start from the analyst question, not the code

`docs/tool-design.md` opens with: *"Design around the analyst question. Inspect the current
canonical contracts, provider capabilities, and nearest existing tool before changing the
surface."*

1. Write the analyst question ("Which endpoints does this APK reference, and which are
   observed in captures?").
2. Search for a **nearest existing tool** (`toolContract(name)` over
   `src/contracts/toolContracts.ts`, and the catalog in [`../rea-analysis/tool-catalog.md`](../rea-analysis/tool-catalog.md)).
3. **Extend if intent + result contract match**; only add a new tool for a distinct outcome
   or materially different authority.
4. Confirm you need a tool at all — most needs are met by composing existing tools
   (see [`README.md`](./README.md)).

Decide the **tool shape** (`docs/tool-design.md`): `inspect` / `search`·`list` / `trace` /
`compare` / `workflow` / `observe`·`capture`. Name it for the action + object the caller
reasons about.

## Step 1 — Domain schemas (pure, side-effect-free)

**Path:** `src/domain/<area>/<something>.ts`

Define the Zod **input** and **output** schemas here, provider-neutral and free of engine
code. Mirror an existing family. Examples to copy from:

- Android: `src/domain/android/androidAnalysis.ts` — `androidInputSchemas`, a per-operation
  request discriminated union (`androidRequestSchema`), result schemas, and an
  `AndroidOperation` type + `*_ANALYSIS_OPERATIONS` list.
- Flutter: `src/domain/flutter/flutterBuildAnalysis.ts`.
- Artifact: `src/domain/artifactIntegrityPolicy.ts`, `src/domain/apple/*`.

Prefer `z.strictObject` with explicit target identity and required fields. Preserve caller
choices; remove ignored options (`docs/tool-design.md`, "Define the contract"). Use
`src/domain/fixedTupleSchema.ts` for fixed tuples in public contracts (Draft 2020-12 `items`
requirement).

## Step 2 — Contract (caller-visible surface)

**Path:** `src/contracts/<family>/<name>ToolContracts.ts` (or an existing family file).

Write a `ToolContract` entry (see [`tool-contract-template.md`](./tool-contract-template.md)).
It must carry: `name`, `description`, `kind`, `inputSchema`, `outputSchema`, and — via the
`toolContractMetadata(name)` spread — `effects`, `annotations`, `returnsTargetContent`.
Reuse the helpers:

```ts
import { z } from "zod";
import type { ToolContract } from "../toolContractTypes.js";
import { evidenceResultOf } from "../toolOutputSchemaPrimitives.js";
import { toolContractMetadata } from "../toolEffects.js";
```

Then **register the contract in the ordered inventory**

**Path:** `src/contracts/toolContracts.ts` — import your `*_TOOL_CONTRACTS` array and spread
it into `TOOL_CONTRACTS`. Catalog order is the public inventory; it must never select an
operation (`AGENTS.md`).

### 2a — Audit the effects (required, fail-closed)

**Path:** `src/contracts/toolEffects.ts`

Add an entry to `TOOL_EFFECTS` for your tool name. `toolContractMetadata(name)` **throws
`Missing effect audit for <name>`** if you forget — that is intentional. Declare `mutatesTarget`,
`mutatesSession`, `writesFilesystem`, `launchesProcess`, `accessesNetwork`, `changesUiState`,
`mayDiscardData`, `executesForeignCode`, `mutatesDevice`, `idempotent` truthfully. Annotations
are derived from effects; do not hand-write them.

Also decide `TARGET_CONTENT_FREE_TOOLS`: a **new tool is untrusted until audited into that
set** (`toolContractMetadata` defaults `returnsTargetContent: true`). Only add your name if
its results can never carry target-derived text.

### 2b — The `analysisOperation` identifier

The generated catalog [`../rea-analysis/mcp-tool-names.tsv`](../rea-analysis/mcp-tool-names.tsv)
has an `analysisOperation` column. In source this is the **provider-dispatch operation name**,
expressed as the operation literal in your domain request discriminated union (e.g.
`AndroidOperation`) and, where the family exposes one, the `*_ANALYSIS_OPERATIONS` array
(`src/contracts/artifactToolContracts.ts` exports `ARTIFACT_ANALYSIS_OPERATIONS`). Add your
operation to that union/list so the producer can dispatch it. Application-layer and session
tools (e.g. `inspect_analysis_view`) leave the column empty.

## Step 3 — Application workflow (shared CLI/MCP logic)

**Path:** `src/application/<area>/<Name>Service.ts` (+ a `Port` interface).

Put the *shared* workflow here; keep engine protocols out of this layer (`AGENTS.md`). Follow
the established pattern seen in `src/application/android/AndroidAnalysisService.ts`,
`src/application/flutter/FlutterBuildAnalysisService.ts`, and the `*Port.ts` interfaces next
to them. Return `Result`-style values (tagged errors) and preserve partial facts
(`AGENTS.md`, "Parse unknown boundary values and model expected failures with the tagged
error algebra and `Result`").

If you join multiple existing evidences (e.g. joins, ledgers), model it as a **workflow**
tool that calls the existing producers rather than re-implementing them.

## Step 4 — Register the tool (MCP adapter)

**Path:** `src/server/register<Family>Tools.ts` (e.g. `registerAndroidTools.ts`,
`registerFlutterTools.ts`). Create one if your family is new; otherwise extend the existing
registrar. The pattern:

```ts
import { toolContract } from "../contracts/toolContracts.js";
import { createContractToolHandler } from "./contractToolHandler.js";
import { toolRegistrationOptions } from "./toolRegistrationOptions.js";

const contract = toolContract("my_new_tool");
server.registerTool(
  contract.name,
  toolRegistrationOptions(contract),
  handler(contract),
);
```

Then **wire it in the composition root**:

**Path:** `src/server/createServer.ts` — import your registrar and call it alongside the
others (see the existing `registerAndroidTools(...)`, `registerFlutterTools(...)` calls).
Gated families add their env switch in `installSessionToolAvailability` in the same file
(see [`../rea-analysis/architecture.md`](../rea-analysis/architecture.md) §9).

## Step 5 — Wire the CLI name

**Path:** `src/cliCommandNames.ts`

- Add a kebab-case entry to `CLI_COMMANDS` (e.g. `myNewTool: "my-new-tool"`).
- If the CLI command should map to a *different* MCP operation, add to
  `CLI_COMMAND_TOOL_ALIASES`.
- If your MCP tool has **no** dedicated CLI command, add the snake_case name to
  `MCP_TOOLS_WITHOUT_DEDICATED_CLI`.

The CLI and MCP use the same application workflows, so a single contract serves both
(`docs/cli.md`).

## Step 6 — Examples and docs

- Add validated `examples` to the contract (`ToolExample[]`) — they are checked by
  `src/contracts/advertisedInputExamples.ts` / its test.
- Update the family doc under `/workspace/rea/docs/` (e.g. `docs/android-analysis.md`).
- If you changed the advertised surface, regenerate generated artifacts rather than editing
  them (`docs/public/product-catalog.json` and `skills/` are **ignored outputs**;
  `AGENTS.md` says edit source contracts, then regenerate).

## Step 7 — Validate

Run the checks REA documents (`AGENTS.md`, "Development"):

```bash
cd /workspace/rea

# Fast cached typecheck + lint + pre-push check
npm run check:fast

# Exact tests for the paths you touched (with required artifacts)
npm run test:focused -- src/application/<area>/<Name>Service.test.ts
npm run test:focused -- src/contracts/<family>/<name>ToolContracts.test.ts

# Source tests without building (during iteration)
npm run test:local -- src/application/<area>/

# Validate generated documentation / catalog consistency
npm run docs:check

# Full local gate (optional; broad changes or CI diagnosis)
npm run check:pr
```

Follow `docs/testing.md` for the testing decision order: **prefer real public CLI/MCP
workflows, then production-boundary integration, then producer goldens.** Report unverified
coverage explicitly — simulated providers do not establish real-provider behaviour
(`AGENTS.md`).

## Design rules to obey (checklist)

From `docs/tool-design.md` and `AGENTS.md`:

- [ ] **Smallest sufficient answer** with necessary provenance, coverage and limitations;
      return useful Evidence inline and keep complete source accessible.
- [ ] **Evidence provenance**: separate observed / derived / inferred; unresolved edges and
      partial provider facts preserved; missing coverage is **unknown**, not absence.
- [ ] **Preserve caller choices**: meaningful target/action/capture/output choices kept;
      ignored options removed.
- [ ] **Own the lifecycle**: keep target admission, provider readiness, active work, observed
      exit, and resource release separate; release only owned resources.
- [ ] **Fail closed**: don't integrate while scope/authority/side-effect questions are open;
      contradictions and missing owners fail closed.
- [ ] **Truthful effects**: declare process/filesystem/network/UI/mutation effects; limits
      only for real format/protocol/authority/resource constraints.
- [ ] **Provider-neutral names/semantics**; report exact coverage per provider.
- [ ] **Measure before choosing a budget**; enforce it before the costly step.
- [ ] Update contracts, output schemas, examples, generated artifacts, and docs **together**.

## Reference: real files this guide touches

| Purpose | Path |
| --- | --- |
| Design rules | `/workspace/rea/docs/tool-design.md` |
| Repo guidelines | `/workspace/rea/AGENTS.md` |
| Contract type | `/workspace/rea/src/contracts/toolContractTypes.ts` |
| Ordered inventory | `/workspace/rea/src/contracts/toolContracts.ts` |
| Effects audit | `/workspace/rea/src/contracts/toolEffects.ts` |
| Contract helper | `/workspace/rea/src/contracts/toolContractHelpers.ts` |
| Example family (contract) | `/workspace/rea/src/contracts/android/androidToolContracts.ts` |
| Example family (domain) | `/workspace/rea/src/domain/android/androidAnalysis.ts` |
| Example registrar | `/workspace/rea/src/server/registerAndroidTools.ts` |
| Composition root | `/workspace/rea/src/server/createServer.ts` |
| CLI names | `/workspace/rea/src/cliCommandNames.ts` |
| Registration options | `/workspace/rea/src/server/toolRegistrationOptions.ts` |
| Testing rules | `/workspace/rea/docs/testing.md` |
| MCP contracts doc | `/workspace/rea/docs/mcp-contracts.md` |

---

**Related:** [`tool-contract-template.md`](./tool-contract-template.md) ·
[`example-banking-tools.md`](./example-banking-tools.md) ·
[`README.md`](./README.md)
