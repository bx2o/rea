# T3 summary · roll-up.md

**Task:** T3.0 SA NeoBank & Challenger Analysis
**Prepared by:** C16 Banking-Fintech (roll-up template, pre-filled).

---

## 1. Consolidated findings

| # | Finding | Evidence class | Source |
|---|---|---|---|
| F1 | Three challenger dossiers queued but **empty**. | SEEN | repo `research/banks/` |
| F2 | TymeBank publicly associated with Mambu CBS (unverified at artefact level). | INFERRED | public partnership statements |
| F3 | Discovery's Vitality is a shared-value behavioural engine comparable to FNB eBucks. | INFERRED | public Vitality Money rules |
| F4 | African Bank's Tap2Glass is a SoftPOS (card-present on COTS device) innovation. | INFERRED | public announcements |
| F5 | **None of the three offer unified fiat + crypto custody** — a Stremiium differentiation gap. | INFERRED | product scope |
| F6 | No REA app decompilation performed; challenger app internals UNKNOWN. | SEEN | gap |

## 2. Decisions recorded

- **D1** — T3.1 takes first REA cycle on T1 exit (architecture bellwether).
- **D2** — Vitality and eBucks modelled on a shared axis; server-side math declared UNKNOWN.
- **D3** — SoftPOS analysis feeds C07 merchant-acquiring strategy (T7).
- **D4** — All CBS claims must carry an explicit evidence class.

## 3. Status snapshot

| Sub-task | Status |
|---|---|
| T3.0 (parent) | ACTIVE |
| T3.1 TymeBank / Mambu | ACTIVE |
| T3.2 Discovery Vitality | ACTIVE |
| T3.3 African Bank SoftPOS | ACTIVE |

## 4. Preliminary strategic read

- **ADOPT** — Mambu cloud-native CBS (validated by Tyme) + Vitality/eBucks-style behavioural loop.
- **ADAPT** — kiosk acquisition → digital + agent network; SoftPOS → Stremiium merchant rails.
- **BEAT** — all three on the fiat+crypto+custody+rewards unification Stremiium offers.

## 5. Open questions

1. Is Tyme's CBS genuinely Mambu (needs artefact/REA)? — UNKNOWN.
2. What is Discovery's exact shared-value formula? — UNKNOWN (server-side).
3. Is Tap2Glass certified for Stremiium's target acquiring flows? — Unknown.
