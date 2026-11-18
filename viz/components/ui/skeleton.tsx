import * as React from "react";

import { cn } from "@/lib/utils";

/** Loading skeleton (VIZ-020 UI kit). Global reduced-motion CSS in app/globals.css freezes the pulse. */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };
