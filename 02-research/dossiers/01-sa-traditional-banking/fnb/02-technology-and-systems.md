# 02 — Technology & Systems: First National Bank (FirstRand)

## Core banking & infrastructure

| Layer | Assessment | Class / Confidence |
|---|---|---|
| Core banking system (CBS) | **Hogan** (Hogan Systems / DXC lineage) | SEEN (docs) / medium |
| In-house middleware | Thick proprietary middleware/API layer over Hogan | SEEN (docs) / medium |
| Event backbone | **Apache Kafka** transactional/event bus | SEEN (docs) / medium |
| Cloud posture | Hybrid — private/on-prem core + cloud for digital | INFERRED / medium |
| Real-time layer | Real-time APIs over the Hogan batch-oriented core | SEEN (docs) / medium |
| Data residency | SA primary | INFERRED / medium |

> **Signature finding.** FNB's differentiator is **not** the CBS (Hogan is a mature, batch-oriented
> mainframe-era system) but the **in-house real-time layer + Kafka event bus** engineered around it.
> This is FNB's moat and its technical debt. — INFERRED / medium

## Application stack (consumer)

| App / surface | Purpose | Delivery model | Class / Confidence |
|---|---|---|---|
| FNB Banking App | Retail banking | **Hybrid: React Native shell + webview** | SEEN (public reporting) / medium |
| **FNB Connect** | MVNO (mobile network) | Integrated into FNB app/channels | SEEN / high |
| **nav>>** | Lifestyle/partner tools (fuel, travel, deals) | Integrated surface | SEEN / medium |
| FNB Business | Business banking | App + web | SEEN / medium |
| WhatsApp/USSD | Servicing channels | Messaging | INFERRED / medium |

**Hybrid-app inference.** Public reporting describes FNB's app as a hybrid (React Native + webview).
The proportion of native vs webview, and any embedded JS bundle signature, cannot be confirmed without
artefact extraction. — INFERRED / medium

## Authentication primitives (reasoned, not decompiled)

| Primitive | Assessment | Class |
|---|---|---|
| Login | Biometric (fingerprint/face) + PIN, device-bound | SEEN (marketing) / medium |
| Transaction approval | In-app approval + OTP; possible soft-token | INFERRED / low |
| Session | Token-based over TLS | INFERRED / low |

Certificate pinning / keystore specifics — UNKNOWN (require artefact).

## Payment rails & integration switches

| Rail | Function | Class / Confidence |
|---|---|---|
| **BankservAfrica** | National clearing/settlement (EFT, RTC) | SEEN / high |
| **PayShap** | Low-value real-time proxy payments (launched Mar 2023) | SEEN / high |
| RTC | Real-time clearing | SEEN / medium |
| Card schemes | Visa/Mastercard issuing + acquiring | SEEN / medium |
| SWIFT | Cross-border | INFERRED / medium |
| FNB Connect (MVNO) | Telco integration via MVNO partner | SEEN / medium |

## Third parties (notable)

| Vendor / partner | Role | Class |
|---|---|---|
| DXC/Hogan | Core banking platform | SEEN (docs) / medium |
| Apache Kafka | Event streaming | SEEN (docs) / medium |
| MVNO network partner | FNB Connect hosting | INFERRED / low |
| eBucks partner network | Rewards funding | SEEN / medium |

## Technology findings summary

1. FNB's value sits in its **in-house middleware + Kafka + real-time API** layer, not the CBS. INFERRED/medium
2. Hybrid React Native app = reuse velocity but potential performance/security seams. INFERRED/medium
3. MVNO (FNB Connect) is a powerful bundling lock-in Stremiium should study. SEEN/high
