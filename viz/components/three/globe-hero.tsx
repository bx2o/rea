"use client";

/**
 * GlobeHero — cobe WebGL globe (VIZ-020 /globe route; VIZ-011 §8.2 view 7).
 *
 * cobe API notes (verified against cobe@2.0.1 dist + index.d.ts):
 * - `createGlobe(canvas, opts)` returns `{ update(state), destroy() }`.
 *   There is NO `onRender` option and no internal rAF loop in cobe 2.x, so
 *   rotation is driven by this component's own requestAnimationFrame loop
 *   calling `globe.update({ phi, theta, width, height })`.
 * - Marker colors are per-marker 0–1 rgb floats written straight to
 *   gl_FragColor. Zone colors come from ZONE_HUES (VIZ-017 single source)
 *   via the local `hexToRgb` conversion — no hardcoded zone hex in JSX.
 * - cobe returns a silent no-op stub when the WebGL context cannot be
 *   created, so the context is probed up front with the same attributes
 *   cobe uses; a failed probe renders the static SVG fallback.
 *
 * Accessibility (VIZ-014 §8.2 / SC 2.2.2): canvas carries role="img" +
 * aria-label + aria-describedby and is focusable; auto-rotation pauses under
 * prefers-reduced-motion and via a visible pause control; the described-by
 * text summarizes what the globe depicts.
 */

import { useCallback, useEffect, useId, useRef, useState } from "react";
import createGlobe, { type Globe, type Marker } from "cobe";
import { Pause, Play } from "lucide-react";
import { ZONE_HUES, ZONE_META, ZONE_ORDER, type Zone } from "@/lib/brand";
import { cn } from "@/lib/utils";

/** cobe marker (re-exported so pages/consumers share the exact cobe contract). */
export type GlobeMarker = Marker;

/** #RRGGBB → [r, g, b] floats in 0–1 (cobe color space). Local util: hex values always originate from ZONE_HUES (VIZ-017 single-source rule). */
export function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace(/^#/, "");
  return [
    Number.parseInt(h.slice(0, 2), 16) / 255,
    Number.parseInt(h.slice(2, 4), 16) / 255,
    Number.parseInt(h.slice(4, 6), 16) / 255,
  ];
}

/** Zone → cobe marker color (ZONE_HUES dark value converted to 0–1 rgb). */
export function zoneMarkerColor(zone: Zone): [number, number, number] {
  return hexToRgb(ZONE_HUES[zone].dark);
}

/** Spread marker positions — one per zone, distributed across the globe faces. */
const ZONE_MARKER_LOCATIONS: Record<Zone, [number, number]> = {
  docs: [30, 10],
  prompts: [50, 100],
  execution: [8, -70],
  stremiium: [-28, 135],
  rea: [42, -98],
  other: [64, 20],
};

/**
 * Build one marker per zone in fixed legend order (VIZ-017 D2).
 * Marker size tracks the zone share of files (sqrt scale, clamped to the
 * readable cobe range 0.04–0.14).
 */
export function buildZoneMarkers(
  byZone: Record<Zone, { files: number }>
): GlobeMarker[] {
  const counts = ZONE_ORDER.map((zone) => byZone[zone]?.files ?? 0);
  const maxFiles = Math.max(...counts, 1);
  return ZONE_ORDER.map((zone, index) => ({
    id: zone,
    location: ZONE_MARKER_LOCATIONS[zone],
    size: 0.04 + 0.1 * Math.sqrt(counts[index] / maxFiles),
    color: zoneMarkerColor(zone),
  }));
}

/** cobe context attributes — mirror cobe's internal request so probing does not change the context. */
const COBE_CONTEXT_ATTRS: WebGLContextAttributes = {
  alpha: true,
  stencil: false,
  antialias: true,
  depth: false,
  preserveDrawingBuffer: false,
};

const THETA = 0.25;
/** ~0.15 rad/s at 60fps — a full rotation in ~42s. */
const PHI_STEP = 0.0025;

interface GlobeHeroProps {
  /** cobe markers; build with `buildZoneMarkers(repoStats.byZone)` or pass a reduced set. */
  markers: GlobeMarker[];
  className?: string;
}

