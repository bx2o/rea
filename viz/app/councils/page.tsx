"use client";

/**
 * VIZ-031 — /councils route.
 *
 * Renders the 16-council Stremiium hierarchy from the committed graph
 * snapshot (public/snapshots/graph.json — the public dir is served at the
 * root, so the client can fetch "/snapshots/graph.json"). The client reads
 * the data through the /api/graph route (FC-09: one data path for the app)
 * and falls back to the raw snapshot when the route is unavailable. Layout:
 * force graph canvas (70%) + node details panel (30%, stacked below on
 * mobile). Below the graph: a node-type legend and an accessible summary
 * table (council → captain → departments) that satisfies the VIZ-014
 * table-alternative requirement for this view.
 *
 * Async-load announcements use a polite live region present in the initial
 * HTML (VIZ-014 §8.7); the error state is an assertive role="alert" with a
 * focusable retry action.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import type { GraphData, GraphNode } from "@/lib/types";
import { CouncilsGraph } from "@/components/graph/councils-graph";
import { NodeDetails, buildAdjacency } from "@/components/graph/node-details";
import { cn } from "@/lib/utils";

type Status = "loading" | "loaded" | "error";

const FOCUS_RING =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

/** Runtime shape guard for the snapshot payload. */
function isGraphData(value: unknown): value is GraphData {
  if (typeof value !== "object" || value === null) return false;
  const v = value as Record<string, unknown>;
  if (!Array.isArray(v.nodes) || !Array.isArray(v.edges)) return false;
  if (v.nodes.length === 0) return false;
  return v.nodes.every((n) => {
    if (typeof n !== "object" || n === null) return false;
    const o = n as Record<string, unknown>;
    return typeof o.id === "string" && typeof o.label === "string" && typeof o.type === "string";
  });
}

/**
 * Accept either the raw snapshot ({ nodes, edges }) or the API envelope
 * ({ source, data: { nodes, edges } }) returned by /api/graph.
 */
function graphFromEnvelope(payload: unknown): GraphData | null {
  if (isGraphData(payload)) return payload;
  if (typeof payload === "object" && payload !== null && !Array.isArray(payload)) {
    const inner = (payload as { data?: unknown }).data;
    if (isGraphData(inner)) return inner;
  }
  return null;
}

/**
 * Council graph payload (FC-09): the /api/graph route is the single data
 * path for the app; the committed snapshot stays as the offline fallback
 * when the route is unavailable.
 */
async function fetchGraphData(): Promise<GraphData> {
  try {
    const res = await fetch("/api/graph", { headers: { Accept: "application/json" } });
    if (res.ok) {
      const envelope: unknown = await res.json();
      const graph = graphFromEnvelope(envelope);
      if (graph !== null) return graph;
    }
  } catch {
    // fall through to the committed snapshot
  }
  const res = await fetch("/snapshots/graph.json");
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json: unknown = await res.json();
  const graph = graphFromEnvelope(json);
  if (graph === null) throw new Error("Malformed graph snapshot");
  return graph;
}

