# Customer Journeys — Project Umoya

**Council:** C14 Customer Success
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Support: [`support-model.md`](./support-model.md)

> **Format.** Each journey lists: **trigger → steps → data/regulatory touchpoints → failure modes → success metric → support hook**. Companion wireframe-level UI is in [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md). All timings are **ASSUMPTION** targets, not measured facts.

**Segment notation:** A = under-banked mass market · B = young urban professionals · C = gig/informal/self-employed · D = SME.

---

## 1. Onboarding / FICA / KYC

**Trigger:** prospective customer sees ad, referral, employer/partner onboarding, or agent/kiosk.

**Primary channel:** app (Android-first) → USSD/WhatsApp fallback → assisted agent.

**Steps:**
1. **Entry & consent** — customer accepts terms + **POPIA privacy notice**; explicit consent for onboarding processing (`../../research/regulatory/privacy-popia.md` §2 condition 2/6).
2. **Identity capture** — SA ID number / passport; selfie **liveness**; ID document scan or Home Affairs verification. *(Home Affairs ID-verification cost is a known industry pain point — flagged by TymeBank **[FACT]**.)*
3. **FICA CDD** — verify name/ID/address; screen against **sanctions/PEP/TFS** lists; risk-rate the customer (`../../research/regulatory/aml-fica.md` §3).
4. **EDD branch** — if high-risk/PEP, route to enhanced due diligence (manual review).
5. **Account creation** — unique account number; instant **virtual debit card** issued.
6. **Preferences** — language (11 official languages where feasible), data-light mode, notifications.
7. **First-deposit nudge** — prompt to fund (see §2).

**Data/regulatory touchpoints:** FICA (identify/verify, UBO n/a for natural persons, record-keeping); POPIA (lawful basis, **possible s60 prior-authorisation** if SA ID numbers are later linked cross-source for credit — `../../research/regulatory/privacy-popia.md` §4); consent capture.
**Failure modes:** liveness false-negative; name mismatch on ID; sanctions false-positive; low-bandwidth timeouts; unbanked customer cannot supply address proof.
**Success metric:** **Activation rate** and **Time-to-account** ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md)).
**Support hook:** "Why do you need this?" explainer; assisted onboarding via agent; resumable application.

---

## 2. First Deposit / Funding the Account

**Trigger:** account opened but not yet funded (a "registered ≠ funded" risk).

**Steps:**
1. In-app prompt offers funding options: **inbound PayShap**, **EFT/bank transfer** from an existing bank, **cash-in at partner agent/retail point**, or **employer/partner payroll** credit.
2. Confirmation + balance update; first-deposit reward/nudge (airtime/data) surfaced.
3. Fallback: USSD/WhatsApp funding instructions; agent-assisted cash-in.

**Data/regulatory touchpoints:** Payment rails (PayShap/EFT) — `../../research/regulatory/payments-nps.md`; FICA transaction monitoring begins.
**Failure modes:** customer has no bank to transfer *from*; cash-in partner too far; deposit delayed by rail; confusion about account number/alias.
**Success metric:** **First-deposit rate**, **Activation rate**.
**Support hook:** guided "fund your account" WhatsApp flow; balance/confirmation alerts.

> **Design note:** segment A often cannot fund via EFT (their money is cash or a retailer wallet), which is why **cash-in via partner network** is an MVP requirement ([`../c15-product-management/mvp-scope.md`](../c15-product-management/mvp-scope.md) MVP-6).

---

## 3. Card Issue & Activation

**Trigger:** account created → virtual card auto-issued.

**Steps:**
1. **Virtual card** live immediately: number, expiry, CVV in-app (auth-gated); usable for online/e-commerce after activation.
2. **Card activation** — set PIN, enable contactless, review default limits; biometric/PIN per POPIA biometric rules (`../../research/regulatory/privacy-popia.md` §5).
3. **Physical card** (Phase 1+) — order, delivery to address or **collection at agent/retail point**; activate on arrival.
4. **Controls** — freeze/unfreeze, set limits, lock e-commerce/abroad/international, view PIN.

