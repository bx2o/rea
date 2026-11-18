# Plan — NeoBank Code Mode Execution of All Artifact Prompts (Subagent Delegation)

**Program:** NeoBank ZA (`Project Umoya`)  
**Mode:** Plan Mode → Code Mode execution  
**Plan date:** 2026-11-17  
**Owner:** Sparkling Curious (SC-MASTER-001) delegation layer  
**Plan file:** `.kilo/plans/1794948779713-neobank-code-mode-execution.md`  
**Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`) — no substitution, all prompts and subagents  
**Status:** Implementation-ready for Code Mode  

---

## 1. Objective

Execute all 37 existing NeoBank master prompt artifacts under `artifacts/neobank/` in **Code Mode** using subagents across all 16 Stremiium councils (C01–C16). Each subagent reads its assigned master prompt, ingests research data, executes the prompt, and produces an execution result artifact plus any code outputs. All new folders and files are committed, merged (if branched), and pushed to `main`.

This is **Code Mode execution** (not Ask Mode preparation). The 37 master prompt artifacts already exist and are all locked to `auto`. This plan governs running them.

---

## 2. Model Lock (Mandatory)

- **Every prompt and subagent:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`).
- No model substitution. No `qwen3.8-omni-flash` references permitted.
- Per `.stremiium/config/agents/model-routing-policy.json`: regulated/sensitive data may use `private`/`security` tiers only with approval; default remains `auto`.
- All execution artifacts must state `Execution model: auto.` and `Model policy: LOCKED to auto`.

---

## 3. New Folders and Files to Create

### 3.1 Execution tracking (new)

```
artifacts/neobank/execution/
├── EXECUTION_LEDGER.md              # Master tracking ledger: all 37 artifacts, subagent, status, model, gate
├── results/
│   ├── c01-legal-compliance/        # C01 subagent execution results (6 artifacts)
│   ├── c02-operations/              # C02 subagent execution results (2 artifacts)
│   ├── c03-admin-knowledge/         # C03 subagent execution results (2 artifacts)
│   ├── c04-strategy-growth/         # C04 subagent execution results (2 artifacts)
│   ├── c05-hr-culture/              # C05 subagent execution results (1 artifact)
│   ├── c06-engineering-infrastructure/  # C06 subagent execution results (2 artifacts)
│   ├── c07-sales-revenue/           # C07 subagent execution results (1 artifact)
│   ├── c08-design-creative/         # C08 subagent execution results (2 artifacts)
│   ├── c09-marketing-growth/        # C09 subagent execution results (1 artifact)
│   ├── c10-finance-cfo/             # C10 subagent execution results (3 artifacts)
│   ├── c11-dev-engineering/         # C11 subagent execution results (3 artifacts)
│   ├── c12-cybersecurity-intel/     # C12 subagent execution results (3 artifacts)
│   ├── c13-web3-finance/            # C13 subagent execution results (2 artifacts)
│   ├── c14-customer-success/        # C14 subagent execution results (2 artifacts)
│   ├── c15-product-management/      # C15 subagent execution results (2 artifacts)
│   ├── c16-banking-fintech/         # C16 subagent execution results (3 artifacts)
│   └── cross-council/               # Cross-council prompt results (MP-BD, MP-BE, MP-BI, MP-BJ series)
└── code-outputs/                    # Actual code/artifacts produced by execution
    ├── contracts/                   # Smart contracts, policy docs
    ├── api-specs/                   # API contracts, OpenAPI specs
    ├── configs/                     # Configuration files, env templates
    ├── scripts/                     # Automation, deployment scripts
    └── specs/                       # Technical specs, DB schemas, wallet specs
```

### 3.2 Per-result artifact template

Each file under `artifacts/neobank/execution/results/cNN-*/` is named after the source master prompt, e.g. `popia-compliance-execution-result.md`, and contains:

- Source artifact path
- Subagent ID and council
- Model used (`auto`)
- Execution status (not-started / in-progress / executed / partial / blocked)
- Research data ingested (with `[S#]` citations and evidence grades)
- Prompt sections improved (MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ references)
- Code outputs produced (paths under `code-outputs/`)
- Compliance gate sign-off (council captain + executive where applicable)
- SA regulatory considerations (FSCA, FICA, POPIA, CARF, FAIS, etc.)
- Rollback plan
- Escalation path

### 3.3 Execution ledger (`EXECUTION_LEDGER.md`)

Single source of truth tracking all 37 artifact executions:

| # | Artifact path | Council | Subagent ID | Model | Status | Gate | Date executed | Result artifact |
|---|---|---|---|---|---|---|---|---|

---

## 4. Subagent Assignments by Council (Code Mode Execution)

Model: all `auto`. Each subagent executes one or more master prompt artifacts.

