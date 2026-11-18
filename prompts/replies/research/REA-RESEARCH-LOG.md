# REA Research Log

**Program:** SC-REA-NEOBANK-5.0 · **Engine:** REA (`morluto/rea`) v6.5.0 · **Date:** 2026-11-18

## Engine State

| Item | Status |
|---|---|
| Repository | `/workspace/app/rea` — present |
| Version | 6.5.0 (per CHANGELOG / package metadata) |
| Capabilities | 207 MCP tools / 153 CLI commands |
| node_modules | Absent — engine not installed |
| Target artefacts (APK/ASAR/IPA) | None supplied by executive |

## Research Actions

1. Reviewed `rea/README.md`, `rea/AGENTS.md`, `rea/CHANGELOG.md`, `rea/package.json` for capability inventory.
2. Identified scripts: `node scripts/rea.mjs --help`, `node scripts/rea.mjs doctor --json`, `npm run build:cached`.
3. Installation was not executed in this research pass (sandbox/network constraints); artefact extraction is therefore **not performed**.

## Honesty Rule (PROGRAM_BRIEF §5)

Per the program's non-negotiable four-bucket evidentiary rule, no "Seen" item may claim to derive from a decompiled artefact we do not possess. All replies therefore:
- Mark artefact-dependent claims as **[INFER]** or **[UNKNOWN]**
- Name the extraction step that would resolve each unknown
- Restrict "Seen" to public, citable sources (filings, published pricing, documentation, app-store metadata)

## Unresolved REA Questions (for future execution)

- CBS signature of Standard Bank / ABSA / FNB / Nedbank apps — requires APK/IPA extraction
- Luno / VALR wallet key storage and Travel Rule implementation — requires APK/ASAR extraction
- Fan engagement token mechanics in Sorare / Socios apps — requires APK extraction
- Smart-contract bytecode verification for $STM and competitor tokens — requires ASAR/bytecode extraction

**Resolution path:** install REA (`npm ci --engine-strict=false && npm run build:cached`), obtain artefacts, run extraction, then upgrade the affected [INFER]/[UNKNOWN] entries to [FACT] with artefact offsets.
