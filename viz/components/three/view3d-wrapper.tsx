"use client";

/**
 * View3DWrapper — client wrapper for the 3D file-system scene used by
 * /explorer/view3d (route page owned by the explorer agent).
 *
 * FileSystem3D is imported directly (not via next/dynamic — per the VIZ-020
 * task split) and mounted inside a local error boundary so a WebGL/context
 * failure degrades to a fallback card instead of crashing the route.
 * The default export takes no props; selection inside the scene navigates to
 * `/explorer?path=<path>`.
 */

import {
  Component,
  useCallback,
  useState,
  type ErrorInfo,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import FileSystem3D, { type Fs3DSelection } from "./file-system-3d";
import { LEXICON } from "@/lib/brand";

interface View3DErrorBoundaryProps {
  children: ReactNode;
  /** Wired by View3DWrapper — remounts the boundary (fresh state) to retry. */
  onRetry?: () => void;
}

interface View3DErrorBoundaryState {
  error: Error | null;
}

class View3DErrorBoundary extends Component<
  View3DErrorBoundaryProps,
  View3DErrorBoundaryState
> {
  state: View3DErrorBoundaryState = { error: null };

  static getDerivedStateFromError(
    error: Error
  ): View3DErrorBoundaryState {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface scene failures for debugging without breaking the route.
    console.error("[view3d] 3D scene error", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div role="alert" className="glass rounded-2xl p-6">
          <div className="flex items-center gap-2">
            <AlertTriangle
              className="h-5 w-5 text-accent"
              aria-hidden="true"
            />
            <h2 className="font-heading text-lg font-semibold tracking-tight">
              3D file system unavailable
            </h2>
          </div>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
            The 3D scene could not start — WebGL may be disabled, unsupported,
            or blocked on this device. Every repository file remains fully
            available in the explorer list.
          </p>
          {this.state.error.message && (
            <p className="mt-2 break-all font-mono text-xs text-muted-foreground">
              {this.state.error.message}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {this.props.onRetry && (
              <button
                type="button"
                onClick={this.props.onRetry}
                className="rounded-lg border border-border/60 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Try again
              </button>
            )}
            <a
              href="/explorer"
              className="rounded-lg border border-border/60 px-3 py-1.5 text-sm font-medium hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {LEXICON.explore} the file list
            </a>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function View3DWrapper() {
  const router = useRouter();
  const [attempt, setAttempt] = useState(0);

  const handleSelect = useCallback(
    (node: Fs3DSelection) => {
      router.push(`/explorer?path=${encodeURIComponent(node.path)}`);
    },
    [router]
  );

  return (
    <View3DErrorBoundary
      key={attempt}
      onRetry={() => setAttempt((value) => value + 1)}
    >
      <FileSystem3D onSelect={handleSelect} />
    </View3DErrorBoundary>
  );
}
