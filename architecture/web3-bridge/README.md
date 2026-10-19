# Web3 Bridge — Polygon, MPC Wallet-as-a-Service, $STM Tokenomics

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.2 · **Owner:** C13 Web3-Finance (with C06 Engineering-Infra, C12 Cybersecurity-Intel, C01 Legal-Compliance)
**Status:** `TARGET DESIGN` — contract interfaces specified, **not deployed**. No private keys, mnemonics, or contract addresses appear here (and none may ever be committed — program brief §9).

---

## 1. Scope

This document specifies the Stremiium NeoBank **Web3 bridge**: how the fiat core banking system
([Mambu CBS](../core-banking/README.md)) interoperates with public-chain settlement on **Polygon
PoS / Polygon ZK-EVM**, how customers hold digital assets through a **non-custodial MPC
Wallet-as-a-Service (WaaS)**, and how the native token **`$STM`** is issued, burned, and staked.

The design deliberately mirrors — and improves on — three benchmark patterns analysed in the
research dossiers: JPMorgan Kinexys (T5.1, private permissioned settlement), Sorare/StarkEx (T6.1,
L2 scaling + fee abstraction), and Socios/Chiliz (T6.2, fan-token generation mechanics).

---

## 2. Chain topology and bridge design

```
        ┌──────────────────────────────────────────────────────────────────────┐
        │                     Stremiium OFF-CHAIN (af-south-1)                   │
        │  CBS ledger · Payments engine · Rewards/BLT engine · Treasury service  │
        └───────────────┬───────────────────────────────────────┬───────────────┘
                        │ signed settlement intents               │ signed fee-discount intents
                        ▼                                         ▼
        ┌──────────────────────────────────────────────────────────────────────┐
        │                   WEB3 BRIDGE SERVICE (bridge orchestrator)            │
        │  • intent queue (Kafka: web3.chain.settlement)                        │
        │  • MPC co-signing client  • nonce/idempotency manager                 │
        │  • confirmation watcher (RPC + The Graph)                             │
        └───────────────┬───────────────────────────────────────┬───────────────┘
                        │                                        │
        ┌───────────────▼──────────────┐        ┌────────────────▼──────────────┐
        │    Polygon PoS (mainnet)      │        │   Polygon ZK-EVM (scaling)     │
        │  $STM ERC-20 · staking pool   │◄─────► │  high-volume fan/loyalty txns  │
        │  USDC (zBridge/CCIP)          │        │  cheap micro-rewards settlement │
        └───────────────────────────────┘        └────────────────────────────────┘
                        ▲
                        │ indexed events
        ┌───────────────┴───────────────┐
        │   The Graph (subgraph)         │  → projections consumed by CBS recon & analytics
        └────────────────────────────────┘
```

| Layer | Technology | Purpose |
|---|---|---|
| Settlement chain | Polygon PoS | $STM token, staking, treasury operations |
| Scaling chain | Polygon ZK-EVM | Low-cost, high-volume micro-transactions (rewards settlement) |
| Stable settlement | USDC on Polygon | Fiat-adjacent on-chain value transfer |
| Interop | CCIP / zBridge | Move value between PoS and ZK-EVM |
| Indexing | The Graph subgraph | Queryable projection of on-chain state |
| Custody | Non-custodial MPC WaaS | Customer retains keys; Stremiium co-signs policy |

**Bridge safety:** every bridge operation uses (a) an idempotency key, (b) a confirmation-depth
threshold before off-chain crediting, and (c) a circuit-breaker that halts the $STM burn job if
reconciliation breaks (see [`../core-banking/README.md`](../core-banking/README.md) §5).

---

## 3. Non-custodial MPC Wallet-as-a-Service

Stremiium **does not hold customer private keys**. Wallets are created through an MPC WaaS where the
key share is split so that no single party — including Stremiium — can sign alone.

```
  Customer device ──► key share A (customer-controlled)
  WaaS provider   ──► key share B (policy/service share)
  Recovery/backup ──► key share C (encrypted recovery, split under social/HSM recovery)

  Signing: 2-of-3 threshold (TSS/MPC) — no full key ever reconstitutes in one place
```

| Property | Design |
|---|---|
| Custody model | Non-custodial (customer holds share A) |
| Signing | Threshold MPC (TSS), 2-of-3; policy engine enforces spend limits, allow-lists |
| Recovery | Split recovery shares; social recovery + HSM-wrapped backup share |
| Chains | Polygon PoS, Polygon ZK-EVM |
| Fiat↔crypto | On/off-ramp via payment rails and treasury service |
| Compliance | Wallet addresses are pseudonymous; PII stays off-chain; travel-rule attaches hashes only |

**Why non-custodial:** it reduces Stremiium's regulatory burden (no custody of client assets) and
aligns with the FSCA CASP framing — the WaaS provider and Stremiium's role are documented in
[`../regulatory-compliance/README.md`](../regulatory-compliance/README.md).

---

