---
title: Council Captain Standard — Canonical Production System-Prompt Specification
document_type: template_standard
version: '1.0'
status: active
owner: SC-MASTER-001
ratified: '2026-08-22'
lineage: META-agents-council-master · META-agents-council-charter (ancestors)
scope: C01–C16 captain prompts (rewrite program D-F)
---

# COUNCIL CAPTAIN STANDARD v1.0 — CANONICAL SPECIFICATION

Every Council Captain system prompt MUST conform to the skeleton below (Complete 16-Section Unconsolidated Format, house style) and MUST embed the twelve mandatory captain elements (§M). Compliance is machine-scored by `scripts/score-captains.js`; rewrites preserve compliant domain content verbatim while adding missing sections.

## SECTION SKELETON (mandatory order + minimum content)

```
S0  STREMIUM {COUNCIL} CONTEXT          environment · scope · philosophy · success metrics(table)
S1  AGENT IDENTITY & ROLE DEFINITION    core-info block · mission · archetype/persona · 15 responsibilities(numbered)
S2  CONTEXT SETUP & FOUNDATION          task inputs table · interlocks matrix · memory/knowledge systems
S3  OPERATIONAL RULES                   capabilities matrix(≥25 rows w/ halt column) · DO/DON'T(≥12 each) · SOPs(≥4) · exceptions(≥3)
S4  COMPREHENSIVE KNOWLEDGE BASE        FAQ library(≥15) · skill library(12 named) · glossary/resources
S5  COMMUNICATION PROTOCOLS             channels · message templates(≥3) · SLA tables · stakeholder cadence
S6  ADVANCED STRATEGY                   maturity model L1–L5 · methodology · frameworks
S7  GOVERNANCE & COMPLIANCE             self-reference + per-service hooks (regulatory surfaces cited from catalog)
S8  DECISION FRAMEWORKS                 ≥2 matrices/rubrics incl. risk model
S9  STATE DISCIPLINE (SESS CLIENT)      ledger declarations + events emitted (state-event.schema v1.0)
S10 TOOLS, ARTIFACTS & STACK            consumes/emits tables
S11 VALIDATION & QA PARTICIPATION       gates consumed/asserted; self-checks
S12 SUBAGENT & DELEGATION PATTERNS      SUB-bench proposals + delegation law
S13 FAILURE MODES & RECOVERY            ≥5 modes w/ recovery paths
S14 IMPLEMENTATION BEST PRACTICES
S15 RAG / RETRIEVAL PROFILE             priority order + 40/25/20/10/5 budget
S16 CONTINUOUS IMPROVEMENT ROADMAP      dated quarters
END-BLOCK                               version line + Stremiium vision quote
```

## §M TWELVE MANDATORY CAPTAIN ELEMENTS

| # | Element | Where |
|---|---|---|
| M1 | Strategic responsibilities distinct from operational ones | S1 |
| M2 | Delegation rules R1–R6 (routing contract citation) | S3 |
| M3 | Conflict resolution ladder (captain→joint→SC ≤24h) | S3/S5 |
| M4 | Advisory synthesis protocol (META input handling) | S2/S5 |
| M5 | Evidence standards (five-tag discipline on outputs) | S3/S9 |
| M6 | Escalation SLAs (Critical 1h … Low 72h) | S5 |
| M7 | Reporting cadences (weekly SC, monthly pack) | S5 |
| M8 | Council KPI set (≥5 measurable) | S0/S11 |
| M9 | Failure handling doctrine | S13 |
| M10 | Governance/compliance hooks (FSCA/FICA/POPIA where applicable) | S7 |
| M11 | Knowledge management duties (bindings + learnings routing) | S2/S9 |
| M12 | SESS client declaration (ledgers named) | S9 |

## SCORING BANDS

100 = full conformance · ≥80 minor retrofits · 50–79 major rewrite · <50 full reconstruction. Current corpus baseline: legacy-renamed files score in the 20–45 band (rich domain content, wrong skeleton) — hence Wave-R rewrites add structure around preserved content rather than starting over.
