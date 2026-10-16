# Core Banking — Build vs Buy Decision

**Parent:** [integrations/README.md](./README.md) · **Status:** Proposed (v0.1) · **As-of:** 2026-10-16.

This file analyses the most consequential platform decision: **do we buy a core-banking platform or build the ledger ourselves?** It provides options, a decision matrix, South-Africa-specific considerations, and a recommendation.

> All comparisons, weightings and the recommendation are **DESIGN CHOICE / ANALYTICAL INFERENCE** — not verified vendor facts. Named vendors are **illustrative**, and their capability/pricing/licensing/SA-presence claims are **UNVERIFIED**. Validate with vendor RFPs and demos before committing ([PLAN.md](../../PLAN.md) §4 gates).

---

## 1. What "core banking" means here

We split the term to avoid conflating very different buy decisions:

| Capability | Buy or build? (our default) | Where |
|---|---|---|
| **Ledger / accounts / posting engine** | **The decision in this file.** | BC5 |
| Product & pricing engine | Often bundled with core; can build lightweight | BC4 |
| Payments orchestration | Build (connect to rails) | BC6 |
| Card management | Buy scheme access; build card mgmt or buy a card processor | BC7 |
| KYC/AML enablers | Buy | BC3/BC10 |
| Reporting/BA returns | Build pipelines on bought analytics | BC13 |

This file focuses on the **ledger + product engine** core.

---

## 2. The options

### Option A — Build the ledger (our baseline assumption)
Build accounts, balances, posting engine and product engine on a managed relational store ([technology-selection](../system-design/technology-selection.md) §6), following [ledger-model](../domain-model/ledger-model.md).

### Option B — Buy a modern cloud-native core
Cloud-native, API-first cores increasingly popular with digital banks. Illustrative names (**UNVERIFIED capability/SA-fit**):
- **Thought Machine (Vault)** — smart-contract-based core.
- **10x Banking** — cloud-native core.
- **Zeta** — modern core/banking stack.
- **Mambu** — SaaS core (strong in lending/deposits).
- **Temenos, Finacle (Infosys)** — incumbents, broad, heavier.
- **Others** — e.g. Thought Machine/10x/Mambu/Zeta variants; regional vendors.

### Option C — Buy/lease a bank-in-a-box / BaaS platform
A licensed-bank-as-a-service or platform that provides accounts + rails + compliance scaffolding (often tied to the sponsor bank model). Reduces licence-time-to-market but increases lock-in.

### Option D — Hybrid: buy the rails + compliance, build the differentiating ledger-adjacent layer
Buy a core for commoditised functions; build the differentiation (products, decisioning, UX-led features) on top.

---

## 3. Decision criteria & weights

Weights reflect what matters for a **new SA digital bank** *(DESIGN CHOICE — weights are subjective and shown so they can be challenged)*:

| # | Criterion | Weight | Why |
|---|---|---|---|
| 1 | **Time to market** | 20% | Getting licensed and live is the binding constraint. |
| 2 | **Control & differentiation** | 15% | Products/pricing/UX are where we compete. |
| 3 | **Total cost of ownership (5 yr)** | 15% | Licence fees + engineering + ops. |
| 4 | **Regulatory fit (SA)** | 15% | BA returns, FICA, POPIA residency, ISO 20022. |
| 5 | **Data residency & POPIA §72** | 10% | In-region processing requirement. |
| 6 | **Ledger correctness & auditability** | 10% | The ledger must be bullet-proof. |
| 7 | **Lock-in / exit cost** | 5% | Ability to change vendors. |
| 8 | **Scalability** | 5% | Must meet [NFR §4](../system-design/non-functional-requirements.md). |
| 9 | **Ecosystem & integrations** | 5% | SA rails, cards, screening. |

---

## 4. Decision matrix

Scoring 1–5 (5 = best). **These scores are ANALYTICAL INFERENCE (DESIGN CHOICE), illustrative, not verified vendor benchmarks.**

| Criterion (weight) | A. Build | B. Buy modern core | C. Bank-in-a-box | D. Hybrid |
|---|---|---|---|---|
| Time to market (20%) | 2 | 5 | 5 | 4 |
| Control/differentiation (15%) | 5 | 3 | 2 | 4 |
| 5-yr TCO (15%) | 3 | 3 | 2 | 3 |
| SA regulatory fit (15%) | 4 | 3 (UNVERIFIED) | 3 | 4 |
| Residency/POPIA (10%) | 5 | 3 (UNVERIFIED) | 3 | 4 |
| Ledger correctness/audit (10%) | 4 | 5 | 4 | 4 |
| Lock-in/exit (5%) | 5 | 2 | 1 | 3 |
| Scalability (5%) | 4 | 5 | 4 | 4 |
| Ecosystem/integrations (5%) | 3 | 4 | 5 | 4 |
| **Weighted total** | **3.70** | **3.70** | **3.25** | **3.80** |

> Worked example (A. Build): `2·.20 + 5·.15 + 3·.15 + 4·.15 + 5·.10 + 4·.10 + 5·.05 + 4·.05 + 3·.05 = 0.40+0.75+0.45+0.60+0.50+0.40+0.25+0.20+0.15 = 3.70`.
> Worked example (D. Hybrid): `4·.20 + 4·.15 + 3·.15 + 4·.15 + 4·.10 + 4·.10 + 3·.05 + 4·.05 + 4·.05 = 3.80`.

