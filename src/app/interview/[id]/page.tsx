import React from "react";
import {
  createInterviewParticipation,
  getInterviewById,
  getUniqueParticipant,
} from "@/actions/interview-actions";
import { Interview } from "../_components/interview";
import { notFound, redirect } from "next/navigation";
import { getUserSession } from "@/lib/session";
import { IInterview } from "@/types";
import { prisma } from "@/lib/prisma";

export default async function InterviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const user = await getUserSession();

  // Check if the user is logged in, if not redirect to login page
  if (!user) {
    return redirect("/sign-in");
  }

  const [interview, participant] = await Promise.all([
    getInterviewById(id),
    getUniqueParticipant(id, user.id as string),
  ]);

  // Check if the interview exists, if not, return a 404 page
  if (!interview) notFound();

  // check if interview is valid and not expired, if not, return a expired page
  if (
    interview &&
    (interview.validateTill! < new Date() || interview.status === "EXPIRED")
  ) {
    // set interview as expired if not already
    if (interview.status !== "EXPIRED") {
      await prisma.interview.update({
        where: {
          id: id,
        },
        data: {
          status: "EXPIRED",
        },
      });
    }

    return redirect(`/interview/${interview.id}/expired`);
  }

  if (!participant) {
    // create interview participant (Status - Pending)
    await createInterviewParticipation(interview.id);
  }

  if (participant && participant.status === "COMPLETED") {
    if (interview.category === "JOB") {
      return redirect(`/interview/${interview.id}/alreday-attempted`);
    } else {
      // create interview participant (Status - Pending)
      await createInterviewParticipation(interview.id);
    }
  }

  return (
    <Interview
      participant={participant}
      interview={interview as IInterview}
      user={user}
    />
  );
}
