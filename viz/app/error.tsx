"use client";

import * as React from "react";
import { RefreshCw, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Root error boundary (VIZ-020 §5): retry via reset(), never a blank screen.
 */
export default function Error({
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
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />
          Something went wrong
        </CardTitle>
        <CardDescription>
          {error.message || "An unexpected error occurred while rendering this view."}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-3">
        <Button onClick={reset}>
          <RefreshCw aria-hidden="true" />
          Try again
        </Button>
        {error.digest && (
          <span className="text-xs text-muted-foreground">Reference: {error.digest}</span>
        )}
      </CardContent>
    </Card>
  );
}
