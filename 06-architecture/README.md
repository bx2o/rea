# 06-architecture — Reusable Platform Design

Reusable architecture patterns for the Stremiium NeoBank (and any future program in this workspace).
This zone is **generic by design**: it holds the platform, data, domain-model, integrations, security,
and system-design patterns that the NeoBank target-system contracts in [`03-architecture/`](../03-architecture/)
specialise.

| Path | Purpose |
|---|---|
| [`platform-design/`](platform-design/) | Reusable platform design: `system-design/`, `domain-model/`, `integrations/`, `security/`, `data/`, `platform/` |

**Reading order:** [`platform-design/README.md`](platform-design/README.md) → sub-domain READMEs.

**Relationship to `03-architecture/`:** `03-architecture/target-system/` is the NeoBank-specific
implementation contract (Mambu/BankservAfrica/Polygon wiring, `$STM` tokenomics, target data-model
contracts). `06-architecture/platform-design/` is the pattern library it draws on. Where the two
disagree, `03-architecture/target-system/` wins for this program.