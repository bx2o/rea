# Payments & the National Payment System (NPS)

**As-of (access) date:** 2026-10-16 · See [`README.md`](./README.md) for the evidence legend and [`sources.md`](./sources.md) for `[S#]`.

> **Headline for a neobank:** the NPS is being opened to **non-bank** participants via an activity-based authorisation framework, but as at 2026-10 the enabling instruments are still **draft** (drafted Mar 2025, revised Nov 2025). Do not assume a non-bank payments licence is available today; plan for the legacy model (bank sponsorship / designation) with a migration path.

---

## 1. Legal architecture

- **Primary statute:** National Payment System Act 78 of 1998 (NPS Act). It gives the SARB power to **manage, administer, operate, regulate and supervise** payment, clearing and settlement systems. **[STATUTE]** `[S7][S9]`
- **Who may clear:** no person may clear payment instructions unless it is a Reserve Bank settlement-system participant, or a **bank, mutual bank, designated clearing-system participant, co-operative bank, or branch of a foreign institution** allowed to clear under s4(2)(d)(i). **[STATUTE — NPS Act s4]** `[S9]`
- **Designation:** the SARB may designate a **settlement system** as a designated settlement system under **s4A(4)** if in the interest of integrity, effectiveness, efficiency or security. **[STATUTE]** `[S8]`
- **Oversight:** the NPS Act empowers the SARB to **designate** payment system operators and systemically important payment systems `[S7][S8]`.

### Governance shift (PASA → SARB)
The **Payments Association of South Africa (PASA)** has historically acted as the **Payment System Management Body (PSMB)**, setting clearing/settlement rules. The SARB is **withdrawing PASA's recognition** as PSMB; affected functions and personnel transition to the SARB, with a key milestone of **11 August 2026**. **[REG-GUIDE / transition]** `[S15][S16]`. A neobank's clearing-house rulebook dependencies will therefore migrate toward SARB-administered rules — track this closely.

---

## 2. The modernisation agenda (non-binding until finalised)

| Instrument | Status | Weight | Ref |
|---|---|---|---|
| **Vision 2025** (NPS Framework & Strategy, 2018) | Published strategy | [CONSULT/strategy] | `[S13][S18]` |
| **Payments Ecosystem Modernisation (PEM) Programme** | Active programme | [CONSULT/strategy] | `[S17]` |
| **Draft Exemption Notice + Draft Directive on Payment Activities** | Draft (Mar 2025; revised Nov 2025) | **[CONSULT — non-binding]** | `[S10][S11]` |
| **Vision 2030+** consultation paper | Published Feb 2026, comment closed 31 Mar 2026 | [CONSULT — non-binding] | `[S7][S11]` |
| **NPS Bill** (replacing 1998 Act) | Recommended by 2018 Policy Paper; pending | [CONSULT] | `[S18]` |

**PEM core ideas** `[S11][S17]`:
- A **National Payment Utility (NPU)** — central, low-cost, interoperable infrastructure. In **November 2025 the SARB acquired a 50% stake in PayInc (formerly BankservAfrica)** `[S11]`.
- Three foundations: **digital identity**, **digital payments** (extending PayShap), and **data-sharing infrastructure**.
- A **QR+ Standard** to fix QR-code fragmentation.

---

## 3. The draft Non-Bank Payment Service Provider framework (Nov 2025)

> **All figures below are from DRAFT instruments and are subject to change.** They are **[CONSULT — non-binding]**. Verify against the final Exemption Notice and Directive before relying on any number. `[S10][S11]`

The **Draft Directive on Payment Activities** moves to **activity-based regulation** — regulating the *activity*, not the *entity* — so banks and non-banks face the same rules for the same activity `[S10][S11]`. It organises payment activities into **seven categories**:

| Cat | Activity | Tier / capital (DRAFT) | Notes |
|---|---|---|---|
| **1** | **Issuing e-money & payment instruments** | Tier 1 (avg monthly > R5m): **R8m** capital; Tier 2 (< R5m): **R5m** | Tier 1 must operate in interoperable systems; 100% liquidity buffer against float; no lending/investing of customer funds `[S11]` |
| **2** | **Acquiring** (merchant acquiring) | **R3m** (no tiers) | Acquirers designated by SARB `[S11]` |
| **3** | **Payment execution** (clearing, settlement, payment initiation) | Payment Initiation Service Providers: **R2m** | Non-bank clearing requires SARB designation as clearing-system participant `[S11]` |
| **4** | **Third-Party Payment Providers (TPPPs)** | Tier 1 (> R5m/mo): **R2m**; Tier 2 (< R5m/mo): **R500k** | Accept money from multiple payers for beneficiaries `[S11]` |
| **5** | **Schemes** | n/a | Scheme managers must segregate scheme from processing/clearing and not bundle fees `[S11]` |
| **6** | **Money remittance** | Tiered; transaction limits: Tier 1 **R5,000/day, R50,000/mo**; Tier 2 **R2,500/day, R25,000/mo** | Prices to be confirmed in final instrument `[S11]` |
| **7** | **Payment accounts** | n/a | Transaction-account authority stays with the **PA / NCR**; some Directive requirements apply to transfers `[S11]` |

**Draft Prudential conditions** (proposed) `[S11]`:
- Activity-based **minimum capital** (as above).
- **Segregate client funds** in trust accounts at approved banks.
- Maintain a **100% liquidity buffer** against the e-money float.
- **Barred from lending or investing** customer balances.
- Directors subject to **fit-and-proper** and AML/CFT obligations.

