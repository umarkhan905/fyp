import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full h-[500px]">
        <Skeleton className="h-full rounded-lg" />
      </div>
    </section>
  );
}
