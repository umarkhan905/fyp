import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserSession } from "@/lib/session";
import { formatDate } from "@/utils/format-date";
import {
  ArrowRight,
  Award,
  BarChart4,
  BookOpen,
  CalendarDays,
  Check,
  Clock,
  MessageSquare,
  PlayCircle,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";

export default async function Dashboard() {
  const user = await getUserSession();
  const userData = {
    name: "Alex Johnson",
    completedInterviews: 8,
    upcomingInterviews: 2,
    totalHours: 5.5,
    averageScore: 7.8,
    recommendations: [
      "Practice behavioral questions more",
      "Work on technical explanations",
      "Improve answer structure",
    ],
    recentInterviews: [
      {
        id: 1,
        type: "Software Engineer",
        date: "2025-04-01",
        score: 8.2,
        description:
          "This is a sample description for the recent interview. It should provide some context for the user.",
      },
      {
        id: 2,
        type: "Product Manager",
        date: "2025-03-25",
        score: 7.5,
        description:
          "This is a sample description for the recent interview. It should provide some context for the user.",
      },
      {
        id: 3,
        type: "Data Scientist",
        date: "2025-03-18",
        score: 7.7,
        description:
          "This is a sample description for the recent interview. It should provide some context for the user.",
      },
    ],
  };

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
            <p className="text-4xl font-semibold text-center">2</p>
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
            <p className="text-4xl font-semibold text-center">5.5</p>
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
            <p className="text-4xl font-semibold text-center">5.5</p>
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
                <Link href="/interview/new">
                  <PlayCircle className="mr-2 h-5 w-5" />
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
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {userData.recentInterviews.map((interview) => (
                  <div
                    key={interview.id}
                    className="flex flex-col p-4 gap-2 border rounded-lg hover:bg-foreground/10 bg-gradient-to-t from-background/10 via-background/10 to-foreground/10 transition-all duration-300 relative"
                  >
                    {/* Interview Type */}
                    <div className="p-1 px-2 rounded-se-md rounded-es-md absolute top-0 right-0 bg-primary/40 text-xs text-foreground">
                      {interview.type}
                    </div>

                    {/* Interview Image */}
                    {/* <div className="size-10 rounded-full bg-primary"></div> */}
                    <FcGoogle className="size-10" />

                    {/* Interview Name */}
                    <h3 className="text-lg font-semibold">
                      {interview.type} Interview
                    </h3>

                    {/* Date and Score */}
                    <section className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <CalendarDays className="size-4" />
                        <p className="text-sm">
                          {formatDate(new Date(interview.date))}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <FaStar className="size-4" />
                        <p className="text-sm">{interview.score}/10</p>
                      </div>
                    </section>

                    {/* Interview Description */}
                    <p className="text-sm text-muted-foreground">
                      {interview.description}
                    </p>

                    {/* Button */}
                    <section className="flex items-center justify-between flex-wrap gap-2">
                      {/* Interview Icons */}
                      <section className="flex items-center">
                        <div className="flex items-center p-2 rounded-full bg-primary/20 text-primary border border-primary/30">
                          <RiTailwindCssFill className="size-6" />
                        </div>
                        <div
                          className={`flex items-center p-2 rounded-full bg-primary/20 text-primary -ml-2 border border-primary/30`}
                        >
                          <RiReactjsLine className="size-6" />
                        </div>
                      </section>

                      <Button className="rounded-full text-white">
                        View Interview <ArrowRight />
                      </Button>
                    </section>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" asChild>
                  <Link href="/interview/history">View All Interviews</Link>
                </Button>
              </div>
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
              {userData.recommendations.map((recommendation, index) => (
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
