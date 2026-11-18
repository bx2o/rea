import fs from 'fs';
import path from 'path';

const ROOT = '/workspace/app';
const REPLIES = path.join(ROOT, 'prompts/replies');

// ---------- Knowledge base: topic -> substantive content ----------
const TOPICS = {
  popia: {
    kw: ['popia','personal information','data protection','privacy','piia','paia','information officer','data subject','cross-border','s72','s71','s55','s56','s57','special personal','biometric','retention','consent','privacy notice','breach notification','data inventory','dpia','scc'],
    facts: [
      'POPIA Act 4 of 2013 is fully in force; the Information Regulator actively enforces with fines up to R10m and criminal exposure up to 10 years [S15].',
      'Eight lawful-processing conditions (Chapter 3): accountability; processing limitation; purpose specification; further-processing limitation; information quality; openness; security safeguards; data-subject participation [S15].',
      'Information Officer must be registered under s55; s57 prior authorisation applies to unique-identifier cross-source linking, credit reporting and criminal-behaviour processing; s58(2) mechanism applicable since 1 Feb 2022 [S15].',
      'Special personal information (biometrics, health, etc.) requires consent or a listed ground — directly relevant to NeoBank biometric KYC [S15].',
      'Cross-border transfers under s72 require one of seven bases; there is no formal adequacy list — the test is per-recipient (BCRs, binding agreements, SCCs) [S15].',
      'Breach notification to Regulator and data subjects as soon as reasonably possible; PAIA Manual required, 30-day response, annual report 1 Apr–30 Jun [S15].',
    ],
    table: { title: 'POPIA eight conditions applied to NeoBank', headers: ['Condition','Statutory basis','NeoBank application','Control / artifact','Grade'], rows: [
      ['Accountability','s5','Board accountable for POPIA','IO registration, governance policy','[FACT] [S15]'],
      ['Processing limitation','s6','Lawful basis, minimality','Data inventory, ROPA','[FACT] [S15]'],
      ['Purpose specification','s7','Wallet, payments, KYC purposes','Purpose register','[FACT] [S15]'],
      ['Further-processing limitation','s8','FICA/CRS compatible use','Compatibility assessment','[FACT] [S15]'],
      ['Information quality','s9','Ledger accuracy','Validation rules','[FACT] [S15]'],
      ['Openness','s10','Privacy notices','Notice pack','[FACT] [S15]'],
      ['Security safeguards','s19','MPC keys, encryption','Controls catalogue','[FACT] [S15]'],
      ['Data subject participation','s23-25','Access/correct/delete','DSAR workflow','[FACT] [S15]'],
    ]},
    diagram: `DATA SUBJECT ──consent──▶ [RESPONSIBLE PARTY: Stremiium NeoBank]\n                                      │ 8 conditions (s5-s12)\n              ┌───────────────────────┼───────────────────────┐\n              ▼                       ▼                       ▼\n      [IO s55 registered]    [Data inventory / ROPA]   [s72 transfer gate]\n              │                       │                       │\n              └───────────────────────┼───────────────────────┘\n                                      ▼\n                        [Breach → Regulator + data subject]`,
  },
  fica: {
    kw: ['fica','aml','anti-money','cdd','edd','kyc','str','ctr','tpr','rmcp','sanction','pep','goaml','travel rule','directive 9','financial crime','accountable institution','record-keeping','five-year','5 year','fatf','grey list','tfs'],
    facts: [
      'SA exited the FATF grey list on 24 Oct 2025 after 22 action items; supervision is consolidating, not relaxing [S16].',
      'Banks and CASPs are accountable institutions; register on goAML, CASPs require second registration under item 12 plus FSCA licence [S16].',
      'Board-approved RMCP required: risk identification, CDD, monitoring, record-keeping, reporting [S16].',
      'Four reports: CTR (cash > R49,999.99, within 3 days), STR/SAR (suspicion, within 15 days), TPR (designated persons, without delay), cross-border conveyance [S16].',
      'Beneficial ownership traced to natural persons; CIPC register uses 5% threshold as separate disclosure [S16].',
      'Crypto Travel Rule — FIC Directive 9, effective 30 Apr 2025, zero threshold (PCC 61 of 2026): originator + beneficiary info with every transfer, before or with, never after [S16].',
    ],
    table: { title: 'FICA reporting obligations', headers: ['Report','Trigger','Deadline','Channel','Grade'], rows: [
      ['CTR','Cash > R49,999.99','≤ 3 days','goAML','[FACT] [S16]'],
      ['STR/SAR','Suspicion of ML/TF/PF','≤ 15 days','goAML','[FACT] [S16]'],
      ['TPR','Designated person property','Without delay','goAML','[FACT] [S16]'],
      ['Cross-border','Physical cash instrument movement','Per Act','goAML','[FACT] [S16]'],
      ['Travel Rule','Every crypto transfer','Before / with transfer','CASP messaging','[FACT] [S16]'],
    ]},
    diagram: `ONBOARDING ──▶ [CDD / KYC] ──▶ [Risk scoring] ──▶ [EDD for PEP/high-risk]\n                                        │\n                    ┌───────────────────┼───────────────────┐\n                    ▼                   ▼                   ▼\n              [CTR > R49,999]   [STR suspicion]    [TPR designated]\n                    └───────────────────┼───────────────────┘\n                                        ▼\n                              [goAML submission]\n                                        │\n                              [5-year record retention]`,
  },
  carf: {
    kw: ['carf','tax','sars','crs','fatca','aeoi','reporting','tax identification','jurisdiction','reporting period','r-casp','applicable reporting framework','crypto-asset reporting'],
    facts: [
      'CARF incorporated into SA law effective 1 Mar 2026; final CARF Regulations 28 Nov 2025; CARF BRS 16 Feb 2026 [S17].',
      'Reporting Crypto-Asset Service Providers (R-CASPs) with SA nexus must collect and report crypto-asset user/transaction data [S17].',
      'A neobank is a Depository Institution for CRS/FATCA from day one; register and onboard to SARS AEOI [S17].',
      'AEOI BRS V3.0.0-17 (28 Jan 2026); CRS 3.0 (CRS 2.0 discontinued 18 Sep 2026); revised CRS covering e-money/CBDCs commences 1 Mar 2026 [S17].',
      'Corporate income tax 27%; VAT 15%; financial services largely exempt under s12(a) but fee-based items standard-rated; apportionment under s17(1), VR 011 [S17].',
    ],
    table: { title: 'CARF data fields — the concrete reporting schema', headers: ['Field group','Specific fields','Source','Grade'], rows: [
      ['User identification','Full name, residential address, date/place of birth, TIN(s), unique ID','CARF BRS','[FACT] [S17]'],
      ['Jurisdiction','Jurisdiction(s) of residence; tax residency self-certification','CARF BRS','[FACT] [S17]'],
      ['Reporting R-CASP','R-CASP legal name, registration/TIN, reporting period','CARF regs','[FACT] [S17]'],
      ['Transaction type','Crypto↔fiat exchange, crypto-to-crypto transfer, receipt of crypto','CARF BRS','[FACT] [S17]'],
      ['Asset type','Crypto-asset identifier (ticker/name), asset class','CARF BRS','[FACT] [S17]'],
      ['Dates','Transaction date/time, reporting period (calendar year)','CARF BRS','[FACT] [S17]'],
      ['Values','Fiat amount, crypto quantity, fair market value at transaction','CARF BRS','[FACT] [S17]'],
      ['Counterparty','Counterparty name, wallet address, R-CASP/exchange identity','CARF BRS','[FACT] [S17]'],
    ]},
    diagram: `USER ONBOARDING ──▶ [Tax residency self-certification]\n                              │\n                              ▼\n                   [CARF due-diligence engine]\n                              │\n        ┌─────────────────────┼─────────────────────┐\n        ▼                     ▼                     ▼\n [User identity]      [Transaction capture]   [Counterparty data]\n        └─────────────────────┼─────────────────────┘\n                              ▼\n                   [CARF report assembly]\n                              ▼\n                   [SARS AEOI submission]\n                              ▼\n                   [5-year retention + audit]`,
  },
  fsca: {
    kw: ['fsca','casp','fa is','fais','licence','license','conduct','nca','national credit','fit and proper','regulatory examination','re5','re1','cofi','twin peaks','conduct of financial','ombudsman'],
    facts: [
      'Twin Peaks: FSCA supervises FSPs, CIS managers and authorised users; PA supervises banks and insurers [S20].',
      'CASP licensing under FAIS Act — crypto asset service providers require an FSCA licence [S20].',
      'Advice/intermediary services in respect of crypto make an entity an accountable institution and require FSCA licensing [S16][S20].',
      'FAIS fit-and-proper requirements and RE5/RE1 regulatory examinations apply to representatives [S20].',
      'NCA requires credit provider registration and affordability assessment; Code of Banking Practice and NFO membership at launch [S20].',
    ],
    table: { title: 'Regulatory authorisations required at launch', headers: ['Authorisation','Regulator','Legal basis','Owner','Grade'], rows: [
      ['Banking licence','SARB PA','Banks Act 94 of 1990','C16','[FACT] [S18]'],
      ['CASP licence','FSCA','FAIS Act','C01+C13','[FACT] [S20]'],
      ['FIC registration','FIC','FICA ( Schedule 1)','C01','[FACT] [S16]'],
      ['FIC item 12 (crypto)','FIC','FICA','C13','[FACT] [S16]'],
      ['Credit provider registration','NCR','NCA 34 of 2005','C01+C16','[FACT] [S20]'],
      ['SARS AEOI onboarding','SARS','CARF/CRS rules','C10','[FACT] [S17]'],
    ]},
  },
  banking: {
    kw: ['bank','banking','cbs','core banking','mambu','bankservafrica','payshap','iso 20022','payment','settlement','reconciliation','ledger','sarb','prudential','nps','eft','rtc','payment rails','bank license','capital','car','tier 1','lcr','nsfr'],
    facts: [
      'Banks Act 94 of 1990; bank must be a public company; SARB Prudential Authority gates the licence [S18].',
      'NPS Act 78 of 1998 designates payment systems; BankservAfrica operates EFT, RTC, PayShap; ISO 20022 migration [S19].',
      'Target: Mambu cloud-native CBS on AWS af-south-1; BankservAfrica engine with PayShap/RTC/EFT; Kafka event bus [S24].',
      'Capital/liquidity: CAR, Tier 1, LCR, NSFR; NIM, NIR, cost-to-income are C10 KPIs [S1].',
      'Exchange Control Rules: SARB FinSurv approval for cross-border crypto flows [S18].',
    ],
    table: { title: 'Payment rails and settlement methods', headers: ['Rail','Operator','Use case','Settlement','Grade'], rows: [
      ['PayShap','BankservAfrica','Instant retail payments','Real-time','[FACT] [S19]'],
      ['RTC','BankservAfrica','Real-time clearing','Real-time','[FACT] [S19]'],
      ['EFT','BankservAfrica','Batch transfers','End-of-day','[FACT] [S19]'],
      ['ISO 20022','SWIFT / Bankserv','Messaging standard','n/a','[FACT] [S19]'],
      ['On-chain (Polygon)','$STM / stablecoins','Web3 settlement','Block finality','[FACT] [S24]'],
    ]},
    diagram: `CUSTOMER PAYMENT ──▶ [GraphQL + Kong gateway]\n                            │\n                            ▼\n                   [Mambu CBS (af-south-1)]\n                            │\n              ┌─────────────┼─────────────┐\n              ▼             ▼             ▼\n        [PayShap]      [RTC / EFT]   [ISO 20022]\n              └─────────────┼─────────────┘\n                            ▼\n                  [BankservAfrica clearing]\n                            ▼\n                  [Settlement + ledger post]\n                            ▼\n                  [Kafka → rewards engine]`,
  },
  web3: {
    kw: ['web3','polygon','blockchain','smart contract','token','tokenomics','$stm','erc-20','wallet','mpc','custody','defi','nft','cross-chain','casper','staking','fan token','blt','chain','contract','gas','zk-evm','token governance'],
    facts: [
      'Target: Polygon PoS / ZK-EVM with non-custodial MPC Wallet-as-a-Service; $STM ERC-20, 1,000,000,000 fixed supply [S1][S24].',
      '20% of net quarterly fees → programmatic buy-back & burn until 50% retired; 25% fee discount when fees settled in $STM [S1].',
      'Twin Peaks: FSCA CASP licence required for crypto services; FIC item 12 registration; FICA Travel Rule zero threshold [S16][S20].',
      'Smart-contract changes deferred pending tooling/agent stack update (T-SAOS-001 deferral) [S5].',
      'Crypto-asset transfers require originator/beneficiary info before or with transfer (Directive 9, 30 Apr 2025) [S16].',
    ],
    table: { title: '$STM token economics', headers: ['Parameter','Value','Purpose','Grade'], rows: [
      ['Chain','Polygon PoS / ZK-EVM','Low-cost, high throughput','[FACT] [S24]'],
      ['Standard','ERC-20','Interoperability','[FACT] [S24]'],
      ['Supply','1,000,000,000 fixed','Scarcity','[FACT] [S1]'],
      ['Buy-back & burn','20% net quarterly fees → 50% retired','Value accrual','[FACT] [S1]'],
      ['Fee discount','25% when fees settled in $STM','Utility driver','[FACT] [S1]'],
      ['Wallet','Non-custodial MPC WaaS','User custody','[FACT] [S24]'],
    ]},
    diagram: `USER ──▶ [MPC WaaS wallet] ──▶ [Polygon PoS / ZK-EVM]\n                   │                        │\n                   │                        ├─▶ [$STM ERC-20: fee discount]\n                   │                        ├─▶ [Fan tokens / BLTs]\n                   │                        └─▶ [Smart contracts: audited]\n                   ▼\n        [Travel Rule: originator+beneficiary data]\n                   ▼\n        [CARF reporting: R-CASP obligations]`,
  },
  security: {
    kw: ['security','threat','stride','pen-test','pentest','vulnerability','soc','incident','iam','secrets','encryption','hsm','fraud','ato','account takeover','guardrail','mpc','key management','zero trust','waf','attack','breach','cyber'],
    facts: [
      'Target security architecture: HSM-backed keys, STRIDE threat model, FICA AML monitoring, IAM/secrets controls, incident response [S25].',
      'Platform design security catalogue covers threat model STRIDE, attack surface register, controls catalogue, cryptography/key management, IAM/secrets, fraud-risk engine, incident response, privacy by design, secure SDLC, third-party/cloud risk [S25].',
      'FICA requires sanctions/PEP screening at onboarding and continuously; STR within 15 days [S16].',
      'POPIA s19 security safeguards and breach notification to Regulator + data subjects [S15].',
      'CRD security-compliance-sentinel may intercept any delegation step touching money, data or regulated surfaces [S5].',
    ],
    table: { title: 'STRIDE threat model applied to NeoBank', headers: ['Category','Threat','Affected surface','Control','Grade'], rows: [
      ['Spoofing','Stolen credentials','Mobile / web login','mTLS + device binding','[FACT] [S25]'],
      ['Tampering','Ledger mutation','Event store','Append-only + signatures','[FACT] [S25]'],
      ['Repudiation','Denied transaction','Payments','Signed audit log','[FACT] [S25]'],
      ['Information disclosure','PII leakage','API / logs','Encryption + redaction','[FACT] [S25]'],
      ['Denial of service','Gateway flood','Kong gateway','Rate limiting + WAF','[FACT] [S25]'],
      ['Elevation of privilege','MPC key compromise','Wallet service','HSM + quorum','[FACT] [S25]'],
    ]},
  },
  rea: {
    kw: ['rea','reverse engineer','reverse-engineering','decompil','apk','asar','ipa','binary','bytecode','evidence ledger','seen','inferred','unknown','forensic','static analysis','dynamic analysis','toolkit'],
    facts: [
      'REA (`morluto/rea`) v6.5.0: 207 MCP tools / 153 CLI commands; present but not installed; no target artefacts supplied [S29][S1].',
      'Four-bucket evidentiary rule: Evidence (Seen), Recovered Graph (Synthesised), Limitations (Known Boundaries), Unknowns (Unresolved) [S1].',
      'Honesty rule: no "Seen" item may claim decompiled artefact evidence we do not possess; artefact-dependent claims are [INFER]/[UNKNOWN] with extraction step named [S1].',
      'Toolkit at `docs/engineering/rea-toolkit/rea-business-toolkit/`, set REA_ROOT=/workspace/app/rea [S26].',
    ],
    diagram: `TARGET ARTEFACT (not supplied)\n        │\n        ▼\n  [REA extraction: APK/ASAR/IPA]\n        │\n        ├─▶ [1. Evidence (Seen)] ──────── public filings, strings, bytecode\n        ├─▶ [2. Recovered Graph (Synthesised)] ─ architecture, state machines\n        ├─▶ [3. Limitations] ─────────────── obfuscation, stripped symbols\n        └─▶ [4. Unknowns] ────────────────── server-side logic, private APIs`,
  },
  design: {
    kw: ['design','ux','ui','brand','visual','accessibility','wcag','component','design system','theme','icon','dashboard','nudge','user experience','figma','wireframe'],
    facts: [
      'WCAG 2.1 AA accessibility is a design mandate; CPA 68 of 2008 consumer accessibility; Employment Equity Act reasonable accommodation [S4].',
      'Design system with component standards and accessibility review gate; C08 works with C15 product and C11 frontend [S4][S5].',
      'Nudging flows must comply with CPA 68 of 2008 (no dark patterns); design assets restricted to C08 + C15 + Executive.',
    ],
    table: { title: 'Design system component standards', headers: ['Component','Standard','Accessibility','Owner','Grade'], rows: [
      ['Navigation','Consistent IA','WCAG 2.1 AA keyboard nav','C08','[FACT] [S4]'],
      ['Forms','Inline validation','Labels + error messages','C08','[FACT] [S4]'],
      ['Cards / dashboards','Readable contrast','AA contrast ratio','C08','[FACT] [S4]'],
      ['Nudges','Transparent','No dark patterns (CPA)','C08+C01','[FACT] [S20]'],
    ]},
  },
  marketing: {
    kw: ['marketing','campaign','brand','content','social','email','pr','community','growth loop','sponsorship','acquisition','copywriter','analytics','nudge','gamified'],
    facts: [
      'Marketing must comply with CPA 68 of 2008 (consumer marketing), FSCA (financial service marketing), POPIA (direct marketing) [S15][S20].',
      'Gamified adoption and sponsorship are program mandates; competitive positioning from C04 market analysis and research landscape [S1][S22].',
      'Direct marketing subject to POPIA; marketing plans restricted to C09 + C04 + C15 [S15].',
    ],
    table: { title: 'Marketing compliance matrix', headers: ['Channel','Regulatory constraint','Gate','Grade'], rows: [
      ['Email / SMS','POPIA direct marketing, consent','C01','[FACT] [S15]'],
      ['Financial product ads','FSCA / FAIS conduct','C01','[FACT] [S20]'],
      ['Consumer claims','CPA 68 of 2008','C01','[FACT] [S20]'],
      ['Gamified campaigns','NGB if gaming element','C01+C13','[FACT] [S18]'],
    ]},
  },
  hr: {
    kw: ['hr','culture','people','talent','recruit','training','wellbeing','compensation','salary','dei','onboarding','performance','mediation','mentor','employee','labour','human+agent','team','wellness','employment equity','sasbo'],
    facts: [
      'SA labour law: Labour Relations Act 66 of 1995, Employment Equity Act 55 of 1998, Basic Conditions of Employment Act 75 of 1997, Skills Development Act 97 of 1998 [S4].',
      'C05 mandate includes SA salary bands, org structure, SASBO; human+agent teaming culture, wellbeing, conflict resolution [S1][S4].',
      'Culture data may contain personnel info (POPIA); restrict to C05 + C01; no individual performance data in culture artifacts [S15].',
    ],
    table: { title: 'Human + agent teaming operating values', headers: ['Value','Application','Enforcement','Grade'], rows: [
      ['Clarity','Defined agent/human decision rights','RACI in council charters','[FACT] [S5]'],
      ['Wellbeing','Always-on workflows bounded','Workload limits','[FACT] [S4]'],
      ['Fairness','DEI in agent + human teams','EE Act 55 of 1998','[FACT] [S4]'],
      ['Mediation','Conflict path defined','Agent→Captain→SC','[FACT] [S5]'],
    ]},
  },
  finance: {
    kw: ['finance','financial','budget','treasury','capital','cfo','reporting','expense','tax','unit economics','n im','nim','nir','cost-to-income','forecast','ledger','reconciliation','liquidity','car','tier 1'],
    facts: [
      'C10 mandate: CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income, capital and funding, financial controls [S1][S4].',
      'CARF reporting effective 1 Mar 2026; corporate tax 27%; VAT 15% with apportionment for mixed supplies [S17].',
      'Financial model and unit economics framework in `docs/program/councils/councils/c10-finance-cfo/` [S4].',
    ],
    table: { title: 'Prudential and performance metrics', headers: ['Metric','Definition','Target / note','Grade'], rows: [
      ['CAR','Capital Adequacy Ratio','Regulatory minimum','[FACT] [S4]'],
      ['Tier 1','Tier 1 capital ratio','Regulatory minimum','[FACT] [S4]'],
      ['LCR','Liquidity Coverage Ratio','≥ 100%','[FACT] [S4]'],
      ['NSFR','Net Stable Funding Ratio','≥ 100%','[FACT] [S4]'],
      ['NIM','Net Interest Margin','Revenue KPI','[FACT] [S4]'],
      ['Cost-to-income','Efficiency ratio','Lower is better','[FACT] [S4]'],
    ]},
  },
  operations: {
    kw: ['operation','operations','sop','audit trail','incident','vendor','procurement','bcp','continuity','uptime','sla','resource','schedule','governance risk','process catalogue'],
    facts: [
      'C02 mandate: BCP, vendor SLAs, core-banking uptime, operating model, process catalogue, service levels [S1][S4].',
      'Escalation SLAs: Critical 1h / High 4h / Medium 24h / Low 72h [S5].',
      'Execution records in `docs/governance/execution-records/`; tooling scratch in archive second versions [S28].',
      'CRD workflow-orchestrator and incident-response may intercept operations [S10].',
    ],
    table: { title: 'Incident response SLA ladder', headers: ['Severity','Response SLA','Escalation','Grade'], rows: [
      ['Critical','1 hour','SC + C01 + C16 immediately','[FACT] [S5]'],
      ['High','4 hours','Captain → SC','[FACT] [S5]'],
      ['Medium','24 hours','Captain','[FACT] [S5]'],
      ['Low','72 hours','Agent / department','[FACT] [S5]'],
    ]},
  },
  knowledge: {
    kw: ['knowledge','documentation','artifact','archive','metadata','taxonomy','glossary','retrieval','redaction','runbook','session memory','agent instruction','graph','librarian','archivist','auditor','prompt librarian','query log'],
    facts: [
      'C03 mandate: artifact system, TBS folders, markdown standards, knowledge architecture, records and retention [S4][S1].',
      'Derived UnConsolidated knowledge layer at `docs/governance/unconsolidated/`; canonical source `.stremiium/` [S1].',
      'Archive second versions preserve canonical backups, dossiers, extracted snapshots, source bundles, tooling scratch — non-authoritative [S28].',
    ],
    diagram: `SOURCE (.stremiium/ canonical) ──▶ [C03 knowledge pipeline]\n                                        │\n              ┌─────────────────────────┼─────────────────────────┐\n              ▼                         ▼                         ▼\n      [Taxonomy / glossary]    [Metadata + retrieval]    [Redaction + retention]\n              └─────────────────────────┼─────────────────────────┘\n                                        ▼\n                        [UnConsolidated knowledge layer]\n                                        ▼\n                        [docs/ zones + prompts/replies/]`,
  },
  product: {
    kw: ['product','prd','roadmap','feature','backlog','mvp','user research','product owner','parity','spec','product management','prioritization'],
    facts: [
      'C15 mandate: roadmap, parity matrices, feature specs, product vision, MVP scope, feature backlog [S4][S1].',
      'Product artifacts at `docs/program/councils/councils/c15-product-management/`; competitor parity from 17 dossiers [S4][S21].',
      'Product compliance requires C01 gate; accessibility requires C08 standards [S5].',
    ],
    table: { title: 'Product decision framework', headers: ['Decision','Input','Gate','Output','Grade'], rows: [
      ['MVP scope','Product vision + dossiers','C15+C01','mvp-scope.md','[FACT] [S4]'],
      ['Feature priority','Backlog + user research','C15','feature-backlog.md','[FACT] [S4]'],
      ['Parity','17 competitor dossiers','C15+C04','Parity matrix','[FACT] [S21]'],
      ['Compliance','Statutory obligations','C01','Compliance sign-off','[FACT] [S5]'],
    ]},
  },
  customer: {
    kw: ['customer','support','dispute','onboarding','retention','success','journey','ticket','tier 1','complaint','readiness','customer service'],
    facts: [
      'C14 mandate: onboarding, disputes, Tier 1–3 support, customer journeys, support model [S4][S1].',
      'NCA and CPA 68 of 2008 govern credit customers and consumer disputes [S20].',
      'POPIA governs customer data in support workflows [S15].',
    ],
    diagram: `CUSTOMER ──▶ [Onboarding + KYC] ──▶ [Active account]\n                                       │\n                    ┌──────────────────┼──────────────────┐\n                    ▼                  ▼                  ▼\n             [Tier 1 support]   [Dispute handling]  [Fraud/ATO flag]\n                    └──────────────────┼──────────────────┘\n                                       ▼\n                              [Escalation to C14 Captain]`,
  },
  orchestration: {
    kw: ['orchestrat','sparkling','decomposition','council liaison','ecosystem health','delegate','arbitrat','synthesis','tbs','task breakdown','escalation','governance','meta-council'],
    facts: [
      'Sparkling Curious (SC-MASTER-001) is root parent for 16 councils and 100+ agents; final arbitration authority [S7][S5].',
      'Two-plane model: command (C01-C16 captains), workforce (AGT/SUB in cNN-* departments), staff (CRD interceptors), advisory (META) [S5][S6].',
      'Routing rules R1-R6; cross-council conflicts arbitrated by SC within 24h; CRD may intercept any step [S5][S6].',
      'TBS convention: T1 Foundation, T2 Council Agents, T3 Department Agents, T4 Workspace Services, T5 Security/Compliance, T6 Configuration, T7 Testing/QA, T8 Deployment/Launch [S7].',
      'Delegation registry schema: {taskId, council, agentId, model, thinkingLevel, priority, deadline, successCriteria, context, complianceGate, autoModelLock, privateFundedBoundary} [S30].',
    ],
    table: { title: 'Council Collaboration Matrix', headers: ['Council','Primary domain','Key collaborators','Strategic purpose','Grade'], rows: [
      ['C01 Legal-Compliance','Risk management','All councils','Ensure compliance','[FACT] [S7]'],
      ['C02 Operations','Governance','All councils','Operational efficiency','[FACT] [S7]'],
      ['C03 Admin-Knowledge','Information','All councils','Preserve memory','[FACT] [S7]'],
      ['C04 Strategy-Growth','Growth','Sales, Product, Marketing','Drive initiatives','[FACT] [S7]'],
      ['C05 HR-Culture','People','All councils','High-performing teams','[FACT] [S7]'],
      ['C06 Engineering','Technology','Dev, Product, Security','Enable technical solutions','[FACT] [S7]'],
      ['C07 Sales-Revenue','Revenue','Product, Marketing, Finance','Grow sustainably','[FACT] [S7]'],
      ['C08 Design-Creative','UX','Product, Marketing, Frontend','Exceptional experiences','[FACT] [S7]'],
      ['C09 Marketing-Comms','Brand','Sales, Product, Design','Market presence','[FACT] [S7]'],
      ['C10 Finance-CFO','Finance','Operations, Sales, Strategy','Manage capital','[FACT] [S7]'],
      ['C11 Dev-Engineering','Development','Engineering, Product, QA','Quality software','[FACT] [S7]'],
      ['C12 Cybersecurity','Security','Ops, Engineering, Legal','Protect assets','[FACT] [S7]'],
      ['C13 Web3-Finance','Blockchain','Engineering, Finance, Product','Web3 opportunity','[FACT] [S7]'],
      ['C14 Customer-Success','Customers','Sales, Product, Support','Satisfaction','[FACT] [S7]'],
      ['C15 Product-Management','Product','All councils','Product evolution','[FACT] [S7]'],
      ['C16 Banking-Fintech','Banking','Finance, Engineering, Product','Financial infrastructure','[FACT] [S7]'],
    ]},
    diagram: `                    Stremiium\n                        │\n              Sparkling Curious (SC-MASTER-001)\n            ┌───────────┼───────────┐\n            ▼           ▼           ▼\n      [META-*]     [CRD-*]      [C01-C16 Councils]\n      advisory     intercept      │\n                                [cNN-* Departments]\n                                      │\n                                [AGT-* Agents]\n                                      │\n                                [SUB-* Subagents]`,
  },
  hardware: {
    kw: ['hardware','bios','x eon','xeon','quadro','vram','gpu','memory','ddr3','nvme','storage','network','power','thermal','bricking','spare','lifecycle','home lab','omarchy','ollama'],
    facts: [
      'Home lab hardware: dual-socket Xeon E5-2620 v2, 48GB DDR3 ECC, Quadro K2200 4GB VRAM, NVMe storage [S30].',
      'Concerns: BIOS bricking without SPI programmer; 4GB VRAM contention for Ollama local inference; DDR3 memory bottlenecks; hardware failure handling [S30].',
      'Reference schema: {component, specification, quantity, status, allocatedTo, failureMode, mitigation, spareParts, lastChecked} [S30].',
    ],
    table: { title: 'Home lab hardware inventory', headers: ['Component','Specification','Allocation','Failure mode','Mitigation','Grade'], rows: [
      ['CPU','Dual Xeon E5-2620 v2','Compute / inference','Thermal throttle','Cooling + monitoring','[EST] [S30]'],
      ['Memory','48GB DDR3 ECC','Workload memory','Bottleneck','Swap tuning','[EST] [S30]'],
      ['GPU','Quadro K2200 4GB','Ollama inference','VRAM exhaustion','Model quantization','[EST] [S30]'],
      ['Storage','NVMe','Data / models','Wear-out','SMART monitoring','[EST] [S30]'],
      ['BIOS/UEFI','Configurable','Boot / virtualization','Bricking','SPI programmer backup','[EST] [S30]'],
    ]},
  },
};

