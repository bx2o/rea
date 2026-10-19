# T4 context · references.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Owner:** C03 Admin-Knowledge.

---

## 1. Public sources

| Entity | Primary public sources |
|---|---|
| Luno | FSCA CASP register; Luno Proof-of-Reserves/Merkle publications; Luno fee schedule; API docs; app-store listing |
| VALR | FSCA CASP register; VALR public API docs; fee schedule; market-data endpoints; press/tech announcements |
| Flex.one | FSCA CASP register; Flex.one card-programme terms; product pages; fee disclosures |

## 2. Entity folders

- `research/casps-and-wallets/luno/`
- `research/casps-and-wallets/valr/`
- `research/casps-and-wallets/flex-one/`

## 3. Internal references

| Ref | Path | Use |
|---|---|---|
| [R1] | `task/PROGRAM_BRIEF.md` §2, §4, §5, §8 | Roster, template, buckets, target token/MPC design |
| [R2] | `task/TASK_INDEX.md` (T4 rows) | Statuses + paths |
| [R3] | `research/banks/*/06-regulatory-and-risk.md` | Cross-reference bank regulatory posture (T2/T3) |
| [R4] | FICA Directive 9 (Travel Rule) | Regulatory baseline (public) |

## 4. Assumptions

- A1: FSCA CASP register entries reflect current licensing.
- A2: Published PoR attestations are genuine and current at publication.
- A3: Public API docs describe the real (or a faithful) orderbook surface.

## 5. Evidentiary-class reminder

> SEEN = public filings/attestations/docs (REA not installed, no artefacts). INFERRED = architecture
> reconstructed from behaviour. UNKNOWN = custody internals, private APIs, matching engines.
> Name the resolving extraction step for every artefact-dependent claim.

## 6. Compliance constraints

No credentials/keys/seed phrases/personal data. Custody architecture discussed at design level only.
C01 reviews all regulatory content. Conventional commits (`analysis:`) at T8.
