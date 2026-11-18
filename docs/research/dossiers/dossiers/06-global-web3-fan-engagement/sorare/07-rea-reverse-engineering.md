# Sorare — 07 REA Reverse-Engineering (Four Evidentiary Outputs)

> **Program rule (Brief §5):** REA (`morluto/rea`) is **not installed** here and **no
> APK/ASAR artefact was supplied**. Therefore nothing in this file derives from a
> decompiled artefact. "Seen" is restricted to **public, citable sources**. Any
> artefact-dependent or chain-level item is labelled **Inferred** or **Unknown** and
> names the extraction step that would resolve it.

## Bucket 1 — Evidence (Seen, from public citable sources)

| # | Item | Source basis | Class |
|---|---|---|---|
| S1 | Sorare is a licensed digital-collectible fantasy platform (football/NBA/MLB) | Official product/marketing pages, app-store listings | SEEN |
| S2 | Platform runs on StarkWare **StarkEx**, a STARK **Validium** ZK-rollup, settlement anchored on Ethereum | StarkWare public documentation/terminology | SEEN |
| S3 | StarkEx is a **Validium**: validity proof on-chain, transaction data off-chain | StarkWare documentation | SEEN |
| S4 | Cards exist in named **scarcity tiers** (Limited / Rare / Super Rare / Unique) | Public product descriptions | SEEN |
| S5 | Marketplace operates a **secondary resale fee** (commonly reported ~5%) | Public/reported fee schedule | SEEN-as-reported |
| S6 | Tournaments pay **ETH and cards** | Public product descriptions | SEEN |
| S7 | Company is Paris-based, private, VC-backed | Press/company pages | SEEN |
| S8 | Founders: Nicolas Julia (CEO), Adrien Montfort (CTO) | Press/interviews | SEEN |

## Bucket 2 — Recovered Graph (Synthesised)

Derived logically from Bucket 1 (no artefact):

```
client (native app + web)
  ├─ auth (email/pw / OAuth)                     [INFERRED]
  └─ → app backend (lineups, scoring, auctions)  [INFERRED]
              ├─↔ StarkEx operator (mint/settle)  [INFERRED from S2/S3]
              │        └─ Validity proof → Ethereum L1 [INFERRED]
              ├─→ payment processor (fiat top-up) [INFERRED]
              └─→ stats feed (scoring inputs)     [INFERRED]
card state read-model ← StarkEx indexer           [INFERRED]
```

State machine (collectible life cycle, synthesised):

```
AUCTION(primary) --win--> MINTED --field--> IN_CONTEST --score--> PRIZE/REWARD
   MINTED --list--> SECONDARY --sale--> TRANSFERRED --> (buyer MINTED view)
```

## Bucket 3 — Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| No `.ipa`/`.apk`/`.asar` provided | Cannot observe client code, symbols, or bundled endpoints |
| REA not installed | No static/dynamic analysis performed at all |
| No network capture | RPC hosts, auth token format, PSP identity all opaque |
| Geoblocked/regional gating | Even with an account, some flows differ by region |
| Contract addresses not captured | Chain-level claims cannot be asserted; no explorer-verified registry inspected |

## Bucket 4 — Unknowns (Unresolved)

| # | Unknown | Resolving step (named) |
|---|---|---|
| U1 | Client delivery model (native vs RN vs webview) | REA static analysis of mobile package |
| U2 | Auth token format, refresh, device binding | REA dynamic network-trace on login |
| U3 | Managed-wallet key-custody model | On-chain key-permission inspection + network-trace |
| U4 | Actual chain RPC endpoints/hosts | Network-trace + cert-pinning check |
| U5 | Scoring/prize formulas | Server-side → likely permanently unknown (black-box experiment only) |
| U6 | Exact contract addresses / operator registry | **Requires explorer + contract verification** (Starknet/Voyager/Starkscan) |
| U7 | Fees, tier mint caps | Signed-in in-app capture or official pricing page |
| U8 | User counts / TVL | Authoritative company disclosure only — **never invent** |

## Chain/contract verification statement

No Polygon or Ethereum/Starknet contract address is stated in this dossier. Any chain
claim must be verified by (a) obtaining the address from an official StarkWare/Sorare
registry, then (b) confirming bytecode, admin keys, and event logs on a block explorer.
Until then those items remain **Unknown**. This is a deliberate compliance with the
program's anti-fabrication rule.

## Method note

If the executive later supplies an artefact, the standard REA pipeline (hash → unpack →
symbol/string extraction → network-trace) should be run and this file re-graded, moving
S-items down and filling U-items with offsets.
