# 07 — REA Reverse-Engineering: First National Bank (FirstRand)

> **REA status: `not-executed`.** REA (`morluto/rea`) is **not installed**, and **no** FNB APK/ASAR
> artefact has been supplied. **No item below claims decompilation evidence.** "Seen" items cite
> **public, citable sources only**. Everything artefact-dependent is INFERRED or UNKNOWN, with the
> resolving extraction step named.

## 1. Evidence (Seen)

| # | Seen item | Source | Class / Confidence |
|---|---|---|---|
| S1 | JSE ticker **FSR**; FirstRand Limited; FNB is its retail division | JSE / annual results | SEEN / high |
| S2 | FNB Banking App listed on public app stores | App-store metadata | SEEN / high |
| S3 | Public reporting describes the app as a **hybrid React Native + webview** build | Public reporting | SEEN / medium |
| S4 | **eBucks Rewards** five-level programme with listed behavioural drivers | Published eBucks terms | SEEN / medium |
| S5 | eBucks partners incl. Checkers, Engen, iStore; up to ~40% discounts on some categories | Public marketing | SEEN / medium |
| S6 | In-house middleware over **Hogan** CBS with **Kafka** event bus — publicly reported | Company/tech reporting | SEEN / medium |
| S7 | **FNB Connect** MVNO | Public/app-store | SEEN / high |
| S8 | **nav>>** lifestyle surface | Public marketing | SEEN / medium |
| S9 | ROE >19%; cost-to-income ~51–53% | FirstRand results | SEEN / medium |
| S10 | PayShap scheme launched by BankservAfrica March 2023 | BankservAfrica/PASA | SEEN / high |

## 2. Recovered Graph (Synthesised)

Derived **only** from the Seen set.

```
[FNB App (React Native shell + webview)]  <-- S2,S3
        | TLS |
        v
[In-house middleware / real-time API layer]  <-- S6
        |
        +--> [Kafka event bus]  <-- S6
        +--> [Hogan CBS]  (batch-oriented core)  <-- S6
        +--> [eBucks rewards service]  (points, levels)  <-- S4 inferred
        +--> [FNB Connect MVNO integration]  <-- S7
        |
        v
[BankservAfrica: EFT / RTC / PayShap] + [card schemes]  <-- S10 inferred
```

Rewards state machine (synthesised): `behaviour events (login/card/product/auto-sweep) → composite
score → Reward Level 1–5 → discount entitlement → partner redemption`. — INFERRED / medium

## 3. Limitations (Known Boundaries)

| Limitation | Impact | Class |
|---|---|---|
| No app artefact | Cannot confirm RN version, JS bundle layout, native bridges | UNKNOWN |
| eBucks weighting formula | Server-side, non-public | UNKNOWN |
| Hogan internals | Vendor/mainframe, closed | UNKNOWN |
| MVNO stack | Partner-specific, non-public | UNKNOWN |

## 4. Unknowns (Unresolved) — with resolving REA step

| # | Unknown | Resolving REA extraction step |
|---|---|---|
| U1 | Exact hybrid app composition (RN vs webview ratio; RN version) | `apktool`/`jadx` on Android APK; inspect `assets/` and RN bundles; `strings` on `index.android.bundle` |
| U2 | Certificate pinning / keystore / biometric binding | Static scan for pinning config; `strings` on TLS libs; dynamic `mitmproxy` with pinning bypass |
| U3 | **eBucks tier weighting** (behaviour→level) | `mitmproxy` capture of rewards API + **Frida** hook on level-computation handler; replay harness |
| U4 | Reward API endpoints/schema | Dynamic capture; check for leaked OpenAPI/GraphQL introspection in bundle |
| U5 | Hardcoded keys/endpoints in JS bundle | Entropy/`strings` secret scan of decompiled bundle |
| U6 | MVNO integration contract | Not extractable client-side; mark Unknown |

## 5. Method note

When REA is installed: (1) acquire APK/IPA; (2) static decompile (`apktool`/`jadx`); (3) **webview/JS
bundle extraction** (FNB's hybrid app makes bundle recovery the key step); (4) entropy + secret scan;
(5) `mitmproxy` dynamic capture; (6) Frida hooks on eBucks level functions; (7) diff vs this graph.
Until then this file is public-evidence only.
