# 07 — REA Reverse-Engineering: Nedbank Group

> **REA status: `not-executed`.** REA (`morluto/rea`) is **not installed**, and **no** Nedbank Money
> App or Avo APK/ASAR artefact has been supplied. **No item below claims decompilation evidence.**
> "Seen" items cite **public, citable sources only**. Everything artefact-dependent is INFERRED or
> UNKNOWN, with the resolving extraction step named.

## 1. Evidence (Seen)

| # | Seen item | Source | Class / Confidence |
|---|---|---|---|
| S1 | JSE ticker **NED**; Nedbank Group Limited | JSE / integrated report | SEEN / high |
| S2 | **Managed Evolution** IT transformation programme | Nedbank public docs | SEEN / high |
| S3 | **Nedbank API Framework** and public **API Marketplace** | Nedbank developer portal | SEEN / high |
| S4 | **Nedbank Money App** listed on public app stores | App-store metadata | SEEN / high |
| S5 | **Avo** super-app (banking + e-commerce) listed on app stores | App-store metadata | SEEN / high |
| S6 | Product ladder: MiGoals, Savvy, Professional, Private Wealth | Published pricing/docs | SEEN / medium |
| S7 | **Greenbacks** rewards with savings nudges | Published programme terms | SEEN / medium |
| S8 | PayShap/RTC participation | BankservAfrica/PASA | SEEN / medium |
| S9 | Strong capital adequacy | Nedbank integrated report | SEEN / medium |
| S10 | MiGoals low entry fee (~R5 per anchor) | Published pricing (verify) | SEEN / medium |

## 2. Recovered Graph (Synthesised)

Derived **only** from the Seen set.

```
[Nedbank Money App]  [Avo super-app]  [Online/Business]  <-- S4,S5
        | TLS |
        v
[Nedbank API Framework / API Marketplace gateway]  <-- S3
        |
        +--> [Modernised CBS]  (vendor; exact signature UNKNOWN)  <-- inferred
        +--> [Greenbacks service]  (points, nudges, conversions)  <-- S7 inferred
        +--> [Avo commerce backend]  <-- S5 inferred
        |
        v
[BankservAfrica: EFT / RTC / PayShap] + [card schemes incl. Amex]  <-- S8 inferred
```

Rewards state machine (synthesised): `savings/spend nudge events → Greenbacks points → tier recompute
→ redemption (cashback / voucher / investment conversion)`. — INFERRED / medium

## 3. Limitations (Known Boundaries)

| Limitation | Impact | Class |
|---|---|---|
| No app artefact | Cannot confirm app framework, auth, pinning | UNKNOWN |
| Greenbacks formula | Server-side, non-public | UNKNOWN |
| CBS vendor/signature | Not publicly specified | UNKNOWN |
| Avo backend/NLU | Server-side, non-public | UNKNOWN |

## 4. Unknowns (Unresolved) — with resolving REA step

| # | Unknown | Resolving REA extraction step |
|---|---|---|
| U1 | Money App / Avo framework (native/RN/Flutter) and webview use | `apktool`/`jadx` on APKs; inspect JS bundles in both apps |
| U2 | Greenbacks accrual/tier and investment-conversion computation | `mitmproxy` capture of rewards API + **Frida** hook on conversion handler |
| U3 | Certificate pinning / keystore / biometric binding | Static pinning scan; `strings` on TLS libs; dynamic `mitmproxy` with pinning bypass |
| U4 | API Marketplace auth model (OAuth scopes, rate limits) | Review public developer docs + dynamic capture of token exchange |
| U5 | Hardcoded keys/endpoints in bundles | Entropy/`strings` secret scan of decompiled bundles |
| U6 | Avo commerce backend / NLU flow | Not client-extractable; mark Unknown |

## 5. Method note

When REA is installed: (1) acquire both APKs; (2) static decompile + bundle extraction; (3) entropy +
secret scan; (4) `mitmproxy` capture; (5) Frida hooks on Greenbacks functions; (6) diff vs this graph.
Until then this file is public-evidence only.
