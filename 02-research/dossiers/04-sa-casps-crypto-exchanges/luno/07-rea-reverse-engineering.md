# 07 — REA Reverse-Engineering

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA tooling:** `morluto/rea` — **NOT installed**. No APK/ASAR/IPA artefact supplied by the executive. No on-chain contract addresses are asserted.

> **RULE APPLIED:** Because REA has not run and we hold no disassembled artefact, **"Seen" below cites only public, citable sources.** Anything that would require decompilation, an instrumented APK, or verified explorer data is placed in **Inferred** or **Unknown**, with the exact extraction step that would resolve it named.

---

## 1. Evidence (Seen) — public, citable only

| # | Observed fact | Source | Class |
|---|---|---|---|
| L-S1 | Luno (Pty) Ltd is an authorised FSP: **FSP No. 53314** | Luno legal/risk disclosure | SEEN |
| L-S2 | Luno is a registered credit provider **NCRCP22123** | Luno legal disclosure | SEEN |
| L-S3 | Luno is a wholly-owned independent DCG subsidiary (acq. 2020) | DCG/BusinessWire | SEEN |
| L-S4 | Customer crypto stored ~95% offline in multi-sig "deep freeze" via **BitGo + Fireblocks** | Luno safety page / Fireblocks case study | SEEN |
| L-S5 | **Monthly Proof of Reserves**, Merkle-tree, **ISRS 4400 (Revised)**, auditor **Moore**, reserves ≥100% | Moore AUP report (Jan-2025 & Oct-2025 PDFs exist) | SEEN |
| L-S6 | Instant Buy/Sell fee ~**2%** (SA help centre) | Luno help page | SEEN |
| L-S7 | Off-chain **internal ledger** enables instant Luno→Luno transfers | Luno docs/help | SEEN |
| L-S8 | Luno publishes a public **REST API** (market data / trading) | api.luno.com docs | SEEN |
| L-S9 | ISO/IEC 27001:2022 certification claimed | Luno safety page | SEEN (self-declared) |
| L-S10 | Tokenised Stocks risk disclosure dated 04-Aug-2025 (Luno (Pty) Ltd) | Luno legal document | SEEN |
| L-S11 | FICA Directive 9 Travel Rule (R5,000 threshold) applies to CASPs | FIC media release / PCC 61 | SEEN |

**Explicitly NOT seen:** decompiled strings, symbol tables, bytecode, private API endpoints, network traces from Luno apps, on-chain custody addresses. None of these are available to this dossier.

---

## 2. Recovered Graph (Synthesised / INFERRED)

Logical architecture reconstructed from the Seen evidence (a synthesis, not an observation):

```
        ┌─────────────────────── Luno platform (custodial) ───────────────────────┐
        │                                                                          │
 Mobile  │   Auth svc ──► Off-chain internal ledger ──► Reconciliation svc          │
 App ────┼──►(2FA/API keys)      (instant internal xfer)      │                     │
 Web ────┘                      │                             │                     │
        │                       ▼                             ▼                     │
        │                 Order-book engine            PoR generator (Merkle)        │
        │                 (maker/taker, ZAR pairs)           │                        │
        │                       │                     Monthly AUP ──► Moore          │
        │                       ▼                             │                        │
        │            Settlement / withdrawal     ┌────────────┴───────────┐           │
        │                       │               ▼                        ▼           │
        │              ┌────────┴────────┐  Hot wallets            Cold "deep freeze"  │
        │              │  Instant EFT    │  (multi-sig,             (BitGo+Fireblocks  │
        │              │  ZAR ramp       │   2FA/step-up)           multi-sig, RBAC)  │
        │              └────────┬────────┘                                          │
        └───────────────────────┼───────────────────────────────────────────────────┘
                                ▼
                     SA banking rails (instant EFT) → ZAR settlement
                     On-chain networks (BTC/ETH/ERC-20 …) → external settlement
```