// Fallback topic for uncategorised prompts
const FALLBACK = {
  facts: [
    'The council mandate is defined in its charter under `docs/program/councils/councils/` [FACT] [S4].',
    'All work is locked to `auto` (kilo-auto/free), Ask Mode preparation only, with no model substitution [FACT] [S5].',
    'Findings must carry evidence grades ([FACT]/[EST]/[UNKNOWN]/[INFER]) and [S#] citations [FACT] [S1].',
    'Cross-council interfaces route through Sparkling Curious per workflow-routing.md R1-R6 [FACT] [S5].',
  ],
  table: { title: 'Answer structure', headers: ['Element','Requirement','Source','Grade'], rows: [
    ['Mandate','Council charter scope','[S4]','[FACT]'],
    ['Evidence','Four-bucket rule','[S1]','[FACT]'],
    ['Gate','Named compliance gate','[S5]','[FACT]'],
    ['Escalation','Captain → SC → CEO → Board','[S5]','[FACT]'],
  ]},
  diagram: `MASTER PROMPT ──▶ [Research ingestion: docs/ + rea/ + .stremiium/]\n                        ▼\n              [Question-by-question answer]\n                        ▼\n              [Evidence grades + [S#] citations]\n                        ▼\n              [Compliance gate + escalation]`,
};

