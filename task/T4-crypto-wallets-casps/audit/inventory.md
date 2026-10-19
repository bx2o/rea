# T4 audit · inventory.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Owner:** C13 Web3-Finance
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| `research/casps-and-wallets/luno/` | folder present, **empty** | SEEN (repo) |
| `research/casps-and-wallets/valr/` | folder present, **empty** | SEEN (repo) |
| `research/casps-and-wallets/flex-one/` | folder present, **empty** | SEEN (repo) |
| Dossier template (brief §4) | defined | SEEN (brief) |

## 2. What is missing

| Gap | Resolves via |
|---|---|
| No dossier content for any CASP | T4.x |
| No custody/PoR evidence captured | T4.1 |
| No exchange-architecture model | T4.2 |
| No card-issuance/settlement flow | T4.3 |
| No Travel Rule posture comparison | C01 |
| No REA app/wallet decompilation (engine not installed) | T1.1 → T4 |

## 3. Evidence present vs absent

**Present (citable):**
- FSCA CASP licence register entries (public).
- Luno published Proof-of-Reserves / Merkle attestations.
- VALR public API docs, fee schedules, market data.
- Flex.one public card-programme terms.

**Absent:**
- Internal matching engines, custody key architecture (MPC/HSM layout).
- Private API endpoints, orderbook microstructure internals.
- Commercial BIN-sponsor/issuer contracts.

## 4. CASP recon checklist

| Dimension | Luno | VALR | Flex.one |
|---|---|---|---|
| FSCA CASP licence | ? | ? | ? |
| Custody model | ? (PoR/Merkle) | ? | ? |
| PoR mechanism | **Merkle** | ? | n/a |
| Matching engine | internal | **HF/liquidity** | n/a |
| Card programme | – | – | **card issuance** |
| Travel Rule (Dir.9) posture | ? | ? | ? |
| Wallet keys | custodial | custodial | custodial |

## 5. Audit verdict

Scaffolded, **content absent**. T4 is the closest regulatory analogue to Stremiium's licensed
position and therefore the highest-value compliance benchmark. Evidentiary ceiling INFERRED (public)
until REA; custody internals remain UNKNOWN by nature.
