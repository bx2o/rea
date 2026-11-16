# Stremiium NeoBank — Target Architecture Specification

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T7.0 — Stremiium NeoBank Unified Blueprint
**Owner:** Sparkling Curious (`SC-MASTER-001`) — Lead squads C06 Engineering-Infra, C11 Dev-Engineering, C13 Web3-Finance, C16 Banking-Fintech
**Status vocabulary:** `TARGET DESIGN` (nothing in this folder is built in production yet)
**Source of truth for stack:** [`../task/PROGRAM_BRIEF.md`](../task/PROGRAM_BRIEF.md) §8 (Engineering / Architecture Anchors)
**Last updated:** 2026-10-19

---

## 1. Purpose and status

This folder is the **normative target architecture** for the Stremiium NeoBank (parent entity
`Stremiium (Pty) Ltd`, Bloemfontein, Free State, South Africa). It translates the stack anchors in
the program brief §8 into concrete component specifications, data contracts, integration mappings,
and a regulatory control matrix.

> **TARGET DESIGN NOTICE.** Everything here describes an *intended* design. No component in this
> folder is deployed. None of the documents contain production credentials, API keys, private keys,
> signing material, or personal data — and none ever will (program brief §9). Where a value would
> normally be a secret (endpoint hostnames, tenant ids, HSM partition names), this specification
> describes the *shape* of the value, not the value itself.

---

## 2. Target stack diagram (ASCII)

```
                                   ┌───────────────────────────────────────────────┐
                                   │                CUSTOMER CHANNELS                │
                                   │  React Native (iOS / Android)   Next.js 15 web  │
                                   └───────────────┬───────────────────────────────┘
                                                   │  HTTPS / TLS 1.3
                                                   ▼
   ┌───────────────────────────────────────────────────────────────────────────────────────────┐
   │                                 EDGE + API GATEWAY LAYER                                    │
   │   Kong Gateway (mTLS, rate limiting, WAF, JWT validation)  ──►  GraphQL Gateway (Apollo)    │
   │   ── BFF: Next.js Route Handlers / RN data layer (no direct DB access from clients) ──      │
   └───────────────┬───────────────────────────────┬───────────────────────────────┬────────────┘
                   │                               │                               │
                   ▼                               ▼                               ▼
   ┌───────────────────────────┐   ┌───────────────────────────┐   ┌───────────────────────────┐
   │   CORE BANKING (CBS)       │   │   PAYMENTS / RAILS         │   │   WEB3 BRIDGE              │
   │   Mambu cloud-native CBS   │   │   BankservAfrica engine    │   │   Polygon PoS / ZK-EVM     │
   │   AWS af-south-1 (Cape Twn)│   │   PayShap · RTC · EFT      │   │   Non-custodial MPC WaaS   │
   │   account + ledger model   │   │   SWIFT cross-border       │   │   $STM ERC-20 tokenomics   │
   └───────────────┬───────────┘   └───────────────┬───────────┘   └───────────────┬───────────┘
                   │                               │                               │
                   └───────────────┬───────────────┴───────────────┬───────────────┘
                                   ▼                               ▼
                   ┌───────────────────────────────────┐  ┌───────────────────────────────┐
                   │   EVENT BUS — Apache Kafka         │  │   REWARDS / BLT ENGINE         │
                   │   transactional topics + CQRS      │─►│   behavioural points, tiers,   │
                   │   outbox (exactly-once semantics)  │  │   $STM cashback orchestration  │
                   └───────────────┬───────────────────┘  └───────────────────────────────┘
                                   │
                                   ▼
   ┌───────────────────────────────────────────────────────────────────────────────────────────┐
   │                                        DATA LAYER                                          │
   │   PostgreSQL (ACID core ledger + outbox)   Redis (cache, idempotency, locks)                │
   │   Object store (S3, af-south-1, SSE-KMS)   The Graph (on-chain indexing)   Audit/WORM log    │
   └───────────────────────────────────────────────────────────────────────────────────────────┘

   Cross-cutting: HSM / KMS (FIPS 140-2 L3) · POPIA data-sovereignty boundary (af-south-1) · IAM · observability
```

---

## 3. Component inventory

