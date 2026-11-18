"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Command palette primitives (VIZ-013 §7.2 — "shadcn command palette (⌘K,
 * grouped Files/Folders/Commits/Views, 150ms debounce)"; implementation owner
 * VIZ-020).
 *
 * The public API mirrors the shadcn/ui `command` component exactly
 * (Command / CommandDialog / CommandInput / CommandList / CommandItem /
 * CommandGroup / CommandEmpty / CommandSeparator / CommandShortcut) so the
 * file can be swapped for the upstream registry version without touching
 * call sites.
 *
 * Two deliberate deviations from upstream, both additive and backwards
 * compatible:
 *
 *  1. `CommandDialog` is self-contained — the app has no `components/ui/dialog.tsx`
 *     and no Radix runtime, so the modal (portal, overlay, focus trap, scroll
 *     lock, Escape, focus restore) is implemented here instead of delegating
 *     to a Dialog primitive.
 *  2. `Command` accepts an optional `resultCount`. A palette that filters
 *     outside cmdk (e.g. to debounce the query) can hand the live match count
 *     to the root so `<CommandEmpty>` still knows when to render; without it
 *     `<CommandEmpty>` falls back to cmdk's own `filtered.count`.
 */

export interface CommandProps extends React.ComponentProps<typeof CommandPrimitive> {
  /**
   * Live number of matching items. Optional — when omitted, `<CommandEmpty>`
   * uses cmdk's internal `filtered.count`.
   */
  resultCount?: number;
}

/**
 * Result-count override channel. `null` = "not provided" → fall back to
 * cmdk's native count.
 */
const CommandResultCountContext = React.createContext<number | null>(null);

function Command({ className, resultCount, ...props }: CommandProps) {
  return (
    <CommandResultCountContext.Provider value={resultCount ?? null}>
      <CommandPrimitive
        data-slot="command"
        className={cn(
          "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
          className
        )}
        {...props}
      />
    </CommandResultCountContext.Provider>
  );
}

export interface CommandDialogProps {
  /** Controlled visibility. */
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Accessible name of the dialog (rendered as a visually hidden heading). */
  title?: string;
  /** Accessible description (rendered as visually hidden copy). */
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Modal shell for the palette: `role="dialog"` + `aria-modal`, Escape to
 * close, a Tab focus trap, background scroll lock, focus moved into the
 * search input on open and restored to the previously focused element on
 * close.
 */
function CommandDialog({
  open,
  onOpenChange,
  title = "Command palette",
  description = "Search files, folders, commits and views across the repository.",
  className,
  children,
}: CommandDialogProps) {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const restoreRef = React.useRef<HTMLElement | null>(null);
  const titleId = React.useId();
  const descriptionId = React.useId();

  React.useEffect(() => {
    if (!open) return;

    // Remember the trigger so focus can go back to it when the palette closes.
    restoreRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);
        return;
      }
      if (event.key !== "Tab") return;

      // Focus trap — keep Tab cycling inside the dialog.
      const content = contentRef.current;
      if (!content) return;
      const focusables = Array.from(
        content.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus to the search input as soon as it exists.
    const frame = requestAnimationFrame(() => {
      const input = contentRef.current?.querySelector<HTMLInputElement>("[cmdk-input]");
      input?.focus();
    });

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      cancelAnimationFrame(frame);
    };
  }, [open, onOpenChange]);

  // Restore focus to the trigger once the dialog closes.
  React.useEffect(() => {
    if (open) return;
    const element = restoreRef.current;
    if (element && document.contains(element)) element.focus();
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-stretch justify-center sm:items-center sm:p-4">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className={cn(
          "relative z-10 flex h-full w-full flex-col overflow-hidden border bg-popover text-popover-foreground shadow-2xl sm:h-auto sm:max-h-[70vh] sm:max-w-2xl sm:rounded-lg",
          className
        )}
      >
        <h2 id={titleId} className="sr-only">
          {title}
        </h2>
        <p id={descriptionId} className="sr-only">
          {description}
        </p>
        {children}
      </div>
    </div>,
    document.body
  );
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      cmdk-input-wrapper=""
      className="flex items-center gap-2 border-b px-3"
    >
      <Search className="size-4 shrink-0 opacity-60" aria-hidden="true" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-[min(60vh,26rem)] overflow-x-hidden overflow-y-auto overscroll-contain p-1",
        className
      )}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none",
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
        className
      )}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden p-1 text-foreground",
        "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wide [&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const override = React.useContext(CommandResultCountContext);

  // Without an override, cmdk's own empty state decides (it renders only when
  // nothing matches cmdk's internal filter).
  if (override === null) {
    return (
      <CommandPrimitive.Empty
        data-slot="command-empty"
        className={cn("py-6 text-center text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }

  if (override !== 0) return null;

  return (
    <div
      data-slot="command-empty"
      role="presentation"
      className={cn("py-6 text-center text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("h-px bg-border", className)}
      {...props}
    />
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "ml-auto font-mono text-[10px] tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function CommandLoading({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Loading>) {
  return (
    <CommandPrimitive.Loading
      data-slot="command-loading"
      className={cn("py-6 text-center text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoading,
  CommandSeparator,
  CommandShortcut,
};
