"use client";

/**
 * /globe error boundary (FC-08 / VIZ-020 §5).
 *
 * The globe view is WebGL-backed, so a context failure or a chunk error
 * must degrade to a readable panel instead of replacing the whole page
 * body via the root app/error.tsx. Offers a retry (reset()) and a way back
 * to the Overview.
 */

import * as React from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GlobeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface for operators; no PII beyond the error identity.
    console.error("[globe]", error);
  }, [error]);

  return (
    <div role="alert" className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />
            Couldn&apos;t load the zone globe
          </CardTitle>
          <CardDescription>
            {error.message || "The 3D zone globe could not be rendered."}
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