**Data/regulatory touchpoints:** **PCI-DSS** (card data); scheme rules; POPIA biometric consent; fraud screening.
**Failure modes:** delivery failure (no fixed address — common in segment A); lost card; contactless declined; PIN confusion.
**Success metric:** % of accounts with an **active card and ≥1 first transaction** within 7 days; **interchange revenue per active card**.
**Support hook:** instant card freeze self-service; digital replacement card; "card not working" WhatsApp triage.

---

## 4. Payments (Send & Receive)

**Trigger:** customer needs to pay or be paid.

**Steps (outbound):**
1. Choose **PayShap** (mobile-number alias / ShapID), **EFT/RTC**, **card payment**, or **QR/merchant** (later phase).
2. Beneficiary selection (saved recipients), amount, reference; **fee preview shown before confirm** (transparency principle P3).
3. Authenticate (biometric/PIN); confirmation + real-time status.
4. Receipt + alert; saved for repeat.

**Steps (inbound):** salary/gig credit, PayShap request, EFT credit, agent cash-in.

**Data/regulatory touchpoints:** NPS/PayShap (`../../research/regulatory/payments-nps.md`); ISO 20022 messaging; **CTR at R49,999.99 / 3 days** and **STR within 15 days** for suspicious activity (`../../research/regulatory/aml-fica.md` §3.4); DebiCheck-style mandates for collections.
**Failure modes:** wrong recipient (irreversible real-time); beneficiary bank rejection; limit exceeded; delayed EFT; "money left but not arrived."
**Success metric:** payments per active per month; **primary-banking rate (primacy)**.
**Support hook:** real-time payment tracing; recall/dispute initiation; limit explanation.

---

## 5. Dispute / Fraud (Chargeback & unauthorised transaction)

**Trigger:** customer reports unauthorised/incorrect transaction or a failed purchase.

**Steps:**
1. **Report** via app (tap transaction → "report"), WhatsApp, or agent.
2. **Immediate containment** — freeze card, log case, issue provisional credit assessment.
3. **Triage** — theft/fraud vs. merchant dispute vs. service-not-received.
4. **Investigation** — gather evidence, apply scheme chargeback rules (card) or raise recall (PayShap/EFT), liaise with merchant/partner bank.
5. **Outcome** — refund/decline with reasons **in the customer's preferred language**; appeal path.
6. **Feedback loop** — fraud pattern fed to C12 (fraud) to prevent recurrence.

**Data/regulatory touchpoints:** conduct + fair treatment; **NFO** jurisdiction if unresolved (`../../research/regulatory/conduct-fais-nca.md` §6); STR if suspicion of crime; POPIA handling of case data.
**Failure modes:** slow investigation; opaque outcome; customer with no data to follow up; provisional-credit disputes.
**Success metric:** resolution time (ASSUMPTION target); **fraud loss rate** guardrail; complaint rate.
**Support hook:** dedicated fraud line; case status self-service.

---

## 6. Loan Application (post-Phase-1)

**Trigger:** pre-qualified customer applies for a **personal loan / overdraft / BNPL**.

