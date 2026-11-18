import * as React from "react";

import { cn } from "@/lib/utils";

export interface SeparatorProps extends React.ComponentProps<"hr"> {
  orientation?: "horizontal" | "vertical";
  /** Mark purely visual separators as presentational (default true). */
  decorative?: boolean;
}

/** Simple hr-based separator (VIZ-020 UI kit) — no Radix. */
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) {
  return (
    <hr
      data-slot="separator"
      role={decorative ? "none" : undefined}
      aria-orientation={orientation}
      className={cn(
        "shrink-0 border-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px self-stretch",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
