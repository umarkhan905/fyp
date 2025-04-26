import React from "react";
import {
  getInterviewById,
  getInterviewParticipants,
} from "@/actions/interview-actions";
import { notFound } from "next/navigation";
import Container from "@/components/ui/container";
import { Building, Calendar, Clock, ListChecks } from "lucide-react";
import { formatDate } from "@/utils/format-date";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getUserSession } from "@/lib/session";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function InterviewDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [interview, user, participants] = await Promise.all([
    getInterviewById(id),
    getUserSession(),
    getInterviewParticipants(id),
  ]);

  if (!interview) notFound();

  return (
    <section className="py-4 md:py-6 max-w-[90%] mx-auto w-full">
      <Container
        varient="section"
        className="max-w-xl mx-auto w-full  space-y-4"
      >
        <section className="space-y-3 md:space-y-4">
          {/* Header */}
          <h1 className="text-center font-bold text-2xl md:text-3xl text-foreground">
            {interview?.role} — <br />
            <span className="capitalize">
              {interview?.type.replaceAll("_", " ").toLowerCase()} Interview
            </span>
          </h1>

          {/* Info */}
          <section className="max-w-md w-full mx-auto flex items-center flex-wrap gap-4 justify-between">
            {/* Company */}
            <div className="flex items-center gap-1 text-sm md:text-base">
              <Building className="size-4 md:size-5" />
              <p>
                <span>{interview.companyName || "MockByte"}</span>
              </p>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1 text-sm md:text-base">
              <Calendar className="size-4 md:size-5" />
              <p>
                <span>{formatDate(interview?.createdAt)}</span>
              </p>
            </div>

            {/* Duration */}
            {interview?.duration !== 0 && (
              <div className="flex items-center gap-1 text-sm md:text-base">
                <Clock className="size-4 md:size-5" />
                <p>
                  <span>{interview?.duration} minutes</span>
                </p>
              </div>
            )}

            <div className="flex items-center gap-1">
              <ListChecks className="size-4 md:size-5" />
              <p>
                <span>{interview.noOfQuestions} Questions</span>
              </p>
            </div>
          </section>
        </section>

        <Separator />

        <section className="max-w-md w-full mx-auto flex items-center justify-center flex-wrap gap-3">
          {/* isActive  */}
          <Badge
            variant="outline"
            className={`${interview.status === "EXPIRED" ? "bg-destructive/20 text-destructive" : "bg-emerald-500/20 text-emerald-500"} p-1 rounded-full px-4`}
          >
            {interview?.status === "EXPIRED" ? "Expired" : "Active"}
          </Badge>

          {/* difficulty  */}
          <Badge
            variant="outline"
            className={`bg-primary/20 text-primary p-1 rounded-full px-4`}
          >
            {interview?.difficulty}
          </Badge>
        </section>

        {/* description */}
        <section className="space-y-2">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Description:
          </h2>
          <p className="text-sm md:text-base">{interview.description}</p>
        </section>

        {/* Related Keywords */}
        <section className="space-y-2">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Related Keywords:
          </h2>
          <div className="flex flex-wrap gap-2">
            {interview.keywords.split(",").map((kw) => (
              <Badge
                variant="outline"
                className={`bg-primary/20 text-primary p-1 rounded-full px-4`}
                key={kw.trim()}
              >
                {kw.trim()}
              </Badge>
            ))}
          </div>
        </section>

        {/* questions */}
        <section className="space-y-2">
          <h2 className="text-foreground text-lg md:text-xl font-semibold">
            Sample Questions:
          </h2>
          <ScrollArea className="h-48 border rounded-md p-4">
            <ul className="list-disc pl-4 space-y-2">
              {interview.questions.map((q, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  {q.question}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </section>

        {/* Attempts / Candidates */}
        {user?.role === "INTERVIEWEE" ? (
          <section className="space-y-2">
            <h3 className="text-foreground text-lg md:text-xl font-semibold">
              Attempts ({participants?.length})
            </h3>

            {participants.length > 0 ? (
              <section className="space-y-3">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between bg-muted p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src={"https://github.com/shadcn.pngn"}
                          alt={"Avatar"}
                        />
                        <AvatarFallback className="flex items-center justify-center bg-primary/20 text-primary">
                          {participant.interviewee.firstName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {participant.interviewee.firstName}{" "}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {participant.status === "COMPLETED" ? (
                            <span>
                              Completed on{" "}
                              {formatDate(participant.completedAt!)}
                            </span>
                          ) : (
                            <span>
                              Started on {formatDate(participant.startedAt!)}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    {participant.status === "COMPLETED" ? (
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={"outline"}
                          className="text-emerald-500 bg-emerald-500/20 rounded-full p-1 px-4"
                        >
                          {participant.feedbacks[0].totalRating}/10
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full"
                          asChild
                        >
                          <Link
                            href={`/interview/${interview.id}/feedback/${participant.feedbacks[0].id}`}
                          >
                            View Report
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <Badge
                        variant={"outline"}
                        className="text-yellow-500 bg-yellow-500/20 rounded-full p-1 px-4"
                      >
                        Pending
                      </Badge>
                    )}
                  </div>
                ))}
              </section>
            ) : (
              <Card className="py-4 gap-3">
                <CardHeader className="px-4">
                  <CardTitle className="">No attempts yet</CardTitle>
                  <CardDescription>
                    Start your interview to make your first attempt.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  <Button className="w-full rounded-full min-h-11" asChild>
                    <Link href={`/interview/${interview.id}`}>
                      Start Interview
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>
        ) : (
          <section className="space-y-2">
            <h3 className="text-foreground text-lg md:text-xl font-semibold">
              Candidates ({participants?.length})
            </h3>

            {participants.length > 0 ? (
              <section className="space-y-3">
                {participants.map((participant) => (
                  <div
                    key={participant.id}
                    className="flex items-center justify-between bg-bg-muted p-3 rounded-lg border"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src={"https://github.com/shadcn.pngn"}
                          alt={"Avatar"}
                        />
                        <AvatarFallback className="flex items-center justify-center bg-primary/20 text-primary">
                          {participant.interviewee.firstName?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm text-foreground">
                          {participant.interviewee.firstName}{" "}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {participant.status === "COMPLETED" ? (
                            <span>
                              Completed on{" "}
                              {formatDate(participant.completedAt!)}
                            </span>
                          ) : (
                            <span>
                              Started on {formatDate(participant.startedAt!)}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                    {participant.status === "COMPLETED" ? (
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={"outline"}
                          className="text-emerald-500 bg-emerald-500/20 rounded-full p-1 px-4"
                        >
                          {participant.feedbacks[0].totalRating}/10
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full"
                          asChild
                        >
                          <Link
                            href={`/interview/${interview.id}/feedback/${participant.feedbacks[0].id}`}
                          >
                            View Report
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <Badge
                        variant={"outline"}
                        className="text-yellow-500 bg-yellow-500/20 rounded-full p-1 px-4"
                      >
                        Pending
                      </Badge>
                    )}
                  </div>
                ))}
              </section>
            ) : (
              <Card className="py-4 gap-3">
                <CardHeader className="px-4">
                  <CardTitle className="">No candidates yet</CardTitle>
                  <CardDescription>
                    Share your interview link with candidates to make your first
                    candidate.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4">
                  <Button className="w-full rounded-full min-h-11">
                    Copy Link
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>
        )}
      </Container>
    </section>
  );
}
