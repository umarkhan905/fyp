import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import React from "react";

export default function CoinsAlert() {
  return (
    <div className="max-w-lg mx-auto bg-destructive/15 text-destructive p-4 rounded-md space-y-1 border-destructive/50 border-2">
      <TriangleAlert className="size-8" />

      <h3 className="text-lg font-semibold ">Insufficient Coins</h3>
      <p className="text-sm text-foreground dark:text-muted-foreground">
        You don&apos;t have enough coins to start an interview. You can purchase
        more coins in the coins section.
      </p>

      <Button variant={"destructive"} className="w-full mt-2">
        Purchase Coins
      </Button>
    </div>
  );
}