| # | Component | Spec file | Owner council | Purpose |
|---|---|---|---|---|
| 1 | Client apps (React Native + Next.js 15) | this file §2 | C11, C08 | Customer-facing banking, wallet, loyalty UI |
| 2 | Edge + API gateway (Kong, GraphQL) | this file §2 | C06, C11 | mTLS, WAF, rate limiting, unified API surface |
| 3 | **Mambu cloud-native CBS** | [`core-banking/README.md`](core-banking/README.md) | C16 | Accounts, ledger, interest, fees |
| 4 | Banking REA plugin | [`core-banking/stremiium-rea-banking-plugin.ts`](core-banking/stremiium-rea-banking-plugin.ts) | C11, C16 | REA analysis tool (T1.2) |
| 5 | Canonical transaction model | [`core-banking/stremiium-transaction-model.ts`](core-banking/stremiium-transaction-model.ts) | C16, C10 | One model for every money movement |
| 6 | **BankservAfrica payments engine** | [`payment-rails/README.md`](payment-rails/README.md) | C16 | PayShap, RTC, EFT, SWIFT, ISO 20022 |
| 7 | **Web3 bridge + MPC WaaS** | [`web3-bridge/README.md`](web3-bridge/README.md) | C13 | Polygon, non-custodial wallets, $STM |
| 8 | **Regulatory control matrix** | [`regulatory-compliance/README.md`](regulatory-compliance/README.md) | C01 | FSCA, FICA, SARB, POPIA, NCA, NGB, CARF |
| 9 | Kafka event bus | [`core-banking/README.md`](core-banking/README.md) §4 | C06, C11 | Transactional bus + rewards events |
| 10 | Data stores | [`core-banking/README.md`](core-banking/README.md) §6 | C06 | Postgres, Redis, S3, The Graph |
| 11 | System-context diagrams | [`diagrams/system-context.md`](diagrams/system-context.md) | C06 | Context + sequence views |

---

## 4. Link index

| File | What it covers |
|---|---|
| [`core-banking/README.md`](core-banking/README.md) | Mambu CBS on `af-south-1`: account/ledger model, interest & fee engine, Kafka topology, reconciliation, POPIA residency |
| [`core-banking/stremiium-rea-banking-plugin.ts`](core-banking/stremiium-rea-banking-plugin.ts) | Compilable provider-agnostic REA banking analysis module |
| [`core-banking/stremiium-transaction-model.ts`](core-banking/stremiium-transaction-model.ts) | Canonical `StremiiumTransaction` type contract |
| [`payment-rails/README.md`](payment-rails/README.md) | BankservAfrica, ISO 20022 mapping, settlement windows, limits, SWIFT |
| [`web3-bridge/README.md`](web3-bridge/README.md) | Polygon bridge, MPC WaaS, $STM tokenomics, staking, The Graph, HSM |
| [`regulatory-compliance/README.md`](regulatory-compliance/README.md) | SA regulatory control matrix → component mapping |
| [`regulatory-compliance/south-africa-regulatory-hierarchy.md`](regulatory-compliance/south-africa-regulatory-hierarchy.md) | Ordered authority hierarchy, obligations, owners |
| [`diagrams/README.md`](diagrams/README.md) | Index of ASCII architecture diagrams |
| [`diagrams/system-context.md`](diagrams/system-context.md) | System-context + transaction-flow sequence diagrams |

---

## 5. Cross-cutting principles

1. **One canonical model.** Every rail (fiat or on-chain) normalises to `StremiiumTransaction`
   before it hits the event bus (see the transaction-model file).
2. **Data sovereignty first.** Customer personal data, ledger data, and secrets stay in AWS
   `af-south-1` (Cape Town) to satisfy POPIA (see [`regulatory-compliance/README.md`](regulatory-compliance/README.md) §POPIA).
3. **Non-custodial by design.** Stremiium does not hold customer private keys; the MPC WaaS
   co-signs (see [`web3-bridge/README.md`](web3-bridge/README.md)).
4. **Exactly-once money movement.** The transactional outbox + Kafka guarantees no double-post on
   retry; all rail calls carry idempotency keys.
5. **Evidence discipline.** Any claim imported from the REA research dossiers carries its
   `Seen` / `Inferred` / `Unknown` classification (program brief §5).
