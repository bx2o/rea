# Project Umoya — Reusable Skills Index

- **Owner:** C03 (knowledge) with contributing councils · **Version:** 1.0 (UnConsolidated) · **Date:** 2026-10-16
- **Related:** [`../workflows/README.md`](../workflows/README.md), [`../templates/README.md`](../templates/README.md), [`../councils/c03-admin-knowledge/knowledge-architecture.md`](../councils/c03-admin-knowledge/knowledge-architecture.md)

> A **skill** is a reusable, executable procedure — instructions an agent (or human) follows to perform a class of task consistently. Skills are the *doing* counterpart to the *knowing* in `research/` and the *deciding* in `councils/`.

---

## 1. What a skill is (and is not)

| Skill **is** | Skill **is not** |
|---|---|
| A procedure with inputs, steps, outputs, failure modes | A knowledge dump (that is `research/`) |
| Reusable across tasks and councils | A one-off task record |
| Bounded and testable | A vague aspiration |
| Owned by a council | Ownerless |

Skills follow the **SKILL.md convention** used across the Stremiium ecosystem (see `.stremiium/skills/README.md`): a folder containing a single `SKILL.md`.

---

## 2. The SKILL.md convention

Each skill lives at `skills/<kebab-name>/SKILL.md` and opens with YAML frontmatter:

```markdown
---
name: <skill-name>
description: <one-line trigger — when to use this skill>
council: <owning council>
version: 1.0
status: draft
---
```

…followed by a standard body:
1. **When to use / when not to use**
2. **Inputs** required
3. **Procedure** (numbered steps)
4. **Outputs** produced
5. **Evidence requirements** (how claims are tagged)
6. **Failure modes & recovery**
7. **Cross-links**

---

## 3. Skill index

| Skill | Council(s) | Trigger | File |
|---|---|---|---|
| **SA Banking Domain** | C16, C01 | Needing SA banking knowledge: licensing, rails, regulation pointers | [`sa-banking-domain/SKILL.md`](./sa-banking-domain/SKILL.md) |
| **REA Reverse-Engineering** | C11, C12, C16 | Reverse-engineering SA banking targets with REA | [`rea-reverse-engineering/SKILL.md`](./rea-reverse-engineering/SKILL.md) |
| **AML / FICA Screening** | C01, C12, C02 | Performing AML/KYC/FICA screening procedures | [`aml-fica-screening/SKILL.md`](./aml-fica-screening/SKILL.md) |

---

## 4. Mapping skills to academy & workflows

- **Academy linkage:** the C05 capability academy (`../councils/c05-hr-people/learning-and-development.md`) teaches to these skills — learning and doing share one artefact.
- **Workflow linkage:** orchestrator workflows (`../workflows/`) *invoke* skills as their executable leaves.
- **Routing linkage:** `../workflows/agent-routing.md` determines *which council* would call a skill.

---

## 5. Writing a new skill

1. Confirm no existing skill covers the need (avoid duplication — UnConsolidated principle).
2. Pick the owning council; get captain agreement.
3. Create `skills/<kebab-name>/SKILL.md` with the frontmatter + body above.
4. State **evidence requirements** explicitly (observe/infer/unknown tags).
5. Register it in the index table (§3).
6. Cross-link from the owning council's README.

---

## 6. Open items / unknowns

- `[ASSUMPTION]` Frontmatter fields may be extended for machine discovery.
- `[UNKNOWN]` Which skills warrant automated test harnesses (evaluations) — scope with C03/C11.

---

_Codename `Project Umoya` is a working label only._
