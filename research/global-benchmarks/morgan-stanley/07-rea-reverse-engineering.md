# 07 — REA Reverse-Engineering

**Entity:** Morgan Stanley · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA tooling:** `morluto/rea` — **NOT installed**. No APK/ASAR/IPA artefact supplied. No on-chain contract addresses are asserted.

> **RULE APPLIED:** With no artefact and no REA run, **"Seen" cites only public, citable sources** (earnings releases, financial supplements, filings). Decompilation-dependent or server-side behaviour is **Inferred**/**Unknown** with the resolving step named. For banks, **reporting periods are cited** for all financial figures.

---

## 1. Evidence (Seen) — public, citable only

| # | Observed fact | Source | Period | Class |
|---|---|---|---|---|
| M-S1 | Morgan Stanley FY2025 net revenues **$70.6bn** (+14% YoY) | Q4/FY2025 earnings release | FY ended 31-Dec-2025 | SEEN |
| M-S2 | Q4'25 net revenue **$17.9bn**; net income **$4.4bn**; diluted EPS **$2.68** | Q4'25 release | Q4-2025 | SEEN |
| M-S3 | Wealth Management FY2025 net revenue **$31.8bn**, pre-tax margin **29%**; net new assets **$356bn**; fee-based flows **$160bn** | Q4/FY2025 earnings | FY2025 | SEEN |
| M-S4 | Wealth Management client assets **~$7.381tn** (Q4'25); Wealth+IM **~$9.3tn**; IM AUM **$1.895tn** | Q4'25 supplement | Q4-2025 | SEEN |
| M-S5 | **~16,000** financial advisors | FY2025 | 2025 | SEEN |
| M-S6 | **E*TRADE** acquired (announced 20-Feb-2020; closed **2-Oct-2020**, ~$13bn all-stock) | filings/press | 2020 | SEEN |
| M-S7 | **Eaton Vance** acquisition closed **1-Mar-2021** | filings | 2021 | SEEN |
| M-S8 | Net interest income rose YoY on **lending growth + balance-sheet mix** (sweep + SBL engine) | Q4'25 release | Q4-2025 | SEEN |
| M-S9 | Fee-based advisory revenue (asset management line) **$5,031m** Q4'25 vs **$4,417m** Q4'24 (+14%) | Q4'25 supplement | Q4-2025 | SEEN |
| M-S10 | Transactional revenue **$1,143m** Q4'25 vs **$973m** Q4'24 (+17%) | Q4'25 supplement | Q4-2025 | SEEN |
| M-S11 | "Advisor funnel" converting client assets into advisor-managed relationships (referenced by management/coverage) | earnings call coverage | 2025 | SEEN (reported) |
| M-S12 | Monte Carlo portfolio risk/planning tooling is part of the wealth advisory stack | public product materials | current | SEEN |

**Explicitly NOT seen:** decompiled strings/symbols/bytecode; E*TRADE/Morgan Stanley app internals; Monte Carlo engine internals; private endpoints; network traces. None available.

---

## 2. Recovered Graph (Synthesised / INFERRED)

```
   Clients (self-directed → affluent → HNW)
        │                │                    │
        ▼                ▼                    ▼
  E*TRADE app      Client portal         Advisor workstation
  (digital)        (planning)            (IPS, Monte Carlo risk)
        │                │                    │
        └────────────────┴─────────┬──────────┘
                                   ▼
        ┌───────────────────────────────────────────┐
        │  Wealth Management platform                │
        │   • Fee-based advisory (AUM billing)       │
        │   • Custody / clearing                      │
        │   • Cash-sweep → deposits                   │
        │   • Securities-based lending (SBL)          │
        └───────────────┬───────────────────────────┘
                        ▼
             Bank (NII) + Investment Management (fees)
```

**Inferred state machine (advisor funnel):** `Digital account → assets accumulate → relationship review → asset-threshold trigger → advisor engagement → IPS + Monte Carlo plan → fee-based mandate → recurring advisory fee + sweep/SBL NII`.

**Inferred data model:** `Client`, `Household`, `Account`, `Holding`, `Ips`, `ModelPortfolio`, `SweepProgram`, `LoanFacility(Sbl)`, `AdvisorRelationship`, `FeeSchedule`, `PlanningScenario(MonteCarlo)`.

---

## 3. Limitations (Known Boundaries)

| Boundary | Impact |
|---|---|
| **No artefact supplied** | No static/dynamic analysis of MS/E*TRADE apps |
| **REA not installed** | Cannot extract |
| **Proprietary IP** | Monte Carlo engine, fee grids, sweep mechanics not public |
| **Relationship-specific pricing** | Uniform advisory fee rate cards not published |
| **Marketing/coverage metrics** | Some funnel figures are analyst/coverage, not filings |
| **On-chain** | No MS contract addresses asserted (§5) |

---

## 4. Unknowns (Unresolved) — with resolving step

| # | Unknown | Resolving step |
|---|---|---|
| M-U1 | Monte Carlo engine internals/assumptions | Confidential IP → not resolvable publicly |
| M-U2 | E*TRADE app auth internals & framework | **REA `extract`** on APK/IPA (not supplied) |
| M-U3 | Cash-sweep rate mechanics by programme | Programme disclosure / regulatory filings |
| M-U4 | Advisory fee grid (tiered rates) | Relationship disclosure / ADV brochures |
| M-U5 | SBL LTV/margin parameters | Product disclosure |
| M-U6 | Any tokenised-fund/digital-asset contract | Verified explorer + issuer docs |
| M-U7 | Segment engineering headcount/cost | Company disclosure |

---

## 5. On-chain / DLT & contract considerations (explicit)

**No contract address, wallet address, or TVL figure for Morgan Stanley is asserted**, as none has been verified against a public block explorer by this squad. Unlike JPMorgan's Kinexys, Morgan Stanley's **blockchain footprint is limited in the public sources reviewed** and this dossier does **not** claim any MS on-chain product or contract.

| Consideration | Status | Requirement |
|---|---|---|
| MS-issued token / tokenised fund contract | **Unknown / not asserted** | Verified explorer source + issuer disclosure |
| Custody of digital assets | **Unknown** (not asserted) | Regulatory filings / disclosure |
| App client-side crypto flows | **Unknown** | REA extraction |
| "Digital asset" retail access | **Unknown** (channel-dependent) | Product disclosure |

**Rule:** every on-chain/contract claim requires a **verified explorer source** before entering `Seen`. No Morgan Stanley address is claimed here.

---

## 6. REA execution plan (future, if an artefact is supplied)

1. `rea doctor` → 2. Identify artefact (Morgan Stanley and/or E*TRADE app) → 3. `rea extract` → 4. static strings/manifest/network-security-config/SDK inventory (identify analytics/identity/vendor SDKs) → 5. dynamic pass (sanctioned sandbox) for auth + account flow (server-side planning/engine logic unreachable) → 6. diff observed endpoints vs public docs → 7. promote findings to the ledger as `source_type: rea-artifact`.
