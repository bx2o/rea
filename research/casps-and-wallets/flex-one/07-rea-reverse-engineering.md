# 07 — REA Reverse-Engineering

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA tooling:** `morluto/rea` — **NOT installed**. No APK/ASAR/IPA artefact supplied. No on-chain contract addresses are asserted.

> **RULE APPLIED:** With no artefact and no REA run, **"Seen" cites only public, citable sources.** Decompilation-dependent or server-side behaviour is **Inferred**/**Unknown** with the resolving step named.

---

## 1. Evidence (Seen) — public, citable only

| # | Observed fact | Source | Class |
|---|---|---|---|
| F-S1 | flex.one offers a **Visa "Global Card" connected to a stablecoin balance**, spendable at 150M+ Visa merchants in 170+ countries | flex.one/global-card | SEEN |
| F-S2 | Balance is held in a **non-custodial wallet**; funding via USDC/USDT from wallet/exchange or via ACH/wire | flex.one | SEEN |
| F-S3 | Flex raised a **$70m Series B1 led by Halo Fund** | flex.one / press | SEEN |
| F-S4 | Reported total **~$105m equity + ~$300m debt**; earlier ~$25m valuation <$250m (Mar-2025) | third-party media | SEEN (reported) |
| F-S5 | Partners include **Visa, Lead Bank (cards), Thread Bank (banking)** | third-party profiles | SEEN |
| F-S6 | **Flex Global** (2025): stablecoin rails 100+ countries; multi-currency 76 countries/32 currencies; private credit 20+ countries | flex.one / press | SEEN |
| F-S7 | Revenue model reported as card/bill-pay interchange, deposits, subscription, credit | media | SEEN (reported) |

**Explicitly NOT seen:** decompiled strings/symbols/bytecode; card-programme BIN; liquidation engine internals; private endpoints; network traces. None available.

---

## 2. Recovered Graph (Synthesised / INFERRED)

```
   Business user ──► Flex app (web/mobile)
        │
        ├─ stablecoin balance (non-custodial)
        ├─ multi-currency / USD account (partner bank)
        └─ business spend / bills
                 │
                 ▼
   ┌──────────────────────────────┐
   │  Flex card programme mgr      │
   │  (BIN sponsor: Lead Bank)     │
   │  banking: Thread Bank         │
   └──────────────┬───────────────┘
                  ▼
            Visa network ──► merchant
                  │
        real-time liquidation of stablecoin balance (claimed)
```

**Inferred state machine (card auth):** `Auth request → balance check (stablecoin) → [liquidate/convert] → risk/limit → authorise → settle via issuer → ledger debit + FX markup`.

**Inferred data model:** `BusinessAccount`, `StablecoinBalance`, `MultiCurrencyWallet`, `Card`, `AuthRequest`, `LiquidationRecord`, `FxQuote`, `BillPayment`, `CreditFacility`, `Subscription`.

---

## 3. Limitations (Known Boundaries)

| Boundary | Impact |
|---|---|
| **No artefact supplied** | No static/dynamic analysis possible |
| **REA not installed** | Cannot extract |
| **Server-side liquidation** | Core logic server-side → unreachable via REA anyway |
| **Identity ambiguity** | Anchor entity vs verified entity mismatch → scope risk |
| **BaaS partner opacity** | BIN/issuer economics not public |
| **On-chain** | No contract addresses asserted (§5) |

---

## 4. Unknowns (Unresolved) — with resolving step

| # | Unknown | Resolving step |
|---|---|---|
| F-U1 | Whether the anchor's "Flex.one" is the same as verified `flex.one` | **Executive clarification / entity-resolution step** (name+jurisdiction+product match) |
| F-U2 | Liquidation timing & FX-risk bearer | Card T&Cs + treasury disclosure |
| F-U3 | FX markup / interchange split | Commercial disclosure |
| F-U4 | Whether Mastercard issuing exists (vs Visa only) | Programme disclosure / card BIN lookup |
| F-U5 | Mobile app auth internals & framework | **REA `extract`** on artefact |
| F-U6 | Licence footprint (MTL/MSB/states) | State/NMLS/FincEN registries |

---

## 5. On-chain / contract considerations (explicit)

**No contract address, wallet address, or TVL figure for Flex is asserted**, as none has been verified against a public block explorer by this squad.

| Consideration | Status | Requirement |
|---|---|---|
| Flex stablecoin custody addresses | **Unverified** (non-custodial → likely user-controlled, no platform address) | Verified explorer + disclosure |
| USDC/USDT contracts used | **Well-known external contracts, but not asserted here** | Verified explorer confirmation of the specific contract variant |
| Any Flex-issued token | **Unknown** (no evidence of one) | Verified explorer + issuer docs |
| Liquidation settlement wallets | **Unknown** | Verified explorer / programme disclosure |

**Rule:** every on-chain/contract claim must cite a **verified explorer source** before entering `Seen`. Flex-specific addresses are **not** claimed.

---

## 6. REA execution plan for Flex (future)

1. `rea doctor` → 2. Confirm **which artefact** (which app, which entity) is in scope (resolve F-U1 first) → 3. `rea extract` → 4. static strings/manifest/network-security-config/SDK inventory (identify BaaS/issuer SDKs, card programme manager) → 5. dynamic pass (sanctioned) for auth + card-auth flow → 6. diff observed endpoints vs public docs → 7. promote to `source_type: rea-artifact`.
