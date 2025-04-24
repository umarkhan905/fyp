"use client";

import React, { useEffect } from "react";
import Logo from "@/components/branding/logo";
import BrandName from "@/components/branding/brand-name";
import Image from "next/image";
import { Book, Clock, Info, List, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TestAudioButton from "./TestAudioButton";
import { IInterview } from "@/types";
import { useInterviewContext } from "@/context/interview-context";
import { User } from "next-auth";

interface InterviewProps {
  interview: IInterview | null;
  user: User | null;
}

export function Interview({ interview, user }: InterviewProps) {
  const { handleInterviewChange, handleSetUser } = useInterviewContext();
  const instructions = [
    {
      id: 1,
      content: "Answer the question as truthfully as possible.",
    },
    {
      id: 2,
      content: "Answer the question as concisely as possible.",
    },
    {
      id: 3,
      content: "Answer the question as quickly as possible.",
    },
  ];

  useEffect(() => {
    if (interview) {
      handleInterviewChange(interview);
    }
  }, [interview, handleInterviewChange]);

  useEffect(() => {
    if (user) {
      handleSetUser(user);
    }
  }, [user, handleSetUser]);

  return (
    <main className="min-h-screen py-4 sm:py-6 space-y-4">
      <Container className="space-y-2">
        <div className="flex items-center justify-center size-14 mx-auto bg-primary/20 rounded-full text-primary hover:bg-primary/30 transition-all duration-300">
          <Logo variant="logo-primary" className="w-auto h-10" />
        </div>
        <h1 className="text-lg font-semibold text-center text-muted-foreground">
          <BrandName className="text-primary" /> - AI Based Interview Simulator
        </h1>
      </Container>

      <Container className="flex items-center justify-center">
        <Image
          src={"/interview.webp"}
          className="w-auto h-auto"
          width={400}
          height={400}
          alt={"Interview"}
        />
      </Container>

      <Container className="space-y-3">
        <h2 className="text-2xl font-semibold text-center">
          {interview?.role}{" "}
          {interview?.category === "JOB" ? "Job Interview" : "Mock Interview"}
        </h2>

        <Card className="max-w-sm w-full mx-auto py-3 rounded-md">
          <CardContent className="flex items-center justify-between px-2">
            {interview?.duration !== 0 ? (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="size-4" />
                <p className="text-sm ">{interview?.duration} Minutes</p>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-muted-foreground">
                <Book className="size-4" />
                <p className="text-sm ">{interview?.topic}</p>
              </div>
            )}

            <div className="flex items-center gap-1 text-muted-foreground">
              <List className="size-4" />
              <p className="text-sm ">{interview?.noOfQuestions} Questions</p>
            </div>
          </CardContent>
        </Card>
      </Container>

      {/* Instructions */}
      <Container>
        <div className="max-w-sm w-full mx-auto bg-primary/10 rounded-sm p-3">
          <div className="flex flex-col gap-2">
            <span>
              <Info className="size-6 text-primary" />
            </span>

            <div className="space-y-0.5">
              <h3 className="text-lg text-primary font-semibold">
                Before you begin
              </h3>

              <p className="text-sm text-muted-foreground">
                Read the following instructions carefully before starting the
                interview.
              </p>

              <ul className="list-disc px-5 mt-2 text-muted-foreground">
                <li className="text-sm ">
                  You will be asked {interview?.noOfQuestions} questions and
                  have {interview?.duration} minutes to answer them.
                </li>
                {instructions.map((instruction) => (
                  <li key={instruction.id} className="text-sm">
                    {instruction.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Join Interview */}
      <Container className="max-w-sm space-y-2">
        <Button className="w-full min-h-11 rounded-full" asChild>
          <Link href={`/interview/${interview?.id}/join`}>
            <Mic className="size-4" />
            Join Interview
          </Link>
        </Button>

        <TestAudioButton />
      </Container>
    </main>
  );
}
