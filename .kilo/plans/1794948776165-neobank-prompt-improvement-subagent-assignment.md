# Plan — NeoBank Prompt Improvement Subagent Assignment (Ask Mode Preparation)

**Program:** NeoBank ZA (`Project Umoya`)  
**Mode:** Plan Mode → Ask Mode preparation only (no execution)  
**Plan date:** 2026-11-17  
**Owner:** Sparkling Curious (SC-MASTER-001) delegation layer  
**Plan file:** `.kilo/plans/1794948776165-neobank-prompt-improvement-subagent-assignment.md`

---

## 1. Context & Objective

The user requests a subagent assignment plan across all 16 Stremiium councils/departments (C01–C16) for:

1. **Using all research data in the repo** — the `morluto/rea` reverse-engineering engine cloned at `/workspace/app/rea` (207 MCP tools, 153 CLI commands, verified build) plus the NeoBank research corpus under `/workspace/app/02-research/` (SA banking landscape, 33 neobank/challenger profiles, regulatory & licensing pack, institution deep-dives) plus program artifacts under `/workspace/app/01-program/` (council charters, delivery governance, execution ledger) plus `/workspace/app/06-architecture/` (NeoBank platform design).

2. **Modifying/improving all prompts related to the Neobank** — the MP-BF series (MP-BF01 through MP-BF18, NeoBank Service Artifact Generators) plus cross-cutting prompts that touch the NeoBank (MP-BD02 Banking Firm, MP-BD07 Tax/Accounting, MP-BE13 Reconciliation, MP-BI series legal/compliance, MP-BJ research prompts).

This is **Ask Mode only**: the plan prepares master prompts and subagent assignments. No prompt is executed here. Every runnable prompt is locked to `qwen3.8-omni-flash`. Every prompt produces its own unconsolidated artifact. Sparkling Curious remains the delegation layer.

---

## 2. Research Data Sources (to be ingested by subagents)

| Source | Path | What it provides |
|--------|------|------------------|
| REA reverse-engineering engine | `/workspace/app/rea` | 207 MCP tools + 153 CLI commands for static analysis of Android APKs, Electron/web banking apps, JS, Go/Rust metadata, WASM/EVM/SQLite/PE/binaries, archives. Verified build (`npm ci`, `npm run build:cached`, `rea doctor`). |
| SA banking landscape research | `/workspace/app/02-research/landscape/01-sa-banking-landscape/` | Big Five + Tier-2 + specialised/development banks, institution matrix, sourced profiles. |
| Neobank & challenger research | `/workspace/app/02-research/landscape/03-neobank-digital-competitors/` | 33 entities: digital banks, payments fintechs, wallets, crypto/CASP; competitive matrix; wallet/mobile money; sources. |
| Regulatory & licensing pack | `/workspace/app/02-research/landscape/02-regulatory-framework/` | Banks Act, FICA, POPIA, FAIS, NCA, NPS, payments, tax, CARF, licensing roadmap 0–24m, `[S#]`-graded evidence. |
| Institution deep-dives | `/workspace/app/02-research/landscape/06-institution-deep-dives/` | ABSA, Nedbank, FNB, Standard Bank, Discovery, TymeBank/GoTyme, African Bank, Capitec, Investec, Bidvest, Bank Zero, OM Bank, Access Bank, Luno, VALR, JPMorgan, Morgan Stanley, Flex; 10-file set per institution. |
| NeoBank program plan | `/workspace/app/01-program/plan/PLAN.md` | WBS W0–W11, quality gates, escalation, definition of done. |
| NeoBank councils | `/workspace/app/01-program/councils/` | 16 council charters (C01–C16), captain roles, agent rosters, KPIs, SA-specific mandate notes. |
| NeoBank delivery | `/workspace/app/01-program/delivery/` | Governance, risk register, roadmaps, definition of done, quality gates, ways of working. |
| NeoBank execution ledger | `/workspace/app/01-program/artifacts/execution-ledger.md` | W1–W10 deliverable roots and status (all DONE as of 2026-10-16). |
| NeoBank platform architecture | `/workspace/app/06-architecture/platform-design/` | System design, domain model, integrations, data, platform, security architecture. |
| SAOS governance | `/workspace/app/.stremiium/` | Council-department mapping, Sparkling Curious agent prompt, workflow routing, state architecture, policies, templates. |

