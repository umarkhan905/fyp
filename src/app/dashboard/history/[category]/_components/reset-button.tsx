"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import React from "react";

export default function ResetButton({ category }: { category: string }) {
  const handleResetSeach = () => {
    const form = document.querySelector("#search-form") as HTMLFormElement;
    form?.reset();
  };

  return (
    <Button className="rounded-full size-10" onClick={handleResetSeach} asChild>
      <Link href={`/dashboard/history/${category}`}>
        <X className="size-5 text-white" />
      </Link>
    </Button>
  );
}