export default function GlobeHero({ markers, className }: GlobeHeroProps) {
  const descId = useId();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const phiRef = useRef(0);
  const pausedRef = useRef(false);
  const reducedRef = useRef(false);
  /** Explicit resume = user opt-in that overrides prefers-reduced-motion (VIZ-014 §8.4). */
  const motionOptInRef = useRef(false);
  const kickRef = useRef<(() => void) | null>(null);
  const [webglFailed, setWebglFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Reduced-motion detection: pause rotation by default, user may resume
  // via the control (VIZ-014 §8.4 "off restores motion only on opt-in").
  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      const reduced = query.matches;
      reducedRef.current = reduced;
      setReducedMotion(reduced);
      if (reduced) {
        pausedRef.current = true;
        motionOptInRef.current = false;
        setPaused(true);
      }
      kickRef.current?.();
    };
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  // Globe lifecycle: create once (re-create only when markers identity or
  // the fallback state changes), drive rotation via cobe's update().
  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap || webglFailed) return;

    const size = { width: 0, height: 0 };
    const measure = () => {
      size.width = Math.max(320, Math.round(wrap.clientWidth));
      size.height = Math.max(320, Math.round(wrap.clientHeight));
    };
    measure();

    // WebGL probe (cobe would silently no-op without a context).
    const gl =
      canvas.getContext("webgl2", COBE_CONTEXT_ATTRS) ??
      canvas.getContext("webgl", COBE_CONTEXT_ATTRS);
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    let globe: Globe | null = null;
    try {
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: size.width,
        height: size.height,
        phi: phiRef.current,
        theta: THETA,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 0.2],
        glowColor: [0.15, 0.5, 0.35],
        markers,
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    let raf = 0;
    let disposed = false;

    const renderOnce = (advance: boolean) => {
      if (disposed || !globe) return;
      if (advance) phiRef.current += PHI_STEP;
      globe.update({
        phi: phiRef.current,
        theta: THETA,
        width: size.width,
        height: size.height,
      });
    };

    const loop = () => {
      raf = 0;
      if (disposed) return;
      if (pausedRef.current || (reducedRef.current && !motionOptInRef.current))
        return;
      renderOnce(true);
      raf = requestAnimationFrame(loop);
    };
    const kick = () => {
      if (!disposed && raf === 0) raf = requestAnimationFrame(loop);
    };
    kickRef.current = kick;

    const observer = new ResizeObserver(() => {
      const previous = { width: size.width, height: size.height };
      measure();
      if (size.width === previous.width && size.height === previous.height) return;
      // Static mode: repaint once; rotating mode picks the new size up next frame.
      if (pausedRef.current || (reducedRef.current && !motionOptInRef.current)) {
        renderOnce(false);
      }
    });
    observer.observe(wrap);

    renderOnce(false); // initial static frame

    return () => {
      disposed = true;
      kickRef.current = null;
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      globe?.destroy();
    };
  }, [markers, webglFailed]);

  const togglePaused = useCallback(() => {
    setPaused((previous) => {
      const next = !previous;
      pausedRef.current = next;
      if (!next) motionOptInRef.current = true;
      return next;
    });
    kickRef.current?.();
  }, []);

  return (
    <div className={cn("relative isolate", className)}>
      <div ref={wrapRef} className="h-full w-full">
        {webglFailed ? (
          <GlobeFallback markers={markers} descId={descId} />
        ) : (
          <canvas
            ref={canvasRef}
            role="img"
            tabIndex={0}
            aria-label="3D globe showing repository zones as markers"
            aria-describedby={descId}
            className="h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          />
        )}
      </div>

      {!webglFailed && (
        <button
          type="button"
          onClick={togglePaused}
          aria-pressed={paused}
          aria-label={paused ? "Resume globe rotation" : "Pause globe rotation"}
          className="glass absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {paused ? (
            <Play className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Pause className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      )}

      <div id={descId} className="sr-only">
        Rotating 3D globe: one marker per repository zone, its color matches the
        zone legend and its size tracks the zone share of repository files.
        Rotation{" "}
        {reducedMotion
          ? "is off because your system prefers reduced motion; the control in the corner can re-enable it."
          : "can be paused and resumed with the control in the corner."}
      </div>
    </div>
  );
}

/** Static fallback when WebGL is unavailable — flat marker map + zone legend. */
function GlobeFallback({
  markers,
  descId,
}: {
  markers: GlobeMarker[];
  descId: string;
}) {
  const toCss = (color: [number, number, number] | undefined) => {
    const [r, g, b] = color ?? [0.6, 0.6, 0.6];
    return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
  };

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-4 p-6"
      aria-describedby={descId}
    >
      <svg
        viewBox="0 0 400 400"
        role="img"
        aria-label="Flat map fallback: repository zone markers arranged around a circle"
        className="h-56 w-56 sm:h-72 sm:w-72"
      >
        <circle
          cx="200"
          cy="200"
          r="196"
          fill="hsl(var(--secondary))"
          stroke="hsl(var(--border))"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(var(--border))"
          strokeDasharray="4 8"
        />
        {markers.map((marker) => {
          const x = 200 + marker.location[1] * 0.85;
          const y = 200 - marker.location[0] * 1.6;
          const r = 5 + Math.min(marker.size, 0.14) * 90;
          return (
            <circle
              key={marker.id ?? `${marker.location[0]}-${marker.location[1]}`}
              cx={x}
              cy={y}
              r={r}
              fill={toCss(marker.color)}
            />
          );
        })}
      </svg>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
        {markers.map((marker) => {
          const zone = ZONE_ORDER.find((z) => z === marker.id);
          return (
            <li
              key={marker.id ?? `${marker.location[0]}-${marker.location[1]}`}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: toCss(marker.color) }}
              />
              {zone && ZONE_META[zone] ? ZONE_META[zone].label : "Marker"}
            </li>
          );
        })}
      </ul>
      <p className="text-center text-xs text-muted-foreground">
        WebGL is unavailable — showing the repository zones as a flat marker map.
      </p>
    </div>
  );
}
