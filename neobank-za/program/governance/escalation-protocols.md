# Escalation Protocols — NeoBank ZA

**Owner:** C02 Operations · **Assured by:** C12 Cybersecurity-Intel (Critical path) and C01 Legal-Compliance (regulatory path)
**Version:** 1.0 · **Date:** 2026-10-16 · **Status:** Active

> How issues climb the chain, what triggers them, how fast they must be answered, and in what format. Inherits SAOS [`escalation-protocols`](file:///workspace/_stremiium/.stremiium/governance/rules/sparkling-curious-instructions.md) and the SLAs in [`workflow-routing.md §4`](file:///workspace/_stremiium/.stremiium/governance/workflow-routing.md).

Back-links: [governance overview](./README.md) · [authority matrix](./authority-matrix.md) · [RACI](./raci.md).

---

## 1. Escalation ladder

```text
Council Agent (AGT-*)
   │  cannot resolve within assigned scope
   ▼
Council Captain (CN)          attempts Level-1 resolution
   │  unresolved OR multi-council OR policy conflict
   ▼
Sparkling Curious (SC-MASTER-001)   Level-2 arbitration
   │  Critical impact / above appetite / external
   ▼
Board / Organizational Executive (EXEC-council-ceo)   Level-3
```

**Fast paths (skip the captain tier):**
- **Critical security incident** → C12 + SC directly.
- **Critical regulatory / AML / POPIA event** → C01 + C16 + SC directly.
- **Live customer-data breach** → C12 + C01 + SC directly.

---

## 2. Response SLAs

| Severity | Definition (on this program) | First response | Resolution target | Auto-escalate after |
|---|---|---|---|---|
| **Critical** | Business/regulatory/security impact; blocking; **2+ councils**; money/data at risk | **1 hour** | Same day (workaround) | 1h |
| **High** | Major degradation or single-council blocker with customer impact | **4 hours** | 1–3 days | 4h |
| **Medium** | Process friction, non-blocking defect, dependency slip | **24 hours** | 3–10 days | 24h |
| **Low** | Improvement, cleanup, backlog | **72 hours** | Backlog window | 72h |

SLAs are **response** SLAs (acknowledge + assign owner + give ETA). Resolution may legitimately exceed the response window if a workaround + permanent-fix plan is in place.

---

## 3. Triggers (when to escalate)

Escalate **one level up** when any trigger fires:

| # | Trigger | Example on this program |
|---|---|---|
| T1 | SLA lapse without resolution | High issue open > 4h with no owner action |
| T2 | Blast radius crosses councils | Cloud-region choice (D-002) blocks C06, C11, C12 |
| T3 | Special-authority conflict | C16 banking-compliance ruling conflicts with C09 launch date |
| T4 | Risk above appetite | A High risk needs acceptance beyond the statement |
| T5 | Regulatory exposure | FICA/POPIA/PA-interaction ambiguity; suspected AML event |
| T6 | Security event | Suspected breach, credential leak, fraud ring detected |
| T7 | Budget breach | Spend beyond approved envelope (C10 guardrail) |
| T8 | Evidence conflict | Physical workspace evidence contradicts a report (evidence-over-report rule) |
| T9 | Repeated failure | Same issue recurs ≥ 2 times |
| T10 | Customer harm | Any credible customer harm or conduct breach |

---

## 4. Message formats

**Standard escalation (Medium/High):**
```
ESCALATION [ID] | SEVERITY: [Critical|High|Medium|Low]
RAISED BY: [agent/council]  AT: [timestamp UTC+2]
AFFECTED: [councils]
ISSUE: [one-line impact]
CONTEXT: [artifacts + evidence IDs]
DECISION NEEDED: [specific ask]
PROPOSED OPTIONS: [A / B / C]
ETA WITHOUT ACTION: [consequence + timeline]
RECOMMENDED SLA: [target]
```

**Critical incident (Critical / fast path):**
```
CRITICAL [ID]: [Impact] | AFFECTED: [councils]
WORKAROUND ETA: [x] | PERMANENT-FIX ETA: [x]
CONTAINMENT: [action taken so far]
ESCALATED TO: [C12/C01/C16 + SC]
```

**Decision request (Level-2/3):**
```
DECISION REQUEST [ID] | LEVEL: [2|3]
DECIDER: [SC / captain]
QUESTION: [single yes/no or choice]
OPTIONS: [A (pros/cons) | B | C]
RECOMMENDATION: [council position + rationale]
IMPACT OF DELAY: [consequence]
SLA: [per authority matrix]
```

---

## 5. Conflict resolution (7 steps)

1. **Identify** — parties, positions, stakes, evidence.
2. **Direct negotiation** — parties seek common ground (2–3 business days).
3. **Mediation** — neutral party from SC staff line (2–3 business days).
4. **Arbitration** — next-tier authority issues a binding decision (3–5 business days).
5. **SC arbitration** — for multi-council/organizational conflicts; final unless Board overrides (5–10 business days).
6. **Implement** — all parties accept; timeline set; monitored.
7. **Learn** — post-mortem; update process; share across councils.

---

## 6. Post-incident review

- **Critical:** post-mortem within **24 hours**; the SC signs off.
- **High:** root-cause within **72 hours**.
- **Medium/Low:** reviewed at the next delivery ceremony (see [`../delivery/ways-of-working.md`](../delivery/ways-of-working.md)).

Every post-mortem records: root cause → why not caught → permanent fix → process change → artifacts updated → lessons shared. Logged against the affected risk in [`../risk/risk-register.md`](../risk/risk-register.md).

---

## 7. Escalation matrix (who to reach)

| Issue class | First line | Second line | Final |
|---|---|---|---|
| Security / fraud | C12 Security | SC | Board |
| Legal / POPIA / FICA / AML | C01 Legal | C16 Banking | SC → Board |
| Banking / licensing / payments | C16 Banking | C01 Legal | SC → Board |
| Architecture / infrastructure | C06 Engineering | C11 Dev | SC |
| Product / scope | C15 Product | C04 Strategy | SC |
| Budget / funding | C10 Finance | SC | Board |
| Customer harm | C14 Customer-Success | C01 + C12 | SC |
| People / capacity | C05 HR-People | C02 Operations | SC |
