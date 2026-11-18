"use client";

/**
 * VIZ-031 — Councils force-directed graph (2D canvas, self-contained).
 *
 * No d3-force / react-force-graph (offline-first plan rule): the physics is
 * hand-rolled and lives entirely in refs —
 * - Coulomb-like pairwise repulsion, springs along `parent-of` edges, weak
 *   centering gravity, velocity damping with cooling,
 * - deterministic (seeded mulberry32 PRNG + hierarchy-informed start
 *   positions), so the layout is stable across reloads (VIZ-031 §4),
 * - the simulation settles in a FIXED number of ticks (SIM_TICKS = 300) run
 *   SYNCHRONOUSLY on mount, then the graph is static. There is no continuous
 *   rAF loop; redraws are event-driven (hover, select, pan, wheel-zoom,
 *   resize, theme flip, node drag — which re-settles locally, still
 *   synchronously, on pointer events only).
 * - prefers-reduced-motion is honored by construction: nothing ever
 *   animates, final positions paint on the first frame (VIZ-014 D4).
 *
 * Accessibility (VIZ-014 §8.2): the canvas is role="img" with an aria-label
 * and describedby instructions; every node is ALSO a real, focusable button
 * in the grouped node index below the canvas, so node selection never
 * depends on pointer canvas interaction. Zoom is available as buttons as
 * well as the wheel.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { GraphData, GraphNode, GraphNodeType } from "@/lib/types";
import { BRAND, TYPOGRAPHY, ZONE_HUES } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { TYPE_LABEL } from "./node-details";

/* ---------------- Visual constants (VIZ-031 node spec) ---------------- */

/** Circle radius in world px per node type (sc 22, crd 10, council 14, dept 8). */
const NODE_RADIUS: Record<GraphNodeType, number> = {
  sc: 22,
  crd: 10,
  council: 14,
  department: 8,
  meta: 10,
  zone: 12,
  folder: 8,
  file: 5,
};

/** Zoom level at which a type label starts rendering (0 = always visible). */
const LABEL_MIN_ZOOM: Record<GraphNodeType, number> = {
  sc: 0,
  council: 0.4,
  crd: 0.75,
  department: 0.9,
  meta: 0.75,
  zone: 0.6,
  folder: 0.9,
  file: 1.2,
};

const GROUP_ORDER: GraphNodeType[] = ["sc", "crd", "council", "department"];
const GROUP_TITLE: Partial<Record<GraphNodeType, string>> = {
  sc: "Supreme Coordinator",
  crd: "Coordinators",
  council: "Councils",
  department: "Departments",
};

/** Physics: fixed iterations to settlement, run synchronously, then static. */
const SIM_TICKS = 300;
const DRAG_TICKS = 24;
const SETTLE_TICKS = 80;

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/* ---------------- Self-contained force simulation ---------------- */

interface SimNode {
  node: GraphNode;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pinned: boolean;
}

interface SimEdge {
  a: number;
  b: number;
  len: number;
}

/** Deterministic PRNG — stable layout across reloads (VIZ-031 §4 concern). */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Spring rest length per (parent, child) node-type pair. */
function edgeLength(source: GraphNodeType, target: GraphNodeType): number {
  if (source === "sc" && target === "crd") return 150;
  if (source === "sc" && target === "council") return 260;
  if (source === "sc") return 200;
  if (source === "council" && target === "department") return 58;
  if (source === "council" || source === "crd") return 110;
  return 100;
}

