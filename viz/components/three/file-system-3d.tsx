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
 * "dark")` → `new THREE.Color(...)` (VIZ-017 single source — no hardcoded
 * zone hex). Visible nodes are capped (~600) by sampling the largest files
 * per directory.
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
 * alternative.
 */

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AlertTriangle } from "lucide-react";
import { BRAND, ZONE_META, ZONE_ORDER, zoneHue, type Zone } from "@/lib/brand";
import type { FileNode, NodeType } from "@/lib/types";
import { cn, formatBytes, formatExact } from "@/lib/utils";

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
}: SceneProps) {
  const invalidate = useThree((state) => state.invalidate);
  const fileMeshRef = useRef<THREE.InstancedMesh>(null);
  const dirMeshRef = useRef<THREE.InstancedMesh>(null);

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
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        enablePan={false}
        minDistance={35}
        maxDistance={180}
      />
    </>
  );
}

/** Degraded mode: a single THREE.Points cloud (no per-node events). */
function PointsScene({
  files,
  dirs,
  zoneColors,
}: Pick<SceneProps, "files" | "dirs" | "zoneColors">) {
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
        enableDamping={false}
        rotateSpeed={0.6}
        enablePan={false}
        minDistance={35}
        maxDistance={180}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

const SCENE_FRAME =
  "relative h-[420px] overflow-hidden rounded-xl border border-border/60 bg-gradient-to-b from-background/40 to-secondary/40 sm:h-[560px]";

export function FileSystem3D({
  onSelect,
  className,
  maxNodes = 600,
}: FileSystem3DProps) {
  const descId = useId();
  const [scene, setScene] = useState<SceneData | null>(null);
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

  const degraded = lowPower || reducedMotion;

  // Zone materials — VIZ-017 dark hues via zoneHue → THREE.Color.
  const zoneColors = useMemo(() => {
    const map = new Map<Zone, THREE.Color>();
    for (const zone of ZONE_ORDER) {
      map.set(zone, new THREE.Color(zoneHue(zone, "dark")));
    }
    return map;
  }, []);

  // Client environment detection (effects never run during SSR).
  useEffect(() => {
    setMounted(true);
    const query =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const apply = () => setReducedMotion(Boolean(query?.matches));
    apply();
    query?.addEventListener("change", apply);
    const cores =
      typeof navigator !== "undefined"
        ? navigator.hardwareConcurrency ?? 8
        : 8;
    setLowPower(cores < 4);
    return () => query?.removeEventListener("change", apply);
  }, []);

  // Snapshot fetch → scene build (cancelled safely on unmount/retry).
  useEffect(() => {
    let cancelled = false;
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
        const data = buildScene(json.root, maxNodes);
        setScene(data);
        const zones = ZONE_ORDER.filter((zone) => data.byZone[zone] > 0).length;
        setAnnouncement(
          `3D file system loaded from snapshot: ${formatExact(
            data.files.length + data.dirs.length
          )} visible nodes across ${zones} zones.`
        );
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
  }, [maxNodes, reloadKey]);

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

      <ul className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        {ZONE_ORDER.map((zone) => (
          <li
            key={zone}
            className="flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: zoneHue(zone, "dark") }}
            />
            {ZONE_META[zone].label}
            <span className="font-mono">
              {scene ? formatExact(scene.byZone[zone]) : "–"}
            </span>
          </li>
        ))}
      </ul>

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
        <div
          role="img"
          tabIndex={0}
          aria-label="3D map of the repository: folders as clusters, files as spheres scaled by size, colored by zone"
          aria-describedby={descId}
          className={cn(
            SCENE_FRAME,
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          )}
        >
          {mounted && scene ? (
            <Canvas
              frameloop={reducedMotion ? "demand" : "always"}
              dpr={[1, 2]}
              camera={{ position: [0, 58, 92], fov: 45 }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference: "high-performance",
              }}
              onPointerMissed={() => setHover(null)}
            >
              {degraded ? (
                <PointsScene
                  files={scene.files}
                  dirs={scene.dirs}
                  zoneColors={zoneColors}
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
                />
              )}
            </Canvas>
          ) : (
            <div
              className="animate-pulse absolute inset-0 bg-gradient-to-b from-muted/30 to-muted/10"
              aria-hidden="true"
            />
          )}

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
        diameter scales with file size (log scale) and the hue matches the zone
        legend above. The scene shows the top 3 levels of the repository tree,
        capped at about {maxNodes} visible nodes (largest files per folder).
        Drag to orbit, scroll to zoom.
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
                    style={{ backgroundColor: zoneHue(node.zone, "dark") }}
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
