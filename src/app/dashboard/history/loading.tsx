import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="w-full min-h-screen space-y-3">
      <div className="space-y-2">
        <Skeleton className="max-w-md h-[25px] rounded-md" />
        <Skeleton className="max-w-md h-[15px] rounded-md" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Skeleton className="h-[130px] rounded-md" />
        <Skeleton className="h-[130px] rounded-md" />
      </div>

      {Array.from({ length: 2 }).map((_, index) => (
        <div className="w-full space-y-2" key={index}>
          <div className="flex items-center justify-between">
            <Skeleton className="w-[200px] h-[25px] rounded-md" />
            <Skeleton className="w-[100px] h-[15px] rounded-md" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton className="h-[350px] rounded-md" key={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
