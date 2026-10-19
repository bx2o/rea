# 07 — REA Reverse-Engineering: ABSA Group

> **REA status: `not-executed`.** REA (`morluto/rea`) is **not installed**, and **no** Absa APK/ASAR
> artefact has been supplied. **No item below claims decompilation evidence.** "Seen" items cite
> **public, citable sources only**. Everything artefact-dependent is INFERRED or UNKNOWN, with the
> resolving extraction step named.

## 1. Evidence (Seen)

| # | Seen item | Source | Class / Confidence |
|---|---|---|---|
| S1 | JSE ticker **ABG**; Absa Group Limited | JSE / annual report | SEEN / high |
| S2 | Renamed Absa Group from Barclays Africa Group in **2018** | Public filings / announcements | SEEN / high |
| S3 | Absa Banking App listed on public app stores | App-store metadata | SEEN / high |
| S4 | **Absa Pay** in-app payments product | Public marketing/docs | SEEN / medium |
| S5 | **WhatsApp ChatBanking** (early SA adopter) | Public announcements | SEEN / medium |
| S6 | Core processing across **SAP + Finacle** — publicly reported | Company/vendor reporting | SEEN / medium |
| S7 | **AWS-led** cloud migration post-separation | Company/tech reporting | SEEN / medium |
| S8 | **Absa Rewards** cashback + Sasol fuel rebates | Published programme terms | SEEN / medium |
| S9 | Product ladder: Transact, Flexi Core, Ultimate, Wealth, Islamic Banking | Published pricing/docs | SEEN / medium |
| S10 | PayShap scheme launched by BankservAfrica March 2023 | BankservAfrica/PASA | SEEN / high |

## 2. Recovered Graph (Synthesised)

Derived **only** from the Seen set.

```
[Absa Banking App + Absa Pay + WhatsApp ChatBanking]  <-- S3,S4,S5
        | TLS |
        v
[API layer]  <-- inferred
        |
        +--> [SAP processing estate]  <-- S6
        +--> [Finacle processing estate]  <-- S6
        +--> [Absa Rewards service]  (cashback, tiers)  <-- S8 inferred
        +--> [ChatBanking orchestration]  <-- S5
        |
        v
[BankservAfrica: EFT / RTC / PayShap] + [card schemes]  <-- S10 inferred
```

Rewards state machine (synthesised): `qualifying spend → cashback/rebate accrual → tier threshold
recompute → account credit or partner rebate`. — INFERRED / medium

## 3. Limitations (Known Boundaries)

| Limitation | Impact | Class |
|---|---|---|
| No app artefact | Cannot confirm app framework, auth, pinning | UNKNOWN |
| Rewards/rebate formula | Server-side, non-public | UNKNOWN |
| SAP + Finacle internals | Vendor platforms, closed | UNKNOWN |
| ChatBanking backend | Chatbot/NLU logic non-public | UNKNOWN |

## 4. Unknowns (Unresolved) — with resolving REA step

| # | Unknown | Resolving REA extraction step |
|---|---|---|
| U1 | App framework (native/RN/Flutter) and webview use | `apktool`/`jadx` on Absa Banking App APK; inspect bundles |
| U2 | Absa Rewards rebate/tier computation | `mitmproxy` capture of rewards API + **Frida** hook on rebate handler |
| U3 | Certificate pinning / keystore / biometric binding | Static pinning scan; `strings` on TLS libs; dynamic `mitmproxy` with pinning bypass |
| U4 | ChatBanking NLU/flow backend | Not client-extractable (server-side); mark Unknown |
| U5 | Hardcoded keys/endpoints in bundle | Entropy/`strings` secret scan of decompiled bundle |
| U6 | Boundary between SAP vs Finacle product ownership | Cannot be confirmed client-side; requires internal docs |

## 5. Method note

When REA is installed: (1) acquire APK/IPA; (2) static decompile; (3) entropy + secret scan; (4)
`mitmproxy` capture; (5) Frida hooks on rewards functions; (6) diff vs this graph. Until then this file
is public-evidence only.
