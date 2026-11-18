"use client";

/**
 * VIZ-031 — Node details panel for the councils graph (/councils).
 *
 * Shows the selected node as text (data parity with the canvas per VIZ-014
 * §8.2: no information is hover-only or canvas-only):
 * - type badge + label + connection count,
 * - parents ("Reports to") and children as clickable buttons → onSelect,
 * - council nodes: their departments, each with an Explorer deep link,
 * - "View in Explorer" link for nodes that map to prompts/stremiium/<dir>.
 *
 * Department ids are "C03:c03-admin-knowledge" — the part after ":" is the
 * directory name under prompts/stremiium (VIZ-031 §8.4 mapping rule).
 */

import { useMemo } from "react";
import type { GraphData, GraphNode, GraphNodeType } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Human-readable labels for graph node types (VIZ-031). */
export const TYPE_LABEL: Record<GraphNodeType, string> = {
  sc: "Supreme Coordinator",
  crd: "Coordinator",
  council: "Council",
  department: "Department",
  meta: "Meta council",
  zone: "Zone",
  folder: "Folder",
  file: "File",
};

const BADGE_CLASS: Record<GraphNodeType, string> = {
  sc: "bg-primary text-primary-foreground",
  crd: "bg-muted text-muted-foreground",
  council: "border border-primary text-primary",
  department: "border border-zone-stremiium text-zone-stremiium",
  meta: "bg-muted text-muted-foreground",
  zone: "bg-muted text-muted-foreground",
  folder: "bg-muted text-muted-foreground",
  file: "bg-muted text-muted-foreground",
};

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/** Root of the per-council prompt tree for Explorer deep links. */
const STREMIIUM_PROMPTS = "prompts/stremiium";

/**
 * Directory name under prompts/stremiium for a council/department node.
 * "C01:c01-legal-compliance" → "c01-legal-compliance"; null when the node
 * does not carry the "<council>:<department>" id convention.
 */
export function departmentDir(node: GraphNode): string | null {
  if (node.type !== "council" && node.type !== "department") return null;
  const i = node.id.indexOf(":");
  if (i === -1) return node.type === "department" ? node.id : null;
  return node.id.slice(i + 1).trim() || null;
}

/** Explorer deep link for a department directory (drill-down per VIZ-031 §9). */
export function explorerHref(dir: string): string {
  return `/explorer?path=${encodeURIComponent(`${STREMIIUM_PROMPTS}/${dir}`)}`;
}

export interface Adjacency {
  byId: Map<string, GraphNode>;
  parents: Map<string, GraphNode[]>;
  children: Map<string, GraphNode[]>;
}

/** Incoming (parents) and outgoing (children) adjacency from the edge list. */
export function buildAdjacency(data: GraphData): Adjacency {
  const byId = new Map<string, GraphNode>(data.nodes.map((n) => [n.id, n]));
  const parents = new Map<string, GraphNode[]>();
  const children = new Map<string, GraphNode[]>();
  for (const e of data.edges) {
    const s = byId.get(e.source);
    const t = byId.get(e.target);
    if (!s || !t || s.id === t.id) continue;
    const c = children.get(s.id);
    if (c) c.push(t);
    else children.set(s.id, [t]);
    const p = parents.get(t.id);
    if (p) p.push(s);
    else parents.set(t.id, [s]);
  }
  return { byId, parents, children };
}

export interface NodeDetailsProps {
  node: GraphNode | null;
  data: GraphData;
  onSelect: (node: GraphNode) => void;
}

