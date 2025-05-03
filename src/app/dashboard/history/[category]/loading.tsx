import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="min-h-screen space-y-4">
      <div className="space-y-2">
        <Skeleton className="max-w-md h-[25px] rounded-md" />
        <Skeleton className="max-w-md h-[15px] rounded-md" />
      </div>

      <div className="w-full flex items-center justify-between flex-wrap gap-2">
        <Skeleton className="h-[52px] w-md rounded-full" />

        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton className="h-[52px] w-[100px] rounded-full" key={index} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-[350px] rounded-md" key={index} />
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Skeleton className="min-h-11 w-[100px] rounded-md" />
          <Skeleton className="min-h-11 w-[50px] rounded-md" />
          <Skeleton className="min-h-11 w-[100px] rounded-md" />
        </div>
      </div>
    </section>
  );
}
