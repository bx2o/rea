# 02 — Technology & Systems

**Entity:** Flex.one · **Program:** `SC-REA-NEOBANK-5.0` · **Compiled:** 2026-10-19
**REA status:** `not-executed` — no artefact; stack claims from public sources or marked INFERRED/UNKNOWN.

---

## 1. Card issuance & settlement architecture (the reusable mechanic)

The observable Flex model is a **BaaS-network-card + stablecoin-balance** architecture:

```
  User/公司  ──► Flex app / wallet
                    │
        ┌───────────┼────────────────────────────┐
        ▼           ▼                            ▼
  Stablecoin    Multi-currency                 Business
  balance       / USD account                  bills / spend
  (non-custodial) (via partner banks)
        │
        ▼
  ┌──────────────────────────┐
  │  Card programme manager   │  (BIN sponsorship / issuance)
  │  + BaaS bank partner      │  Thread Bank (banking) / Lead Bank (cards)
  └──────────┬───────────────┘
             ▼
       Visa network  ──► merchant (150M+ Visa merchants, 170+ countries)
```

| Layer | Detail | Evidence |
|---|---|---|
| Card network | **Visa** | SEEN |
| BIN sponsor / issuer | **Lead Bank** (cards), **Thread Bank** (banking services) | SEEN (third-party) |
| Balance asset | User stablecoin balance (USDC/USDT) in a **non-custodial wallet** | SEEN (flex.one Global Card) |
| Liquidation at POS | **Real-time** conversion of stablecoin balance to fund the transaction | SEEN/INFERRED (anchor + interface described) |
| Deposit funding | USDC/USDT from external wallet, exchange, or ACH/wire | SEEN (flex.one) |
| Geography | 170+ countries, 150M+ Visa merchants | SEEN |

**CRITICAL UNKNOWN:** *when* liquidation happens (auth-time vs settlement-time), *who* bears FX risk, and the *exact* spread — none are published with precision. Resolving step: card programme T&Cs + REA extraction of the app (client-side) + issuer disclosure.

---

## 2. Application & delivery

| Dimension | Observation | Class |
|---|---|---|
| Platform | Web + mobile (business banking UI) | SEEN |
| App framework | UNKNOWN (no artefact) | UNKNOWN |
| Auth (user) | Account login + KYC (business onboarding) | SEEN/INFERRED |
| API | Business API presence implied (accounts/cards); specifics UNKNOWN | UNKNOWN |
| AI layer | "AI-native" positioning (AI payment tools per Series B1) | SEEN (claim) |

---

## 3. Integration surfaces

| Surface | Detail | Class |
|---|---|---|
| Card rails | Visa network via BaaS issuer | SEEN |
| Banking rails | US ACH + wire (via partner bank) | SEEN |
| Stablecoin | USDC/USDT deposit + spend | SEEN |
| Multi-currency | 32 currencies / 76 countries (Flex Global) | SEEN |
| Cross-border settlements | Minutes via stablecoin rails | SEEN (claim) |

---

## 4. Gaps / unknowns for Stremiium's use

| Gap | Note |
|---|---|
| Liquidation timing & FX risk bearing | UNKNOWN — must design explicitly |
| Mastercard issuance | NOT corroborated (Visa only in sources) |
| SA availability | No evidence flex.one operates in SA → mostly a *mechanic* reference |
| Interchange economics | UNKNOWN (interchange sharing inferred, not disclosed) |
| Regulatory wrapper | US BaaS partner model; SA equivalent differs materially |
