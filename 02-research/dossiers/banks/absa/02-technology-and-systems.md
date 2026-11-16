# 02 — Technology & Systems: ABSA Group

## Core banking & infrastructure

| Layer | Assessment | Class / Confidence |
|---|---|---|
| Core processing estate | **SAP + Finacle** (dual/heterogeneous processing) | SEEN (docs) / medium |
| Cloud posture | **AWS-led** cloud migration post-separation | SEEN (docs) / medium |
| Legacy heritage | Barclays-era platform scaffolding being retired | INFERRED / medium |
| Data residency | SA-primary; cloud region `af-south-1` | INFERRED / medium |
| Middleware | API layer over the dual core | INFERRED / low |

> **Signature finding.** Absa runs a **duplicated/heterogeneous processing estate** (SAP for some
> functions, Finacle for others) — a direct consequence of separating from Barclays. This duplication
> is Absa's core technical debt and the main reason its modernisation is complex. — INFERRED / medium

## Application stack (consumer)

| App / surface | Purpose | Delivery model | Class / Confidence |
|---|---|---|---|
| Absa Banking App | Retail banking | Mobile app (framework unverified) | SEEN (app-store) / high |
| **Absa Pay** | Digital payments | In-app payments feature | SEEN / medium |
| **WhatsApp ChatBanking** | Servicing/transacting via WhatsApp | Messaging channel (early adopter) | SEEN / medium |
| Absa Online / Business | Web banking | Web portal | SEEN / medium |

**WhatsApp finding (Seen).** Absa was among the earliest SA banks to deliver **ChatBanking over
WhatsApp**, a low-friction channel Stremiium can emulate for mass-market onboarding. — SEEN / medium

## Authentication primitives (reasoned, not decompiled)

| Primitive | Assessment | Class |
|---|---|---|
| Login | Biometric/PIN, device-bound | INFERRED / medium |
| Transaction auth | In-app approval + OTP | INFERRED / low |
| ChatBanking auth | Session + step-up authentication | INFERRED / low |

Pinning / keystore specifics — UNKNOWN (require artefact).

## Payment rails & integration switches

| Rail | Function | Class / Confidence |
|---|---|---|
| **BankservAfrica** | National clearing/settlement (EFT, RTC) | SEEN / high |
| **PayShap** | Low-value real-time proxy payments (launched Mar 2023) | SEEN / high |
| RTC | Real-time clearing | SEEN / medium |
| Card schemes | Visa/Mastercard issuing + acquiring | SEEN / medium |
| SWIFT | Cross-border | INFERRED / medium |
| WhatsApp (Meta) | ChatBanking channel integration | SEEN / medium |

## Third parties (notable)

| Vendor / partner | Role | Class |
|---|---|---|
| SAP | Core/enterprise processing | SEEN (docs) / medium |
| Infosys Finacle | Core banking platform (partial estate) | SEEN (docs) / medium |
| AWS | Cloud infrastructure | SEEN (docs) / medium |
| WhatsApp/Clickatell-style provider | ChatBanking rails | SEEN / medium |

## Technology findings summary

1. Dual-core (SAP + Finacle) is a duplication risk and cost drag — Stremiium must be single-core. INFERRED/medium
2. AWS-led migration shows appetite for cloud but carries migration debt. SEEN/medium
3. WhatsApp ChatBanking is a low-friction channel worth emulating. SEEN/medium
