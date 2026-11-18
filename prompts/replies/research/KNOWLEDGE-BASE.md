# Stremiium Master Prompt Replies — Research Knowledge Base

**Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)
**Sources:** docs/, rea/, .stremiium/ · **Model lock:** auto (kilo-auto/free)
**Generated:** 2026-11-18

This knowledge base maps topics to substantive, citable content used to answer every Master Prompt question. Each topic provides: key facts, [S#] citations, evidence grades, and prompt-ready answer blocks.

---

## KB-01 — POPIA (Protection of Personal Information Act 4 of 2013)

**Source:** `docs/research/landscape/landscape/02-regulatory-framework/privacy-popia.md` [FACT]

**Key facts:**
- POPIA fully in force; Information Regulator actively fining. Administrative fines up to **R10 million**; criminal exposure up to **10 years' imprisonment** [S26][S29][S30][S31].
- Applies to responsible parties domiciled in SA and extraterritorially where equipment in SA is used (unless merely forwarded) [S27].
- **Eight conditions** (Chapter 3): (1) Accountability; (2) Processing limitation (lawful basis, minimality); (3) Purpose specification; (4) Further-processing limitation; (5) Information quality; (6) Openness; (7) Security safeguards (incl. breach notification); (8) Data subject participation (access/correct/delete) [S25][S27].
- **Information Officer (s55):** every responsible party must have an IO (default head of org, typically CEO), registered with Regulator; Deputy IOs permitted; precondition for PAIA portals [S25][S32].
- **Prior authorisation (s57, mechanism s58(2) applicable 1 Feb 2022):** required for unique identifiers used beyond intended purpose and cross-source linking (relevant to SA ID number matching), criminal-behaviour processing for third parties, credit reporting [S25][S26].
- **Special personal information:** biometrics, health, racial/ethnic origin, religious belief, sex life, criminal behaviour — processing only with consent or listed ground. **NeoBank biometric KYC engages this** [S27].
- **Cross-border transfers (s72):** seven bases — (1) recipient under law/BCRs/binding agreement with protection substantially similar to POPIA incl. onward transfers; (2) consent; (3) contract performance with data subject; (4) contract in data subject's interest; (5) benefit of data subject; (6) prevention/investigation/prosecution of offences; (7) international public-law obligation. **No formal adequacy list** — per-recipient test; POPIA has no "adequacy list" [S25][S27][S28].
- **Breach notification:** notify Regulator + affected data subjects as soon as reasonably possible; >8,000 notifications, >1,220 since 1 Apr 2026 [S25][S31].
- **PAIA:** maintain PAIA Manual; respond to requests within **30 days**; private bodies submit annual report (portal 1 Apr–30 Jun) [S32].
- **Automated decision-making (s71):** data subject may require explanation of automated decisions; safeguards needed for automated fraud scoring.

**Answer block template:** "Under POPIA [FACT], the requirement is X [S#]. For Stremiium NeoBank this means concrete control Y. Verdict: **ADAPT** — the statutory duty is mandatory, but implementation is scoped to the SA perimeter and MPC wallet context."

---

## KB-02 — FICA / AML / Financial Crime

**Source:** `docs/research/landscape/landscape/02-regulatory-framework/aml-fica.md` [FACT]

**Key facts:**
- SA exited FATF grey list **24 Oct 2025** after all 22 action items; supervision consolidating, not relaxing [S38].
- Banks/mutual/co-operative banks are accountable institutions supervised by **Prudential Authority (PA)**; CASP is accountable institution item 12 [S36][S72].
- Register on **goAML**; CASPs require second FIC registration under item 12 plus FSCA licence [S33][S36][S72].
- **RMCP:** board-approved Risk Management and Compliance Programme covering risk identification, CDD, monitoring, record-keeping, reporting [S33][S36].
- **CDD:** identify/verify natural and legal persons (s21); beneficial ownership traced to natural persons (FICA no fixed %; CIPC register uses 5% threshold as separate disclosure) [S33][S37]; EDD for higher-risk, PEPs (foreign prominent public officials / domestic prominent influential persons) [S33].
- **Record-keeping:** CDD and transaction records commonly ≥5 years (confirm against Act) [S33].
- **Four reports:** CTR — cash > R49,999.99, within 3 days [S33][S34][S35]; STR/SAR — suspicion of ML/TF/PF, within 15 days [S33][S36]; TPR — linked to designated person, without delay [S34][S37]; cross-border/conveyance reports [S34].
- **Targeted financial sanctions (ss26A–26C):** prohibit making property/services available to UN-listed persons; TPR under s28A on match [S37]; POCA ss4–6 criminalises concealing/disguising proceeds [S37].
- **Crypto Travel Rule:** FIC Directive 9 (Gazette 51556, 15 Nov 2024), s43A(2), effective **30 Apr 2025** — CASPs send originator + beneficiary info with every transfer, before or with, never after [S72][S73]; PCC 61 of 2026 confirms **zero threshold** [S40].
- Continuous sanctions/PEP screening required at onboarding and ongoing [S37].

---

## KB-03 — SARS CARF / Tax / AEOI

**Source:** `docs/research/landscape/landscape/02-regulatory-framework/tax-governance.md` [FACT]

**Key facts:**
- Corporate income tax flat **27%** (years of assessment ending on/after 1 Apr 2025) [S54][S60]; CGT effective 21.6% for companies [S60].
- VAT **15%**; registration threshold commonly R1m/12 months [S60][S53]; financial services largely exempt under s12(a) but fee-based items standard-rated under proviso to s2(1); mixed supplies need apportionment (s17(1), VAT Ruling VR 011, 30 May 2025) [S59].
- STT **0.25%** on securities transfers [S54].
- FATCA Model 1 IGA with US, in force 28 Oct 2014 [S55]; CRS first exchange Sep 2017 [S55][S56].
- **Reporting Financial Institutions (RFIs):** Custodial, Depository (banks qualify), Investment Entities, Specified Insurance Companies — apply due diligence to find reportable accounts [S55][S56]. A neobank is a Depository Institution for CRS/FATCA from day one [S55].
- **AEOI BRS** V3.0.0-17 dated 28 Jan 2026 [S58]; CRS 3.0 (CRS 2.0 discontinued 18 Sep 2026) [S55].
- **CARF:** incorporated into SA law, effective **1 Mar 2026**. R-CASPs with SA nexus collect and report crypto-asset user/transaction data. Final CARF Regulations published 28 Nov 2025; CARF BRS published 16 Feb 2026 [S57][S71]. Revised CRS (e-money, CBDCs, indirect crypto) commences 1 Mar 2026 [S71]. Administrative penalties for AEOI non-compliance [S58].
- **CARF data fields (the concrete answer to CARF-REPORTING-MAPPER):** user identification (name, address, DOB, tax identification numbers, place of birth), jurisdiction of residence, transaction type (exchange of crypto for fiat, crypto-to-crypto transfer), asset type (crypto-asset identifier), dates, values (fiat and crypto amount, fair market value), counterparty (name, wallet address, exchange), reporting period (calendar year), R-CASP identification, account/ wallet identifiers. [S57][S71 — BRS]
- **King IV:** voluntary apply-and-explain; board composition (majority non-executive, independent chair), committees (audit, risk, remuneration, social & ethics), integrated reporting [S70].
- **Companies Act 71 of 2008:** a bank must be a public company; audit committee s94 mandatory for public companies [S1][S70].

---

## KB-04 — FSCA / CASP / FAIS / NCA / Conduct

**Source:** `docs/research/landscape/landscape/02-regulatory-framework/conduct-fais-nca.md` [FACT]

**Key facts:**
- Twin Peaks: FSCA supervises FSPs, CIS managers, authorised users; PA supervises banks/insurers [S19].
- **CASP licensing** under FAIS Act: crypto asset service providers need FSCA licence [S72]; advice/intermediary on crypto also accountable institution [S72].
- FAIS "fit and proper" requirements, RE5/RE1 regulatory examinations for representatives.
- NCA (National Credit Act 34 of 2005): credit registration, affordability assessment, credit provider registration.
- Code of Banking Practice, Ombudsman for Banking Services (NFO) membership at launch.
- COFI (Conduct of Financial Institutions) Bill / Twin Peaks reforms.

---

## KB-05 — Banking / SARB / NPS / Payments

**Sources:** `banking-licensing.md`, `payments-nps.md`, PROGRAM_BRIEF.md [FACT]
- Banks Act 94 of 1990; SARB Prudential Authority gates banking licence; bank must be public company [S1].
- Mutual Banks Act, Co-operative Banks Act as alternate structures.
- NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC (Real-Time Clearing), PayShap; ISO 20022 migration.
- Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows; CARF + ExCon overlap.
- FSCA CASP, FICA Dir.9 Travel Rule, NGB (National Gambling Board) for prediction markets/gaming tokens.

---

## KB-06 — Architecture / Target System

**Source:** `docs/architecture/target-system/target-system/`, `docs/architecture/platform-design/` [FACT]
```
CLIENT:      React Native (iOS/Android) + Next.js 15 web portal
API/GATEWAY: GraphQL gateway + Kong (mTLS, rate limiting, WAF)
CORE BANKING:Mambu cloud-native CBS on AWS Cape Town (af-south-1)
PAYMENTS:    BankservAfrica engine (PayShap, RTC, EFT), ISO 20022
WEB3:        Polygon PoS / ZK-EVM + non-custodial MPC Wallet-as-a-Service
EVENTS:      Apache Kafka (transactional bus + rewards engine)
DATA:        PostgreSQL (ACID core) + Redis (cache) + The Graph (on-chain indexing)
SECURITY:    HSM-backed keys, STRIDE threat model, FICA AML monitoring
```
- `$STM`: 1,000,000,000 fixed supply, ERC-20 Polygon; 20% net quarterly fees → buy-back & burn until 50% retired; 25% fee discount when fees settled in $STM.
- Platform design: bounded contexts, aggregates, domain events, ledger model, money-and-currency, data governance, AI/ML, analytics, threat model STRIDE, controls catalogue, IAM/secrets, incident response, deployment topology, observability.

---

## KB-07 — REA (Reverse Engineering Anything)

**Sources:** `rea/README.md`, `rea/AGENTS.md`, `rea/CHANGELOG.md`, PROGRAM_BRIEF.md §5 [FACT]
- REA `morluto/rea` v6.5.0: 207 MCP tools / 153 CLI commands; present but **not installed** (node_modules absent); no target APK/ASAR/IPA artefacts supplied.
- Four-bucket evidentiary rule: (1) Evidence (Seen) — verifiable strings, bytecode, signatures, network calls, public filings, published pricing; (2) Recovered Graph (Synthesised) — logical architecture, state machines, data models; (3) Limitations — obfuscation, stripped symbols, DRM, WAF; (4) Unknowns — proprietary server-side computation, private APIs, unreachable logic.
- Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess. Artefact-dependent claims are [INFER]/[UNKNOWN] with the extraction step named.
- Install command: `npm ci --engine-strict=false && npm run build:cached`; `node scripts/rea.mjs --help`, `doctor --json`.
- Toolkit: `docs/engineering/rea-toolkit/rea-business-toolkit/`, `REA_ROOT=/workspace/app/rea`.

---

## KB-08 — Home Lab Hardware (C06)

**Source:** C06 prompt corpus [EST]
- Dual-socket Xeon E5-2620 v2, 48GB DDR3 ECC, Quadro K2200 4GB VRAM, NVMe storage.
- Concerns: BIOS bricking without SPI programmer; K2200 4GB VRAM contention for Ollama local inference; DDR3 memory bottlenecks; hardware failure handling undefined.
- Reference schema: {component, specification, quantity, status, allocatedTo, failureMode, mitigation, spareParts, lastChecked}.

---

## KB-09 — Competitor Benchmarks (17 dossiers)

**Source:** `docs/research/dossiers/dossiers/` [FACT]
- SA incumbents: Standard Bank, FNB, ABSA, Nedbank, African Bank (CBS signatures: Mambu/Finacle/BaNCS/Temenos/in-house).
- SA neobanks: Discovery Bank, TymeBank/GoTymeBank.
- CASPs: Luno, VALR, Flex.one (fees, custody, Travel Rule posture).
- Global: JPMorgan Kinexys, Morgan Stanley.
- Web3 fan engagement: Sorare, Socios/Chiliz, Polymarket, FanDuel/DraftKings, Fanatics.
- Each dossier has evidence-ledger.json with graded entries; strategic filter ADOPT/ADAPT/AVOID/BEAT.

---

## KB-10 — Governance / Council Routing

**Sources:** `.stremiium/governance/workflow-routing.md`, `.stremiium/config/council-department-mapping.json` [FACT]
- Hierarchy: Stremiium → Sparkling Curious (SC-MASTER-001) → Meta-Councils (advisory) / Coordinator Staff Line (CRD-*) / Councils C01–C16 (command) → Departments cNN-* (workforce) → Agents AGT-* → Subagents SUB-* → Skills/Tools/Workflows.
- Routing rules R1–R6: R1 council first, R2 captain decomposes to departments, R3 cross-council SC arbitrates <24h, R4 CRD interception, R5 meta-councils advise only, R6 subagents only under registered AGT parent.
- Escalation: Agent → Captain → SC → Mychael (CEO) → Board; SLAs Critical 1h / High 4h / Medium 24h / Low 72h; critical skips to SC+C01+C16 (1h).
- CRD coordinators: workflow-orchestrator, git-state-safeguard, security-compliance-sentinel, resource-cost-governor, compliance-ops, council-liaison, research-ops, data-governance, knowledge-flow, incident-response, deployment, agent-lifecycle, project-sync, executive-liaison, engineering-product.
- Private-funded boundary: no public investor/client funds without C01 + C16 + C10 + Mychael approval.

---

## KB-11 — Departmental Domains (generic but substantive)

| Council | Domain substance for replies |
|---|---|
| C02 Operations | BCP, vendor SLAs, core-banking uptime, incident coordination, SOP catalogue, audit trail, resource scheduling |
| C03 Admin-Knowledge | Artifact system, TBS folders, markdown standards, knowledge graph, metadata stewardship, redaction, retrieval, session memory, taxonomy, runbooks |
| C04 Strategy-Growth | Market positioning, B-BBEE, growth forecasting, competitive intelligence, OKR tracking, scenario modelling, strategic planning |
| C05 HR-Culture | SA salary bands, org structure, SASBO, human+agent teaming, wellbeing, conflict resolution, culture values, recruitment, training |
| C07 Sales-Revenue | Merchant acquiring, POS, retail agent networks, pricing, funnel, CAC/LTV, revenue forecasts, channel partners |
| C08 Design-Creative | Mobile UI/UX, WCAG 2.1 AA, nudging flows, design system, component standards, accessibility design, brand identity |
| C09 Marketing-Comms | Campaigns, sponsorship, gamified adoption, content strategy, social, email, PR, analytics, community |
| C10 Finance-CFO | CAR/Tier1/LCR/NSFR, NIM/NIR, cost-to-income, budget, financial controls, treasury, tax, reporting |
| C11 Dev-Engineering | Full-stack, React Native, API design, REA JS analysis, backend/frontend/data/devops/QA/model-router/security/tech-writer |
| C12 Cybersecurity | Threat model (STRIDE), pen-test, REA static/dynamic audit, IAM, SOC, incident response, crypto security, vulnerability management |
| C13 Web3-Finance | Polygon contracts, MPC wallets, $STM tokenomics, CASP compliance, cross-chain, DeFi, NFT, smart contract security, token governance |
| C14 Customer-Success | Onboarding, disputes, Tier 1–3 support, customer journeys, retention |
| C15 Product-Management | Roadmap, parity matrices, feature specs, PRD, product ownership (AIOS/NeoBank), user research, product compliance |
| C16 Banking-Fintech | CBS signatures, ISO 20022, BankservAfrica, PayShap, core banking, payment rails, custody, financial crime, travel rule, reconciliation |

---

## KB-12 — NeoBank Prompt Subjects (37)

| Dept | Subjects |
|---|---|
| legal | POPIA compliance, FICA/AML, CARF, Travel Rule, FSCA/FAIS/CASP, wallet terms |
| operations | project structure, launch & rollout |
| knowledge-base | prompts, document control |
| strategy | competitive intelligence, market research |
| hr | people & training |
| engineering | infrastructure, REA integration |
| sales | GTM & partnerships |
| design | UI/UX, visual identity |
| marketing | compliance messaging |
| finance | tax & CARF, ledger & payments, treasury & capital |
| dev-engineering | backend & API, database & wallet, REA target analysis |
| security | guardrails & MPC, fraud & ATO, privacy & cross-border |
| web3 | wallet & travel rule, crypto compliance |
| customer-success | dispute & support, onboarding & readiness |
| product | PRD & structure, wallet & ledger |
| banking | banking firm & structure, payment rails & orchestration, reconciliation & settlement |

---

**End of Knowledge Base.**