---

## 3. Neobank-Related Prompts in Scope for Modification/Improvement

**Core NeoBank series (MP-BF01–MP-BF18):** all 18 NeoBank Service Artifact Generators.

**Cross-cutting prompts that touch the NeoBank:**

| Prompt | Council | Relevance to NeoBank |
|--------|---------|----------------------|
| MP-BD02 Banking Firm Subagent Pack | C16 | account structures, nostro/vostro, correspondent banking, payment rails, ISO 20022, clearing/settlement, SARB/local payment system research |
| MP-BD07 Taxes & Accounting Firm Pack | C10 | bookkeeping, VAT, PAYE, UIF, SDL, corporate tax, CARF readiness, exchange control reporting |
| MP-BE13 Reconciliation Engine | C10 + C16 | orders, deals, positions, balance, equity, margin, commissions, swaps, PnL reconciliation |
| MP-BI01 POPIA Data Inventory | C01 | personal/financial/trading/prediction-market/voice/employee/customer/agent-log data |
| MP-BI02 POPIA DPIA | C01 + C12 | NeoBank wallet, trading firm, AI Agent OS, automated decision-making, cross-border |
| MP-BI03 POPIA Cross-Border SCCs | C01 | inter-CASP cross-border transfers |
| MP-BI04 FICA CDD/STR Workflow | C01 + C16 | identity verification, beneficial ownership, transaction monitoring, STR filing |
| MP-BI05 Travel Rule Protocol | C01 + C13 | originator/beneficiary data, VASP verification, secure messaging |
| MP-BI06 SARS CARF Readiness | C01 + C10 | CARF data fields, RCASP status, retention, privacy controls |
| MP-BI07 FSCA/FAIS Classification | C01 | crypto asset services, wallet, neo-bank, automated trading, licensing |
| MP-BI08 CASP Policy | C01 + C13 | custody boundaries, client asset segregation, AML/CDD, Travel Rule |
| MP-BI09 Wallet Terms of Use | C01 + C15 | KYC/AML, PIN, MPC, prohibited use, risk disclosure, fees, governing law |
| MP-BI15 Creator Payments & Withholding | C10 + C16 | contractor classification, withholding, PAYE, VAT, cross-border, exchange control |
| MP-BJ01 Candle Range Theory Research | C04 + C11 | trading strategy hypothesis (adjacent to NeoBank trading ledger) |
| MP-BJ07 arXiv 2511.16719 Research | C03 + C11 | research paper ingestion method (applies to neobank research workflow) |
| MP-BJ09 Lawful OSINT Dashboard | C04 + C12 | public financial filings, news (competitive intelligence for neobank) |
| MP-BJ10 Kimi K3 Agent Graph | C11 + C03 | agent graph applicability to 16 councils, Sparkling Curious, trading swarm |
| MP-BJ11 Astra Reasoning Tier Mapping | C11 + C03 | reasoning-tier routing for prompt improvement work |

---

## 4. Subagent Assignments by Council (C01–C16)

Each subagent: ingests research data from the sources in §2, reviews/improves assigned Neobank prompts, produces one unconsolidated artifact. Model locked to `qwen3.8-omni-flash`. Ask Mode only.

### C01 — Legal-Compliance (Legal-Compliance Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C01-POPIA-NEO-001 | `02-research/landscape/02-regulatory-framework/privacy-popia.md`, `02-research/source-library/` POPIA sources | MP-BI01 (POPIA Data Inventory), MP-BI02 (POPIA DPIA), MP-BI03 (POPIA SCCs) | `artifacts/neobank/legal/popia-compliance-prompts.md` | C01 + Executive |
| SUB-C01-FICA-NEO-002 | `02-research/landscape/02-regulatory-framework/aml-fica.md`, `02-research/source-library/` FICA sources | MP-BI04 (FICA CDD/STR), MP-BF11 (KYC/AML Workflow) | `artifacts/neobank/legal/fica-aml-prompts.md` | C01 + C16 |
| SUB-C01-CARF-NEO-003 | `02-research/landscape/02-regulatory-framework/tax-governance.md`, CARF sources | MP-BI06 (SARS CARF Readiness), MP-BF13 (CARF Reporting Mapper) | `artifacts/neobank/legal/carf-prompts.md` | C01 + C10 |
| SUB-C01-TRAVEL-NEO-004 | `02-research/landscape/02-regulatory-framework/` payments-nps, Travel Rule sources | MP-BI05 (Travel Rule Protocol), MP-BF12 (Travel Rule Service) | `artifacts/neobank/legal/travel-rule-prompts.md` | C01 + C12 |
| SUB-C01-FSCA-FAIS-NEO-005 | `02-research/landscape/02-regulatory-framework/conduct-fais-nca.md`, FSCA sources | MP-BI07 (FSCA/FAIS Classification), MP-BI08 (CASP Policy) | `artifacts/neobank/legal/fsca-fais-casp-prompts.md` | C01 |
| SUB-C01-WALLET-TERMS-NEO-006 | `02-research/landscape/02-regulatory-framework/` consumer protection, CPA | MP-BI09 (Wallet Terms of Use), MP-BI10 (Prediction Market Terms) | `artifacts/neobank/legal/wallet-terms-prompts.md` | C01 + C15 |

