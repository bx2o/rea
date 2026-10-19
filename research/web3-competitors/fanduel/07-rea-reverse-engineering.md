# FanDuel / DraftKings — 07 REA Reverse-Engineering (Four Evidentiary Outputs)

> **Program rule (Brief §5):** REA (`morluto/rea`) is **not installed** and **no artefact
> was supplied**. Nothing here derives from decompiled code. "Seen" = public citable
> sources only. App/artefact-dependent items are **Inferred/Unknown** with the resolving
> step named.

## Bucket 1 — Evidence (Seen, public citable sources)

| # | Item | Source basis | Class |
|---|---|---|---|
| S1 | FanDuel is a US DFS + regulated sportsbook + online casino brand, owned by **Flutter Entertainment** | Flutter filings / official pages | SEEN |
| S2 | Market is licensed **state-by-state** in the US after the 2018 PASPA repeal (*Murphy v. NCAA*) | Public law/regulators | SEEN |
| S3 | Real-time sports data is sourced from providers such as **Sportradar** and **Genius Sports** | Public partnership reporting | SEEN-as-reported |
| S4 | **Odds/pricing engines** update in-play markets at sub-second cadence | Industry/product descriptions | SEEN-as-reported |
| S5 | **GeoComply-style geolocation** enforces state boundaries before wagering | Public reporting/docs | SEEN-as-reported |
| S6 | **KYC/AML** onboarding and **responsible-gaming** controls are regulatory requirements | Regulator rules (public) | SEEN |
| S7 | **Anti-collusion monitoring** exists for DFS integrity | Public reporting | SEEN-as-reported |
| S8 | Peer operator **DraftKings Inc.** is listed (NASDAQ: DKNG) | Public listing | SEEN |

## Bucket 2 — Recovered Graph (Synthesised)

```
Sports data feeds (Sportradar/Genius)
        └─→ odds/pricing engine (sub-second)  ──→ sportsbook markets
                     └─→ DFS contest engine (lineup, scoring, anti-collusion)
Client (iOS/Android/web)
        └─→ API gateway
              ├─ auth + KYC/AML gate
              ├─ geolocation gate (GeoComply-style) ─ must be in licensed state
              ├─ responsible-gaming controls
              └─ payment rails (deposit/withdraw)
```

Wager life cycle (synthesised):

```
ONBOARD --KYC--> VERIFIED --geofence--> IN_STATE --place wager--> OPEN
   OPEN --settle(odds engine/feed)--> WON/LOST --payout--> BALANCE
   contest: ENTER(fee) --score--> PRIZE (raked pool)
```

## Bucket 3 — Limitations (Known Boundaries)

| Limitation | Impact |
|---|---|
| No `.apk`/`.ipa`/`.asar` provided | Cannot observe client code/symbols/endpoints |
| REA not installed | No static/dynamic analysis performed |
| No network capture | KYC/geolocation/payment vendor identities opaque |
| US state geoblock | Wagering flows unavailable outside licensed states |
| Odds/risk engine server-side | Decompiler cannot reach proprietary models |
| No licence numbers captured | Regulator registers not inspected here |

## Bucket 4 — Unknowns (Unresolved)

| # | Unknown | Resolving step |
|---|---|---|
| U1 | Client delivery model | REA static analysis of mobile package |
| U2 | KYC/geolocation vendor integrations | Network-trace on onboarding/wager |
| U3 | Odds/risk engine internals | Server-side/proprietary → likely UNKNOWN |
| U4 | Payment vendors | Network-trace + cert-pinning check |
| U5 | Auth token format / device binding | Network-trace on login |
| U6 | Exact vig/rake/promo terms | Public pricing pages + in-app capture |
| U7 | Exact state/provincial licence numbers | Regulator registers (never invent) |
| U8 | Revenue/market-share figures | Parent (Flutter) filed reports with period cited |

## Verification statement

No licence number, revenue figure, vendor contract, or code artefact is asserted in this
dossier. App- and vendor-level claims require either REA extraction (artefact) or a public
register read. This deliberately complies with the program's anti-fabrication rule.

## Method note

If the executive supplies an artefact, run the standard REA pipeline (hash → unpack →
string/symbol extraction → network-trace) and re-grade this file, converting U-items to
Seen with offsets.
