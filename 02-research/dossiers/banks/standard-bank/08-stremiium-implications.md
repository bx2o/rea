# 08 — Stremiium Implications: Standard Bank Group

Strategic filter for the Stremiium NeoBank against Standard Bank Group.

| # | Finding | Decision | Improvement Stremiium makes |
|---|---|---|---|
| 1 | Multi-cloud, modular core (Finacle) enables product velocity | **ADOPT** | Use Mambu cloud-native CBS on AWS `af-south-1` with the same modular/API-first discipline |
| 2 | Four-rung retail ladder (MyMo→Elite→Prestige→Private) is a proven funnel | **ADOPT** | Reproduce a clean tier ladder but gate tiers on **token/behavioural** metrics, not just balances |
| 3 | UCount partner-funded points engine creates retention locks | **ADAPT** | Replace partner-bound points with `$STM` rewards that work at **any** merchant + offer fee discounts |
| 4 | Suite of separate apps (retail + Shyft + OneHub) fragments UX | **AVOID** | Ship one super-app: banking + crypto + BLT loyalty + collectibles in a single React Native shell |
| 5 | Legacy mainframe roots slow real-time product change | **AVOID** | No mainframe lineage — start cloud-native, event-driven (Kafka) |
| 6 | Finacle vendor lock-in + Infosys dependency | **ADAPT** | Mambu + open API gateway (Kong) to preserve portability |
| 7 | Stremiium's absence from incumbents: no crypto/banking convergence | **BEAT** | Lead with FSCA CASP + banking in one app; non-custodial MPC wallet |
| 8 | Opaque reward tier math | **BEAT** | Publish auditable, on-chain reward rules for `$STM` |
| 9 | Exchange-control friction on cross-border (Shyft model) | **ADAPT** | Programmable rails within legal limits; transparent FX pricing |
| 10 | Strong incumbent capital/capital-access moat | **AVOID** (direct fight) / **ADAPT** | Do not compete on balance-sheet scale; compete on product velocity + rewards economics |

## Net position

- **Adopt:** cloud-native modular core; clean tiered product funnel; behavioural retention mechanics.
- **Adapt:** rewards currency (points→`$STM`), middleware (avoid single-vendor lock-in), FX rails.
- **Avoid:** app fragmentation, mainframe lineage, balance-sheet arms race.
- **Beat:** crypto/banking convergence, reward transparency, single super-app UX.

## Immediate Stremiium actions

1. Model a 4-tier onboard ladder with tokenised gating (spec in product repo).
2. Specify `$STM` reward velocity targets vs UCount benchmark (see `04`).
3. Draft the super-app IA consolidating banking + Web3 (design repo).