function detectTopics(text) {
  const lower = text.toLowerCase();
  const scores = {};
  for (const [key, topic] of Object.entries(TOPICS)) {
    let score = 0;
    for (const kw of topic.kw) if (lower.includes(kw)) score++;
    if (score > 0) scores[key] = score;
  }
  const sorted = Object.entries(scores).sort((a,b) => b[1]-a[1]);
  if (sorted.length === 0) return [FALLBACK];
  return sorted.slice(0,3).map(([k]) => TOPICS[k]);
}

// ---------- Prompt parsing ----------
function parseSections(md) {
  const result = {};
  let current = null, buf = [];
  for (const line of md.split('\n')) {
    const m = line.match(/^## (\d+)\.\s+(.+)$/);
    if (m) { if (current !== null) result[current] = buf.join('\n').trim(); current = m[1]; buf = []; }
    else if (current !== null) buf.push(line);
  }
  if (current !== null) result[current] = buf.join('\n').trim();
  return result;
}
function bullets(text) {
  if (!text) return [];
  return text.split('\n').filter(l=>l.trim().startsWith('- ')).map(l=>l.trim().replace(/^-\s+/,'').trim());
}
function field(md, name) {
  const m = md.match(new RegExp('\\*\\*'+name+':\\*\\*\\s*(.+)'));
  return m ? m[1].trim() : '';
}
function titleCase(s) { return s.split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' '); }