export function NodeDetails({ node, data, onSelect }: NodeDetailsProps) {
  const adjacency = useMemo(() => buildAdjacency(data), [data]);

  if (!node) {
    return (
      <aside
        aria-label="Node details"
        className="flex h-[320px] flex-col items-center justify-center rounded-lg border bg-card p-6 text-center sm:h-[380px] lg:h-[600px]"
      >
        <p className="max-w-xs text-sm text-muted-foreground">
          Select a node in the graph, in the node index, or in the summary table to inspect it here.
        </p>
      </aside>
    );
  }

  const parents = adjacency.parents.get(node.id) ?? [];
  const children = adjacency.children.get(node.id) ?? [];
  const departments = children.filter((c) => c.type === "department");
  const coordinatorChildren = children.filter((c) => c.type === "crd");
  const councilChildren = children.filter((c) => c.type === "council");
  const otherChildren = children.filter(
    (c) => c.type !== "department" && c.type !== "crd" && c.type !== "council"
  );
  const degree = parents.length + children.length;

  // Councils map to their first (primary) department directory; departments
  // map to the directory part of their own id.
  const primaryDir =
    node.type === "council" && departments.length > 0
      ? departmentDir(departments[0])
      : departmentDir(node);

  return (
    <aside
      aria-label="Node details"
      className="flex h-[320px] flex-col gap-4 overflow-y-auto rounded-lg border bg-card p-4 sm:h-[380px] lg:h-[600px]"
    >
      {/* Selection announcement (VIZ-014 §8.7) — polite, short, debounced by render. */}
      <p className="sr-only" aria-live="polite">
        {`Selected: ${node.label}.`}
      </p>
      <div>
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium",
            BADGE_CLASS[node.type]
          )}
        >
          {TYPE_LABEL[node.type]}
        </span>
        <h2 className="mt-2 break-words font-heading text-base font-semibold text-foreground">
          {node.label}
        </h2>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {degree} connection{degree === 1 ? "" : "s"} · node{" "}
          <span className="font-mono">{node.id}</span>
        </p>
      </div>

      {primaryDir && (
        <div>
          <a
            href={explorerHref(primaryDir)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:opacity-90",
              FOCUS_RING
            )}
          >
            View in Explorer
            <ExternalLinkIcon />
          </a>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Maps to {STREMIIUM_PROMPTS}/{primaryDir} in the Explorer.
          </p>
        </div>
      )}

      {parents.length > 0 && (
        <section aria-label="Parents">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Reports to
          </h3>
          <ul className="mt-1.5 space-y-1">
            {parents.map((p) => (
              <li key={p.id}>
                <NodeButton node={p} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {node.type === "council" && (
        <section aria-label="Departments">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Departments · {departments.length}
          </h3>
          {departments.length > 0 ? (
            <ul className="mt-1.5 space-y-1.5">
              {departments.map((d) => {
                const dir = departmentDir(d);
                return (
                  <li
                    key={d.id}
                    className="flex items-center justify-between gap-2 rounded-md border bg-secondary px-2.5 py-1.5"
                  >
                    <NodeButton node={d} onSelect={onSelect} />
                    {dir && (
                      <a
                        href={explorerHref(dir)}
                        className={cn(
                          "inline-flex shrink-0 items-center gap-1 text-xs text-primary hover:underline",
                          FOCUS_RING
                        )}
                      >
                        Explorer
                        <ExternalLinkIcon className="h-3 w-3" />
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="mt-1.5 text-xs text-muted-foreground">
              No departments in this snapshot.
            </p>
          )}
        </section>
      )}

      {node.type === "sc" && coordinatorChildren.length > 0 && (
        <section aria-label="Coordinators">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Coordinators · {coordinatorChildren.length}
          </h3>
          <ChipList nodes={coordinatorChildren} onSelect={onSelect} />
        </section>
      )}

      {node.type === "sc" && councilChildren.length > 0 && (
        <section aria-label="Councils">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Councils · {councilChildren.length}
          </h3>
          <ChipList nodes={councilChildren} onSelect={onSelect} />
        </section>
      )}

      {node.type !== "council" && node.type !== "sc" && otherChildren.length > 0 && (
        <section aria-label="Direct children">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Direct children · {otherChildren.length}
          </h3>
          <ul className="mt-1.5 space-y-1">
            {otherChildren.map((c) => (
              <li key={c.id}>
                <NodeButton node={c} onSelect={onSelect} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {children.length === 0 && (
        <p className="text-xs text-muted-foreground">
          {node.type === "crd"
            ? "Leaf node in this snapshot — CRD staff assignments to councils are not modeled as edges yet."
            : "No outgoing edges in this snapshot."}
        </p>
      )}
    </aside>
  );
}

/** Clickable node reference — selects the node in the graph. */
function NodeButton({
  node,
  onSelect,
}: {
  node: GraphNode;
  onSelect: (node: GraphNode) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(node)}
      className={cn(
        "min-w-0 flex-1 break-words text-left text-sm font-medium text-primary underline-offset-2 hover:underline",
        FOCUS_RING
      )}
    >
      {node.label}
    </button>
  );
}

function ChipList({
  nodes,
  onSelect,
}: {
  nodes: GraphNode[];
  onSelect: (node: GraphNode) => void;
}) {
  return (
    <ul className="mt-1.5 flex flex-wrap gap-1.5">
      {nodes.map((n) => (
        <li key={n.id}>
          <button
            type="button"
            onClick={() => onSelect(n)}
            className={cn(
              "rounded-full border border-border bg-card px-2.5 py-1 text-xs text-secondary-foreground hover:border-primary hover:text-primary",
              FOCUS_RING
            )}
          >
            {n.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("h-3.5 w-3.5", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}
