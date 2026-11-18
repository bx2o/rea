"use client";

/**
 * Route transition template (FC-10 — plan §5 item 7 "GSAP page transitions").
 *
 * Next.js re-mounts `app/template.tsx` on every route change, so this file
 * is the natural home for a transition that plays between two pages:
 * the outgoing content is replaced by the new one and the wrapper fades /
 * slides it in.
 *
 * Rules that keep it safe:
 *   - SSR / hydration: the children are rendered immediately and never
 *     animated on the first paint (the very first client render only
 *     records the initial path). No markup mismatch, no flash of
 *     invisible content.
 *   - Reduced motion (VIZ-014 §8.4): when the OS asks for
 *     `prefers-reduced-motion: reduce`, or the in-app switch has written
 *     `viz-reduced-motion = "on"`, no tween is ever created — the page
 *     simply appears. The in-app switch announces itself through the
 *     `viz-reduced-motion-change` CustomEvent.
 *   - Tokens only: the transition only moves/fades content, so it needs
 *     no colours at all (no hardcoded hex — VIZ-017).
 */
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

/** localStorage key written by the in-app reduced-motion switch. */
const STORAGE_KEY = "viz-reduced-motion";
/** CustomEvent dispatched by that switch when the preference changes. */
const CHANGE_EVENT = "viz-reduced-motion-change";

/**
 * `useLayoutEffect` on the client (so the transition starts before the
 * browser paints the new page) and `useEffect` on the server (React warns
 * when a server-rendered component uses `useLayoutEffect`).
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * The path of the very first client render. Module scope is deliberate:
 * the template remounts on every navigation, so per-instance state cannot
 * answer "is this the first paint?".
 */
let initialPath: string | null = null;
/** True once a navigation (a path other than the initial one) was seen. */
let hasNavigated = false;

/** OS preference OR the in-app switch. */
function motionDisabled(): boolean {
  if (typeof window === "undefined") return false;
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "on") return true;
  } catch {
    // localStorage can be unavailable (private mode / blocked storage).
  }
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

export default function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  // Record the first client path during render (never on the server —
  // module state is shared between server requests).
  if (initialPath === null && typeof window !== "undefined") {
    initialPath = pathname;
  }

  /**
   * Animate route changes. The path is the dependency, so every client
   * navigation replays the transition; the initial paint is skipped.
   */
  useIsomorphicLayoutEffect(() => {
    const container = containerRef.current;
    if (container === null) return;

    const isFirstPaint = !hasNavigated && pathname === initialPath;
    if (isFirstPaint) return; // hydration / first load — render as-is
    hasNavigated = true;

    if (motionDisabled()) {
      // Reduced motion: no tween at all, content is simply present.
      gsap.killTweensOf(container);
      gsap.set(container, { clearProps: "opacity,transform" });
      return;
    }

    const timeline = gsap.timeline({
      defaults: { duration: 0.35, ease: "power2.out" },
    });
    timeline.fromTo(
      container,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, overwrite: true }
    );

    return () => {
      // Interrupt-safe: the next navigation overwrites this tween.
      timeline.kill();
    };
  }, [pathname]);

  /**
   * React to a preference change while mounted: the in-app switch fires
   * `viz-reduced-motion-change`, the OS fires a media-query change. When
   * motion becomes disallowed any running tween is stopped and the content
   * is left fully visible.
   */
  const settle = useCallback(() => {
    const container = containerRef.current;
    if (container === null) return;
    if (motionDisabled()) {
      gsap.killTweensOf(container);
      gsap.set(container, { clearProps: "opacity,transform" });
    }
  }, []);

  useEffect(() => {
    const onChange = () => settle();
    window.addEventListener(CHANGE_EVENT, onChange);
    const query = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    query?.addEventListener?.("change", onChange);
    return () => {
      window.removeEventListener(CHANGE_EVENT, onChange);
      query?.removeEventListener?.("change", onChange);
    };
  }, [settle]);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}
