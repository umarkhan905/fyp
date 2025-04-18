import { Loader2 } from "lucide-react";
import React from "react";

export default function GeneratingQuestionsLoading() {
  return (
    <section className="max-w-lg mx-auto w-full border-2 border-primary/30 rounded-lg p-3 flex items-center gap-3">
      <Loader2 className="size-8 animate-spin text-primary" />
      <div className="flex-1">
        <h2 className="text-lg font-semibold">
          Your questions are being generated
        </h2>
        <p className="text-sm text-muted-foreground">
          This might take a few seconds to complete your interview questions are
          being generated and will be available soon for you to start.
        </p>
      </div>
    </section>
  );
}
