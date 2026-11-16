# Banking Licensing (South Africa)

**As-of (access) date:** 2026-10-16 · See [`README.md`](./README.md) for the evidence-classification legend and [`sources.md`](./sources.md) for `[S#]` references.

---

## 1. What triggers a banking licence

The **"business of a bank"** is defined in the Banks Act 94 of 1990 to include *soliciting or advertising for, or the acceptance of, deposits from the general public as a regular feature of an institution's business*. Conducting the business of a bank in South Africa without being registered by the Prudential Authority (PA) is a **criminal offence**. **[STATUTE]** `[S1][S3]`

Consequences for a neobank:
- If you **hold float / customer balances** and can repay them on demand, you are almost certainly "accepting deposits" and need a banking licence **unless** you fall within a limited exemption (e.g. the draft non-bank payment exemption — see [`payments-nps.md`](./payments-nps.md)).
- The **use of the word "bank"** in a business name is restricted; it requires written authorisation from the PA. **[STATUTE]** `[S1]`

---

## 2. Licensing routes compared

| Route | Governing law | Who owns it | Minimum capital | Notes |
|---|---|---|---|---|
| **Full (commercial) bank** | Banks Act 94 of 1990 | Shareholders (public company) | **R250 million** `[S1]` | Must be a **public company** under the Companies Act 71 of 2008 `[S1]` |
| **Mutual bank** | Mutual Banks Act 124 of 1993 | Depositors as members | **R10 million** `[S1]` | Not required to be a Companies Act company `[S1]` |
| **Co-operative bank** | Co-operative Banks Act 40 of 2007 | Members sharing a common bond | *Set by PA; needs authoritative confirmation* `[S1]` | "Common bond" membership (common employer, community, etc.) `[S1]` |
| **Co-operative financial institution (CFI)** | Co-operative Banks Act 40 of 2007 | Members | Lower tier, restricted scope | "Financial co-operative / credit union / SACCO" `[S1]` |
| **Branch of a foreign bank** | Banks Act s18A | Foreign parent | Same prudential standards as local banks `[S1]` | Requires prior written authorisation of the Registrar `[S3]` |
| **Foreign-owned local subsidiary** | Banks Act s18A | Foreign parent | Same as domestic banks `[S1]` | Subject to identical requirements `[S1]` |
| **Representative office** | Banks Act s34 | Foreign bank | n/a | **Cannot conduct the business of a bank** — market/relationship office only `[S4]` |

> **R250m / R10m** figures are from the PA's own licensing publication and are the commonly applied minimums `[S1][S2]`. They are **minimum capital**, distinct from the ongoing capital-adequacy ratio (see §5).

---

## 3. The application process (Banks Act / Mutual Banks Act)

The PA's published process (`[S1]`, **[REG-GUIDE]**):

1. **Optional pre-application meeting** — discuss business plan, process, expected format. *Not mandatory*; an applicant may submit at any time `[S1]`.
2. **Submission of application** — in writing, **signed by the chairperson or CEO**. For a commercial bank: **section 12** of the Banks Act. For a mutual bank: **section 10** of the Mutual Banks Act `[S1]`.
3. **PA review** — includes **consultation with the FSCA** to obtain its **concurrence** before the licence is granted (dual-approval "Twin Peaks" hook) `[S1]`.
4. **Authorisation** → then **registration**: within the **12 months** following authorisation, apply for registration as a bank (**s16**) or mutual bank (**s13**) `[S1]`.

**Typical timeline:** the PA states the overall licensing process "could take between **six to nine months**"; delays arise from incomplete submissions, non-compliance, or slow responses. **[REG-GUIDE — guidance, not statutory deadline]** `[S1]`. *Actual de-novo timelines are frequently longer; treat 6–9 months as best case — needs authoritative confirmation for a specific applicant.*

**Foreign applicants:** apply under **s18A** to establish a locally incorporated subsidiary or a branch `[S1]`. Representative offices are governed by dedicated regulations under s90 `[S4]`.

---

## 4. Fit-and-proper and ownership

- **Significant owners** (those able to control or materially influence the bank) must demonstrate to the PA that they are **fit and proper**, that the shareholding is **not contrary to the public interest**, and that they have **capacity to contribute additional capital** if required. **[REG-GUIDE]** `[S1]`
- **15% threshold:** no person may acquire shares amounting to **more than 15%** of a bank (or its controlling company) without PA/Minister of Finance permission. **[STATUTE — FSRA + Banks Act s37]** `[S1]`
- **Controlling company:** only a bank or an PA-approved public company may exercise control over a bank, and such person must be registered as a **controlling company** (**Banks Act s42**). **[STATUTE]** `[S1]`
- **Directors / executives** must meet the "fit and proper" standards set in the Banks Act and Regulations (competence, integrity, no disqualifying conduct). **[REG]** `[S1][S6]`

