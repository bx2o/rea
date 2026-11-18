"use client";

/**
 * FileSystem3D — react-three-fiber 3D file-system scene
 * (VIZ-020 3D file system; VIZ-011 §8.2 view 4; a11y contract VIZ-014 §8.2).
 *
 * Data: fetched at runtime from the committed snapshot
 * `/snapshots/tree.json` (public/snapshots/tree.json — kept out of the JS
 * bundle on purpose; it is multi-megabyte) and reduced to the top 3 tree
 * levels. Each directory becomes a cluster center (octahedron); each file a
 * sphere whose radius is a log scale of its size. Zones are arranged as
 * radial clusters on a circle; zone materials come from `zoneHue(zone,
 * theme)` → `new THREE.Color(...)` (VIZ-017 single source — no hardcoded
 * zone hex). Visible nodes are capped by the HUD density control (Low / Med /
 * High) by sampling the largest files per directory.
 *
 * Theme (UX-09 / UX-10): the scene follows the ACTIVE app theme. An explicit
 * "Light" choice is honoured even when the OS prefers dark; zone hues come
 * from `zoneHue(zone, theme)` and the scene fog is read from the app's CSS
 * tokens, so the scene never renders a dark scheme on a light page.
 *
 * Layout (UX-08): the canvas is full-bleed — it fills the height of the
 * viewport minus the shell bar and cancels the shell gutters — and the HUD
 * (zone legend, reset view, auto-rotation, node density, hint line) is an
 * overlay on top of the canvas. The HUD layer is `pointer-events-none`; only
 * the controls take pointer events, so the canvas stays fully draggable.
 *
 * Interaction: hover → tooltip with path; click → `onSelect` (pages wire it
 * to `/explorer?path=`). Degraded mode (navigator.hardwareConcurrency < 4 or
 * prefers-reduced-motion) renders a THREE.Points version; the Canvas runs
 * `frameloop="demand"` under reduced-motion (drei OrbitControls re-invalidate
 * on change, so damping still settles).
 *
 * Accessibility (VIZ-014 §8.2): the scene container carries role="img" +
 * aria-label + an adjacent text description; a keyboard fallback list gives
 * keyboard/AT users the same open action without the scene; a details panel
 * mirrors the selected node; a polite live region announces load states
 * (SC 4.1.3); the tooltip is Esc-dismissible; degraded mode keeps every text
 * alternative. The HUD controls are real buttons with aria-pressed /
 * aria-label and are keyboard reachable (the HUD layer never blocks the
 * canvas pointer events).
 */

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ElementRef,
} from "react";
import * as THREE from "three";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AlertTriangle, RotateCcw, RotateCw } from "lucide-react";
import { BRAND, ZONE_META, ZONE_ORDER, zoneHue, type Zone } from "@/lib/brand";
import type { FileNode, NodeType } from "@/lib/types";
import { cn, formatBytes, formatExact } from "@/lib/utils";
import {
  hslTripletToRgb,
  readThemeToken,
  useThemeMode,
} from "@/components/explorer/use-zone-theme";

/* ------------------------------------------------------------------ */
/* Public types                                                        */
/* ------------------------------------------------------------------ */

/** Node summary handed to `onSelect` consumers. */
export interface Fs3DSelection {
  path: string;
  name: string;
  zone: Zone;
  type: NodeType;
  size: number;
}

/** One laid-out scene node. */
export interface Fs3DNode extends Fs3DSelection {
  position: [number, number, number];
  radius: number;
}

export interface FileSystem3DProps {
  /** Called when a node is clicked or chosen from the keyboard list. */
  onSelect?: (node: Fs3DSelection) => void;
  className?: string;
  /** Approximate cap on visible nodes (default 600). */
  maxNodes?: number;
}

interface SceneData {
  files: Fs3DNode[];
  dirs: Fs3DNode[];
  byZone: Record<Zone, number>;
}

/* ------------------------------------------------------------------ */
/* Scene construction (pure, deterministic)                             */
/* ------------------------------------------------------------------ */

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const ZONE_RING_RADIUS = 26;
const ZONE_CLUSTER_RADIUS = 15;
const MAX_DIRS_PER_ZONE = 20;
const MIN_FILES_PER_DIR = 2;

