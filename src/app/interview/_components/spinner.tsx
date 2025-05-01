import { Loader2 } from "lucide-react";
import React from "react";

interface SpinnerProps {
  message?: string;
  className?: string;
  loaderClassName?: string;
  textClassName?: string;
}

export default function Spinner({
  message,
  className,
  loaderClassName,
  textClassName,
}: SpinnerProps) {
  if (!message) return null;
  return (
    <div
      className={`bg-muted p-2 px-4 rounded-md flex gap-1 items-center max-w-fit mx-auto ${className}`}
    >
      <Loader2 className={`animate-spin size-6 ${loaderClassName}`} />
      <span
        className={`text-foreground font-semibold text-sm ${textClassName}`}
      >
        {message}
      </span>
    </div>
  );
}