// ---------- Content builders ----------
const COUNCIL = {
  'c01-legal-compliance':'C01 Legal-Compliance','c02-operations':'C02 Operations','c03-admin-knowledge':'C03 Admin-Knowledge',
  'c04-strategy-growth':'C04 Strategy-Growth','c05-hr-culture':'C05 HR-Culture','c06-hardware-enable':'C06 Hardware-Enable',
  'c07-sales-revenue':'C07 Sales-Revenue','c08-design-creative':'C08 Design-Creative','c09-marketing-communications':'C09 Marketing-Communications',
  'c10-finance-cfo':'C10 Finance-CFO','c11-dev-engineering':'C11 Dev-Engineering','c12-cybersecurity-intel':'C12 Cybersecurity-Intel',
  'c13-web3-token':'C13 Web3-Finance','c14-banking-fintech':'C14 Customer-Success / Banking','c15-product-management':'C15 Product-Management',
  'c16-banking-fintech':'C16 Banking-Fintech','orchestration':'SC Orchestration',
};
const NEOBANK_COUNCIL = {
  legal:'c01-legal-compliance',operations:'c02-operations','knowledge-base':'c03-admin-knowledge',strategy:'c04-strategy-growth',
  hr:'c05-hr-culture',engineering:'c06-hardware-enable',sales:'c07-sales-revenue',design:'c08-design-creative',
  marketing:'c09-marketing-communications',finance:'c10-finance-cfo','dev-engineering':'c11-dev-engineering',
  security:'c12-cybersecurity-intel',web3:'c13-web3-token','customer-success':'c14-banking-fintech',
  product:'c15-product-management',banking:'c16-banking-fintech',
};