### C02 — Operations (VP-Operations)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C02-OPS-NEO-001 | `01-program/plan/PLAN.md` WBS W0–W11, `01-program/delivery/ways-of-working.md`, `01-program/artifacts/execution-ledger.md` | MP-BF01 (Project Structure), MP-BF05 (PRD), MP-BF18 (Launch Gate) | `artifacts/neobank/operations/project-structure-prompts.md` | C02 + C15 |
| SUB-C02-OPS-NEO-002 | `01-program/delivery/risk/`, `01-program/delivery/roadmaps/`, `01-program/delivery/definition-of-done.md` | MP-BF18 (Launch Gate Checklist), operational rollout prompts | `artifacts/neobank/operations/launch-and-rollout-prompts.md` | C02 + Executive |

### C03 — Admin-Knowledge (Chief-Librarian)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C03-KB-NEO-001 | `02-research/source-library/INDEX.md`, `02-research/source-library/BIBLIOGRAPHY.md`, `02-research/source-library/COVERAGE-MATRIX.md`, `01-program/artifacts/` | MP-BF02 (Knowledge Base Inventory), knowledge-base prompt templates | `artifacts/neobank/knowledge-base/prompts.md` | C03 + C01 |
| SUB-C03-DOCS-NEO-002 | `01-program/councils/` charters, `01-program/delivery/` governance, `06-architecture/` READMEs | documentation-control prompts, naming hygiene, artifact provenance for neobank | `artifacts/neobank/knowledge-base/document-control-prompts.md` | C03 |

### C04 — Strategy-Growth (Chief-Strategist)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C04-STRAT-NEO-001 | `02-research/landscape/03-neobank-digital-competitors/`, `02-research/landscape/06-institution-deep-dives/`, competitive matrix | MP-BF05 (PRD — market/GTM sections), competitor intelligence prompts | `artifacts/neobank/strategy/competitive-intelligence-prompts.md` | C04 + C01 |
| SUB-C04-STRAT-NEO-002 | `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md`, `02-research/synthesis/` | MP-BJ09 (Lawful OSINT Dashboard), market research prompts | `artifacts/neobank/strategy/market-research-prompts.md` | C04 + C12 |

### C05 — HR-Culture (Chief-People-Officer)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C05-HR-NEO-001 | `01-program/councils/c05-hr-people/CHARTER.md`, `02-research/synthesis/cross-cutting/keywords/` | neobank staffing/training prompts, founder stipend/labor tax adjacency (MP-BI16), culture/communication prompts | `artifacts/neobank/hr/people-and-training-prompts.md` | C05 + C01 |

### C06 — Engineering-Infrastructure (Chief Technology Officer)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C06-INFRA-NEO-001 | `/workspace/app/rea` (REA tool inventory, tool-catalog, MCP tool names), `06-architecture/platform-design/platform/` | MP-BF01 (Project Structure — infra/devops sections), MP-BF03 (Database — infra/hosting sections) | `artifacts/neobank/engineering/infrastructure-prompts.md` | C06 + C12 |
| SUB-C06-INFRA-NEO-002 | `/workspace/app/rea/docs/architecture.mermaid`, REA setup-and-verification, `01-program/plan/PLAN.md` §3 (REA method) | REA integration prompts for neo-bank app reverse-engineering targets | `artifacts/neobank/engineering/rea-integration-prompts.md` | C06 + C11 |

