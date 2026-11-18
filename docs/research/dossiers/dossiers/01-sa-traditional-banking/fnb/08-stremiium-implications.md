# 08 — Stremiium Implications: First National Bank (FirstRand)

Strategic filter for the Stremiium NeoBank against FNB / FirstRand.

| # | Finding | Decision | Improvement Stremiium makes |
|---|---|---|---|
| 1 | eBucks **behaviour-gated five-level** tiering (not just spend) | **ADOPT** | Reproduce behaviour-gated tiers, driven by on-chain quest score (app logins, savings nudges, product adoption, token activity) |
| 2 | Merchant-funded discount model keeps bank cost low | **ADAPT** | Layer **protocol-funded** `$STM` rewards on top of merchant discounts, so value does not depend solely on partners |
| 3 | In-house real-time middleware + Kafka over a batch CBS | **ADOPT** | Start Kafka-native from day one (per architecture §8) — no batch core to work around |
| 4 | Hybrid React Native + webview app | **ADAPT** | Full React Native with native modules where security/perf demand it; no webview for auth paths |
| 5 | FNB Connect MVNO bundling lock-in | **ADAPT** | Partner with a telco (data/airtime rewards) instead of building an MVNO and taking ICASA burden |
| 6 | Hogan legacy core + heavy custom middleware = technical debt | **AVOID** | Mambu cloud-native CBS on `af-south-1`; keep custom code thin |
| 7 | Opaque eBucks weighting | **BEAT** | Publish auditable reward rules; let users simulate tier outcomes pre-decision |
| 8 | Closed eBucks currency | **BEAT** | Portable `$STM` rewards redeemable beyond a partner wall |
| 9 | No crypto/banking convergence | **BEAT** | FSCA CASP + NeoBank in one app; non-custodial MPC wallet |
| 10 | High ROE/efficiency (19%+, C/I ~51–53%) sets the bar | **BEAT** (target) | Aim for lower cost-to-income via automation and no branch/MVNO/fleet overhead |

## Net position

- **Adopt:** behaviour-gated tiering; event-driven real-time architecture.
- **Adapt:** reward funding (add protocol-funded tokens); telco strategy (partner, don't build); app framework (native where it matters).
- **Avoid:** batch-era core; heavy bespoke middleware; MVNO capex.
- **Beat:** reward transparency, portable rewards currency, crypto/banking convergence.
