import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Root loading skeleton (VIZ-020 §5): mirrors the Overview dashboard layout —
 * header, hero, stat cards, area chart, donut + zone, churn — so the frame
 * does not jump when data resolves.
 */
export default function Loading() {
  return (
    <div className="grid gap-6" aria-busy="true" aria-label="Loading overview">
      <div className="grid gap-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-72 max-w-full" />
      </div>
      <Skeleton className="h-44 w-full rounded-lg" />
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index} className="gap-3">
            <CardHeader>
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-24" />
            </CardHeader>
          </Card>
        ))}
      </div>
      <Skeleton className="h-72 w-full rounded-lg" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-72 w-full rounded-lg" />
        <Skeleton className="h-72 w-full rounded-lg" />
      </div>
      <Skeleton className="h-[22rem] w-full rounded-lg" />
    </div>
  );
}
