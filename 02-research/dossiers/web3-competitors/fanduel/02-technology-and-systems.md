# FanDuel / DraftKings — 02 Technology & Systems

> **REA caveat:** No FanDuel artefact supplied; REA not run. App-internal claims are
> INFERRED/UNKNOWN and name the required extraction step.

## 1. The engineering signature: real-time, regulated, low-latency

| Layer | Finding | Class |
|---|---|---|
| Data feeds | Real-time sports/official data via providers such as **Sportradar** and **Genius Sports** (official league data partnerships) | SEEN-as-reported |
| Odds engine | **Sub-second** odds/pricing engine; in-play markets update continuously | SEEN-as-reported |
| Location | **Geofencing / geolocation compliance**, commonly via **GeoComply**, to enforce state boundaries | SEEN-as-reported |
| Identity | **KYC/AML** at onboarding; SSN/ID verification; sanctions/PEP screening | SEEN (regulatory requirement) / INFERRED (vendor) |
| Responsible gaming | Deposit limits, wager limits, timeouts, self-exclusion, reality checks | SEEN (regulatory requirement) |
| Anti-collusion | DFS-specific monitoring of lineups/shared IPs/payment instruments | SEEN-as-reported |
| Payments | Card/ACH/paypal-style rails + withdrawals; regulated payment handling | SEEN (functional) / UNKNOWN (vendors) |

## 2. DFS vs sportsbook architecture

```
                 ┌──────────────────────────┐
   DATA FEEDS →  │ odds/pricing engine       │ → sb sportsbook markets
 (Sportradar/    │ (sub-second)              │
  Genius)        └──────────────────────────┘
                          │
                          ├─→ DFS contest engine (salary cap, lineup, scoring)
                          │        └─ anti-collusion monitor
                          ▼
   Client (iOS/Android/web) ← API gateway (auth, geofence gate, KYC gate)
                          │
                    geolocation (GeoComply) ── must be in-licensed-state
                          │
                    payment rails ← KYC/AML, responsible-gaming controls
```

* **Geo-gate before action:** the app must confirm the user is physically inside a licensed
  state before accepting a wager — a hard architectural gate, not a soft warning.
* **Feed dependency:** odds quality = feed quality + engine speed.

## 3. Application delivery

| Surface | Finding | Class |
|---|---|---|
| Mobile apps | Native iOS/Android (heavily performance-sensitive) | INFERRED |
| Web | Browser app | SEEN |
| Client stack | Native vs RN vs webview: **UNKNOWN** — resolvable via REA static analysis | UNKNOWN |
| Auth | Account + KYC-gated; biometric device unlock common | INFERRED |

## 4. Integration switches relevant to Stremiium

* **Geofence gate** is directly relevant: a Stremiium real-money/sports line must locate-gate
  by SA province (provincial licensing) — the same pattern as US state gating.
* **Sports-data feeds** are a build/buy decision: Sportradar/Genius-style providers sell to
  SA operators too.
* **Responsible-gaming + anti-collusion** should be table stakes, not add-ons.
* **Sub-second pricing** sets the UX bar; SA uses PayShap/RTC rails, but the *latency*
  expectation transfers.

## 5. Unknowns to resolve

| Question | Resolve via |
|---|---|
| Client delivery model | REA static analysis of mobile package |
| KYC/geolocation vendors actually integrated | Network-trace on onboarding/wager |
| Odds engine internals | Server-side/proprietary → likely UNKNOWN |
| Payment vendors | Network-trace + cert pinning |
| Auth token format | Network-trace on login |
