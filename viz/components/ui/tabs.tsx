"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Self-contained tabs (VIZ-020 UI kit) — no Radix. Context-based, controlled
 * or uncontrolled, implementing the WAI-ARIA tabs pattern: roving tabindex,
 * arrow/Home/End key navigation with automatic activation.
 */

interface TabsContextValue {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(component: string): TabsContextValue {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error(`<${component}> must be rendered inside <Tabs>.`);
  return context;
}

export interface TabsProps extends React.ComponentProps<"div"> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

function Tabs({
  value: controlledValue,
  defaultValue,
  onValueChange,
  className,
  ...props
}: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
  const value = controlledValue ?? internalValue;

  const setValue = React.useCallback(
    (next: string) => {
      if (controlledValue === undefined) setInternalValue(next);
      onValueChange?.(next);
    },
    [controlledValue, onValueChange]
  );

  const baseId = React.useId();
  const context = React.useMemo<TabsContextValue>(
    () => ({ value, setValue, baseId }),
    [value, setValue, baseId]
  );

  return (
    <TabsContext.Provider value={context}>
      <div data-slot="tabs" className={cn("flex flex-col gap-3", className)} {...props} />
    </TabsContext.Provider>
  );
}

export type TabsListProps = React.ComponentProps<"div">;

function TabsList({ className, onKeyDown, ...props }: TabsListProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const navigationKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
    if (!navigationKeys.includes(event.key)) {
      onKeyDown?.(event);
      return;
    }
    const tabs = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([disabled])')
    );
    if (tabs.length === 0) {
      onKeyDown?.(event);
      return;
    }
    event.preventDefault();
    const current = tabs.findIndex((tab) => tab === document.activeElement);
    let next: number;
    switch (event.key) {
      case "Home":
        next = 0;
        break;
      case "End":
        next = tabs.length - 1;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = current <= 0 ? tabs.length - 1 : current - 1;
        break;
      default:
        next = current === -1 || current === tabs.length - 1 ? 0 : current + 1;
    }
    const target = tabs[next];
    target?.focus();
    target?.click(); // automatic activation (WAI-ARIA tabs)
  };

  return (
    <div
      role="tablist"
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground",
        className
      )}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ComponentProps<"button"> {
  value: string;
}

function TabsTrigger({ value, className, onClick, ...props }: TabsTriggerProps) {
  const { value: activeValue, setValue, baseId } = useTabsContext("TabsTrigger");
  const selected = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-trigger-${value}`}
      aria-selected={selected}
      aria-controls={`${baseId}-content-${value}`}
      tabIndex={selected ? 0 : -1}
      data-state={selected ? "active" : "inactive"}
      data-slot="tabs-trigger"
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) setValue(value);
      }}
      className={cn(
        "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        className
      )}
      {...props}
    />
  );
}

export interface TabsContentProps extends React.ComponentProps<"div"> {
  value: string;
}

function TabsContent({ value, className, ...props }: TabsContentProps) {
  const { value: activeValue, baseId } = useTabsContext("TabsContent");
  const selected = activeValue === value;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-content-${value}`}
      aria-labelledby={`${baseId}-trigger-${value}`}
      data-state={selected ? "active" : "inactive"}
      data-slot="tabs-content"
      hidden={!selected}
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
