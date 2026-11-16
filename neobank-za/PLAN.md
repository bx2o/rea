# PLAN — NeoBank ZA Program (UnConsolidated Master Plan)

- **Program codename (placeholder):** `Project Umoya` — NeoBank South Africa. *Codename is a working label only, not a brand decision.*
- **Plan owner:** Sparkling Curious (SC-MASTER-001), acting as Manager / Coach
- **Authority model:** Sparkling Curious (Executive) → Council Captains (C01–C16, Command) → Agents (AGT-*, Operational) → Subagents (SUB-*)
- **Plan version:** 1.0 (UnConsolidated)
- **Date:** 2026-10-16
- **Execution mode:** Plan Mode → Code Mode

---

## 0. Governor documents (system-prompt spine)

This program inherits the operating rules extracted from `stremiium.zip` (`.stremiium/`). Authoritative files:

- [sparkling-curious-instructions.md](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md) — orchestration, escalation, quality gates
- [workflow-routing.md](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md) — canonical hierarchy + routing contract
- [sparkling-curious.agent.md](file:///workspace/_stremiium/.stremiium/agents/sparkling-curious.agent.md) — master orchestrator identity (v3.0)
- Registries: `.stremiium/registry/*.json`; algorithms: `.stremiium/workflows/algorithms/*`

Stated rules applied in this program: **physical workspace evidence overrides stale reports**; every task has a traceable artifact; observe vs. infer vs. unknown must be distinguished; no secrets/credentials in artifacts.

---

## 1. Objective

Launch a **NeoBank in South Africa**. To de-risk the launch we must:

1. **Install, set up and understand `morluto/rea`** (Reverse Engineer Anything) — its architecture, tools, and how to author custom tools.
2. **Research and analyse all current banks and NeoBanks in South Africa** (incumbents + challengers + fintechs + regulatory perimeter).
3. **Use REA to reverse-engineer and analyse the banks/neobanks** — their shipped apps (Android APK / iOS / web / Electron), API surfaces, and observable behaviour — to derive competitive and product intelligence.
4. **Build an extensive, UnConsolidated project architecture** — a maximally granular, non-merged folder/file tree covering program governance, research, reverse-engineering evidence, and the NeoBank platform design.

---

## 2. Workstreams (WBS)

| # | Workstream | Owner council(s) | Deliverable root | Status |
|---|---|---|---|---|
| W0 | Program governance & orchestration | SC + C01/C03 | `neobank-za/program/`, `neobank-za/PLAN.md` | In progress |
| W1 | REA install, setup & capability mapping | C06 + C11 | `neobank-za/reverse-engineering/rea-analysis/` | In progress |
| W2 | SA traditional banking landscape research | C04 | `neobank-za/research/sa-banking-landscape/` | ✅ Done |
| W3 | SA neobank / challenger research | C04 | `neobank-za/research/neobank-competitors/` | ✅ Done |
| W4 | SA regulatory & licensing pack | C01 + C12 | `neobank-za/research/regulatory/` | ✅ Done |
| W5 | REA reverse-engineering playbooks (banking targets) | C11 + C12 + C16 | `neobank-za/reverse-engineering/playbooks/` | Pending |
| W6 | REA custom-tool authoring guide | C11 + C06 | `neobank-za/reverse-engineering/custom-tools/` | Pending |
| W7 | NeoBank platform architecture (UnConsolidated) | C06 + C11 + C16 + C15 | `neobank-za/architecture/` | Pending |
| W8 | Customer / product / GTM design | C15 + C14 + C09 + C07 | `neobank-za/councils/` | Pending |
| W9 | Security, fraud & compliance controls | C12 + C01 | `neobank-za/architecture/security/` | Pending |
| W10 | Skills / workflows / templates localisation | C03 | `neobank-za/skills|workflows|templates/` | Pending |
| W11 | Synthesis & delivery | SC | `neobank-za/README.md` | Pending |

---

## 3. Reverse-engineering method (REA)

Route the target first (per REA skill v42):

| Target type | First REA tool | CLI |
|---|---|---|
| Android APK (primary banking app) | `open_binary` → `inspect_android_package` | `rea inspect-android-package` |
| Android device (emulator/hardware) | ADB tools | `rea …` adb group |
| Extracted JS / Electron (web banking desktop) | `analyze_javascript_application` | `rea analyze-javascript-application` |
| Website / browser flows | `list_browser_targets`, `capture_browser_scenario` | `rea …` browser group |
| Saved network captures (HAR/SAZ/pcap) | `inspect_web_network_capture`, `inspect_pcap_capture` | `rea …` capture group |
| iOS / native binaries | `open_binary` (Hopper/Ghidra/IDA) | `rea open-binary` |
| SQLite app databases | `inspect_sqlite_database` | `rea inspect-sqlite-database` |

**Evidence discipline:** every conclusion records Evidence ID, confidence (observed / inferred / unknown), search boundary, and remaining unknowns. Never imply static analysis observed execution.

---

## 4. Quality gates (from Sparkling Curious §4)

- [ ] 80%+ test coverage on produced code (where code is produced)
- [ ] No hardcoded secrets, no PII in artifacts
- [ ] PCII/POPIA/PCI-DSS gates before any money/data surface ships
- [ ] Every research claim carries a source reference or is explicitly marked unverified
- [ ] Observe / infer / unknown labels preserved
- [ ] Sign-off: Tech Lead → CTO → Security → Privacy → Sparkling Curious

---

## 5. Escalation & SLA

Council Captain → Sparkling Curious → Mychael → Board.
Critical 1h · High 4h · Medium 24h · Low 72h.

---

## 6. Definition of done

- REA cloned, installed, built, and its tool surface documented with real commands.
- All SA banks/neobanks enumerated with sourced profiles and a comparison matrix.
- A reverse-engineering playbook that maps REA tooling to specific SA banking targets.
- An UnConsolidated architecture tree for `Project Umoya` with populated, cross-linked files.
- `neobank-za/README.md` master index.
