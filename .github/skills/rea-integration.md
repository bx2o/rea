# `.github/skills/rea-integration.md` — REA Integration

**Program:** `SC-REA-NEOBANK-5.0`
**Engine:** `morluto/rea` (REA binary & application analysis engine)
**Owner:** C11 Dev-Engineering (`C11-dev-engineering-captain`) · **Audit:** C12 Cybersecurity-Intel
**Last updated:** 2026-10-19

---

## 1. Status: NOT INSTALLED ⚠️

> **`morluto/rea` is NOT installed in this workspace.** Consequently, **no `Seen`-class claim in any
> dossier (T2–T7) may derive from a decompiled artefact we do not possess.** Until REA extraction runs,
> "Seen" is limited to public, citable sources (filings, published pricing, documentation, app-store
> metadata), and everything artefact-dependent is labelled **INFERRED** or **UNKNOWN** with the
> resolving extraction step named. (Brief §5 honesty rule.)

Blocking conditions:
- No `rea` binary / `rea-agents` package installed on this host.
- No `rea doctor` transcript captured.
- No APK/ASAR/IPA/binary artefacts supplied by executives.

## 2. How REA is invoked in this program

### 2.1 Setup and verification

```bash
npx rea-agents setup
rea doctor --verbose
```

- `npx rea-agents setup` — provision the REA toolchain.
- `rea doctor --verbose` — emit provider/model/tool health. Capture the transcript to
  `task/T1-infrastructure-setup/implementation/rea-doctor-contract.md` (see T1.1).

### 2.2 Application analysis

```bash
npx -y rea-agents@latest analyze-javascript-application <path> --json
```

- `<path>` points at an application artefact (e.g. an unpacked web bundle / ASAR).
- `--json` emits machine-readable output; redirect to a file inside the relevant task/entity folder
  so results are reproducible and auditable, e.g.:
  `... > research/banks/<entity>/rea-output.json`.

## 3. MCP transport

REA is exposed to council agents as an **MCP server** so it can be invoked as a tool rather than only
from a shell.

- **Transport:** MCP stdio (default) — record the actual transport once `rea doctor` confirms it.
- **Contract:** the agent calls the REA analysis tool with the artefact path; REA returns JSON.
- **Fallback:** if MCP transport is unreachable in the sandbox, use the pinned local CLI invocation
  from §2.2 and log the transport gap in `task/T1-infrastructure-setup/implementation/`.
- **MCP integration references** (in `.stremiium/skills/`): `MCP Integration.md`,
  `building-mcp-server-on-cloudflare/`, `smithery-integration/`.

## 4. Evidence handling rules

| Rule | Detail |
|---|---|
| R1 | REA output is the **only** route to artefact-level SEEN evidence. |
| R2 | Every REA run writes JSON to file (never stdout-only) for reproducibility. |
| R3 | REA output is interpreted into the four evidentiary buckets (Seen/Graph/Limitations/Unknowns). |
| R4 | No secret material is captured in REA logs or committed. |
| R5 | `rea_status` is recorded per entity in `evidence-ledger.json` (`not-executed|partial|executed`). |

## 5. Dependency

REA integration depends on **T1.1 (REA Doctor & Provider Verification)** and is a prerequisite for the
forensic depth of T2–T6 and the traceability of T7. Until it is executed, the program runs in
public-source-only mode and this NOT-INSTALLED banner stands.
