# 02 — Technology & Systems: Standard Bank Group

## Core banking & infrastructure

| Layer | Assessment | Class / Confidence |
|---|---|---|
| Core banking system (CBS) | **Finacle** (Infosys) — publicly reported core-banking replacement | SEEN (docs) / medium |
| Legacy backend roots | IBM mainframe heritage (historic CICS/COBOL estate) | INFERRED / medium |
| Cloud posture | Multi-cloud: **AWS** and **Azure** workloads | SEEN (docs) / medium |
| Data residency | SA primary data centres + cloud region `af-south-1` (Cape Town) | INFERRED / medium |
| Primary datacentre strategy | Hybrid — on-prem core-adjacent + cloud for digital/analytics | INFERRED / medium |
| API/middleware | In-house API gateway + enterprise service bus over Finacle | INFERRED / low |

> Because Finacle is a modular, API-first CBS, the inference is that Standard Bank fronts it with an
> in-house middleware/ESB layer to preserve legacy mainframe-sourced products. That middleware
> signature is **not** verified (no artefact). — INFERRED / low

## Application stack (consumer)

| App | Purpose | Delivery model | Class / Confidence |
|---|---|---|---|
| Standard Bank Mobile Banking | Retail banking app | Native/near-native mobile, web-adjacent | SEEN (app-store) / high |
| **Shyft** | Forex, travel money, international payments | Standalone mobile app | SEEN (app-store) / high |
| **OneHub** | B2B/business portal & app | Web + mobile | SEEN (app-store/docs) / medium |
| Business Online | Corporate/business transactional | Web portal | SEEN (docs) / medium |
| WhatsApp banking | ChatBanking-style servicing | Messaging channel | INFERRED / medium |

**Fragmentation finding (Seen):** Standard Bank ships a **suite of separate apps** (retail, Shyft,
OneHub) rather than a single super-app. This is observable from app-store listings. — SEEN (app-store) / high

## Authentication primitives (as reasoned, not decompiled)

| Primitive | Assessment | Class |
|---|---|---|
| App login | Device-bound biometric/PIN + in-app session | INFERRED / medium |
| Transaction auth | OTP / in-app approval; potential soft-token | INFERRED / low |
| Backend session | Token-based sessions over TLS | INFERRED / low |

No certificate pinning, keystore usage, or token format is asserted — those require artefact extraction
(see `07`). — UNKNOWN

## Payment rails & integration switches

| Rail | Function | Class / Confidence |
|---|---|---|
| **BankservAfrica** | National clearing/ACH engine (EFT, RTC) | SEEN / high |
| **PayShap** | Low-value real-time proxy payments (launched Mar 2023) | SEEN / high |
| RTC (Real-Time Clearing) | Real-time EFT scheme | SEEN / medium |
| EFT / AC | Batched clearing | SEEN / medium |
| SWIFT | Cross-border / correspondent messaging | INFERRED / medium |
| Card schemes | Visa/Mastercard issuing + acquiring | SEEN / medium |

> **PayShap participation caveat.** PayShap was launched by BankservAfrica in **March 2023**. The exact
> launch-day participant set and Standard Bank's go-live timing should be confirmed against
> BankservAfrica/PASA published participant lists. — SEEN (scheme launch) / high; participant specifics INFERRED / medium

## Third parties (notable)

| Vendor / partner | Role | Class |
|---|---|---|
| Infosys Finacle | Core banking platform | SEEN (docs) / medium |
| AWS / Microsoft Azure | Cloud infrastructure | SEEN (docs) / medium |
| BankservAfrica | Clearing/settlement | SEEN / high |
| Forex/insurance partners | Shyft and wealth rails | INFERRED / low |

## Technology findings summary

1. **Core portability** — Finacle + multi-cloud gives product velocity Standard Bank can exploit. SEEN/medium
2. **App fragmentation** — three+ consumer apps = onboarding drop-off risk Stremiium can attack. SEEN/high
3. **Mainframe hangover** — legacy mainframe roots may slow real-time product change. INFERRED/medium