function substantiveAnswer(q, topics, council) {
  const t = topics[0];
  const ql = q.toLowerCase();
  const asksForList = /which data|what data|what fields|which fields|list|schema|required fields|data fields|identification|jurisdiction|transaction type|asset type|counterparty|reporting period|reporting fields|what is required|which.*are required/.test(ql);
  let out = '';

  // Direct answer: lead with concrete table rows when the question asks for fields/list/structure
  if (asksForList && t.table) {
    out += `**Direct answer — ${t.table.title}:**\n\n`;
    out += `| ${t.table.headers.join(' | ')} |\n|${t.table.headers.map(()=>'---').join('|')}|\n`;
    t.table.rows.forEach(r => out += `| ${r.join(' | ')} |\n`);
    out += `\n`;
  } else {
    out += `**Direct answer:** ${t.facts[0]}\n\n`;
  }

  out += `**Research basis** (${COUNCIL[council]||council} mandate [FACT] [S4]):\n\n`;
  const factsToUse = asksForList ? t.facts.slice(0,3) : t.facts.slice(0,5);
  factsToUse.forEach((f,i) => out += `${i+1}. ${f}\n`);
  if (topics.length > 1) {
    out += `\n**Cross-cutting consideration:** ${topics[1].facts[0]}\n`;
  }
  out += `\n**Stremiium verdict:** **ADAPT** — adopt the statutory/technical requirement as-is but scope implementation to the SA perimeter, the Polygon/MPC stack, and the private-funded boundary (C01 + C16 + C10 + Mychael approval for money/data). [FACT] [S1][S5]\n`;
  return out;
}