/** Deterministic jitter in [-1, 1) — keeps layouts stable across reloads. */
function jitter(seed: number, salt = 1): number {
  const x = Math.sin((seed + 1) * 12.9898 * salt) * 43758.5453;
  return (x - Math.floor(x)) * 2 - 1;
}

interface DirBucket {
  /** null → pseudo bucket for files directly in the repository root. */
  dir: FileNode | null;
  files: FileNode[];
}

function buildScene(root: FileNode[], maxNodes: number): SceneData {
  // Six zone centers arranged on a circle (fixed legend order).
  const zoneCenter = (zone: Zone): [number, number, number] => {
    const index = ZONE_ORDER.indexOf(zone);
    const angle = (index / ZONE_ORDER.length) * Math.PI * 2 - Math.PI / 2;
    return [Math.cos(angle) * ZONE_RING_RADIUS, 0, Math.sin(angle) * ZONE_RING_RADIUS];
  };

  // 1. Collect directories from the top 3 tree levels plus their direct
  //    files. Root-level files get a pseudo bucket per zone.
  const buckets = new Map<Zone, DirBucket[]>();
  for (const zone of ZONE_ORDER) buckets.set(zone, []);

  const pseudoFor = (zone: Zone): DirBucket => {
    const list = buckets.get(zone) ?? [];
    const existing = list.find((bucket) => bucket.dir === null);
    if (existing) return existing;
    const created: DirBucket = { dir: null, files: [] };
    list.unshift(created);
    buckets.set(zone, list);
    return created;
  };

  const walk = (children: FileNode[], depth: number) => {
    for (const child of children) {
      if (child.type === "file") {
        if (depth === 1) pseudoFor(child.zone).files.push(child);
        continue;
      }
      if (depth > 3) continue;
      const directFiles = (child.children ?? []).filter(
        (entry) => entry.type === "file"
      );
      buckets.get(child.zone)?.push({ dir: child, files: directFiles });
      if (depth < 3) walk(child.children ?? [], depth + 1);
    }
  };
  walk(root, 1);

  // 2. Cap directories per zone (largest first), then split the remaining
  //    node budget across directories and sample the largest files per dir.
  const keptByZone = new Map<Zone, DirBucket[]>();
  for (const zone of ZONE_ORDER) {
    const list = buckets.get(zone) ?? [];
    const pseudo = list.find((bucket) => bucket.dir === null);
    const real = list
      .filter((bucket) => bucket.dir !== null)
      .sort((a, b) => (b.dir?.size ?? 0) - (a.dir?.size ?? 0));
    const kept: DirBucket[] = [];
    if (pseudo && pseudo.files.length > 0) kept.push(pseudo);
    for (const bucket of real) {
      if (kept.length >= MAX_DIRS_PER_ZONE) break;
      kept.push(bucket);
    }
    keptByZone.set(zone, kept);
  }

  const dirTotal = [...keptByZone.values()].reduce(
    (total, list) => total + list.length,
    0
  );
  const fileBudget = Math.max(0, maxNodes - dirTotal);
  const totalFiles = [...keptByZone.values()].reduce(
    (total, list) => total + list.reduce((sum, bucket) => sum + bucket.files.length, 0),
    0
  );
  const perDirBudget = (count: number) =>
    totalFiles > 0 && count > 0
      ? Math.max(MIN_FILES_PER_DIR, Math.floor((count / totalFiles) * fileBudget))
      : 0;

  // Log-scale sizing inputs.
  let maxFileSize = 1;
  let maxDirSize = 1;
  for (const zone of ZONE_ORDER) {
    for (const bucket of keptByZone.get(zone) ?? []) {
      if (bucket.dir) maxDirSize = Math.max(maxDirSize, bucket.dir.size || 1);
      for (const file of bucket.files) {
        maxFileSize = Math.max(maxFileSize, file.size || 1);
      }
    }
  }

  // 3. Radial layout: sunflower spacing inside each zone disc.
  const files: Fs3DNode[] = [];
  const dirs: Fs3DNode[] = [];
  const byZone: Record<Zone, number> = {
    docs: 0,
    prompts: 0,
    execution: 0,
    stremiium: 0,
    rea: 0,
    other: 0,
  };

  for (const zone of ZONE_ORDER) {
    const kept = keptByZone.get(zone) ?? [];
    if (kept.length === 0) continue;
    const center = zoneCenter(zone);
    const maxInZone = Math.max(
      ...kept.map((bucket) => bucket.files.length),
      1
    );

    kept.forEach((bucket, bucketIndex) => {
      const distance =
        ZONE_CLUSTER_RADIUS * Math.sqrt((bucketIndex + 0.5) / kept.length);
      const angle = bucketIndex * GOLDEN_ANGLE;

      let dirPosition: [number, number, number] = center;
      let dirName = "(repo root)";
      let dirPath = "";
      let dirSize = bucket.files.reduce((sum, file) => sum + (file.size || 0), 0);
      if (bucket.dir) {
        dirPosition = [
          center[0] + distance * Math.cos(angle),
          jitter(bucketIndex, 3) * 1.5,
          center[2] + distance * Math.sin(angle),
        ];
        dirName = bucket.dir.name;
        dirPath = bucket.dir.path;
        dirSize = bucket.dir.size || 0;
      }

      dirs.push({
        path: dirPath,
        name: dirName,
        zone,
        type: "dir",
        size: dirSize,
        position: dirPosition,
        radius: 0.9 + 0.9 * (Math.log1p(dirSize) / Math.log1p(maxDirSize)),
      });
      byZone[zone] += 1;

      const budget = perDirBudget(bucket.files.length);
      if (budget === 0) return;
      const chosen = [...bucket.files]
        .sort((a, b) => (b.size || 0) - (a.size || 0))
        .slice(0, budget);
      const spread = 2.4 + 3.4 * Math.sqrt(chosen.length / maxInZone);

      chosen.forEach((file, fileIndex) => {
        const fileDistance = spread * Math.sqrt((fileIndex + 0.5) / chosen.length);
        const fileAngle = fileIndex * GOLDEN_ANGLE + 0.6;
        files.push({
          path: file.path,
          name: file.name,
          zone: file.zone,
          type: "file",
          size: file.size || 0,
          position: [
            dirPosition[0] + fileDistance * Math.cos(fileAngle),
            dirPosition[1] + jitter(fileIndex, 5) * 1.4,
            dirPosition[2] + fileDistance * Math.sin(fileAngle),
          ],
          radius:
            0.3 + 0.55 * (Math.log1p(file.size || 0) / Math.log1p(maxFileSize)),
        });
        byZone[zone] += 1;
      });
    });
  }

  // Hard cap: trim the smallest sampled files if min-budget raises overshot.
  const budgetFiles = Math.max(0, maxNodes - dirs.length);
  if (files.length > budgetFiles) {
    const over = files.length - budgetFiles;
    const smallest = files
      .sort((a, b) => a.size - b.size)
      .splice(0, over);
    for (const node of smallest) byZone[node.zone] -= 1;
  }

  return { files, dirs, byZone };
}

