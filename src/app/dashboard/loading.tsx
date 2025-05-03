import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="min-h-screen space-y-3">
      <div className="space-y-2">
        <Skeleton className="max-w-md h-[25px] rounded-md" />
        <Skeleton className="max-w-md h-[15px] rounded-md" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Skeleton className="h-[200px] rounded-md" />
        <Skeleton className="h-[200px] rounded-md" />
        <Skeleton className="h-[200px] rounded-md" />
      </div>

      <div className="w-full">
        <Skeleton className="h-[120px] rounded-md" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Skeleton className="h-[500px] rounded-md" />
        </div>
        <Skeleton className="h-[350px] rounded-md" />
      </div>
    </section>
  );
}