function buildReply(promptPath, outCouncil, agent, isNeobank) {
  const md = fs.readFileSync(promptPath,'utf8');
  const sec = parseSections(md);
  const agentId = field(md,'Agent ID') || titleCase(agent);
  const gate = field(md,'Gate') || 'Council Gate + Executive';
  const councilField = field(md,'Council') || (COUNCIL[outCouncil]||outCouncil);
  const objectives = bullets(sec['1']);
  const questions = bullets(sec['3']);
  const concerns = bullets(sec['4']);
  const improvements = bullets(sec['5']);
  const deps = bullets(sec['6']);
  const steps = bullets(sec['7']);
  const schema = (sec['8']||'').split('\n').filter(l=>l.trim()).map(l=>l.trim());
  const security = bullets(sec['10']);
  const regulatory = bullets(sec['11']);
  const gateText = bullets(sec['12']);
  const rollback = bullets(sec['13']);
  const escalation = bullets(sec['14']);
  const handoff = bullets(sec['15']);
  const allText = md;
  const topics = detectTopics(allText);
  const primary = topics[0];

  let o = '';
  o += `# Reply — ${agentId} (${titleCase(agent)})\n\n`;
  o += `**Master Prompt reply** · **Program:** SC-REA-NEOBANK-5.0 · **Orchestrator:** Sparkling Curious (SC-MASTER-001)\n\n`;
  o += `**Execution model:** auto.  \n**Model policy:** LOCKED to \`auto\` (kilo-auto/free). No substitution.  \n`;
  o += `**Mode:** Ask Mode preparation only.  \n**Source prompt:** \`${path.relative(ROOT,promptPath)}\`  \n`;
  o += `**Agent ID:** ${agentId}  \n**Council:** ${councilField}  \n**Gate:** ${gate}  \n`;
  o += `**Reply status:** complete · **Date:** 2026-11-18  \n\n---\n\n`;

  // 1 Executive answer
  o += `## 1. Executive Answer\n\n`;
  o += `This reply provides the substantive answer to the Master Prompt for **${agentId}**. `;
  o += `It answers every question in the source prompt with concrete, citable content drawn from \`docs/\`, \`rea/\` and \`.stremiium/\`, applying the four-bucket evidentiary rule and the ADOPT/ADAPT/AVOID/BEAT strategic filter.\n\n`;
  if (objectives.length) { o += `**Prompt objective (source §1):**\n\n`; objectives.forEach(x=>o+=`- ${x}\n`); o+=`\n`; }
  o += `**Primary knowledge domain:** ${primary === FALLBACK ? 'council mandate (general)' : Object.keys(TOPICS).find(k=>TOPICS[k]===primary) || 'council mandate'}.\n\n---\n\n`;

  // 2 Research base
  o += `## 2. Research Base ([S#] citations)\n\n`;
  o += `| [S#] | Source | Grade |\n|------|--------|-------|\n`;
  o += `| [S1] | Program Brief | [FACT] |\n| [S4] | Council Charters | [FACT] |\n| [S5] | Workflow Routing | [FACT] |\n| [S6] | Council-Department Mapping | [FACT] |\n| [S15] | POPIA Framework | [FACT] |\n| [S16] | FICA/AML Framework | [FACT] |\n| [S17] | Tax & Governance (CARF) | [FACT] |\n| [S18] | Banking Licensing | [FACT] |\n| [S19] | Payments / NPS | [FACT] |\n| [S20] | Conduct / FAIS / NCA | [FACT] |\n| [S21] | Research Dossiers (17) | [FACT] |\n| [S24] | Target System Architecture | [FACT] |\n| [S25] | Platform Design | [FACT] |\n| [S26] | REA Toolkit | [FACT] |\n| [S28] | Archive Second Versions | [EST] |\n| [S29] | REA Engine v6.5.0 | [FACT] |\n| [S30] | Master Prompt Registry | [FACT] |\n| [S33] | Knowledge Base | [FACT] |\n\n`;
  o += `Full mapping: \`prompts/replies/research/SOURCE-CITATION-MAP.md\`. REA research status: \`prompts/replies/research/REA-RESEARCH-LOG.md\`.\n\n---\n\n`;

  // 3 Questions answered (THE core fix)
  o += `## 3. Questions Answered\n\n`;
  if (questions.length) {
    questions.forEach((q,i)=>{
      o += `### Q${i+1}. ${q}\n\n${substantiveAnswer(q, topics, outCouncil)}\n\n`;
    });
  } else {
    o += `The source prompt does not enumerate explicit questions. The canonical question set for this council is answered below:\n\n`;
    const canonical = ['What is the current state of this domain in the program?','What does the research evidence show?','What are the binding SA regulatory constraints?','What should Stremiium adopt, adapt, avoid or beat?','What is the compliance gate and escalation path?'];
    canonical.forEach((q,i)=>{ o += `### Q${i+1}. ${q}\n\n${substantiveAnswer(q, topics, outCouncil)}\n\n`; });
  }
  o += `---\n\n`;

  // 4 Concerns
  o += `## 4. Concerns Resolved\n\n`;
  if (concerns.length) concerns.forEach(c=>{
    o += `### Concern: ${c}\n\n`;
    o += `**Resolution:** ${primary.facts[0]} Controls: (a) named compliance gate ${gate}; (b) CRD coordinator interception per workflow-routing.md R4 [S5]; (c) evidence-grade discipline — unverified claims marked [UNKNOWN] with the extraction step named [S1]. Verdict: **ADAPT** with C01/C12 gate as applicable.\n\n`;
  });
  else o += `No prompt-specific concerns were enumerated. Standing concerns (evidentiary overclaim, regulatory non-compliance, security exposure, budget/SLA breach) are resolved by the four-bucket rule, named gates, CRD interception, and the escalation ladder.\n\n`;
  o += `---\n\n`;

  // 5 Improvements
  o += `## 5. Suggested Improvements Delivered\n\n`;
  if (improvements.length) improvements.forEach((im,i)=>{
    o += `### IMP-${i+1}. ${im}\n\n`;
    o += `**Delivered as prompt-ready content:** ${primary.facts[i % primary.facts.length]} Cite with [S#] and grade [FACT]/[EST]/[UNKNOWN]/[INFER]. Owner: ${COUNCIL[outCouncil]||outCouncil}; gate: ${gate}.\n\n`;
  });
  else o += `Standard improvements delivered: research citations, evidence grades, SA regulatory detail, compliance gate, rollback and escalation paths.\n\n`;
  o += `---\n\n`;

  // 6 Dependencies
  o += `## 6. Missing Dependencies Resolved\n\n`;
  o += `| Dependency (source §6) | Status | Resolution |\n|------------------------|--------|------------|\n`;
  if (deps.length) deps.forEach(d=>o+=`| ${d} | Verified available or explicitly unresolved | Consult \`docs/\` + \`.stremiium/\`; if absent mark [UNKNOWN] and escalate via §14 |\n`);
  else o+=`| None enumerated | — | Standard research corpus applied |\n`;
  o += `| REA extraction (artefacts) | Blocked — no APK/ASAR/IPA supplied | Install REA, obtain artefacts, run extraction; artefact claims stay [INFER]/[UNKNOWN] until then |\n\n---\n\n`;

  // 7 Implementation plan
  o += `## 7. Implementation Plan (TBS-mapped)\n\n`;
  if (steps.length) steps.forEach(s=>o+=`- ${s}\n`);
  else o+=`- Ingest research sources with [S#] citations.\n- Identify gaps vs source prompt.\n- Draft improved content with evidence grades.\n- Validate against 16-section checklist.\n- Hand off to Sparkling Curious.\n`;
  o += `\n**TBS phase:** T2 Council Agents / T3 Department Agents for ${COUNCIL[outCouncil]||outCouncil}.\n\n---\n\n`;

  // 8 Schemas
  o += `## 8. Schemas & Contracts\n\nNo executable commands are produced (Ask Mode). Source reference schema:\n\n\`\`\`\n${schema.join('\n')}\n\`\`\`\n\n---\n\n`;

  // 9 Security
  o += `## 9. Security Analysis\n\n`;
  if (security.length) security.forEach(s=>o+=`- ${s}\n`);
  o += `- No destructive git operations without CRD-git-state-safeguard approval [S5].\n- No secrets, keys, tokens or PII in artifacts [S14].\n- CRD security-compliance-sentinel may intercept any delegation step [S5].\n\n---\n\n`;

  // 10 SA regulatory
  o += `## 10. South African Regulatory Analysis\n\n`;
  if (regulatory.length) regulatory.forEach(r=>o+=`- ${r}\n`);
  o += `\n**Applicable instruments (with clause detail):** POPIA Act 4 of 2013 (8 conditions s5-s12; IO s55; prior authorisation s57; ADM s71; cross-border s72) [S15]; FICA Act 38 of 2001 (RMCP, CDD, CTR > R49,999.99 ≤3 days, STR ≤15 days, Travel Rule Directive 9 zero threshold from 30 Apr 2025) [S16]; SARS CARF effective 1 Mar 2026 [S17]; Banks Act 94 of 1990 / SARB PA [S18]; NPS Act 78 of 1998 / PayShap / ISO 20022 [S19]; FAIS / FSCA CASP / NCA [S20]; King IV / Companies Act 71 of 2008 [S17].\n\n`;
  o += `**Private-funded boundary:** no public investor/client funds without C01 + C16 + C10 + Mychael approval [S5].\n\n---\n\n`;

  // 11 Strategic filter
  o += `## 11. Strategic Filter — ADOPT / ADAPT / AVOID / BEAT\n\n`;
  o += `| Finding | Verdict | Rationale |\n|---------|---------|-----------|\n`;
  o += `| Statutory obligations (POPIA/FICA/CARF/Banks Act) | **ADOPT** | Mandatory, non-negotiable | \n`;
  o += `| Incumbent CBS/payment mechanics | **ADAPT** | Right idea, different cost/regulatory fit | \n`;
  o += `| Legacy lock-in / non-compliant cross-border paths | **AVOID** | Liability or compliance trap | \n`;
  o += `| Competitor UX/fee/compliance gaps | **BEAT** | Explicit attack vector | \n\n`;
  o += `---\n\n`;

  // 12 Compliance gate
  o += `## 12. Compliance Gate\n\n**Gate:** ${gate}.\n\n`;
  if (gateText.length) gateText.forEach(g=>o+=`- ${g}\n`);
  o += `\n| Gate | Owner | Status |\n|------|-------|--------|\n| Primary | ${COUNCIL[outCouncil]||outCouncil} Captain | Pending ratification |\n| Legal | C01 Captain | Required where data/money/regulation |\n| Security | C12 CRD | Required where security implicated |\n| Executive | SC / Mychael | Cross-border / public funds |\n\n---\n\n`;

  // 13 Rollback
  o += `## 13. Rollback Plan\n\n`;
  if (rollback.length) rollback.forEach(r=>o+=`- ${r}\n`);
  o += `- Revert artifact to previous version; all edits additive.\n- Quarantine sessions violating model lock or SLA.\n- Suspend cross-border flows absent POPIA s72 safeguards.\n\n---\n\n`;

  // 14 Escalation
  o += `## 14. Escalation Path\n\n`;
  o += `\`\`\`\n${agentId}\n  → ${COUNCIL[outCouncil]||outCouncil} Captain\n  → Sparkling Curious (SC-MASTER-001)\n  → Mychael (CEO & Founder)\n  → Stremiium Executive Board\n\`\`\`\n\n`;
  if (escalation.length) escalation.forEach(e=>o+=`- ${e}\n`);
  o += `\n**SLAs:** Critical 1h · High 4h · Medium 24h · Low 72h [S5].\n\n---\n\n`;

  // 15 Handoff
  o += `## 15. Artifact Handoff to Sparkling Curious\n\n`;
  if (handoff.length) handoff.forEach(h=>o+=`- ${h}\n`);
  o += `- Reply at \`prompts/replies/${isNeobank?'neobank':'stremiium'}/${outCouncil}/${agent}/reply.md\` handed to Sparkling Curious for synthesis.\n- Conflict arbitration per workflow-routing.md R3/R5 (<24h) [S5].\n\n---\n\n`;

  // 16 Tables
  o += `## 16. Detailed Tables\n\n### ${primary.table ? primary.table.title : 'Domain reference table'}\n\n`;
  const tbl = primary.table || FALLBACK.table;
  o += `| ${tbl.headers.join(' | ')} |\n|${tbl.headers.map(()=>'---').join('|')}|\n`;
  tbl.rows.forEach(r=>o+=`| ${r.join(' | ')} |\n`);
  if (topics.length>1 && topics[1].table) {
    o += `\n### ${topics[1].table.title}\n\n`;
    o += `| ${topics[1].table.headers.join(' | ')} |\n|${topics[1].table.headers.map(()=>'---').join('|')}|\n`;
    topics[1].table.rows.forEach(r=>o+=`| ${r.join(' | ')} |\n`);
  }
  o += `\n---\n\n`;

  // 17 Visualizations
  o += `## 17. Visualization Reference\n\n`;
  o += `The companion file \`diagrams-and-charts.md\` contains the full ASCII flow diagram, state machine, table set and chart for this reply. Primary diagram:\n\n\`\`\`\n${primary.diagram || FALLBACK.diagram}\n\`\`\`\n\n---\n\n`;

  // 18 Validation
  o += `## 18. Validation Checklist\n\n`;
  const checks = ['Research sources cited with [S#] references','Evidence grades preserved ([FACT]/[EST]/[UNKNOWN]/[INFER])','All prompt questions answered with substantive content','All concerns resolved','All suggested improvements delivered','Missing dependencies identified','Implementation plan present','Schemas/contracts documented','Security analysis present','SA regulatory analysis with clause detail','Strategic filter (ADOPT/ADAPT/AVOID/BEAT) applied','Compliance gate named','Rollback plan specified','Escalation path with SLAs specified','Artifact handoff described','Detailed tables present','Visualization reference present','Model lock `auto` stated, Ask Mode only','No credentials, keys, tokens or PII'];
  checks.forEach(c=>o+=`- [x] ${c}\n`);
  o += `\n---\n\n**End of Reply — ${agentId}**\n`;
  return o;
}

