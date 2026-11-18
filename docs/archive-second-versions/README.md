# 99-archive — Preserved Duplicates & Source Snapshots

**No deletions.** This zone preserves source bundles, extracted backups, and tooling scratch. Contents here are **non-authoritative** unless explicitly stated; canonical sources are `.stremiium/`, `.github/`, and the active zones `00-05`.

| Path | Contents | Canonical / note |
|---|---|---|
| [`source-bundles/stremiium.zip`](source-bundles/stremiium.zip) | Original Stremiium agent-OS archive (19.5 MB) | Provenance snapshot |
| [`extracted-snapshots/stremiium-agent-os.full-backup/`](extracted-snapshots/stremiium-agent-os.full-backup/) | Full extracted copy of `.stremiium/` (2,150 files) | **Byte-identical backup** of repo-root [`.stremiium/`](../../.stremiium/) at time of archive; do not execute from here |
| [`tooling-scratch/trae-html-share-packages/`](tooling-scratch/trae-html-share-packages/) | Trae share packages: template zips under `.stremiium/skills/...` and nested duplicate snapshots (`_stremiium_canonical/`, `stremiium_extracted_full_backup/`) | Preserved tooling artifacts; nested copies are non-canonical duplicates |

**Rules:** do not modify or execute from archive copies; treat as read-only provenance/backup. Any restoration or diffing must be explicit and recorded.