"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { useTheme } from "next-themes";

import { zoneHue, type Zone } from "@/lib/brand";
import { cn } from "@/lib/utils";

/**
 * Badge (VIZ-020 UI kit). The optional `zone` prop applies VIZ-017 D2 zone
 * coding: the hue is resolved through zoneHue() from lib/brand.ts (the single
 * token source — no hex values are hardcoded here) as an inline style so it
 * follows the active light/dark theme. Text uses the AA-safe variant.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        destructive: "border-transparent bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  /** Zone color coding (VIZ-017 D2) — resolved via zoneHue(), theme-aware. */
  zone?: Zone;
}

function Badge({ className, variant, zone, style, ...props }: BadgeProps) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  const zoneStyle: React.CSSProperties | undefined = zone
    ? {
        color: zoneHue(zone, theme, true), // AA-safe text variant (VIZ-014 §8.6)
        borderColor: `${zoneHue(zone, theme)}59`, // ~35% alpha outline
        backgroundColor: `${zoneHue(zone, theme)}14`, // ~8% alpha tint
      }
    : undefined;

  return (
    <span
      data-slot="badge"
      style={{ ...zoneStyle, ...style }}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
