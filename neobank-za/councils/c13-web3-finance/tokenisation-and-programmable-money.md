# C13 — Tokenisation & Programmable Money

- **Owner:** C13 Web3-Finance Captain · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Parent:** [`README.md`](./README.md) · **Related:** [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md), [`defi-and-risk.md`](./defi-and-risk.md)
- **Grounding:** `../../research/regulatory/payments-nps.md`, `../../research/regulatory/tax-governance.md` §4

> Status legend: ✅ Permissible · ⚠️ Required-authorisation · ⛔ Not-permitted. This is a **research/design** file — most items are open questions, not decisions.

---

## 1. The distinction that matters

| Concept | Definition | Bank relevance |
|---|---|---|
| **Tokenised deposit** | a commercial-bank deposit represented as a digital token, still a **bank liability** | potentially ✅ — it is still *our* deposit |
| **Stablecoin** | a non-bank token pegged to a currency, a **claim on an issuer's reserves** | ⚠️/⛔ — see sibling file |
| **CBDC** | central-bank digital currency | not ours to issue; monitor SARB |
| **Programmable money** | money whose movement is governed by code (conditions, escrow, smart contracts) | design question |

The critical point: a **tokenised deposit stays on our balance sheet** and preserves the banking character; a **stablecoin shifts the liability elsewhere**. They are not the same thing.

---

## 2. Tokenised deposits

**Concept:** represent a customer's bank balance as a token on a distributed ledger (or a hybrid ledger) so it can move with programmability while remaining a deposit.

| Aspect | Assessment | Status |
|---|---|---|
| Deposit remains a bank liability | Preserves banking character | ✅ (conceptually) |
| Movement within the bank / closed loop | A form of internal ledger modernisation | ⚠️ (design + PA engagement) |
| Interbank / cross-institution transfer | Falls into **clearing & settlement** rules | ⚠️ (NPS/PA) |
| Regulatory treatment (deposit insurance, resolution, reporting) | Unclear for token form | `[UNKNOWN]` |
| Consumer protection & disclosure | Still applies | `[REG]` |

**Why it is interesting:** it aligns with the **payments modernisation** agenda (ISO 20022, PEM) without requiring a new asset class — the money is still money.

---

## 3. Programmability & smart contracts in a bank

**Potential uses `[ASSUMPTION]`:**
- Conditional payments (escrow, milestone release).
- Programmatic controls (auto-freeze on sanctions match, spending rules).
- Automated interest or fee logic.
- Tokenised mandates.

**Constraints that dominate design:**
1. **Determinism & auditability** — a bank must be able to explain every movement; opaque or upgradeable contract logic is dangerous.
2. **Reversibility** — banking assumes error/ fraud correction; immutable execution fights that.
3. **Key management** — who holds keys, and how is a private key not a single point of total loss (see `defi-and-risk.md` §3).
4. **Regulatory perimeter** — smart-contract execution does not confer permission; the underlying activity must still be authorised.

---

## 4. SA payments modernisation context (sourced)

| Development | Status | Tag | Source |
|---|---|---|---|
| **PEM programme** (digital identity, digital payments, data-sharing) | active strategy | `[CONSULT/strategy]` | `payments-nps.md` §2 |
| **PayShap** real-time rail (launched 13 Mar 2023) | live | `[REG-GUIDE]` | `payments-nps.md` §4 |
| **ISO 20022** messaging standard | adopted | `[REG-GUIDE]` | `payments-nps.md` §5 |
| **NPU / PayInc 50% SARB stake** (Nov 2025) | infrastructure shift | `[REG-GUIDE]` | `payments-nps.md` §2 |
| **PASA → SARB (PSMB) transition** (milestone 11 Aug 2026) | in progress | `[REG-GUIDE]` | `payments-nps.md` §1 |
| **Open Finance** framework | in development, non-binding | `[CONSULT]` | `payments-nps.md` §6.1 |
| **CARF / revised CRS** effective 1 Mar 2026 | in force | `[REG]` | `tax-governance.md` §4 |

**Reading:** SA is modernising **payments rails and data**, cautiously — via the SARB/industry, not via crypto. Tokenisation should ride that modernisation (ISO 20022, API/consent), not fight it.

---

## 5. Design considerations

1. **Hybrid first.** A tokenised-deposit or internal-ledger approach that keeps money on-balance-sheet is far lower-risk than anything involving external chains.
2. **Regulator engagement early.** Any novel mechanism should go through the **IFWG sandbox** as a pre-licence de-risking path (`../../research/regulatory/payments-nps.md` §6.2), noting the sandbox is **not a licence**.
3. **Reuse existing rails.** Programmatic controls can sit *above* ISO 20022 rails without moving value onto a chain.
4. **Interoperability.** Align with PEM foundations (digital identity, data-sharing) rather than creating a parallel universe.
5. **Exit & reversibility.** Every design must answer "how do we reverse this if the ledger or the contract fails?"

---

## 6. Open questions (deliberately unresolved)

| # | Question |
|---|---|
| Q1 | Does the PA recognise a **tokenised deposit** as a deposit for prudential/reporting purposes? |
| Q2 | How does a tokenised deposit interact with **clearing/settlement** rules (especially post-PSMB transition)? |
| Q3 | What is the **consumer-protection** treatment of programmatic payments? |
| Q4 | How would **POPIA** apply to on-ledger personal data (immutability vs correction rights)? `[interlock: privacy-popia.md §2]` |
| Q5 | Does **CARF/CRS** catch tokenised deposits or only crypto-assets? |
| Q6 | What **key-management** standard would a bank be held to? |
| Q7 | Would the **IFWG sandbox** admit a tokenised-deposit pilot, and on what terms? |

> These are `[UNKNOWN]`. C13 does not pre-judge them.

---

## 7. Recommended posture

- **Research, do not build.** Tokenisation is a **watch-and-prototype** area for Project Umoya, with any prototype confined to the sandbox/closed-loop.
- **Keep liabilities on-balance-sheet.** Prefer tokenised-deposit design over external stablecoins.
- **Follow the SARB's pace.** The modernisation agenda is the legitimate channel; crypto-native rails are not.
- **Gate everything.** No programmatic money movement ships without C01/C12/C10 sign-off.

---

## 8. Cross-links

- Stablecoins → [`stablecoin-and-digital-asset-rails.md`](./stablecoin-and-digital-asset-rails.md)
- Risk → [`defi-and-risk.md`](./defi-and-risk.md)
- Payments modernisation → `../../research/regulatory/payments-nps.md`
- Privacy → `../../research/regulatory/privacy-popia.md`