### C07 — Sales-Revenue (Rainmaker-Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C07-SALES-NEO-001 | `02-research/landscape/03-neobank-digital-competitors/`, pricing/fee-matrix add-on, partnership research | MP-BF05 (PRD — GTM/commercial sections), partnership scouting prompts | `artifacts/neobank/sales/gtm-and-partnership-prompts.md` | C07 + C01 |

### C08 — Design-Creative (Chief Design Officer)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C08-DESIGN-NEO-001 | `06-architecture/platform-design/` (UI/UX references), `02-research/landscape/03-neobank-digital-competitors/` (competitor app UI patterns) | MP-BF01 (Project Structure — frontend/UI sections), wallet UI and trading dashboard prompts | `artifacts/neobank/design/ui-ux-prompts.md` | C08 + Accessibility |
| SUB-C08-DESIGN-NEO-002 | `02-research/landscape/03-neobank-digital-competitors/sources.md` (competitor app evidence) | prediction-market UI adjacency prompts (MP-BG series) where they overlap neobank wallet UI | `artifacts/neobank/design/visual-identity-prompts.md` | C08 + C01 |

### C09 — Marketing-Growth (Chief Marketing Officer)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C09-MKTG-NEO-001 | `02-research/landscape/03-neobank-digital-competitors/`, marketing/competitor positioning research | MP-BF05 (PRD — marketing/localization/accessibility sections), financial-marketing compliance prompts | `artifacts/neobank/marketing/compliance-messaging-prompts.md` | C09 + C01 |

### C10 — Finance-CFO (Chief Financial Officer)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C10-FIN-NEO-001 | `02-research/landscape/02-regulatory-framework/tax-governance.md`, `02-research/synthesis/cross-cutting/regulation/` | MP-BI06 (SARS CARF Readiness), MP-BF13 (CARF Reporting Mapper), MP-BD07 (Tax/Accounting) | `artifacts/neobank/finance/tax-and-carf-prompts.md` | C10 + C01 |
| SUB-C10-FIN-NEO-002 | `02-research/landscape/01-sa-banking-landscape/`, `02-research/synthesis/cross-cutting/add-on/01-PRICING-FEE-MATRIX.md` | MP-BF09 (Ledger Service), MP-BF10 (Payment Orchestration — finance sections), MP-BE13 (Reconciliation) | `artifacts/neobank/finance/ledger-and-payments-prompts.md` | C10 + C16 |
| SUB-C10-FIN-NEO-003 | `01-program/councils/c10-finance-cfo/CHARTER.md`, `01-program/delivery/risk/` | capital adequacy, treasury, budget authority prompts for neobank | `artifacts/neobank/finance/treasury-and-capital-prompts.md` | C10 + Executive |

### C11 — Dev-Engineering (Dev-Engineering Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C11-DEV-NEO-001 | `/workspace/app/rea` (MCP tools, CLI commands, tool-catalog.md), `06-architecture/platform-design/integrations/` | MP-BF06 (Backend Service Map), MP-BF07 (API Contract), MP-BF10 (Payment Orchestration engine) | `artifacts/neobank/dev-engineering/backend-and-api-prompts.md` | C11 + C12 |
| SUB-C11-DEV-NEO-002 | `/workspace/app/rea` (REA method §3 of PLAN.md), `06-architecture/platform-design/domain-model/` | MP-BF03 (Database Schema Pack), MP-BF08 (Wallet Service Spec), MP-BJ10 (Kimi K3 agent graph) | `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md` | C11 + C13 |
| SUB-C11-DEV-NEO-003 | `01-program/plan/PLAN.md` §3 (REA reverse-engineering method), `/workspace/app/rea/AGENTS.md` | REA-to-neobank target mapping prompts (APK/Electron/web/SQLite analysis of competitor banking apps) | `artifacts/neobank/dev-engineering/rea-target-analysis-prompts.md` | C11 + C12 |

