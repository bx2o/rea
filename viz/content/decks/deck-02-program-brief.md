## SC-REA-NEOBANK-5.0 — Program Brief

- **Parent entity:** Stremiium (Pty) Ltd — Bloemfontein, Free State, South Africa
- **Architectural parent:** Sparkling Curious (`SC-MASTER-001`) · Executive apex: Mychael (CEO) → Board
- **Execution modality:** Two-Phase Dual Engine (Plan Mode → Code Mode)
- **Tooling anchor:** REA (`morluto/rea`) binary & application analysis engine
- Brief status: locked for Code-Mode execution · last updated 2026-11-16
- Learn deck 02 of 04 · 14 slides

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` header · `.stremiium/governance/workflow-routing.md` §4*

Note: The program brief is the constitution of this workspace. This deck compresses its twelve sections: why the program exists, the council map, the dossier roster, and the evidentiary rules.

---

## Why this program exists

Stremiium is launching a **South African NeoBank** that unifies:

- Fiat banking + digital-asset custody
- Fan/BLT loyalty tokens + phygital collectibles
- Prediction markets + DFS fantasy sports

…under one behavioural rewards engine and one native token: **`$STM`** (ERC-20 on Polygon PoS / ZK-EVM).

The rule that governs everything: **never speculate when software behaviour can be verified; always label the difference between what is *Seen*, what is *Inferred*, and what is *Unknown*.**

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §1*

Note: One app, one token, one rewards engine — the program exists to reverse-engineer how incumbents already do each layer before Stremiium builds its own.

---

## The competitive field

To outmanoeuvre:

| Category | Entities |
|---|---|
| Legacy incumbents | Standard Bank, ABSA, Nedbank, FNB |
| Digital first-movers | TymeBank, Discovery Bank, African Bank |
| Crypto-asset service providers | Luno, VALR, Flex.one |

…the program must produce **evidentiary reverse-engineering dossiers** of the whole SA banking + Web3 landscape and the global benchmarks that matter.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §1*

Note: Three competitor tiers, each with a different lesson: incumbents for scale, neobanks for UX, CASPs for crypto rails.

---

## The 16 strategic councils (authority map)

- **Tier 1** — C01–C10: Legal-Compliance → Finance-IR
- **Tier 2** — C11–C13: Dev-Engineering, Cybersecurity-Intel, Web3-Finance
- **Tier 3** — C14–C16: Customer-Success, Product-Management, Banking-Fintech

Council definitions live in `.stremiium/agents/council-agents/`.
Machine-readable registry: `.stremiium/registry/master-registry.json`.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §2*

Note: Sixteen councils in three tiers own every domain decision. The next three slides give each council's captain and mandate, exactly as the brief lists them.

---

## Tier 1 — C01–C05

| Council | Captain | Primary mandate |
|---|---|---|
| C01 Legal-Compliance | `C01-legal-compliance-captain` | FSCA CASP, FICA Dir.9 Travel Rule, SARB FinSurv ExCon, POPIA, NCA, NGB |
| C02 Operations | `C02-vp-operations` | BCP, vendor SLAs, core-banking uptime |
| C03 Admin-Knowledge | `C03-chief-librarian` | Artifact system, TBS folders, markdown standards |
| C04 Strategy-Growth | `C04-chief-strategist` | Market positioning, B-BBEE, growth forecasting |
| C05 HR-Culture | `C05-chief-people-officer` | SA salary bands, org structure, SASBO |

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §2 table, rows C01–C05*

Note: The regulated and organisational core: compliance, operations, knowledge, strategy, people.

---

## Tier 1 — C06–C10

| Council | Captain | Primary mandate |
|---|---|---|
| C06 Engineering-Infra | `C06-chief-technology-officer` | AWS `af-south-1`, K8s, HSM, VPC isolation |
| C07 Sales-BizDev | `C07-rainmaker-captain` | Merchant acquiring, POS, retail agent networks |
| C08 Design-Creative | `C08-chief-design-officer` | Mobile UI/UX, WCAG 2.1 AA, nudging flows |
| C09 Marketing-Comms | `C09-chief-marketing-officer` | Campaigns, sponsorship, gamified adoption |
| C10 Finance-IR | `C10-chief-financial-officer` | CAR/Tier1/LCR/NSFR, NIM, NIR, cost-to-income |

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §2 table, rows C06–C10*

Note: The build-and-sell half of tier one: infrastructure, distribution, design, marketing, finance.

---

## Tier 2 & Tier 3 — C11–C16

| Tier | Council | Captain | Primary mandate |
|---|---|---|---|
| 2 | C11 Dev-Engineering | `C11-dev-engineering-captain` | Full-stack, React Native, API design, REA JS analysis |
| 2 | C12 Cybersecurity-Intel | `C12-cybersecurity-intel-captain` | Threat model, pen-test, REA static/dynamic audit |
| 2 | C13 Web3-Finance | `C13-web3-finance-captain` | Polygon contracts, MPC wallets, $STM tokenomics |
| 3 | C14 Customer-Success | `C14-customer-success-captain` | Onboarding, disputes, Tier 1–3 support |
| 3 | C15 Product-Management | `C15-product-management-captain` | Roadmap, parity matrices, feature specs |
| 3 | C16 Banking-Fintech | `C16-banking-fintech-captain` | CBS signatures, ISO 20022, BankservAfrica, PayShap |

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §2 table, rows C11–C16*

Note: Tiers two and three: engineering, security, and Web3 in tier two; customers, product, and banking rails in tier three.

---

## Target dossier roster — 17 entities

| Domain group | Entities |
|---|---|
| SA traditional banking | Standard Bank, FNB (FirstRand), ABSA, Nedbank, African Bank |
| SA neobanks/digital | Discovery Bank, TymeBank / GoTymeBank |
| SA CASPs / crypto exchanges | Luno, VALR, Flex.one |
| Global banking & wealth | JPMorgan Chase (Kinexys), Morgan Stanley |
| Global Web3 fan engagement | Sorare, Socios.com / Chiliz, Polymarket, FanDuel / DraftKings, Fanatics |

Each entity has lead councils (e.g. Standard Bank → C16, C10; Luno → C13, C01).

> **Note (not a conflict):** the root README describes a "30-folder" dossier research surface; this §3 roster targets **17 entities**. Different scopes, not conflicting numbers — 30 dossier folders exist under `docs/research/dossiers/`, of which 17 carry an `evidence-ledger.json` and form the graded target roster. Both figures are cited exactly.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §3 table · `README.md` line 7*

Note: Seventeen graded target entities across six domain groups, each with an assigned lead council. The broader 30-folder surface covers supporting research beyond the graded core roster.

---

## Mandatory dossier template + depth bar

Every dossier folder contains:

```
02-research/dossiers/<domain>/<entity>/
├── README.md                      # index + executive summary + evidence legend
├── 01-identity-and-financials.md  … 08-stremiium-implications.md
└── evidence-ledger.json           # ≥ 20 entries per entity
```

Depth bar: research/architecture/UnConsolidated files **400–900 lines / 12–30 KB**; task files **150–350 lines / 5–12 KB**. Padding, repetition, and filler are explicitly disallowed.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §4 + §4.0*

Note: Eight fixed sections plus a machine-readable evidence ledger per entity, with a minimum density bar so dossiers stay decision-useful.

---

## The four evidentiary outputs

Every REA dossier file partitions findings into exactly:

1. **Evidence (Seen)** — verifiable strings, bytecode, function signatures, network calls, public filings, published fee schedules. Each item cites its source
2. **Recovered Graph (Synthesised)** — logical architecture, state machines, data models derived from seen evidence
3. **Limitations (Known Boundaries)** — obfuscated sections, stripped symbols, DRM, WAF blocking
4. **Unknowns (Unresolved)** — proprietary server-side computation, private APIs, unreachable logic

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §5*

Note: The four buckets are non-negotiable: what was directly seen, what was derived, what is blocked, and what remains open.

---

## The honesty rule

> REA (`morluto/rea`) is *not yet installed* in this workspace and **no APK/ASAR artefacts have been supplied** by the executive. No "Seen" item may claim to derive from a decompiled artefact we do not possess. Until REA extraction runs, "Seen" items are limited to **public, citable sources**, and everything artefact-dependent is labelled **Inferred** or **Unknown** with the extraction step that would resolve it named explicitly.

Evidence ledger entries carry: `id`, `claim`, `evidence_class` (SEEN | INFERRED | UNKNOWN), `source_type`, `source_ref`, `confidence`, `verified_at`.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §5 honesty rule + §6 ledger schema*

Note: The honesty rule is why decks and dossiers alike distinguish public-source facts from artefact-dependent claims. Every graded claim stays auditable.

---

## Strategic filter — ADOPT / ADAPT / AVOID / BEAT

Every dossier must end by classifying each major finding as:

- **ADOPT** — proven mechanic Stremiium should reproduce (with the improvement it makes)
- **ADAPT** — right idea, wrong cost model/regulatory fit; Stremiium changes it (state how)
- **AVOID** — a liability, lock-in, or compliance trap Stremiium refuses to reproduce
- **BEAT** — a competitor weakness Stremiium explicitly attacks

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §7*

Note: Research is only useful when it ends in a decision. The four-verdict filter forces one per major finding.

---

## Engineering anchors & token economics

```
CLIENT:       React Native (iOS/Android) + Next.js 15 web portal
API/GATEWAY:  GraphQL gateway + Kong (mTLS, rate limiting, WAF)
CORE BANKING: Mambu cloud-native CBS on AWS Cape Town (af-south-1)
PAYMENTS:     BankservAfrica engine (PayShap, RTC, EFT)
WEB3:         Polygon PoS / ZK-EVM + non-custodial MPC Wallet-as-a-Service
EVENTS:       Apache Kafka (transactional bus + rewards engine)
DATA:         PostgreSQL (ACID core) + Redis + The Graph
```

**`$STM` tokenomics:** 1,000,000,000 fixed supply · 20% of net quarterly fees → programmatic buy-back & burn until 50% retired · 25% fee discount when fees are settled in `$STM`.

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §8 (full specification in `docs/architecture/`)*

Note: The target stack anchors the whole program: Mambu for core banking, BankservAfrica for rails, Polygon for Web3, Kafka for the rewards bus — plus a fixed-supply token with a programmatic burn.

---

## Closing — the governing rule

> **Never speculate when software behaviour can be verified; always label the difference between what is *Seen*, what is *Inferred*, and what is *Unknown*.**

- Next: **deck 03 — Prompts & Replies** (how 201 Master Prompts become substantive answers)
- Governance detail: **deck 04 — Councils & Governance** (two planes, R1–R6)
- Sources: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` · `README.md`

*Source: `docs/program/tbs/tbs/PROGRAM_BRIEF.md` §1 closing rule*

Note: The brief in one sentence: verify what you can, label what you cannot, and route every decision through the council map. Deck 03 shows how questions flow through this machine.
