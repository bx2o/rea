# T4 implementation · build-spec.md

**Task:** T4.0 CASPs & Crypto Wallets Forensics
**Owner:** C13 · **Convention authority:** C03.

---

## 1. Artefacts to produce

| Entity | Folder | Files |
|---|---|---|
| Luno | `research/casps-and-wallets/luno/` | README, 01–08, evidence-ledger.json |
| VALR | `research/casps-and-wallets/valr/` | README, 01–08, evidence-ledger.json |
| Flex.one | `research/casps-and-wallets/flex-one/` | README, 01–08, evidence-ledger.json |

## 2. Per-file content contract (highlights)

- **01 Identity** — FSCA CASP licence status/number (public), ownership, custody disclosure.
- **02 Technology** — custody/key model (custodial vs MPC/HSM), API surface, PoR mechanism (Luno:
  Merkle), matching engine evidence class.
- **03 Products** — fee tiers, maker/taker, spread; Flex.one card fees & conversion spread.
- **04 Rewards** — loyalty/referral mechanics if any (mostly thin for CASPs — record explicitly).
- **06 Regulatory** — FSCA, FICA, Travel Rule (Dir.9), SARB FinSurv; data residency.
- **07 REA** — 4 buckets; custody internals UNKNOWN.
- **08 Implications** — ADOPT/ADAPT/AVOID/BEAT for Stremiium custody + card + token.

## 3. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-DOSSIER-9 | 9 files per folder | ✅/❌ |
| T-POR | Luno 07 documents the PoR/Merkle method with source | ✅/❌ |
| T-CARD | Flex.one 02/03 map issuance→auth→settlement→conversion | ✅/❌ |
| T-TRAVEL | each 06 states Travel Rule posture with evidence class | ✅/❌ |
| T-LEDGER | ledgers validate | ✅/❌ |

## 4. Strategic priority

T4.3 (Flex.one card) directly informs Stremiium's planned Mastercard partnership (per C16 context).
T4.1 (Luno PoR) informs the $STM on-chain transparency posture (T7.2). T4.2 (VALR) informs
exchange-grade infrastructure requirements if Stremiium offers trading.
