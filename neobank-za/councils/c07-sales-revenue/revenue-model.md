# Revenue Model — Project Umoya

**Council:** C07 Sales & Revenue
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Unit economics: [`unit-economics.md`](./unit-economics.md)

> ⚠️ **All revenue magnitudes, mixes and margins are ASSUMPTIONS.** Where a stream's economics depend on published industry facts, those are cited **[FACT]** from `../../research/`. We do **not** assert measured margins or rates. Each stream is tagged with its **licence dependency**.

**Licence dependency key:** 🟢 full banking licence (Banks Act) · 🟠 NCR credit registration · 🔵 FSP/FAIS · 🟣 NPS/payment participation · 🟡 partner/vendor.

---

## 1. Streams overview

| # | Stream | Mechanic | Licence dep. | Phase | Maturity |
|---|---|---|---|---|---|
| 1 | **Interchange** | Card & payment interchange on spend | 🟢🟡 | MVP | Medium |
| 2 | **Net interest margin (NIM)** | Deploy deposits + lend | 🟢🟠 | MVP→P1 | High |
| 3 | **Fees** | Account/transaction/VAS fees (sparingly) | 🟢 | MVP | Low |
| 4 | **FX / cross-border** | FX margin on card/remittance | 🟢(AD/ADLA)🟡 | P3 | Later |
| 5 | **Subscription (premium tiers)** | Optional paid tier | 🟢 | P3 | Later |
| 6 | **B2B / SME** | MDR + SaaS + embedded credit | 🟢🟠🟣 | P2 | High |

**Strategic note:** diversification is mandatory — the research shows fee-free banking is commoditised and interchange alone cannot sustain a low-ARPU base (`../../research/neobank-competitors/competitive-matrix.md` §F3).

---

## 2. Stream 1 — Interchange

