# T6 context · references.md

**Task:** T6.0 Stremiium Competitor Dissection
**Owner:** C03 Admin-Knowledge.

---

## 1. Public sources

| Entity | Primary public sources |
|---|---|
| Sorare | Sorare docs/whitepaper; StarkEx (StarkWare) documentation; Ethereum/Polygon block explorers; app-store listing |
| Socios.com / Chiliz | Chiliz chain docs; Socios Fan Token Offering terms; block explorers; app-store listing |
| Polymarket | Polymarket docs; Gnosis Conditional Token Framework (CTF) specs; UMA Optimistic Oracle docs; Polygon contracts; public regulatory/enforcement records |
| FanDuel / DraftKings | Public contest rules; SEC filings (DraftKings); odds/DFS help docs; app-store listings |
| Fanatics | Fanatics Collectibles public pages; FanCash programme terms; press material |

## 2. Entity folders

- `research/web3-competitors/sorare/`
- `research/web3-competitors/socios-chiliz/`
- `research/web3-competitors/polymarket/`
- `research/web3-competitors/fanduel/`
- `research/web3-competitors/fanatics/`

## 3. Internal references

| Ref | Path | Use |
|---|---|---|
| [R1] | `task/PROGRAM_BRIEF.md` §2, §4, §5, §7, §8 | Roster, template, buckets, filter, $STM design |
| [R2] | `task/TASK_INDEX.md` (T6 rows) | Statuses + paths |
| [R3] | `.stremiium/skills/SKILLS-ACTIVATION-INDEX.md` (BLOCK-*, web3-testing) | Skill aids for on-chain analysis |
| [R4] | `research/casps-and-wallets/*` | SA crypto-rails cross-reference |

## 4. Assumptions

- A1: Published contract addresses on explorers correspond to the live systems.
- A2: Whitepapers/published rules faithfully describe retail-facing mechanics.
- A3: Gambling/securities classification differs by jurisdiction and must be assessed for SA.

## 5. Evidentiary-class reminder

> SEEN = **public on-chain state** (strongest here) + filings/docs. INFERRED = synthesised from
> behaviour. UNKNOWN = centralised odds engines, matching, oracle internals.
> REA not installed ⇒ no app decompilation; on-chain data is the primary SEEN forensic source.

## 6. Compliance constraints

No credentials/keys/seed phrases/personal data. On-chain addresses are public and may be cited.
C01 owns gambling/securities risk assessment. Conventional commits (`analysis:`) at T8.
