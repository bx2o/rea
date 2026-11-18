# 07 — REA Reverse-Engineering · Discovery Bank

> **Method note.** REA (`morluto/rea`) is a binary & application analysis engine intended for JavaScript/bytecode static-dynamic analysis. **REA is not installed in this workspace and no Discovery Bank APK/IPA/ASAR artefacts have been supplied.** Accordingly, this file contains **no decompilation, no bytecode offsets, no function signatures and no network traces**. The four buckets below therefore hold: (1) public citable facts, (2) a synthesised architecture, (3) the tooling/artefact limitations, and (4) named unknowns each paired with the exact REA step that would resolve it.

## 1. Evidence (Seen) — public, citable sources ONLY

| # | Seen item | Source type | Source ref |
|---|---|---|---|
| S1 | Core banking = SAP banking engine on high-availability cloud | docs / press | Public reporting + program entity anchor |
| S2 | AI layer = Azure OpenAI (Foundry Models) + Azure Databricks; productised as "Discovery AI", embedded in the banking app | docs | Microsoft customer story; `discovery.co.za/bank/news-discovery-ai-in-the-banking-app` |
| S3 | Behavioural decisioning at scale attributed to Databricks lakehouse | docs | Databricks blog (Discovery Bank behavioural AI) |
| S4 | Dynamic Interest Rates: up to 1.6% everyday / 6% demand savings / 7% lower borrow (Gold) | published-pricing | `discovery.co.za/bank/accounts-suite-gold` |
| S5 | Up to 55 days interest-free; up to 1 Mile per R15 | published-pricing | Discovery Bank product/training docs |
| S6 | FX accounts GBP/EUR/USD, instant in-app opening, multicurrency card, pay in 60+ currencies | published-pricing | `discovery.co.za/bank/digital-banking` |
| S7 | Vitality Travel flights 10%–75% off; discount driven by product × Vitality Money × Health × card spend | published-pricing | `discovery.co.za/bank/info-and-tips-travel-benefits-and-rewards` |
| S8 | FY2026: profit R370m, revenue R3.1bn, 1.57m clients, 3.77m accounts | public-filing | Discovery Limited FY2026 audited results |
| S9 | App-store metadata (Discovery Bank app listing) | app-store | Google Play / Apple App Store listing (metadata only) |

## 2. Recovered Graph (Synthesised)

Derived solely from the Seen items above — **this is a logical model, not a recovered artefact**.

```
[Client app] --auth(UNKNOWN)--> [API gateway (UNKNOWN impl)]
        |                                   |
        |                     +-------------+--------------------+
        |                     v                                  v
        |            [SAP CBS on HA cloud  (S1)]        [Behavioural / Vitality
        |             · deposit & credit products         Money scoring engine]
        |             · real-time rate servicing                  |
        |                     ^                                  v
        |                     |                        [Dynamic Interest Rate engine (S4)]
        |                     |                                  |
        +-------------------->|                                  v
                              |                        [Fee-subsidy + Miles award]
                              |                                  |
                              |                                  v
                              |                     [Redemption: Miles / Vitality Travel /
                              |                      Ð-Day retail (S5,S7)]
                              |
                    [Discovery AI: Azure OpenAI + Databricks (S2,S3)]
                              ^
                              |
              [Group signals: Health / Life / Insure / Vitality]
```

**State machine (synthesised):** `tracked behaviour → score → status (Blue..Diamond) → {rate change, fee change, Miles accrual} → redemption → re-engagement`.

**Data model (synthesised):** `Client` ⟶ `VitalityMoneyStatus` ⟶ `PriceProfile{creditRate, debitRate, fee}` ; `Client` ⟶ `MilesBalance` ⟶ `Redemption`.

## 3. Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| **No artefact supplied** | The entire client-side surface (framework, auth, crypto, endpoints) is unreachable. |
| **REA not installed** | No static/dynamic analysis possible even if an artefact existed. |
| **Server-side pricing** | The Dynamic Interest Rate and Vitality Money computations are server-side and proprietary — unreachable by any client-side analysis. |
| **Undisclosed integrations** | Scheme (Visa/Mastercard), clearing partner and SWIFT correspondent are not public. |
| **Obfuscation status unknown** | Whether the (unavailable) app is obfuscated cannot be stated. |
| **Vendor-packaged CBS** | SAP core is licensed/closed — no source access via REA. |

## 4. Unknowns (Unresolved) + the REA step that would resolve each

| # | Unknown | REA extraction step |
|---|---|---|
| U1 | Mobile app framework (native / React Native / Flutter / Capacitor webview) | `rea analyze-application` on the Discovery Bank **APK**; inspect `lib/` `.so` libs (hermes/jsc/flutter) and app manifest |
| U2 | JS bundle structure & business logic | `rea analyze-javascript-application` on `assets/index.android.bundle` (Hermes bytecode) or the iOS `.jsbundle` |
| U3 | Authentication primitives (OAuth2 PKCE, device binding, biometrics, jailbreak checks) | REA static string/entropy scan for `oauth`, `pkce`, `Keychain`, `BiometricPrompt`, plus dynamic hooking during login |
| U4 | Network endpoints & API contracts | `rea trace-network` (MITM proxy) during app flows; enumerate hosts/paths |
| U5 | Scheme/tokenisation (Visa VTS vs Mastercard MDES) | REA string scan for `VTS`, `MDES`, `DPAN`, `tokenRequestorId` |
| U6 | Web-portal SPA (Next.js/React) build & API surface | `rea analyze-javascript-application` on the online-banking web bundle |
| U7 | Exact fee/Miles tables as coded (vs marketing) | REA static extraction of embedded resource/config files; cross-check vs published schedule |
| U8 | Whether the app is obfuscated/RASP-protected | REA entropy + symbol analysis; report packer (ProGuard/DexGuard/jscrambler) if present |

> **No claim in this file asserts that any of U1–U8 has been observed.** Each remains open until an artefact is supplied and REA runs.
