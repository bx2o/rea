# T2 context · references.md

**Task:** T2.0 SA Big Four Reverse Engineering
**Owner:** C03 Admin-Knowledge.

---

## 1. Public sources (per entity, to be cited in dossiers)

| Entity | Primary public sources |
|---|---|
| Standard Bank | Standard Bank Group integrated annual report; JSE:SBS; Shyft product docs; app-store listing |
| FNB (FirstRand) | FirstRand integrated report; JSE:FSR; FNB pricing guide; **eBucks rules & tier tables** |
| ABSA | ABSA Group integrated report; JSE:ABG; public cloud-migration statements; Absa Rewards terms |
| Nedbank | Nedbank Group integrated report; JSE:NED; Money App docs; **Avo** marketplace; Greenbacks terms |

## 2. Entity folders (inputs/outputs)

- `research/banks/standard-bank/`
- `research/banks/fnb/`
- `research/banks/absa/`
- `research/banks/nedbank/`

## 3. Internal references

| Ref | Path | Use |
|---|---|---|
| [R1] | `task/PROGRAM_BRIEF.md` §4, §5, §7 | Dossier template, evidentiary buckets, strategic filter |
| [R2] | `task/TASK_INDEX.md` (T2 row) | Statuses + deliverable paths |
| [R3] | `.stremiium/registry/master-registry.json` | Council roster for RACI |
| [R4] | `task/T1-infrastructure-setup/implementation/rea-doctor-contract.md` | REA availability (when built) |

## 4. Assumptions

- A1: Public filings and pricing pages are accurate as of their publication date.
- A2: Loyalty tier tables published by banks reflect real earning rules.
- A3: App-store metadata is a legitimate (SEEN, low-depth) reversing source until REA runs.

## 5. Evidentiary-class reminder

> SEEN = citable filings/pricing/app-store/docs. INFERRED = architecture synthesised from SEEN.
> UNKNOWN = server-side loyalty math, private APIs, internal CBS config.
> **REA not installed + no artefacts ⇒ no bytecode-level SEEN for T2.** Every artefact-dependent
> claim names the resolving extraction step.

## 6. Compliance constraints

No credentials, keys, or personal data. POPIA governs any customer data referenced. Conventional
commit prefixes (`analysis:`, `docs:`) apply when committed by T8.
