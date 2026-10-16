# Support Model — Project Umoya

**Council:** C14 Customer Success
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Journeys: [`customer-journeys.md`](./customer-journeys.md)

> **Rule.** Channel coverage and process are design decisions; **all SLAs, staffing ratios and volumes are ASSUMPTION placeholders** to be calibrated post-launch. We do **not** assert industry average handling times or volumes.

---

## 1. Design goals

1. **Low cost-to-serve** that still protects fair outcomes — a low-ARPU bank cannot run a voice-first contact centre ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) CTS).
2. **Self-service resolves the majority** of contacts; humans handle ambiguity, disputes, hardship and vulnerable customers.
3. **Channels match the customer**, not our convenience (WhatsApp + USSD + assisted agent, not app-only).
4. **Every complaint is a product signal** fed back to C15.
5. **Compliance embedded** (FICA/POPIA/NCA/NFO).

---

## 2. Channels

| Channel | Primary users | Best for | Cost profile | Notes |
|---|---|---|---|---|
| **In-app support (chat + FAQ + status)** | B, A-with-smartphone | Status, how-to, freeze card, report fraud, DSAR | Lowest | Default first stop; AI-assisted triage (ASSUMPTION). |
| **WhatsApp** | A, B, C | Onboarding help, payments, disputes, low-data | Low | Highest-reach messaging channel in SA; also a banking surface for peers (Absa ChatWallet **[FACT]**). |
| **USSD** | A, feature-phone | Balance, mini-statement, block card, key actions | Very low | Data-free; essential for segment A. |
| **Phone (voice)** | A, C, vulnerable customers | Complex disputes, hardship, fraud, assisted | Highest | Kept for where it matters; multi-language. |
| **Email** | B, D (SME) | Records, formal complaints, business docs | Low | SLA-bound; used for formal/regulatory correspondence. |
| **Assisted agent / partner network** | A, C | Cash-in/out issues, in-person help, onboarding | Medium | Via distribution partners ([`../c07-sales-revenue/partnerships-and-bd.md`](../c07-sales-revenue/partnerships-and-bd.md)). |

> **ASSUMPTION:** an "AI/agent-assist" first-line handles routine queries, escalating to humans; the ratio is a placeholder to be tuned on real contact-driver data.

**Language:** support available in South Africa's **11 official languages** where feasible (see [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md)); a **language routing** rule matches the customer to an appropriately skilled agent.

---

## 3. Tiering

| Tier | Handles | Skills | Escalates to |
|---|---|---|---|
| **Tier 0 — Self-service** | FAQ, status, card freeze, PIN reset, statements, DSAR self-serve | Automated | Tier 1 |
| **Tier 1 — Frontline** | Onboarding help, payments, card issues, general queries | Multilingual, product-trained | Tier 2 |
| **Tier 2 — Specialist** | Disputes, fraud, credit/hardship, SME queries | Fraud/credit/conduct-trained | Tier 3 |
| **Tier 3 — Senior/Expert** | Complex fraud rings, regulatory complaints, vulnerable customers, NFO prep | Senior specialists + compliance | Complaints Manager / NFO |
| **Complaints & Escalations** | End-to-end complaint ownership, NFO liaison, root-cause | Conduct/compliance | Captain / NFO |

---

## 4. SLAs (all values ASSUMPTION)

| Contact type | First response | Resolution target | Escalation path |
|---|---|---|---|
| Card freeze / fraud block | Immediate (self-service) | Immediate contain | Tier 2 |
| Transaction dispute | < 1 business day (ASSUMPTION) | Case-based | Tier 2 → NFO |
| Onboarding/FICA help | Same session (ASSUMPTION) | Same session | Tier 1 → 2 |
| Payments issue | Same day (ASSUMPTION) | Same day | Tier 1 → 2 |
| General query | < 1 business day | < 3 business days | Tier 1 |
| **Formal complaint** | Acknowledge per committed SLA (ASSUMPTION) | Resolve within committed period; else **refer to NFO** | Tier 3 → NFO |
| DSAR (POPIA) | Within statutory/committed period | Per POPIA + PAIA (30 days for PAIA requests) | DSAR Officer |

> **Statutory anchor:** PAIA requests are answered **within 30 days** (`../../research/regulatory/privacy-popia.md` §9). POPIA data-subject requests must be handled per the Act's conditions. NFO determinations are **binding** on member banks (`../../research/regulatory/conduct-fais-nca.md` §6).

---

## 5. Self-service & automation

- **In-app help centre** with search, guided flows and "explain this fee" content (transparency P3).
- **WhatsApp chatbot** for status (payment/dispute/card) and how-to.
- **USSD menu** for the top actions (balance, statement, block card, buy airtime).
- **Proactive notifications** (payment received, card used, fee charged) that *prevent* contacts.
- **Status trackers** for disputes, loans and DSARs (reduce "where is my…" volume).

