import { LucideIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface MessageCardProps {
  title: string;
  description: string;
  buttonText: string;
  icon: LucideIcon;
  varient?: "default" | "destructive" | "success" | "warning";
  url: string;
}

export default function MessageCard({
  title,
  description,
  buttonText,
  icon: Icon,
  varient = "default",
  url,
}: MessageCardProps) {
  return (
    <div
      className={`${varient === "destructive" && "bg-destructive/20 group-hover:bg-destructive/30 text-destructive"} ${varient === "default" && "bg-primary/20 group-hover:bg-primary/30 text-primary"} ${varient === "success" && "bg-emerald-500/20 group-hover:bg-emerald-500/30 text-emerald-500"} ${varient === "warning" && "bg-yellow-500/20 group-hover:bg-yellow-500/30 text-yellow-500"} p-4 rounded-md text-center  min-h-40 flex items-center justify-center flex-col gap-2 transition-colors duration-300`}
    >
      <Icon className="size-10 mx-auto" />
      <h1 className="font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{description}</p>
      <Button
        variant={varient === "destructive" ? "destructive" : "default"}
        className={`w-full rounded-full min-h-11 ${varient === "success" && "text-white bg-emerald-500 hover:bg-emerald-500/90"} ${varient === "warning" && "bg-yellow-500 text-black hover:bg-yellow-500/90"}`}
        asChild
      >
        <Link href={url}>{buttonText}</Link>
      </Button>
    </div>
  );
}
