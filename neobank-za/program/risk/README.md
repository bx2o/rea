# Risk Framework — NeoBank ZA

**Owner:** C12 Cybersecurity-Intel (program risk) · **Assured by:** C01 Legal-Compliance · **Board oversight:** via Sparkling Curious
**Version:** 1.0 · **Date:** 2026-10-16

> The risk framework for `Project Umoya`. It defines how the program identifies, scores, treats and monitors risk; the register holds the live risks; the appetite statement holds the board-level tolerance. Modelled on the SAOS escalation/quality spine and aligned to King IV (risk governance) and the SARB/PA supervisory expectations for a new bank.

Back-links: [governance](../governance/README.md) · [roadmaps](../roadmaps/README.md) · [delivery](../delivery/README.md).

---

## 1. Document index

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | This framework: scoring, appetite, treatment, ownership, cadence |
| [`risk-register.md`](./risk-register.md) | Seeded register of 30 launch risks with L/I/score, mitigation, owner, status |
| [`risk-appetite-statement.md`](./risk-appetite-statement.md) | Board-level risk appetite (the bounds the register is measured against) |

---

## 2. Scoring model

**Score = Likelihood × Impact**, each on a 1–5 scale.

### Likelihood
| Value | Label | Meaning |
|---|---|---|
| 1 | Rare | < 10% chance over the program horizon |
| 2 | Unlikely | 10–30% |
| 3 | Possible | 30–50% |
| 4 | Likely | 50–80% |
| 5 | Almost certain | > 80% |

### Impact
| Value | Label | Meaning |
|---|---|---|
| 1 | Insignificant | Minor, absorbed by BAU |
| 2 | Minor | Small delay/cost, single council |
| 3 | Moderate | Milestone slip, multi-council, budget impact |
| 4 | Major | Launch blocked / regulatory action / material loss |
| 5 | Severe | Licence denial / insolvency / systemic customer harm |

### Score bands
| Score | Band | Response required | Escalation |
|---|---|---|---|
| 1–4 | **Low** | Accept or monitor; owner assigned | None |
| 5–9 | **Medium** | Treatment plan in place | C02 |
| 10–14 | **High** | Active mitigation; milestone-gating | Sparkling Curious (4h SLA) |
| 15–25 | **Critical** | Immediate action; may block gate | SC (1h SLA); Board if above appetite |

---

## 3. Risk categories

`Regulatory` · `Financial` · `Credit` · `Fraud` · `Cyber` · `Privacy` · `Operational` · `Technology` · `Supplier` · `People` · `Conduct` · `Market` · `Strategic` · `Data` · `Macro`.

---

## 4. Risk lifecycle

```
IDENTIFY → SCORE → OWN → TREAT → MONITOR → REVIEW → (CLOSE | RE-SCORE)
```

1. **Identify** any council may raise a risk (format below).
2. **Score** likelihood × impact using the tables above; record the *residual* score after treatment.
3. **Own** each risk has exactly one **owner council** and one risk owner.
4. **Treat** per the four treatment options below; a treatment has actions, an owner and a milestone anchor.
5. **Monitor** scores reviewed at each launch gate and monthly.
6. **Review** at gates; re-score; close or carry.

### Treatment options
| Option | When | Notes |
|---|---|---|
| **Mitigate** | Score above appetite | Reduce likelihood and/or impact |
| **Accept** | Within appetite | Document rationale; the decider per [authority matrix](../governance/authority-matrix.md) |
| **Transfer** | Insurable / contractual | Insurance, sponsor agreement, vendor SLAs |
| **Avoid** | Above appetite, no feasible mitigation | Do not do the activity |

---

## 5. Risk record format

```
ID · Title · Category · Description
Likelihood (1-5) · Impact (1-5) · Score · Band
Mitigation · Treatment · Owner council · Risk owner · Status · Last reviewed
Linked decision · Linked milestone · Evidence
```

---

## 6. Appetite linkage

Every High/Critical risk is measured against [`risk-appetite-statement.md`](./risk-appetite-statement.md). **Accepting a risk above appetite is a Level-3 decision** (SC + Board) — see [authority matrix](../governance/authority-matrix.md).

---

## 7. Cadence

| Cadence | Activity | Owner |
|---|---|---|
| Per gate | Full register review vs gate criteria | C12 + C02 |
| Monthly | Re-score top-10; movement report | C12 |
| On incident | Add/update risk; post-mortem | Owning council |
| Quarterly | Appetite review vs actuals | SC + Board |

---

## 8. Governance hooks

- Risks link to **decisions** ([decision log](../governance/decision-log.md)) and **milestones** ([launch roadmap](../roadmaps/launch-roadmap.md)).
- Risks above appetite drive **escalations** ([escalation-protocols.md](../governance/escalation-protocols.md)).
- Risk acceptance sign-off uses the **level-3 decision** route in the [authority matrix](../governance/authority-matrix.md).
