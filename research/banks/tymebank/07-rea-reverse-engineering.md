# 07 — REA Reverse-Engineering · TymeBank / GoTymeBank

> **Method note.** REA (`morluto/rea`) is **not installed** in this workspace and **no TymeBank/GoTyme APK/ASAR artefacts have been supplied**. This file therefore contains **no decompilation, no bytecode, no function names and no network traces**. The buckets hold public facts, a synthesised architecture, tooling limitations, and named unknowns each paired with the REA step that resolves it.

## 1. Evidence (Seen) — public, citable sources ONLY

| # | Seen item | Source type | Source ref |
|---|---|---|---|
| S1 | Core banking = **Mambu** cloud-native SaaS | docs | Mambu customer case study (`mambu.com/customer/tyme-bank`) |
| S2 | Cloud = **AWS** (~85% of systems); stack includes **Docker**, **WSO2**, **Java** | docs | Open-banking technology profile (`openbankingtracker.com`) |
| S3 | Card issuance via **IDEMIA** biometric kiosks since **Dec 2020**; facial recognition + ID proofing | docs | IDEMIA press release |
| S4 | Kiosks in **Pick n Pay, Boxer (~800 stores), TFG**; card issued in **~5 minutes** | docs | Mambu case study; IDEMIA |
| S5 | Registered bank Sept 2017 (SARB PA); launched Feb 2019 | public-filing | TymeBank Pillar III FY2025 |
| S6 | EveryDay Account **R0 monthly**; ATM **R10/R1,000**; card replacement **~R70** | published-pricing | TymeBank fee schedule (secondary summaries) |
| S7 | GoalSave standard rate ~**6.00% p.a.**, tiered | published-pricing | GoalSave product page / secondary review |
| S8 | TymeAdvance = salary-linked advance, auto-repaid on payday | docs | TymeBank investor/overview deck |
| S9 | FY2025: 11.6m customers, deposits R7.7bn, net advances R2.25bn | public-filing | TymeBank AFS FY2025 |
| S10 | ARC ~40% (post Dec-2024 Series D led by Nubank at ~US$1.5bn) | public-filing | ARC / press reporting |
| S11 | App-store metadata (TymeBank app listing) | app-store | Google Play / Apple App Store listing (metadata only) |

## 2. Recovered Graph (Synthesised)

Logical model derived from the Seen items — **not** a recovered artefact.

```
[Kiosk: IDEMIA biometrics + card printer (S3,S4)]      [Mobile app (framework UNKNOWN)]
        |  ID + face verify + instant Visa card               |  auth UNKNOWN
        +----------------------+-------------------------------+
                               v
                 [WSO2 API gateway (S2)]
                               |
                 [Java microservices on Docker/AWS (S2)]
                               |
                 [Mambu SaaS core banking (S1)]
                 · EveryDay deposits · GoalSave pockets · TymeAdvance · Personal loan
                               |
      +------------------------+--------------------------+
      v                        v                          v
[BankservAfrica rails]   [Visa scheme (S4)]        [VAS: airtime/electricity]
      (INFERRED)              (SEEN)                     (INFERRED)
```

**State machine (synthesised):** `ID+biometric verify → account open → card personalise → activate → {save→GoalSave tier | salary→TymeAdvance eligibility}`.

**Data model (synthesised):** `Client{idNumber, biometric}` ⟶ `Account{EveryDay}` ⟶ `GoalSavePocket[]` ; `Client` ⟶ `TymeAdvanceEligibility(payrollLinked)`.

## 3. Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| **No artefact supplied** | Client-side framework, auth, crypto and endpoints are unreachable. |
| **REA not installed** | No static/dynamic analysis possible. |
| **Mambu is closed SaaS** | Core logic is a vendor black box; not analysable via REA. |
| **Biometric/identity path is hardware (IDEMIA)** | Kiosk firmware not supplied; verification internals unreachable. |
| **Undisclosed endpoints** | API contracts and scheme tokenisation not public. |
| **Obfuscation status unknown** | Cannot state whether the (unavailable) app is obfuscated. |

## 4. Unknowns (Unresolved) + the REA step that would resolve each

| # | Unknown | REA extraction step |
|---|---|---|
| U1 | Mobile app framework (native / React Native / Flutter / webview) | `rea analyze-application` on TymeBank **APK**; inspect `lib/` for flutter/hermes/jsc |
| U2 | JS/business logic & API client | `rea analyze-javascript-application` on `assets/index.android.bundle` (Hermes) or iOS `.jsbundle` |
| U3 | Authentication primitives (OTP, biometric, device binding, root detection) | REA static scan (`oauth`, `OTP`, `BiometricPrompt`, `SafetyNet/Play Integrity`) + dynamic hooking at login |
| U4 | API endpoints & contracts | `rea trace-network` (MITM) across onboarding, GoalSave, TymeAdvance flows |
| U5 | Kiosk/IDEMIA biometric protocol | Not reachable via app REA; requires kiosk firmware + `rea analyze-application` |
| U6 | Card tokenisation (Visa VTS) | REA string scan for `VTS`, `DPAN`, `tokenRequestorId` |
| U7 | Mambu API surface exposed to the app | REA network trace + endpoint correlation |
| U8 | GoTyme (PH) app parity vs SA app | REA comparative analysis of both APKs |
| U9 | Embedded fee/rate tables as coded | REA static resource extraction; cross-check vs published schedule |

> **Explicitly:** no claim here asserts U1–U9 has been observed. The named REA commands (`rea analyze-application`, `rea analyze-javascript-application`, `rea trace-network`) are the resolving steps and have **not been run**.