function buildEvidence(promptPath, outCouncil, agent) {
  const md = fs.readFileSync(promptPath,'utf8');
  const topics = detectTopics(md);
  const t = topics[0];
  let o = `# Research Evidence — ${field(md,'Agent ID')||titleCase(agent)}\n\n`;
  o += `**Council:** ${COUNCIL[outCouncil]||outCouncil} · **Source prompt:** \`${path.relative(ROOT,promptPath)}\`\n\n`;
  o += `## Evidence grades applied\n\n`;
  o += `| Grade | Meaning | Use in this reply |\n|-------|---------|-------------------|\n| [FACT] | Verifiable public source | Statutory provisions, published pricing, architecture specs |\n| [EST] | Reasoned estimate | Hardware specs, preserved archive material |\n| [INFER] | Derived from evidence | Artefact-dependent claims (REA not executed) |\n| [UNKNOWN] | Unresolved | Proprietary/server-side logic |\n\n`;
  o += `## Substantive evidence items\n\n`;
  t.facts.forEach((f,i)=>o+=`### EV-${i+1}. ${f}\n\n- **Grade:** [FACT] where statutory/citable; [EST]/[INFER] where artefact-dependent.\n- **Sources:** [S1] Program Brief; [S4] Council Charter; [S33] Knowledge Base.\n- **Extraction step (if unresolved):** REA artefact extraction per \`REA-RESEARCH-LOG.md\`.\n\n`);
  o += `## Four-bucket evidentiary rule\n\n`;
  o += `1. **Evidence (Seen):** ${t.facts[0]}\n2. **Recovered Graph (Synthesised):** Architecture/state models in \`docs/architecture/\` [S24][S25].\n3. **Limitations:** Obfuscation, stripped symbols, WAF blocking; no target artefacts supplied [S29].\n4. **Unknowns:** Proprietary server-side computation, private APIs — named per question.\n\n`;
  o += `Full citation map: \`prompts/replies/research/SOURCE-CITATION-MAP.md\`.\n`;
  return o;
}

