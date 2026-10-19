# System Context & Transaction-Flow Diagrams

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.0 · **Owner:** C06 Engineering-Infra
**Status:** `TARGET DESIGN` — illustrative views of the intended architecture.

---

## 1. Scope

Two views:

1. **§2 System context** — the C4-Level-1 picture: Stremiium NeoBank, its users, and every external
   system it depends on.
2. **§3 Transaction-flow sequence** — one representative end-to-end payment (a PayShap push with
   BLT rewards and `$STM` fee-discount election) traced across components.

---

## 2. System-context diagram (C4 L1)

```
                        (external)                                (external)
   ┌──────────────────┐            ┌──────────────────┐   ┌──────────────────────┐
   │  Retail customer  │            │  Merchant / POS   │   │  Partner systems      │
   │  (mobile / web)   │            │  (acquiring)      │   │  (sponsor bank, KYC)  │
   └─────────┬─────────┘            └─────────┬─────────┘   └───────────┬──────────┘
             │  HTTPS/TLS 1.3                   │                         │
             └───────────────┬─────────────────┘                         │
                             ▼                                           │
        ╔══════════════════════════════════════════════════════════════════════════════╗
        ║                          STREMIUM NEOBANK (trust boundary)                    ║
        ║                                                                                ║
        ║   ┌───────────────────────────┐                                                ║
        ║   │  API GATEWAY (Kong)        │  mTLS · WAF · rate limit · JWT validation      ║
        ║   │  + GraphQL gateway (BFF)   │                                                ║
        ║   └─────────────┬─────────────┘                                                ║
        ║                 │                                                              ║
        ║   ┌─────────────▼─────────────┐        ┌───────────────────────────────┐       ║
        ║   │  CORE BANKING (Mambu CBS)  │◄──────►│  PAYMENTS ENGINE               │       ║
        ║   │  accounts · ledger ·       │        │  PayShap · RTC · EFT · SWIFT   │       ║
        ║   │  interest · fees           │        │  ISO 20022 translator          │       ║
        ║   └─────────────┬─────────────┘        └───────────────┬───────────────┘       ║
        ║                 │                                      │                       ║
        ║   ┌─────────────▼──────────────────────────────────────▼───────────────┐       ║
        ║   │                APACHE KAFKA EVENT BUS (transactional)               │       ║
        ║   │   cbs.* · payments.rail.status · web3.chain.settlement · rewards.*  │       ║
        ║   │   compliance.reportable · audit.worm                                │       ║
        ║   └───────┬─────────────────────────────┬─────────────────────┬───────┘       ║
        ║           │                             │                     │               ║
        ║   ┌───────▼────────┐          ┌─────────▼─────────┐   ┌───────▼────────────┐  ║
        ║   │ REWARDS / BLT   │          │ WEB3 BRIDGE        │   │ COMPLIANCE SERVICE │  ║
        ║   │ ENGINE          │          │ + MPC WaaS         │   │ CTR/STR/CARF/FinSurv│  ║
        ║   └───────┬────────┘          └─────────┬─────────┘   └───────┬────────────┘  ║
        ║           │                             │                     │               ║
        ║   ┌───────▼─────────────────────────────▼─────────────────────▼────────────┐  ║
        ║   │  DATA LAYER (af-south-1)                                                 │  ║
        ║   │  [PostgreSQL] core ledger + outbox   [Redis] cache/idempotency          │  ║
        ║   │  [S3 SSE-KMS] documents   [WORM] audit   [KMS/HSM] keys                  │  ║
        ║   └──────────────────────────────────────────────────────────────────────────┘ ║
        ╚══════════════════════════════════════════════════════════════════════════════╝
                 │                    │                       │                │
                 ▼                    ▼                       ▼                ▼
        (external)            (external)             (external)         (external)
   ┌──────────────────┐  ┌────────────────────┐  ┌────────────────┐  ┌────────────────┐
   │ BankservAfrica     │  │ SWIFT              │  │ Polygon PoS /  │  │ The Graph      │
   │ PayShap/RTC/EFT    │  │ cross-border + gpi │  │ ZK-EVM + MPC   │  │ on-chain index │
   └──────────────────┘  └────────────────────┘  └────────────────┘  └────────────────┘
```

