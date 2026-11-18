"use client";

import * as React from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * /explorer error boundary with retry (VIZ-020 §5: per-segment error
 * states). Rendered by Next.js for any thrown error below this segment —
 * the page itself keeps its fetch failures inside graceful states, so this
 * covers render/component crashes.
 */
export default function ExplorerError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface for operators; no PII beyond the error identity.
    console.error("[explorer]", error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex h-full items-center justify-center p-6"
    >
      <div className="w-full max-w-md rounded-xl border bg-card p-6 text-center shadow-sm">
        <AlertTriangle
          aria-hidden="true"
          className="mx-auto h-10 w-10 text-destructive"
        />
        <h2 className="mt-3 font-heading text-lg font-bold">
          Explorer failed to load
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The repository explorer could not render.
          {error.digest ? (
            <>
              {" "}
              <span className="font-mono text-xs">Ref: {error.digest}</span>
            </>
          ) : null}
        </p>
        <div className="mt-4 flex justify-center">
          <Button onClick={reset} className="gap-2">
            <RotateCcw aria-hidden="true" className="h-4 w-4" />
            Retry
          </Button>
        </div>
      </div>
    </div>
  );
}