### C01 — Legal-Compliance (6 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C01-POPIA-NEO-001 | `artifacts/neobank/legal/popia-compliance-prompts.md` | MP-BI01, MP-BI02, MP-BI03 | C01 + Executive |
| SUB-C01-FICA-NEO-002 | `artifacts/neobank/legal/fica-aml-prompts.md` | MP-BI04, MP-BF11 | C01 + C16 |
| SUB-C01-CARF-NEO-003 | `artifacts/neobank/legal/carf-prompts.md` | MP-BI06, MP-BF13 | C01 + C10 |
| SUB-C01-TRAVEL-NEO-004 | `artifacts/neobank/legal/travel-rule-prompts.md` | MP-BI05, MP-BF12 | C01 + C12 |
| SUB-C01-FSCA-FAIS-NEO-005 | `artifacts/neobank/legal/fsca-fais-casp-prompts.md` | MP-BI07, MP-BI08 | C01 |
| SUB-C01-WALLET-TERMS-NEO-006 | `artifacts/neobank/legal/wallet-terms-prompts.md` | MP-BI09, MP-BI10 | C01 + C15 |

### C02 — Operations (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C02-OPS-NEO-001 | `artifacts/neobank/operations/project-structure-prompts.md` | MP-BF01, MP-BF05, MP-BF18 | C02 + C15 |
| SUB-C02-OPS-NEO-002 | `artifacts/neobank/operations/launch-and-rollout-prompts.md` | MP-BF18 (Launch Gate), operational rollout | C02 + Executive |

### C03 — Admin-Knowledge (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C03-KB-NEO-001 | `artifacts/neobank/knowledge-base/prompts.md` | MP-BF02, knowledge-base templates | C03 + C01 |
| SUB-C03-DOCS-NEO-002 | `artifacts/neobank/knowledge-base/document-control-prompts.md` | Documentation control, naming hygiene, artifact provenance | C03 |

### C04 — Strategy-Growth (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C04-STRAT-NEO-001 | `artifacts/neobank/strategy/competitive-intelligence-prompts.md` | MP-BF05 (market/GTM), competitor intelligence | C04 + C01 |
| SUB-C04-STRAT-NEO-002 | `artifacts/neobank/strategy/market-research-prompts.md` | MP-BJ09 (OSINT), market research | C04 + C12 |

### C05 — HR-Culture (1 subagent)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C05-HR-NEO-001 | `artifacts/neobank/hr/people-and-training-prompts.md` | Staffing/training, MP-BI16 adjacency, culture/comms | C05 + C01 |

### C06 — Engineering-Infrastructure (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C06-INFRA-NEO-001 | `artifacts/neobank/engineering/infrastructure-prompts.md` | MP-BF01 (infra/devops), MP-BF03 (infra/hosting) | C06 + C12 |
| SUB-C06-INFRA-NEO-002 | `artifacts/neobank/engineering/rea-integration-prompts.md` | REA integration for neo-bank reverse-engineering | C06 + C11 |

### C07 — Sales-Revenue (1 subagent)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C07-SALES-NEO-001 | `artifacts/neobank/sales/gtm-and-partnership-prompts.md` | MP-BF05 (GTM/commercial), partnership scouting | C07 + C01 |

### C08 — Design-Creative (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C08-DESIGN-NEO-001 | `artifacts/neobank/design/ui-ux-prompts.md` | MP-BF01 (frontend/UI), wallet UI, trading dashboard | C08 + Accessibility |
| SUB-C08-DESIGN-NEO-002 | `artifacts/neobank/design/visual-identity-prompts.md` | Prediction-market UI adjacency (MP-BG overlap) | C08 + C01 |

### C09 — Marketing-Growth (1 subagent)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C09-MKTG-NEO-001 | `artifacts/neobank/marketing/compliance-messaging-prompts.md` | MP-BF05 (marketing/localization/accessibility), financial-marketing compliance | C09 + C01 |

### C10 — Finance-CFO (3 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C10-FIN-NEO-001 | `artifacts/neobank/finance/tax-and-carf-prompts.md` | MP-BI06, MP-BF13, MP-BD07 | C10 + C01 |
| SUB-C10-FIN-NEO-002 | `artifacts/neobank/finance/ledger-and-payments-prompts.md` | MP-BF09, MP-BF10 (finance), MP-BE13 | C10 + C16 |
| SUB-C10-FIN-NEO-003 | `artifacts/neobank/finance/treasury-and-capital-prompts.md` | Capital adequacy, treasury, budget authority | C10 + Executive |

