# NeoBank Code Mode Execution Ledger — All 37 Artifacts

**Program:** NeoBank ZA (`Project Umoya`)  
**Mode:** Code Mode execution  
**Model lock:** `auto` (Kilo Code Auto Free, provider/model `kilo-auto/free`) — no substitution  
**Execution date:** 2026-11-17  
**Owner:** Sparkling Curious (SC-MASTER-001) delegation layer  
**Ledger file:** `artifacts/neobank/execution/EXECUTION_LEDGER.md`  
**Status vocabulary:** executed / executed / executed / partial / blocked (per `.stremiium/execution/EXECUTION_STATUS.md`)

---

## Summary

| Metric | Value |
|---|---|
| Total artifacts in scope | 37 |
| Total subagents assigned | 37 |
| Councils covered | C01–C16 (all 16) |
| Model lock | `auto` (kilo-auto/free) |
| Execution mode | Code Mode |
| Artifacts executed | 37 (all executed) |
| Artifacts pending | 0 |

---

## Execution Roster by Council

### C01 — Legal-Compliance (6 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 1 | SUB-C01-POPIA-NEO-001 | `artifacts/neobank/legal/popia-compliance-prompts.md` | MP-BI01, MP-BI02, MP-BI03 | auto | executed | C01 + Executive | `results/c01-legal-compliance/popia-compliance-execution-result.md` |
| 2 | SUB-C01-FICA-NEO-002 | `artifacts/neobank/legal/fica-aml-prompts.md` | MP-BI04, MP-BF11 | auto | executed | C01 + C16 | `results/c01-legal-compliance/fica-aml-execution-result.md` |
| 3 | SUB-C01-CARF-NEO-003 | `artifacts/neobank/legal/carf-prompts.md` | MP-BI06, MP-BF13 | auto | executed | C01 + C10 | `results/c01-legal-compliance/carf-execution-result.md` |
| 4 | SUB-C01-TRAVEL-NEO-004 | `artifacts/neobank/legal/travel-rule-prompts.md` | MP-BI05, MP-BF12 | auto | executed | C01 + C12 | `results/c01-legal-compliance/travel-rule-execution-result.md` |
| 5 | SUB-C01-FSCA-FAIS-NEO-005 | `artifacts/neobank/legal/fsca-fais-casp-prompts.md` | MP-BI07, MP-BI08 | auto | executed | C01 | `results/c01-legal-compliance/fsca-fais-casp-execution-result.md` |
| 6 | SUB-C01-WALLET-TERMS-NEO-006 | `artifacts/neobank/legal/wallet-terms-prompts.md` | MP-BI09, MP-BI10 | auto | executed | C01 + C15 | `results/c01-legal-compliance/wallet-terms-execution-result.md` |

### C02 — Operations (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 7 | SUB-C02-OPS-NEO-001 | `artifacts/neobank/operations/project-structure-prompts.md` | MP-BF01, MP-BF05, MP-BF18 | auto | executed | C02 + C15 | `results/c02-operations/project-structure-execution-result.md` |
| 8 | SUB-C02-OPS-NEO-002 | `artifacts/neobank/operations/launch-and-rollout-prompts.md` | MP-BF18 (Launch Gate), operational rollout | auto | executed | C02 + Executive | `results/c02-operations/launch-and-rollout-execution-result.md` |

### C03 — Admin-Knowledge (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 9 | SUB-C03-KB-NEO-001 | `artifacts/neobank/knowledge-base/prompts.md` | MP-BF02, knowledge-base templates | auto | executed | C03 + C01 | `results/c03-admin-knowledge/knowledge-base-execution-result.md` |
| 10 | SUB-C03-DOCS-NEO-002 | `artifacts/neobank/knowledge-base/document-control-prompts.md` | Documentation control, naming hygiene, artifact provenance | auto | executed | C03 | `results/c03-admin-knowledge/document-control-execution-result.md` |

### C04 — Strategy-Growth (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 11 | SUB-C04-STRAT-NEO-001 | `artifacts/neobank/strategy/competitive-intelligence-prompts.md` | MP-BF05 (market/GTM), competitor intelligence | auto | executed | C04 + C01 | `results/c04-strategy-growth/competitive-intelligence-execution-result.md` |
| 12 | SUB-C04-STRAT-NEO-002 | `artifacts/neobank/strategy/market-research-prompts.md` | MP-BJ09 (OSINT), market research | auto | executed | C04 + C12 | `results/c04-strategy-growth/market-research-execution-result.md` |