**External dependencies (all outside the trust boundary):** BankservAfrica (domestic clearing),
SWIFT (cross-border), Polygon networks + the MPC WaaS provider (digital assets), The Graph
(indexing), sponsor bank (settlement/AD), KYC/AML data providers.

---

## 3. Transaction-flow sequence (PayShap push + BLT + `$STM` fee discount)

Representative flow: a customer sends a PayShap payment and elects to pay the fee in `$STM`, earning
BLT points on settlement.

```
 Customer      KonK/GraphQL      Payments        Mambu CBS      Kafka          Rewards     Web3 Bridge   BankservAfrica
   │  (app)       Gateway         Engine            (ledger)      bus           engine        (MPC)           (rail)
   │              │                │                 │            │              │             │               │
   │ 1. initiate  │                │                 │            │              │             │               │
   │──POST /pay──►│                │                 │            │              │             │               │
   │              │ 2. validate JWT/mTLS, rate-limit │            │              │             │               │
   │              │──pain.001─────►│                 │            │              │             │               │
   │              │                │ 3. FinSurv/limit/AML checks  │              │             │               │
   │              │                │ 4. resolve proxy (PayShap)   │              │             │               │
   │              │                │──reserve funds─►│            │              │             │               │
   │              │                │                 │ 5. post: debit customer / credit suspense │           │
   │              │                │                 │──cbs.transaction.events┈┈►│              │             │               │
   │              │                │ 6. fee: apply 25% $STM discount            │             │               │
   │              │                │──fee intent───────────────────────────────►│             │               │
   │              │                │                 │            │              │ 7. $STM leg │               │
   │              │                │                 │            │              │──settle────►│───on-chain───►│
   │              │                │ 8. submit pacs.008 ────────────────────────────────────────────────────────►│
   │              │                │                 │            │              │             │               │
   │              │                │◄────────────── pacs.002 ACSC ───────────────────────────────────────────────│
   │              │                │ 9. update state=CLEARING→SETTLED            │             │               │
   │              │                │──post settlement►│            │              │             │               │
   │              │                │                 │ 10. move suspense → merchant/customer     │           │
   │              │                │                 │──payments.rail.status┈┈┈┈┈►│              │             │               │
   │              │◄──200 OK ───────│                 │            │              │             │               │
   │◄── push ─────│                │                 │            │              │             │               │
   │              │                │                 │            │ 11. rewards.points.ledger┈►│             │               │
   │              │                │                 │            │              │ mint BLT pts│               │
   │              │                │                 │            │ 12. (if reportable) compliance.reportable ┈► FIC/SARS
   │              │                │                 │            │ 13. audit.worm ┈┈► (immutable record, all steps logged)
```

### 3.1 Step notes

| Step | Component | What is enforced |
|---|---|---|
| 2 | Kong + GraphQL gateway | mTLS, WAF, rate limit, auth |
| 3 | Payments engine | FinSurv (SDA/FCA) for cross-border; AML/limit checks |
| 4 | Payments engine | PayShap proxy resolution |
| 5 | Mambu CBS | Double-entry post: customer → suspense (funds reserved) |
| 6 | CBS fee engine | 25% `$STM` fee discount applied pre-posting |
| 7 | Web3 bridge | Token-leg settlement via MPC WaaS, confirmation-depth required |
| 8 | Payments engine | ISO 20022 `pacs.008` to BankservAfrica |
| 9 | Payments engine | `pacs.002` `ACSC` → `SETTLED` |
| 10 | Mambu CBS | Suspense → destination; `payments.rail.status` published |
| 11 | Rewards engine | BLT points minted **only** on settled transactions |
| 12 | Compliance service | CTR/STR/CARF/FinSurv events where reportable |
| 13 | All components | Every step mirrored to the immutable WORM audit sink |

---

## 4. Related artefacts

- Stack view: [`../README.md`](../README.md) §2
- CBS + event topology: [`../core-banking/README.md`](../core-banking/README.md)
- Rails + ISO 20022: [`../payment-rails/README.md`](../payment-rails/README.md)
- Web3 + MPC: [`../web3-bridge/README.md`](../web3-bridge/README.md)
