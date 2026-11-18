# UX Flows — Project Umoya

**Council:** C08 Design & Creative
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Principles: [`design-principles.md`](./design-principles.md) · Journeys: [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md)

> **Format.** These are **wireframe-description-level** flows (layout intent, hierarchy, states, microcopy intent) — not pixel specs. Each flow notes the **channel variant** (App / USSD / WhatsApp) and the **trust/regulatory hook**. Companion product journeys: [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md).

**Legend:** `[S]` screen · `◦` element · `⚑` trust/compliance hook · `↺` error/edge state · `⇄` alternate channel.

---

## 1. Onboarding / FICA / KYC

**Goal:** FICA-verified account + virtual card with minimum friction and maximum trust.

| Step | Screen (`[S]`) | Key elements (`◦`) | Trust/compliance (`⚑`) |
|---|---|---|---|
| 1 | **Welcome / value** | Logo, one-line promise, "Licensed bank", "Deposits protected up to R100,000 (CODI)", primary CTA *Open an account* | ⚑ licence + CODI + NFO link |
| 2 | **Language & consent** | Language selector (**11 official languages**), data-low toggle, POPIA privacy notice summary + link, consent toggles | ⚑ POPIA notice + consent |
| 3 | **Mobile number & OTP** | Phone field, OTP entry, resend | ⇄ USSD/WhatsApp start |
| 4 | **Identity** | ID number / passport; capture ID doc; selfie **liveness**; "why we ask" microcopy | ⚑ FICA CDD; biometric consent |
| 5 | **Details** | Name, DOB (prefilled if possible), contact/address; minimal fields | ⚑ address verification |
| 6 | **Processing** | Progress indicator ("Verifying…"); graceful timeout handling | ↺ retry/resumable |
| 7 | **Screening** (mostly invisible) | Sanctions/PEP/TFS check; if flagged → **manual/EDD** path | ⚑ FICA §3 |
| 8 | **Success + card** | "Account ready", account number, **virtual card issued**, *Add money* CTA | ⚑ |
| 9 | **Add money** | Funding options: PayShap/EFT, cash-in at partner, employer payroll | ↺ if no source |

**Edge states (`↺`):** liveness fail → retry with guidance + assisted option; ID mismatch → clarify/named reasons; low bandwidth → save-and-resume; unbanked → route to **agent-assisted** cash-in-first.
**Success:** Activation rate & Time-to-account ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md)).

---

## 2. Home / Dashboard

**Goal:** answer "how much do I have, and what should I do next?" in one glance.

```
[S] Home
 ┌───────────────────────────────┐
 │  Good morning, Nomsa           │   ◦ personalised greeting (language-aware)
 │  ● R 2 340,55   Available      │   ◦ WORKING BALANCE first (biggest element)
 │  ○ R 500,00     In Goals       │   ◦ segregated Pockets/Goals balance
 ├───────────────────────────────┤
 │  [ Pay ]  [ Save ]  [ Add ]  [ Card ]   ◦ 4 primary actions (thumb reach)
 ├───────────────────────────────┤
 │  Recent activity               │   ◦ last 3-5 transactions, clear +/-
 │   • PayShap to Sipho  −R120,00 │
 │   • Salary credit     +R4 500  │
 │   • Goal top-up       −R200,00 │
 ├───────────────────────────────┤
 │  [Goals progress ring]         │   ◦ savings nudge
 │  [Reward nudge: +R5 airtime]   │   ◦ rewards-lite
 └───────────────────────────────┘
```
**States:** empty (new user → "Add money" hero), low-balance (no shaming), offline (cached balance + "last updated"), dormant (win-back nudge).
**Trust (`⚑`):** balance is always the truth; fee info one tap away; security entry in header.
**USSD variant (`⇄`):** `*120*XXX#` → menu: 1 Balance, 2 Mini-statement, 3 Pay, 4 Buy airtime, 5 Block card.

---

## 3. Pay

**Goal:** send money in ≤3 taps with fee shown before commitment.

```
[S] Pay → choose method
   ◦ PayShap (to phone number / ShapID)
   ◦ Own accounts / beneficiaries
   ◦ EFT / bank transfer
   ◦ QR / merchant (later phase)

[S] Amount & recipient
   ◦ Recipient (recent list first), amount, reference
   ◦ Fee preview line: "Fee: R X,XX"   ⚑ fee-before-commit
   ◦ [Confirm]

[S] Authenticate
   ◦ biometric / PIN
   ◦ [Pay R120,00]

[S] Result
   ◦ "Paid" / "Payment scheduled"; share receipt; save recipient
   ◦ status tracker if delayed   ↺
```
**Edge states (`↺`):** insufficient funds (offer Goal withdrawal / no dark upsell), beneficiary bank rejection, limit exceeded (explain), wrong number (warn before send — real-time is irreversible).
**Trust (`⚑`):** explicit irreversibility warning for real-time PayShap; scam warning on new recipients.
**WhatsApp variant (`⇄`):** "Pay R120 to 082xxxxxxx" style command flow for low-data users.

---

## 4. Save (Goals & Pockets)

**Goal:** make saving visible, social and habitual.

