"use client";

import * as React from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbProps {
  /**
   * Repo-relative path of the selection (file or directory). null →
   * root-only breadcrumb.
   */
  path: string | null;
  /** Navigate the tree to a directory path ("" = repository root). */
  onNavigate: (dirPath: string) => void;
  /** Landmark label — the viewer instance uses "File path". */
  ariaLabel?: string;
  className?: string;
}

interface Segment {
  label: string;
  /** Repo-relative dir path this segment navigates to. */
  dir: string;
  /** Trailing segment (selected file / current dir) is plain text. */
  isCurrent: boolean;
  /** Synthetic middle-collapse control when >5 segments. */
  ellipsis?: boolean;
}

/** Root segment label — the repository name (VIZ-013 §7.4). */
const ROOT_LABEL = "rea";

/** Over this many segments the middle collapses behind an ellipsis. */
const MAX_SEGMENTS = 5;

/**
 * Explorer breadcrumb (VIZ-013 §7.4).
 *
 * - Ancestor segments are buttons that navigate the tree to that directory
 *   (the page expands ancestors and focuses the target row).
 * - The trailing segment is plain text with aria-current="page".
 * - More than 5 segments: root, first child, ellipsis (click to reveal),
 *   last segment — the middle collapses (VIZ-013 overflow rule).
 * - Touch targets ≥44px on mobile (VIZ-014 §8.9); focus-visible rings
 *   throughout (SC 2.4.7).
 */
export function Breadcrumb({
  path,
  onNavigate,
  ariaLabel = "Breadcrumb",
  className,
}: BreadcrumbProps) {
  const [expanded, setExpanded] = React.useState(false);

  const segments = React.useMemo<Segment[]>(() => {
    const parts = path ? path.split("/") : [];
    const segs: Segment[] = [
      { label: ROOT_LABEL, dir: "", isCurrent: parts.length === 0 },
    ];
    parts.forEach((part, i) => {
      segs.push({
        label: part,
        dir: parts.slice(0, i + 1).join("/"),
        isCurrent: i === parts.length - 1,
      });
    });
    return segs;
  }, [path]);

  // Re-collapse the overflow when the path itself changes.
  React.useEffect(() => {
    setExpanded(false);
  }, [path]);

  const collapsed = segments.length > MAX_SEGMENTS && !expanded;
  const visible: Segment[] = collapsed
    ? [
        segments[0],
        segments[1],
        { label: "…", dir: "", isCurrent: false, ellipsis: true },
        segments[segments.length - 1],
      ]
    : segments;

  return (
    <nav aria-label={ariaLabel} className={cn("min-w-0", className)}>
      <ol className="flex min-w-0 flex-wrap items-center gap-0.5 text-sm">
        {visible.map((seg, i) => (
          <li key={`${seg.dir}-${i}`} className="flex min-w-0 items-center">
            {seg.ellipsis ? (
              <button
                type="button"
                aria-expanded={expanded}
                aria-label="Show hidden path segments"
                title="Show hidden path segments"
                onClick={() => setExpanded(true)}
                className="flex min-h-[44px] w-11 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-h-0 md:w-auto md:py-0.5"
              >
                <MoreHorizontal aria-hidden="true" className="h-4 w-4" />
              </button>
            ) : seg.isCurrent ? (
              <span
                aria-current="page"
                title={seg.label}
                className="max-w-[16rem] truncate px-1.5 py-2 font-medium text-foreground md:py-0.5"
              >
                {seg.label}
              </span>
            ) : (
              <button
                type="button"
                title={seg.dir === "" ? "Repository root" : seg.dir}
                onClick={() => onNavigate(seg.dir)}
                className="flex min-h-[44px] items-center rounded-md px-1.5 text-muted-foreground underline-offset-2 hover:bg-accent hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:min-h-0 md:py-0.5"
              >
                <span className="max-w-[10rem] truncate">{seg.label}</span>
              </button>
            )}
            {i < visible.length - 1 && (
              <ChevronRight
                aria-hidden="true"
                className="mx-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground/70"
              />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
