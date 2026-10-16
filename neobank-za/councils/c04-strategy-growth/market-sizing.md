# C04 — Market Sizing (TAM / SAM / SOM)

- **Owner:** C04 Chief-Strategist · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Plan:** [`strategic-plan.md`](./strategic-plan.md) · **Positioning:** [`competitive-positioning.md`](./competitive-positioning.md)

> ⚠️ **THIS FILE IS A FRAMEWORK, NOT A FORECAST.** Every input below is labelled **`[ASSUMPTION]`** unless it is a sourced fact with a tag. **We deliberately do not publish fabricated rand-value market sizes.** Where a figure would normally be quoted, we state the **method** and the **assumption placeholder**, and require C10 (Finance) to source the driver before the number is used in any business case. See the research packs for the only measured figures we hold.

---

## 1. Why a framework (and not a headline number)

"South African retail banking TAM is R X billion" is a claim that is easy to state and impossible to defend without a sourced, defined market. A new entrant needs three **defensible, segment-specific** numbers, each traceable to an assumption it can verify:

| Concept | Question it answers | Definition we use |
|---|---|---|
| **TAM** | How big is the *addressable need*? | Revenue pool from transactional banking + payments for SA adults and micro-enterprises |
| **SAM** | Which slice can our model serve? | The segments our licence, rails and distribution can reach at launch |
| **SOM** | What can we realistically win? | Share of SAM we can acquire within the roadmap horizon |

---

## 2. Method

We size with a **bottom-up, driver-based** model:

```
Revenue pool ≈ (addressable customers)
             × (activation rate)
             × (revenue per active customer, by line)
```

Each driver is an **`[ASSUMPTION]`** to be sourced. We do **not** derive the pool from a single top-down market report. This keeps every number auditable and lets us re-base quickly when real pilot data lands.

---

## 3. TAM — total addressable need `[ASSUMPTION]`

| Driver | Value | Basis |
|---|---|---|
| SA adult population | `[ASSUMPTION — source from Stats SA before use]` | Not asserted here |
| Banked / bankable share | `[ASSUMPTION]` | Under-served share is the wedge |
| Revenue lines in scope | account fees, transaction fees, interchange, later credit margin | Aligned to `../c15-product-management/product-catalogue.md` |
| Revenue per active customer | `[ASSUMPTION — seed from C10 unit-economics framework]` | See `../c10-finance-cfo/unit-economics-framework.md` |

> **Rule:** no rand-value TAM is published until each driver is sourced and signed off by C10. Until then the TAM is expressed **only** as a formula.

---

## 4. SAM — serviceable addressable market `[ASSUMPTION]`

SAM narrows TAM by **what our launch model can actually serve**:

| Constraint | Effect on SAM | Note |
|---|---|---|
| Licence perimeter | Deposit-like products via **sponsor** (D-001) until full licence | `../../program/governance/decision-log.md` D-001/D-004 |
| Rail access | PayShap/RTC/card availability via sponsor | `../../architecture/integrations/payments-rails.md` §7 |
| Distribution reach | Only segments reachable via our app + partners | `./partnership-strategy.md` |
| Product scope (D-005) | No lending/crypto at launch → no credit margin in SAM(launch) | `../../program/governance/decision-log.md` D-005 |
| KYC capability | FICA Tier-1 onboarding; EDD for edge cases | `../../research/regulatory/aml-fica.md` §3 |

**SAM(launch) ≪ TAM** by construction: no credit margin, no affluent wealth, limited distribution at day one.

---

## 5. SOM — serviceable obtainable market `[ASSUMPTION]`

SOM is a **share-of-SAM** target over the roadmap horizon, bounded by:

- **capital** (marketing/acquisition budget — C10);
- **distribution capacity** (partner throughput);
- **regulatory/operational capacity** (onboarding, AML, support);
- **competition** (R-014, R-026).

SOM is expressed as **target active customers by phase** (to be set with C10/C09), **not** as a claimed market share. It is validated/re-based at the pilot gate (M10).

---

## 6. Comparables (sourced anchors, not our forecast)

We anchor *scale expectations* on **disclosed** market outcomes — not to claim we will match them, but to bracket what is plausible:

| Anchor | Disclosed outcome | Tag | Source |
|---|---|---|---|
| TymeBank | 11.6m SA customers (Jun 2025) | [FACT] | `../../research/neobank-competitors/competitive-matrix.md` §A |
| Discovery Bank | 1.57m clients; R370m FY26 profit | [FACT] | §A |
| OM Bank | 1m customers ~1yr post-launch | [FACT] | §A |
| Bank Zero | ~40k funded accounts (mid-2025) | [FACT] | §A |
| Capitec | 25.2m active clients (FY26) | [FACT] | §A |

**Read:** outcomes span **orders of magnitude** depending on capital and distribution. Our SOM must be tied to *our* capital and distribution, not to Tyme's.

---

## 7. Sensitivity

| Variable | Direction | Effect on SOM |
|---|---|---|
| Activation rate | ↑ | Non-linear (drives revenue per acquired customer) |
| Cost-to-serve | ↓ | Improves contribution margin even at flat SOM |
| Distribution partner throughput | ↑ | Directly lifts acquisition ceiling |
| Macro strain (R-030) | ↑ | Lowers deposits, raises credit losses later |
| Competition intensity (R-014) | ↑ | Raises CAC, lowers retention |

---

## 8. Governance

- **Owner:** C04 frames; **C10 validates** the financial drivers; **SC ratifies** any figure used in a Level-3 decision.
- **No fabricated figures.** Any number that appears in an investor or board document must trace to a sourced driver or be explicitly labelled `[ASSUMPTION]` with its basis.
- **Re-baseline cadence:** after pilot (M10) and at each roadmap milestone.

---

## 9. Open items / unknowns

- `[ASSUMPTION]` All driver values are placeholders pending sourcing (Stats SA; C10 unit economics).
- `[UNKNOWN]` Revenue-per-active-customer baseline for the target segment.
- `[UNKNOWN]` Partner distribution throughput commitments (pending negotiation — `./partnership-strategy.md`).

_Codename `Project Umoya` is a working label only._
