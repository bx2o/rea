"use client";

/**
 * /councils error boundary (FC-08 / VIZ-020 §5).
 *
 * Keeps the app shell and the surrounding chrome when the council graph
 * fails to render, instead of letting the root app/error.tsx replace the
 * whole page body. Offers a retry (reset()) and a way back to the Overview.
 */

import * as React from "react";
import Link from "next/link";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CouncilsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Surface for operators; no PII beyond the error identity.
    console.error("[councils]", error);
  }, [error]);

  return (
    <div role="alert" className="mx-auto w-full max-w-3xl px-4 py-8 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />
            Couldn&apos;t load the councils graph
          </CardTitle>
          <CardDescription>
            {error.message || "The council hierarchy graph could not be rendered."}
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