function buildSimulation(data: GraphData): { nodes: SimNode[]; edges: SimEdge[] } {
  const rng = mulberry32(0x5eed031);
  const nodes: SimNode[] = data.nodes.map((node) => ({
    node,
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    r: NODE_RADIUS[node.type] ?? 8,
    pinned: false,
  }));
  const index = new Map<string, number>();
  nodes.forEach((n, i) => index.set(n.node.id, i));

  const parentIndex = new Map<string, number>();
  const edges: SimEdge[] = [];
  for (const e of data.edges) {
    const a = index.get(e.source);
    const b = index.get(e.target);
    if (a === undefined || b === undefined || a === b) continue;
    edges.push({ a, b, len: edgeLength(nodes[a].node.type, nodes[b].node.type) });
    parentIndex.set(e.target, a);
  }

  // Hierarchy-informed seed positions: SC at the center, coordinators on an
  // inner ring, councils on an outer ring, children clustered at their parent.
  const placeRing = (list: SimNode[], radius: number, jitter: number) => {
    list.forEach((n, i) => {
      const ang = (i / Math.max(list.length, 1)) * Math.PI * 2 + rng() * jitter;
      n.x = Math.cos(ang) * radius;
      n.y = Math.sin(ang) * radius;
    });
  };

  const seeded = new Set<string>();
  for (const n of nodes) {
    if (n.node.type === "sc") {
      n.x = 0;
      n.y = 0;
      seeded.add(n.node.id);
    }
  }
  const coordinators = nodes.filter((n) => n.node.type === "crd" || n.node.type === "meta");
  placeRing(coordinators, 170, 0.3);
  coordinators.forEach((n) => seeded.add(n.node.id));
  const councils = nodes.filter((n) => n.node.type === "council");
  placeRing(councils, 330, 0.35);
  councils.forEach((n) => seeded.add(n.node.id));

  for (const n of nodes) {
    if (seeded.has(n.node.id)) continue;
    const p = parentIndex.get(n.node.id);
    const parent = p !== undefined ? nodes[p] : undefined;
    if (parent) {
      const ang = rng() * Math.PI * 2;
      const dist = n.r + parent.r + 34 + rng() * 18;
      n.x = parent.x + Math.cos(ang) * dist;
      n.y = parent.y + Math.sin(ang) * dist;
    } else {
      const ang = rng() * Math.PI * 2;
      n.x = Math.cos(ang) * 430;
      n.y = Math.sin(ang) * 430;
    }
  }

  return { nodes, edges };
}

/**
 * One batch of simulation ticks: repulsion → springs → gravity → damped
 * integration with linear cooling. Deterministic and synchronous — the graph
 * is static between batches (never a continuous animation loop).
 */
function runTicks(nodes: SimNode[], edges: SimEdge[], ticks: number): void {
  const REPULSION = 3400; // Coulomb-like constant
  const SPRING = 0.08;
  const GRAVITY = 0.0006;
  const DAMPING = 0.85;
  const MAX_SPEED = 26;
  const WORLD_LIMIT = 4000;

  for (let t = 0; t < ticks; t++) {
    const alpha = Math.max(0.04, 1 - t / ticks);

    // Pairwise repulsion — O(n²) is trivial at 61 nodes.
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let d2 = dx * dx + dy * dy;
        if (d2 < 1e-4) {
          dx = i < j ? 0.7 : -0.7;
          dy = 0.7;
          d2 = 1;
        }
        const d = Math.sqrt(d2);
        const minDist = a.r + b.r + 10;
        let f = REPULSION / d2;
        if (d < minDist) f += (minDist - d) * 0.4; // soft collision separation
        const ux = dx / d;
        const uy = dy / d;
        a.vx -= ux * f;
        a.vy -= uy * f;
        b.vx += ux * f;
        b.vy += uy * f;
      }
    }

    // Springs along edges pull parent and child toward the rest length.
    for (const e of edges) {
      const a = nodes[e.a];
      const b = nodes[e.b];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 0.01;
      const f = (d - e.len) * SPRING;
      const ux = (dx / d) * f;
      const uy = (dy / d) * f;
      a.vx += ux;
      a.vy += uy;
      b.vx -= ux;
      b.vy -= uy;
    }

    // Centering gravity + damped, speed-clamped, cooled integration.
    for (const n of nodes) {
      if (n.pinned) {
        n.vx = 0;
        n.vy = 0;
        continue;
      }
      n.vx -= n.x * GRAVITY;
      n.vy -= n.y * GRAVITY;
      n.vx *= DAMPING;
      n.vy *= DAMPING;
      const speed = Math.hypot(n.vx, n.vy);
      if (speed > MAX_SPEED) {
        n.vx = (n.vx / speed) * MAX_SPEED;
        n.vy = (n.vy / speed) * MAX_SPEED;
      }
      n.x += n.vx * alpha;
      n.y += n.vy * alpha;
      if (!Number.isFinite(n.x)) n.x = 0;
      if (!Number.isFinite(n.y)) n.y = 0;
      n.x = Math.max(-WORLD_LIMIT, Math.min(WORLD_LIMIT, n.x));
      n.y = Math.max(-WORLD_LIMIT, Math.min(WORLD_LIMIT, n.y));
    }
  }
}

