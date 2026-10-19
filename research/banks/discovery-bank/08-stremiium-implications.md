# 08 — Stremiium Implications · Discovery Bank

Each finding below is classified **ADOPT / ADAPT / AVOID / BEAT** per Program Brief §7, with the specific change Stremiium makes.

## ADOPT

| # | Finding (Discovery) | Why | Stremiium implementation |
|---|---|---|---|
| A1 | **Status-first behavioural engine** (action → status → price), not points-first | Proven at scale: 1.57m clients, profitability FY2026 | Ship an `Engagement Score` that drives account pricing AND `$STM` reward rate; engine on Kafka event bus |
| A2 | **Dynamic real-time pricing** tied to behaviour | Turns behaviour into funding-cost savings | Real-time rate service on Mambu + Redis; behaviour events reprice at transaction time |
| A3 | **Cross-ecosystem reward currency** (one balance across products) | Drives product-per-client and retention | Single `$STM`/points ledger spanning banking, fiat, fan tokens, prediction markets |
| A4 | **App-embedded AI assistant** (Discovery AI) | Measured lift in engagement / lower latency | GraphQL-gateway AI copilot (agentic) with human-escalation path |

## ADAPT

| # | Finding | Mismatch for Stremiium | Adaptation |
|---|---|---|---|
| B1 | **Fee subsidy funded by an adjacent insurance/health group** | Stremiium has no insurance P&L to cross-subsidise; its flywheel is Web3/fan economy | Fund subsidies from **interchange + `$STM` buy-back/burn economics + partner fan-token revenue**, not insurance profit |
| B2 | **Health-data-driven scoring** | Health data = POPIA special personal information; heavy consent/burden | Use **non-health behavioural signals** (spend, savings, repayment, engagement, community participation) to keep the data-light posture |
| B3 | **Suite-based bundling** (Gold/Platinum/Black/Purple) | Discovery's tiers gate on Vitality status which Stremiium won't have | Re-tier on **engagement + crypto/fan participation**, e.g. Bronze/Silver/Gold/OG, and make tiers portable across fiat & Web3 |
| B4 | **Real-Time Forex (GBP/EUR/USD)** | Discovery offers 3 fiat currencies; Stremiium must go further | Offer fiat FX **plus stablecoin rails** (USDC/USDT) in the same multicurrency wallet UI |

## AVOID

| # | Finding | Trap | Stremiium rule |
|---|---|---|---|
| C1 | **Closed-loop, non-transferable Miles** | Locks value in one ecosystem; blocks composability | Never ship a non-transferable loyalty currency; `$STM` must be **transferable & on-chain** |
| C2 | **Single-vendor concentration** (SAP + Microsoft) | Strategic lock-in and cost exposure | Keep Mambu AWS-native + an abstraction layer + a documented exit path for any core vendor |
| C3 | **Group-dependency for value** | Non-group clients get less value | Make rewards **relationship-agnostic** — a first-time, unbanked client earns on day one |
| C4 | **Health-linked pricing fairness exposure** | Conduct/fairness risk | No pricing that encodes protected characteristics; audit the model quarterly |

## BEAT

| # | Discovery weakness | Stremiium attack |
|---|---|---|
| D1 | **No digital-asset / crypto offering** | Custody + `$STM` + tokenised rewards in the same app; convert Miles-style rewards into on-chain value |
| D2 | **Rewards confined to SA ecosystem partners** | Open partner marketplace with on-chain settlement and cross-border fan/creator partners |
| D3 | **Mass-market exclusion** (affluent/health-membership bias) | Zero-fee entry account + kiosk/agent onboarding (borrow TymeBank's playbook, see `tymebank/08`) with behavioural rewards from day one |
| D4 | **Opaque dynamic pricing** | Publish the exact scoring rules; make `$STM` earn rates and rate ladders transparent and simulation-able in-app |

## Net strategic read for Stremiium

Discovery proves the **behavioural-engine thesis** is commercially viable in South Africa. Stremiium should **copy the loop (A1–A4), re-fund it without an insurance P&L (B1), keep the data-light (B2/B3), and beat Discovery on openness (D1–D4)** by making the reward currency transferable, on-chain and available to the unbanked.
