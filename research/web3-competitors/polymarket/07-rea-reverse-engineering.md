# Polymarket — 07 REA Reverse-Engineering (Four Evidentiary Outputs)

> **Program rule (Brief §5):** REA (`morluto/rea`) is **not installed** and **no artefact
> was supplied**. Nothing here derives from decompiled code. "Seen" = public citable
> sources only. Chain/artefact-dependent items are **Inferred/Unknown** with the resolving
> step named.

## Bucket 1 — Evidence (Seen, public citable sources)

| # | Item | Source basis | Class |
|---|---|---|---|
| S1 | Polymarket is a decentralised prediction market built on **Polygon PoS** | Official docs | SEEN |
| S2 | It settles via the **Gnosis Conditional Tokens Framework (CTF)** | Official docs / Gnosis documentation | SEEN |
| S3 | It uses a **hybrid CLOB**: off-chain order matching + on-chain settlement | Official docs | SEEN |
| S4 | Market resolution uses the **UMA Optimistic Oracle** | Official docs / UMA documentation | SEEN |
| S5 | Collateral is **USDC** | Official docs | SEEN |
| S6 | Trading has historically been **zero-fee**, with maker incentives | Reported/official materials | SEEN-as-reported |
| S7 | **CFTC 2022 settlement** for unregistered off-exchange event-based binary options; US geoblock followed | CFTC order/press | SEEN |
| S8 | Founder: **Shayne Coplan** | Press/interviews | SEEN |
| S9 | Reported US re-entry via an acquired CFTC-licensed venue | Press — verify on CFTC register | SEEN-as-reported |

## Bucket 2 — Recovered Graph (Synthesised)

```
client (web/mobile)
  └─ signs EIP-712 orders                          [INFERRED]
        └─→ off-chain matching engine (operator)   [INFERRED from S3]
              └─→ on-chain settlement (CTF Exchange) [INFERRED from S2/S3]
                    └─→ Polygon PoS (ERC-1155 outcome tokens + USDC) [S1/S2/S5]
        resolution: UMA Optimistic Oracle --dispute?--> UMA DVM [S4]
        read-model: subgraph/indexer                     [INFERRED]
```

Market life cycle (synthesised):

```
CREATE market --TRADE (CLOB)--> OPEN --resolve(UMA proposal)--> RESOLVED
   RESOLVED --redeem winners (1 USDC)--> CLOSED
   disupted --escalate to DVM--> final outcome
```

## Bucket 3 — Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| No `.apk`/`.ipa`/`.asar` provided | Cannot observe client code/symbols/endpoints |
| REA not installed | No static/dynamic analysis performed |
| No network capture | Auth/wallet internals, RPC hosts opaque |
| US geoblock | Some flows unavailable/differ by region |
| Matching engine + incentives are server-side | Decompiler cannot reach them |
| No contract addresses captured | Chain claims cannot be asserted; no explorer registry inspected |

## Bucket 4 — Unknowns (Unresolved)

| # | Unknown | Resolving step |
|---|---|---|
| U1 | Client delivery model | REA static analysis of mobile package |
| U2 | Wallet/auth internals | Network-trace on onboarding/trade |
| U3 | Exact on-chain addresses (CTF, exchange, collateral, UMA adapters) | **Requires PolygonScan + contract verification** |
| U4 | Matching-engine internals | Server-side → likely UNKNOWN |
| U5 | Maker-incentive formula | Official docs / observed incentives |
| U6 | Oracle dispute parameters | Public UMA docs + on-chain config |
| U7 | Fee/monetisation beyond zero-fee | Official disclosure only |
| U8 | TVL / user counts / volume | Authoritative source only — **never invent** |

## Chain/contract verification statement

No Polygon contract address is stated in this dossier. Any chain claim must be verified by
pulling the address from Polymarket's official docs/registry and confirming bytecode, admin
keys and event logs on PolygonScan. Until then those items remain **Unknown**. This
deliberately complies with the program's anti-fabrication rule.

## Method note

If an artefact is later supplied, run the standard REA pipeline (hash → unpack → string/
symbol extraction → network-trace), then re-grade this file, converting U-items to Seen
with offsets.