### C12 — Cybersecurity-Intel (Cybersecurity-Intelligence Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C12-CYBER-NEO-001 | `06-architecture/platform-design/security/` (STRIDE threat model, ISO 27001, NIST CSF), `02-research/synthesis/cross-cutting/regulation/` | MP-BF04 (Guardrails Catalogue), MP-BF14 (MPC Key Management), MP-BF15 (PIN Verification) | `artifacts/neobank/security/guardrails-and-mpc-prompts.md` | C12 + C01 |
| SUB-C12-CYBER-NEO-002 | `06-architecture/platform-design/security/` (fraud, AML, IR, secure SDLC), `02-research/landscape/06-institution-deep-dives/` (crypto CASP security) | MP-BF16 (Fraud & ATO Controls), MP-BE16 (Trading Kill Switch adjacency) | `artifacts/neobank/security/fraud-and-ato-prompts.md` | C12 + C01 |
| SUB-C12-CYBER-NEO-003 | `02-research/landscape/02-regulatory-framework/privacy-popia.md` (cross-border, breach reporting), REA security research | MP-BI02 (POPIA DPIA security sections), MP-BI03 (POPIA SCCs) | `artifacts/neobank/security/privacy-and-cross-border-prompts.md` | C12 + C01 |

### C13 — Web3-Finance (Web3-Financial-Infrastructure Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C13-WEB3-NEO-001 | `02-research/landscape/06-institution-deep-dives/za-crypto/` (Luno, VALR), `02-research/landscape/03-neobank-digital-competitors/` (crypto/CASP entities) | MP-BF08 (Wallet Service — MPC/crypto sections), MP-BF12 (Travel Rule), MP-BI08 (CASP Policy) | `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md` | C13 + C01 |
| SUB-C13-WEB3-NEO-002 | `02-research/landscape/02-regulatory-framework/tax-governance.md` (CARF, FATCA/CRS), `02-research/landscape/03-neobank-digital-competitors/` | MP-BI15 (Creator Payments — crypto portions), MP-BJ06 (ZKP research for privacy-preserving KYC) | `artifacts/neobank/web3/crypto-compliance-prompts.md` | C13 + C10 |

### C14 — Customer-Success (VP-Customer-Success)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C14-CS-NEO-001 | `02-research/landscape/03-neobank-digital-competitors/` (customer support patterns), `01-program/councils/c14-customer-success/CHARTER.md` | MP-BF17 (Dispute & Chargeback Workflow), MP-BF02 (Knowledge Base — support macros) | `artifacts/neobank/customer-success/dispute-and-support-prompts.md` | C14 + C01 |
| SUB-C14-CS-NEO-002 | `02-research/landscape/03-neobank-digital-competitors/wallets-mobile-money.md` (under-banked segment) | MP-BF18 (Launch Gate — customer readiness), onboarding/U-X prompts | `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md` | C14 + C15 |

### C15 — Product-Management (Product-Management Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C15-PROD-NEO-001 | `01-program/plan/PLAN.md` §1 (objective), `02-research/landscape/01-sa-banking-landscape/`, `02-research/landscape/03-neobank-digital-competitors/` | MP-BF05 (PRD Template — full), MP-BF01 (Project Structure — product pillars) | `artifacts/neobank/product/prd-and-structure-prompts.md` | C15 + C01 |
| SUB-C15-PROD-NEO-002 | `06-architecture/platform-design/domain-model/` (double-entry ledger, money & currency), `02-research/landscape/03-neobank-digital-competitors/` | MP-BF09 (Ledger Service Spec), MP-BF08 (Wallet Service — product sections) | `artifacts/neobank/product/wallet-and-ledger-prompts.md` | C15 + C10 |

### C16 — Banking-Fintech (Banking-Fintech Captain)

| Subagent ID | Research data to ingest | Prompts to modify/improve | Output artifact | Gate |
|-------------|------------------------|---------------------------|-----------------|------|
| SUB-C16-BANK-NEO-001 | `02-research/landscape/02-regulatory-framework/banking-licensing.md`, `02-research/landscape/02-regulatory-framework/payments-nps.md`, `02-research/synthesis/cross-cutting/add-on/02-PAYMENTS-RAILS-MAP.md` | MP-BD02 (Banking Firm Subagent Pack — neobank-specific), MP-BF01 (Project Structure — banking sections) | `artifacts/neobank/banking/banking-firm-and-structure-prompts.md` | C16 + C01 |
| SUB-C16-BANK-NEO-002 | `02-research/landscape/02-regulatory-framework/payments-nps.md` (PayShap, ISO 20022, clearing), `06-architecture/platform-design/integrations/` | MP-BF06 (Backend — payment service), MP-BF07 (API — payment endpoints), MP-BF10 (Payment Orchestration) | `artifacts/neobank/banking/payment-rails-and-orchestration-prompts.md` | C16 + C12 |
| SUB-C16-BANK-NEO-003 | `02-research/landscape/01-sa-banking-landscape/institution-matrix.md`, `01-program/councils/c16-banking-fintech/CHARTER.md` | MP-BE13 (Reconciliation Engine — banking sections), MP-BF09 (Ledger — treasury/settlement) | `artifacts/neobank/banking/reconciliation-and-settlement-prompts.md` | C16 + C10 |

