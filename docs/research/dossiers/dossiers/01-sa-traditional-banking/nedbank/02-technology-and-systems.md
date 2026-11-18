# 02 — Technology & Systems: Nedbank Group

## Core banking & infrastructure

| Layer | Assessment | Class / Confidence |
|---|---|---|
| IT strategy | **"Managed Evolution"** — multi-year, publicly documented transformation | SEEN (docs) / high |
| API strategy | **Nedbank API Framework** + public **API Marketplace** | SEEN (docs) / high |
| Core banking system (CBS) | Modernised core (vendor mix); exact CBS signature not public | INFERRED / low |
| Cloud posture | Cloud adoption within Managed Evolution (region `af-south-1`) | INFERRED / medium |
| Integration | API-first layer over BankservAfrica/RTC/PayShap rails | SEEN (docs) / medium |
| Data residency | SA-primary | INFERRED / medium |

> **Signature finding.** Nedbank's most distinctive technology trait is that it **publishes an API
> Marketplace** and runs a formal API Framework — i.e., it treats "API-first" as a product, not just an
> internal pattern. This makes "we are API-first" a **non-differentiator** for Stremiium against
> Nedbank. — SEEN / high

## Application stack (consumer)

| App / surface | Purpose | Delivery model | Class / Confidence |
|---|---|---|---|
| **Nedbank Money App** | Retail banking | Mobile app (framework unverified) | SEEN (app-store) / high |
| **Avo** | Super-app (banking + e-commerce marketplace) | Standalone mobile app | SEEN (app-store) / high |
| Nedbank Online / Business | Web banking | Web portal | SEEN / medium |
| API Marketplace | Developer-facing integration surface | Public developer portal | SEEN (docs) / high |

**Super-app finding (Seen).** Nedbank's **Avo** is a genuine super-app attempt combining banking with a
shopping marketplace — the closest incumbent analogue to Stremiium's planned unified surface, and
therefore both a benchmark and a competitor. — SEEN / high

## Authentication primitives (reasoned, not decompiled)

| Primitive | Assessment | Class |
|---|---|---|
| Login | Biometric/PIN, device-bound | INFERRED / medium |
| Transaction auth | In-app approval + OTP | INFERRED / low |
| API auth | OAuth/token-based for marketplace partners | INFERRED / medium |

Pinning / keystore specifics — UNKNOWN (require artefact).

## Payment rails & integration switches

| Rail | Function | Class / Confidence |
|---|---|---|
| **BankservAfrica** | National clearing/settlement (EFT, RTC) | SEEN / high |
| **PayShap** | Low-value real-time proxy payments (launched Mar 2023) | SEEN / high |
| RTC | Real-time clearing | SEEN / medium |
| Card schemes | Visa/Mastercard + American Express (per anchor) | INFERRED / medium |
| SWIFT | Cross-border | INFERRED / medium |
| Open API Marketplace | Third-party integration | SEEN (docs) / high |

## Third parties (notable)

| Vendor / partner | Role | Class |
|---|---|---|
| BankservAfrica | Clearing/settlement | SEEN / high |
| Cloud provider (AWS/Azure) | Infrastructure | INFERRED / low |
| American Express | Card/rewards partnership (per anchor) | INFERRED / low |
| Avo marketplace merchants | Commerce partners | SEEN / medium |

## Technology findings summary

1. Managed Evolution + API Marketplace means "API-first" is table stakes, not a Stremiium edge. SEEN/high
2. Avo is a direct super-app competitor to the Stremiium unified surface. SEEN/high
3. Nedbank's commitment to formal IT programmes signals execution discipline. SEEN/medium
