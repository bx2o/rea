# Diagrams, Designs & Charts — C01-CONTRACT-MANAGEMENT-OFFICER

**Council:** C01 Legal-Compliance · **Format:** ASCII / Markdown (portable, no binary deps)

---

## 1. Primary flow diagram

```
ONBOARDING ──▶ [CDD / KYC] ──▶ [Risk scoring] ──▶ [EDD for PEP/high-risk]
                                        │
                    ┌───────────────────┼───────────────────┐
                    ▼                   ▼                   ▼
              [CTR > R49,999]   [STR suspicion]    [TPR designated]
                    └───────────────────┼───────────────────┘
                                        ▼
                              [goAML submission]
                                        │
                              [5-year record retention]
```

---

## 2. Structured table — FICA reporting obligations

| Report | Trigger | Deadline | Channel | Grade |
|---|---|---|---|---|
| CTR | Cash > R49,999.99 | ≤ 3 days | goAML | [FACT] [S16] |
| STR/SAR | Suspicion of ML/TF/PF | ≤ 15 days | goAML | [FACT] [S16] |
| TPR | Designated person property | Without delay | goAML | [FACT] [S16] |
| Cross-border | Physical cash instrument movement | Per Act | goAML | [FACT] [S16] |
| Travel Rule | Every crypto transfer | Before / with transfer | CASP messaging | [FACT] [S16] |

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

**End of Diagrams — C01-CONTRACT-MANAGEMENT-OFFICER**
