import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowLeft, Check, Clock, List, Mail, Phone, Plus } from "lucide-react";
import Link from "next/link";
import CopyLinkInput from "./copy-link-input";
import { ICreatedInterview } from "@/types";

interface CreatedInterviewProps {
  onStepChange: (step: number) => void;
  interview: ICreatedInterview;
}

export default function CreatedInterview({
  onStepChange,
  interview,
}: CreatedInterviewProps) {
  return (
    <section className="max-w-lg w-full mx-auto space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-center size-14 bg-emerald-500 rounded-full text-white mx-auto">
          <Check className="size-10" />
        </div>
        <h1 className="text-2xl font-semibold text-center">
          Your AI Interview is Ready!
        </h1>
        <p className="text-center">
          Share this link with your candidates to start the interview process
        </p>
      </div>

      <section className="group shadow border dark:border-muted dark:bg-muted/30 rounded-lg p-3 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="font-bold">Interview Link</h2>
          <p className="p-1 px-2 rounded-full bg-primary/20 text-primary group-hover:bg-primary/30 transition-all duration-300 text-sm">
            Valid for 24 hours
          </p>
        </div>

        <CopyLinkInput interviewId={interview.id} />

        <Separator />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="size-4" />
            <span>{interview.duration} Min</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <List className="size-4" />
            <span>{interview.questions.length} Questions</span>
          </div>
        </div>
      </section>

      <section className="group shadow border rounded-lg p-3 space-y-4 dark:border-muted dark:bg-muted/30">
        <h2 className="font-bold">Share Link Via</h2>

        <div className="flex items-center gap-3 flex-wrap">
          <Button className="w-auto sm:min-w-[100px] rounded-full min-h-10 text-white">
            <Mail className="size-4" />
            <span>Email</span>
          </Button>
          <Button className="w-auto sm:min-w-[100px] rounded-full min-h-10 text-white">
            <Phone className="size-4" />
            <span>Whatsapp</span>
          </Button>
        </div>
      </section>

      <section className="flex items-center justify-between flex-wrap gap-2">
        <Link
          href="/dashboard"
          className={cn(
            buttonVariants({
              variant: "outline",
              className: "min-h-11 rounded-full",
            })
          )}
        >
          <ArrowLeft className="size-4" />
          <span>Back to Dashboard</span>
        </Link>

        <Link
          href="/dashboard/create-interview"
          className={cn(
            buttonVariants({
              className: "min-h-11 rounded-full text-white",
            })
          )}
          onClick={() => onStepChange(1)}
        >
          <Plus className="size-4" />
          <span>Create Another Interview</span>
        </Link>
      </section>
    </section>
  );
}