### C11 — Dev-Engineering (3 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C11-DEV-NEO-001 | `artifacts/neobank/dev-engineering/backend-and-api-prompts.md` | MP-BF06, MP-BF07, MP-BF10 | C11 + C12 |
| SUB-C11-DEV-NEO-002 | `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md` | MP-BF03, MP-BF08, MP-BJ10 | C11 + C13 |
| SUB-C11-DEV-NEO-003 | `artifacts/neobank/dev-engineering/rea-target-analysis-prompts.md` | REA-to-neobank target mapping (APK/Electron/web/SQLite) | C11 + C12 |

### C12 — Cybersecurity-Intel (3 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C12-CYBER-NEO-001 | `artifacts/neobank/security/guardrails-and-mpc-prompts.md` | MP-BF04, MP-BF14, MP-BF15 | C12 + C01 |
| SUB-C12-CYBER-NEO-002 | `artifacts/neobank/security/fraud-and-ato-prompts.md` | MP-BF16, MP-BE16 adjacency | C12 + C01 |
| SUB-C12-CYBER-NEO-003 | `artifacts/neobank/security/privacy-and-cross-border-prompts.md` | MP-BI02 (security), MP-BI03 (SCCs) | C12 + C01 |

### C13 — Web3-Finance (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C13-WEB3-NEO-001 | `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md` | MP-BF08 (MPC/crypto), MP-BF12, MP-BI08 | C13 + C01 |
| SUB-C13-WEB3-NEO-002 | `artifacts/neobank/web3/crypto-compliance-prompts.md` | MP-BI15 (crypto), MP-BJ06 (ZKP KYC) | C13 + C10 |

### C14 — Customer-Success (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C14-CS-NEO-001 | `artifacts/neobank/customer-success/dispute-and-support-prompts.md` | MP-BF17, MP-BF02 (support macros) | C14 + C01 |
| SUB-C14-CS-NEO-002 | `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md` | MP-BF18 (customer readiness), onboarding | C14 + C15 |

### C15 — Product-Management (2 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C15-PROD-NEO-001 | `artifacts/neobank/product/prd-and-structure-prompts.md` | MP-BF05 (PRD full), MP-BF01 (product pillars) | C15 + C01 |
| SUB-C15-PROD-NEO-002 | `artifacts/neobank/product/wallet-and-ledger-prompts.md` | MP-BF09, MP-BF08 (product sections) | C15 + C10 |

### C16 — Banking-Fintech (3 subagents)

| Subagent ID | Source artifact(s) | Prompts to execute | Gate |
|---|---|---|---|
| SUB-C16-BANK-NEO-001 | `artifacts/neobank/banking/banking-firm-and-structure-prompts.md` | MP-BD02, MP-BF01 (banking sections) | C16 + C01 |
| SUB-C16-BANK-NEO-002 | `artifacts/neobank/banking/payment-rails-and-orchestration-prompts.md` | MP-BF06 (payment), MP-BF07 (payment API), MP-BF10 | C16 + C12 |
| SUB-C16-BANK-NEO-003 | `artifacts/neobank/banking/reconciliation-and-settlement-prompts.md` | MP-BE13 (banking), MP-BF09 (treasury/settlement) | C16 + C10 |

**Total: 37 subagents, one per existing NeoBank artifact, spanning all 16 councils.**

Cross-council prompts (MP-BD02, MP-BD07, MP-BE13, MP-BI series, MP-BJ series) are executed by the owning council subagent but must reference NeoBank relevance and produce artifacts under their council's `results/` folder, with cross-council copies under `results/cross-council/`.

---

## 5. Execution Flow (Code Mode)

1. **SC intake:** Sparkling Curious classifies each of the 37 artifacts, assigns to owning council captain via `council-department-mapping.json` (R1).
2. **Captain delegation:** Council captain delegates to department AGT lead with message contract `{TASK, PRIORITY, DEADLINE, SUCCESS_CRITERIA, CONTEXT}` (R2).
3. **Subagent instantiation:** SUB-* instantiates under registered AGT parent (R6). Model locked to `auto`.
4. **CRD enforcement:** CRD-git-state-safeguard blocks destructive git ops without approval; CRD-security-compliance-sentinel enforces C01/C12 binding rules; CRD-resource-cost-governor guards budget; CRD-workflow-orchestrator sequences handoffs (R4).
5. **Subagent execution:** Each subagent:
   a. Reads assigned master prompt artifact under `artifacts/neobank/<dept>/`.
   b. Ingests assigned research data from `02-research/`, `01-program/`, `06-architecture/`, `/workspace/app/rea`.
   c. Executes the prompt — improves MP-BF/MP-BD/MP-BE/MP-BI/MP-BJ sections with research citations.
   d. Produces execution result artifact under `artifacts/neobank/execution/results/cNN-*/`.
   e. Produces any code outputs under `artifacts/neobank/execution/code-outputs/`.
   f. Updates `EXECUTION_LEDGER.md` with status.
