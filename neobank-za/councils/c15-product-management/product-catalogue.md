# Product Catalogue — Project Umoya

**Council:** C15 Product Management
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Vision: [`product-vision-and-principles.md`](./product-vision-and-principles.md)

> **Licence dependency key:** 🟢 = available with a full banking licence + FICA/FSCA/NCR as noted · 🟡 = available but **rail/vendor dependent** · 🔴 = **not available** at launch (deferred or blocked).
> Revenue mechanics figures are **ASSUMPTIONS** unless marked **[FACT]** (carried from `../../research/`). No measured market rates are invented.

The catalogue is organised as **eight product lines**. Each entry gives: description · target segment · revenue mechanics · regulatory considerations.

---

## 1. Transactional Account ("Everyday Account")

- **Description:** A phone-first current/transactional account with a unique account number, real-time balance, in-app statements, debit order support, and PayShap/EFT in and out. Openable in minutes via app (with USSD/WhatsApp and assisted-agent fallback). Positioned as the **primary account**, not a top-up wallet.
- **Target segment:** A (primary), B, C; SME via the business variant (§7).
- **Revenue mechanics (ASSUMPTION):**
  - Low/zero monthly fee as the acquisition hook (zero-fee is commoditised — `../../research/neobank-competitors/competitive-matrix.md` §E).
  - **Interchange** on card spend (see §3/§4).
  - **Net interest margin** from the deposit float deployed into HQLA and lending (see [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md)).
  - Optional **value-added services** (airtime/electricity/grants-adjacent, bill pay) at thin margin.
- **Regulatory considerations:** Legal tender/account terms under the **Code of Banking Practice** and NFO jurisdiction (`../../research/regulatory/conduct-fais-nca.md` §5–6). **FICA** CDD at onboarding (`../../research/regulatory/aml-fica.md`). **POPIA** processing of financial data + possible **s60 prior-authorisation** exposure if SA ID numbers are linked cross-source (`../../research/regulatory/privacy-popia.md` §4). Deposit protection via **CODI (R100k)** **[FACT]**.
- **Licence dependency:** 🟢 full banking licence required to take deposits and offer the account as "business of a bank" (`../../research/regulatory/banking-licensing.md` §1).

## 2. Savings — Goals, Pockets & Vaults

