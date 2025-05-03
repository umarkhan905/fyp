import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full">
        <Skeleton className="w-full rounded-md h-[300px]" />
      </div>
    </section>
  );
}