---

## 6. Complaint handling (per the Ombud / NFO)

Umoya adopts the **Code of Banking Practice** and accepts the jurisdiction of the **National Financial Ombud Scheme (NFO)** — the amalgamation of the OBS, Credit Ombud, and long/short-term insurance ombuds — which issues **free, independent, binding determinations** (`../../research/regulatory/conduct-fais-nca.md` §5–6).

**Process:**
1. **Single intake** across all channels → complaint register with reference.
2. **Acknowledge** and set expectations (**SLA ASSUMPTION**).
3. **Investigate fairly** — gather evidence, apply law + Code + equity.
4. **Resolve with written reasons** in the customer's language where feasible.
5. **Internal escalation tiers** before external.
6. **Inform the customer of the NFO** and how to escalate (free of charge) if unresolved or if dissatisfied.
7. **Root-cause & feedback** to C15/C02/C12; track complaint categories as a KPI.
8. **Record-keeping** to evidence fair treatment for regulatory review.

> **Membership trigger:** per research, banks that are **BASA members are automatically subject to the Ombud's jurisdiction** (`../../research/regulatory/conduct-fais-nca.md` §5). A neobank should **join the NFO** and align internal handling to its terms of reference.

---

## 7. Vulnerable-customer handling

Vulnerable customers include (working definitions): elderly, disabled, low-literacy, financially distressed/over-indebted, victims of fraud/abuse, bereaved, and those in language/connectivity hardship.

**Policy essentials:**
- **Identify & flag** vulnerability (agent prompts, self-declaration, behavioural signals) with **consent and care** (POPIA — special/sensitive data handling).
- **Adjust treatment** — extra time, no rushed decisions, plain-language and voice support, **third-party/authorised-representative** support.
- **Hardship/forbearance** for credit customers (payment arrangements) linked to NCA debt-review and responsible-lending duties (`../../research/regulatory/conduct-fais-nca.md` §3.3).
- **Accessibility support** — assistive channels, screen-reader-compatible flows, large-text, non-app options (see [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md)).
- **Bereavement/fraud-victim** fast tracks with empathetic, minimal-friction handling.
- **Staff training & QA** on vulnerability; measure handling per guardrail metric ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) §4).

> **ASSUMPTION:** exact vulnerable-customer definitions/criteria to be finalised with C01 against the Code of Banking Practice and any FSCA/COFI conduct guidance.

---

## 8. POPIA data-subject (DSAR) handling

POPIA grants data-subject rights (access, correction, deletion) — condition 8 "data subject participation" (`../../research/regulatory/privacy-popia.md` §2). Handling:

1. **Intake** via any channel → routed to the **DSAR Officer** (deputising for the registered **Information Officer**, `../../research/regulatory/privacy-popia.md` §3).
2. **Verify identity** (without over-collecting).
3. **Fulfil** within statutory/committed periods: provide access, correct, or delete where lawful — **respecting FICA record-retention obligations** that override deletion (a conflict to be resolved with C01).
4. **PAIA requests** (access to records) answered **within 30 days**; the bank maintains a **PAIA Manual** and files the **annual PAIA report (portal 1 Apr–30 Jun)** (`../../research/regulatory/privacy-popia.md` §9).
5. **Log & report** DSARs and any **security compromises** (breach notification to the Regulator and affected subjects) (`../../research/regulatory/privacy-popia.md` §7).
6. **Preference & consent management** — honour marketing opt-outs, consent withdrawals.

---

## 9. Governance, QA & metrics

| Metric | Owner | Cadence |
|---|---|---|
| CSAT | Support Ops | Weekly |
| NPS | Captain | Quarterly |
| Complaint rate /1k + NFO escalations | Complaints Manager | Monthly |
| First-response & resolution by type | Support Ops | Weekly |
| Self-service containment rate | Support Ops | Weekly |
| Cost-to-serve (CTS) | Captain + C02 | Monthly |
| DSAR SLA compliance | DSAR Officer | Monthly |
| Vulnerable-customer handling audit | Vulnerable Lead | Quarterly |

**Quality assurance:** sampling + scoring of interactions, complaint root-cause reviews, and a **monthly fair-outcomes forum** with C15/C01/C12.

> **Cross-links:** metrics definitions → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md); conduct rules → [`../../research/regulatory/conduct-fais-nca.md`](../../research/regulatory/conduct-fais-nca.md); privacy → [`../../research/regulatory/privacy-popia.md`](../../research/regulatory/privacy-popia.md); design accessibility → [`../c08-design-creative/design-principles.md`](../c08-design-creative/design-principles.md).
