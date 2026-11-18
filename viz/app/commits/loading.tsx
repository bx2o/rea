import { TimelineSkeleton } from "@/components/timeline/timeline-skeleton";

/**
 * Route-level loading UI for /commits — timeline skeleton with 5 shimmer
 * cards (VIZ-013 §9.2). Server component; the global prefers-reduced-motion
 * rule in app/globals.css freezes the shimmer.
 */
export default function CommitsLoading() {
  return <TimelineSkeleton cards={5} />;
}