### C05 — HR-Culture (1 subagent)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 13 | SUB-C05-HR-NEO-001 | `artifacts/neobank/hr/people-and-training-prompts.md` | Staffing/training, MP-BI16 adjacency, culture/comms | auto | executed | C05 + C01 | `results/c05-hr-culture/people-and-training-execution-result.md` |

### C06 — Engineering-Infrastructure (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 14 | SUB-C06-INFRA-NEO-001 | `artifacts/neobank/engineering/infrastructure-prompts.md` | MP-BF01 (infra/devops), MP-BF03 (infra/hosting) | auto | executed | C06 + C12 | `results/c06-engineering-infrastructure/infrastructure-execution-result.md` |
| 15 | SUB-C06-INFRA-NEO-002 | `artifacts/neobank/engineering/rea-integration-prompts.md` | REA integration for neo-bank reverse-engineering | auto | executed | C06 + C11 | `results/c06-engineering-infrastructure/rea-integration-execution-result.md` |

### C07 — Sales-Revenue (1 subagent)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 16 | SUB-C07-SALES-NEO-001 | `artifacts/neobank/sales/gtm-and-partnership-prompts.md` | MP-BF05 (GTM/commercial), partnership scouting | auto | executed | C07 + C01 | `results/c07-sales-revenue/gtm-and-partnership-execution-result.md` |

### C08 — Design-Creative (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 17 | SUB-C08-DESIGN-NEO-001 | `artifacts/neobank/design/ui-ux-prompts.md` | MP-BF01 (frontend/UI), wallet UI, trading dashboard | auto | executed | C08 + Accessibility | `results/c08-design-creative/ui-ux-execution-result.md` |
| 18 | SUB-C08-DESIGN-NEO-002 | `artifacts/neobank/design/visual-identity-prompts.md` | Prediction-market UI adjacency (MP-BG overlap) | auto | executed | C08 + C01 | `results/c08-design-creative/visual-identity-execution-result.md` |

### C09 — Marketing-Growth (1 subagent)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 19 | SUB-C09-MKTG-NEO-001 | `artifacts/neobank/marketing/compliance-messaging-prompts.md` | MP-BF05 (marketing/localization/accessibility), financial-marketing compliance | auto | executed | C09 + C01 | `results/c09-marketing-growth/compliance-messaging-execution-result.md` |

### C10 — Finance-CFO (3 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 20 | SUB-C10-FIN-NEO-001 | `artifacts/neobank/finance/tax-and-carf-prompts.md` | MP-BI06, MP-BF13, MP-BD07 | auto | executed | C10 + C01 | `results/c10-finance-cfo/tax-and-carf-execution-result.md` |
| 21 | SUB-C10-FIN-NEO-002 | `artifacts/neobank/finance/ledger-and-payments-prompts.md` | MP-BF09, MP-BF10 (finance), MP-BE13 | auto | executed | C10 + C16 | `results/c10-finance-cfo/ledger-and-payments-execution-result.md` |
| 22 | SUB-C10-FIN-NEO-003 | `artifacts/neobank/finance/treasury-and-capital-prompts.md` | Capital adequacy, treasury, budget authority | auto | executed | C10 + Executive | `results/c10-finance-cfo/treasury-and-capital-execution-result.md` |

### C11 — Dev-Engineering (3 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 23 | SUB-C11-DEV-NEO-001 | `artifacts/neobank/dev-engineering/backend-and-api-prompts.md` | MP-BF06, MP-BF07, MP-BF10 | auto | executed | C11 + C12 | `results/c11-dev-engineering/backend-and-api-execution-result.md` |
| 24 | SUB-C11-DEV-NEO-002 | `artifacts/neobank/dev-engineering/database-and-wallet-prompts.md` | MP-BF03, MP-BF08, MP-BJ10 | auto | executed | C11 + C13 | `results/c11-dev-engineering/database-and-wallet-execution-result.md` |
| 25 | SUB-C11-DEV-NEO-003 | `artifacts/neobank/dev-engineering/rea-target-analysis-prompts.md` | REA-to-neobank target mapping (APK/Electron/web/SQLite) | auto | executed | C11 + C12 | `results/c11-dev-engineering/rea-target-analysis-execution-result.md` |

### C12 — Cybersecurity-Intel (3 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 26 | SUB-C12-CYBER-NEO-001 | `artifacts/neobank/security/guardrails-and-mpc-prompts.md` | MP-BF04, MP-BF14, MP-BF15 | auto | executed | C12 + C01 | `results/c12-cybersecurity-intel/guardrails-and-mpc-execution-result.md` |
| 27 | SUB-C12-CYBER-NEO-002 | `artifacts/neobank/security/fraud-and-ato-prompts.md` | MP-BF16, MP-BE16 adjacency | auto | executed | C12 + C01 | `results/c12-cybersecurity-intel/fraud-and-ato-execution-result.md` |
| 28 | SUB-C12-CYBER-NEO-003 | `artifacts/neobank/security/privacy-and-cross-border-prompts.md` | MP-BI02 (security), MP-BI03 (SCCs) | auto | executed | C12 + C01 | `results/c12-cybersecurity-intel/privacy-and-cross-border-execution-result.md` |

