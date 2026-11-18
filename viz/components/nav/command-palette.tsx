"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { defaultFilter } from "cmdk";
import {
  Box,
  FileText,
  Folder,
  GitCommitHorizontal,
  Globe2,
  GraduationCap,
  History,
  LayoutDashboard,
  Network,
  FolderTree,
  type LucideIcon,
} from "lucide-react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { ZONE_ORDER, zoneHue, zoneOf, type Zone } from "@/lib/brand";
import { cn, formatDate, shortSha } from "@/lib/utils";
import type { ApiEnvelope, CommitRecord, FileNode } from "@/lib/types";

/**
 * Global command palette (VIZ-013 §7.2 — "shadcn command palette (⌘K, grouped
 * Files/Folders/Commits/Views, 150ms debounce)"; implementation owner
 * VIZ-020).
 *
 * Behaviour:
 *  - Triggers: ⌘K / Ctrl+K anywhere, the top-bar hint button (app-shell),
 *    and "/" when the caret is not in a text field. Escape closes.
 *  - Sources: GET /api/tree?path= (root level → folders + a bounded slice of
 *    files, breadth-first, request-budgeted) and GET /api/commits (recent
 *    history). Views are static.
 *  - Groups, in order: Views → Folders → Files → Commits.
 *  - Filtering: cmdk's built-in scorer (`defaultFilter` — command-score) is
 *    applied to the *debounced* query (150 ms) so a burst of keystrokes does
 *    not re-score the whole index. cmdk's own filtering is disabled
 *    (`shouldFilter={false}`) because its search state is the raw keystroke
 *    string — the palette renders the matching subset itself, which also
 *    preserves the group order and the result count used by the live region.
 *  - Selection: Enter navigates via the Next router (⌘/Ctrl+Enter opens the
 *    target in a new tab).
 *
 * Everything is client-side over public repo data only (no auth, no writes).
 */

/** Maximum number of file entries indexed for the palette. */
const MAX_FILES = 500;
/** Maximum number of recent commits indexed. */
const MAX_COMMITS = 50;
/** Spec'd debounce for the search query (VIZ-013 §7.2). */
const DEBOUNCE_MS = 150;
/** Commit messages only match from three characters up (VIZ-013 §7.2). */
const MIN_COMMIT_QUERY = 3;
/** Rows rendered per group while the query is empty (the rest needs typing). */
const MAX_VISIBLE_PER_GROUP = 25;

type PaletteGroupId = "view" | "folder" | "file" | "commit";

interface PaletteItem {
  /** Unique cmdk value. */
  id: string;
  group: PaletteGroupId;
  label: string;
  /** Secondary, monospace detail (route, path, sha). */
  detail?: string;
  icon: LucideIcon;
  /** Zone of the referenced path — drives the icon hue via zoneHue(). */
  zone?: Zone;
  href: string;
  /** Text the fuzzy matcher scores against. */
  searchText: string;
}

/** Static view targets — the app's routes (VIZ-013 §7.2 "jump to any view"). */
const VIEW_ITEMS: PaletteItem[] = [
  {
    id: "view:/",
    group: "view",
    label: "Overview",
    detail: "/",
    icon: LayoutDashboard,
    href: "/",
    searchText: "overview home dashboard start statistics",
  },
  {
    id: "view:/explorer",
    group: "view",
    label: "Explorer",
    detail: "/explorer",
    icon: FolderTree,
    href: "/explorer",
    searchText: "explorer browse files tree repository",
  },
  {
    id: "view:/explorer/view3d",
    group: "view",
    label: "Explorer 3D",
    detail: "/explorer/view3d",
    icon: Box,
    href: "/explorer/view3d",
    searchText: "3d three dimensional scene graph file system",
  },
  {
    id: "view:/commits",
    group: "view",
    label: "Commits",
    detail: "/commits",
    icon: History,
    href: "/commits",
    searchText: "commits history git log timeline",
  },
  {
    id: "view:/globe",
    group: "view",
    label: "Globe",
    detail: "/globe",
    icon: Globe2,
    href: "/globe",
    searchText: "globe world map earth cobe",
  },
  {
    id: "view:/learn",
    group: "view",
    label: "Learn",
    detail: "/learn",
    icon: GraduationCap,
    href: "/learn",
    searchText: "learn decks tutorial orientation guide slides",
  },
  {
    id: "view:/councils",
    group: "view",
    label: "Councils",
    detail: "/councils",
    icon: Network,
    href: "/councils",
    searchText: "councils network graph relationships agents",
  },
];

