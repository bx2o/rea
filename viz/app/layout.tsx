import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AppShell } from "@/components/nav/app-shell";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

/**
 * Root layout (VIZ-020): globals.css on the VIZ-012/VIZ-017 token set,
 * VIZ-018 theme provider, and the responsive app shell.
 * Fonts: offline-safe system stacks from tailwind.config.ts (font-sans body,
 * font-heading for display text) — no next/font network fetch.
 */
export const metadata: Metadata = {
  title: {
    default: "Stremiium Repo Viz",
    template: "%s · Stremiium Repo Viz",
  },
  description:
    "Interactive visualization and learning environment for the bx2o/rea repository — browse files, commits, zones, councils, and learning decks.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-svh bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
