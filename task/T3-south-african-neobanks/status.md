# T3 — SA NeoBank & Challenger Analysis · status.md

**Program:** `SC-REA-NEOBANK-5.0`
**Task:** T3.0 SA NeoBank & Challenger Analysis
**Owner council:** Multi-Squad Taskforce — lead C16 Banking-Fintech (`C16-banking-fintech-captain`)
**Supporting councils:** C04 Strategy (`C04-chief-strategist`), C11 Dev-Engineering (`C11-dev-engineering-captain`), C06 Engineering-Infra (`C06-chief-technology-officer`), C15 Product (`C15-product-management-captain`)
**Status:** `ACTIVE`
**Last updated:** 2026-10-19

---

## 1. Mission

Reverse-engineer South Africa's digital-native challengers — TymeBank, Discovery Bank, African Bank
— because they, not the Big Four, are Stremiium's truest analogues. The program must learn TymeBank's
**low-cost kiosk + Mambu CBS** model, Discovery's **Vitality behavioural engine**, and African Bank's
**MyWorld + Tap2Glass SoftPOS** stack, then beat them on unified fiat+crypto experience.

## 2. Scope

- T3.1 TymeBank — Kiosk & Mambu CBS forensics → `research/banks/tymebank/`
- T3.2 Discovery Bank — Vitality behavioural engine → `research/banks/discovery-bank/`
- T3.3 African Bank — MyWorld & Tap2Glass SoftPOS → `research/banks/african-bank/`

Each entity → the 9-file §4 dossier.

## 3. Entrance / Exit criteria

| Gate | Criterion | State |
|---|---|---|
| Entrance | T1 scaffold available | ✅ |
| Entrance | T2 loyalty synthesis in progress (for T3.2 comparison) | ⏳ |
| Exit | 3 dossiers, 9 files each, schema-complete | ⏳ |
| Exit | T3.2 Vitality engine modelled vs FNB eBucks (C04) | ⏳ |
| Exit | T3.1 confirms/blocks Mambu CBS hypothesis with evidence class | ⏳ |
| Exit | C12 evidence audit passed | ⏳ |

## 4. Dependency map

```
T2.2 (eBucks) ──► T3.2 (Vitality comparison) ──► T7 behavioural engine
T1 ──► T3.1 (Mambu) ──► T7.1 core-banking spec
T3.3 (SoftPOS) ──► T7 payments / C07 acquiring
```

## 5. Risk register

| # | Risk | L | I | Mitigation | Owner |
|---|---|---|---|---|---|
| R1 | Mambu CBS for Tyme is publicly claimed but not artefact-verified | M | M | Label INFERRED; require REA/artefact for SEEN | C16 |
| R2 | Vitality computation server-side → UNKNOWN | H | M | Model observable tier rules as black box | C04 |
| R3 | TymeBank kiosk economics proprietary | M | M | Use public disclosures + estimates labelled INFERRED | C16 |
| R4 | African Bank SoftPOS cert detail not public | M | L | Public docs only; UNKNOWN for internal | C11 |
| R5 | REA absent blocks app-level reversing | H | M | Public-source path; queue REA | C11 |

## 6. Next actions

1. **C16** — T3.1 TymeBank: kiosk model + Mambu CBS evidence.
2. **C04/C11** — T3.2 Discovery Vitality engine vs eBucks.
3. **C11** — T3.3 MyWorld + Tap2Glass SoftPOS stack.
4. **C03** — ledger conformance; **C12** — audit gate.