/* ------------------------------------------------------------------ */
/* HUD options                                                          */
/* ------------------------------------------------------------------ */

/** Node-density presets — the visible-node cap is `maxNodes × factor`. */
type NodeDensity = "low" | "medium" | "high";

const NODE_DENSITY_OPTIONS: {
  value: NodeDensity;
  label: string;
  factor: number;
}[] = [
  { value: "low", label: "Low", factor: 0.25 },
  { value: "medium", label: "Med", factor: 1 },
  { value: "high", label: "High", factor: 2 },
];

/* ------------------------------------------------------------------ */
/* In-scene components                                                  */
/* ------------------------------------------------------------------ */

interface SceneProps {
  files: Fs3DNode[];
  dirs: Fs3DNode[];
  selectedPath: string | null;
  onSelect: (node: Fs3DNode) => void;
  onHover: (node: Fs3DNode, event: ThreeEvent<PointerEvent>) => void;
  onHoverEnd: () => void;
  zoneColors: Map<Zone, THREE.Color>;
  /** HUD auto-rotation toggle (drives three's OrbitControls autoRotate). */
  autoRotate: boolean;
  /** Bumped by the HUD "Reset view" control — restores the camera framing. */
  resetToken: number;
}

/** "Reset view" — restore the camera + controls to their initial framing. */
function useResetView(resetToken: number) {
  const controlsRef = useRef<ElementRef<typeof OrbitControls>>(null);
  useEffect(() => {
    controlsRef.current?.reset();
  }, [resetToken]);
  return controlsRef;
}

