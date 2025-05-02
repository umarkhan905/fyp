import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IInterview } from "@/types";
import { formatDate } from "@/utils/format-date";
import { Building, Calendar } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  interview: IInterview;
  userId?: string;
}

export default function NewInterviewCard({ interview, userId }: Props) {
  const isPariticapteInInterview = interview?.participants?.some(
    (p) => p.intervieweeId === interview.createdById
  );
  const isCreator = interview.createdById === userId;

  return (
    <Card className="group p-0 gap-2">
      <CardHeader className="p-4 relative">
        <Avatar className="size-12 mb-2">
          <AvatarImage
            src={interview.companyLogo as string}
            alt={interview.companyName || "MockByte"}
          />
          <AvatarFallback className="bg-primary/20 text-primary group-hover:bg-primary/30 transition-all duration-300">
            MB
          </AvatarFallback>
        </Avatar>
        <CardTitle className="line-clamp-1">
          {interview.role} Interview
        </CardTitle>
        <CardDescription className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1">
            <Building className="size-4" />
            {interview.companyName || "MockByte"}
          </div>

          <div className="flex items-center gap-1">
            <Calendar className="size-4" />
            {formatDate(interview.createdAt)}
          </div>
        </CardDescription>

        <div className="absolute top-0.5 right-0.5 flex items-center gap-2">
          {/* <Badge
            className="capitalize bg-emerald-500/20 text-emerald-500 group-hover:bg-emerald-500/30 transition-all duration-300 p-1 px-2 rounded-full"
            variant={"outline"}
          >
            {interview.difficulty}
          </Badge> */}

          <Badge
            className="capitalize bg-primary/20 text-primary group-hover:bg-primary/30 transition-all duration-300 p-1 px-2 rounded-full"
            variant={"outline"}
          >
            {interview.type.replaceAll("_", " ").toLowerCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-0 px-4">
        <p className="text-muted-foreground line-clamp-4">
          {interview.description}
        </p>
      </CardContent>
      <CardFooter className="p-4">
        <div className="flex items-center gap-2 w-full flex-wrap">
          {/* View Interview Button */}
          <Button
            variant={"outline"}
            className="flex-1 min-h-11 rounded-full"
            asChild
          >
            <Link href={`/interview/${interview.id}/detail`}>View Details</Link>
          </Button>

          {/* Start Interview Button */}
          {interview.category === "MOCK" && (
            <Button
              variant={
                interview.status === "EXPIRED" ? "destructive" : "default"
              }
              className="flex-1 min-h-11 rounded-full text-white"
              disabled={interview.status === "EXPIRED"}
              asChild
            >
              {interview.status === "EXPIRED" ? (
                "Expired"
              ) : (
                <Link href={`/interview/${interview.id}`}>
                  {isPariticapteInInterview
                    ? "Retake Interview"
                    : "Start Interview"}
                </Link>
              )}
            </Button>
          )}

          {/* Copy Interview Link */}
          {isCreator && interview.category === "JOB" && (
            <Button
              variant={
                interview.status === "EXPIRED" ? "destructive" : "default"
              }
              className="flex-1 min-h-11 rounded-full text-white"
              disabled={interview.status === "EXPIRED"}
            >
              {interview.status === "EXPIRED"
                ? "Expired"
                : "Copy Interview Link"}
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
