import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen space-y-4">
      <div className="space-y-2">
        <Skeleton className="max-w-md h-[25px] rounded-md" />
        <Skeleton className="max-w-md h-[15px] rounded-md" />
      </div>

      <Skeleton className="h-[500px] rounded-md w-full" />

      <div className="flex items-center justify-center gap-3 flex-wrap">
        <div className="flex-1">
          <Skeleton className="w-full h-[300px] rounded-md" />
        </div>

        <div className="flex-1">
          <Skeleton className="w-full h-[450px] rounded-md" />
        </div>
      </div>
    </section>
  );
}