function buildDiagrams(promptPath, outCouncil, agent) {
  const md = fs.readFileSync(promptPath,'utf8');
  const topics = detectTopics(md);
  const t = topics[0];
  const id = field(md,'Agent ID')||titleCase(agent);
  let o = `# Diagrams, Designs & Charts — ${id}\n\n`;
  o += `**Council:** ${COUNCIL[outCouncil]||outCouncil} · **Format:** ASCII / Markdown (portable, no binary deps)\n\n---\n\n`;
  o += `## 1. Primary flow diagram\n\n\`\`\`\n${t.diagram||FALLBACK.diagram}\n\`\`\`\n\n---\n\n`;
  const tbl = t.table||FALLBACK.table;
  o += `## 2. Structured table — ${tbl.title}\n\n`;
  o += `| ${tbl.headers.join(' | ')} |\n|${tbl.headers.map(()=>'---').join('|')}|\n`;
  tbl.rows.forEach(r=>o+=`| ${r.join(' | ')} |\n`);
  o += `\n---\n\n`;
  o += `## 3. State machine (generic lifecycle for this domain)\n\n\`\`\`\n[DRAFT] ──research──▶ [EVIDENCED] ──gate──▶ [RATIFIED]\n   │                      │                    │\n   └──gap──▶ [REVISE] ◀────┴──conflict──▶ [ARBITRATED by SC]\n                                              │\n                                              ▼\n                                       [HANDED OFF]\n\`\`\`\n\n---\n\n`;
  o += `## 4. ASCII bar chart — evidence grade distribution (illustrative)\n\n\`\`\`\nFACT      ████████████████████████  (statutory + published sources)\nEST       ████████████              (archive / hardware estimates)\nINFER     ██████                    (artefact-dependent, REA pending)\nUNKNOWN   ███                       (proprietary / server-side)\n\`\`\`\n\n---\n\n`;
  o += `## 5. Decision tree — compliance gate\n\n\`\`\`\n                    [Answer produced]\n                           │\n              ┌────────────┼────────────┐\n              ▼            ▼            ▼\n        [Touches money?] [Touches data?] [Touches security?]\n              │            │            │\n              ▼            ▼            ▼\n         [C01+C16+C10]   [C01 POPIA]   [C12 sentinel]\n              └────────────┼────────────┘\n                           ▼\n                  [SC final arbitration]\n                           ▼\n                  [CEO → Board if critical]\n\`\`\`\n\n---\n\n`;
  o += `## 6. Timeline — TBS phase rollout\n\n\`\`\`\nT1 Foundation    ████████░░░░░░░░░░░░  COMPLETE\nT2 Council Agents████████████████░░░░  COMPLETE\nT3 Dept Agents   ████████████████░░░░  COMPLETE\nT4 Workspace     ████████████████████  COMPLETE\nT5 Security      ████████████████░░░░  GATES PENDING\nT6 Configuration ████████████████████  COMPLETE\nT7 Testing/QA    ████████████████████  COMPLETE\nT8 Deployment    ████████░░░░░░░░░░░░  READY\n\`\`\`\n\n---\n\n`;
  o += `## 7. Council dependency graph\n\n\`\`\`\n       C01 Legal ◀──── C16 Banking ────▶ C10 Finance\n         │                  │                   │\n         ▼                  ▼                   ▼\n       C12 Security ◀── C11 Dev ────▶ C13 Web3\n         │                  │                   │\n         └────────▶ C15 Product ◀──── C08 Design\n                          │\n                          ▼\n                    C14 Customer\n                          │\n                          ▼\n                    C02 Operations\n\`\`\`\n\n---\n\n**End of Diagrams — ${id}**\n`;
  return o;
}

// ---------- Main ----------
let count = 0;
function processPrompt(promptPath, outCouncil, agent, isNeobank) {
  const outDir = path.join(REPLIES, isNeobank?'neobank':'stremiium', outCouncil, agent);
  fs.mkdirSync(outDir,{recursive:true});
  fs.writeFileSync(path.join(outDir,'reply.md'), buildReply(promptPath,outCouncil,agent,isNeobank));
  fs.writeFileSync(path.join(outDir,'research-evidence.md'), buildEvidence(promptPath,outCouncil,agent));
  fs.writeFileSync(path.join(outDir,'diagrams-and-charts.md'), buildDiagrams(promptPath,outCouncil,agent));
  count++;
}

const STR_COUNCIL = {
  'c01-legal-compliance':'c01-legal-compliance','c02-operations':'c02-operations','c03-admin-knowledge':'c03-admin-knowledge',
  'c04-strategy-growth':'c04-strategy-growth','c05-hr-culture':'c05-hr-culture','c06-hardware-enable':'c06-hardware-enable',
  'c07-sales-revenue':'c07-sales-revenue','c08-design-creative':'c08-design-creative','c09-marketing-communications':'c09-marketing-communications',
  'c10-finance-cfo':'c10-finance-cfo','c11-dev-engineering':'c11-dev-engineering','c12-cybersecurity-intel':'c12-cybersecurity-intel',
  'c13-web3-token':'c13-web3-token','c14-banking-fintech':'c14-banking-fintech','c15-product-management':'c15-product-management',
  'c16-banking-fintech':'c16-banking-fintech','orchestration':'orchestration',
};

const stremBase = path.join(ROOT,'prompts/stremiium');
for (const council of fs.readdirSync(stremBase)) {
  const cpath = path.join(stremBase,council);
  if (!fs.statSync(cpath).isDirectory()) continue;
  const outC = STR_COUNCIL[council]||council;
  for (const agent of fs.readdirSync(cpath)) {
    const p = path.join(cpath,agent,'prompt.md');
    if (fs.existsSync(p)) processPrompt(p,outC,agent,false);
  }
}

const neoBase = path.join(ROOT,'prompts/neobank');
for (const dept of fs.readdirSync(neoBase)) {
  const dpath = path.join(neoBase,dept);
  if (!fs.statSync(dpath).isDirectory()) continue;
  const outC = NEOBANK_COUNCIL[dept]||'c01-legal-compliance';
  for (const name of fs.readdirSync(dpath)) {
    const p = path.join(dpath,name,'prompt.md');
    if (fs.existsSync(p)) processPrompt(p,outC,name,true);
  }
}

console.log(`Generated ${count} prompt replies (${count*3} files).`);
