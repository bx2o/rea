"use client";

/**
 * /commits error boundary (FC-08 / VIZ-020 §5).
 *
 * Without a route-level boundary a thrown error inside /commits bubbles to
 * the root app/error.tsx and replaces the whole page body. This boundary
 * keeps the shell intact, states what failed, and offers a retry (reset())
 * plus a way back to the Overview.
 */

import * as React from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CommitsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface for operators; no PII beyond the error identity.
    console.error("[commits]", error);
  }, [error]);

  return (
    <div role="alert" className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />
            Couldn&apos;t load the commit timeline
          </CardTitle>
          <CardDescription>
            {error.message || "The commit history could not be rendered."}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap items-center gap-3">
          <Button onClick={reset}>
            <RefreshCw aria-hidden="true" />
            Try again
          </Button>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Back to Overview
          </Link>
          {error.digest ? (
            <span className="text-xs text-muted-foreground">
              Reference: {error.digest}
            </span>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
