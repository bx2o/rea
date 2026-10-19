# Socios.com / Chiliz — 07 REA Reverse-Engineering (Four Evidentiary Outputs)

> **Program rule (Brief §5):** REA (`morluto/rea`) is **not installed** and **no artefact
> was supplied**. Nothing here derives from decompiled code. "Seen" = public citable
> sources only. Chain/artefact-dependent items are **Inferred/Unknown** with the resolving
> step named.

## Bucket 1 — Evidence (Seen, public citable sources)

| # | Item | Source basis | Class |
|---|---|---|---|
| S1 | Chiliz issues **fan tokens** (ERC-20) for sports clubs via **Socios.com** | Official Chiliz/Socios docs, press | SEEN |
| S2 | Named tokens exist for clubs incl. FC Barcelona `$BAR`, PSG `$PSG`, Manchester City `$CITY`, UFC `$UFC` | Public token listings / press | SEEN |
| S3 | Primary issuance = **Fan Token Offering (FTO)** priced in `$CHZ` | Public docs | SEEN |
| S4 | **Chiliz Chain** is an **EVM-compatible L1**; ecosystem migrating from legacy/Ethereum deployment | Chiliz public documentation | SEEN |
| S5 | `$CHZ` is the native token, listed on major exchanges | Public exchange listings | SEEN |
| S6 | Token holders get club polls / rewards ("locker room" experiences) | Public product descriptions | SEEN |
| S7 | Founded by **Alexandre Dreyfus**; Malta-rooted group | Press/interviews | SEEN |
| S8 | MiCA applies to EU crypto-asset issuers; Malta is an EU member | EU regulation (public) | SEEN |

## Bucket 2 — Recovered Graph (Synthesised)

```
Socios.com client
  └─ account + embedded wallet                      [INFERRED]
        ├─→ Socios backend (polls, rewards, FTO
        │      orchestration, VIP fulfilment)        [INFERRED]
        │        └─→ Chiliz Chain L1 (EVM):
        │              club fan-token contracts,
        │              $CHZ gas                       [INFERRED from S4]
        │        └─ bridge ↔ Ethereum (legacy)        [INFERRED]
        └─→ fiat on-ramp (buy $CHZ)                    [INFERRED]
$CHZ liquidity on CEXs ◄──► external market            [SEEN]
```

Token life cycle (synthesised):

```
FTO(mint club token, priced in $CHZ) --hold--> VOTING_POWER
   VOTING_POWER --engage--> REWARD/EXPERIENCE
   HELD --sell (CEX/DEX)--> EXIT
```

## Bucket 3 — Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| No `.apk`/`.ipa`/`.asar` provided | Cannot observe client code, symbols, endpoints |
| REA not installed | No static/dynamic analysis performed |
| No network capture | RPC hosts, auth tokens, PSP identity opaque |
| Private EU entity | No audited financials; officer lists unpublished |
| Geoblocked regional flows | Some engagement differs by jurisdiction |
| No contract addresses captured | Chain claims cannot be asserted; no explorer registry inspected |

## Bucket 4 — Unknowns (Unresolved)

| # | Unknown | Resolving step |
|---|---|---|
| U1 | Client delivery model | REA static analysis of mobile package |
| U2 | Embedded-wallet key custody | Network-trace + on-chain permission inspection |
| U3 | Chain RPC endpoints/validators | Network-trace + Chiliz Chain registry + explorer |
| U4 | Bridge contract addresses | Official registry + explorer verification |
| U5 | FTO fee/pricing formula | Official docs / signed-in capture |
| U6 | Voting-power weighting formula | Server-side → black-box only |
| U7 | Exact contract addresses of fan tokens | **Requires explorer + contract verification** (Chiliscan/Etherscan) |
| U8 | User counts / TVL | Authoritative disclosure only — **never invent** |

## Chain/contract verification statement

No contract address is stated in this dossier. Any chain claim must be verified by pulling
the address from Chiliz's official chain registry and confirming bytecode, admin keys and
event logs on a block explorer. Until then those items remain **Unknown**. This deliberately
complies with the program's anti-fabrication rule.

## Method note

If an artefact is later supplied, run the standard REA pipeline (hash → unpack → string/
symbol extraction → network-trace), then re-grade this file, converting U-items to Seen
with offsets.
