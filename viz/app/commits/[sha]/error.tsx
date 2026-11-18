"use client";

import * as React from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";

/**
 * Route-level error boundary for /commits/[sha] — a retry that keeps the
 * view's chrome instead of falling through to the root boundary
 * (UI/UX §9 "state matrix per view").
 */
export default function CommitDetailError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4 px-4 py-8 md:px-6">
      <div
        role="alert"
        className="rounded-xl border border-border border-l-4 border-l-destructive bg-card p-4 shadow-sm"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-sm text-foreground">
            <TriangleAlert
              aria-hidden="true"
              className="size-4 text-destructive"
            />
            Could not load this commit.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <Button size="sm" onClick={reset}>
              <RefreshCw aria-hidden="true" />
              Try again
            </Button>
            <Link
              href="/commits"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Back to commits
            </Link>
          </div>
        </div>
        {error.message !== "" && (
          <p className="mt-2 text-xs text-muted-foreground">{error.message}</p>
        )}
      </div>
    </div>
  );
}
