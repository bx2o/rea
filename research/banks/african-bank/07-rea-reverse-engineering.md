# 07 — REA Reverse-Engineering · African Bank

> **Method note.** REA (`morluto/rea`) is **not installed** in this workspace and **no African Bank APK/ASAR artefacts have been supplied**. This file contains **no decompilation, no bytecode, no function names and no network traces**. Buckets hold public facts, a synthesised architecture, tooling limitations, and named unknowns each paired with the REA step that resolves it.

## 1. Evidence (Seen) — public, citable sources ONLY

| # | Seen item | Source type | Source ref |
|---|---|---|---|
| S1 | African Bank Limited registered bank; Reg 2014/176899/06; FSP 46904; NCRCP7638 | public-filing | ABL AFS FY2025; African Bank catalogue PDF |
| S2 | Locally controlled bank on the SARB Prudential Authority register; HQ 59 16th Road, Midrand; CEO Kennedy Bungane | public-filing | SARB Locally Controlled Banks list, Sep 2025 |
| S3 | ABHL shareholders: SARB, a consortium of six banks, GEPF (PIC-managed), Employee Trust iKamva Lethu (10%) | public-filing | ABHL interim results |
| S4 | MyWorld Account: R0 monthly fee, 1 transactional + up to 5 pockets, overdraft up to R100,000, shared banking | published-pricing | africanbank.co.za/en/home/banking/ |
| S5 | Audacious Rewards: points for everyday banking; redeemable for airtime, data, groceries, travel, entertainment; points credited after transaction clears | published-pricing | audaciousrewards.co.za/faq; Audacious Rewards T&C v29 (2025) |
| S6 | Digital wallets supported: Samsung Wallet, Garmin Pay, SwatchPay | docs | africanbank.co.za/en/home/digital-wallets/ |
| S7 | Credit cards in Silver/Gold/Black tiers (~R69 monthly) | published-pricing | African Bank pricing guide (secondary summary) |
| S8 | H1 FY2025 net profit R202m (+15%); FY2025 credit loss ratio 5.3%; net income before impairments R7,601m | public-filing | ABHL interim results; SENS FY2025 release |
| S9 | Grindrod Bank and Ubank acquisitions completed (ABL2024); JSE relisting targeted 2027 | public-filing | ABHL interim statements; press |
| S10 | Tap2Glass Android softPOS merchant app | docs | Program entity anchor + softPOS market context (limited primary sourcing) |
| S11 | App-store metadata (African Bank app listing) | app-store | Google Play / Apple App Store listing (metadata only) |

## 2. Recovered Graph (Synthesised — low confidence)

Logical model derived from Seen items only; **not** a recovered artefact.

```
[African Bank app (framework UNKNOWN)]   [Tap2Glass softPOS app (S10)]   [Digital wallets: Samsung/Garmin/Swatch (S6)]
        | auth UNKNOWN                          | NFC acceptance                     |
        +------------------+---------------------+------------------------------------+
                           v
             [API / integration layer (UNKNOWN)]
                           |
             [CBS: legacy + Ubank/Grindrod systems (UNKNOWN) — modernising]
             · MyWorld deposits (S4) · unsecured loans · cards (S7) · insurance (AIG)
                           |
        +------------------+--------------------+---------------------------+
        v                  v                    v                           v
  [BankservAfrica]   [Card scheme]      [Audacious Rewards engine (S5)]  [Digital wallets (S6)]
   (INFERRED)          (INFERRED)         activity→points→store              (SEEN)
```

**State machine (synthesised):** `account open → activity (save/repay/swipe/VAS) → transaction clears → points credited → store redemption`.

**Data model (synthesised):** `Client` ⟶ `MyWorldAccount{1 + up to 5 pockets}` ; `Client` ⟶ `RewardsBalance{points}` ⟶ `Redemption`.

## 3. Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| **No artefact supplied** | Client-side framework, auth, crypto, endpoints unreachable. |
| **REA not installed** | No static/dynamic analysis possible. |
| **CBS vendor unknown** | Core banking stack not public → cannot even scope REA targets. |
| **Acquired-system heterogeneity** | Systems inherited from Ubank/Grindrod may differ from the main app; unknown. |
| **SoftPOS scheme partner unknown** | Tap2Glass scheme/tokenisation not public. |
| **Obfuscation status unknown** | Cannot state whether the (unavailable) app is obfuscated. |

## 4. Unknowns (Unresolved) + the REA step that would resolve each

| # | Unknown | REA extraction step |
|---|---|---|
| U1 | Mobile app framework (native / React Native / Flutter / webview) | `rea analyze-application` on African Bank **APK**; inspect `lib/` (flutter/hermes/jsc) |
| U2 | JS/business logic & API client | `rea analyze-javascript-application` on `assets/index.android.bundle` / iOS `.jsbundle` |
| U3 | Authentication primitives (OTP, biometrics, device binding, root detection) | REA static scan + dynamic hooking during login |
| U4 | **Tap2Glass APK** structure, scheme SDK, MDR/host endpoints | `rea analyze-application` on the `Tap2Glass` APK; string scan for scheme SDK (Visa Tap-to-Phone / Mastercard Tap-on-Phone) |
| U5 | API endpoints & contracts for MyWorld/Rewards | `rea trace-network` (MITM) across account, rewards and rewards-store flows |
| U6 | CBS/integration identifiers exposed in the app | REA endpoint/host correlation against known CBS signatures |
| U7 | Audacious Rewards earning rates as coded vs T&C | REA static resource extraction; cross-check vs Audacious Rewards T&C Appendix A |
| U8 | Whether points expire / can transfer | REA logic trace + T&C read |
| U9 | App obfuscation/RASP posture | REA entropy + symbol analysis (ProGuard/DexGuard/jscrambler) |

> **Explicitly:** no claim asserts U1–U9 has been observed. The named REA commands (`rea analyze-application`, `rea analyze-javascript-application`, `rea trace-network`) are the resolving steps and have **not been run**.
