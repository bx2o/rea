#!/usr/bin/env bash
# Dev server supervisor — health-checks localhost:3000 and auto-restarts.
# Kept IN THE REPO so a sandbox /tmp wipe cannot lose it.
set -u
LOGDIR=/workspace/app/viz/.devlogs
mkdir -p "$LOGDIR"
DEV_LOG="$LOGDIR/dev.log"
SUP_LOG="$LOGDIR/supervisor.log"
log() { echo "[$(date -u +%FT%TZ)] $*" >> "$SUP_LOG"; }
health() { curl -s -o /dev/null -w "%{http_code}" --max-time 8 http://localhost:3000/ 2>/dev/null; }
kill_stale() {
  for pid in $(ps -eo pid,args | grep -E "next dev|next-server" | grep -v grep | grep -v kilocode | awk '{print $1}'); do
    kill -9 "$pid" 2>/dev/null || true
  done
  sleep 2
}
start() {
  log "starting dev server"
  cd /workspace/app/viz || return 1
  rm -rf .next-dev
  # CRITICAL: use the LOCAL binary, never `npx next` — npx can fetch Next 16
  # from the network, which expects different internals (.jsonc vs .json) and
  # produces the recurring stale-chunk / Turbopack SyntaxErrors.
  NEXT_DIST_DIR=.next-dev nohup ./node_modules/.bin/next dev -H 0.0.0.0 -p 3000 >> "$DEV_LOG" 2>&1 &
  for i in $(seq 1 90); do
    [ "$(health)" = "200" ] && { log "READY"; return 0; }
    sleep 1
  done
  log "FAILED to start"; return 1
}
log "=== supervisor start ==="
kill_stale
start || log "initial start failed"
fail=0
while true; do
  sleep 5
  if [ "$(health)" = "200" ]; then fail=0; else
    fail=$((fail+1)); log "health fail strike $fail/3"
    [ "$fail" -ge 3 ] && { log "restarting"; kill_stale; start && fail=0; }
  fi
done
