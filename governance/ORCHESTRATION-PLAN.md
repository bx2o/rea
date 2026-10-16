---
doc_type: orchestration_plan
version: 1.0
authority: Sparkling Curious (SC-MASTER-001)
last_updated: 2026-10-16
---

# ORCHESTRATION PLAN — SA NeoBank Reverse-Engineering Programme

## 0. Mandate

As **Sparkling Curious** (Master Orchestrator, Tier 1), route the NeoBank reverse-engineering task
through the 16-council model. Each council captain owns a workstream; agents/subagents execute
against explicit success criteria. This document is the **Plan-Mode** artifact; execution is logged
in `governance/execution/`.

## 1. Task Intake (SAOS STEP 1)

- **Objective:** Build an extensive UnConsolidated reverse-engineering research & analysis library
  on SA + global banks, neobanks, crypto/trading platforms, and fan-engagement competitors, using
  the REA engine + open-source intelligence, to inform a SA NeoBank launch.
- **Domains:** all 16 councils (C01–C16).
- **Complexity:** 10/10 (multi-council, multi-entity, multi-source).
- **Primary council:** C04 (Strategy) — owns the programme outcome.
- **Supporting:** C16 (Banking), C10 (Finance), C09 (Marketing), C01 (Legal), C03 (Knowledge), C06/C11 (Tech), C12 (Security), C13 (Web3), C14 (Customer), C15 (Product), C05 (HR), C07 (Sales), C08 (Design), C02 (Ops).

## 2. Scope of Entities

**South African banks:** ABSA, Nedbank, FNB, Standard Bank, Capitec, African Bank.
**SA neobanks / digital banks:** TymeBank→GoTymeBank, Discovery Bank, Bank Zero, Bettr.
**SA crypto/trading:** Luno, VALR, EasyEquities, (eBucks = loyalty platform).
**Global reference banks / wealth:** JPMorgan Chase, JPMorgan Private Bank, Morgan Stanley.
**Global digital banks / neobanks:** Flex.one (Flex), Revolut, Monzo, Nubank, Chime, N26, Starling.
**Fan-engagement / web3 competitors:** Sorare, Socios.com (+Chiliz), Polymarket, FanDuel, Fanatics,
Gate.io.

## 3. Department Reverse-Engineering Task Sheets

Each council produces a **task/prompt list** for its domain. Canonical example (Marketing, C09):

| # | Reverse-engineering task | Question answered | Output file |
|---|---|---|---|
| M1 | Marketing org & staffing | Who runs marketing? Team size? Agencies? | `research/*/<bank>/marketing/01-org-staffing.md` |
| M2 | Strategy & prospectus | Stated strategy, brand positioning, target segments | `marketing/02-strategy.md` |
| M3 | Budget | Ad spend / marketing budget (disclosed or estimated) | `marketing/03-budget.md` |
| M4 | Campaigns | Named campaigns, channels, creatives, timing | `marketing/04-campaigns.md` |
| M5 | Sponsorships & partnerships | Sports/event/brand partnerships + values | `marketing/05-sponsorships.md` |
| M6 | Campaign results & metrics | Reach, engagement, ROI, uplift, awards | `marketing/06-results-metrics.md` |
| M7 | Media & PR | PR strategy, share of voice, crisis comms | `marketing/07-media-pr.md` |
| M8 | How the bank used it | Business outcome attributable to marketing | `marketing/08-business-impact.md` |

(Equivalent sheets exist for every council — see `research/departments/`.)

## 4. Agent Roster (spawned this session)

Spawned as `Task` sub-agents (DeepSeek-V4.1-Flash, low mode) — one per entity × department cluster,
plus cross-cutting and tooling agents.

