import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen py-4 sm:py-6 space-y-4 max-w-xl mx-auto w-full">
      <div className="space-y-2">
        <Skeleton className="w-xs h-8 rounded-md mx-auto" />
        <Skeleton className="w-md h-8 rounded-md mx-auto" />
      </div>
      <div className="w-full flex items-center justify-between flex-wrap gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton className="h-[24px] w-[200px] rounded-md" key={index} />
        ))}
      </div>
      <Skeleton className="h-px w-full" />

      <div className="space-y-3 w-full">
        <Skeleton className="w-[150px] h-7 rounded-md" />
        {Array.from({ length: 7 }).map((_, index) => (
          <div className="space-y-1" key={index}>
            <Skeleton className="w-[200px] h-5 rounded-md" />
            <div className="space-y-0.5">
              {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton className="w-full h-2 rounded-md" key={index} />
              ))}
              <Skeleton className="w-1/3 h-2 rounded-md" />
            </div>
          </div>
        ))}
      </div>

      {Array.from({ length: 3 }).map((_, index) => (
        <div className="space-y-2 w-full" key={index}>
          <Skeleton className="w-[120px] h-7 rounded-md" />
          <div className="space-y-0.5">
            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton className="w-full h-2 rounded-md" key={index} />
            ))}
            <Skeleton className="w-1/3 h-2 rounded-md" />
          </div>
        </div>
      ))}

      <div className="space-y-2 w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <Skeleton className="w-[120px] h-7 rounded-md" />
          <Skeleton className="w-[130px] h-7 rounded-full" />
        </div>
        <div className="space-y-0.5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton className="w-full h-2 rounded-md" key={index} />
          ))}
          <Skeleton className="w-1/3 h-2 rounded-md" />
        </div>
      </div>

      <Skeleton className="min-h-12 w-full rounded-full" />
    </section>
  );
}
