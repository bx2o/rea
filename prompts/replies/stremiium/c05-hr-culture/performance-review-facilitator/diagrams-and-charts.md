# Diagrams, Designs & Charts — C05-PERFORMANCE-REVIEW-FACILITATOR

**Council:** C05 HR-Culture · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
MASTER PROMPT ──▶ [Research ingestion: docs/ + rea/ + .stremiium/]
                        ▼
              [Question-by-question answer]
                        ▼
              [Evidence grades + [S#] citations]
                        ▼
              [Compliance gate + escalation]
```

---

## 2. Structured table — Human + agent teaming operating values

| Value | Application | Enforcement | Grade |
|---|---|---|---|
| Clarity | Defined agent/human decision rights | RACI in council charters | [FACT] [S5] |
| Wellbeing | Always-on workflows bounded | Workload limits | [FACT] [S4] |
| Fairness | DEI in agent + human teams | EE Act 55 of 1998 | [FACT] [S4] |
| Mediation | Conflict path defined | Agent→Captain→SC | [FACT] [S5] |

---

## 3. State machine (generic lifecycle for this domain)

```
[DRAFT] ──research──▶ [EVIDENCED] ──gate──▶ [RATIFIED]
   │                      │                    │
   └──gap──▶ [REVISE] ◀────┴──conflict──▶ [ARBITRATED by SC]
                                              │
                                              ▼
                                       [HANDED OFF]
```

---

## 4. ASCII bar chart — evidence grade distribution (illustrative)

```
FACT      ████████████████████████  (statutory + published sources)
EST       ████████████              (archive / hardware estimates)
INFER     ██████                    (artefact-dependent, REA pending)
UNKNOWN   ███                       (proprietary / server-side)
```

---

## 5. Decision tree — compliance gate

```
                    [Answer produced]
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
        [Touches money?] [Touches data?] [Touches security?]
              │            │            │
              ▼            ▼            ▼
         [C01+C16+C10]   [C01 POPIA]   [C12 sentinel]
              └────────────┼────────────┘
                           ▼
                  [SC final arbitration]
                           ▼
                  [CEO → Board if critical]
```

---

## 6. Timeline — TBS phase rollout

```
T1 Foundation    ████████░░░░░░░░░░░░  COMPLETE
T2 Council Agents████████████████░░░░  COMPLETE
T3 Dept Agents   ████████████████░░░░  COMPLETE
T4 Workspace     ████████████████████  COMPLETE
T5 Security      ████████████████░░░░  GATES PENDING
T6 Configuration ████████████████████  COMPLETE
T7 Testing/QA    ████████████████████  COMPLETE
T8 Deployment    ████████░░░░░░░░░░░░  READY
```

---

## 7. Council dependency graph

```
       C01 Legal ◀──── C16 Banking ────▶ C10 Finance
         │                  │                   │
         ▼                  ▼                   ▼
       C12 Security ◀── C11 Dev ────▶ C13 Web3
         │                  │                   │
         └────────▶ C15 Product ◀──── C08 Design
                          │
                          ▼
                    C14 Customer
                          │
                          ▼
                    C02 Operations
```

---

**End of Diagrams — C05-PERFORMANCE-REVIEW-FACILITATOR**