/* ---------------- Canvas drawing ---------------- */

interface ViewTransform {
  x: number;
  y: number;
  k: number;
}

interface ThemeColors {
  sc: string;
  crd: string;
  council: string;
  department: string;
  other: string;
  edge: string;
  edgeActive: string;
  label: string;
  labelMuted: string;
  ring: string;
  selected: string;
  core: string;
}

/** Resolve CSS-variable colors + brand anchors for the current theme. */
function resolveColors(): ThemeColors {
  const root = document.documentElement;
  const style = getComputedStyle(root);
  const cssVar = (name: string, fallback: string): string => {
    const v = style.getPropertyValue(name).trim();
    return v ? `hsl(${v})` : fallback;
  };
  const alphaVar = (name: string, alpha: number, fallback: string): string => {
    const v = style.getPropertyValue(name).trim();
    return v ? `hsl(${v} / ${alpha})` : fallback;
  };
  const dark = root.classList.contains("dark");
  // Fallbacks are non-hex CSS colors or brand tokens — VIZ-017 single-source
  // rule keeps every hex literal in lib/brand.ts. The CSS variables always
  // resolve in-app; these are only a defensive safety net.
  const MUTED_FG = "hsl(215 16% 47%)"; // slate-500 neutral
  return {
    // Brand green (BRAND.green) in light, BRAND.greenDark in dark mode.
    sc: dark ? BRAND.greenDark : BRAND.green,
    crd: cssVar("--muted-foreground", MUTED_FG),
    council: cssVar("--primary", BRAND.green),
    department: cssVar("--zone-stremiium", ZONE_HUES.stremiium.light),
    other: cssVar("--muted-foreground", MUTED_FG),
    edge: alphaVar("--muted-foreground", 0.3, "hsl(215 16% 65%)"), // slate-400 neutral
    edgeActive: alphaVar("--primary", 0.85, BRAND.green),
    label: cssVar("--foreground", "hsl(222 47% 11%)"), // slate-900 neutral
    labelMuted: cssVar("--muted-foreground", MUTED_FG),
    ring: cssVar("--ring", BRAND.green),
    selected: BRAND.gold, // VIZ-017: gold is highlight/selected ONLY
    core: cssVar("--background", "white"),
  };
}

function nodeFill(type: GraphNodeType, c: ThemeColors): string {
  switch (type) {
    case "sc":
      return c.sc;
    case "council":
      return c.council;
    case "department":
      return c.department;
    case "crd":
      return c.crd;
    default:
      return c.other;
  }
}

function truncateLabel(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > maxWidth) {
    t = t.slice(0, -1);
  }
  return `${t}…`;
}

/* ---------------- Component ---------------- */

export interface CouncilsGraphProps {
  data: GraphData;
  selectedId: string | null;
  onSelect: (node: GraphNode) => void;
}

interface DragState {
  mode: "none" | "pan" | "node";
  pointerId: number;
  startSx: number;
  startSy: number;
  lastSx: number;
  lastSy: number;
  moved: boolean;
  nodeIndex: number;
  offsetWx: number;
  offsetWy: number;
}

const NO_DRAG: DragState = {
  mode: "none",
  pointerId: -1,
  startSx: 0,
  startSy: 0,
  lastSx: 0,
  lastSy: 0,
  moved: false,
  nodeIndex: -1,
  offsetWx: 0,
  offsetWy: 0,
};

