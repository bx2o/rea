# 02 — Technology & Systems

**Entity:** Luno · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA status:** `not-executed` — no application artefact; all stack claims below are from public documentation or marked INFERRED/UNKNOWN.

---

## 1. Custody & wallet architecture (the crown jewels)

Luno is a **custodial** exchange: the platform, not the user, controls private keys. The observable architecture is a two-tier hot/cold model.

| Layer | Technology (public) | Purpose | Evidence |
|---|---|---|---|
| Cold storage ("deep freeze") | **BitGo Custody** + **Fireblocks**; **multi-signature** ("multisig") | ~95% of customer crypto held offline/offsite | SEEN (Luno safety pages, Fireblocks case study) |
| Hot wallets | Multi-signature, with dual/step-up authorisation for outgoing transactions | Operational liquidity for withdrawals/trading | SEEN (Luno safety pages) |
| Governance | Role-based access, multiple layers of biometric access controls | Key-ceremony / operational controls | SEEN (Luno safety pages) |
| Internal ledger | **Off-chain internal ledger** ("Luno Ledger") used for instant internal transfers between Luno users | Instant, feeless internal settlement | SEEN (Luno docs/help) |
| On-chain settlement | Batch net settlement to/from external chains | External send/receive | INFERRED (standard pattern) |

```
                 ┌──────────────────────────────┐
   User A ──►┌───┤  Off-chain internal ledger    ├───► floats/balances reconciled
             │   │  (instant Luno→Luno transfer) │
             │   └──────────────────────────────┘
             │
             ▼            (only on external rails)
   ┌───────────────────┐        ┌─────────────────────┐
   │  Hot wallet tier  │◄──────►│ Cold "deep freeze"  │
   │  multi-sig + 2FA  │ sweep  │ BitGo + Fireblocks  │
   └───────────────────┘        │ multi-sig, RBAC     │
                                 │ biometric ceremony  │
                                 └─────────────────────┘
```

**INFERRED:** reconciliation of the off-chain ledger to on-chain balances is what the **monthly Merkle-tree Proof of Reserves** attests (reserves ≥ liabilities). The PoR proves *sufficiency at a snapshot*, not real-time solvency or the absence of encumbrance — a known industry limitation.

---

## 2. Proof of Reserves (PoR) mechanism

| Property | Detail | Evidence |
|---|---|---|
| Method | **Merkle-tree** proof of reserves | SEEN (Moore AUP report) |
| Standard | **ISRS 4400 (Revised)** agreed-upon procedures | SEEN (report header) |
| Auditor | **Moore** (Blockchain & Digital Assets, JHB) | SEEN (report, signed) |
| Cadence | **Monthly** | SEEN (Luno safety; separate Jan-2025 and Oct-2025 reports exist) |
| Finding | Reserves **exceed 100%** of customer liabilities at snapshot | SEEN (report conclusion) |
| User verification | Customer can independently verify inclusion ("empowers customers to independently verify") | SEEN (report) |
| Boundaries | Snapshot, not continuous; covers in-scope entities/assets only | LIMITATION |

---

## 3. Application & delivery stack

| Dimension | Observation | Class |
|---|---|---|
| Mobile apps | Native iOS + Android apps (App Store / Play) | SEEN (app stores) |
| Delivery | No public confirmation of React Native / Flutter / native; treat as UNKNOWN | UNKNOWN |
| Web platform | Order-book web exchange + simple buy/sell UI | SEEN (luno.com) |
| Public API | Luno publishes REST API docs (api.luno.com) for market data/trading | SEEN (developer docs) |
| Auth (user) | Password + 2FA (TOTP / app-based); SA login patterns | SEEN (help pages / INFERRED for internals) |
| Auth (API) | API key + secret, signed requests | INFERRED (standard) |
| Underlying languages | UNKNOWN without artefact | UNKNOWN |

---

## 4. Integration surfaces

| Surface | Detail | Evidence |
|---|---|---|
| Fiat on/ramp (SA) | **Instant EFT** (bank-agnostic ZAR funding) | SEEN (Luno help) |
| Traditional rails | ZAR bank transfers for fiat off-ramp | SEEN |
| Blockchain networks | Multi-chain asset support (BTC, ETH, ERC-20, etc.) | SEEN (asset lists) |
| Staking | ETH staking product (validator/delegation model) | SEEN (product page); mechanics INFERRED |
| Travel-Rule tooling | Beneficiary/originator data capture for FICA Directive 9 | INFERRED (regulatory requirement) |
| Open banking / PayShap | No public evidence Luno integrates PayShap | UNKNOWN |

---

## 5. Notable third parties

- **BitGo** — qualified custody.
- **Fireblocks** — MPC/custody and transaction orchestration (also enabling staking operations per Fireblocks case study).
- **Moore** — independent PoR attestation.
- **Instant EFT provider(s)** — SA instant-payment rail (provider not verified here).

---

## 6. Technology gaps (opportunities for Stremiium)

| Gap | Implication |
|---|---|
| Custodial only — no self-custody / MPC option for users | Stremiium's planned non-custodial MPC wallet is a differentiator |
| PoR is snapshot-only (monthly) | Real-time, on-chain attestation could BEAT this |
| No public PayShap/open-banking ramp evidence | PayShap-native funding is a domestic wedge |
| Delivery stack undisclosed; no REA artefact | Cannot confirm performance/security internals — requires REA APK extraction |
