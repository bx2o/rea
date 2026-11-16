---
name: sa-banking-domain
description: Use when a task needs South African banking domain knowledge — licensing routes, payment rails, prudential rules, or pointers into the regulatory research pack. Triggers on "SA banking", "Banks Act", "PayShap", "how do I get a banking licence".
council: C16 (with C01)
version: 1.0
status: draft
---

# Skill — SA Banking Domain

> **Purpose.** Give any agent a fast, evidence-disciplined way to reason about South African banking: which licence, which rail, which rule — and where the source of truth lives.

---

## 1. When to use / not use

**Use when:**
- A question involves SA banking licensing (Banks Act, Mutual Banks Act), payments (NPS Act, PayShap, ISO 20022), prudential rules (CAR, LCR/NSFR), or conduct (FAIS/NCA).
- You need to route to the correct regulatory source before asserting anything.

**Do not use when:**
- The question is about another jurisdiction.
- The answer requires **legal advice** — this skill points to sources; C01 and a SA admitted attorney must validate.

---

## 2. Inputs

- The specific question (licence route? rail? reporting? conduct?).
- Any target entity/product context.
- Access to `../../research/regulatory/` and `../../research/neobank-competitors/`.

---

## 3. Procedure

1. **Classify the question** into one of: licensing · payments/rails · prudential · conduct · tax/governance · crypto/digital asset.
2. **Open the matching research file** (`research/regulatory/…`). Never answer from memory alone.
3. **Check the evidence tag** on each fact (`[STATUTE]`, `[REG]`, `[REG-GUIDE]`, `[CONSULT]`, `[SECONDARY]`) using `../../research/regulatory/README.md` §1. Do **not** treat `[CONSULT]` as binding.
4. **Note the "needs authoritative confirmation" flags** — reproduce them, do not silently resolve.
5. **Answer with sources** (`[S#]`) or explicit `[UNVERIFIED]`/`[UNKNOWN]` tags.
6. **Route follow-ups** to the owning council (C01 legal, C16 rails, C10 finance, C12 security).

---

## 4. Quick reference map

| Topic | First file |
|---|---|
| Licence routes & capital minimums | `../../research/regulatory/banking-licensing.md` §2 |
| Licensing process & roadmap | `../../research/regulatory/licensing-roadmap.md` |
| Payments / NPS / PayShap | `../../research/regulatory/payments-nps.md` |
| AML / FICA | `../../research/regulatory/aml-fica.md` |
| Privacy / POPIA | `../../research/regulatory/privacy-popia.md` |
| Conduct / FAIS / NCA | `../../research/regulatory/conduct-fais-nca.md` |
| Tax / BA returns / governance | `../../research/regulatory/tax-governance.md` |
| CASP / crypto | `../../research/neobank-competitors/crypto-casp.md` |
| Competitors & market | `../../research/neobank-competitors/` |

**Key constants (sourced, `[REG]`):** minimum bank capital **R250m**; CAR **≥ 11.5%**; leverage **≥ 4%**; CTR threshold **R49,999.99**; corporation tax **27%**; VAT **15%**.

---

## 5. Outputs

- A sourced answer with evidence tags.
- A route-to-source table when the question spans regimes.

---

## 6. Evidence requirements

- Every factual claim carries a source or an explicit tag.
- Regulatory weight is preserved (never present `[CONSULT]` as law).
- Observe / infer / unknown distinctions are kept (PLAN.md §0).

---

## 7. Failure modes & recovery

| Failure | Recovery |
|---|---|
| Answering from memory | Stop; open the research file; cite. |
| Treating draft framework as law | Re-tag as `[CONSULT]`; state it is non-binding. |
| Conflating FICA 5% with Companies Act 5% | Read `aml-fica.md` §3.2 note; keep separate. |
| Assuming a non-bank licence exists today | Check `payments-nps.md` §3 — framework is draft. |

---

## 8. Cross-links

- AML screening → [`../aml-fica-screening/SKILL.md`](../aml-fica-screening/SKILL.md)
- REA for banking targets → [`../rea-reverse-engineering/SKILL.md`](../rea-reverse-engineering/SKILL.md)
- Regulatory pack → `../../research/regulatory/README.md`
