/**
 * Data contracts (VIZ-022 §8.1) — the single type source for the viz app.
 * Consumed by API routes, snapshot script, and all views. Do not redefine
 * these shapes elsewhere.
 */
import type { Zone } from "./brand";

export type { Zone };

export type NodeType = "file" | "dir";

/** File-system tree node (VIZ-022 FileNode). */
export interface FileNode {
  path: string;
  name: string;
  type: NodeType;
  size: number;
  zone: Zone;
  children?: FileNode[];
}

/** Git commit record (VIZ-022 CommitRecord). */
export interface CommitRecord {
  sha: string;
  date: string; // ISO-8601
  author: string;
  message: string;
  filesChanged: number;
  insertions: number;
  deletions: number;
}

/** Churn hotspot entry (VIZ-022 ChurnEntry). */
export interface ChurnEntry {
  path: string;
  insertions: number;
  deletions: number;
  commits: number;
}

/** Repository aggregate statistics (VIZ-022 RepoStats). */
export interface RepoStats {
  totalFiles: number;
  totalDirs: number;
  totalCommits: number;
  byZone: Record<Zone, { files: number; dirs: number }>;
  byType: Record<string, number>;
  churnTop: ChurnEntry[];
}

/** Per-file diff summary for one commit (VIZ-022 DiffSummary). */
export interface DiffFile {
  path: string;
  insertions: number;
  deletions: number;
  binary: boolean;
}

export interface DiffSummary {
  sha: string;
  files: DiffFile[];
}

/** Snapshot metadata (VIZ-022 optional SnapshotMeta). */
export interface SnapshotMeta {
  schemaVersion: 1;
  generatedAt: string;
  headSha: string | null; // null → snapshot-only mode (git absent)
  root: string;
}

/** File content + metadata for the viewer (VIZ-021 /api/file). */
export interface FileContent {
  path: string;
  name: string;
  zone: Zone;
  type: NodeType;
  size: number;
  binary: boolean;
  tooLarge: boolean;
  content: string | null; // null when binary/tooLarge
  lastCommit: CommitRecord | null;
}

/** API response envelope with source attribution. */
export interface ApiEnvelope<T> {
  source: "git" | "snapshot";
  data: T;
}

/** Chart data projections (VIZ-015 contracts). */
export interface CommitsOverTimePoint {
  date: string;
  commits: number;
}
export interface TypeMixPoint {
  type: string;
  count: number;
}
export interface ZoneDistPoint {
  zone: Zone;
  files: number;
}

/** Graph data model (VIZ-031). */
export type GraphNodeType =
  | "sc"
  | "crd"
  | "meta"
  | "council"
  | "department"
  | "zone"
  | "folder"
  | "file";

export interface GraphNode {
  id: string;
  type: GraphNodeType;
  label: string;
  zone?: Zone;
  size?: number;
}

export type GraphEdgeType =
  | "parent-of"
  | "routes-to"
  | "maps-to"
  | "cross-references";

export interface GraphEdge {
  source: string;
  target: string;
  type: GraphEdgeType;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

/** Deterministic explanation (VIZ-025 ExplainSummary). */
export interface ExplainSummary {
  path: string;
  zone: Zone;
  type: NodeType;
  size: number;
  lines: number;
  headings: string[];
  symbols: string[];
  todos: number;
  lastCommit: CommitRecord | null;
  churn: ChurnEntry | null;
  council: string | null;
  relatedFiles: string[];
  summary: string;
  confidence: "deterministic";
}

/* ------------------------------------------------------------------ */
/* Guided tours (VIZ-025 tours.json)                                    */
/* ------------------------------------------------------------------ */

/**
 * One step of a guided tour. `route` is an in-app path the step navigates to
 * (e.g. "/explorer?path=prompts"); `filePath` optionally points at the file
 * the step is about.
 */
export interface TourStep {
  id: string;
  title: string;
  description: string;
  route: string;
  filePath?: string;
}

/** A guided tour — an ordered list of steps (public/snapshots/tours.json). */
export interface Tour {
  id: string;
  title: string;
  description: string;
  steps: TourStep[];
}

/** Snapshot wrapper for tours.json — `{ tours: Tour[] }`. */
export interface ToursFile {
  tours: Tour[];
}
