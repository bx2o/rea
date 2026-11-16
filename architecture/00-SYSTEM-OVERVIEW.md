# UnConsolidated Project Architecture — System Overview

> **Format:** UnConsolidated (每份文件自包含 / each document stands alone, no merged master).
> **Authority:** Sparkling Curious v3.0 (SC-MASTER-001) — Master Orchestrator.
> **Owner:** Stremiium Agent Operating System (SAOS) 16-Council Ecosystem.
> **Sponsor task:** NeoBank launch in South Africa — competitive reverse-engineering of incumbent banks, neobanks, crypto/trading platforms, and fan-engagement competitors.
> **Created:** 2026-10-16 (Africa/Johannesburg).

---

## 1. Purpose

This workspace is the **evidence and architecture repository** for a South African NeoBank
launch programme. It applies the **Stremiium SAOS** multi-council operating model, driven by
**Sparkling Curious**, to run an **UnConsolidated reverse-engineering research & analysis**
programme across:

1. South African incumbent banks (ABSA, Nedbank, FNB, Standard Bank, Capitec, African Bank).
2. South African neobanks / digital banks (TymeBank→GoTymeBank, Discovery Bank, Bank Zero, Bettr).
3. South African crypto/trading platforms (Luno, VALR, eBucks-adjacent, EasyEquities).
4. Global reference banks / wealth (JPMorgan Chase, JPMorgan Private Bank, Morgan Stanley).
5. Global digital-bank references (Flex.one / Flex, Revolut, Monzo, Nubank, Chime).
6. Fan-engagement / web3 competitors (Sorare, Socios/Chiliz, Polymarket, FanDuel, Fanatics, Gate.io).