- **What:** income earned when customers transact on our debit cards (and, later, merchant acquiring).
- **Mechanic (ASSUMPTION):** interchange per transaction × transaction frequency. **Domestic debit interchange is capped in SA**, so per-swipe revenue is modest — this is **volume-driven** and limited by low card-spend on a mass-market base **[FACT]** (competitive matrix notes debit interchange caps).
- **Drivers:** card activism (spend per active card), merchant acceptance, e-commerce.
- **Dependencies:** 🟢 issuing + 🟡 scheme.
- **Risks:** interchange caps; cash-heavy customers transact less by card; falls if customers route spend elsewhere.
- **Link:** card product [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §3.

## 3. Stream 2 — Net interest margin (NIM)

Two sub-sources — **the single most important long-run stream** for a bank:

### 3.1 Deposit spread
- **What:** earn a yield on the deposits we hold (HQLA and deployable balances) while paying savers a competitive rate.
- **Mechanic (ASSUMPTION):** (asset yield − saver rate) × average pooled deposits. Deposit float is **cheap funding** (TymeBank's model relies on low-cost deposits **[FACT]**).
- **Dependencies:** 🟢 licence; prudential liquidity rules (LCR/NSFR, HQLA) constrain deployment (`../../research/regulatory/banking-licensing.md` §5).
- **Risks:** rate cycles; needing to pay more for deposits than assumed; liquidity rules limiting yield.

### 3.2 Lending margin
- **What:** interest + fees on personal loans, overdrafts, (later) BNPL and SME working capital, net of credit losses.
- **Mechanic (ASSUMPTION):** (portfolio yield − funding cost − credit loss rate − servicing cost). Credit is the **clearest ARPU differentiator** vs fee-free newcomers who lacked lending scale **[FACT]**.
- **Dependencies:** 🟢 + 🟠 NCR registration + credit-policy build.
- **Risks:** credit losses (African Bank's reported credit loss ratio ~5.3% is a cautionary **context** figure, not our forecast **[FACT]**); NCA fee caps; over-indebtedness/reckless-credit exposure.
- **Link:** lending product [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §5.

## 4. Stream 3 — Fees

- **What:** discreet, transparent fees — e.g. physical card delivery (waivable), certain VAS (airtime/electricity commission is thin), and value-added services.
- **Positioning:** **deliberately limited.** Zero-fee is commoditised **[FACT]**; we do not build the model on fees. Fees exist to recover specific costs and to price value-adds, always disclosed before incurring (principle P3).
- **Mechanic (ASSUMPTION):** small per-item fees + VAS commission.
- **Dependencies:** 🟢.
- **Risks:** fee-based revenue on a mass base is politically/competitively fragile; must not undermine the "honest" brand.

## 5. Stream 4 — FX / Cross-border

- **What:** margin on card transactions abroad and (later) partner-led remittance to migrant corridors.
- **Mechanic (ASSUMPTION):** FX spread on cross-border volumes. Remittance corridors (Mukuru/Mama Money show strong demand **[FACT]** — `../../research/neobank-competitors/payments-fintech.md`).
- **Dependencies:** 🟢 AD/ADLA status for direct forex; or 🟡 partner-led. Forex is **a separate regulatory gate** — cannot be switched on post-launch (`../../research/regulatory/banking-licensing.md` §6).
- **Risks:** forex authorisation complexity; thin margins; corridor regulation.

## 6. Stream 5 — Subscription (premium tiers)

- **What:** an optional paid tier with extra value (higher savings rate on top-up goals, extra support, higher limits, family/communal features).
- **Mechanic (ASSUMPTION):** monthly subscription × attach rate. Recurring, predictable, high-margin **if** value is genuinely differentiated.
- **Dependencies:** 🟢; requires enough product depth to justify (deferred to P3 — MVP has no subscription).
- **Risks:** low propensity to pay in a low-ARPU mass market (**ASSUMPTION**, must be tested); risk of alienating the core "honest/free" brand if overdone.
- **Link:** anti-goal noted in [`../c15-product-management/mvp-scope.md`](../c15-product-management/mvp-scope.md) §3.

## 7. Stream 6 — B2B / SME

- **What:** the **highest-ARPU** engine — merchant discount rate (MDR) on acquired volume, SaaS/tooling subscriptions, and embedded working-capital margin, plus business account fee income.
- **Mechanic (ASSUMPTION):** MDR × acquired GMV + subscription + credit margin. Proven model: Yoco (~400k merchants), iKhokha, Payfast embedded finance **[FACT]** (`../../research/neobank-competitors/payments-fintech.md`).
- **Dependencies:** 🟢 + 🟠 (business lending) + 🟣 (acquiring under NPS/PEM — **draft framework**, `../../research/regulatory/payments-nps.md` §3) + 🟡.
- **Risks:** acquiring is commoditised; capital thresholds for acquiring are **draft/non-binding**; SME credit losses.
- **Link:** [`partnerships-and-bd.md`](./partnerships-and-bd.md); product [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §7.

---

## 8. Stream licence-dependency map

| Capability required | Streams gated | Source |
|---|---|---|
| **Banking licence (Banks Act s12/s16)** | 1, 2, 3, 4, 5, 6 | `../../research/regulatory/banking-licensing.md` |
| **NCR credit-provider registration** | 2.2, 6 (lending) | `../../research/regulatory/conduct-fais-nca.md` §3 |
| **FSP/FAIS (advice/intermediary)** | insurance-adjacent, crypto | `../../research/regulatory/conduct-fais-nca.md` §2 |
| **NPS participation / acquiring** | 1, 6 (merchant), payments | `../../research/regulatory/payments-nps.md` |
| **AD/ADLA (forex)** | 4 | `../../research/regulatory/banking-licensing.md` §6 |
| **FICA / POPIA (all)** | every stream | `../../research/regulatory/aml-fica.md`, `../../research/regulatory/privacy-popia.md` |

---

## 9. Illustrative revenue mix (ASSUMPTION — placeholder only)

> ⚠️ **Not a forecast.** Chosen to show *shape*, not results; replace with modelled figures once cohorts exist.

| Stream | Share of revenue at maturity (ASSUMPTION) |
|---|---|
| Interchange | 15–25% |
| NIM (deposits + lending) | 40–55% |
| Fees | 5–10% |
| B2B/SME | 15–25% |
| Subscription & FX | 5–10% |

**Direction of travel:** early phases rely on interchange + deposits; **lending (P1–P3) and SME (P2+)** shift the mix toward higher margin. This shapes the roadmap ([`../c15-product-management/product-roadmap.md`](../c15-product-management/product-roadmap.md)).

> **Cross-links:** unit economics → [`unit-economics.md`](./unit-economics.md); partnerships enabling B2B/FX → [`partnerships-and-bd.md`](./partnerships-and-bd.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).
