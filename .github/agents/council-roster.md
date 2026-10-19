# `.github/agents/council-roster.md`

**Program:** `SC-REA-NEOBANK-5.0`
**Source of truth:** `.stremiium/agents/council-agents/` + `.stremiium/registry/master-registry.json`
**Owner:** C03 Admin-Knowledge
**Last updated:** 2026-10-19

---

## 1. Full council roster

| Council | Name | Captain agent file | Tier | Mandate (this program) | Owns T-tasks |
|---|---|---|---|---|---|
| C01 | Legal-Compliance | `council-agents/C01-legal-compliance-captain.agent.md` | 1 | FSCA CASP, FICA Dir.9 Travel Rule, SARB FinSurv ExCon, POPIA, NCA, NGB | T7.3 |
| C02 | Operations | `council-agents/C02-vp-operations.agent.md` | 1 | BCP, vendor SLAs, core-banking uptime | — (support) |
| C03 | Admin-Knowledge | `council-agents/C03-chief-librarian.agent.md` | 1 | Artifact system, TBS folders, markdown standards | T1.3, T8.1–T8.4 |
| C04 | Strategy-Growth | `council-agents/C04-chief-strategist.agent.md` | 1 | Market positioning, B-BBEE, growth forecasting | T5.0, T6.5 |
| C05 | HR-Culture | `council-agents/C05-chief-people-officer.agent.md` | 1 | SA salary bands, org structure, SASBO | — (support) |
| C06 | Engineering-Infra | `council-agents/C06-chief-technology-officer.agent.md` | 1 | AWS `af-south-1`, K8s, HSM, VPC isolation | T1.0, T2.3 |
| C07 | Sales-BizDev | `council-agents/C07-rainmaker-captain.agent.md` | 1 | Merchant acquiring, POS, retail agent networks | — (consulted T3.3) |
| C08 | Design-Creative | `council-agents/C08-chief-design-officer.agent.md` | 1 | Mobile UI/UX, WCAG 2.1 AA, nudging flows | — (support T6) |
| C09 | Marketing-Comms | `council-agents/C09-chief-marketing-officer.agent.md` | 1 | Campaigns, sponsorship, gamified adoption | T2.2 |
| C10 | Finance-IR | `council-agents/C10-chief-financial-officer.agent.md` | 1 | CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income | T5.2 |
| C11 | Dev-Engineering | `council-agents/C11-dev-engineering-captain.agent.md` | 2 | Full-stack, React Native, API design, REA JS analysis | T1.1, T1.2, T3.3, T6.4, T8.5 |
| C12 | Cybersecurity-Intel | `council-agents/C12-cybersecurity-intel-captain.agent.md` | 2 | Threat model, pen-test, REA static/dynamic audit | co-signs all REA/evidence gates |
| C13 | Web3-Finance | `council-agents/C13-web3-finance-captain.agent.md` | 2 | Polygon contracts, MPC wallets, $STM tokenomics | T4.0–T4.2, T5.1, T6.1–T6.3, T7.2 |
| C14 | Customer-Success | `council-agents/C14-customer-success-captain.agent.md` | 3 | Onboarding, disputes, Tier 1–3 support | — (support) |
| C15 | Product-Management | `council-agents/C15-product-management-captain.agent.md` | 3 | Roadmap, parity matrices, feature specs | T2.4, T6.0 |
| C16 | Banking-Fintech | `council-agents/C16-banking-fintech-captain.agent.md` | 3 | CBS signatures, ISO 20022, BankservAfrica, PayShap | T2.0, T2.1, T3.0, T3.1, T4.3, T7.1 |

## 2. Coordinators (spawned by Sparkling Curious)

| Coordinator | File | Function |
|---|---|---|
| Research ops | `coordinators/CRD-research-ops.agent.md` | Orchestrates T2–T6 dossier production |
| Knowledge flow | `coordinators/CRD-knowledge-flow.agent.md` | Routes artefacts into TBS folders |
| Project sync | `coordinators/CRD-project-sync.agent.md` | Cross-council status synchronisation |
| Engineering/product | `coordinators/CRD-engineering-product.agent.md` | T7 synthesis support |
| Deployment | `coordinators/CRD-deployment.agent.md` | T8 Code-Mode delivery |
| Council liaison | `coordinators/CRD-council-liaison.agent.md` | Inter-council routing |
| Compliance ops | `coordinators/CRD-compliance-ops.agent.md` | Regulatory workstream |
| Data governance | `coordinators/CRD-data-governance.agent.md` | POPIA/data handling |
| Security sentinel | `coordinators/crd-security-compliance-sentinel.agent.md` | Secret/evidence guard |
| Git safeguard | `coordinators/crd-git-state-safeguard.agent.md` | Commit safety |

## 3. Tier structure

- **Tier 1 (Strategic, 10 councils):** C01–C10.
- **Tier 2 (Technical, 3 councils):** C11, C12, C13.
- **Tier 3 (Customer/Product, 3 councils):** C14, C15, C16.

## 4. Task-ownership quick map

| Task | Lead council(s) |
|---|---|
| T1 Environment & REA Setup | C06 (C11, C03, C12) |
| T2 SA Big Four | C16 (C09, C11, C06, C15, C10) |
| T3 SA NeoBanks | C16 (C04, C11, C06, C15) |
| T4 CASPs & Wallets | C13 (C01, C16, C12, C10) |
| T5 Global Benchmarks | C04 (C13, C10, C06) |
| T6 Competitors | C15 / C13 (C11, C04, C01, C09) |
| T7 Unified Blueprint | C00 (C16, C13, C01, C06, C10) |
| T8 Code Mode & Commit | C00 (C03, C11, C06, C12) |