6. **Captain review:** Council captain reviews result against charter mandate and special authority (C01 legal veto, C16 banking compliance, C12 security, C10 budget, C15 product).
7. **SC synthesis:** Sparkling Curious synthesizes all results, monitors conflicts (R3: SC arbitrates <24h), gates handoff.
8. **Commit/merge/push:** All new folders and files committed, merged (if branched), pushed to `origin/main`.

---

## 6. Compliance Gates & Escalation

| Gate | Owner | Applies to |
|---|---|---|
| Legal-Compliance veto | C01 Captain | All neobank prompts touching money/data surfaces |
| Banking compliance authority | C16 Captain | MP-BF01, MP-BF06, MP-BF07, MP-BF08, MP-BF09, MP-BF10 |
| Security gate | C12 Captain | MP-BF04, MP-BF14, MP-BF15, MP-BF16 |
| Budget authority | C10 Captain | MP-BF10, MP-BF13, treasury/capital prompts |
| Product decision authority | C15 Captain | MP-BF05, MP-BF01 (product pillars) |
| Accessibility gate | C08 Captain | All UI/UX prompts |

**Escalation path:** Subagent → Council Captain → Sparkling Curious → Mychael (CEO) → Board. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

**Private-funded boundary:** No public investor/client funds without separate C01 + C16 + C10 + Mychael approval. All execution artifacts state private-funded-only unless separately approved.

**SA regulatory considerations (mandatory per result):** FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act, Companies Act, King IV, CPA, NCA, Exchange Control Rules, Travel Rule, CASP obligations, automated decision-making restrictions, NPS Act, Banks Act, FATF grey-list exit.

---

## 7. Commit / Merge / Push Workflow

Working on `main` (branch-staying rule: no branch creation unless explicitly asked).

1. Create all new folders and files listed in §3.
2. Verify no `qwen3.8` references; all model locks are `auto`.
3. Stage all new files: `git add artifacts/neobank/execution/ .kilo/plans/1794948779713-neobank-code-mode-execution.md`
4. Commit: `git commit -m "feat(neobank): Code Mode execution artifacts for all 37 prompts across C01-C16"`
5. Push: `git push origin main`

If a feature branch is used (only with explicit user request):
- Commit to feature branch
- Merge to `main` (`--no-ff`)
- Push `origin/main`

CRD-git-state-safeguard must approve any destructive git operation.

---

## 8. Validation Checklist (per subagent result artifact)

- [ ] Research data sources cited with `[S#]` references or explicitly marked unverified
- [ ] Evidence grades preserved (`[FACT]/[EST]/[UNKNOWN]/[INFER]`)
- [ ] Model lock stated as `auto` (kilo-auto/free), no substitution
- [ ] Code Mode execution language (not Ask Mode preparation)
- [ ] SA regulatory considerations addressed where relevant
- [ ] Questions, concerns, assumptions, suggested improvements all populated
- [ ] Missing dependencies identified
- [ ] Security considerations addressed
- [ ] Compliance gate named (council + executive where applicable)
- [ ] Rollback plan specified
- [ ] Escalation path specified
- [ ] Result artifact path inside `artifacts/neobank/execution/results/cNN-*/`
- [ ] Code outputs (if any) under `artifacts/neobank/execution/code-outputs/`
- [ ] `EXECUTION_LEDGER.md` row added with status
- [ ] No private keys, credentials, or PII in artifact
- [ ] Private-funded boundary stated unless separately approved

---

## 9. Risks & Dependencies

| Risk | Mitigation |
|---|---|
| Research data stale (access date 2026-10-16) | Every result flags figures needing re-verification against primary sources |
| Regulatory uncertainty (COFI Bill not enacted, non-bank payment framework draft) | Results mark non-binding items as `[CONSULT]`; require external counsel review |
| REA native/APK deep analysis needs BYO engine (Hopper/Ghidra/IDA/JADX) not in sandbox | Subagents scope REA use to static JS/Electron/SQLite/web capture; flag native analysis as out-of-scope |
| Prompt consolidation risk (multiple subagents touching same MP-BF prompt) | Each subagent owns discrete prompt sections; SC synthesizes and de-conflicts |
| No public investor/client funds (private-funded boundary) | All results state private-funded-only unless separately approved by C01 + C16 + C10 + Mychael |
| CRD-git-state-safeguard blocks commit without approval | Obtain safeguard approval before any destructive git operation |

---

## 10. Open Decisions

None blocking. Plan is implementation-ready for Code Mode execution. Council captains must ratify subagent rosters before delegation (per existing charter convention, rosters are PROPOSED not staffed).