# REA Tool Contract — Skeleton Template

A TypeScript skeleton for a new REA tool, consistent with the real conventions in
`/workspace/rea/src/contracts/**`. Fill in the `<ANGLE_BRACKET>` placeholders. This mirrors
`src/contracts/android/androidToolContracts.ts` and
`src/contracts/flutter/flutterToolContracts.ts`, which are the canonical small examples.

See [`authoring-guide.md`](./authoring-guide.md) for the surrounding steps (domain schemas,
application service, registrar, CLI name, effects audit, validation).

---

## 1. Domain input/output schemas

**File:** `src/domain/<area>/<area>Analysis.ts`

```ts
import { z } from "zod";
import { localPathStringSchema } from "../localPath.js";

/** One operation's caller intent: strict, explicit target identity. */
export const <AREA>_INPUT_SCHEMAS = {
  inspect_<thing>: z.strictObject({
    path: localPathStringSchema.describe("Local target path; never executed"),
    // Keep meaningful caller choices; remove ignored options.
    // detail is optional and preserves the complete result when omitted.
  }),
} as const;

/** Supported provider operations for this family. */
export type <Area>Operation = keyof typeof <AREA>_INPUT_SCHEMAS;

/** Result payload for inspect_<thing> (evidence wraps this at the contract layer). */
export const <THING>_RESULT_SCHEMA = z.strictObject({
  // Observed facts with source locations…
  // Preserve partial facts and explicit unknowns; do not force providers to agree.
});
```

## 2. The contract

**File:** `src/contracts/<family>/<family>ToolContracts.ts`

```ts
import { z } from "zod";
import type { ToolContract } from "../toolContractTypes.js";
import { evidenceResultOf } from "../toolOutputSchemaPrimitives.js";
import { toolContractMetadata } from "../toolEffects.js";
import {
  <AREA>_INPUT_SCHEMAS,
  <THING>_RESULT_SCHEMA,
} from "../../domain/<area>/<area>Analysis.js";

/**
 * <One-sentence purpose.> <What the result contains.> <Authority/limitations:
 * static vs runtime, coverage, what stays unknown.>
 */
export const <AREA>_TOOL_CONTRACTS = [
  {
    name: "inspect_<thing>",
    // Provides: title, effects, annotations, returnsTargetContent — all derived,
    // never hand-written. Throws "Missing effect audit" until TOOL_EFFECTS has an entry.
    ...toolContractMetadata("inspect_<thing>"),
    description:
      "Inspect one local <target> and return <facts> with artifact identity, source " +
      "locations, coverage and limitations. Does not execute the target. Omitted detail " +
      "preserves the complete result; detail summary retains it and returns a linked " +
      "inspect_analysis_view summary.",
    kind: "<artifact-provider | android-provider | application | session | …>",
    inputSchema: <AREA>_INPUT_SCHEMAS.inspect_<thing>.extend({
      // Optional delivery selector only when a complete result is retained:
      detail: z.enum(["complete", "summary"]).optional(),
    }),
    outputSchema: evidenceResultOf(<THING>_RESULT_SCHEMA),
    examples: [
      { title: "Inspect a <target>", input: { path: "/targets/Example.bin" } },
      {
        title: "Inspect with retained summary",
        input: { path: "/targets/Example.bin", detail: "summary" },
      },
    ],
  },
] as const satisfies readonly ToolContract[];
```

### Field semantics

| Field | Source of truth | Notes |
| --- | --- | --- |
| `name` | this file | snake_case public name; must be unique in `TOOL_CONTRACTS`. |
| `description` | this file | State what the result contains and **what stays unknown**; note if it executes nothing. |
| `kind` | `ToolKind` in `src/contracts/toolContractTypes.ts` | The adapter family responsible. |
| `inputSchema` | domain | `z.strictObject`-derived; explicit target identity; preserve caller choices. |
| `outputSchema` | `evidenceResultOf(...)` | Wrap the domain result so REA returns an Evidence record. |
| `effects` | `src/contracts/toolEffects.ts` (`TOOL_EFFECTS`) | **Required audit**; provided by `toolContractMetadata`. |
| `annotations` | derived | Never hand-write; `annotationsFromEffects` computes them. |
| `returnsTargetContent` | `TARGET_CONTENT_FREE_TOOLS` | Defaults to `true` (untrusted) until audited. |
| `examples` | this file | Validated by the advertised-examples test. |
| `analysisOperation` | domain operation union / `*_ANALYSIS_OPERATIONS` | Provider-dispatch operation literal surfaced in the generated catalog (`mcp-tool-names.tsv`); not a literal `ToolContract` field. |

