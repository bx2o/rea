# Diagrams, Designs & Charts — SUB-C11-DEV-NEO-003

**Council:** C11 Dev-Engineering · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
TARGET ARTEFACT (not supplied)
        │
        ▼
  [REA extraction: APK/ASAR/IPA]
        │
        ├─▶ [1. Evidence (Seen)] ──────── public filings, strings, bytecode
        ├─▶ [2. Recovered Graph (Synthesised)] ─ architecture, state machines
        ├─▶ [3. Limitations] ─────────────── obfuscation, stripped symbols
        └─▶ [4. Unknowns] ────────────────── server-side logic, private APIs
```

---

## 2. Structured table — Answer structure

| Element | Requirement | Source | Grade |
|---|---|---|---|
| Mandate | Council charter scope | [S4] | [FACT] |
| Evidence | Four-bucket rule | [S1] | [FACT] |
| Gate | Named compliance gate | [S5] | [FACT] |
| Escalation | Captain → SC → CEO → Board | [S5] | [FACT] |

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

**End of Diagrams — SUB-C11-DEV-NEO-003**