/** Interactive mode: two instanced meshes (files + dirs) with hover/click. */
function InstancedScene({
  files,
  dirs,
  selectedPath,
  onSelect,
  onHover,
  onHoverEnd,
  zoneColors,
  autoRotate,
  resetToken,
}: SceneProps) {
  const invalidate = useThree((state) => state.invalidate);
  const fileMeshRef = useRef<THREE.InstancedMesh>(null);
  const dirMeshRef = useRef<THREE.InstancedMesh>(null);
  const controlsRef = useResetView(resetToken);

  const sphereGeometry = useMemo(() => new THREE.SphereGeometry(1, 12, 12), []);
  const dirGeometry = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);
  const material = useMemo(
    () => new THREE.MeshStandardMaterial({ roughness: 0.55, metalness: 0.1 }),
    []
  );
  // Selected node takes the brand gold (VIZ-017: gold = selected, highlight only).
  const goldColor = useMemo(() => new THREE.Color(BRAND.gold), []);

  // Dispose shared GPU resources on unmount (VIZ-020 performance rules).
  useEffect(
    () => () => {
      sphereGeometry.dispose();
      dirGeometry.dispose();
      material.dispose();
    },
    [sphereGeometry, dirGeometry, material]
  );

  // Write instance matrices + colors; gold marks the selected node.
  useEffect(() => {
    const apply = (mesh: THREE.InstancedMesh | null, nodes: Fs3DNode[]) => {
      if (!mesh) return;
      const matrix = new THREE.Matrix4();
      const quat = new THREE.Quaternion();
      const position = new THREE.Vector3();
      const scale = new THREE.Vector3();
      nodes.forEach((node, index) => {
        position.set(node.position[0], node.position[1], node.position[2]);
        scale.setScalar(node.radius);
        matrix.compose(position, quat, scale);
        mesh.setMatrixAt(index, matrix);
        mesh.setColorAt(
          index,
          node.path === selectedPath
            ? goldColor
            : (zoneColors.get(node.zone) ?? goldColor)
        );
      });
      mesh.count = nodes.length;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    };
    apply(fileMeshRef.current, files);
    apply(dirMeshRef.current, dirs);
    invalidate();
  }, [files, dirs, selectedPath, zoneColors, goldColor, invalidate]);

  const pick = (
    event: ThreeEvent<MouseEvent> | ThreeEvent<PointerEvent>,
    fromFiles: boolean
  ): Fs3DNode | null => {
    const index = event.instanceId;
    if (index == null) return null;
    const node = fromFiles ? files[index] : dirs[index];
    return node ?? null;
  };

  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[60, 90, 40]} intensity={1.7} />
      <directionalLight position={[-70, 20, -60]} intensity={0.5} />

      <instancedMesh
        key={`files-${files.length}`}
        ref={fileMeshRef}
        args={[sphereGeometry, material, Math.max(files.length, 1)]}
        onPointerOver={(event) => {
          event.stopPropagation();
          const node = pick(event, true);
          if (node) onHover(node, event);
        }}
        onPointerMove={(event) => {
          const node = pick(event, true);
          if (node) onHover(node, event);
        }}
        onPointerOut={onHoverEnd}
        onClick={(event) => {
          event.stopPropagation();
          const node = pick(event, true);
          if (node) onSelect(node);
        }}
      />

      <instancedMesh
        key={`dirs-${dirs.length}`}
        ref={dirMeshRef}
        args={[dirGeometry, material, Math.max(dirs.length, 1)]}
        onPointerOver={(event) => {
          event.stopPropagation();
          const node = pick(event, false);
          if (node) onHover(node, event);
        }}
        onPointerMove={(event) => {
          const node = pick(event, false);
          if (node) onHover(node, event);
        }}
        onPointerOut={onHoverEnd}
        onClick={(event) => {
          event.stopPropagation();
          const node = pick(event, false);
          if (node) onSelect(node);
        }}
      />

      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        enablePan={false}
        minDistance={35}
        maxDistance={180}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
      />
    </>
  );
}

