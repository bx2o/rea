# Diagrams — Index

**Program:** `SC-REA-NEOBANK-5.0` · **Task:** T7.0 · **Owner:** C06 Engineering-Infra
**Status:** `TARGET DESIGN` — ASCII views of the intended architecture (nothing here is deployed).

This folder holds ASCII architecture diagrams for the Stremiium NeoBank target design. Plain-text
diagrams are used deliberately: they diff cleanly in git, render everywhere, and carry no binary
assets.

> **Convention:** every diagram is valid as a standalone fenced ` ``` ` block so it can be copied
> into tickets, ADRs, and the `UnConsolidated/` register without reformatting.

---

## 1. Diagram index

| File | Diagram | Shows |
|---|---|---|
| [`system-context.md`](system-context.md) | System-context (C4-style L1) | Client apps, API gateway, CBS, payment rails, web3 bridge, event bus, data stores |
| [`system-context.md`](system-context.md) | Transaction-flow sequence | A PayShap-initiated payment end-to-end across gateway → CBS → rail → events → rewards |
| [`../README.md`](../README.md) | Target stack | Full layered stack view with all runtime components |

---

## 2. The four "views" we maintain

| View | Level | Question it answers | Where |
|---|---|---|---|
| Context | C4 L1 | Who/what talks to the system, and what is external? | [`system-context.md`](system-context.md) §2 |
| Sequence | L2 runtime | What happens, in what order, for one payment? | [`system-context.md`](system-context.md) §3 |
| Stack | L1 layered | What are the tiers and technologies? | [`../README.md`](../README.md) §2 |
| Domain flows | L2 | Account/ledger, event topology, recon | [`../core-banking/README.md`](../core-banking/README.md) |

---

## 3. Notation legend

| Symbol | Meaning |
|---|---|
| `┌ ┐ └ ┘ │ ─ ├ ┤` | Box / component boundary |
| `──►` | Synchronous request/response call |
| `┈┈►` | Asynchronous event / publish-subscribe |
| `[ ... ]` | A specific technology or data store |
| `(external)` | Outside the Stremiium trust boundary |
| `◄──►` | Bidirectional channel |