/** Group order rendered by the palette (VIZ-013 §7.2). */
const GROUP_ORDER: Array<{ id: PaletteGroupId; heading: string }> = [
  { id: "view", heading: "Views" },
  { id: "folder", heading: "Folders" },
  { id: "file", heading: "Files" },
  { id: "commit", heading: "Commits" },
];

/* ------------------------------------------------------------------ */
/* Data access                                                         */
/* ------------------------------------------------------------------ */

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { headers: { accept: "application/json" } });
  if (!response.ok) throw new Error(`${url} responded ${response.status}`);
  return (await response.json()) as T;
}

async function fetchTreeLevel(path: string): Promise<FileNode[]> {
  const payload = await fetchJson<ApiEnvelope<FileNode[]>>(
    `/api/tree?path=${encodeURIComponent(path)}`
  );
  return Array.isArray(payload.data) ? payload.data : [];
}

async function fetchRecentCommits(): Promise<CommitRecord[]> {
  const payload = await fetchJson<ApiEnvelope<CommitRecord[]>>(
    `/api/commits?limit=${MAX_COMMITS}`
  );
  return Array.isArray(payload.data) ? payload.data.slice(0, MAX_COMMITS) : [];
}

/**
 * File index source: the committed tree snapshot (public/snapshots/tree.json)
 * — the app's offline-first source of truth (VIZ-022) and the same fallback
 * the /api/tree route degrades to.
 *
 * One static request replaces a budgeted walk of the live tree (24+ requests,
 * each re-walking the repo) and yields every path in the repository. The
 * bounded set (≤ MAX_FILES) is sampled round-robin across the six zones so
 * it covers the whole repository instead of a single subtree.
 */
