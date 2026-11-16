# Fanatics — 07 REA Reverse-Engineering (Four Evidentiary Outputs)

> **Program rule (Brief §5):** REA (`morluto/rea`) is **not installed** and **no artefact
> was supplied**. Nothing here derives from decompiled code. "Seen" = public citable
> sources only. App/artefact-dependent items are **Inferred/Unknown** with the resolving
> step named.

## Bucket 1 — Evidence (Seen, public citable sources)

| # | Item | Source basis | Class |
|---|---|---|---|
| S1 | Fanatics is a US sports-commerce company (licensed merchandise) founded 1995 by Michael Rubin | Company pages / press | SEEN |
| S2 | It expanded into collectibles via **Topps** | Public acquisition reporting | SEEN-as-reported |
| S3 | It operates a sportsbook (Fanatics Betting & Gaming) | Public reporting | SEEN-as-reported |
| S4 | It runs **Fanatics Live** (live commerce/breaks) and Fanatics Events | Public reporting | SEEN-as-reported |
| S5 | It runs **Candy Digital** (digital collectibles) | Public reporting | SEEN-as-reported |
| S6 | It maintains a **unified customer identity** across e-commerce, collectibles and betting | Public reporting | SEEN-as-reported |
| S7 | It operates **FanCash**, a cross-vertical loyalty currency | Public program term | SEEN |
| S8 | League/players-association equity involvement reported; valuation reported ~US$31B (2022) | Press reporting | SEEN-as-reported |

## Bucket 2 — Recovered Graph (Synthesised)

```
        UNIFIED CUSTOMER IDENTITY (SSO)         [INFERRED from S6]
                    │
   ┌────────────┬───┴────────┬─────────────┬──────────────┐
   ▼            ▼            ▼             ▼              ▼
Commerce    Collectibles  Live-commerce  Betting       Events
(storefront)(Topps)       (breaks)       (sportsbook)  (shows)
   └────────────┴────────────┴─────────────┴──────────────┘
                    │
            FanCash loyalty ledger            [INFERRED from S7]
        (earn across verticals → redeem)
```

Account/loyalty life cycle (synthesised):

```
SIGNUP(unified id) --purchase--> EARN FanCash --redeem--> DISCOUNT
   EARN --cross-vertical--> LOYALTY (higher LTV)
   BET(w here licensed) --promo/perks--> retention
```

## Bucket 3 — Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| No `.apk`/`.ipa`/`.asar` provided | Cannot observe client code/symbols/endpoints |
| REA not installed | No static/dynamic analysis performed |
| No network capture | SSO protocol, identity/loyalty vendors opaque |
| Private company | No audited financials; officer/comp data limited |
| FanCash terms not captured | Earn/expiry/redemption rules UNKNOWN |
| Betting geoblocks | Wagering flows unavailable in unlicensed states |

## Bucket 4 — Unknowns (Unresolved)

| # | Unknown | Resolving step |
|---|---|---|
| U1 | Client delivery model | REA static analysis of mobile package |
| U2 | FanCash ledger internals (accrual/expiry/redemption) | Official program terms + network-trace |
| U3 | Auth/SSO protocol + identity vendor | Network-trace on login |
| U4 | Betting KYC/geolocation vendors | Network-trace on onboarding |
| U5 | API endpoints/hosts | Network-trace + cert-pinning check |
| U6 | Exact earn rates / tier thresholds | Program terms / in-app capture |
| U7 | Valuation/revenue confirmation | Named press/filing only — **never invent** |
| U8 | Licence numbers (betting) | State regulator registers |

## Verification statement

No valuation, revenue, licence number, or code artefact is asserted as verified in this
dossier. App- and vendor-level claims require REA extraction (artefact) or a public
register/source read. This deliberately complies with the program's anti-fabrication rule.

## Method note

If the executive supplies an artefact, run the standard REA pipeline (hash → unpack →
string/symbol extraction → network-trace) and re-grade this file, converting U-items to
Seen with offsets.
