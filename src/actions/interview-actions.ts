"use server";

import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";

const getInterviewById = async (id: string) => {
  return await prisma.interview.findUnique({
    where: { id },
    include: { questions: true },
  });
};

const getFeedbackById = async (id: string) => {
  return await prisma.feedback.findUnique({
    where: { id },
    include: {
      rating: true,
      interview: {
        select: {
          role: true,
        },
      },
    },
  });
};

const createInterviewParticipation = async (interviewId: string) => {
  const user = await getUserSession();
  if (!user) return null;

  return await prisma.interviewParticipant.create({
    data: {
      intervieweeId: user.id as string,
      interviewId: interviewId,
      startedAt: new Date(),
    },
  });
};
export { getInterviewById, getFeedbackById, createInterviewParticipation };