async function loadSnapshotFilePaths(limit: number): Promise<string[]> {
  const response = await fetch("/snapshots/tree.json", {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error(`tree.json responded ${response.status}`);
  const payload = (await response.json()) as { root?: FileNode[] };

  const byZone = new Map<Zone, string[]>();
  const walk = (nodes: FileNode[]) => {
    for (const node of nodes) {
      if (node.type === "dir") {
        if (node.name !== ".git" && node.children) walk(node.children);
        continue;
      }
      const zone = zoneOf(node.path);
      const bucket = byZone.get(zone);
      if (bucket) bucket.push(node.path);
      else byZone.set(zone, [node.path]);
    }
  };
  walk(Array.isArray(payload.root) ? payload.root : []);

  const out: string[] = [];
  let depth = 0;
  while (out.length < limit) {
    let progressed = false;
    for (const zone of ZONE_ORDER) {
      const bucket = byZone.get(zone);
      if (bucket && depth < bucket.length) {
        out.push(bucket[depth]);
        progressed = true;
        if (out.length >= limit) break;
      }
    }
    if (!progressed) break;
    depth++;
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Item construction                                                    */
/* ------------------------------------------------------------------ */

function folderItem(node: FileNode): PaletteItem {
  const zone = zoneOf(node.path);
  return {
    id: `folder:${node.path}`,
    group: "folder",
    label: node.name,
    detail: node.path,
    icon: Folder,
    zone,
    href: `/explorer?path=${encodeURIComponent(node.path)}`,
    searchText: `${node.name} ${node.path} folder directory`,
  };
}

function fileItem(path: string): PaletteItem {
  const name = path.split("/").pop() ?? path;
  const zone = zoneOf(path);
  return {
    id: `file:${path}`,
    group: "file",
    label: name,
    detail: path,
    icon: FileText,
    zone,
    href: `/explorer?path=${encodeURIComponent(path)}`,
    searchText: `${name} ${path} file`,
  };
}

function commitItem(commit: CommitRecord): PaletteItem {
  const message = commit.message.split("\n")[0].trim();
  return {
    id: `commit:${commit.sha}`,
    group: "commit",
    label: message.length > 0 ? message : shortSha(commit.sha),
    detail: `${shortSha(commit.sha)} · ${formatDate(commit.date)}`,
    icon: GitCommitHorizontal,
    // CommitRecord carries no path, so the commit deep-links to the commits
    // view and carries the sha as a query parameter.
    href: `/commits?sha=${encodeURIComponent(commit.sha)}`,
    searchText: `${message} ${commit.sha} ${commit.author} commit`,
  };
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export interface CommandPaletteProps {
  /** Controlled visibility (owned by the app shell). */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Trigger element — focus returns here when the palette closes. */
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function CommandPalette({ open, onOpenChange, triggerRef }: CommandPaletteProps) {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  const [query, setQuery] = React.useState("");
  const [debouncedQuery, setDebouncedQuery] = React.useState("");
  const [items, setItems] = React.useState<PaletteItem[]>(VIEW_ITEMS);
  const [status, setStatus] = React.useState<"idle" | "loading" | "ready" | "error">(
    "idle"
  );

  const mountedRef = React.useRef(true);
  const loadedRef = React.useRef(false);
  const openRef = React.useRef(open);
  const newTabRef = React.useRef(false);

  openRef.current = open;

  React.useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  /* ---- debounce (150 ms, per spec) ---------------------------------- */
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), DEBOUNCE_MS);
    return () => clearTimeout(timer);
  }, [query]);

  /* ---- global triggers: ⌘K / Ctrl+K and "/" -------------------------- */
  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onOpenChange(!openRef.current);
        return;
      }
      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !isEditableTarget(event.target)
      ) {
        event.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onOpenChange]);

  /* ---- reset the query on every open -------------------------------- */
  React.useEffect(() => {
    if (!open) return;
    setQuery("");
    setDebouncedQuery("");
  }, [open]);

  /* ---- load the index once, lazily, on first open -------------------- */
  React.useEffect(() => {
    if (!open || loadedRef.current) return;
    loadedRef.current = true;
    setStatus("loading");

    void (async () => {
      try {
        const [root, commits, paths] = await Promise.all([
          fetchTreeLevel(""),
          fetchRecentCommits().catch(() => [] as CommitRecord[]),
          loadSnapshotFilePaths(MAX_FILES).catch(() => [] as string[]),
        ]);
        if (!mountedRef.current) return;

        const folders = root.filter((node) => node.type === "dir");
        const filePaths: string[] = [];
        const seen = new Set<string>();
        for (const path of [...root.filter((node) => node.type === "file").map((node) => node.path), ...paths]) {
          if (filePaths.length >= MAX_FILES) break;
          if (seen.has(path)) continue;
          seen.add(path);
          filePaths.push(path);
        }

        setItems([
          ...VIEW_ITEMS,
          ...folders.map(folderItem),
          ...filePaths.map(fileItem),
          ...commits.map(commitItem),
        ]);
        setStatus("ready");
      } catch {
        if (!mountedRef.current) return;
        setStatus("error");
      }
    })();
  }, [open]);

  /* ---- close + restore focus to the trigger -------------------------- */
  const close = React.useCallback(() => {
    onOpenChange(false);
    const trigger = triggerRef?.current;
    if (trigger) {
      // Focus lands on the trigger once the dialog has unmounted.
      window.requestAnimationFrame(() => trigger.focus());
    }
  }, [onOpenChange, triggerRef]);

  /* ---- fuzzy match on the debounced query (cmdk's built-in scorer) --- */
  const scored = React.useMemo(() => {
    const needle = debouncedQuery.trim();
    if (needle === "") {
      return items.map((item) => ({ item, score: 1 }));
    }
    const out: Array<{ item: PaletteItem; score: number }> = [];
    for (const item of items) {
      if (item.group === "commit" && needle.length < MIN_COMMIT_QUERY) continue;
      const score = defaultFilter(item.searchText, needle);
      if (score > 0) out.push({ item, score });
    }
    return out;
  }, [items, debouncedQuery]);

  /* ---- group the matches, preserving the spec'd group order ---------- */
  const groups = React.useMemo(() => {
    const buckets = new Map<PaletteGroupId, Array<{ item: PaletteItem; score: number }>>();
    for (const entry of scored) {
      const bucket = buckets.get(entry.item.group);
      if (bucket) bucket.push(entry);
      else buckets.set(entry.item.group, [entry]);
    }
    // An unfiltered palette would otherwise mount ~550 rows at once; the
    // first slice is shown and the rest is reachable by typing.
    const capped = debouncedQuery.trim() === "";
    return GROUP_ORDER.map((group) => {
      const entries = (buckets.get(group.id) ?? []).sort((a, b) => b.score - a.score);
      return {
        ...group,
        entries: capped ? entries.slice(0, MAX_VISIBLE_PER_GROUP) : entries,
        hidden: capped ? Math.max(0, entries.length - MAX_VISIBLE_PER_GROUP) : 0,
      };
    }).filter((group) => group.entries.length > 0);
  }, [scored, debouncedQuery]);

  const resultCount = scored.length;

  /* ---- selection ----------------------------------------------------- */
  const handleSelect = React.useCallback(
    (id: string) => {
      const entry = scored.find((candidate) => candidate.item.id === id);
      const target = entry?.item;
      const openInNewTab = newTabRef.current;
      newTabRef.current = false;
      if (!target) return;
      close();
      if (openInNewTab) {
        window.open(target.href, "_blank", "noopener,noreferrer");
      } else {
        router.push(target.href);
      }
    },
    [close, router, scored]
  );

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      // ⌘/Ctrl+Enter opens the highlighted result in a new tab.
      newTabRef.current = event.metaKey || event.ctrlKey;
      return;
    }
    newTabRef.current = false;
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={(next) => (next ? onOpenChange(true) : close())}
      title="Command palette"
      description="Search files, folders, commits and views across the repository."
    >
      <Command
        shouldFilter={false}
        resultCount={resultCount}
        label="Command palette"
        onKeyDown={handleKeyDown}
        className="rounded-none border-0"
      >
        <CommandInput
          value={query}
          onValueChange={setQuery}
          placeholder="Search files, folders, commits and views…"
          aria-label="Search the repository"
        />
        <CommandList>
          {groups.map((group, index) => (
            <React.Fragment key={group.id}>
              {index > 0 ? <CommandSeparator /> : null}
              <CommandGroup heading={group.heading}>
                {group.entries.map(({ item }) => (
                  <PaletteRow
                    key={item.id}
                    item={item}
                    theme={theme}
                    onSelect={handleSelect}
                  />
                ))}
                {group.hidden > 0 ? (
                  <p className="px-2 py-1.5 text-[11px] text-muted-foreground">
                    …{group.hidden} more — keep typing to narrow the list
                  </p>
                ) : null}
              </CommandGroup>
            </React.Fragment>
          ))}
          <CommandEmpty>
            <span className="block">No results for “{debouncedQuery.trim()}”.</span>
            <button
              type="button"
              className="mt-2 text-xs underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setQuery("")}
            >
              Clear search
            </button>
          </CommandEmpty>
        </CommandList>
        <div className="flex items-center justify-between gap-3 border-t px-3 py-2 text-[11px] text-muted-foreground">
          <p role="status" aria-live="polite">
            {status === "loading"
              ? "Indexing repository…"
              : status === "error"
                ? "Repository index unavailable"
                : resultCount === 0
                  ? "No results"
                  : `${resultCount} results`}
          </p>
          <p className="hidden gap-3 sm:flex">
            <span>↑↓ navigate</span>
            <span>↵ open</span>
            <span>esc close</span>
          </p>
        </div>
      </Command>
    </CommandDialog>
  );
}

/* ------------------------------------------------------------------ */
/* Row                                                                  */
/* ------------------------------------------------------------------ */

function PaletteRow({
  item,
  theme,
  onSelect,
}: {
  item: PaletteItem;
  theme: "light" | "dark";
  onSelect: (id: string) => void;
}) {
  const Icon = item.icon;
  const accent = item.zone ? zoneHue(item.zone, theme, true) : undefined;

  return (
    <CommandItem
      value={item.id}
      onSelect={onSelect}
      className="gap-2.5"
    >
      <Icon
        className={cn("size-4 shrink-0", accent ? undefined : "text-muted-foreground")}
        style={accent ? { color: accent } : undefined}
        aria-hidden="true"
      />
      <span className="truncate">{item.label}</span>
      {item.detail ? (
        <span className="ml-auto max-w-[45%] truncate font-mono text-[11px] text-muted-foreground">
          {item.detail}
        </span>
      ) : null}
    </CommandItem>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                              */
/* ------------------------------------------------------------------ */

/** True when the event target is a text-entry surface ("/" must not fire). */
function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  if (target.isContentEditable) return true;
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
}
