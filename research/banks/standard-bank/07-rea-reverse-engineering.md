# 07 — REA Reverse-Engineering: Standard Bank Group

> **REA status: `not-executed`.** REA (`morluto/rea`) is **not installed**, and **no** APK/ASAR/IPA
> artefact for any Standard Bank app has been supplied to this workspace. Therefore **no item below
> claims decompilation evidence.** "Seen" items cite **public, citable sources only**. Everything
> artefact-dependent is labelled INFERRED or UNKNOWN, with the extraction step that would resolve it.

## 1. Evidence (Seen)

Only publicly citable sources are admissible here.

| # | Seen item | Source | Class / Confidence |
|---|---|---|---|
| S1 | JSE ticker **SBK**; registered name Standard Bank Group Limited | JSE listing / IAR | SEEN / high |
| S2 | Retail app "Standard Bank Mobile Banking" listed on public app stores | App-store metadata | SEEN / high |
| S3 | **Shyft** app (forex/travel) listed on public app stores | App-store metadata | SEEN / high |
| S4 | **OneHub** B2B portal/app referenced in public business documentation | Vendor/company docs | SEEN / medium |
| S5 | Core banking on **Finacle** (Infosys) — publicly reported | Infosys/company announcements | SEEN / medium |
| S6 | Multi-cloud **AWS + Azure** usage — publicly reported | Company/vendor reporting | SEEN / medium |
| S7 | **UCount Rewards** programme with fuel (Caltex→Astron) partner — public marketing | Published programme terms | SEEN / medium |
| S8 | PayShap scheme launched by BankservAfrica **March 2023** | BankservAfrica/PASA public statements | SEEN / high |
| S9 | Tier 1 CAR historically **>14.5%**; ROE ~15–16% — public reporting | IAR / results presentations | SEEN / medium |

## 2. Recovered Graph (Synthesised)

Derived **only** from the Seen set — this is a reasoned architecture, not extracted code.

```
[Client apps: Standard Bank Mobile + Shyft + OneHub]
        |  TLS  |
        v
[In-house API gateway / ESB]  <-- inferred
        |
        +--> [Finacle CBS]  (accounts, products, GL)
        +--> [Legacy mainframe services]  (historic products)  <-- inferred
        +--> [UCount rewards service]  (points, tiers)  <-- inferred
        |
        v
[BankservAfrica rails: EFT / RTC / PayShap]  <-- PayShap Seen; routing inferred
[SWIFT] for cross-border  <-- inferred
[Cards: Visa/Mastercard issuing + acquiring]  <-- inferred
```

State machine (rewards, synthesised): `qualifying action → points posted → tier recomputed →
redemption requested → partner settlement`. — INFERRED / medium

## 3. Limitations (Known Boundaries)

| Limitation | Impact | Class |
|---|---|---|
| No app artefacts supplied | Cannot confirm app framework, auth, pinning | UNKNOWN |
| Server-side tier math | Only the UI surface is observable publicly | UNKNOWN |
| Finacle internals | Vendor platform, closed source | UNKNOWN |
| Mainframe estate | Closed, non-public | UNKNOWN |

## 4. Unknowns (Unresolved) — with resolving REA step

| # | Unknown | Resolving REA extraction step |
|---|---|---|
| U1 | Mobile app framework (native vs React Native vs Flutter) and webview usage | `apktool`/`jadx` decompile of the Standard Bank Android APK; inspect `lib/` + JS bundles |
| U2 | Auth primitives (certificate pinning, keystore, token format) | Static scan of decompiled APK for pinning configs; `strings` on `libssl`/OKHttp; dynamic `mitmproxy` interception |
| U3 | UCount tier/point computation (server-side) | TLS interception of app↔API calls (`mitmproxy`) + Frida hook on tier-response handler; replay harness |
| U4 | Exact API base URLs and endpoint schema | Dynamic capture of network calls; validate against OpenAPI if leaked in bundle |
| U5 | Presence of hardcoded keys/endpoints in bundle | Entropy/`strings` scan of decompiled bundle; secret-scanning pass |
| U6 | Finacle middleware contract | Cannot be extracted client-side; requires vendor documentation (mark Unknown) |

## 5. Method note

When REA is installed, run in this order: (1) acquire APK/IPA; (2) `apktool`/`jadx` static pass;
(3) entropy + `strings` secret scan; (4) `mitmproxy` dynamic capture with pinning bypass; (5) Frida
hooks on reward/tier functions; (6) produce a diff against this synthesised graph. Until then, this
file remains a public-evidence-only dossier.