---

## 5. Research Data Integration Method (per subagent)

Each subagent must:

1. **Ingest** the assigned research data sources (read, extract, note evidence grades `[FACT]/[EST]/[UNKNOWN]/[INFER]` and `[S#]` references).
2. **Map** research findings to specific prompt sections in the assigned MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ prompts.
3. **Identify gaps** — research data that exists but is not reflected in the current prompt; prompt content that lacks research backing.
4. **Propose improvements** — rewrite prompt sections with concrete research citations, add missing regulatory/technical/UX/security content, replace placeholders/TBD.
5. **Preserve evidence discipline** — every improved claim carries a source reference or is explicitly marked unverified; no fabricated figures.
6. **Produce one unconsolidated artifact** at the stated output path with the 16 required sections from the Common Master Prompt Header.

---

## 6. Artifact Output Structure

All artifacts live inside the Stremiium / Independent-projects workspace:

```
artifacts/neobank/
├── legal/                 # C01 outputs (popia, fica, carf, travel-rule, fsca-fais-casp, wallet-terms)
├── operations/            # C02 outputs (project-structure, launch-and-rollout)
├── knowledge-base/        # C03 outputs (prompts, document-control)
├── strategy/              # C04 outputs (competitive-intelligence, market-research)
├── hr/                    # C05 outputs (people-and-training)
├── engineering/           # C06 outputs (infrastructure, rea-integration)
├── sales/                 # C07 outputs (gtm-and-partnership)
├── design/                # C08 outputs (ui-ux, visual-identity)
├── marketing/             # C09 outputs (compliance-messaging)
├── finance/               # C10 outputs (tax-and-carf, ledger-and-payments, treasury-and-capital)
├── dev-engineering/       # C11 outputs (backend-and-api, database-and-wallet, rea-target-analysis)
├── security/              # C12 outputs (guardrails-and-mpc, fraud-and-ato, privacy-and-cross-border)
├── web3/                  # C13 outputs (wallet-and-travel-rule, crypto-compliance)
├── customer-success/      # C14 outputs (dispute-and-support, onboarding-and-readiness)
├── product/               # C15 outputs (prd-and-structure, wallet-and-ledger)
└── banking/               # C16 outputs (banking-firm-and-structure, payment-rails-and-orchestration, reconciliation-and-settlement)
```

Cross-cutting prompt improvements (MP-BD02, MP-BD07, MP-BE13, MP-BI series, MP-BJ series) produce artifacts under `artifacts/trading/`, `artifacts/legal/`, `artifacts/research/` per their existing category paths, but must reference neobank relevance.

---

## 7. Execution Flow (Ask Mode — Preparation Only)

1. Sparkling Curious receives this plan and assigns each subagent to its council captain.
2. Council captain reviews subagent assignment against charter mandate and special authority (C01 legal veto, C16 banking compliance, C12 security, C10 budget, C15 product).
3. Each subagent produces its master prompt (Ask Mode only — the prompt text itself is the artifact; no execution).
4. Each master prompt carries: Summary, Assumptions, Questions, Concerns, Suggested improvements, Missing dependencies, Step-by-step plan, Commands/configs/schemas, Validation checklist, Security considerations, SA regulatory considerations, Compliance gate, Rollback plan, Escalation path, Artifact handoff to Sparkling Curious.
5. Sparkling Curious synthesizes, monitors for conflicts, and gates handoff to Plan Mode / Code Mode for later execution.
6. No prompt is executed in this session. Model locked to `qwen3.8-omni-flash` for every prompt.

---

## 8. Compliance Gates & Escalation

