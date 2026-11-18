import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Offline-first scroll area (VIZ-020 UI kit) — a plain overflow-auto viewport
 * with themed thin scrollbars. No Radix dependency. The consumer controls the
 * height (e.g. className="h-72") on the outer element.
 */
function ScrollArea({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="scroll-area" className={cn("relative", className)} {...props}>
      <div
        data-slot="scroll-area-viewport"
        className={cn(
          "size-full overflow-auto rounded-[inherit]",
          "[&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border",
          "[&::-webkit-scrollbar-track]:bg-transparent"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { ScrollArea };
