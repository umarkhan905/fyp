import {
  getCreatedInterviews,
  getJobInterviews,
} from "@/actions/interview-actions";
import NoInterviewsFound from "../no-interviews-found";
import NewInterviewCard from "@/app/dashboard/_components/new-interview-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DUMMY_INTERVIEWS } from "@/constants";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBackground } from "@/components/icons/icon-bg";
import { Phone, Video } from "lucide-react";
import BrandName from "@/components/branding/brand-name";

interface Props {
  userId: string;
}

export default async function IntervieweeHistoryPage({ userId }: Props) {
  const [mockInterviews, jobInterviews] = await Promise.all([
    getCreatedInterviews(userId, 3),
    getJobInterviews(userId, 3),
  ]);

  if (!mockInterviews.length && !jobInterviews.length)
    return (
      <section className="h-full flex items-center justify-center">
        <NoInterviewsFound
          label="No interviews found"
          description="You have not created any mock interview yet or appear in any job interview."
          btnText="Create Your First Mock Interview"
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
              <CardTitle>Create New Mock Interview</CardTitle>
              <CardDescription>
                Create a mock interview to practice your skills and prepare for
                interviews.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>

        <Card className="group p-0">
          <CardHeader className="p-4">
            <IconBackground className="rounded-md size-9! group-hover:bg-primary/30">
              <Phone className="text-primary size-5" />
            </IconBackground>
            <CardTitle>Call for Interview</CardTitle>
            <CardDescription>
              Call to <BrandName /> Agent to create a mock interview for you.
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

      {/* Mock Interviews */}
      {mockInterviews.length > 0 && (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Mock Interviews</h2>
            <Button variant={"link"} asChild>
              <Link href={"/dashboard/history/mock"}>View All</Link>
            </Button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {mockInterviews.map((interview) => (
              <NewInterviewCard
                interview={interview}
                userId={userId}
                key={interview.id}
              />
            ))}
          </section>
        </section>
      )}

      {/* Job Interviews */}
      {jobInterviews.length > 0 && (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Job Interviews</h2>
            <Button variant={"link"} asChild>
              <Link href={"/dashboard/history/job"}>View All</Link>
            </Button>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {jobInterviews.map((interview) => (
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
