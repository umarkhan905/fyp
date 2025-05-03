import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen space-y-4">
      <div className="space-y-2">
        <Skeleton className="max-w-md h-[25px] rounded-md" />
        <Skeleton className="max-w-md h-[15px] rounded-md" />
      </div>

      <div className="flex items-start justify-center flex-wrap gap-2">
        <div className="w-52 h-[200px]">
          <Skeleton className="w-full h-full rounded-md" />
        </div>
        <div className="flex-1 h-[600px]">
          <Skeleton className="w-full h-full rounded-md" />
        </div>
      </div>
    </section>
  );
}