- **Description:** A savings capability layered on the account, with **Pockets** (spend/save segregation, like African Bank's MyWORLD "Power Pocket"/"Savings Pocket" model **[FACT]**) and **Goals** (named targets with progress, round-ups, and auto-sweeps). Instant access plus an optional locked "Boost" goal at a higher rate.
- **Target segment:** A (emergency buffer), B (deposit goals), C (seasonal/tax smoothing).
- **Revenue mechanics (ASSUMPTION):** Savings spread = (deployed asset yield − rate paid to saver). Goals improve **deposit stickiness** → cheaper funding; the primary monetisation is the **funding benefit**, not a fee. Possible negligible break-fee on premature locked-goal withdrawal (must be disclosed and fair).
- **Regulatory considerations:** Deposit-taking (banking licence). Transparent rate disclosure per Code of Banking Practice. **CPA s14** fair-contract requirements for any fixed-term goal. No misleading "guaranteed return" claims.
- **Licence dependency:** 🟢.

## 3. Cards — Debit (and card rails)

- **Description:** A virtual-first **debit Mastercard/Visa** issued instantly at account opening (number in-app, usable for online/e-commerce immediately), with a physical card delivered (or collectable at agent/retail) for ATM/POS/contactless. Full **card controls** in-app (freeze, limits, channel toggles, e-commerce lock). See [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md) §Card controls.
- **Target segment:** A, B, C.
- **Revenue mechanics (ASSUMPTION):** **Interchange** (domestic debit interchange is capped in SA, so revenue per transaction is modest — treat as volume-driven). Card issuance/delivery fee possible but should be waived for acquisition. FX margin on card usage abroad (later phase).
- **Regulatory considerations:** **PCI-DSS** mandatory for card data (`PLAN.md` §4 gate). Scheme rules + issuer/processor contracts (🟡 vendor rail). Interchange regulation applies. PIN/biometric security and POPIA biometric handling (`../../research/regulatory/privacy-popia.md` §5).
- **Licence dependency:** 🟢 (issuing) / 🟡 (scheme sponsorship if launched before full build).

## 4. Payments (PayShap, EFT, Card, DebiCheck)

- **Description:** Real-time low-value payments via **PayShap** (mobile-number aliases/ShapID), EFT (RTC/ISO 20022), card acceptance at tills, collection mandates via **DebiCheck**-style authenticated mandates, and **QR** acceptance.
- **Target segment:** A, C, D (merchant acceptance).
- **Revenue mechanics (ASSUMPTION):** PayShap and interbank real-time rails are **low/zero-margin by design** and have **eroded Instant-EFT economics** industry-wide **[FACT]** (`../../research/neobank-competitors/competitive-matrix.md` §F5). Monetisation is indirect: **cheap P2P drives primacy and deposit float**, which funds lending. Merchant acceptance (QR/softPOS) earns **merchant discount rate (MDR)** — see §7.
- **Regulatory considerations:** NPS Act; PayShap participation is via **PayInc (formerly BankservAfrica)** on ISO 20022 **[FACT]**; **PASA→SARB PSMB transition (key milestone 11 Aug 2026)** affects rulebook dependency (`../../research/regulatory/payments-nps.md` §1, §4). Non-bank participation rules are **draft** — treat as unstable (`../../research/regulatory/payments-nps.md` §3).
- **Licence dependency:** 🟢 as a bank (clears as bank/branch); 🟡 if sponsorship model used pre-licence.

## 5. Lending — Personal Loan, Overdraft, BNPL

- **Description:**
  - **Personal loan:** fixed-term unsecured term loan with transparent all-in cost, affordability-assessed.
  - **Overdraft / "Buffer":** small revolving facility on the transactional account (a "payday bridge" with hard caps) — must avoid reckless-credit traps.
  - **BNPL / Pay-in-4:** merchant-integrated instalments for selected retail partners (later phase).
- **Target segment:** B (largest wallet), C (working capital), A (carefully).
- **Revenue mechanics (ASSUMPTION):** **Net interest margin** + initiation/service fees per NCA caps; the dominant revenue engine and the core of ARPU/LTV ([`../c07-sales-revenue/unit-economics.md`](../c07-sales-revenue/unit-economics.md)). Credit is the clearest differentiator against fee-free newcomers who lacked lending scale (`../../research/neobank-competitors/competitive-matrix.md` §F3).
- **Regulatory considerations:** **NCR registration** (mandatory above thresholds) (`../../research/regulatory/conduct-fais-nca.md` §3.1); **NCA affordability assessment** (s81, reckless credit) (§3.2–3.3); fee caps; **POPIA s60 prior-authorisation** likely triggered for credit-related processing (`../../research/regulatory/privacy-popia.md` §4). Debt-review handling required.
- **Licence dependency:** 🟢 but gated on **NCR registration** and credit-policy build (`../../research/regulatory/licensing-roadmap.md` §2.2).

## 6. Insurance & Protection Wraps

- **Description:** Embedded "protection wraps" distributed as **VAS** — e.g. funeral cover, device/cellphone insurance, retrenchment/income protection, card-usage protection. Sold as add-ons, not as an insurer ourselves.
- **Target segment:** A, C (high need, low awareness of cover).
- **Revenue mechanics (ASSUMPTION):** **Distribution commission / binder fees** from underwriting partners (bancassurance model, as Discovery/OM/Capitec do via parent/partners **[FACT]**). Recurring and high-margin, but **small-ticket** at low ARPU.
- **Regulatory considerations:** **FAIS** — distribution/advice requires an **FSP licence** (Category I for non-discretionary intermediary services) and fit-and-proper KIs/representatives (`../../research/regulatory/conduct-fais-nca.md` §2). Underwriting requires a separate **Insurance Act** licence (not planned — use partners). **FICA** obligations for life-insurance-linked products.
- **Licence dependency:** 🟡 (partner underwriting) + FSP licence for distribution.

## 7. SME & Business Banking

- **Description:** A business account for spaza/small businesses with **merchant acceptance** (softPOS/QR/card machine via partner), **invoicing/statements**, **payroll-lite**, **expense categorisation**, and **working-capital advances** (revenue-based). Designed to be sold B2B2C through partners (SME associations, payment enablers, employers, merchant networks).
- **Target segment:** D (primary), C (sole traders).
- **Revenue mechanics (ASSUMPTION):** **MDR** on acquired volume + **SaaS/subscription** for tools + **embedded working-capital** margin. The Yoco/iKhokha/Payfast model proves SME acquiring + embedded finance **[FACT]** (`../../research/neobank-competitors/payments-fintech.md`). SME ARPU is higher than consumer — key to unit economics.
- **Regulatory considerations:** Business FICA (CDD on legal persons, **beneficial ownership** tracing) (`../../research/regulatory/aml-fica.md` §3.2); merchant acquiring under **NPS/PEM framework** (draft — acquiring category, capital thresholds are **non-binding drafts**) (`../../research/regulatory/payments-nps.md` §3); NCR for business lending.
- **Licence dependency:** 🟢 + 🟡 acquiring rail.

## 8. Rewards & Engagement

- **Description:** A deliberately **light** rewards programme tied to the money behaviours we want: save (bonus rate on Goals), transact (small cashback on chosen categories), and borrow well (rate discount on on-time repayment). Reward **points convertible to airtime/data/electricity** (not mall loyalty).
- **Target segment:** B (behavioural driver), A (airtime is currency for prepaid users — a strong nudge).
- **Revenue mechanics (ASSUMPTION):** A **cost centre** funded from interchange/lending margin, not a revenue line. Its job is **retention and primacy** (RAU/MAU), which lifts LTV ([`product-metrics.md`](./product-metrics.md)). Compare FNB eBucks and Discovery Vitality as *engagement* benchmarks **[FACT]** — we intentionally do **not** try to out-reward them.
- **Regulatory considerations:** Reward T&Cs under **CPA**; no misleading "free money" claims; data-driven personalisation under **POPIA** consent conditions.
- **Licence dependency:** 🟢 (no separate licence; tied to core account).

---

## 9. Catalogue summary matrix

| # | Product line | Segment focus | Primary revenue | Licence dependency | Phase (see roadmap) |
|---|---|---|---|---|---|
| 1 | Transactional account | A/B/C | Interchange, NIM | 🟢 Bank | MVP |
| 2 | Savings (Goals/Pockets) | A/B/C | Funding spread | 🟢 Bank | MVP |
| 3 | Debit card | A/B/C | Interchange | 🟢/🟡 | MVP |
| 4 | Payments (PayShap/EFT/QR) | A/C/D | Indirect (primacy) + MDR | 🟢/🟡 | MVP→P2 |
| 5 | Lending (loan/overdraft/BNPL) | B/C/A | NIM + fees | 🟢 + NCR | P1→P3 |
| 6 | Insurance wraps | A/C | Commission | 🟡 + FSP | P2 |
| 7 | SME & Business | D/C | MDR + SaaS + credit | 🟢/🟡 | P2 |
| 8 | Rewards | B/A | Cost center (retention) | 🟢 | P1 |

**Cross-links:** scope cut → [`mvp-scope.md`](./mvp-scope.md); sequencing → [`product-roadmap.md`](./product-roadmap.md); money → [`../c07-sales-revenue/revenue-model.md`](../c07-sales-revenue/revenue-model.md); journeys → [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md).

> **UNVERIFIED / to confirm with C01:** exact NCA fee caps, current credit-provider registration threshold (commonly cited ~R500k principal or 100 agreements — **needs authoritative confirmation**, `../../research/regulatory/conduct-fais-nca.md` §8), and final non-bank payment acquiring capital thresholds (draft only).
