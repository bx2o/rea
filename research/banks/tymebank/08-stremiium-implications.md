# 08 — Stremiium Implications · TymeBank / GoTymeBank

Each finding is classified **ADOPT / ADAPT / AVOID / BEAT** per Program Brief §7, with the specific Stremiium change.

## ADOPT

| # | Finding (TymeBank) | Why | Stremiium implementation |
|---|---|---|---|
| A1 | **Cloud-native core via Mambu SaaS** on AWS | Fast launch, low capex, proven at 11.6m customers | Stremiium already targets Mambu on AWS `af-south-1` — mirror the architecture, keep an abstraction layer |
| A2 | **Assisted onboarding at retail partner points** (kiosk/agent) | Wins unbanked clients with no branch cost | Phased: app-native eKYC first, then **agent/kiosk network** at retail partners for cash-in and card issuance |
| A3 | **~5-minute account + card issuance** | Best-in-class onboarding conversion | Target sub-5-minute onboarding; pre-issue virtual card instantly, physical card via agent |
| A4 | **Zero-fee transactional account** | Removes the #1 acquisition friction in SA | Zero-fee `EveryDay`-equivalent tier; monetise via interchange + `$STM` rewards |
| A5 | **Salary-linked earned-wage access (TymeAdvance)** | High-engagement, low-loss product | Offer a `$STM`-discounted salary advance (ADAPT wording) tied to payroll integration |

## ADAPT

| # | Finding | Mismatch | Adaptation |
|---|---|---|---|
| B1 | GoalSave **tiered interest** as the behavioural lever | Rate-only rewards lack a fungible, cross-ecosystem hook | Add a **`$STM` reward layer** on top of savings tiers — same behaviour, richer reward |
| B2 | **Retail-partner kiosk dependency** | Ties distribution to third-party store health | Stremiium: app-first onboarding + a **broader agent network** (incl. spaza/independent) and merchant softPOS |
| B3 | **Mambu single-vendor core** | Strategic dependency | Keep Mambu but with **documented exit path**, Kafka event backbone and an anti-lock-in data model |
| B4 | VAS (airtime/electricity) as revenue | Low margin, no loyalty hook | Convert VAS into **reward-earning actions** (earn `$STM` on VAS) rather than pure margin |

## AVOID

| # | Finding | Trap | Stremiium rule |
|---|---|---|---|
| C1 | **No loyalty currency in SA** | Engagement not locked; clients are price-sensitive and poachable | Never launch without a first-class, **transferable** reward currency |
| C2 | **Thin per-client deposit balances** | Interchange-dependent economics are fragile | Drive deposit depth via **reward-boosted savings** and `$STM` staking incentives |
| C3 | **Hardware-bound onboarding** | Kiosk reach limited to partner stores | Ensure fully **remote onboarding** works without any physical point |
| C4 | **Multi-jurisdiction sprawl without a shared reward** | Compliance cost without cross-border loyalty lock | Keep one global `$STM` ledger to make international expansion reward-coherent |

## BEAT

| # | TymeBank weakness | Stremiium attack |
|---|---|---|
| D1 | **Rate/fee-only rewards, no points currency in SA** | Launch a **transferable `$STM` reward currency** available from day one to the unbanked |
| D2 | **Product sparsity** (few credit/investment/crypto products) | Broaden to wallet + custody + prediction markets + fan tokens under one app |
| D3 | **Kiosk-partner dependency** | Build an **open agent + merchant softPOS** network not tied to one retailer |
| D4 | **No Web3 rails** | `$STM` on Polygon + MPC wallet = differentiated product Tyme cannot match without re-platforming |

## Net strategic read for Stremiium

TymeBank is the **operational and cost benchmark**: cloud-core, assisted onboarding, zero-fee accounts and salary-linked credit are all proven in the exact SA mass market Stremiium targets. Stremiium should **adopt A1–A5 wholesale**, **adapt B1–B4 to add the `$STM` reward layer**, and **beat TymeBank on the one thing it lacks — a transferable, cross-ecosystem loyalty currency (D1) and Web3 rails (D4)**.
