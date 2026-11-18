# T4 — CASPs & Crypto Wallets Forensics · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Owner council:** C13 Web3-Finance (`C13-web3-finance-captain`)
**Supporting councils:** C01 Legal-Compliance (`C01-legal-compliance-captain`), C16 Banking-Fintech (`C16-banking-fintech-captain`), C12 Cybersecurity-Intel (`C12-cybersecurity-intel-captain`), C10 Finance-IR (`C10-chief-financial-officer`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Reverse-engineer South Africa's licensed Crypto Asset Service Providers (CASPs) — Luno, VALR,
Flex.one — to establish the regulatory, custody, market-making, and card-issuance playbook Stremiium
must meet or beat under its own FSCA CASP licence. This is the most directly comparable regulatory
peer set.

## 2. Scope

- T4.1 Luno — Merkle Proof-of-Reserves & ZAR orderbook dissection → `research/casps-and-wallets/luno/`
- T4.2 VALR — high-frequency exchange architecture → `research/casps-and-wallets/valr/`
- T4.3 Flex.one — crypto card issuance & settlement → `research/casps-and-wallets/flex-one/`

Each entity → the 9-file §4 dossier.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 scaffold available | ✅ |
| Entrance | FSCA CASP licence context captured (C01) | ⏳ |
| Exit | 3 dossiers, 9 files each | ⏳ |
| Exit | Luno PoR method evidenced; orderbook model described with evidence class | ⏳ |
| Exit | VALR matching-engine architecture documented (INFERRED where proprietary) | ⏳ |
| Exit | Flex.one card issuance/settlement flow mapped (issuer, BIN, settlement) | ⏳ |
| Exit | Travel Rule (FICA Dir.9) posture compared for all three (C01) | ⏳ |

## 4. Dependency map

```
T1 ──► T4 ──► T7.2 ($STM token + MPC wallet system)
          └─► T7.3 (regulatory dossier: FSCA/SARB; FICA Travel Rule)
C01 É governance input to all T4 regulatory files.
```

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Exchange internals proprietary → architecture UNKNOWN | H | M | Reconstruct from public behaviour + orderbook data | C13 |
| R2 | Merkle PoR implementation not publicly reproducible | M | M | Cite published attestations; label verification method | C13 |
| R3 | Travel Rule compliance posture not fully public | M | H | C01 maps regulator expectations vs public claims | C01 |
| R4 | Card-issuance BIN/issuer arrangement commercial-sensitive | M | M | Public programme terms; UNKNOWN for contract terms | C16 |
| R5 | REA absent blocks wallet/app reversing | H | M | Public-source path; queue REA on T1 exit | C12 |

## 6. Next actions

1. **C13** — T4.1 Luno PoR + orderbook model.
2. **C13** — T4.2 VALR matching-engine architecture.
3. **C16** — T4.3 Flex.one card issuance/settlement.
4. **C01** — Travel Rule / custody licensing comparison across all three.
