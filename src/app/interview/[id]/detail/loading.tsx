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
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton className="h-[20px] w-[100px] rounded-md" key={index} />
        ))}
      </div>
      <Skeleton className="h-px w-full" />
      <div className="flex items-center justify-center gap-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <Skeleton className="h-[25px] w-[82px] rounded-full" key={index} />
        ))}
      </div>

      <div className="space-y-2 w-full">
        <Skeleton className="w-[100px] h-5 rounded-md" />
        <div className="flex items-center flex-wrap gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton className="h-[25px] w-[82px] rounded-full" key={index} />
          ))}
        </div>
      </div>

      <div className="space-y-2 w-full">
        <Skeleton className="w-[100px] h-5 rounded-md" />
        <div className="space-y-0.5">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton className="w-full h-2 rounded-md" key={index} />
          ))}
          <Skeleton className="w-1/2 h-2 rounded-md" />
        </div>
      </div>

      <div className="space-y-2 w-full">
        <Skeleton className="w-[100px] h-5 rounded-md" />
        <Skeleton className="h-[200px] rounded-md w-full" />
      </div>

      <div className="space-y-2 w-full">
        <Skeleton className="w-[100px] h-5 rounded-md" />
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center gap-2">
              <Skeleton className="size-14 rounded-full" />

              <div className="space-y-0.5">
                <Skeleton className="w-[100px] h-2 rounded-md" />
                <Skeleton className="w-[200px] h-2 rounded-md" />
              </div>
            </div>
            <Skeleton className="h-[25px] w-[82px] rounded-full" />
          </div>
        ))}
      </div>
    </section>
  );
}
