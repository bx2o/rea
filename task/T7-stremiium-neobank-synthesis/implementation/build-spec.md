# T7 implementation · build-spec.md

**Task:** T7.0 Stremiium NeoBank Unified Blueprint
**Owner:** C00 Sparkling Curious · **Convention authority:** C03.

---

## 1. Artefacts to produce

| # | Artefact | Path | Owner |
|---|---|---|---|
| A1 | Core-banking spec | `architecture/core-banking/README.md` + component specs | C16 |
| A2 | Payment-rails spec | `architecture/payment-rails/README.md` (Bankserv/PayShap/RTC/EFT/SWIFT) | C16 |
| A3 | Token spec | `architecture/web3-bridge/stm-token-spec.md` | C13 |
| A4 | MPC wallet spec | `architecture/web3-bridge/mpc-wallet-spec.md` | C13 |
| A5 | Regulatory dossier | `architecture/regulatory-compliance/README.md` + per-regulator files | C01 |
| A6 | Traceability matrix | `task/T7-stremiium-neobank-synthesis/implementation/traceability-matrix.md` | C00 |

> **Status:** specified here, not yet built; `architecture/` tree does not exist yet.

## 2. Target stack (authoritative, brief §8)

```
CLIENT:      React Native (iOS/Android) + Next.js 15 web portal
API/GATEWAY: GraphQL gateway + Kong (mTLS, rate limiting, WAF)
CORE BANKING:Mambu cloud-native CBS on AWS Cape Town (af-south-1)
PAYMENTS:    BankservAfrica engine (PayShap, RTC, EFT)
WEB3:        Polygon PoS / ZK-EVM + non-custodial MPC Wallet-as-a-Service
EVENTS:      Apache Kafka (transactional bus + rewards engine)
DATA:        PostgreSQL (ACID core) + Redis (cache) + The Graph (on-chain indexing)
```

## 3. $STM token contract (from brief §8)

- Standard: ERC-20 on Polygon PoS / ZK-EVM.
- Supply: 1,000,000,000 fixed.
- Buy-back & burn: 20% of net quarterly fees, until 50% of supply retired.
- Fee discount: 25% when fees settled in `$STM`.

## 4. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-CORE | core-banking spec defines account/ledger/ISO20022 model | ✅/❌ |
| T-PAYSHAP | PayShap end-to-end sequence diagram present | ✅/❌ |
| T-TOKEN | token spec matches brief §8 exactly | ✅/❌ |
| T-WALLET | MPC wallet: non-custodial, key-shard model, recovery flow | ✅/❌ |
| T-REG | FSCA + SARB + FICA(+Dir.9) + POPIA + NCA covered | ✅/❌ |
| T-TRACE | every decision cites a source finding + evidence class | ✅/❌ |

## 5. Build principles

- **Traceability first** — no architectural decision without a source dossier citation.
- **Legal-first tokenomics** — C01 validates $STM is utility, not a security, under SA law.
- **SA-regulatory fit** — design within SARB FinSurv exchange controls.
