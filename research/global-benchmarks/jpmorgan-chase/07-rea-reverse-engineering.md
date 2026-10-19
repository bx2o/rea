# 07 — REA Reverse-Engineering

**Entity:** JPMorgan Chase (Kinexys) · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA tooling:** `morluto/rea` — **NOT installed**. No APK/ASAR/IPA artefact supplied. No on-chain contract addresses are asserted.

> **RULE APPLIED:** With no artefact and no REA run, **"Seen" cites only public, citable sources** (JPMorgan disclosures, earnings, filings, case studies). Decompilation-dependent or server-side behaviour is **Inferred**/**Unknown** with the resolving step named. For banks, **reporting periods are cited** for all financial figures.

---

## 1. Evidence (Seen) — public, citable only

| # | Observed fact | Source | Period | Class |
|---|---|---|---|---|
| J-S1 | Onyx rebranded to **Kinexys by J.P. Morgan** (announced 6 Nov 2024); sub-units renamed (JPM Coin System→Digital Payments; Onyx Digital Assets→Digital Assets; + Kinexys Labs) | JPMorgan insights post | Nov-2024 | SEEN |
| J-S2 | **JPM Coin** (launched 2019) = tokenised USD deposit; supports **conditional release, scheduled transfers, rule-based payments** | jpmorgan.com/kinexys | current | SEEN |
| J-S3 | Kinexys runs a **permissioned, EVM-compatible ledger**; **Blockchain Deposit Accounts** (BDAs) represent balances; supports **USD/EUR/GBP**; on-chain FX USD/EUR | JPMorgan / technical commentary | 2024–25 | SEEN |
| J-S4 | **Asynchronous Dual-Ledger Bridge Architecture** — ledger parallel to core banking, synced via event-driven APIs | technical commentary | 2025 | SEEN |
| J-S5 | **JPMD** (USD deposit token) issued on **Base** (public Ethereum L2) for institutional clients — first bank to do so | jpmorgan.com | 2025 | SEEN |
| J-S6 | **Tokenized Collateral Network (TCN)** + **intraday repo** (secured intraday financing) | Kinexys case study | current | SEEN |
| J-S7 | Kinexys ~**$7bn average daily volume**; **>$4trn cumulative** since inception | JPMorgan disclosures | current | SEEN (marketing) |
| J-S8 | JPMorgan Payments processes ~**$12trn/day** | JPMorgan HBS case study | current | SEEN (marketing) |
| J-S9 | Named participants: DBS, Siemens, FedEx, BlackRock, Barclays, Trafigura, LSEG SwapAgent, Ondo Finance | third-party compilation | 2025 | SEEN |
| J-S10 | FY2025 ROE **17%**; CET1 (Standardized) **14.5–14.6%**; Tier 1 **15.5%**; avg deposits ~$2.6T | FY2025 annual report / 4Q25 | FY ended 31-Dec-2025 | SEEN |
| J-S11 | 8 major MENA banks adopting Kinexys for cross-border payments | fintech press | 2026 | SEEN (reported) |

**Explicitly NOT seen:** decompiled strings/symbols/bytecode; Kinexys smart-contract source; Chase app internals; private endpoints; network traces. None available.

---

## 2. Recovered Graph (Synthesised / INFERRED)

```
  Institutions / corporates
        │  (BDA holders, participants, banks)
        ▼
  ┌───────────────────────────────────────────────┐
  │  Kinexys Digital Payments (permissioned EVM)   │
  │   • BDAs (USD/EUR/GBP)                         │
  │   • Programmable Payments (conditional/rule)   │
  │   • On-chain FX (USD/EUR)                      │
  └───────────────┬───────────────────────────────┘
                  │  dual-ledger bridge (event-driven APIs)
                  ▼
  ┌───────────────────────────────────────────────┐
  │  JPMorgan core banking / fiat rails            │
  │   (lock fiat ↔ mirror deposit on ledger)       │
  └───────────────────────────────────────────────┘
   Parallel: Kinexys Digital Assets = TCN + intraday repo (tokenised collateral)
   Public-chain: JPMD on Base ──► external institutional clients
```

**Inferred state machine (programmable payment):** `Instruct → smart-contract condition evaluated → on-chain FX if needed → BDA debit/credit → deterministic finality → core-banking mirror → reconciliation`.

**Inferred data model:** `Participant`, `BDA`, `LedgerBalance`, `PaymentInstruction`, `ConditionalRule`, `FxLeg`, `RepoContract`, `CollateralToken`, `JPMDLeg`, `ReconciliationRecord`.

---

## 3. Limitations (Known Boundaries)

| Boundary | Impact |
|---|---|
| **No artefact supplied** | No static/dynamic analysis of Chase/Kinexys apps |
| **REA not installed** | Cannot extract |
| **Proprietary ledger** | Kinexys internals not public |
| **Closed-source contracts** | Smart-contract code not public |
| **Marketing metrics** | Kinexys volume figures are self-reported, not audited |
| **On-chain** | JPMD/TCN contract addresses not asserted (§5) |

---

## 4. Unknowns (Unresolved) — with resolving step

| # | Unknown | Resolving step |
|---|---|---|
| J-U1 | Kinexys consensus/validator governance & participant set | Kinexys docs / JPMorgan disclosure |
| J-U2 | Smart-contract source (programmable payments, repo) | Not public → verified explorer (JPMD) / disclosure |
| J-U3 | Exact throughput/latency of the permissioned ledger | Independent benchmark |
| J-U4 | Chase Mobile app internals (auth, framework) | **REA `extract`** on Chase APK (not supplied) |
| J-U5 | Kinexys unit headcount & cost base | JPMorgan disclosure |
| J-U6 | Legal finality treatment by jurisdiction | Legal/regulatory source per market |
| J-U7 | JPMD regulatory characterisation per market | Regulator guidance |

---

## 5. On-chain / DLT & contract considerations (explicit)

**No contract address, wallet address, or TVL figure for Kinexys/JPMD is asserted**, as none has been verified against a public block explorer by this squad.

| Consideration | Status | Requirement |
|---|---|---|
| **JPMD contract on Base** | Issuer disclosed it as live on Base; **specific contract not verified here** | Verified explorer source (Basescan) + JPMorgan issuer disclosure |
| TCN tokenised-collateral contracts | **Unknown** | Verified explorer / disclosure |
| Kinexys permissioned ledger contracts | **Not on a public chain** (permissioned) | Not explorer-verifiable; requires disclosure |
| Reserve/backing attestation for JPMD | **Unknown** | Issuer attestation + (ideally) independent audit |
| Chase/Kinexys app data models | **Unknown** | REA extraction |

**Rule:** every on-chain/contract claim requires a **verified explorer source** before entering `Seen`. For a **permissioned** ledger like Kinexys, on-chain verification is impossible by design → those claims remain **Unknown** absent disclosure. JPMD (public Base) is the only explorer-verifiable surface, and even that is **not asserted** here without verification.

---

## 6. REA execution plan (future, if an artefact is supplied)

1. `rea doctor` → 2. Identify artefact (Chase mobile app or Kinexys client tooling) → 3. `rea extract` → 4. static strings/manifest/network-security-config/SDK inventory → 5. dynamic pass in a sanctioned sandbox for client auth/flow (server + ledger logic unreachable) → 6. **For JPMD**: cross-check the disclosed contract on Basescan (verified explorer) and record as `source_type: network-trace` only once provenance is confirmed → 7. promote findings to the ledger.
