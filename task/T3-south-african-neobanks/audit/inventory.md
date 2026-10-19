# T3 audit · inventory.md

**Task:** T3.0 SA NeoBank & Challenger Analysis
**Owner:** C16 Banking-Fintech
**Evidence date:** 2026-10-19

---

## 1. What exists

| Asset | State | Evidence class |
|---|---|---|
| `research/banks/tymebank/` | folder present, **empty** | SEEN (repo) |
| `research/banks/discovery-bank/` | folder present, **empty** | SEEN (repo) |
| `research/banks/african-bank/` | folder present, **empty** | SEEN (repo) |
| Dossier template (brief §4) | defined | SEEN (brief) |

## 2. What is missing

| Gap | Resolves via |
|---|---|
| No dossier content for the three challengers | T3.x |
| No confirmation of TymeBank's CBS family (Mambu hypothesis) | T3.1 / REA |
| No Vitality engine model | T3.2 |
| No SoftPOS/MyWorld architecture map | T3.3 |
| No REA app decompilation (engine not installed) | T1.1 → T3 |

## 3. Evidence present vs absent

**Present (citable):**
- GoTymeBank/TymeBank public disclosures (BCX/kiosk rollout, Mambu partnership statements).
- Discovery Bank public Vitality Money rules & tier tables.
- African Bank MyWorld product pages + Tap2Glass announcements.

**Absent:**
- Decompiled app bytecode / SDK signatures (needs REA + artefacts).
- Internal CBS configuration & kiosk unit economics.
- Server-side Vitality computation.

## 4. Challenger recon checklist

| Dimension | TymeBank | Discovery Bank | African Bank |
|---|---|---|---|
| CBS family | Mambu (claimed) | ? | ? |
| Acquisition channel | Kiosk + app | Vitality ecosystem | MyWorld + branch |
| Behavioural engine | GoRewards? | **Vitality Money** | MyWorld rewards |
| Payment innovation | – | – | **Tap2Glass SoftPOS** |
| Cloud region | af-south-1? | ? | ? |
| Crypto exposure | none | none | none |

## 5. Audit verdict

Folders scaffolded, **content absent**. T3 is the most strategically important dissection set
(digital-native analogues). Evidentiary ceiling INFERRED until REA + artefacts; Vitality and Tyme
economics partly UNKNOWN by nature. **Key opportunity:** none of the three offer fiat+crypto unity —
a Stremiium differentiation axis.