| Gate | Owner | Applies to |
|------|-------|------------|
| Legal-Compliance veto | C01 Captain | All neobank prompts touching money/data surfaces |
| Banking compliance authority | C16 Captain | MP-BF01, MP-BF06, MP-BF07, MP-BF08, MP-BF09, MP-BF10 |
| Security gate | C12 Captain | MP-BF04, MP-BF14, MP-BF15, MP-BF16 |
| Budget authority | C10 Captain | MP-BF10, MP-BF13, treasury/capital prompts |
| Product decision authority | C15 Captain | MP-BF05, MP-BF01 (product pillars) |
| Accessibility gate | C08 Captain | All UI/UX prompts (MP-BF01 frontend sections) |

**Escalation path:** Subagent → Council Captain → Sparkling Curious → Mychael (CEO) → Board. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

---

## 9. South African Regulatory Considerations (mandatory per prompt)

Every improved neobank prompt must surface, where relevant:

- **FSCA** — CASP licensing under FAIS Act; financial advice classification
- **FICA** — accountable institution, RMCP, CDD/EDD, STR/CTR/TPR, tipping-off prevention
- **POPIA** — 8 conditions, Information Officer registration, s72 cross-border, breach reporting
- **SARS CARF** — effective March 2026, crypto-asset/e-money reporting, RCASP status
- **FAIS** — FSP categories, fit-and-proper, conduct perimeter
- **FSR Act 9 of 2017** — Twin Peaks, market conduct
- **Companies Act 71 of 2008** — public company requirement for banks, governance
- **King IV** — governance and assurance mapping
- **Consumer Protection Act 68 of 2008** — consumer disclosures, unfair practices
- **National Credit Act** — credit provider registration where relevant
- **Exchange Control Rules** — SARB FinSurv, ADLA, cross-border crypto flows
- **Travel Rule** — originator/beneficiary data, VASP verification
- **CASP obligations** — custody boundaries, client asset segregation
- **Automated decision-making restrictions** — human-in-the-loop, POPIA s71-style safeguards
- **NPS Act 78 of 1998** — PayShap, ISO 20022, clearing/settlement, PSMB→SARB transition (Aug 2026)
- **Banks Act 94 of 1990** — s12 authorisation, s16 registration, PA prudential gate
- **FATF grey-list exit (Oct 2025)** — AML/CFT supervision remains intense

---

## 10. Validation Checklist (per subagent artifact)

- [ ] Research data sources cited with `[S#]` references or explicitly marked unverified
- [ ] Evidence grades preserved (`[FACT]/[EST]/[UNKNOWN]/[INFER]`)
- [ ] All 16 required sections from Common Master Prompt Header present
- [ ] Model lock stated as `qwen3.8-omni-flash` (no substitution)
- [ ] Ask Mode only — no execution language
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated (no placeholders/TBD)
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Artifact handoff to Sparkling Curious described
- [ ] Artifact path inside Stremiium / Independent-projects workspace
- [ ] No private keys, credentials, or PII in artifact

---

## 11. Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Research data may be stale (access date 2026-10-16) | Every artifact flags figures needing re-verification against primary sources |
| Regulatory uncertainty (non-bank payment framework draft, COFI Bill not enacted) | Prompts mark non-binding items as `[CONSULT]`; require external counsel review |
| REA native/APK deep analysis needs BYO engine (Hopper/Ghidra/IDA/JADX) not in sandbox | Subagents scope REA use to static JS/Electron/SQLite/web capture; flag native analysis as out-of-scope |
| Prompt consolidation risk (multiple subagents editing same MP-BF prompt) | Each subagent owns discrete prompt sections; Sparkling Curious synthesizes and de-conflicts |
| No public investor/client funds (private-funded boundary) | All prompts state private-funded-only unless separately approved by Legal-Compliance + Banking-Fintech + Finance + Mychael |

---

## 12. Open Decisions (to resolve before Plan Mode handoff)

None blocking. The plan is implementation-ready for Ask Mode prompt preparation. Subagent rosters in council charters are marked PROPOSED (not staffed) per existing charter convention; captains must ratify before delegation.

---

**Next step:** Execute Ask Mode prompt preparation using these subagent assignments. Each subagent generates its own unconsolidated master prompt artifact at the stated output path, locked to `qwen3.8-omni-flash`, for later handoff to Plan Mode / Code Mode.