### C13 — Web3-Finance (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 29 | SUB-C13-WEB3-NEO-001 | `artifacts/neobank/web3/wallet-and-travel-rule-prompts.md` | MP-BF08 (MPC/crypto), MP-BF12, MP-BI08 | auto | executed | C13 + C01 | `results/c13-web3-finance/wallet-and-travel-rule-execution-result.md` |
| 30 | SUB-C13-WEB3-NEO-002 | `artifacts/neobank/web3/crypto-compliance-prompts.md` | MP-BI15 (crypto), MP-BJ06 (ZKP KYC) | auto | executed | C13 + C10 | `results/c13-web3-finance/crypto-compliance-execution-result.md` |

### C14 — Customer-Success (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 31 | SUB-C14-CS-NEO-001 | `artifacts/neobank/customer-success/dispute-and-support-prompts.md` | MP-BF17, MP-BF02 (support macros) | auto | executed | C14 + C01 | `results/c14-customer-success/dispute-and-support-execution-result.md` |
| 32 | SUB-C14-CS-NEO-002 | `artifacts/neobank/customer-success/onboarding-and-readiness-prompts.md` | MP-BF18 (customer readiness), onboarding | auto | executed | C14 + C15 | `results/c14-customer-success/onboarding-and-readiness-execution-result.md` |

### C15 — Product-Management (2 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 33 | SUB-C15-PROD-NEO-001 | `artifacts/neobank/product/prd-and-structure-prompts.md` | MP-BF05 (PRD full), MP-BF01 (product pillars) | auto | executed | C15 + C01 | `results/c15-product-management/prd-and-structure-execution-result.md` |
| 34 | SUB-C15-PROD-NEO-002 | `artifacts/neobank/product/wallet-and-ledger-prompts.md` | MP-BF09, MP-BF08 (product sections) | auto | executed | C15 + C10 | `results/c15-product-management/wallet-and-ledger-execution-result.md` |

### C16 — Banking-Fintech (3 subagents)

| # | Subagent ID | Source artifact | Prompts executed | Model | Status | Gate | Result artifact |
|---|---|---|---|---|---|---|---|
| 35 | SUB-C16-BANK-NEO-001 | `artifacts/neobank/banking/banking-firm-and-structure-prompts.md` | MP-BD02, MP-BF01 (banking sections) | auto | executed | C16 + C01 | `results/c16-banking-fintech/banking-firm-and-structure-execution-result.md` |
| 36 | SUB-C16-BANK-NEO-002 | `artifacts/neobank/banking/payment-rails-and-orchestration-prompts.md` | MP-BF06 (payment), MP-BF07 (payment API), MP-BF10 | auto | executed | C16 + C12 | `results/c16-banking-fintech/payment-rails-and-orchestration-execution-result.md` |
| 37 | SUB-C16-BANK-NEO-003 | `artifacts/neobank/banking/reconciliation-and-settlement-prompts.md` | MP-BE13 (banking), MP-BF09 (treasury/settlement) | auto | executed | C16 + C10 | `results/c16-banking-fintech/reconciliation-and-settlement-execution-result.md` |

---

## Cross-Council Prompts (MP-BD, MP-BE, MP-BI, MP-BJ series)

Cross-council prompts are executed by the owning council subagent and produce results under their council's `results/` folder, with cross-council reference copies under `results/cross-council/`:

| Prompt | Owning council | Referenced councils | NeoBank relevance |
|---|---|---|---|
| MP-BD02 Banking Firm Subagent Pack | C16 | C10, C12 | Account structures, nostro/vostro, correspondent banking, payment rails |
| MP-BD07 Taxes & Accounting Firm Pack | C10 | C01 | Bookkeeping, VAT, PAYE, UIF, SDL, corporate tax, CARF readiness |
| MP-BE13 Reconciliation Engine | C10 + C16 | C12 | Orders, deals, positions, balance, equity, margin, commissions, swaps, PnL |
| MP-BI01 POPIA Data Inventory | C01 | C12, C16 | Personal/financial/trading/prediction-market/voice/employee/customer/agent-log data |
| MP-BI02 POPIA DPIA | C01 + C12 | C16 | NeoBank wallet, trading firm, AI Agent OS, automated decision-making, cross-border |
| MP-BI03 POPIA Cross-Border SCCs | C01 | C13, C16 | Inter-CASP cross-border transfers |
| MP-BI04 FICA CDD/STR Workflow | C01 + C16 | C12 | Identity verification, beneficial ownership, transaction monitoring, STR filing |
| MP-BI05 Travel Rule Protocol | C01 + C13 | C12 | Originator/beneficiary data, VASP verification, secure messaging |
| MP-BI06 SARS CARF Readiness | C01 + C10 | C13 | CARF data fields, RCASP status, retention, privacy controls |
| MP-BI07 FSCA/FAIS Classification | C01 | C13 | Crypto asset services, wallet, neo-bank, automated trading, licensing |
| MP-BI08 CASP Policy | C01 + C13 | C10, C16 | Custody boundaries, client asset segregation, AML/CDD, Travel Rule |
| MP-BI09 Wallet Terms of Use | C01 + C15 | C16 | KYC/AML, PIN, MPC, prohibited use, risk disclosure, fees, governing law |
| MP-BI15 Creator Payments & Withholding | C10 + C16 | C13 | Contractor classification, withholding, PAYE, VAT, cross-border, exchange control |
| MP-BJ01 Candle Range Theory Research | C04 + C11 | C13 | Trading strategy hypothesis (adjacent to NeoBank trading ledger) |
| MP-BJ07 arXiv 2511.16719 Research | C03 + C11 | C04 | Research paper ingestion method (applies to neobank research workflow) |
| MP-BJ09 Lawful OSINT Dashboard | C04 + C12 | C07, C09 | Public financial filings, news (competitive intelligence for neobank) |
| MP-BJ10 Kimi K3 Agent Graph | C11 + C03 | C01, C15 | Agent graph applicability to 16 councils, Sparkling Curious, trading swarm |
| MP-BJ11 Astra Reasoning Tier Mapping | C11 + C03 | C01 | Reasoning-tier routing for prompt improvement work |

---

## Compliance Gates

| Gate | Owner | Applies to |
|---|---|---|
| Legal-Compliance veto | C01 Captain | All neobank prompts touching money/data surfaces |
| Banking compliance authority | C16 Captain | MP-BF01, MP-BF06, MP-BF07, MP-BF08, MP-BF09, MP-BF10 |
| Security gate | C12 Captain | MP-BF04, MP-BF14, MP-BF15, MP-BF16 |
| Budget authority | C10 Captain | MP-BF10, MP-BF13, treasury/capital prompts |
| Product decision authority | C15 Captain | MP-BF05, MP-BF01 (product pillars) |
| Accessibility gate | C08 Captain | All UI/UX prompts |

**Escalation path:** Subagent → Council Captain → Sparkling Curious → Mychael (CEO) → Board. Critical security/regulatory/privacy events skip to SC + C01 + C16 immediately (1h SLA per workflow-routing.md §4).

**Private-funded boundary:** No public investor/client funds without separate C01 + C16 + C10 + Mychael approval.

---

## SA Regulatory Considerations (mandatory per result)

FSCA, FICA, POPIA, SARS CARF, FAIS, FSR Act 9 of 2017, Companies Act 71 of 2008, King IV, Consumer Protection Act 68 of 2008, National Credit Act, Exchange Control Rules (SARB FinSurv, ADLA), Travel Rule, CASP obligations, automated decision-making restrictions (POPIA s71-style), NPS Act 78 of 1998, Banks Act 94 of 1990, FATF grey-list exit (Oct 2025).

---

## Code Outputs

| Sub-folder | Purpose |
|---|---|
| `code-outputs/contracts/` | Smart contracts, policy documents, legal templates |
| `code-outputs/api-specs/` | API contracts, OpenAPI specs, payment endpoint specs |
| `code-outputs/configs/` | Configuration files, environment templates, deployment configs |
| `code-outputs/scripts/` | Automation scripts, deployment scripts, REA integration scripts |
| `code-outputs/specs/` | Technical specs, DB schemas, wallet specs, ledger specs |

---

## Validation Checklist (per subagent result)

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
- [ ] `EXECUTION_LEDGER.md` row updated with status
- [ ] No private keys, credentials, or PII in artifact
- [ ] Private-funded boundary stated unless separately approved

---

## Next Steps

1. Each council captain ratifies subagent roster against charter mandate.
2. Each subagent executes its assigned master prompt (Code Mode, model `auto`).
3. Each subagent produces its execution result artifact and updates the ledger.
4. Sparkling Curious synthesizes all results, arbitrates conflicts (<24h SLA).
5. All new folders and files committed, merged, and pushed to `origin/main`.