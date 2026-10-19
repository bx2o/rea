# T7 phases · phase-plan.md

**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Primary council:** C00 Sparkling Curious (`SC-MASTER-001`)

---

## T7.1 — Core Banking & PayShap Integration Specs
**Status:** `ACTIVE` · **Owner:** C16 (`C16-banking-fintech-captain`) · **Support:** C06, C11
**Deliverables:** `architecture/core-banking/`, `architecture/payment-rails/`
Focus: Mambu CBS on `af-south-1`, account/ledger model, ISO 20022 messages, BankservAfrica engine
(PayShap, RTC, EFT), SWIFT where needed, and the core-banking↔gateway contract.
Exit: specs complete; PayShap flow sequence-tested on paper; consumes T1.2 plugin + T2/T3 CBS evidence.

## T7.2 — $STM Token Utility & MPC Wallet System
**Status:** `ACTIVE` · **Owner:** C13 (`C13-web3-finance-captain`) · **Support:** C01, C10
**Deliverable:** `architecture/web3-bridge/`
Focus: `$STM` ERC-20 on Polygon PoS/ZK-EVM; 1,000,000,000 fixed supply; 20% net quarterly fees →
buy-back & burn to 50% retired; 25% fee discount when fees paid in `$STM`; non-custodial MPC
Wallet-as-a-Service; The Graph indexing; Kafka event flow.
Exit: token contract spec + wallet architecture + burn-budget model; token mechanics cite T4/T6.

## T7.3 — Regulatory Dossier for FSCA & SARB
**Status:** `ACTIVE` · **Owner:** C01 (`C01-legal-compliance-captain`) · **Support:** C16, C10
**Deliverable:** `architecture/regulatory-compliance/`
Focus: FSCA CASP licence posture, FICA (incl. Dir.9 Travel Rule), SARB FinSurv ExCon, POPIA, NCA,
National Gambling Board adjacency; data-residency position.
Exit: dossier complete; regulatory gates mapped to architecture components; ADAPT/AVOID decisions.

## Cross-phase: Traceability matrix (C00)
**Owner:** C00
Map every architectural decision → source dossier finding (T2–T6) → evidence class. No orphan decisions.

---

## Phase dependency order

```
T2,T3 ──► T7.1 (core banking/rails)
T4,T6 ──► T7.2 ($STM/wallet)
T2–T6 ──► T7.3 (regulatory)
C00 traceability matrix gates all three exits
```
