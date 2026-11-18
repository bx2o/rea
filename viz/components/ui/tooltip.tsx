import * as React from "react";

import { cn } from "@/lib/utils";

export interface TooltipProps extends Omit<React.ComponentProps<"span">, "content"> {
  /** Tooltip content. A plain string also lands in the native title fallback. */
  content: React.ReactNode;
  side?: "top" | "bottom";
}

/**
 * Self-contained tooltip (VIZ-020 UI kit) — pure CSS (group hover/focus-within),
 * no JavaScript positioning, no Radix. The bubble is always exposed to assistive
 * tech via aria-describedby; a string content additionally becomes a native
 * title attribute so the hint survives even without the custom CSS.
 */
function Tooltip({ content, side = "top", className, children, ...props }: TooltipProps) {
  const id = React.useId();
  const fallbackTitle = typeof content === "string" ? content : undefined;

  return (
    <span data-slot="tooltip" className={cn("group/tip relative inline-flex", className)} {...props}>
      <span className="inline-flex" aria-describedby={id} title={fallbackTitle}>
        {children}
      </span>
      <span
        id={id}
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 z-50 w-max max-w-56 -translate-x-1/2 rounded-md border bg-popover px-2.5 py-1.5 text-xs leading-snug text-popover-foreground shadow-md",
          "opacity-0 transition-opacity duration-150 group-hover/tip:opacity-100 group-focus-within/tip:opacity-100",
          side === "top" ? "bottom-full mb-2" : "top-full mt-2"
        )}
      >
        {content}
      </span>
    </span>
  );
}

export { Tooltip };
