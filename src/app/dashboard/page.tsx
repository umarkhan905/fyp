import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";
import {
  Award,
  BarChart4,
  BookOpen,
  Check,
  Clock,
  MessageSquare,
  PlayCircle,
  Plus,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import NewInterviewCard from "./_components/new-interview-card";
import { getCreatedInterviews } from "@/actions/interview-actions";

export default async function Dashboard() {
  const user = await getUserSession();

  const [avgAndCount, practiceInterviews, recentInterviews] = await Promise.all(
    [
      prisma.feedback.aggregate({
        _count: {
          id: true,
        },
        _avg: {
          totalRating: true,
        },
        where: {
          userId: user?.id as string,
        },
      }),
      prisma.interviewParticipant.findMany({
        where: {
          intervieweeId: user?.id as string,
          status: "COMPLETED",
        },
        select: {
          startedAt: true,
          completedAt: true,
        },
      }),
      getCreatedInterviews(user?.id as string, 4),
    ]
  );

  // TODO: Optimize this query by adding duration field in prisma model and using aggregate function
  const practiveTime = practiceInterviews.reduce((acc, curr) => {
    if (!curr.completedAt || !curr.startedAt) {
      return acc;
    }

    const time = curr.completedAt.getTime() - curr.startedAt.getTime();
    return acc + time;
  }, 0);

  const totalHours = practiveTime / 1000 / 60 / 60;

  const recommendations = [
    "Practice behavioral questions more",
    "Work on technical explanations",
    "Improve answer structure",
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-foreground  mb-2">
          Welcome back,{" "}
          <span className="text-primary">
            {user?.firstName} {user?.lastName}
          </span>
        </h1>
        <p className="text-muted-foreground">
          Continue practicing to improve your interview skills
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Completed Interviews */}
        <Card className="group gap-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center flex-col gap-2">
              <div className="size-11 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <MessageSquare className="size-7 text-primary" />
              </div>
              Completed Interviews
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold text-center">
              {avgAndCount._count?.id || 0}
            </p>
          </CardContent>
        </Card>

        {/* Total Practice Hours */}
        <Card className="group gap-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center flex-col gap-2">
              <div className="size-11 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Clock className="size-7 text-primary" />
              </div>
              Total Practice Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold text-center">
              {totalHours.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        {/* Average Score */}
        <Card className="group gap-2">
          <CardHeader>
            <CardTitle className="text-lg flex items-center flex-col gap-2">
              <div className="size-11 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <Award className="size-7 text-primary" />
              </div>
              Average Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-semibold text-center">
              {avgAndCount?._avg?.totalRating?.toFixed(2) || 0}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Start Interview Section */}
      <Card>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Ready for your next practice?
              </h2>
              <p className="text-muted-foreground">
                Choose an interview type to start practicing now
              </p>
            </div>
            <div className="flex space-x-4">
              <Button
                className="flex items-center text-white"
                size="lg"
                asChild
              >
                <Link href="/dashboard/create-interview">
                  <PlayCircle className="size-5" />
                  Start New Interview
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Interviews */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Interviews */}
        <div className="lg:col-span-2">
          <Card className="h-full group">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                  <BarChart4 className="size-6 text-primary" />
                </div>
                Recent Interviews
              </CardTitle>
              <CardDescription>
                Your past interview sessions and scores
              </CardDescription>
            </CardHeader>
            <CardContent className="h-full">
              {recentInterviews.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {recentInterviews.map((interview) => (
                      <NewInterviewCard
                        key={interview.id}
                        interview={interview}
                        userId={user?.id}
                      />
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" asChild>
                      <Link href="/dashboard/history">View All Interviews</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center w-full">
                  <Card className="w-full">
                    <CardHeader className="text-center">
                      <CardTitle>No Recent Interviews</CardTitle>
                      <CardDescription>
                        You have not completed any interviews yet
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        asChild
                        className="w-full min-h-11 rounded-full text-white"
                      >
                        <Link href="/dashboard/create-interview">
                          <Plus className="size-5" />
                          Create your first interview
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Improvement Recommendations */}
        <Card className="h-fit group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300">
                <TrendingUp className="size-6 text-primary" />
              </div>
              Areas to Improve
            </CardTitle>
            <CardDescription>Based on your recent interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  <p>{recommendation}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t">
              <Button className="w-full" variant="outline" asChild>
                <Link href="/learning-resources">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Learning Resources
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