**Inferred state machine (withdrawal):**
`Request → 2FA/step-up auth → Travel-Rule payload capture (Directive 9) → risk/AML screen → hot-wallet sign (multi-sig) → broadcast → confirm → ledger debit.`

**Inferred data model (core entities):** `User`, `KYCRecord`, `Account(balance)` per asset, `Order`, `Trade`, `InternalTransfer`, `WithdrawalRequest`, `TravelRulePayload`, `ReserveSnapshot`, `MerkleLeaf(userHash, balance)`, `StakingPosition`.

---

## 3. Limitations (Known Boundaries)

| Boundary | Impact |
|---|---|
| **No artefact supplied** | No static/dynamic analysis possible; app internals unverifiable |
| **REA not installed** | Cannot run `rea doctor`/extract |
| **Server-side computation** | Fees, matching, risk scoring all server-side → never in client artefact anyway |
| **WAF / anti-bot on app APIs** | Live endpoint probing out-of-scope and disallowed by rules |
| **Proprietary** | No source, no symbols, no debug builds |
| **On-chain** | No verified custody addresses asserted (see §5) |

---

## 4. Unknowns (Unresolved) — with the step that resolves each

| # | Unknown | Resolving step |
|---|---|---|
| L-U1 | Mobile app auth internals (token format, pinning, storage) | **REA static extraction** of APK/IPA (`rea extract`) + jadx-class string/symbol recovery |
| L-U2 | Whether app uses React Native / native / webview | REA framework fingerprint on the artefact bundle |
| L-U3 | Hot/cold wallet key topology (HSM vs MPC, threshold `t-of-n`) | Not reachable in client artefact → requires (a) custodian disclosure, or (b) verified on-chain address clustering |
| L-U4 | Exact staking commission take-rate | Product T&Cs / staking disclosure (public doc), not REA |
| L-U5 | Exact volume-tier boundaries for maker/taker | Published tier table (public), not REA |
| L-U6 | Real-time reserve sufficiency between monthly snapshots | Continuous on-chain attestation (does not exist today) |
| L-U7 | Employer-level SA headcount & B-BBEE level | Company disclosure / B-BBEE certificate register |
| L-U8 | Full FSCA licence conditions | FSCA register / licence document request |

---

## 5. On-chain / contract considerations (explicit)

**No contract address, wallet address, or TVL figure for Luno is asserted in this dossier**, because none has been verified against a public block explorer by this squad.

| Consideration | Current status | Requirement to make a claim |
|---|---|---|
| Luno cold/hot custody addresses | **Unverified** | Cross-check against a **verified explorer source** (Arkham/Etherscan labels with provenance) plus Luno disclosure |
| Merkle-leaf construction (how user balance hashes are built) | **Unknown** | Moore methodology appendix / PoR verifier spec |
| Any Luno-issued token (e.g., tokenised stocks) contract | **Unknown** for Luno; tokenised stocks are disclosed as offered by Luno (Pty) Ltd | Verified explorer + issuer prospectus |
| Reserve asset composition per address | **Unknown** | On-chain verification + auditor statement |

**Rule:** All on-chain contract claims in the Stremiium programme require a **verified explorer source** before entering a `Seen` bucket. Luno-specific addresses are **not** claimed here.

---

## 6. REA execution plan for Luno (future, when artefact supplied)

1. `rea doctor` — verify provider/tooling contract.
2. `rea extract luno.apk --out artifacts/luno/` — unpack, hash, preserve chain-of-custody.
3. Static pass — strings, manifests, network security config, certificate pinning config, SDK inventory (which custody/analytics SDKs embedded).
4. Dynamic pass (in-scope sandbox) — observe client↔server calls for auth + order placement (server-side logic still unreachable).
5. Cross-map app-captured API surface against public `api.luno.com` docs to find **undocumented endpoints**.
6. Feed recovered strings into the evidence ledger as `source_type: rea-artifact` (currently all entries are public sources).