/** Degraded mode: a single THREE.Points cloud (no per-node events). */
function PointsScene({
  files,
  dirs,
  zoneColors,
  autoRotate,
  resetToken,
}: Pick<
  SceneProps,
  "files" | "dirs" | "zoneColors" | "autoRotate" | "resetToken"
>) {
  const controlsRef = useResetView(resetToken);

  const geometry = useMemo(() => {
    const all = [...files, ...dirs];
    const positions = new Float32Array(all.length * 3);
    const colors = new Float32Array(all.length * 3);
    all.forEach((node, index) => {
      positions[index * 3] = node.position[0];
      positions[index * 3 + 1] = node.position[1];
      positions[index * 3 + 2] = node.position[2];
      const color = zoneColors.get(node.zone);
      if (color) {
        colors[index * 3] = color.r;
        colors[index * 3 + 1] = color.g;
        colors[index * 3 + 2] = color.b;
      }
    });
    const built = new THREE.BufferGeometry();
    built.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    built.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return built;
  }, [files, dirs, zoneColors]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <>
      <points frustumCulled={false}>
        <primitive object={geometry} attach="geometry" />
        <pointsMaterial size={1.2} sizeAttenuation vertexColors />
      </points>
      {/* No damping in degraded mode: keeps demand-mode frames snappy. */}
      <OrbitControls
        ref={controlsRef}
        enableDamping={false}
        rotateSpeed={0.6}
        enablePan={false}
        minDistance={35}
        maxDistance={180}
        autoRotate={autoRotate}
        autoRotateSpeed={0.6}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

/**
 * Full-bleed scene frame (UX-08): the canvas fills the viewport height minus
 * the shell bar and cancels the shell's horizontal gutters, so the scene is
 * the page surface rather than a boxed card.
 */
const SCENE_FRAME =
  "relative -mx-4 h-[calc(100dvh-3.5rem)] min-h-[420px] w-[calc(100%+2rem)] overflow-hidden bg-gradient-to-b from-background via-background to-secondary/50 md:-mx-6 md:w-[calc(100%+3rem)]";

/** Shared HUD control styling — 44px touch targets, visible focus ring. */
const HUD_BUTTON =
  "inline-flex h-11 items-center justify-center gap-1.5 rounded-lg border border-border/60 bg-secondary/70 px-3 text-xs font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function FileSystem3D({
  onSelect,
  className,
  maxNodes = 600,
}: FileSystem3DProps) {
  const descId = useId();
  const theme = useThemeMode();
  const [root, setRoot] = useState<FileNode[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [lowPower, setLowPower] = useState(false);
  const [selected, setSelected] = useState<Fs3DSelection | null>(null);
  const [hover, setHover] = useState<{ node: Fs3DNode; x: number; y: number } | null>(
    null
  );
  const [announcement, setAnnouncement] = useState(
    "Loading 3D file-system data."
  );
  const [density, setDensity] = useState<NodeDensity>("medium");
  const [autoRotate, setAutoRotate] = useState(false);
  const [resetToken, setResetToken] = useState(0);
  const autoRotateRef = useRef(false);

  const degraded = lowPower || reducedMotion;

  // Density → visible-node cap (the base cap comes from the `maxNodes` prop).
  const densityFactor =
    NODE_DENSITY_OPTIONS.find((option) => option.value === density)?.factor ?? 1;
  const nodeCap = Math.max(60, Math.round(maxNodes * densityFactor));

  // Zone materials — VIZ-017 zone hues for the ACTIVE theme → THREE.Color.
  const zoneColors = useMemo(() => {
    const map = new Map<Zone, THREE.Color>();
    for (const zone of ZONE_ORDER) {
      map.set(zone, new THREE.Color(zoneHue(zone, theme)));
    }
    return map;
  }, [theme]);

  // Scene fog — read from the app's CSS tokens so the scene fades into the
  // current theme's background instead of a fixed dark haze.
  const [fogColor, setFogColor] = useState<THREE.Color | null>(null);
  useEffect(() => {
    const read = () => {
      const rgb = hslTripletToRgb(readThemeToken("--background") ?? "");
      setFogColor(
        rgb
          ? new THREE.Color().setRGB(rgb[0], rgb[1], rgb[2], THREE.SRGBColorSpace)
          : null
      );
    };
    read();
    // The theme class is applied by next-themes in its own effect (after
    // this one), so re-read on the next frame with the settled tokens.
    const raf = requestAnimationFrame(read);
    return () => cancelAnimationFrame(raf);
  }, [theme]);

  // Client environment detection (effects never run during SSR).
  useEffect(() => {
    setMounted(true);
    const query =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const apply = () => {
      const reduced = Boolean(query?.matches);
      setReducedMotion(reduced);
      // Reduced motion: auto-rotation stays off (VIZ-014 §8.4).
      if (reduced) {
        autoRotateRef.current = false;
        setAutoRotate(false);
      }
    };
    apply();
    query?.addEventListener("change", apply);
    const cores =
      typeof navigator !== "undefined"
        ? navigator.hardwareConcurrency ?? 8
        : 8;
    setLowPower(cores < 4);
    return () => query?.removeEventListener("change", apply);
  }, []);

  // Snapshot fetch (cancelled safely on unmount/retry). The tree is kept so a
  // density change re-lays out the scene without re-fetching the snapshot.
  useEffect(() => {
    let cancelled = false;
    setError(null);
    setAnnouncement("Loading 3D file-system data.");
    (async () => {
      try {
        const response = await fetch("/snapshots/tree.json");
        if (!response.ok) {
          throw new Error(`Snapshot request failed with status ${response.status}.`);
        }
        const json = (await response.json()) as { root?: FileNode[] };
        if (!json || !Array.isArray(json.root)) {
          throw new Error("Tree snapshot is malformed.");
        }
        if (cancelled) return;
        setRoot(json.root);
      } catch (caught) {
        if (cancelled) return;
        const message =
          caught instanceof Error
            ? caught.message
            : "Failed to load the tree snapshot.";
        setError(message);
        setAnnouncement(`Failed to load the 3D file system. ${message}`);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reloadKey]);

  // Scene build — re-runs when the density changes the visible-node cap.
  const scene = useMemo(
    () => (root ? buildScene(root, nodeCap) : null),
    [root, nodeCap]
  );

  // Announce the loaded scene (also re-announces the new node count when the
  // density changes).
  useEffect(() => {
    if (!scene) return;
    const zones = ZONE_ORDER.filter((zone) => scene.byZone[zone] > 0).length;
    setAnnouncement(
      `3D file system loaded from snapshot: ${formatExact(
        scene.files.length + scene.dirs.length
      )} visible nodes across ${zones} zones.`
    );
  }, [scene]);

  // Tooltip dismissal (SC 1.4.13 — Esc clears the hover tooltip).
  useEffect(() => {
    if (!hover) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHover(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hover]);

  const handleSelect = useCallback(
    (node: Fs3DSelection) => {
      setSelected(node);
      setAnnouncement(
        `Selected ${node.type === "dir" ? "folder" : "file"} ${node.name}, ${
          ZONE_META[node.zone]?.label ?? node.zone
        } zone.`
      );
      onSelect?.(node);
    },
    [onSelect]
  );

  const handleHover = useCallback(
    (node: Fs3DNode, event: ThreeEvent<PointerEvent>) => {
      const native = event.nativeEvent as PointerEvent;
      setHover({ node, x: native.offsetX, y: native.offsetY });
    },
    []
  );

  const handleResetView = useCallback(() => {
    setResetToken((token) => token + 1);
    setAnnouncement("View reset to the default camera position.");
  }, []);

  const handleToggleAutoRotate = useCallback(() => {
    const next = !autoRotateRef.current;
    autoRotateRef.current = next;
    setAutoRotate(next);
    setAnnouncement(next ? "Auto-rotation on." : "Auto-rotation off.");
  }, []);

  const handleDensity = useCallback((level: NodeDensity) => {
    setDensity(level);
  }, []);

  const topFiles = useMemo(
    () =>
      scene
        ? [...scene.files].sort((a, b) => b.size - a.size).slice(0, 24)
        : [],
    [scene]
  );

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-lg font-semibold tracking-tight">
            3D file system
          </h2>
          <p className="text-xs text-muted-foreground">
            Top 3 tree levels · folders as clusters, files as size-scaled
            spheres
          </p>
        </div>
        <span className="rounded-full border border-border/60 bg-secondary/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {degraded
            ? "Points mode (reduced motion or low-power device)"
            : "Interactive mode"}
        </span>
      </div>

      {error ? (
        <div
          role="alert"
          className={cn(
            SCENE_FRAME,
            "flex flex-col items-center justify-center gap-3 p-6 text-center"
          )}
        >
          <AlertTriangle className="h-8 w-8 text-accent" aria-hidden="true" />
          <p className="text-sm font-medium">
            The 3D scene could not load the repository snapshot.
          </p>
          <p className="max-w-md break-all font-mono text-xs text-muted-foreground">
            {error}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => {
                setError(null);
                setReloadKey((key) => key + 1);
              }}
              className="rounded-lg border border-border/60 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Retry
            </button>
            <a
              href="/explorer"
              className="rounded-lg border border-border/60 px-3 py-1.5 text-sm font-medium hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Open the file list
            </a>
          </div>
        </div>
      ) : (
        <div className={cn(SCENE_FRAME, "isolate")}>
          {/* The scene surface. role="img" stays on its own element so the
              HUD controls below remain in the accessibility tree. */}
          <div
            role="img"
            tabIndex={0}
            aria-label="3D map of the repository: folders as clusters, files as spheres scaled by size, colored by zone"
            aria-describedby={descId}
            className="absolute inset-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {mounted && scene ? (
              <Canvas
                frameloop={reducedMotion && !autoRotate ? "demand" : "always"}
                dpr={[1, 2]}
                camera={{ position: [0, 58, 92], fov: 45 }}
                gl={{
                  antialias: true,
                  alpha: true,
                  powerPreference: "high-performance",
                }}
                onPointerMissed={() => setHover(null)}
              >
                {fogColor ? (
                  <fog attach="fog" args={[fogColor, 70, 210]} />
                ) : null}
                {degraded ? (
                  <PointsScene
                    files={scene.files}
                    dirs={scene.dirs}
                    zoneColors={zoneColors}
                    autoRotate={autoRotate}
                    resetToken={resetToken}
                  />
                ) : (
                  <InstancedScene
                    files={scene.files}
                    dirs={scene.dirs}
                    selectedPath={selected?.path ?? null}
                    onSelect={handleSelect}
                    onHover={handleHover}
                    onHoverEnd={() => setHover(null)}
                    zoneColors={zoneColors}
                    autoRotate={autoRotate}
                    resetToken={resetToken}
                  />
                )}
              </Canvas>
            ) : (
              <div
                className="animate-pulse absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10"
                aria-hidden="true"
              />
            )}
          </div>

          {/* HUD overlay (UX-08) — the layer never blocks canvas pointer
              events; only the controls inside it take pointer events. */}
          <div className="pointer-events-none absolute inset-0 z-10">
            {/* Zone legend — top-left */}
            <div className="glass absolute left-3 top-3 max-w-[52%] rounded-xl px-3 py-2 sm:max-w-[240px]">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Zones
              </h3>
              <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
                {ZONE_ORDER.map((zone) => (
                  <li
                    key={zone}
                    className="flex items-center gap-1.5 text-[11px] text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: zoneHue(zone, theme) }}
                    />
                    <span>{ZONE_META[zone].label}</span>
                    <span className="font-mono tabular-nums">
                      {scene ? formatExact(scene.byZone[zone]) : "–"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Controls — top-right */}
            <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
              <div className="glass pointer-events-auto flex flex-col gap-1.5 rounded-xl p-1.5">
                <button
                  type="button"
                  onClick={handleResetView}
                  aria-label="Reset view to the default camera position"
                  className={HUD_BUTTON}
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset view
                </button>
                <button
                  type="button"
                  onClick={handleToggleAutoRotate}
                  aria-pressed={autoRotate}
                  aria-label="Auto-rotate the scene"
                  className={HUD_BUTTON}
                >
                  <RotateCw className="h-4 w-4" aria-hidden="true" />
                  Auto-rotate
                </button>
              </div>

              <div
                role="group"
                aria-label="Node density"
                className="glass pointer-events-auto flex items-center gap-1 rounded-xl p-1.5"
              >
                {NODE_DENSITY_OPTIONS.map((option) => {
                  const active = density === option.value;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => handleDensity(option.value)}
                      aria-pressed={active}
                      aria-label={`Node density: ${option.label}`}
                      className={cn(
                        "inline-flex h-11 min-w-[44px] items-center justify-center rounded-lg px-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        active
                          ? "bg-primary/15 text-primary"
                          : "text-muted-foreground hover:bg-secondary"
                      )}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hint line — bottom-centre */}
            <p className="absolute inset-x-3 bottom-3 mx-auto w-fit max-w-full rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-center text-[11px] text-muted-foreground backdrop-blur">
              Drag to orbit · scroll to zoom · click a node to open it in the
              Explorer
            </p>
          </div>

          {hover && (
            <div
              style={{ left: hover.x + 14, top: hover.y - 10 }}
              className="pointer-events-none absolute z-20 max-w-[260px] -translate-y-full rounded-lg border border-border/70 bg-popover/95 px-3 py-2 text-xs shadow-lg"
            >
              <p className="break-all font-mono">
                {hover.node.path || hover.node.name}
              </p>
              <p className="mt-0.5 text-muted-foreground">
                {hover.node.type === "dir" ? "Folder" : "File"} ·{" "}
                {ZONE_META[hover.node.zone]?.label ?? hover.node.zone} ·{" "}
                {formatBytes(hover.node.size)}
              </p>
            </div>
          )}
        </div>
      )}

      <p
        id={descId}
        className="mt-3 text-xs leading-relaxed text-muted-foreground"
      >
        Each diamond is a folder cluster and each sphere a file — sphere
        diameter scales with file size (log scale) and the hue matches the
        zone legend in the scene overlay. The scene shows the top 3 levels of
        the repository tree, capped at about {nodeCap} visible nodes (largest
        files per folder); the density control in the overlay changes that
        cap. Drag to orbit, scroll to zoom.
      </p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
        Keyboard note: the 3D scene is a spatial overview. Use the file list
        below to reach every action without the scene.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* Details panel (VIZ-014 §8.2 — no information is 3D-only). */}
        <aside aria-label="Selected node details" className="glass rounded-xl p-4">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Selected node
          </h3>
          {selected ? (
            <div className="mt-2 space-y-1.5 text-sm">
              <p className="font-medium">{selected.name}</p>
              <p className="break-all font-mono text-xs text-muted-foreground">
                {selected.path || "(repository root)"}
              </p>
              <p className="text-xs text-muted-foreground">
                {selected.type === "dir" ? "Folder" : "File"} ·{" "}
                {ZONE_META[selected.zone]?.label ?? selected.zone} zone ·{" "}
                {formatBytes(selected.size)}
              </p>
              <button
                type="button"
                onClick={() => handleSelect(selected)}
                className="mt-2 inline-flex items-center rounded-lg border border-border/60 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Open in Explorer
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-muted-foreground">
              Nothing selected yet — click a sphere or diamond in the scene, or
              pick a file from the keyboard list.
            </p>
          )}
        </aside>

        {/* Keyboard fallback list (VIZ-014 §8.2 data parity for the core action). */}
        <details className="rounded-xl border border-border/60 bg-card/60 p-4">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-wider text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Keyboard fallback — largest visible files
          </summary>
          <ul className="mt-3 max-h-72 space-y-1 overflow-auto">
            {topFiles.map((node) => (
              <li key={node.path}>
                <button
                  type="button"
                  onClick={() => handleSelect(node)}
                  className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: zoneHue(node.zone, theme) }}
                  />
                  <span className="min-w-0 flex-1 truncate font-mono text-xs">
                    {node.path || node.name}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-muted-foreground">
                    {formatBytes(node.size)}
                  </span>
                </button>
              </li>
            ))}
            {topFiles.length === 0 && (
              <li className="px-2 py-1.5 text-sm text-muted-foreground">
                No files loaded yet.
              </li>
            )}
          </ul>
        </details>
      </div>

      <p className="mt-3 text-[11px] text-muted-foreground">
        Data: offline snapshot · public/snapshots/tree.json. Degraded points
        mode keeps every text alternative — degradation never removes the
        accessible path.
      </p>

      <p aria-live="polite" role="status" className="sr-only">
        {announcement}
      </p>
    </div>
  );
}

export default FileSystem3D;
