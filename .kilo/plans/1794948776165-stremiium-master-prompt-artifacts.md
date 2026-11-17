# Plan — Stremiium Home Lab / Omarchy OS / AI Agent OS Master Prompt Artifacts (Ask Mode Preparation)

**Program:** Stremiium (Pty) Ltd — Home Lab → Omarchy OS → Stremiium AI Agent OS  
**Source document:** SPARKLING CURIOUS — MASTER IMPLEMENTATION ORDER (T0–T9 runnable prompt packets)  
**Mode:** Plan Mode → Ask Mode preparation only (no execution)  
**Plan date:** 2026-11-17  
**Owner:** Sparkling Curious (SC-MASTER-001) delegation layer  
**Plan file:** `.kilo/plans/1794948776165-stremiium-master-prompt-artifacts.md`  
**Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`) — no substitution  

---

## 1. Objective

Create master prompt artifacts for **every runnable agent/subagent** in the Sparkling Curious Master Implementation Order (phases T0–T8), organized under `artifacts/stremiium/`, plus **migrate the model lock** on all 30 existing NeoBank artifacts from `qwen3.8-omni-flash` to `auto`.

This is **Ask Mode only**: every artifact is a runnable prompt packet; no prompt is executed here. Every artifact is locked to `auto`. Every artifact produces its own unconsolidated output. Sparkling Curious remains the delegation layer and gates later handoff to Plan Mode / Code Mode per `workflow-routing.md` R3/R5.

T9 (AI bookmark research queue, B001–B025+) is catalogued as a tracked backlog but is **out of primary scope** for this plan; no bookmark artifacts are created here.

---

## 2. Decisions (locked)

| Decision | Value | Rationale |
|---|---|---|
| Output root | `artifacts/stremiium/` | Mirrors existing `artifacts/neobank/` convention; company-scoped |
| Model lock | `auto` (kilo-auto/free) | Replaces every Qwen model (`qwen3.8-omni-flash`, `qwen3.8-max`, `qwen3.8-flash`) across new and existing artifacts; no substitution |
| Format | 16-section Common Master Prompt Header | Summary → Artifact handoff to Sparkling Curious (matches NeoBank artifacts) |
| Execution mode | Ask Mode preparation only | No execution language in any artifact |
| One artifact per agent/subagent | Yes | Matches NeoBank precedent (one unconsolidated artifact per subagent); an agent owning multiple prompt packets lists them in its artifact |
| SA regulatory awareness | Mandatory | FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM restrictions — surfaced per artifact where relevant |
| Private-funded boundary | Stated in every artifact | No public investor/client funds without separate C01 + C16 + C10 + Mychael approval |
| Evidence discipline | `[S#]` citations + `[FACT]/[EST]/[UNKNOWN]/[INFER]` grades; unverified items marked explicitly | Matches NeoBank convention |
| No placeholders/TBD | All sections populated | Questions, concerns, assumptions, suggested improvements, missing dependencies, security risks, rollback, escalation |
| Branch | Stay on current session branch (`kilo/virtual-capybara-6wy`) | Do not switch/merge unilaterally per branch-staying rule |

---

## 3. Task A — Migrate existing NeoBank model locks (30 files)

**Scope:** All files under `artifacts/neobank/**/*.md` (30 artifacts, C01–C16).

**Change:** Replace the model lock line

```
**Execution model:** qwen3.8-omni-flash.
```

with

```
**Execution model:** auto.
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.
```

Also update any other Qwen references inside those files (e.g. `qwen3.8-max`, `qwen3.8-flash`) to `auto`.

**Verification:** grep `artifacts/neobank/` for `qwen3.8` must return zero matches; grep for `auto` must match all 30 files.

**Gate:** C01 Legal-Compliance + C16 Banking-Fintech (these artifacts touch regulated NeoBank surfaces).

---

## 4. Task B — Create Stremiium master prompt artifacts (T0–T8)

**Structure:** `artifacts/stremiium/<folder>/<agent-id>-prompts.md`

```
artifacts/stremiium/
├── orchestration/            # T0 Sparkling Curious + 4 subagents
├── c01-legal-compliance/     # C01 (T8 captain/specialists/subagents)
├── c02-operations/           # C02
├── c03-admin-knowledge/      # C03 (incl. T7 mydots agent C03-THE-ARCHIVIST)
├── c04-strategy-growth/      # C04
├── c05-hr-culture/           # C05
├── c06-engineering-infrastructure/  # C06 (T1 hardware/BIOS, T2 infra, T3 Omarchy/NVIDIA/Hyprland/updates, T4 system-architect/OpenClaw, T6 Temporal, T8)
├── c07-sales-business-development/  # C07
├── c08-design-creative/      # C08 (T3 voice, T7 theme/modus/material-you/vs-code, T8)
├── c09-marketing-communications/  # C09
├── c10-finance-investor-relations/  # C10 (T5 budget guard, T8)
├── c11-dev-engineering/      # C11 (T4 OpenCode/Hermes/Codex, T5 model router, T6 CopilotKit/aimock/MLflow/LiteRT, T7 frontend, T8)
├── c12-cybersecurity-intel/  # C12 (T2 threat intel/network security, T5 deadlock detector, T8)
├── c13-web3-finance/         # C13
├── c14-customer-success/     # C14 (T6 Whisper/voice, T8)
├── c15-product-management/   # C15 (T4 LangSmith, T8)
└── c16-banking-fintech/      # C16
```

### 4.1 T0 — Master orchestration (folder: `orchestration/`)

| # | Agent ID | Council | Source model (replaced) | Thinking | Runnable prompt packet |
|---|---|---|---|---|---|
| T0-1 | SPARKLING-CURIOUS | SC-MASTER-001 (root) | claude-opus-5-5 | T4 | Sparkling Curious Master Directive |
| T0-2 | SC-TASK-DECOMPOSITION | SC | claude-sonnet-5-5 | T3 | Task Decomposition Specialist (T1/T1.1/T1.1.1 task graph) |
| T0-3 | SC-COUNCIL-LIAISON | SC | claude-sonnet-5-5 | T3 | Council Liaison (coordination matrix) |
| T0-4 | SC-REGULATORY-MONITOR | SC | kimi-k3 | T3 | Regulatory Monitor (FSCA/FICA/POPIA/CARF/crypto/ADM) |
| T0-5 | SC-ECOSYSTEM-HEALTH | SC | claude-haiku-5-5 | T1 | Ecosystem Health Monitor (daily health summary, SLA, incidents) |

### 4.2 C01 — Legal-Compliance (folder: `c01-legal-compliance/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C01-CAPTAIN | claude-opus-5-5 | T4 | Legal-Compliance-Squad-Captain (regulatory gate, veto) |
| C01-PRIVACY-LAW-OFFICER | kimi-k3 | T3 | POPIA compliance controls, data map |
| C01-CONTRACT-MANAGEMENT-OFFICER | claude-sonnet-5-5 | T3 | License register for all repos/tools |
| C01-REGULATORY-AFFAIRS-OFFICER | kimi-k3 | T3 | SA regulatory classification matrix (CASP/RCASP/FSCA/FICA/CARF) |
| C01-IP-CONTRACTS-COUNSEL | claude-sonnet-5-5 | T3 | IP risk register (generated code, UI, model outputs, $STM) |
| C01-EMPLOYMENT-LABOR-COUNSEL | glm-5.3-flash | T2 | SA labor compliance (hiring, monitoring, contractor classification) |
| C01-POPIA-DATA-TRANSFER-ASSESSOR | kimi-k3 | T3 | POPIA cross-border data transfer decision log (subagent) |
| C01-FICA-CASP-CHECKER | claude-sonnet-5-5 | T3 | FICA CDD/STR checklist (subagent) |
| C01-CARF-REPORTING-MAPPER | deepseek-v4.1-flash | T2 | SARS CARF data schema (subagent) |
| C01-ADM-OVERSIGHT-OFFICER | gpt-6.1-sol | T3 | Automated decision-making control matrix (subagent) |

Count: 10 artifacts

### 4.3 C02 — Operations (folder: `c02-operations/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C02-CAPTAIN | claude-sonnet-5-5 | T3 | VP-Operations (RACI, SLAs, escalation, governance) |
| C02-GOVERNANCE-RISK-OFFICER | gpt-6.1-sol | T3 | Risk register & mitigations |
| C02-VENDOR-PROCUREMENT-MANAGER | claude-haiku-5-5 | T2 | Paid/free service & cost-control register |
| C02-OPERATIONS-DIRECTOR | deepseek-v4.1-flash | T2 | Daily operating procedure (task-list, query-logs, implementation-log, context) |
| C02-SOP-WRITER | glm-5.3-flash | T2 | SOPs (task creation, compliance check, model routing, escalation, $STM impact) (subagent) |
| C02-INCIDENT-COORDINATOR | claude-sonnet-5-5 | T3 | Incident response playbook (subagent) |
| C02-RESOURCE-SCHEDULER | claude-haiku-5-5 | T1 | Resource schedule (CPU/RAM/GPU/quota/human review) (subagent) |
| C02-AUDIT-TRAIL-KEEPER | beam-free | T0 | Immutable audit ledger (subagent) |

Count: 8 artifacts

### 4.4 C03 — Admin-Knowledge (folder: `c03-admin-knowledge/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C03-CHIEF-LIBRARIAN | claude-sonnet-5-5 | T3 | Knowledge architecture (artifact/task-folder structure) |
| C03-THE-ARCHIVIST | deepseek-v4.1-flash | T2 | Archive decisions/configs/prompts/fixtures/model outputs (+ T7 mydots integration) |
| C03-THE-AUDITOR | gpt-6.1-sol | T3 | Audit artifacts for completeness/provenance/compliance |
| C03-KNOWLEDGE-ARCHITECT | claude-sonnet-5-5 | T3 | Knowledge graph schema (councils/agents/tasks/models/regs/hardware/dotfiles/$STM) |
| C03-DOCUMENTATION-SPECIALIST | qwen3.8-flash | T2 | Stremiium AI Agent OS user manual |
| C03-COMPLIANCE-AUDITOR | kimi-k3 | T3 | Legal disclaimers & regulatory controls verification |
| C03-TAXONOMY-CURATOR | glm-5.3-flash | T2 | Tagging taxonomy (tasks/agents/models/councils/regs/artifacts) |
| C03-METADATA-STEWARD | claude-haiku-5-5 | T1 | Artifact metadata standard (owner/created/task/council/model/sensitivity/version) |
| C03-RETRIEVAL-ENGINEER | deepseek-v4.1-flash | T2 | Retrieval configuration (knowledge-base/context/query-logs/code-snippets/workflows) |
| C03-PROMPT-LIBRARIAN | qwen3.8-flash | T2 | Versioned prompt library structure |
| C03-AGENT-INSTRUCTION-MAINTAINER | claude-sonnet-5-5 | T3 | 16-section agent instruction update queue & diff log |
| C03-ARTIFACT-ARCHIVIST | beam-free | T0 | Archive move log |
| C03-QUERY-LOG-ANALYST | claude-haiku-5-5 | T1 | Weekly query-log insight report |
| C03-LEARNING-LOOP-CURATOR | deepseek-v4.1-flash | T2 | Hermes skill promotion candidates |
| C03-VERSION-CONTROL-HISTORIAN | qwen3.8-flash | T2 | Git versioning policy (branches/tags for dotfiles/prompts/agent configs) |
| C03-GLOSSARY-KEEPER | glm-5.3-flash-free | T1 | Stremiium glossary ($STM, council, subagent, AG-UI, aimock, CARF, FICA, POPIA, Omarchy, Hyprland, Hermes, OpenClaw) |
| C03-RUNBOOK-EDITOR | claude-sonnet-5-5 | T3 | Runbooks (hardware recovery, NVIDIA rollback, agent outage, compliance breach, budget overrun, model routing failure) |
| C03-KNOWLEDGE-GRAPH-BUILDER | gemini-4-argon | T2 | Graph export (repos/agents/tasks/regulations/models/services/dotfiles) |
| C03-SESSION-MEMORY-CURATOR | claude-haiku-5-5 | T1 | Memory compression log (context.md) |
| C03-REDACTION-OFFICER | gpt-6.1-sol | T3 | Redact secrets/PII from logs/fixtures/artifacts |
| C03-ACCESSIBILITY-DOCUMENTATION-LEAD | glm-5.3-flash | T2 | Accessibility checklist |

Count: 21 artifacts

### 4.5 C04 — Strategy-Growth (folder: `c04-strategy-growth/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C04-CHIEF-STRATEGIST | claude-opus-5-5 | T4 | Strategic roadmap (home lab → product strategy) |
| C04-STRATEGIC-PLANNER | claude-sonnet-5-5 | T3 | 30/60/90 day plan |
| C04-BUSINESS-DEVELOPMENT-MANAGER | gpt-6-luna | T2 | Partner/service opportunity register |
| C04-MARKET-ANALYST | gemini-4-argon | T2 | Market brief (AI agent OS, Web3 fintech, dev tooling) |
| C04-OPERATIONS-OPTIMIZER | deepseek-v4.1-flash | T2 | Council workflow & model routing bottleneck backlog |
| C04-SCENARIO-MODELER | claude-sonnet-5-5 | T3 | Scenario matrix (local-only/hybrid/budget/regulatory/hardware/multi-node) (subagent) |
| C04-OKR-TRACKER | claude-haiku-5-5 | T1 | OKR dashboard (subagent) |
| C04-COMPETITIVE-INTELLIGENCE-ANALYST | kimi-k3 | T3 | Competitive brief (subagent) |
| C04-GROWTH-EXPERIMENT-DESIGNER | gpt-6-luna | T2 | Experiment backlog (subagent) |

Count: 9 artifacts

### 4.6 C05 — HR-Culture (folder: `c05-hr-culture/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C05-CHIEF-PEOPLE-OFFICER | claude-sonnet-5-5 | T3 | Culture operating packet (human+agent teaming, wellbeing, conflict) |
| C05-RECRUITER-TALENT-ACQUISITION-LEADER | gpt-6-luna | T2 | Human role catalog for operating agent OS |
| C05-MEDIATOR-CONFLICT-RESOLUTION | claude-sonnet-5-5 | T3 | Council priority conflict resolution log |
| C05-CULTURE-MANAGER | glm-5.3-flash | T2 | Culture charter (agent-human collaboration values) |
| C05-EMPLOYEE-DEVELOPMENT-DIRECTOR | deepseek-v4.1-flash | T2 | Learning paths (OpenCode, Hermes, CopilotKit, agent OS) |
| C05-MENTOR-SPECIALIST | claude-haiku-5-5 | T1 | Daily coaching digest (Mychael + operators) |
| C05-ONBOARDING-COORDINATOR | qwen3.8-flash | T2 | Onboarding checklist (new agents + humans) |
| C05-PERFORMANCE-REVIEW-FACILITATOR | gpt-6.1-sol | T2 | Performance review framework (human oversight) |
| C05-WELLNESS-OFFICER | minimax-m3.1-flash-free | T1 | Wellness policy (burnout prevention) |
| C05-DEI-ADVISOR | kimi-k3 | T3 | DEI risk register (SA labor compliance) |
| C05-COMPENSATION-ANALYST | claude-sonnet-5-5 | T3 | Compensation impact of agent automation |
| C05-TRAINING-CURRICULUM-DESIGNER | glm-5.3-flash | T2 | Training module list |
| C05-AGENT-HUMAN-TEAMING-COACH | claude-sonnet-5-5 | T3 | Handoff rules/teaming playbook |

Count: 13 artifacts

### 4.7 C06 — Engineering-Infrastructure (folder: `c06-engineering-infrastructure/`)

T1–T7 agents belonging to C06 plus T8 agents:

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C06-CTO | claude-opus-5-5 | T4 | Technical architecture command packet (captain) |
| C06-SYSTEM-ARCHITECT | claude-sonnet-5-5 | T3 | System boundary diagram (T4) |
| C06-LEAD-ENGINEER | claude-sonnet-5-5 | T3 | T1.1 Physical Assembly Protocol (X79G/Xeon/ECC/K2200) |
| C06-DEVOPS-LEADER | qwen3.8-max | T3 | T2.1 Network Topology; T3.4 Omarchy updates/rollback; T4.4 OpenClaw; T6.5 Temporal |
| C06-MOTHERBOARD-SPECIALIST | deepseek-v4.1-flash | T2 | T1.1.1 CPU install guide |
| C06-RAM-TECHNICIAN | qwen3.8-flash | T2 | T1.1.1 RAM population guide |
| C06-GPU-INSTALLER | glm-5.3-flash | T2 | T1.1.1 Quadro K2200 install checklist |
| C06-BIOS-ANALYST-STANDARD | deepseek-v4.1-flash | T2 | T1.2 Conservative BIOS settings |
| C06-BIOS-ANALYST-PERFORMANCE | qwen3.8-max | T3 | T1.2 Performance tuning tiers |
| C06-BIOS-ANALYST-ADVANCED | gpt-6.1-sol | T3 | T1.2 Turbo Boost Unlock risk decision memo |
| C06-THERMAL-STABILITY-ENGINEER | claude-haiku-5-5 | T2 | T1.2 Post-BIOS stability validation |
| C06-NETWORK-SECURITY-ENGINEER | gpt-6.1-sol | T3 | T2.1 Zero Trust network policy (+ T8 subagent) |
| C06-INFRA-SPECIALIST | deepseek-v4.1-flash | T2 | T2.2 Tailscale deployment |
| C06-NVIDIA-DRIVER-SPECIALIST | qwen3.8-max | T3 | T3.2 NVIDIA 580xx legacy driver runbook |
| C06-HYPRLAND-COMPOSITOR-ENGINEER | deepseek-v4.1-flash | T2 | T3.3 Hyprland config; T7.5 plugin evaluation |
| C06-BACKEND-ARCHITECT | gpt-6.1-sol | T3 | Agent orchestration/model-routing/compliance-gate APIs |
| C06-FRONTEND-ARCHITECT | gemini-4-argon | T2 | CopilotKit/AG-UI/Codex UI/OpenMuse frontend architecture |
| C06-HARDWARE-ENABLEMENT-ENGINEER | qwen3.8-flash | T2 | Hardware enablement report (Xeon/ECC/NVMe/GPU/USB/audio/sensors) (subagent) |
| C06-BACKUP-DR-ENGINEER | claude-sonnet-5-5 | T3 | Backup/DR plan (dotfiles, agent configs, model caches, task folders, DBs, fixtures, compliance logs) (subagent) |
| C06-OBSERVABILITY-ENGINEER | glm-5.3-flash | T2 | Observability packet (system/GPU/Ollama/OpenCode/Hermes/OpenClaw/CopilotKit/aimock/model spend) (subagent) |

Count: 22 artifacts

### 4.8 C07 — Sales-Business-Development (folder: `c07-sales-business-development/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C07-RAINMAKER | claude-sonnet-5-5 | T3 | Sales enablement packet (captain) |
| C07-SALES-STRATEGY-OFFICER | gpt-6-luna | T2 | Outreach & positioning for AI agent OS |
| C07-BUSINESS-DEVELOPMENT-MANAGER | deepseek-v4.1-flash | T2 | Pilot partner pipeline |
| C07-CLIENT-SUCCESS-LEAD | claude-haiku-5-5 | T2 | Early client onboarding pack |
| C07-REVENUE-OPERATIONS-MANAGER | kimi-k3 | T3 | Pricing, contracts, revenue reporting (RevOps) |
| C07-PIPELINE-ANALYST | claude-haiku-5-5 | T1 | Leads & pilots report (subagent) |
| C07-PROPOSAL-WRITER | gpt-6-luna | T2 | Proposal templates (subagent) |
| C07-PARTNERSHIP-SCOUT | gemini-4-argon | T2 | Partner shortlist (subagent) |
| C07-PRICING-STRATEGIST | claude-sonnet-5-5 | T3 | AI agent services & $STM pricing memo (subagent) |

Count: 9 artifacts

### 4.9 C08 — Design-Creative (folder: `c08-design-creative/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C08-CHIEF-DESIGN-OFFICER | claude-sonnet-5-5 | T3 | Design command packet (captain); T7.1 Hyprland theme strategy |
| C08-UX-DESIGN-LEADER | gemini-4-argon | T2 | T3.5 Omarchy Voice; T7.2 Modus integration; T7.8 theme system (unify Modus/Material You/VS Code/web) |
| C08-BRAND-CREATIVE-DIRECTOR | muse-wonder-1.0 | T2 | T4.6 OpenMuse integration; T7.3 Material You/HyprYou |
| C08-VISUAL-IDENTITY-DESIGNER | gpt-6-luna | T2 | Logo/color/type direction (subagent) |
| C08-INTERACTION-DESIGNER | claude-sonnet-5-5 | T3 | Human-in-the-loop interaction flows (subagent) |
| C08-ACCESSIBILITY-AUDITOR | kimi-k3 | T3 | UI accessibility audit (subagent) |
| C08-MOTION-DESIGNER | muse-wonder-1.0 | T2 | Lightweight animation guidelines (subagent) |
| C08-THEME-SYSTEM-DESIGNER | gemini-4-argon | T2 | Theme token system (subagent) |
| C08-ICONOGRAPHY-ARTIST | minimax-m3.1-flash-free | T1 | Council/agent icon direction (subagent) |

Count: 10 artifacts

### 4.10 C09 — Marketing-Communications (folder: `c09-marketing-communications/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C09-CHIEF-MARKETING-OFFICER | claude-sonnet-5-5 | T3 | Marketing command packet (captain) |
| C09-BRAND-COMMUNICATIONS-MANAGER | gpt-6-luna | T2 | Messaging framework |
| C09-CONTENT-STRATEGY-LEADER | deepseek-v4.1-flash | T2 | Content calendar (dev blog, docs, demos, releases) |
| C09-SEO-ANALYST | claude-haiku-5-5 | T1 | SEO backlog (subagent) |
| C09-SOCIAL-MEDIA-STRATEGIST | minimax-m3.1-flash-free | T1 | Non-sensitive social queue (subagent) |
| C09-DEVELOPER-RELATIONS-WRITER | qwen3.8-flash | T2 | DevRel drafts (OpenCode, CopilotKit, aimock, agent OS) (subagent) |
| C09-LAUNCH-CAMPAIGN-MANAGER | claude-sonnet-5-5 | T3 | Internal/external launch plan (subagent) |
| C09-COMMUNITY-MANAGER | glm-5.3-flash-free | T1 | Community engagement rules/announcements (subagent) |
| C09-PR-CRISIS-COMMUNICATIONS-OFFICER | kimi-k3 | T3 | Crisis comms kit (breach/regulatory/AI failure) (subagent) |

Count: 9 artifacts

### 4.11 C10 — Finance-Investor-Relations (folder: `c10-finance-investor-relations/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C10-CFO | claude-opus-5-5 | T4 | Finance command packet (captain) |
| C10-FINANCIAL-PLANNING-MANAGER | claude-sonnet-5-5 | T3 | Lab/model/cloud/hardware budget (+ T5.2 Budget Guard) |
| C10-INVESTOR-RELATIONS-OFFICER | kimi-k3 | T3 | Investor updates & governance reports |
| C10-FINANCIAL-ANALYSIS-MANAGER | deepseek-v4.1-flash | T2 | Unit economics for AI services |
| C10-TREASURY-MANAGER | gpt-6.1-sol | T3 | Cash, payment rails, crypto treasury policy |
| C10-BUDGET-CONTROLLER | claude-haiku-5-5 | T1 | Spend by council/model dashboard (subagent) |
| C10-COST-OPTIMIZATION-ANALYST | deepseek-v4.1-flash | T2 | Free/local model substitution memo (subagent) |
| C10-TAX-COMPLIANCE-LIAISON | kimi-k3 | T3 | SARS CARF tax readiness (subagent) |
| C10-CAP-TABLE-MANAGER | claude-sonnet-5-5 | T3 | Equity/SAFE/token warrants/dilution scenarios (subagent) |
| C10-AUDIT-PREPARATION-COORDINATOR | gpt-6.1-sol | T3 | Audit evidence packet (subagent) |

Count: 10 artifacts

### 4.12 C11 — Dev-Engineering (folder: `c11-dev-engineering/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C11-LEAD-ENGINEER | qwen3.8-max | T3 | Dev-Engineering execution packet (captain) |
| C11-FRONTEND-ENGINEER | qwen3.8-flash | T2 | T4.8 Codex UI bridge; T6.1 CopilotKit/AG-UI; T7.6 VS Code Wayland/theme sync |
| C11-BACKEND-ENGINEER | deepseek-v4.1-flash | T2 | APIs, model router, agent registry, persistence; T6.6 LiteRT-LM |
| C11-MOBILE-ENGINEER | glm-5.3-flash | T2 | Mobile access feasibility memo |
| C11-QA-TEST-ENGINEER | gpt-6.1-sol | T3 | T6.2 aimock deterministic testing |
| C11-DATABASE-ENGINEER | qwen3.8-max | T3 | Schemas (tasks/agents/logs/compliance/model usage/fixtures/knowledge graph) |
| C11-API-INTEGRATION-ENGINEER | deepseek-v4.1-flash | T2 | Integration matrix (OpenCode/Ollama/CopilotKit/aimock/LangChain/Mastra/OpenAI Agents/Coinbase AgentKit/Temporal/MLflow/LiteRT/Whisper/WorkOS) |
| C11-DEVSECOPS-ENGINEER | gpt-6.1-sol | T3 | T4.5 Herdr integration eval; DevSecOps packet |
| C11-AI-OPS-ENGINEER | claude-sonnet-5-5 | T3 | T4.2 OpenCode Agent Registry; T4.3 Hermes; T5.1 Model Router; AI-Ops packet |
| C11-RELEASE-ENGINEER | qwen3.8-flash | T2 | T2.4 System Software Baseline; Release train |
| C11-CODE-GENERATOR | qwen3.8-flash | T2 | Boilerplate generation (subagent) |
| C11-UNIT-TEST-GENERATOR | deepseek-v4.1-flash-free | T2 | Test generation & coverage (subagent) |
| C11-MIGRATION-ENGINEER | qwen3.8-max | T3 | Data/config migration scripts with rollback (subagent) |
| C11-BENCHMARK-ENGINEER | glm-5.3-flash | T2 | Model/tool/workflow benchmark report (subagent) |
| C11-DOCS-ENGINEER | claude-haiku-5-5 | T1 | Developer docs generation (subagent) |
| C11-DEPENDENCY-UPGRADER | beam-free | T1 | Dependency upgrade & breaking-change report (subagent) |
| C11-REFACTOR-SPECIALIST | qwen3.8-max | T3 | Refactor diff with plan+tests (subagent) |
| C11-DEBUG-INVESTIGATOR | deepseek-v4.1-flash | T2 | Root cause report using aimock fixtures/logs (subagent) |

Count: 19 artifacts

### 4.13 C12 — Cybersecurity-Intelligence (folder: `c12-cybersecurity-intel/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C12-CYBER-CAPTAIN | claude-opus-5-5 | T4 | Security command packet (captain) |
| C12-THREAT-INTEL-ANALYST | kimi-k3 | T3 | T2.3 Threat register; threat intel feed |
| C12-PENTESTER | gpt-6.1-sol | T3 | Authorized internal pentest (SSH/firewall/Tailscale/Cloudflare/Ollama/OpenCode/CopilotKit/agent tools) |
| C12-INCIDENT-RESPONDER | claude-sonnet-5-5 | T3 | IR playbooks & containment |
| C12-SECURITY-ARCHITECT | qwen3.8-max | T3 | T5.3 Deadlock Detector; zero-trust architecture |
| C12-COMPLIANCE-SECURITY-OFFICER | kimi-k3 | T3 | POPIA/FICA/CARF control mapping |
| C12-CRYPTOGRAPHY-ENGINEER | gpt-6.1-sol | T3 | Secrets/TLS/signing/key storage/wallet isolation review |
| C12-VULNERABILITY-SCANNER | beam-free | T1 | arch-audit/pacsentry/lynis/ssh-audit/dependency scans (subagent) |
| C12-SUPPLY-CHAIN-AUDITOR | deepseek-v4.1-flash | T2 | AUR/npm/pip/GitHub Actions/model sources/skills marketplace audit (subagent) |
| C12-SOC-MONITORING-AGENT | claude-haiku-5-5 | T1 | Log/alert monitoring digest (subagent) |
| C12-RED-TEAM-PLANNER | gpt-6.1-sol | T3 | Authorized adversarial simulation scope (subagent) |
| C12-BLUE-TEAM-DEFENDER | claude-sonnet-5-5 | T3 | Detection & response rules (subagent) |
| C12-PRIVACY-THREAT-MODELER | kimi-k3 | T3 | Personal data flow & leakage threat model (subagent) |

Count: 13 artifacts

### 4.14 C13 — Web3-Finance (folder: `c13-web3-finance/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C13-WEB3-CAPTAIN | claude-opus-5-5 | T4 | Web3 command packet (captain) |
| C13-BLOCKCHAIN-ARCHITECT | qwen3.8-max | T3 | Chain/wallet/custody/settlement architecture |
| C13-DEFI-PROTOCOL-SPECIALIST | deepseek-v4.1-flash | T2 | Protocol integration & risk memo |
| C13-SMART-CONTRACT-AUDITOR | gpt-6.1-sol | T3 | Audit checklist/findings (2 audits min before mainnet) (subagent) |
| C13-TOKENOMICS-DESIGNER | claude-sonnet-5-5 | T3 | $STM supply/utility/incentives/regulatory exposure (subagent) |
| C13-WALLET-INTEGRATION-ENGINEER | qwen3.8-flash | T2 | Wallet integration with key isolation (subagent) |
| C13-ORACLE-MEV-ANALYST | kimi-k3 | T3 | Oracle/MEV risk report (subagent) |
| C13-ONCHAIN-MONITORING-AGENT | claude-haiku-5-5 | T1 | On-chain alert digest (subagent) |
| C13-REGULATORY-BLOCKCHAIN-LIAISON | kimi-k3 | T3 | CASP/CARF/FICA coordination memo (subagent) |

Count: 9 artifacts

### 4.15 C14 — Customer-Success (folder: `c14-customer-success/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C14-CS-CAPTAIN | claude-sonnet-5-5 | T3 | Customer success packet (captain) |
| C14-ONBOARDING-SPECIALIST | glm-5.3-flash | T2 | Customer onboarding journey |
| C14-RETENTION-MANAGER | deepseek-v4.1-flash | T2 | Retention playbook |
| C14-SUPPORT-ESCALATION-LEAD | mimo-v2.6-flash-free | T2 | T6.7 Whisper/voice support triage; support escalation plan |
| C14-FEEDBACK-LOOP-ANALYST | claude-haiku-5-5 | T1 | Customer feedback → product tasks digest |
| C14-HELPDESK-TRIAGE | beam-free | T1 | Ticket classification & council routing (subagent) |
| C14-KNOWLEDGE-BASE-MAINTAINER | qwen3.8-flash | T2 | Customer-facing docs maintenance (subagent) |
| C14-CUSTOMER-HEALTH-SCORER | glm-5.3-flash | T2 | Account health dashboard (subagent) |
| C14-CHURN-PREDICTOR | deepseek-v4.1-flash | T2 | Churn risk report (subagent) |
| C14-VOICE-OF-CUSTOMER-SYNTHESIZER | kimi-k3 | T3 | Qualitative feedback synthesis (subagent) |

Count: 10 artifacts

### 4.16 C15 — Product-Management (folder: `c15-product-management/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets |
|---|---|---|---|
| C15-PRODUCT-CAPTAIN | claude-opus-5-5 | T4 | Product command packet (captain) |
| C15-PRODUCT-STRATEGY-MANAGER | claude-sonnet-5-5 | T3 | Product pillars for AI Agent OS; T9 bookmark B001/B018 owner |
| C15-ROADMAP-PLANNER | qwen3.8-max | T3 | Roadmap from home-lab capabilities; T9 bookmark B006 owner |
| C15-USER-RESEARCH-LEAD | gemini-4-argon | T2 | Research plan (developers/enterprises) |
| C15-ANALYTICS-PRODUCT-ANALYST | deepseek-v4.1-flash | T2 | Product metrics & instrumentation; T6.4 LangSmith/deep agents |
| C15-FEATURE-PRIORITIZATION-OFFICER | claude-sonnet-5-5 | T3 | RICE/ICE + compliance-risk prioritized backlog |
| C15-PRD-WRITER | gpt-6-luna | T2 | PRD drafts (subagent) |
| C15-ACCEPTANCE-CRITERIA-GENERATOR | qwen3.8-flash | T2 | Acceptance criteria lists (subagent) |
| C15-EXPERIMENT-ANALYST | glm-5.3-flash | T2 | A/B experiment reports (subagent) |
| C15-COMPETITOR-FEATURE-TRACKER | gemini-4-argon | T2 | Competing agent platform comparison (subagent) |
| C15-RELEASE-NOTES-EDITOR | claude-haiku-5-5 | T1 | Release notes drafts (subagent) |

Count: 11 artifacts

### 4.17 C16 — Banking-Fintech (folder: `c16-banking-fintech/`)

| Agent ID | Source model (replaced) | Thinking | Prompt packets (T8) |
|---|---|---|---|
| C16-BANKING-CAPTAIN | claude-opus-5-5 | T4 | Banking-fintech command packet (captain; banking compliance authority) |
| C16-BANKING-ARCHITECT | qwen3.8-max | T3 | Ledger/account/settlement architecture |
| C16-FINTECH-SYSTEMS-SPECIALIST | deepseek-v4.1-flash | T2 | Payment provider & financial API integration |
| C16-PAYMENTS-INTEGRATION-LEAD | gpt-6.1-sol | T3 | Secure payment flows & retries |
| C16-KYC-AML-WORKFLOW-DESIGNER | kimi-k3 | T3 | FICA-compliant KYC/AML onboarding & monitoring (subagent) |
| C16-LEDGER-RECONCILIATION-ENGINEER | qwen3.8-flash | T2 | Reconciliation jobs & exception handling (subagent) |
| C16-ISO20022-MESSAGING-SPECIALIST | glm-5.3-flash | T2 | ISO 20022 message mapping & validation (subagent) |
| C16-FRAUD-DETECTION-ANALYST | gpt-6.1-sol | T3 | Fraud signals & human review queues (subagent) |
| C16-OPEN-BANKING-API-ENGINEER | deepseek-v4.1-flash | T2 | Open banking integration & consent management (subagent) |
| C16-SETTLEMENT-OPERATIONS-COORDINATOR | claude-sonnet-5-5 | T3 | Settlement calendars/cut-offs/exceptions (subagent) |

Count: 10 artifacts

### Summary of artifact counts

| Folder | Artifacts |
|---|---|
| orchestration/ | 5 |
| c01-legal-compliance/ | 10 |
| c02-operations/ | 8 |
| c03-admin-knowledge/ | 21 |
| c04-strategy-growth/ | 9 |
| c05-hr-culture/ | 13 |
| c06-engineering-infrastructure/ | 22 |
| c07-sales-business-development/ | 9 |
| c08-design-creative/ | 10 |
| c09-marketing-communications/ | 9 |
| c10-finance-investor-relations/ | 10 |
| c11-dev-engineering/ | 19 |
| c12-cybersecurity-intel/ | 13 |
| c13-web3-finance/ | 9 |
| c14-customer-success/ | 10 |
| c15-product-management/ | 11 |
| c16-banking-fintech/ | 10 |
| **Total new stremiium artifacts** | **178** |
| NeoBank model-lock migrations (Task A) | 30 files (no new files) |

---

## 5. Artifact template (16 sections)

Every new `artifacts/stremiium/**/*.md` artifact must use this exact structure (mirroring the NeoBank artifacts):

```
# Master Prompt — <AGENT-ID> (<descriptive title>)

**Act as the assigned Stremiium agent or subagent.**

**Execution model:** auto.  
**Model policy:** LOCKED to `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`). Do not substitute another model.  
**Mode:** Ask Mode preparation only unless later handed to Plan Mode or Code Mode.  
**Workspace:** keep all artifacts inside the Stremiium / Independent-projects workspace structure.  
**Output:** produce one separate unconsolidated artifact at `artifacts/stremiium/<folder>/<agent-id>-prompts.md`.  
**Depth:** expand regulatory, technical, security, financial, UX, legal, and operational depth regardless of model specificity.  
**Agent ID:** <AGENT-ID>  
**Council:** <C01–C16 or SC> <Council Name>  
**Gate:** <council> [+ cross-council gates where applicable]

---  ## 1. Summary
---  ## 2. Assumptions
---  ## 3. Questions
---  ## 4. Concerns
---  ## 5. Suggested Improvements
---  ## 6. Missing Dependencies
---  ## 7. Step-by-Step Implementation or Research Plan
---  ## 8. Commands/Configs/Schemas Where Applicable
---  ## 9. Validation Checklist
---  ## 10. Security Considerations
---  ## 11. South African Regulatory Considerations
---  ## 12. Compliance Gate
---  ## 13. Rollback Plan
---  ## 14. Escalation Path
---  ## 15. Artifact Handoff to Sparkling Curious
```

Section requirements:
- **1 Summary:** agent purpose, prompts owned, research data to ingest, output path
- **2 Assumptions:** research data currency, model lock, private-funded boundary, scope boundaries
- **3 Questions:** open regulatory/technical/operational questions relevant to the agent's prompts
- **4 Concerns:** risks, conflicts, gaps in current prompt set
- **5 Suggested Improvements:** concrete prompt rewrites with research citations
- **6 Missing Dependencies:** external docs not in repo (statutes, regulator guidance, vendor contracts, diagrams)
- **7 Step-by-Step Plan:** numbered ingestion → mapping → gap identification → drafting → validation → handoff
- **8 Commands/Configs/Schemas:** JSON schemas for prompt inputs/outputs where applicable; no executable commands in Ask Mode
- **9 Validation Checklist:** mirror NeoBank §10 (research cited, evidence grades, 16 sections, `auto` lock, Ask Mode only, no placeholders/TBD, missing deps, security, compliance gate, rollback, escalation, handoff, no PII/secrets)
- **10 Security Considerations:** data classification, secrets, least privilege, audit
- **11 South African Regulatory Considerations:** FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act 71 of 2008, King IV, CPA 68 of 2008, NCA, Exchange Control Rules, Travel Rule, CASP, ADM, NPS Act, Banks Act — where relevant to the agent's domain
- **12 Compliance Gate:** named council(s) + executive where applicable (per §8 of NeoBank plan)
- **13 Rollback Plan:** revert/suspend/disable/notify steps
- **14 Escalation Path:** Agent → Council Captain → Sparkling Curious → Mychael → Board; critical skip to SC+C01+C16 (1h SLA)
- **15 Artifact Handoff to Sparkling Curious:** synthesis, de-duplication, conflict arbitration per workflow-routing.md R3/R5

---

## 6. Validation checklist (per artifact + whole plan)

- [ ] All 30 `artifacts/neobank/**/*.md` model locks changed `qwen3.8-omni-flash` → `auto`; zero `qwen3.8` references remain
- [ ] 178 new artifacts created under `artifacts/stremiium/` per §4 roster
- [ ] Each artifact uses the 16-section template exactly
- [ ] Each artifact states `Execution model: auto` and `Model policy: LOCKED`
- [ ] Each artifact is Ask Mode only (no execution language)
- [ ] All sections populated — no placeholders/TBD
- [ ] SA regulatory considerations addressed where relevant (§11)
- [ ] Questions/concerns/assumptions/suggested improvements/missing dependencies all populated
- [ ] Compliance gate named; rollback plan specified; escalation path specified
- [ ] Artifact handoff to Sparkling Curious described (§15)
- [ ] No private keys, credentials, or PII in any artifact
- [ ] Artifact paths inside `artifacts/stremiium/` workspace
- [ ] All work stays on the current session branch; no merge to `main`

---

## 7. Handoff

On completion, all 178 new artifacts + 30 migrated NeoBank files are handed off to Sparkling Curious (SC-MASTER-001) for:
- cross-council conflict de-duplication (per `workflow-routing.md` R3: captains convene; SC arbitrates <24h)
- synthesis with the existing NeoBank artifact set under `artifacts/neobank/`
- gating before Plan Mode / Code Mode execution

T9 bookmark queue (B001–B025+) remains a catalogued backlog; each bookmark maps to an already-listed agent owner in §4 (e.g. C15-PRODUCT-STRATEGY-MANAGER owns B001/B018; C11-API-INTEGRATION-ENGINEER owns B002/B022; C11-QA-TEST-ENGINEER owns B003/B008).

---

## 8. Execution note

This plan defines artifacts to create and files to edit only. No source files, artifacts, or prompts are mutated by this plan. An implementation-capable agent must carry out Task A (30 file edits) and Task B (178 file creations), then run the §6 validation. Report completion against §6 checklist.
