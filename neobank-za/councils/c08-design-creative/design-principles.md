# Design Principles — Project Umoya

**Council:** C08 Design & Creative
**As-of:** 2026-10-16 · Parent: [`README.md`](./README.md) · Flows: [`ux-flows.md`](./ux-flows.md)

> **Evidence note.** Standards (WCAG, POPIA, language list) are cited. Behavioural assertions are **ASSUMPTIONs**. No measured usability metrics are invented.

---

## 1. Foundational principles

| # | Principle | Design implication |
|---|---|---|
| D1 | **Lowest-common-denominator by design** | Every core flow must work on an entry-level Android device over 2G/3G with limited data and intermittent power. |
| D2 | **One job per screen** | Reduce cognitive load for low-digital-literacy users; clear primary action. |
| D3 | **Show the money, always** | Balance, fees and status are never more than one tap away. |
| D4 | **Say it plainly, in their language** | Plain-language copy; 11 official languages where feasible; no jargon. |
| D5 | **Trust surface where it matters** | Licence status, CODI protection, fee previews, privacy notices and the NFO escalation path are visible, not buried. |
| D6 | **Multiple doors, one experience** | App, USSD, WhatsApp and assisted-agent channels deliver the same core jobs coherently. |
| D7 | **Accessible by construction** | WCAG 2.2 AA; assistive tech and non-visual paths for core jobs. |
| D8 | **Recoverable, not punishing** | Errors explain cause and next step; no dead-ends; resumable applications. |
| D9 | **Consistent system** | One design system/tokens across surfaces; consistency = comprehension. |
| D10 | **Dignity in every frame** | Copy and imagery respect the customer; never patronising or fear-based. |

---

## 2. Accessibility (WCAG)

**Target: WCAG 2.2 Level AA** as a **launch requirement** (not a fast-follow). Rationale: a bank for the under-served cannot exclude customers with disabilities, low vision, limited dexterity or low literacy.

| Area | Requirement |
|---|---|
| **Perceivable** | Sufficient colour contrast (AA); text alternatives for icons/images; captions/transcripts for any audio/video; scalable text without loss. |
| **Operable** | Full keyboard/dpad and screen-reader navigation; large touch targets; no reliance on colour alone; no time-limited traps. |
| **Understandable** | Plain language; consistent navigation; clear error identification and suggestions; predictable behaviour. |
| **Robust** | Compatible with Android/iOS assistive tech (TalkBack, VoiceOver); semantic markup where applicable. |
| **Cognitive** | Simple flows; chunked information; support for low-literacy via voice/icon-led options. |

**Inclusive extras (ASSUMPTION):**
- **Voice-first options** for low-literacy users where feasible.
- **High-contrast / large-text modes.**
- **No-app paths** (USSD/WhatsApp/agent) so digital access is never a precondition for banking ([`../c15-product-management/mvp-scope.md`](../c15-product-management/mvp-scope.md) MVP-7).
- Accessibility testing with **real assistive-tech users**, not only automated tools.

> **Governance:** accessibility audit is part of the product "definition of done" (`PLAN.md` §4). Any money/data surface ships only with the audit green.

---

## 3. Localisation — South Africa's 11 official languages

**The 11 official languages** (Constitution of the Republic of South Africa): **English, Afrikaans, isiZulu, isiXhosa, isiNdebele, Sepedi, Sesotho, Setswana, siSwati, Tshivenda, Xitsonga.**

| Principle | Practice |
|---|---|
| **Parity where feasible** | All core flows (onboarding, home, pay, save, support, security) localised; not English-first with translated leftovers. |
| **Language chosen at onboarding** | Explicit language selection, changeable anytime; default from device locale. |
| **Culturally reviewed, not just translated** | In-language moderated review for tone and financial terminology (ASSUMPTION: partner with native-speaker reviewers). |
| **Consistent terminology** | A shared glossary so "fee", "balance", "loan", "savings" are consistent across surfaces. |
| **Non-text where possible** | Icons and numbers carry meaning so flows degrade gracefully if copy is unclear. |

