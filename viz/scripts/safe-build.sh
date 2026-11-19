#!/usr/bin/env bash
# ============================================================================
# SAFE BUILD — permanently prevents the recurring dev-server SyntaxErrors
# ("missing ) after argument list" / "Unexpected token '}'").
#
# ROOT CAUSE
# ----------
# Running `next build` inside the live dev workspace (even with NEXT_DIST_DIR
# set to an alternate dir) makes Next.js REGENERATE next-env.d.ts and
# tsconfig.json to reference that alternate dist dir. The running dev server
# watches those files, recompiles against the (later deleted) dist dir, and
# serves a stale/corrupted webpack chunk whose eval() string fails to parse
# in the browser (hence the SyntaxError at chunk line 18).
#
# FIX
# ---
# Build in an ISOLATED COPY of the source (node_modules symlinked). The live
# workspace's next-env.d.ts / tsconfig.json / .next-dev are never touched.
# This script also RESTORES the canonical dev config afterwards as a guard.
# ============================================================================
set -euo pipefail

VIZ_ROOT="/workspace/app/viz"
SNAP_ROOT="/tmp/kilo2/safe-build-viz"
DIST="${NEXT_DIST_DIR:-.next-safe}"

echo "[safe-build] syncing isolated copy at $SNAP_ROOT"
rm -rf "$SNAP_ROOT"
mkdir -p /tmp/kilo2
cp -a "$VIZ_ROOT" "$SNAP_ROOT"
rm -rf "$SNAP_ROOT/.next-dev" "$SNAP_ROOT/.next" "$SNAP_ROOT/.next-prod" "$SNAP_ROOT/.next-safe" "$SNAP_ROOT/.next-critic"* 2>/dev/null || true
ln -sfn "$VIZ_ROOT/node_modules" "$SNAP_ROOT/node_modules"

echo "[safe-build] next-env.d.ts + tsconfig.json are isolated — live dev untouched"
cd "$SNAP_ROOT"
NEXT_DIST_DIR="$DIST" ./node_modules/.bin/next build

echo "[safe-build] restoring canonical dev config in LIVE workspace"
cat > "$VIZ_ROOT/next-env.d.ts" <<'EOF'
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next-dev/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
EOF

# Strip any stale alternate-dist include lines added by builds.
python3 - "$VIZ_ROOT/tsconfig.json" <<'PY'
import json, sys
p = sys.argv[1]
with open(p) as f: cfg = json.load(f)
keep = lambda x: not (x.startswith(".next-critic") or x.startswith(".next-prod") or x.startswith(".next-safe"))
cfg["include"] = [x for x in cfg["include"] if keep(x)]
with open(p, "w") as f: json.dump(cfg, f, indent=2); f.write("\n")
PY

echo "[safe-build] DONE — live dev config canonical; no restart needed"
