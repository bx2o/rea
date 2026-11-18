# 07 — REA Reverse-Engineering

**Entity:** VALR · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA tooling:** `morluto/rea` — **NOT installed**. No APK/ASAR/IPA artefact supplied. No on-chain contract addresses are asserted.

> **RULE APPLIED:** With no artefact and no REA run, **"Seen" cites only public, citable sources** (VALR docs, blog, licence announcements, published pricing). Decompilation-dependent or server-side behaviour is **Inferred**/**Unknown** with the resolving step named.

---

## 1. Evidence (Seen) — public, citable only

| # | Observed fact | Source | Class |
|---|---|---|---|
| V-S1 | VALR is FSCA-licensed as a **CASP (Category I & II)** and holds an additional **FSP licence** | VALR blog / media | SEEN |
| V-S2 | VALR holds an **Over-the-Counter Derivatives Provider (ODP)** licence from FSCA (reported 20 Oct 2025) | VALR blog | SEEN |
| V-S3 | VALR offers REST, WebSocket and **FIX** APIs; SDKs in Python, Node.js, Java | docs.valr.com / VALR API page | SEEN |
| V-S4 | Sub-account API: `POST /v1/account/subaccount`; transfer `POST /v1/account/subaccount/transfer` | docs.valr.com | SEEN |
| V-S5 | Multi-user access + **dual authorisation** without sharing credentials | VALR business page | SEEN |
| V-S6 | ZAR-pair maker fee ≈ **−0.01% rebate**; taker ≈ **0.05–0.10%** (tiered) | publishing/aggregators | SEEN |
| V-S7 | ~**$55m** equity raised from Pantera Capital, Coinbase Ventures, GSR, F-Prime, Avon Ventures | VALR blog | SEEN |
| V-S8 | Products: spot, spot margin, perpetual futures, staking, lending, sub-accounts, OTC, Simple Buy/Sell, VALR Pay, API | VALR blog/site | SEEN |
| V-S9 | **xStocks** tokenised US equity trading launched | VALR blog | SEEN |
| V-S10 | Reported scale: ~1.7m users, ~1,800 institutional customers | press (late-2025) | SEEN (reported) |

**Explicitly NOT seen:** decompiled strings, symbols, bytecode, matching-engine internals, private endpoints, network traces. None available.

---

## 2. Recovered Graph (Synthesised / INFERRED)

```
  Clients: Retail app | Web | Algo (REST+WS) | Institution (FIX)
        │               │         │                 │
        ▼               ▼         ▼                 ▼
  ┌─────────────────────────────────────────────────────────┐
  │  Gateway / Auth (API keys, 2FA, multi-user perms)        │
  └───────────────┬─────────────────────────────────────────┘
                  ▼
  ┌───────────────────────────────┐    ┌──────────────────────┐
  │  Matching engine (prop.)      │◄──►│  Market-data fanout  │
  │  spot | margin | perp         │    │  (WebSocket)         │
  └───────┬───────────────────────┘    └──────────────────────┘
          ▼
  ┌───────────────┬───────────────┬──────────────┬────────────┐
  │ Sub-accounts  │ Custody       │ Lending book │ OTC desk   │
  │ (segregated)  │ (hot/cold)    │ (borrow/earn)│ (blocks)   │
  └───────────────┴───────────────┴──────────────┴────────────┘
          │
          ▼
  ZAR rails (EFT/card)  +  on-chain networks (multi-asset)
```

**Inferred state machine (order):** `Auth → validate → [maker|taker] → match → fill → fee/rebate apply → settle balances → WS notify → tier recompute (30d volume)`.

**Inferred data model:** `User`, `APIKey`, `SubAccount`, `Balance`, `Order`, `Trade`, `FeeTier`, `Position`, `LendingContract`, `StakingPosition`, `OtcQuote`, `TravelRulePayload`.

---

## 3. Limitations (Known Boundaries)

| Boundary | Impact |
|---|---|
| **No artefact supplied** | No static/dynamic analysis possible |
| **REA not installed** | Cannot extract |
| **Server-side matching** | Engine internals never client-visible → unreachable via REA regardless |
| **Marketing throughput claims** | Not independently verifiable in-workspace |
| **WAF/anti-bot** | Endpoint probing out of scope |
| **On-chain** | No custody addresses asserted (see §5) |

---

## 4. Unknowns (Unresolved) — with resolving step

| # | Unknown | Resolving step |
|---|---|---|
| V-U1 | Actual orders/sec & latency of matching engine | Independent benchmark / VALR disclosure (REA cannot reach server-side) |
| V-U2 | Mobile app auth internals & framework | **REA `extract`** on APK/IPA + static symbol recovery |
| V-U3 | Custody key topology (HSM/MPC, threshold) | Custodian disclosure / verified on-chain clustering |
| V-U4 | Sub-account legal segregation robustness | Licence documents / legal opinion |
| V-U5 | Exact fee-tier boundaries | Published tier table (public) |
| V-U6 | Max leverage per market | Product terms (public), resolve conflict between sources |
| V-U7 | FSCA licence conditions & EU scope | FSCA register / licence docs |
| V-U8 | Headcount & B-BBEE | Company disclosure |

---

## 5. On-chain / contract considerations (explicit)

**No contract address, wallet address, or TVL figure for VALR is asserted**, because none has been verified against a public block explorer by this squad.

| Consideration | Status | Requirement |
|---|---|---|
| VALR custody addresses | **Unverified** | Verified explorer provenance + VALR disclosure |
| **xStocks** tokenised-equity contracts | **Unknown** (third-party issuer; issuer contracts not verified here) | Verified explorer + issuer prospectus; issuer may be a third party (not VALR) |
| Reserve composition | **Unknown** | On-chain verification / auditor statement |
| Any VALR-issued token | **Unknown** | Verified explorer + issuer docs |

**Rule:** every on-chain/contract claim must cite a **verified explorer source** before entering `Seen`. VALR-specific addresses are **not** claimed.

---

## 6. REA execution plan for VALR (future)

1. `rea doctor` → 2. `rea extract valr.apk --out artifacts/valr/` → 3. static strings/manifest/network-security-config/SDK inventory → 4. dynamic pass (sanctioned sandbox) for auth + order flow (server logic unreachable) → 5. diff observed API calls against `docs.valr.com` to find undocumented endpoints → 6. promote recovered strings into ledger as `source_type: rea-artifact`.