**Practical constraint (ASSUMPTION):** full parity across 11 languages for *every* string is a large effort; prioritise **core money jobs** first, then support/content. Publish a language coverage matrix.

---

## 4. Low-end device & data-light design

The target customer's phone may be an entry-level Android with limited RAM/storage, on prepaid data that costs money. **Every megabyte and every second matters.**

| Technique | Detail |
|---|---|
| **Small app footprint** | Lightweight build; avoid heavy frameworks/assets; lazy-load imagery. |
| **Low-data mode** | Toggle that strips images, disables auto-downloads, shows essential text only. |
| **Offline-tolerant** | Cache balance/statements; queue actions; graceful reconnection (intermittent power/network is normal). |
| **USSD parity** | Core jobs (balance, statement, block card, airtime) available data-free. |
| **WhatsApp parity** | Low-data alternative to the app for common tasks. |
| **Minimise mandatory updates** | Don't force large downloads; support older OS versions as long as feasible. |
| **Battery/network aware** | Avoid constant background sync; batch requests. |

**Metric:** **Inclusion coverage** % of actives using USSD/WhatsApp/low-data mode ([`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md) §4) — proves we serve segment A.

---

## 5. Trust UX

A new bank must **engineer trust into every screen**. Trust UX principles:

1. **Prove it, at the point of doubt.** At onboarding and on the security screens, show: *licensed bank*, *CODI protection up to R100,000* **[FACT]**, *NFO escalation*, *POPIA notice*.
2. **Fees before the fact.** Show the fee on the confirm screen *before* the customer commits ([`ux-flows.md`](./ux-flows.md) §3). Transparency is a design pattern, not a policy PDF.
3. **Explain every ask.** "Why we ask for your ID" microcopy next to each sensitive request (FICA/POPIA).
4. **Security without fear.** Explain scam safety ("we never ask for your PIN/OTP") calmly; never weaponise fear of loss.
5. **Human fallback.** Always show a way to reach a person (WhatsApp/phone/agent) from any stuck state ([`../c14-customer-success/support-model.md`](../c14-customer-success/support-model.md)).
6. **Status transparency.** Payments, disputes, loans and DSARs have visible status trackers (reduce anxiety and contacts).
7. **No dark patterns.** No deceptive "recommended" upsells, no confusing opt-outs, no loan nudges that exploit distress.

---

## 6. Content design (UX writing)

- **Plain language** — target a low reading level; short sentences; active voice.
- **Numbers as money** — format currency clearly ("R 250,00"); show totals and fees separately.
- **Reassurance in errors** — "Something went wrong. Your money is safe. Tap to retry."
- **Consistent terminology** — shared glossary across languages and surfaces.
- **Legally-required disclosures** — present in plain language *plus* the formal text (FICA/POPIA/NCA), not just the annexure.

---

## 7. Design system & governance

- **Tokens** (colour, type, spacing, radius) → **components** (button, field, card, alert, list item, money-summary) → **patterns** (confirm-with-fee, KYC step, status tracker).
- **Accessibility checks built into components** (contrast, target size, focus order).
- **Versioning & adoption** shared across C06/C11 for implementation parity.
- **Design review gate** — new flows reviewed against these principles before build (with C15).
- **Research loop** — usability tests (in-language, on low-end devices) before and after launch.

> **Cross-links:** journeys → [`../c14-customer-success/customer-journeys.md`](../c14-customer-success/customer-journeys.md); flows → [`ux-flows.md`](./ux-flows.md); brand → [`../c09-marketing-growth/brand-positioning.md`](../c09-marketing-growth/brand-positioning.md); metrics → [`../c15-product-management/product-metrics.md`](../c15-product-management/product-metrics.md).
