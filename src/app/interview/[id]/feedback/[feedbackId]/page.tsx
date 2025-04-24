import { getFeedbackById } from "@/actions/interview-actions";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/utils/format-date";
import { Calendar, Star } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

export default async function Feedback({
  params,
}: {
  params: Promise<{ id: string; feedbackId: string }>;
}) {
  const feedbackId = (await params).feedbackId;

  const feedback = await getFeedbackById(feedbackId);

  if (!feedback) notFound();

  return (
    <main className="py-4 md:py-6 max-w-[90%] mx-auto w-full">
      <Container
        varient="section"
        className="max-w-xl mx-auto w-full  space-y-4"
      >
        <section className="space-y-3 md:space-y-4">
          <h1 className="text-center font-bold text-2xl md:text-3xl text-foreground">
            Feedback on the Interview — <br />
            {feedback?.interview.role} Interview
          </h1>

          <section className="max-w-md w-full mx-auto flex items-center justify-between flex-wrap gap-2">
            {/* Rating */}
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Star className="size-4 md:size-5" />
              <p>
                <span>Overall Impression:</span>
                <span className="ml-1 font-medium">
                  {feedback?.totalRating}
                </span>
                /10
              </p>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm md:text-base">
              <Calendar className="size-4 md:size-5" />
              <p>
                <span>{formatDate(feedback?.createdAt)}</span>
              </p>
            </div>
          </section>
        </section>

        <Separator />

        {/* Summary */}
        <section className="space-y-1">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Summary:
          </h2>
          <p className="text-sm md:text-base">{feedback?.summary}</p>
        </section>

        {/* Breakdown of evaluations */}
        <section className="space-y-1">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Breakdown of Evaluation:
          </h2>

          <div className="space-y-2">
            {feedback.rating.map((rating, index) => (
              <div key={rating.id} className="space-y-1">
                <h3 className="text-foreground text-sm md:text-base font-semibold">
                  {index + 1}. {rating.name} <span>({rating.score}/10)</span>
                </h3>
                <ul>
                  <li className="text-sm md:text-base">- {rating.comment}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* strngths */}
        <section className="space-y-1">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Strengths:
          </h2>
          <p className="text-sm md:text-base">{feedback?.strengths}</p>
        </section>

        {/* weaknesses */}
        <section className="space-y-1">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Weaknesses:
          </h2>
          <p className="text-sm md:text-base">{feedback?.weaknesses}</p>
        </section>

        {/* improvements */}
        <section className="space-y-1">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Improvements:
          </h2>
          <p className="text-sm md:text-base">{feedback?.improvements}</p>
        </section>

        {/* final assessment */}
        <section className="space-y-1">
          <div className=" flex items-center flex-wrap gap-2">
            <h2 className="text-foreground text-lg md:text-xl font-semibold">
              Final Verdict:
            </h2>
            {/* recommended for job or not */}
            <div
              className={`px-4 py-1 rounded-full ${feedback.recommendedForJob ? "bg-emerald-500/20 text-lime-500" : "bg-destructive/20 text-destructive"} text-sm font-medium capitalize`}
            >
              {feedback.recommendedForJob ? "Recommended" : "Not Recommended"}
            </div>
          </div>
          <p className="text-sm md:text-base">{feedback?.assessment}</p>
        </section>

        {/* Actions */}
        <section className="flex items-center gap-2 flex-wrap">
          <Button
            variant={"secondary"}
            className="min-h-10 md:min-h-11 rounded-full flex-1"
            asChild
          >
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>
          {feedback.interview.category === "MOCK" && (
            <Button
              className="min-h-10 md:min-h-11 rounded-full flex-1 text-white"
              asChild
            >
              <Link href={`/interview/${feedback?.interviewId}`}>
                Retake Interview
              </Link>
            </Button>
          )}
        </section>
      </Container>
    </main>
  );
}
