import { getCreatedInterviews } from "@/actions/interview-actions";
import React from "react";
import NoInterviewsFound from "../no-interviews-found";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBackground } from "@/components/icons/icon-bg";
import { Monitor, Video } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DUMMY_INTERVIEWS } from "@/constants";
import NewInterviewCard from "@/app/dashboard/_components/new-interview-card";

interface Props {
  userId: string;
}

export default async function InterviewerHistoryPage({ userId }: Props) {
  const createdInterviews = await getCreatedInterviews(userId, 6);

  if (!createdInterviews.length)
    return (
      <section className="h-full flex items-center justify-center">
        <NoInterviewsFound
          label="No interviews found"
          description="You have not created any job interview yet."
          btnText="Create Your First Job Interview"
        />
      </section>
    );
  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">Umar Khan</span> Interviews History
          </h1>
        </div>
        <p className="text-muted-foreground">
          Review and manage your mock interviews and job interviews.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link href={"/dashboard/create-interview"}>
          <Card className="group p-0">
            <CardHeader className="p-4">
              <IconBackground className="rounded-md size-9! group-hover:bg-primary/30">
                <Video className="text-primary size-5" />
              </IconBackground>
              <CardTitle>Create New AI Interview</CardTitle>
              <CardDescription>
                Create a AI based job interview to share with candidates and
                make hiring process easier.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Card className="group p-0">
          <CardHeader className="p-4">
            <IconBackground className="rounded-md size-9! group-hover:bg-primary/30">
              <Monitor className="text-primary size-5" />
            </IconBackground>
            <CardTitle>Create New Manual Interview</CardTitle>
            <CardDescription>
              Create a manual job interview to share with candidates and make
              hiring process easier.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Suggested Interviews */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Made for You</h2>
          <Button variant={"link"} asChild>
            <Link href={"/dashboard/history/made-for-you"}>View All</Link>
          </Button>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {DUMMY_INTERVIEWS.map((interview) => (
            <NewInterviewCard interview={interview} key={interview.id} />
          ))}
        </section>
      </section>

      {/* Job Interviews */}
      {createdInterviews.length > 0 && (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Previously Created Job Interviews
            </h2>
            <Button variant={"link"} asChild>
              <Link href={"/dashboard/history/job"}>View All</Link>
            </Button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {createdInterviews.map((interview) => (
              <NewInterviewCard
                userId={userId}
                interview={interview}
                key={interview.id}
              />
            ))}
          </section>
        </section>
      )}
    </>
  );
}