The reverse-engineering **engine** is the open-source repo [`morluto/rea`](https://github.com/morluto/rea)
("Reverse Engineer Anything"), installed at [`/workspace/rea`](../rea).

---

## 2. Two-Plane Operating Model (adopted from SAOS)

```text
Stremiium
└── Sparkling Curious (SC-MASTER-001)            ← this orchestrator
    ├── Meta-Councils            META-*  advisory only
    ├── Coordinator Staff Line   CRD-*   cross-cutting gates
    └── Councils                 C01–C16 COMMAND PLANE
        └── Departments          cNN-*   WORKFORCE PLANE
            └── Agents           AGT-*
                └── Subagents    SUB-*
                    └── Skills / Tools / Workflows
Executive node: EXEC-council-ceo (CEO proxy)
```

**In this session** the councils map to research **workstreams**; each `Task` sub-agent
spawned by the orchestrator is a **department agent (AGT-*/SUB-*)**. The `stremiium_extracted/.stremiium`
tree is the canonical policy/registry source and is used read-only as the instruction set.

---

## 3. Council → Research Workstream Map

| Council | Department scope | Research workstream | Output root |
|---|---|---|---|
| C01 | Legal & Compliance | Licences (Banks Act / SARB / FSCA / FICA / POPIA / NCA), T&Cs, disclosures | `research/*/<bank>/legal/` |
| C02 | Operations | Branch/kiosk networks, BPO, uptime, service model | `research/*/<bank>/operations/` |
| C03 | Admin & Knowledge | Source library, taxonomy, indices, bibliographies | `source-library/` |
| C04 | Strategy & Growth | Positioning, TAM/SAM/SOM, growth levers, M&A | `research/*/<bank>/strategy/` |
| C05 | HR & Culture | Headcount, leadership, salary bands, culture, transformation (B-BBEE) | `research/*/<bank>/people/` |
| C06 | Engineering & Infra | Tech stack, cloud, core banking, architecture | `research/*/<bank>/technology/` |
| C07 | Sales & BizDev | Partnerships, sponsor/affinity deals, merchant acquiring | `research/*/<bank>/partnerships/` |
| C08 | Design & Creative | App/UX, brand, design systems | `research/*/<bank>/design/` |
| C09 | Marketing & Comms | Campaigns, CAC, sponsorships, brand metrics | `research/*/<bank>/marketing/` |
| C10 | Finance & IR | Revenue, NII, cost-to-income, results, listings | `research/*/<bank>/financials/` |
| C11 | Dev Engineering | Product/app reverse-engineering (REA-driven) | `research/*/<bank>/technology/app-re/` |
| C12 | Cybersecurity & Intel | Fraud, AML, security posture, incidents | `research/*/<bank>/security/` |
| C13 | Web3 & Finance | Crypto, tokenomics, stablecoins, DeFi rails | `research/crypto-trading/` |
| C14 | Customer Success | NPS/CSAT, complaints (Ombudsman), service SLAs | `research/*/<bank>/customer/` |
| C15 | Product Management | Product catalogue, pricing, feature matrices | `research/*/<bank>/products/` |
| C16 | Banking & Fintech | Banking-system specifics, rails (PayShap, RTC), interchange | `research/*/<bank>/banking/` |

---

## 4. Directory Layout (UnConsolidated)

```text
/workspace
├── README.md                         # master index
├── .gitignore
├── stremiium_extracted/              # SAOS policy/registry source (read-only instruction set)
├── rea/                              # REA tool (morluto/rea @ 6.5.0) — installed & built
├── architecture/                     # system overview, REA analysis, data-model contracts
├── governance/                       # orchestration plan, agent roster, execution ledgers
│   └── execution/                    # prompt-execution ledger entries (SAOS rule)
├── tools/rea-business-toolkit/       # CUSTOM tools: REA-driven business reverse-engineering
│   ├── scripts/                      # executable helpers (node/bash)
│   └── queries/                      # reusable reverse-engineering question banks
├── research/
│   ├── banks/                        # SA incumbents + global reference banks
│   ├── neobanks-sa/                  # SA digital-only banks
│   ├── crypto-trading/               # Luno, VALR, exchanges, tokenomics
│   ├── competitors/                  # Sorare, Socios, Polymarket, FanDuel, Fanatics, Gate, Chiliz
│   ├── departments/                  # cross-bank department syntheses
│   └── cross-cutting/                # regulation, macro, papers, keyword taxonomy
├── source-library/                   # every cited source, indexed
├── deliverables/
│   ├── summaries/                    # per-bank "journey / growth / breakdown" final files
│   └── charts/                       # generated Mermaid/DOT/SVG/CSV charts
└── assets/images/                    # generated imagery
```

---

## 5. Evidence & Integrity Rules (inherited from SAOS + REA)

1. **Physical workspace evidence overrides stale task reports.**
2. **No fabrication.** Every factual claim carries a source URL or is explicitly tagged
   `[UNVERIFIED]` / `[ESTIMATE]` / `[UNKNOWN]`.
3. **Distinguish** observations, derivations, inferences, and unknowns (REA provenance rule).
4. **No secrets.** No credentials, keys, personal data in the workspace.
5. **Every research pass** writes a traceable entry under `governance/execution/`.
6. **Public-only scope.** Only publicly available information is collected (websites, filings,
   results presentations, regulator registers, press, app stores, academic papers).

---

## 6. Legal & Ethical Boundary

All activity is **passive, public-information research and analysis**. REA is used only against
software the analyst owns or is authorized to examine (`DISCLAIMER.md`). No unauthorised access,
no credential use, no circumvention. App/website reverse-engineering is limited to **static,
publicly-served assets** and **published documentation**.

---

## 7. Related Documents

- [`REA-Tooling-Analysis.md`](./REA-Tooling-Analysis.md) — how REA works, full tool inventory, custom-tool design.
- [`DATA-MODEL-CONTRACTS.md`](./DATA-MODEL-CONTRACTS.md) — front-matter / file-naming contracts.
- [`../governance/ORCHESTRATION-PLAN.md`](../governance/ORCHESTRATION-PLAN.md) — councils, agents, task list.