## 4. $STM ERC-20 tokenomics

| Parameter | Value | Notes |
|---|---|---|
| Token | `$STM`, ERC-20 (Polygon PoS) | Fixed supply, minting permanently disabled after genesis |
| Total supply | **1,000,000,000** (fixed) | No inflation, no additional mint authority |
| Buy-back & burn | **20% of net quarterly fees** → programmatic buy-back & burn | Executed quarterly via treasury contract |
| Burn target | Until **50% of supply is retired** | i.e. burn ceiling of 500,000,000 $STM |
| Fee discount | **25% discount when fees are settled in `$STM`** | Applied by the CBS fee engine pre-posting |
| Decimals | 18 (ERC-20 standard) | Standard |

### 4.1 Buy-back & burn mechanics

```
  Quarter end
     │
     ▼
  net fees (fiat) ──► 20% allocation
     │
     ▼
  Treasury buys $STM on-market (TWAP, no single-block impact)
     │
     ▼
  Burn transaction ──► 0x000…dEaD / burn()
     │
     ▼
  Respect ceiling: stop once cumulative burned = 500,000,000 $STM (50%)
```

- **Net fees** = gross fees less rail costs, interchange, and refunds (definition owned by C10).
- The burn is **programmatic and deterministic**: a signed treasury intent per quarter, with the
  allocation formula published in the token contract/SDK.
- A public dashboard (indexed by The Graph) reports cumulative burn vs the 50% ceiling.

### 4.2 Fee discount (25% in `$STM`)

When a customer elects to pay a fee in `$STM`, the fee engine applies a 25% reduction and records
`feeCurrency = 'STM'` on the [`StremiiumTransaction`](../core-banking/stremiium-transaction-model.ts).
The token-leg settlement clears via `Polygon-STM`. Discount cost is funded from the token treasury so
the burn schedule remains intact.

---

## 5. Staking pool mechanics

| Parameter | Design |
|---|---|
| Pool purpose | Secure the $STM utility set (fee discounts, loyalty boosts, governance weight) |
| Pool model | Stremiium-operated pool + delegated staking contracts on Polygon PoS |
| Rewards source | A fixed, pre-allocated emissions budget (minted at genesis within the 1bn supply cap) |
| Lock | Optional time-lock for boosted reward weight; no lock = base weight |
| Unbonding | Parameterised unbonding period to protect pool integrity |
| Slashing | Socialised per pool rules; slashing events published on-chain |
| Governance | $STM-weighted signalling votes on fee-discount tiers and campaign allocations |

> Staking rewards are **not** funded by the burn allocation; the two flows are strictly separate
> (burn reduces supply; staking emissions redistribute a bounded genesis reserve).

---

## 6. The Graph indexing

| Subgraph | Entities | Consumers |
|---|---|---|
| `stm-token` | transfers, holders, supply, burns | Treasury dashboard, C10 reporting |
| `stm-staking` | stakes, rewards, slashing | Loyalty/analytics |
| `stm-bridge` | bridge deposits/withdrawals | CBS reconciliation (`web3.chain.settlement`) |
| `stm-fee-discounts` | fee paid in $STM | Fee recon, rewards engine |

Queries are GraphQL; the bridge watcher reconciles subgraph events against on-chain tx hashes before
emitting to Kafka.

---

## 7. Key management & HSM boundary

```
  ┌──────────────────────────────────────────────────────────────────────────┐
  │  AWS af-south-1 · KMS / CloudHSM (FIPS 140-2 Level 3)                     │
  │   • Treasury signing key share (never exported)                           │
  │   • Bridge operator signing share                                         │
  │   • Recovery-share wrapping keys                                          │
  └───────────────┬──────────────────────────────────────────────────────────┘
                  │  mTLS, no key export
                  ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │  MPC WaaS / bridge orchestrator (co-signing)                              │
  │   • threshold policy engine  • spend limits  • allow-lists  • audit log   │
  └──────────────────────────────────────────────────────────────────────────┘
                  │
                  ▼
        Customer MPC key share (device)  — Stremiium never holds this
```

| Boundary rule | Statement |
|---|---|
| No key export | HSM key material never leaves the HSM partition; only signatures are returned |
| Threshold only | No single operator can move treasury funds; MPC/TSS threshold enforced |
| Separation of duties | Bridge operator role ≠ treasury operator role (IAM boundary) |
| Audit | Every signing request is logged to the WORM audit sink |
| Residency | HSM/KMS in `af-south-1`; on-chain data carries no PII |

---

## 8. Related artefacts

- CBS + reconciliation: [`../core-banking/README.md`](../core-banking/README.md)
- Transaction model: [`../core-banking/stremiium-transaction-model.ts`](../core-banking/stremiium-transaction-model.ts)
- Fiat rails: [`../payment-rails/README.md`](../payment-rails/README.md)
- Regulatory treatment of crypto: [`../regulatory-compliance/README.md`](../regulatory-compliance/README.md)