export function CouncilsGraph({ data, selectedId, onSelect }: CouncilsGraphProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const simRef = useRef<{ nodes: SimNode[]; edges: SimEdge[] } | null>(null);
  const viewRef = useRef<ViewTransform>({ x: 0, y: 0, k: 1 });
  const dragRef = useRef<DragState>(NO_DRAG);
  const userAdjustedRef = useRef(false);
  const hoveredRef = useRef<GraphNode | null>(null);
  const selectedIdRef = useRef<string | null>(selectedId);
  const tooltipPosRef = useRef({ x: 12, y: 12 });
  const [hovered, setHovered] = useState<GraphNode | null>(null);

  /** Connection degree per node id (tooltip). */
  const degrees = useMemo(() => {
    const m = new Map<string, number>();
    for (const e of data.edges) {
      m.set(e.source, (m.get(e.source) ?? 0) + 1);
      m.set(e.target, (m.get(e.target) ?? 0) + 1);
    }
    return m;
  }, [data]);

  const counts = useMemo(() => {
    const c = { sc: 0, crd: 0, council: 0, department: 0 };
    for (const n of data.nodes) {
      if (n.type === "sc" || n.type === "crd" || n.type === "council" || n.type === "department") {
        c[n.type] += 1;
      }
    }
    return c;
  }, [data]);

  /** Grouped node index (SC, Coordinators, Councils, Departments). */
  const groups = useMemo(() => {
    const buckets = new Map<GraphNodeType, GraphNode[]>();
    for (const t of GROUP_ORDER) buckets.set(t, []);
    const extras: GraphNode[] = [];
    for (const n of data.nodes) {
      const b = buckets.get(n.type);
      if (b) b.push(n);
      else extras.push(n);
    }
    const result: Array<{ key: string; title: string; nodes: GraphNode[] }> = [];
    for (const t of GROUP_ORDER) {
      const nodes = buckets.get(t);
      if (nodes && nodes.length > 0) {
        result.push({ key: t, title: GROUP_TITLE[t] ?? t, nodes });
      }
    }
    if (extras.length > 0) result.push({ key: "other", title: "Other", nodes: extras });
    return result;
  }, [data]);

  /** Fit the layout bounding box into the viewport. */
  const fitView = useCallback(() => {
    const sim = simRef.current;
    const wrap = wrapRef.current;
    if (!sim || !wrap) return;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (w === 0 || h === 0 || sim.nodes.length === 0) return;
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const n of sim.nodes) {
      minX = Math.min(minX, n.x - n.r);
      minY = Math.min(minY, n.y - n.r);
      maxX = Math.max(maxX, n.x + n.r);
      maxY = Math.max(maxY, n.y + n.r);
    }
    const pad = 28;
    const k = Math.max(
      0.2,
      Math.min(
        (w - pad * 2) / Math.max(maxX - minX, 1),
        (h - pad * 2 - 16) / Math.max(maxY - minY, 1),
        1.6
      )
    );
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    viewRef.current = { k, x: w / 2 - cx * k, y: h / 2 - cy * k };
  }, []);

  /** Static redraw — screen space, DPR-aware, theme-reactive. */
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const sim = simRef.current;
    if (!canvas || !wrap || !sim) return;
    const dpr = window.devicePixelRatio || 1;
    const w = wrap.clientWidth;
    const h = wrap.clientHeight;
    if (w === 0 || h === 0) return;
    const bw = Math.max(1, Math.round(w * dpr));
    const bh = Math.max(1, Math.round(h * dpr));
    if (canvas.width !== bw || canvas.height !== bh) {
      canvas.width = bw;
      canvas.height = bh;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const v = viewRef.current;
    const colors = resolveColors();
    const hoveredId = hoveredRef.current?.id ?? null;
    const focusId = selectedIdRef.current;
    const sx = (n: SimNode) => n.x * v.k + v.x;
    const sy = (n: SimNode) => n.y * v.k + v.y;

    // Edges — plain pass, then an accent pass for edges touching the
    // hovered or selected node.
    ctx.lineWidth = 1;
    ctx.strokeStyle = colors.edge;
    const active: number[] = [];
    for (let i = 0; i < sim.edges.length; i++) {
      const e = sim.edges[i];
      const a = sim.nodes[e.a];
      const b = sim.nodes[e.b];
      const isActive =
        a.node.id === hoveredId ||
        b.node.id === hoveredId ||
        a.node.id === focusId ||
        b.node.id === focusId;
      if (isActive) {
        active.push(i);
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(sx(a), sy(a));
      ctx.lineTo(sx(b), sy(b));
      ctx.stroke();
    }
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = colors.edgeActive;
    for (const i of active) {
      const e = sim.edges[i];
      const a = sim.nodes[e.a];
      const b = sim.nodes[e.b];
      ctx.beginPath();
      ctx.moveTo(sx(a), sy(a));
      ctx.lineTo(sx(b), sy(b));
      ctx.stroke();
    }

    // Nodes.
    for (const n of sim.nodes) {
      const px = sx(n);
      const py = sy(n);
      if (px < -80 || px > w + 80 || py < -80 || py > h + 80) continue;
      const r = Math.max(n.r * v.k, n.node.type === "sc" ? 8 : 2);
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = nodeFill(n.node.type, colors);
      ctx.fill();
      if (n.node.type === "sc") {
        // Concentric core marks the root node.
        ctx.beginPath();
        ctx.arc(px, py, Math.max(r * 0.45, 3), 0, Math.PI * 2);
        ctx.fillStyle = colors.core;
        ctx.fill();
      }
      if (n.node.id === focusId) {
        ctx.beginPath();
        ctx.arc(px, py, r + 4, 0, Math.PI * 2);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = colors.selected;
        ctx.stroke();
      } else if (n.node.id === hoveredId) {
        ctx.beginPath();
        ctx.arc(px, py, r + 3, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = colors.ring;
        ctx.stroke();
      }
    }

    // Labels — screen-constant size, per-type zoom gating, truncated.
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    for (const n of sim.nodes) {
      const minZoom = LABEL_MIN_ZOOM[n.node.type] ?? 1;
      if (v.k < minZoom) continue;
      const px = sx(n);
      const py = sy(n);
      if (px < -100 || px > w + 100 || py < -40 || py > h + 40) continue;
      const r = Math.max(n.r * v.k, n.node.type === "sc" ? 8 : 2);
      const muted =
        n.node.type === "crd" ||
        n.node.type === "department" ||
        n.node.type === "folder" ||
        n.node.type === "file";
      const weight = n.node.type === "sc" ? "700" : n.node.type === "council" ? "600" : "400";
      const size = n.node.type === "sc" ? 12 : n.node.type === "council" ? 11 : 10;
      ctx.font = `${weight} ${size}px ${TYPOGRAPHY.body}`;
      ctx.fillStyle = muted ? colors.labelMuted : colors.label;
      ctx.fillText(truncateLabel(ctx, n.node.label, 130), px, py + r + 4);
    }
  }, []);

  /** Nearest node within its (scaled) radius plus a slop margin. */
  const hitTest = (sxPos: number, syPos: number): number => {
    const sim = simRef.current;
    const v = viewRef.current;
    if (!sim) return -1;
    let best = -1;
    let bestDist = Infinity;
    for (let i = 0; i < sim.nodes.length; i++) {
      const n = sim.nodes[i];
      const dx = sxPos - (n.x * v.k + v.x);
      const dy = syPos - (n.y * v.k + v.y);
      const dist = Math.hypot(dx, dy);
      const hitRadius = Math.max(n.r * v.k, 4) + 8;
      if (dist <= hitRadius && dist < bestDist) {
        best = i;
        bestDist = dist;
      }
    }
    return best;
  };

  /** Zoom by a factor around a screen point (default: viewport center). */
  const zoomAt = useCallback(
    (factor: number, px?: number, py?: number) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const v = viewRef.current;
      const cx = px ?? wrap.clientWidth / 2;
      const cy = py ?? wrap.clientHeight / 2;
      const k = Math.min(3.5, Math.max(0.2, v.k * factor));
      const scale = k / v.k;
      viewRef.current = { k, x: cx - (cx - v.x) * scale, y: cy - (cy - v.y) * scale };
      userAdjustedRef.current = true;
      draw();
    },
    [draw]
  );

  // Keep the imperative draw path in sync with the selectedId prop.
  useEffect(() => {
    selectedIdRef.current = selectedId;
  }, [selectedId]);

  // Build + settle the simulation SYNCHRONOUSLY (fixed 300 ticks, no rAF,
  // no settle animation — reduced-motion safe by construction), then fit.
  useEffect(() => {
    const sim = buildSimulation(data);
    simRef.current = sim;
    runTicks(sim.nodes, sim.edges, SIM_TICKS);
    userAdjustedRef.current = false;
    fitView();
    draw();
  }, [data, fitView, draw]);

  // Redraw after every render (hover/selection changes) and keep the
  // tooltip glued to its last pointer position.
  useEffect(() => {
    draw();
    const el = tooltipRef.current;
    if (el) {
      el.style.left = `${tooltipPosRef.current.x}px`;
      el.style.top = `${tooltipPosRef.current.y}px`;
    }
  });

  // Resize: refit while the user has not panned/zoomed manually.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => {
      if (!userAdjustedRef.current) fitView();
      draw();
    });
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [fitView, draw]);

  // Theme flips (next-themes .dark class) — recolor and redraw.
  useEffect(() => {
    const obs = new MutationObserver(() => draw());
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, [draw]);

  // Wheel zoom — non-passive so preventDefault stops page scroll.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const factor = Math.exp(
        -e.deltaY * (e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 0.06 : 0.0016)
      );
      zoomAt(factor, e.clientX - rect.left, e.clientY - rect.top);
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [zoomAt]);

  /* ----- Pointer interaction: hover tooltip, pan, node drag, click ----- */

  const onPointerDown = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const hit = hitTest(x, y);
    const sim = simRef.current;
    const drag: DragState = {
      mode: hit >= 0 && sim ? "node" : "pan",
      pointerId: e.pointerId,
      startSx: x,
      startSy: y,
      lastSx: x,
      lastSy: y,
      moved: false,
      nodeIndex: hit,
      offsetWx: 0,
      offsetWy: 0,
    };
    if (drag.mode === "node" && sim && hit >= 0) {
      const n = sim.nodes[hit];
      const v = viewRef.current;
      drag.offsetWx = n.x - (x - v.x) / v.k;
      drag.offsetWy = n.y - (y - v.y) / v.k;
      n.pinned = true;
    }
    dragRef.current = drag;
    hoveredRef.current = null;
    setHovered(null);
    canvas.style.cursor = "grabbing";
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {
      // pointer capture is best-effort
    }
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const sim = simRef.current;
    if (!canvas || !sim) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const drag = dragRef.current;

    if (drag.mode === "none") {
      // Hover: nearest node within radius → highlight + tooltip.
      const hit = hitTest(x, y);
      const node = hit >= 0 ? sim.nodes[hit].node : null;
      if (node !== hoveredRef.current) {
        hoveredRef.current = node;
        setHovered(node);
      }
      if (node) {
        tooltipPosRef.current = {
          x: Math.max(8, Math.min(x + 14, rect.width - 260)),
          y: Math.max(8, Math.min(y + 16, rect.height - 100)),
        };
        const el = tooltipRef.current;
        if (el) {
          el.style.left = `${tooltipPosRef.current.x}px`;
          el.style.top = `${tooltipPosRef.current.y}px`;
        }
      }
      canvas.style.cursor = node ? "pointer" : "grab";
      return;
    }

    const dx = x - drag.lastSx;
    const dy = y - drag.lastSy;
    drag.lastSx = x;
    drag.lastSy = y;
    if (Math.abs(x - drag.startSx) + Math.abs(y - drag.startSy) > 6) drag.moved = true;

    if (drag.mode === "pan") {
      const v = viewRef.current;
      viewRef.current = { k: v.k, x: v.x + dx, y: v.y + dy };
      userAdjustedRef.current = true;
      draw();
    } else if (drag.mode === "node" && drag.nodeIndex >= 0) {
      const v = viewRef.current;
      const n = sim.nodes[drag.nodeIndex];
      n.x = (x - v.x) / v.k + drag.offsetWx;
      n.y = (y - v.y) / v.k + drag.offsetWy;
      // Local re-settle (synchronous, still no animation loop).
      runTicks(sim.nodes, sim.edges, DRAG_TICKS);
      userAdjustedRef.current = true;
      draw();
    }
  };

  const endDrag = (e: ReactPointerEvent<HTMLCanvasElement>, allowSelect: boolean) => {
    const canvas = canvasRef.current;
    const sim = simRef.current;
    const drag = dragRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (sim) {
        if (drag.mode === "node" && drag.nodeIndex >= 0) {
          const n = sim.nodes[drag.nodeIndex];
          n.pinned = false;
          runTicks(sim.nodes, sim.edges, SETTLE_TICKS);
          draw();
        }
        // Click (not drag) on a node → select.
        if (allowSelect && !drag.moved) {
          const hit = hitTest(x, y);
          if (hit >= 0) onSelect(sim.nodes[hit].node);
        }
      }
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // not captured
      }
      canvas.style.cursor = hitTest(x, y) >= 0 ? "pointer" : "grab";
    }
    dragRef.current = { ...NO_DRAG };
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLCanvasElement>) => endDrag(e, true);
  const onPointerCancel = (e: ReactPointerEvent<HTMLCanvasElement>) => endDrag(e, false);

  const onPointerLeave = () => {
    if (dragRef.current.mode !== "none") return;
    hoveredRef.current = null;
    setHovered(null);
  };

  const canvasAriaLabel = `Force-directed map of the Stremiium council hierarchy: ${counts.sc} supreme coordinator, ${counts.crd} coordinators, ${counts.council} councils and ${counts.department} departments, edges running from parent to child.`;
  const hoveredDegree = hovered ? degrees.get(hovered.id) ?? 0 : 0;

  return (
    <div>
      <div
        ref={wrapRef}
        className="relative h-[480px] w-full overflow-hidden rounded-lg border bg-card sm:h-[560px] lg:h-[600px]"
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={canvasAriaLabel}
          aria-describedby="councils-graph-help"
          className="absolute inset-0 h-full w-full touch-none"
          style={{ cursor: "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onPointerLeave={onPointerLeave}
        />

        {/* Zoom controls — keyboard-reachable alternative to wheel zoom. */}
        <div className="absolute bottom-2 right-2 flex flex-col gap-1">
          <button
            type="button"
            aria-label="Zoom in"
            title="Zoom in"
            onClick={() => zoomAt(1.25)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-secondary",
              FOCUS_RING
            )}
          >
            <ZoomInIcon />
          </button>
          <button
            type="button"
            aria-label="Zoom out"
            title="Zoom out"
            onClick={() => zoomAt(0.8)}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-secondary",
              FOCUS_RING
            )}
          >
            <ZoomOutIcon />
          </button>
          <button
            type="button"
            aria-label="Reset view to fit"
            title="Reset view"
            onClick={() => {
              userAdjustedRef.current = false;
              fitView();
              draw();
            }}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-md border bg-background text-foreground shadow-sm hover:bg-secondary",
              FOCUS_RING
            )}
          >
            <FrameIcon />
          </button>
        </div>

        {/* Hover tooltip: type + label + connections count. */}
        {hovered && (
          <div
            ref={tooltipRef}
            role="tooltip"
            className="pointer-events-none absolute z-20 max-w-[250px] rounded-md border bg-popover px-3 py-2 text-left shadow-md"
            style={{ left: tooltipPosRef.current.x, top: tooltipPosRef.current.y }}
          >
            <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
              {TYPE_LABEL[hovered.type]}
            </p>
            <p className="mt-0.5 break-words text-sm font-medium text-popover-foreground">
              {hovered.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {hoveredDegree} connection{hoveredDegree === 1 ? "" : "s"}
            </p>
          </div>
        )}
      </div>

      <p id="councils-graph-help" className="mt-2 text-xs text-muted-foreground">
        Drag the background to pan, scroll to zoom, hover a node for a tooltip, click to
        select it. Keyboard and screen-reader users: every node is also a button in the
        node index below.
      </p>

      {/* Keyboard/screen-reader node index (VIZ-014 §8.2 fallback). */}
      <section aria-labelledby="councils-graph-index" className="mt-4">
        <h3
          id="councils-graph-index"
          className="text-xs font-semibold uppercase tracking-wide text-muted-foreground"
        >
          Node index
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          All {data.nodes.length} nodes as buttons, grouped by type. Activating a node
          selects it.
        </p>
        <div className="mt-3 space-y-3">
          {groups.map((g) => (
            <div key={g.key}>
              <h4 className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                {g.title} · {g.nodes.length}
              </h4>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {g.nodes.map((n) => (
                  <li key={n.id}>
                    <button
                      type="button"
                      aria-pressed={n.id === selectedId}
                      onClick={() => onSelect(n)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-xs transition-colors",
                        FOCUS_RING,
                        n.id === selectedId
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card text-secondary-foreground hover:border-primary hover:text-primary"
                      )}
                    >
                      {n.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ---------------- Inline icons (lucide-style, zero deps) ---------------- */

function ZoomInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function ZoomOutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function FrameIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M16 3h3a2 2 0 0 1 2 2v3" />
      <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}
