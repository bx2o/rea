---
bank: "J.P. Morgan Private Bank"
council: "C10"
department: "technology"
status: "partial"
confidence: "low"
sources:
  - "https://privatebank.jpmorgan.com/nam/en/services/banking/online-tools"
  - "https://www.jpmorgan.com/kinexys/about"
last_updated: "2026-10-16"
---

# J.P. Morgan Private Bank — Technology Stack

> The Private Bank does not publish a standalone technology stack; it uses JPMorgan Chase shared
> platforms. See also `../jpmorgan-chase/technology/50-tech-stack.md`.

## 1. Client Digital Tools (observed)

- [OBS] Web/online platform with portfolio performance tracking, positions & historical data,
  index comparison, hedge-fund/private-investment views, equity research, bill pay, real-time-FX
  wires, mobile check deposit and account aggregation across external institutions
  ([Private Bank online tools](https://privatebank.jpmorgan.com/nam/en/services/banking/online-tools)).
- [OBS] Clients can link accounts "from thousands of other financial institutions" — aggregation
  layer ([Private Bank online tools](https://privatebank.jpmorgan.com/nam/en/services/banking/online-tools)).

## 2. Shared Group Infrastructure

- [OBS] The parent firm's multi-cloud (AWS/Azure/Google Cloud) and AI platforms underpin all
  divisions, including AWM/Private Bank
  ([JPMorgan AI strategy](https://blog.csdn.net/keylink_con/article/details/149356835)).
- [INF] Institutional-grade research and trading tooling is shared with CIB.

## Gaps

- [UNK] Client-facing app stack, data residency and specific vendors for the Private Bank.
- [UNK] Any Private Bank–specific AI tooling.

## Sources

- [J.P. Morgan Private Bank — online tools](https://privatebank.jpmorgan.com/nam/en/services/banking/online-tools)
- [About Kinexys](https://www.jpmorgan.com/kinexys/about)
