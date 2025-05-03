import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="min-h-screen py-4 sm:py-6 space-y-4 flex items-center flex-col">
      <div className="space-y-2">
        <Skeleton className="size-14 rounded-full mx-auto" />
        <Skeleton className="w-sm h-5 rounded-md" />
      </div>
      <Skeleton className="h-[200px] rounded-md w-sm" />
      <Skeleton className="h-[20px] rounded-md w-sm" />
      <Skeleton className="h-[50px] rounded-md w-sm" />
      <Skeleton className="h-[300px] rounded-md w-sm" />
      <Skeleton className="min-h-11 rounded-full w-sm" />
      <Skeleton className="min-h-11 rounded-full w-sm" />
    </section>
  );
}