**Steps:**
1. **Eligibility preview** — soft indicator (no commitment); clear total cost of credit shown upfront.
2. **Application** — amount, term, purpose (anti-fraud); consent for credit checks.
3. **Affordability assessment** — **NCA-required** assessment of discretionary income (typically 3 months' income proof/bank statements, adjusted for self-employed/informal) (`../../research/regulatory/conduct-fais-nca.md` §3.2).
4. **Decision** — automated (with manual review for edge cases); reason codes recorded.
5. **Contract** — pre-agreement disclosure, signature, funds disbursed.
6. **Repayment** — scheduled debit order; reminders; early-settlement option; hardship/forbearance path.

**Data/regulatory touchpoints:** **NCR registration**; **NCA s81 reckless-credit** guardrails; **POPIA s60 prior-authorisation** (credit processing likely triggered — `../../research/regulatory/privacy-popia.md` §4); debt-review handling.
**Failure modes:** affordability fail (esp. informal income); fraudulent application; debit-order failures; over-indebtedness.
**Success metric:** approval-within-app-rate; **reckless-credit rate** guardrail (0 tolerance); repayment/default by cohort.
**Support hook:** hardship/financial-difficulty line (linked to vulnerable-customer policy, [`support-model.md`](./support-model.md) §7).

---

## 7. Complaint

**Trigger:** any dissatisfaction — fees, delays, disputes, treatment, data.

**Steps:**
1. **Log** via any channel → single complaint record with reference.
2. **Acknowledge** within committed SLA; assign to tier.
3. **Investigate & resolve** — fair outcome; written reasons.
4. **Escalate** internally if unresolved; then **NFO** (free, independent, binding determinations) if still unresolved — the customer is **informed of the NFO** (`../../research/regulatory/conduct-fais-nca.md` §6).
5. **Root-cause** — feed categories back to Product/Ops (complaints as a product signal).
6. **Close** with satisfaction check.

**Data/regulatory touchpoints:** **Code of Banking Practice** (fair complaint management, inform customer of ombud); **NFO terms of reference**; POPIA if the complaint involves data.
**Failure modes:** no channel for non-app users; language barriers; missed NFO referral; complaints logged without resolution.
**Success metric:** **complaint rate per 1k**, NFO escalation rate, CSAT.
**Support hook:** see [`support-model.md`](./support-model.md) §6.

---

## 8. Closure / Offboarding

**Trigger:** customer requests account closure or we initiate closure (e.g. zero activity, breach, fraud).

**Steps:**
1. **Request** via app/WhatsApp/agent; verify identity.
2. **Exit check** — outstanding balances/loans, pending payments, debit orders, card, rewards; flag what must be settled first.
3. **Retention conversation** (customer-initiated only) — offer a fix (fee, product, support) without being pushy; respect the right to leave.
4. **Settlement** — return positive balance to a nominated account (or cash-out via partner); cancel card/limits.
5. **Data handling** — retain records per FICA (prescribed period), honour **POPIA data-subject rights** (access/deletion where lawful), issue confirmation.
6. **Post-closure** — update CRM; exit survey (reason code) to inform product.

**Data/regulatory touchpoints:** FICA record-retention (≥5 years, confirm — `../../research/regulatory/aml-fica.md` §3.3); POPIA **data-subject participation** (access/correction/deletion) (`../../research/regulatory/privacy-popia.md` §2 condition 8); NCA for loans still in force.
**Failure modes:** held-back funds; can't close because of a loan; unreachable customer; data-retention vs deletion conflict.
**Success metric:** closure completion time; voluntary vs involuntary split; reason codes.
**Support hook:** guided offboarding; DSAR reference.

---

## 9. Journey → support-tier map (summary)

| Journey | Primary channels | Tier | Key SLA (ASSUMPTION) | Reg hook |
|---|---|---|---|---|
| Onboarding/FICA | App, USSD, agent | Tier 1/2 | Same-session | FICA/POPIA |
| First deposit | App, WhatsApp, agent | Tier 1 | < 1 day | NPS |
| Card issue/activate | App, WhatsApp | Tier 1 | Immediate (virtual) | PCI-DSS |
| Payments | App, WhatsApp, agent | Tier 1 | Immediate triage | NPS/FICA |
| Dispute/fraud | App, WhatsApp, phone | Tier 2/3 | Case-based | NFO/FICA |
| Loan application | App, phone | Tier 2 | Application-dependent | NCA/NCR/POPIA |
| Complaint | All | Tier 1→3→NFO | Committed SLA | Code/NFO |
| Closure | All | Tier 2 | Days | FICA/POPIA/NCA |

> **Cross-links:** wireframes → [`../c08-design-creative/ux-flows.md`](../c08-design-creative/ux-flows.md); product lines → [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).
