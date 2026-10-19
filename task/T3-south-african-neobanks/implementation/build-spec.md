# T3 implementation · build-spec.md

**Task:** T3.0 SA NeoBank & Challenger Analysis
**Owner:** C16 · **Convention authority:** C03.

---

## 1. Artefacts to produce

| Entity | Folder | Files |
|---|---|---|
| TymeBank / GoTymeBank | `research/banks/tymebank/` | README, 01–08, evidence-ledger.json |
| Discovery Bank | `research/banks/discovery-bank/` | README, 01–08, evidence-ledger.json |
| African Bank | `research/banks/african-bank/` | README, 01–08, evidence-ledger.json |

## 2. Per-file content contract (highlights)

- **02 Technology** — must state the CBS family evidence class explicitly: Tyme = "Mambu (INFERRED
  from public partnership statements; not artefact-verified)". Discovery/African Bank CBS = UNKNOWN
  pending evidence.
- **04 Rewards/Behaviour** — T3.2 must produce a **comparison matrix** vs T2.2 FNB eBucks:
  | axis | Vitality | eBucks | Stremiium target |
- **03 Products** — kiosk/card issuance economics for Tyme; Vitality-linked rate for Discovery;
  MyWorld bundles for African Bank.
- **07 REA** — 4 buckets; all artefact claims INFERRED/UNKNOWN until REA runs.
- **08 Implications** — ADOPT/ADAPT/AVOID/BEAT; T3.3 must include merchant-acquiring implication for C07.

## 3. Acceptance tests

| Test | Method | Pass |
|---|---|---|
| T-DOSSIER-9 | 9 files per folder | ✅/❌ |
| T-CBS-CLASS | CBS claim in each 02 carries an evidence class | ✅/❌ |
| T-VITALITY | T3.2 matrix compares Vitality vs eBucks on ≥4 axes | ✅/❌ |
| T-SOFTPOS | T3.3 maps Tap2Glass end-to-end flow | ✅/❌ |
| T-LEDGER | ledgers validate | ✅/❌ |
| T-FILTER | 08 uses ADOPT/ADAPT/AVOID/BEAT | ✅/❌ |

## 4. Strategic priority

Tyme (Mambu) is the **architecture bellwether** — if Stremiium adopts Mambu on `af-south-1` (brief §8),
TymeBank's operating model is the closest validated precedent. T3.1 therefore gets first REA cycle when
T1 exits. T3.2 informs the single most valuable Stremiium asset: the unified behavioural rewards engine.