**Observation:** on these (subjective) weights, **Build** and **Buy-modern** tie at 3.70 and **Hybrid** edges ahead at 3.80 — while **Bank-in-a-box** trails (3.25) because its control, TCO and lock-in scores are poor. The decision therefore hinges on (a) how much we truly value **control/differentiation** and **residency**, and (b) how much we trust vendor **SA-fit** — which is **UNVERIFIED**.

---

## 5. South-Africa-specific considerations

| Consideration | Build | Buy |
|---|---|---|
| **In-region residency** | Fully controllable (we choose `af-south-1`). | Depends on vendor hosting; **UNVERIFIED** whether the vendor runs in an SA region; may need §72 basis. |
| **ISO 20022 / PayShap** | We build the mapping. | Vendor must support ISO 20022 SA rails; **UNVERIFIED**. |
| **BA returns (BA 100/200–210/700)** | We build reporting from our data. | Vendor reporting may not match SA formats; **UNVERIFIED**. |
| **FICA/screening hooks** | We integrate bought services. | Vendor may bundle AML — assess depth. |
| **Sponsor→direct transition** | Clean ([payments-rails](./payments-rails.md) §7). | Vendor must support both models; **UNVERIFIED**. |
| **Vendor presence/support in SA** | n/a | Support timezone, local references; **UNVERIFIED** which vendors have SA deployments. |
| **Cost in ZAR & FX exposure** | Local engineering. | Vendor licence often USD — FX + escalation risk. |

---

## 6. The core-vendor market (illustrative, UNVERIFIED)

| Vendor | Category | Noted for | SA-fit concern |
|---|---|---|---|
| **Thought Machine** | Modern core (smart contracts) | Cloud-native, configurable products | Hosting/SA region; **UNVERIFIED** |
| **Temenos** | Incumbent core | Breadth, global banks | Weight/legacy; cost; **UNVERIFIED** |
| **Mambu** | SaaS core | Fast deposits/lending | SA rails/settlement fit; **UNVERIFIED** |
| **Finacle (Infosys)** | Incumbent core | Scale, global | Weight; **UNVERIFIED** |
| **10x Banking** | Modern core | Cloud-native, speed | SA presence; **UNVERIFIED** |
| **Zeta** | Modern core/stack | Modern banking stack | SA presence; **UNVERIFIED** |

> **Rule:** no vendor name above is an endorsement; each is a **placeholder to be verified via RFP**. We do **not** assume any of them runs in an SA region or supports PayShap/BA returns without evidence.

---

## 7. Recommendation *(DESIGN CHOICE)*

**Build the ledger; buy everything around it.** Concretely:

1. **Build** the ledger + posting engine + core product/account model on managed Aurora PostgreSQL ([technology-selection](../system-design/technology-selection.md) §6), following [ledger-model](../domain-model/ledger-model.md). Rationale: the ledger is our **source of truth** and must satisfy SA-specific audit, reconciliation and reporting without vendor mediation; it is also the least likely place we want unpredictable cost/lock-in.
2. **Buy** rails access (sponsor/scheme), KYC, screening, bureaus, and analytics tooling ([README](./README.md) §6).
3. **Re-evaluate Option D (hybrid)** if time-to-market pressure forces buying a *commoditised* core component (e.g. a product/pricing engine) while keeping the **ledger in-house**. This preserves control where it matters most.
4. **Keep the vendor interface swappable** via ACLs ([README](./README.md) §4) regardless of outcome.

**Why not pure Option B/C at launch:** vendor SA-fit (residency, ISO 20022, BA returns, PayShap) is **UNVERIFIED** and could become a launch blocker; a sponsored bank-in-a-box also deepens the sponsor dependency we are explicitly trying to make swappable.

**Reversibility:** this is a *reversible-leaning but costly* decision. The ACL strategy and canonical models mean we could adopt a vendor core later for *non-ledger* components without disturbing the ledger.

---

## 8. If we buy: RFP evaluation checklist *(DESIGN CHOICE)*

- [ ] Runs in a **South African region** (or provides a §72-compliant basis).
- [ ] Native **ISO 20022** and SA rail (PayShap/EFT/RTC) support.
- [ ] Produces **BA returns** (BA 100/200–210/700) or exposes data for us to.
- [ ] Open **API** for product/fee configuration and ledger read.
- [ ] **Multi-currency-ready** data model (for later).
- [ ] **Exit/portability**: can we export the ledger in a usable form?
- [ ] **Pricing model** (per-account/per-transaction) and ZAR/USD exposure.
- [ ] **SA support** and references.
- [ ] **Security posture** (secrets, tenancy, isolation).
- [ ] **Audit/reconciliation** features.

---

## 9. Open questions *(UNVERIFIED)*

1. Any modern core with a **live SA deployment** supporting PayShap/BA returns. **UNVERIFIED.**
2. TCO comparison requiring real vendor quotes. **UNVERIFIED.**
3. Whether a sponsor/bank-in-a-box package bundles an acceptable core at acceptable lock-in. **UNVERIFIED.**

---

## 10. Related reading

- [technology-selection](../system-design/technology-selection.md) §6 — the ledger store choice.
- [ledger-model](../domain-model/ledger-model.md) — what "build the ledger" means in detail.
- [payments-rails](./payments-rails.md) §7 — sponsor vs direct.
- [analytics-and-reporting](../data/analytics-and-reporting.md) — BA return production the core must support.
