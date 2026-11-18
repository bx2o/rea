# T7 — Stremiium NeoBank Unified Blueprint · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Owner council:** C00 Sparkling Curious (`SC-MASTER-001`, master orchestrator)
**Supporting councils:** C16 Banking-Fintech (`C16-banking-fintech-captain`), C13 Web3-Finance (`C13-web3-finance-captain`), C01 Legal-Compliance (`C01-legal-compliance-captain`), C06 Engineering-Infra (`C06-chief-technology-officer`), C10 Finance-IR (`C10-chief-financial-officer`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Synthesise T2–T6 findings into the **single authoritative blueprint** for the Stremiium NeoBank:
target architecture, payment rails, token/MPC wallet system, and the regulatory dossier needed to
obtain FSCA + SARB standing. This is where reverse-engineering becomes a **build decision**.

## 2. Scope

Deliverables under `architecture/`:
- T7.1 Core Banking & PayShap Integration Specs → `architecture/core-banking/`, `architecture/payment-rails/`
- T7.2 $STM Token Utility & MPC Wallet System → `architecture/web3-bridge/`
- T7.3 Regulatory Dossier for FSCA & SARB → `architecture/regulatory-compliance/`

Target stack (brief §8): React Native + Next.js 15 client; GraphQL + Kong gateway; Mamba CBS on
`af-south-1`; BankservAfrica (PayShap/RTC/EFT); Polygon PoS/ZK-EVM + MPC Wallet-as-a-Service; Kafka;
PostgreSQL + Redis + The Graph.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 scaffold + public-source evidence available | ✅ |
| Entrance | At least draft T2–T6 dossiers | ⏳ |
| Exit | `architecture/core-banking/` spec complete; PayShap flow defined | ⏳ |
| Exit | `architecture/payment-rails/` BankservAfrica/RTC/EFT/SWIFT mapped | ⏳ |
| Exit | `architecture/web3-bridge/` defines $STM utility + MPC wallet design | ⏳ |
| Exit | `architecture/regulatory-compliance/` FSCA/SARB dossier complete | ⏳ |
| Exit | Every design decision traces to a source dossier finding (traceability) | ⏳ |

## 4. Dependency map

```
T2 ─┐
T3 ─┤
T4 ─┼─► T7 (blueprint) ─► T8 (Code Mode execution & commit)
T5 ─┤        ├─ T7.1 (C16) ── T8
T6 ─┘        ├─ T7.2 (C13) ── T8
             └─ T7.3 (C01) ── T8
```
T7.1 depends on T1.2 (banking plugin) and T2/T3 (CBS evidence). T7.2 depends on T4/T6 (token mech).
T7.3 depends on C01's regulatory analysis from T2/T3/T4/T6.

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Upstream dossiers incomplete → blueprint built on weak evidence | H | H | Traceability gate: every decision cites a source finding | C00 |
| R2 | REA absent → architecture leans on INFERRED; risk of wrong CBS assumptions | M | H | Flag assumptions; validate with vendor docs | C16 |
| R3 | $STM token classified as security → redesign required | M | H | C01 legal-first design; utility framing | C01 |
| R4 | Exchange-control (SARB FinSurv) limits token/fiat flows | M | H | Design within FinSurv ExCon; C01 sign-off | C01 |
| R5 | Regulatory dossier incomplete → licence delay | M | H | C01 owns; pre-submission review | C01 |
| R6 | Over-engineering vs launch scope | M | M | C15/C10 scope discipline | C15 |

## 6. Next actions

1. **C16** — draft `architecture/core-banking/` + `architecture/payment-rails/` specs (T7.1).
2. **C13** — draft `architecture/web3-bridge/` ($STM + MPC wallet) (T7.2).
3. **C01** — assemble `architecture/regulatory-compliance/` FSCA/SARB dossier (T7.3).
4. **C00** — enforce traceability of every design decision to a numbered dossier finding.