The PA will assess (per `[S1]`):
- **Public interest** — prudent conduct, no undesirable business methods.
- **Financial resources** — adequacy of start-up capital and liquidity buffer, case-by-case based on business plan.
- **Governance** — board composition and functioning per Banks Act/Regulations.
- **Risk management, internal controls, and information/accounting systems**.
- (For foreign applicants) **supervision by the home supervisor**.

---

## 5. Prudential requirements once licensed

| Requirement | Value | Source / weight |
|---|---|---|
| Minimum **total capital adequacy ratio (CAR)** | **at least 11.5%** (Banks Act Directive 6 of 2017) | `[S1]` **[REG-GUIDE]** |
| Minimum **leverage ratio** | **at least 4%** | `[S1]` **[REG-GUIDE]** |
| **LCR / NSFR** (liquidity) | Basel III liquidity standards; HQLA held in South Africa (Banks Act s72) | `[S5][S6]` **[STATUTE/REG]** |
| Greater of minimum capital or higher CAR in formative years | PA may impose a **higher CAR** for newly established banks | `[S1]` **[REG-GUIDE]** |
| Funding profile | Not reliant on narrow funding sources; buffer of high-quality unencumbered assets | `[S1]` |

**Basel III post-crisis reforms** (revised credit-risk SA/IRB approaches, operational risk, leverage, CVA, market risk, output floor) were **implemented by the PA with effect from 1 July 2025** `[S5]`. A new entrant must therefore build against the **post-2025 framework**, not legacy rules. **[REG]** `[S5][S6]`

Large-exposure limits and credit-committee governance requirements were updated by **Directive D14 of 2025** `[S6 — secondary; verify directive text]`.

---

## 6. Foreign-exchange and cross-border overlay (see also `conduct-fais-nca.md`)

A bank that wishes to deal in foreign exchange must be an **Authorised Dealer (AD)**; a non-bank (e.g. bureau de change, remittance/money-transfer operator) may seek appointment as an **Authorised Dealer with Limited Authority (ADLA)**. **[REG-GUIDE]** `[S51][S52]`

- ADLAs are authorised only for **designated** transactions (travel allowances, specific limited-scope flows) `[S52]`.
- Applications go to the SARB **Financial Surveillance Department (FinSurv)**, completed on the prescribed form with supporting documents (e.g. CoR14.1 Notice of Incorporation) `[S51]`.
- ADLAs are "agents" of FinSurv and must enforce exchange-control rules, verify client identity, and report transactions `[S51]`.
- Field-agent rules for ADLAs were amended (Exchange Control Circular 19/2022) `[S74]`.
- **Limits and categories change periodically** (e.g. single discretionary allowance adjustments) — *needs authoritative confirmation against the current Manual* `[S51][S52]`.

Forex dealing is **not** something to switch on post-launch without AD/ADLA status; it is a separate gate.

---

## 7. Practical checklist for a neobank applicant

- [ ] Incorporate as a **public company** (`[S1]`) and register at CIPC.
- [ ] Design the **capital plan** to at least R250m (bank) / R10m (mutual) plus buffer `[S1]`.
- [ ] Draft **business plan, governance framework, risk & compliance framework, IT/accounting systems description** `[S1]`.
- [ ] Populate the **board and Key Individuals** with fit-and-proper persons `[S1]`.
- [ ] Prepare a **funding & liquidity plan** (HQLA, LCR/NSFR, not reliant on narrow funding) `[S1][S5]`.
- [ ] Apply for **s12 authorisation**, then **s16 registration** within 12 months `[S1]`.
- [ ] Stand up **BA-return** reporting (BA 100 balance sheet, BA 200/210 credit, BA 700 capital & leverage) `[S68][S69]`.
- [ ] Obtain any needed **FSCA** conduct licence and **NCR** credit registration in parallel (see [`conduct-fais-nca.md`](./conduct-fais-nca.md)).
- [ ] Register FIC accountable institution + RMCP (see [`aml-fica.md`](./aml-fica.md)).
- [ ] Register Information Officer + POPIA/PAIA programme (see [`privacy-popia.md`](./privacy-popia.md)).

---

## 8. Uncertainties / verification needed

- Minimum capital for **co-operative banks/CFIs** and their capital adequacy rules `[S1]` — **needs authoritative confirmation** (PA co-operative banks guidance).
- Whether a **"restricted authorised dealer"** variant applies to the applicant's model `[S52]`.
- The PA's **current** de-novo licensing timeline and any queue/backlog — confirm directly with the PA `[S1]`.
