# T1 implementation · build-spec.md

**Task:** T1.0 Environment & REA Setup
**Owner:** C06 Engineering-Infra · **Build owner:** C11 Dev-Engineering.

---

## 1. Artefacts to produce

| # | Artefact | Path | Producer | Acceptance |
|---|---|---|---|---|
| A1 | REA doctor contract | `task/T1-infrastructure-setup/implementation/rea-doctor-contract.md` | C11 | Documents `rea doctor --verbose` fields, providers, models, exit codes |
| A2 | Banking REA plugin | `architecture/core-banking/stremiium-rea-banking-plugin.ts` | C11 | Compiles; emits typed CBS/rail markers |
| A3 | MCP transport note | `task/T1-infrastructure-setup/implementation/mcp-transport.md` | C06 | States transport, fallback, and invocation contract |
| A4 | Ledger schema note | `task/T1-infrastructure-setup/context/evidence-ledger-schema.md` | C03 | Conformant with brief §6 |
| A5 | Homebrew/venv install log | `task/T1-infrastructure-setup/implementation/rea-install-log.md` | C06 | Redacted; version-pinned; no secrets |

> **Status note:** A1–A5 are **specified here but not yet built** — the REA binary is not installed.
> This file is the build contract; it does not claim the artefacts exist.

## 2. A1 — `rea-doctor-contract.md` shape

```
# REA Doctor Contract
- rea version: <pinned>
- command: npx rea-agents setup  &&  rea doctor --verbose
- providers: [ <name>: healthy|degraded|missing ]
- models:    [ <name>: routing-target ]
- tools:     [ analyze-javascript-application, ... ]
- exit_code: 0 => healthy
- fail conditions: provider missing, model unreachable, tool absent
- MCP transport: stdio|http (record actual)
```

## 3. A2 — `stremiium-rea-banking-plugin.ts` interface

```ts
export interface CbsSignature {
  family: 'mambu'|'finacle'|'bancs'|'temenos'|'in-house'|'unknown';
  markers: string[];        // string/bytecode signatures observed
  rails: Rail[];            // bankservafrica|payshap|rtc|eft|swift|iso20022
  confidence: 'high'|'medium'|'low';
  evidence_class: 'SEEN'|'INFERRED'|'UNKNOWN';
}
export interface Rail { name: string; markers: string[]; }
export function detectCbs(artifactPath: string): Promise<CbsSignature[]>;
```

Constraints: no secrets read; artifact paths are read-only; results carry an `evidence_class` and
must be `INFERRED`/`UNKNOWN` until T1.1 proves extraction is genuinely from an artefact we possess.

## 4. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-INSTALL | installer exits 0; `rea` resolvable on PATH | ✅/❌ |
| T-DOCTOR | `rea doctor --verbose` exit 0; providers listed | ✅/❌ |
| T-MCP | agent calls REA tool (or documented fallback) and gets JSON | ✅/❌ |
| T-PLUGIN-BUILD | `tsc --noEmit` on plugin | ✅/❌ |
| T-PLUGIN-CONTRACT | plugin returns schema-valid `CbsSignature[]` on fixture | ✅/❌ |
| T-LEDGER | a sample dossier ledger validates against schema | ✅/❌ |
| T-NOSECRET | C12 secret scan over emitted logs/config | ✅/❌ |

## 5. Invocation contract (canonical)

```bash
npx rea-agents setup
rea doctor --verbose
npx -y rea-agents@latest analyze-javascript-application <path> --json
```

All invocations must write JSON to a file under the relevant task's `implementation/` folder, never
to stdout only, so results are reproducible and auditable.