export default function CouncilsPage() {
  const [data, setData] = useState<GraphData | null>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      setData(await fetchGraphData());
      setStatus("loaded");
    } catch {
      setData(null);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  // Default selection: the supreme coordinator once data arrives.
  useEffect(() => {
    if (status !== "loaded" || !data || selectedId !== null) return;
    const sc = data.nodes.find((n) => n.type === "sc");
    if (sc) setSelectedId(sc.id);
  }, [status, data, selectedId]);

  const counts = useMemo(() => {
    const c = { sc: 0, crd: 0, council: 0, department: 0 };
    for (const n of data?.nodes ?? []) {
      if (n.type === "sc" || n.type === "crd" || n.type === "council" || n.type === "department") {
        c[n.type] += 1;
      }
    }
    return c;
  }, [data]);

  const selectedNode: GraphNode | null = useMemo(() => {
    if (!data || selectedId === null) return null;
    return data.nodes.find((n) => n.id === selectedId) ?? null;
  }, [data, selectedId]);

  /** Council rows for the summary table: id, captain (label), departments. */
  const councilRows = useMemo(() => {
    if (!data) return [];
    const { children } = buildAdjacency(data);
    return data.nodes
      .filter((n) => n.type === "council")
      .sort((a, b) => a.id.localeCompare(b.id))
      .map((council) => ({
        council,
        departments: (children.get(council.id) ?? []).filter((d) => d.type === "department"),
      }));
  }, [data]);

  const handleSelect = useCallback((node: GraphNode) => {
    setSelectedId(node.id);
  }, []);

  const announcement =
    status === "loading"
      ? "Loading councils graph data."
      : status === "loaded"
        ? `Councils data loaded: ${counts.council} councils, ${counts.crd} coordinators, ${counts.department} departments.`
        : "Failed to load councils data.";

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 lg:px-8">
      {/* Async status announcements (SC 4.1.3) — present in initial HTML. */}
      <p role="status" aria-live="polite" className="sr-only">
        {announcement}
      </p>

      <header className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground">
            Councils
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
            The Stremiium two-plane hierarchy — the supreme coordinator, CRD coordinators,
            councils and their departments — rendered as a force-directed graph from the
            committed council-department mapping snapshot.
          </p>
        </div>
        {status === "loaded" ? (
          <dl aria-label="Graph totals" className="flex gap-2 sm:gap-3">
            <StatChip label="Councils" value={counts.council} />
            <StatChip label="Coordinators" value={counts.crd} />
            <StatChip label="Departments" value={counts.department} />
          </dl>
        ) : (
          <div className="flex gap-2 sm:gap-3" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-[62px] w-[96px] animate-pulse rounded-lg bg-muted" />
            ))}
          </div>
        )}
      </header>

      {status === "loaded" && data && (
        <ul
          aria-label="Node type legend"
          className="mb-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          <LegendDot size={14} className="bg-primary" label="Supreme Coordinator" />
          <LegendDot size={10} className="bg-primary" label="Council" />
          <LegendDot size={7} className="bg-muted-foreground" label="Coordinator" />
          <LegendDot size={6} className="bg-zone-stremiium" label="Department" />
          <li className="sr-only">Dot size reflects relative node size in the graph.</li>
        </ul>
      )}

      {status === "error" ? (
        <div role="alert" className="rounded-lg border border-destructive bg-card p-6">
          <h2 className="text-base font-semibold text-destructive">
            Failed to load councils data
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            The council graph could not be loaded from /api/graph or the committed
            snapshot at /snapshots/graph.json. The snapshot is generated by
            scripts/snapshot.mjs — run{" "}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">
              npm run snapshot
            </code>{" "}
            in viz/, then retry.
          </p>
          <button
            type="button"
            onClick={() => void load()}
            className={cn(
              "mt-4 rounded-md border bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary",
              FOCUS_RING
            )}
          >
            Retry
          </button>
        </div>
      ) : status === "loading" || !data ? (
        <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
          <div className="h-[480px] animate-pulse rounded-lg border bg-muted sm:h-[560px] lg:h-[600px]" />
          <div className="h-[320px] animate-pulse rounded-lg border bg-muted sm:h-[380px] lg:h-[600px]" />
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-[7fr_3fr]">
          <section aria-label="Council hierarchy graph" className="min-w-0">
            <CouncilsGraph data={data} selectedId={selectedId} onSelect={handleSelect} />
          </section>
          <NodeDetails node={selectedNode} data={data} onSelect={handleSelect} />
        </div>
      )}

      {status === "loaded" && data && (
        <section aria-labelledby="council-summary-heading" className="mt-10">
          <h2
            id="council-summary-heading"
            className="font-heading text-lg font-semibold text-foreground"
          >
            Council summary
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-muted-foreground">
            Text alternative to the graph (VIZ-014 table-alternative requirement): every
            council with its captain and departments. Select a council id to inspect it in
            the panel above.
          </p>
          <div className="mt-3 overflow-x-auto rounded-lg border">
            <table className="w-full min-w-[640px] border-collapse bg-card text-sm">
              <caption className="sr-only">
                Stremiium councils: id, captain and departments, {councilRows.length}{" "}
                councils total.
              </caption>
              <thead>
                <tr className="border-b bg-secondary text-left">
                  <th
                    scope="col"
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Council
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Captain
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Departments
                  </th>
                </tr>
              </thead>
              <tbody>
                {councilRows.map(({ council, departments }) => (
                  <tr key={council.id} className="border-b last:border-b-0">
                    <td className="px-3 py-2 font-medium">
                      <button
                        type="button"
                        onClick={() => handleSelect(council)}
                        className={cn("text-primary underline-offset-2 hover:underline", FOCUS_RING)}
                      >
                        {council.id}
                      </button>
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">{council.label}</td>
                    <td className="px-3 py-2 text-foreground">
                      {departments.length > 0
                        ? departments.map((d) => d.label).join(", ")
                        : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

function StatChip({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-[92px] rounded-lg border bg-card px-3 py-2 text-center">
      <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-0.5 text-xl font-semibold tabular-nums text-foreground">{value}</dd>
    </div>
  );
}

function LegendDot({
  size,
  className,
  label,
}: {
  size: number;
  className: string;
  label: string;
}) {
  return (
    <li className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn("inline-block rounded-full", className)}
        style={{ width: size, height: size }}
      />
      <span>{label}</span>
    </li>
  );
}