| Agent ID | Council | Assignment | Output root |
|---|---|---|---|
| AGT-C16-SA-INCUMBENTS | C16 | ABSA, Nedbank, FNB, Standard Bank, Capitec, African Bank | `research/banks/` |
| AGT-C16-SA-NEOBANKS | C16 | TymeBank/GoTyme, Discovery Bank, Bank Zero, Bettr | `research/neobanks-sa/` |
| AGT-C13-CRYPTO | C13 | Luno, VALR, EasyEquities, eBucks | `research/crypto-trading/` |
| AGT-C10-GLOBAL | C10 | JPMorgan Chase, JPMorgan PB, Morgan Stanley, Flex.one | `research/banks/` |
| AGT-C09-MARKETING | C09 | Marketing deep-dive across all SA banks | `research/departments/marketing/` |
| AGT-C01-LEGAL | C01 | Licences, FICA/POPIA/NCA, Ombudsman | `research/cross-cutting/regulation/` |
| AGT-C05-HR | C05 | People, headcount, salaries, B-BBEE | `research/departments/people/` |
| AGT-C07-PARTNERSHIPS | C07 | Sponsorships, affinity, merchant deals | `research/departments/partnerships/` |
| AGT-C12-SECURITY | C12 | Fraud, AML, incidents, security posture | `research/departments/security/` |
| AGT-C14-CUSTOMER | C14 | NPS/CSAT, complaints, service SLAs | `research/departments/customer/` |
| AGT-COMPETITORS-FAN | C07/C13 | Sorare, Socios/Chiliz, Polymarket, FanDuel, Fanatics, Gate | `research/competitors/` |
| AGT-C03-SOURCES | C03 | Source library, keyword taxonomy, papers | `source-library/` |
| AGT-C11-TOOLS | C11 | REA business toolkit build | `tools/rea-business-toolkit/` |

## 5. Execution Waves

```text
WAVE 0  Foundation            (SC)      architecture + governance + REA setup   [done]
WAVE 1  Entity research       (AGT-*)   per-entity, all departments
WAVE 2  Department synthesis  (AGT-*)   cross-bank, in research/departments/
WAVE 3  Competitors           (AGT-*)   fan-engagement + crypto
WAVE 4  Tooling               (AGT-C11) REA business toolkit
WAVE 5  Consolidation         (SC+AGT)  per-entity journey/breakdown + charts
WAVE 6  Audit & commit        (SC)      source index, ledger, git commits
```

## 6. SLA & Gates (SAOS)

- Critical 1h · High 4h · Medium 24h · Low 72h.
- Gates: **no-fabrication**, **source-cited**, **no-secrets**, **public-only**.

## 7. Quality Standard (C03 + C01)

- Every file ≥ its required front-matter; ≥1 source per non-obvious claim.
- `status: verified` requires ≥2 independent sources.
- Index every source in `source-library/INDEX.md`.

## 8. Additional Add-On Tasks (enhancers)

A1. Pricing & fee matrix diff across all SA banks (CSV + chart).
A2. Payments-rails map (PayShap, RTC, EFT, card, QR) per bank.
A3. Loyalty-programme teardown (eBucks, Discovery Vitality, Absa Rewards, Capitec Live Better, UCount).
A4. Crypto/stablecoin rails for a neobank (Luno/VALR/ZAR stablecoin, JPM Coin, Kinexys).
A5. App-store footprint & ratings timeseries per bank.
A6. Regulator-register reconciliation (SARB licensed banks, FSCA FSPs, NCR, PASA/PSO).
A7. Employer-brand & job-posting tech-stack mining.
A8. Macro context: SARB repo rate, inflation, unbanked %, digital-banking market size.
A9. Customer-complaint corpus (Ombudsman annual reports).
A10. Competitor (fan-engagement) business-model teardown for a NeoBank loyalty/gamification play.

## 9. Deliverables

- `research/` tree (per entity × department).
- `deliverables/summaries/<entity>-journey.md` (start → growth → products → full breakdown).
- `deliverables/charts/` (Mermaid/DOT/SVG/CSV).
- `tools/rea-business-toolkit/`.
- `source-library/INDEX.md`.