**Draft Exemption Notice** carves certain **payment activities** out of the Banks Act "business of a bank" definition **for payment purposes only** — credit/lending remains the business of a bank. Non-banks operating exempted activities must still comply with the NPS Act, PSMB clearing rules and scheme/settlement requirements `[S11]`.

**Transition (draft):** existing operators would **reapply** within 3–6 months of publication, depending on activity; new entrants apply from publication. Smaller operators may use **sponsorship arrangements**; closed-loop systems register with the SARB `[S11]`.

> **Bottom line for planning:** build to be *sponsorable* today and *licensable* tomorrow. Treat every R-figure above as a placeholder.

---

## 4. Real-time payments & PayShap

- **PayShap** (launched **13 March 2023**) is the SARB/PSMB low-value **real-time** retail rail, an industry-led product of the **Rapid Payments Programme (RPP)** under Vision 2025 `[S13]`.
- Operated by **PayInc (formerly BankservAfrica)**; built on **ISO 20022** `[S13]`.
- Uses **mobile-number aliases** (ShapID); the per-transaction limit was later raised to **R50,000** `[S12]` (*confirm current limit*).
- PayShap is the intended rail for future **non-bank** participation `[S11][S13]`.

**Cross-border:** SADC-RTGS (high value), **TCIB** (low-value SADC retail clearing), the SARB draft **cross-border retail e-commerce framework** (resident individuals up to **R50,000/transaction** via Authorised Dealers), and continental/global links **PAPSS** and **BIS Project Nexus** `[S11]`.

---

## 5. ISO 20022 migration

South Africa adopted the **ISO 20022** financial messaging standard as a milestone in NPS modernisation, providing richer, better-quality payment data `[S14]`. **[REG-GUIDE]** `[S14]`

**Implication:** a new bank's core payment messaging, clearing and settlement interfaces should target ISO 20022 natively (PayShap and the modernised rails already use it) `[S13][S14]`.

---

## 6. Open banking / Open Finance & the regulatory sandbox

### 6.1 Current position — no statutory open-banking mandate
- South Africa has **no statutory open-banking or "right to data" mandate** comparable to the UK/EU. Data-sharing and payment initiation operate today through **commercial bank–TPPP partnerships** and bank-specific APIs (e.g. Capitec Pay), not a regulated standard `[S11 — secondary]`.
- An **Open Finance** framework is under development via the **Intergovernmental Fintech Working Group (IFWG)**; it would require financial institutions to provide secure **API access** to consumer data `[S61]`. Status: **in development — non-binding** `[S61]`. **[CONSULT]**
- The SARB has published research (Working Paper **WP/26/07**, Mar 2026) on **open banking and financial inclusion**, signalling policy attention but not a rule `[S61]`.
- PEM names **data-sharing infrastructure** as one of its three foundations `[S11][S17]` — so open finance is coming, but slowly and via policy channels.

**Implication:** design the neobank's API/consent architecture to be **regulator-ready** (consent capture, scoped data sharing, audit trail), because open-finance obligations are likely to be imposed on banks before a final framework exists — track the IFWG `[S61]`.

### 6.2 Regulatory sandbox (IFWG)
- The **IFWG Regulatory Sandbox** was established **1 April 2020** as South Africa's first formal, cohort-based sandbox; the inaugural cohort admitted seven firms under a six-month testing framework with participating lead regulators `[S62][S63]`.
- The **IFWG Innovation Hub** also offers a non-sandbox engagement channel; the sandbox provides a **controlled, live environment** for innovators to test products/services that push the boundaries of existing regulation, under regulator supervision `[S62]`.
- Eligibility themes (per IFWG): the product/service must be intended for the SA market, **not clearly fit / challenge the existing framework**, be **beneficial to consumers or the market**, and be **significantly different** from other offerings `[S62 — secondary]`.
- A related **FSCA** and **SARB** innovation/sandbox posture exists; the IFWG is the cross-regulator umbrella `[S62]`.

> **For a neobank:** the IFWG sandbox is a useful **pre-licence de-risking path** for novel features (e.g. digital onboarding, AI monitoring, crypto flows) — but it is **not a licence** and does not override the need for Banking/FSP/FICA permission `[S62]`.

---

## 7. What a neobank must concretely do on the payments side

- [ ] Decide **bank vs non-bank**: if the entity will hold float and be a bank, it clears as a bank/branch; if non-bank, plan for **sponsorship** now, **authorisation** when the framework is final `[S9][S11]`.
- [ ] Open a **settlement account** at the SARB (if directly participating) or contract a **sponsoring bank** `[S9]`.
- [ ] Adopt the **clearing-house rulebook** applicable to the relevant payment stream (rules currently administered via PSMB; transitioning to SARB) `[S15][S16]`.
- [ ] Build **ISO 20022** message handling and (if applicable) **PayShap** participation `[S13][S14]`.
- [ ] Implement **DebiCheck**-style authenticated mandates for collections as required by the rules `[S11]`.
- [ ] Track the **final** Exemption Notice/Directive and the **NPS Bill** `[S10][S18]`.

---

## 8. Uncertainties / verification needed

- Final **category count** (7 in the Nov 2025 draft vs ~8 in Mar 2025) and final capital/tier figures — **needs authoritative confirmation** `[S10][S11]`.
- Effective date of the authorisation framework and the reapplication windows `[S10]`.
- Current **PayShap transaction limits** and any non-bank participation rules `[S12]`.
- PASA/PSMB transition completion date and the interim rulebook position `[S15][S16]`.
- Whether/when an **Open Finance** framework becomes binding, and the IFWG sandbox's current **cohort intake windows** `[S61][S62]`.