```
[S] Save (Goals)
 ┌───────────────────────────┐
 │  My goals                  │
 │  ● Emergency   R1 200/5 000│  ◦ progress ring
 │  ● School fees R  400/2 000│
 │  [+ New goal]              │
 ├───────────────────────────┤
 │  Round-ups: ON  (edit)     │  ◦ auto-save behaviour
 │  Auto-sweep: R100/week     │
 └───────────────────────────┘

[S] New goal
   ◦ name, target amount, target date
   ◦ choose: instant-access  OR  Boost (locked, higher rate)   ⚑ rate disclosed
   ◦ set auto-top-up

[S] Goal detail
   ◦ balance, progress, history, add money / withdraw
```
**Trust (`⚑`):** interest rate and any withdrawal conditions shown plainly; locked "Boost" clearly flagged with the trade-off.
**Reward hook:** saving nudges convert to airtime/data ([`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md) §8).

---

## 5. Borrow (post-Phase-1)

**Goal:** fair, transparent, affordability-assessed credit — never a trap.

```
[S] Borrow — pre-qualify
   ◦ soft indicator only ("You could access up to R…")
   ◦ total cost of credit shown up front   ⚑ NCA transparency
   ◦ [Continue]  (no pressure; exit easy)

[S] Apply
   ◦ amount, term, purpose
   ◦ consent for credit check   ⚑ POPIA/NCA

[S] Affordability (NCA)
   ◦ income capture (payslip/bank statement or informal-income method)   ⚑ NCA s81
   ◦ expenses summary
   ◦ result: approved / adjust amount / decline (reason + alternatives)

[S] Contract
   ◦ pre-agreement statement + T&Cs (plain language)   ⚑ NCA disclosure
   ◦ e-signature; choose repayment date
   ◦ [Accept & get funds]

[S] Manage loan
   ◦ balance, next instalment, remaining term
   ◦ [Pay early]  [I'm struggling → hardship support]   ⚑ vulnerable-customer path
```
**Edge states (`↺`):** affordability fail → offer smaller amount / savings goal instead (never push); fraudulent application → flag; repayment difficulty → **forbearance**, not penalty-first ([`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md) §7).

---

## 6. Card Controls

**Goal:** give the customer total, instant control over their card.

```
[S] Card
 ┌───────────────────────────┐
 │  ◐ Virtual debit card      │   ◦ card visual (masked number)
 │  •••• 4821                 │
 │  [Reveal details]          │   ⚑ auth-gated (biometric/PIN)
 ├───────────────────────────┤
 │  Freeze card      [ ON/OFF ]│  ◦ instant
 │  Contactless      [ ON/OFF ]│
 │  Online payments  [ ON/OFF ]│
 │  Use abroad       [ ON/OFF ]│
 │  ATM withdrawals  [ ON/OFF ]│
 │  Spending limit   [ R… ]    │
 ├───────────────────────────┤
 │  [Set/Change PIN] [Order physical card] │
 │  [Report lost/stolen → freeze + reissue]│  ⚑ fraud path
 └───────────────────────────┘
```
**Edge states (`↺`):** delivery unavailable (no fixed address → **collect at agent**), lost card → immediate freeze + digital reissue, declined transaction → explain why.
**Trust (`⚑`):** "we never ask for your PIN/OTP" reminder; free fraud-report path.

---

## 7. Support

**Goal:** resolve without friction; escalate humanly; comply with conduct/POPIA.

```
[S] Support (from anywhere)
   ◦ Search help / FAQ
   ◦ Top tasks: "Report a problem", "Dispute a transaction", "Block my card",
                "Update details", "Privacy & my data (DSAR)"
   ◦ [Chat in app]  [Continue on WhatsApp]  [Call]  [USSD help]
   ◦ Status trackers: open disputes / complaints / DSARs   ⚑ transparency
```
**Flow A — Dispute:** tap transaction → "report" → triage questions → provisional outcome messaging → case tracker → appeal path → **NFO escalation** info if unresolved. `⚑`
**Flow B — Complaint:** intake on any channel → reference → acknowledge → resolve with reasons → **inform customer of free NFO escalation**. `⚑`
**Flow C — DSAR (POPIA):** "Privacy & my data" → request access/correction/deletion → identity verify → routed to DSAR Officer → SLA tracker. `⚑`
**Flow D — Vulnerable customer:** distress signals → compassionate script → hardship/forbearance → third-party/authorised-representative support. `⚑`
**USSD/WhatsApp (`⇄`):** core support (block card, status) available without the app.

---

## 8. Cross-flow consistency rules

- **Money header** on every money screen (balance + fee context).
- **Confirm-with-fee** pattern reused for every payment/charge.
- **Status tracker** pattern reused for disputes, loans, DSARs.
- **Human fallback** (WhatsApp/phone/agent) reachable from every stuck state.
- **Language** carried across all screens; changing language never loses state.
- **USSD/WhatsApp parity** for the core jobs: balance, mini-statement, pay, save, block card.

> **Cross-links:** journeys → [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md); product lines → [`../c15-product-management/product-catalogue.md`](../c15-product-management/product-catalogue.md).