## 3. Effects audit (required)

**File:** `src/contracts/toolEffects.ts` — add to `TOOL_EFFECTS`:

```ts
  inspect_<thing>: effects({
    mutatesSession: true,
    // Set ONLY what is truthfully true. Static file inspection typically adds:
    // launchesProcess / writesFilesystem as needed.
  }),
```

Contract metadata **fails closed** (`throw new Error("Missing effect audit for inspect_<thing>")`)
until this entry exists.

## 4. Register the contract and the tool

**`src/contracts/toolContracts.ts`** — add to the ordered inventory:

```ts
import { <AREA>_TOOL_CONTRACTS } from "./<family>/<family>ToolContracts.js";
// … inside TOOL_CONTRACTS, in a sensible position:
  ...<AREA>_TOOL_CONTRACTS,
```

**`src/server/register<Family>Tools.ts`** — register the handler:

```ts
import { toolContract } from "../contracts/toolContracts.js";
import { createContractToolHandler } from "./contractToolHandler.js";
import { toolRegistrationOptions } from "./toolRegistrationOptions.js";

const contract = toolContract("inspect_<thing>");
server.registerTool(contract.name, toolRegistrationOptions(contract), handler(contract));
```

Then call `register<Family>Tools(...)` from **`src/server/createServer.ts`**, and, if the
family is gated, wire its env switch in `installSessionToolAvailability` there.

## 5. CLI wiring

**File:** `src/cliCommandNames.ts`

```ts
// In CLI_COMMANDS (kebab-case):
  inspect<Thing>: "inspect-<thing>",
// If the CLI command maps to a different MCP op, add to CLI_COMMAND_TOOL_ALIASES.
// If there is no dedicated CLI command, add "inspect_<thing>" to
// MCP_TOOLS_WITHOUT_DEDICATED_CLI instead.
```

## 6. Concrete worked example — `inspect_banking_endpoint_inventory`

See the full design (inputs, outputs, evidence, limitations, layers to reuse, effects
declaration) in [`example-banking-tools.md`](./example-banking-tools.md). A condensed
contract sketch:

```ts
{
  name: "inspect_banking_endpoint_inventory",
  ...toolContractMetadata("inspect_banking_endpoint_inventory"),
  description:
    "Join observed endpoints from an authorised web/API capture with endpoint-like " +
    "strings from a local APK/IPA into one deduplicated inventory, preserving which " +
    "source observed each endpoint. Does not contact any URL or execute any target; " +
    "static-only endpoints remain candidates, not proof of a live route.",
  kind: "application",
  inputSchema: z.strictObject({
    capture_path: localPathStringSchema.optional(),
    apk_path: localPathStringSchema.optional(),
    ipa_path: localPathStringSchema.optional(),
  }),
  outputSchema: evidenceResultOf(BANKING_ENDPOINT_INVENTORY_RESULT_SCHEMA),
  examples: [
    { title: "Join a capture with an APK",
      input: { capture_path: "/captures/session.har", apk_path: "/targets/Example.apk" } },
  ],
}
```

## Rules reminder

- Smallest sufficient answer; preserve caller choices; return useful evidence inline.
- Keep observed / inferred / unknown distinct; missing coverage is unknown, not absence.
- Declare effects truthfully; fail closed on missing authority.
- Update contracts, schemas, examples, generated artifacts, and docs together.

---

**Related:** [`authoring-guide.md`](./authoring-guide.md) ·
[`example-banking-tools.md`](./example-banking-tools.md) ·
`/workspace/rea/docs/tool-design.md`
