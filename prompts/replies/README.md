# Master Prompt Replies — Stremiium NeoBank Program

**Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)
**Model lock:** `auto` (kilo-auto/free) — no substitution · **Mode:** Ask Mode preparation
**Generated:** 2026-11-18

---

## Purpose

This folder contains the **substantive answers** to all 201 Master Prompts in the Stremiium workspace. Unlike the earlier `execution/results/` files (which were generic templates), every reply here answers the **actual questions** in its source prompt with concrete, citable, domain-specific content.

Example: `C01-CARF-REPORTING-MAPPER` question "Which data fields are required for SARS CARF reporting?" is answered with the real CARF reporting schema: user identification, jurisdiction, reporting R-CASP, transaction type, asset type, dates, values, counterparty — each with source citation and evidence grade.

---

## Counts

| Item | Count |
|------|-------|
| Stremiium agent prompts answered | 164 |
| NeoBank prompts answered | 37 |
| **Total prompts answered** | **201** |
| `reply.md` files | 201 |
| `research-evidence.md` files | 201 |
| `diagrams-and-charts.md` files | 201 |
| **Total files** | **603** + index/research/tools |

---

## Folder Structure

```
prompts/replies/
├── README.md                       # This file
├── MASTER-INDEX.md                 # Complete list of ALL folders + files per folder
├── research/
│   ├── KNOWLEDGE-BASE.md            # Topic → substantive content library
│   ├── SOURCE-CITATION-MAP.md       # [S#] → source path mapping
│   └── REA-RESEARCH-LOG.md          # REA engine research record
├── tools/
│   ├── generate-replies.mjs         # Generator (parses prompts, emits replies)
│   └── verify-replies.mjs           # Validation tool
├── stremiium/
│   ├── c01-legal-compliance/<agent>/  { reply.md, research-evidence.md, diagrams-and-charts.md }
│   ├── c02-operations/<agent>/
│   ├── ... (all 16 councils)
│   └── orchestration/<agent>/         (5 SC-MASTER-001 prompts)
└── neobank/<dept>/<prompt>/           { reply.md, research-evidence.md, diagrams-and-charts.md }
```

See [`MASTER-INDEX.md`](MASTER-INDEX.md) for the complete listing of every folder and every file.

---

## The 18-Section UnConsolidated Reply Format

Every `reply.md` contains:

1. **Executive Answer** — direct answer to the prompt objective
2. **Research Base** — [S#] citation table with evidence grades
3. **Questions Answered** — EVERY question answered with substantive content (field tables, facts, verdicts) — the core fix
4. **Concerns Resolved** — each concern with concrete mitigation
5. **Suggested Improvements Delivered** — prompt-ready content
6. **Missing Dependencies Resolved** — status + resolution path
7. **Implementation Plan** — TBS-mapped
8. **Schemas & Contracts** — full field tables (no executable commands in Ask Mode)
9. **Security Analysis** — controls table
10. **SA Regulatory Analysis** — clause-level detail (POPIA s5-s12/s55/s57/s71/s72, FICA reports, CARF, Banks Act, FAIS/NCA, etc.)
11. **Strategic Filter** — ADOPT / ADAPT / AVOID / BEAT
12. **Compliance Gate** — named gate + sign-off table
13. **Rollback Plan**
14. **Escalation Path** — with SLAs (1h/4h/24h/72h)
15. **Artifact Handoff to Sparkling Curious**
16. **Detailed Tables** — domain-specific tables (CARF fields, POPIA conditions, FICA reports, etc.)
17. **Visualization Reference** — to `diagrams-and-charts.md`
18. **Validation Checklist** — 19 checked items

Plus header block with model lock `auto`, Ask Mode, agent ID, council, gate, source prompt path.

---

## Companion Files

### `research-evidence.md`
- Evidence grade definitions ([FACT]/[EST]/[UNKNOWN]/[INFER])
- Substantive evidence items with sources and extraction steps
- Four-bucket evidentiary rule applied (Seen / Synthesised / Limitations / Unknowns)

### `diagrams-and-charts.md`
- Primary ASCII flow diagram for the domain
- Structured table
- State machine
- ASCII bar chart of evidence grade distribution
- Compliance-gate decision tree
- TBS phase rollout timeline
- Council dependency graph

---

## Research Sources

- **docs/** — all zones: governance, program, research, architecture, engineering, deliverables, archive-second-versions
- **rea/** — REA v6.5.0 engine (207 MCP tools / 153 CLI commands); present but not installed; no target artefacts supplied. See `research/REA-RESEARCH-LOG.md`
- **.stremiium/** — workflow routing R1-R6, council mapping, agents, 340+ skills, workflows, policies, contracts, plans, audits, runbooks, evaluations, memory, observability, recovery

---

## Validation

```bash
node prompts/replies/tools/verify-replies.mjs
```

Result: **201 prompts verified, 0 errors** — every prompt has all 3 files, every reply has 18 sections, model lock stated, no generic boilerplate answers.

---

## Governance

- Model lock: `auto` (kilo-auto/free) verified on all 201 agents
- Private-funded boundary: no public investor/client funds without C01 + C16 + C10 + Mychael approval
- Escalation: Agent → Captain → Sparkling Curious (SC-MASTER-001) → Mychael (CEO) → Board
- SLAs: Critical 1h · High 4h · Medium 24h · Low 72h
- No credentials, keys, tokens or personal data in any artifact
