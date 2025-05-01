"use server";

import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";

const getInterviewById = async (id: string) => {
  return await prisma.interview.findUnique({
    where: { id },
    include: {
      questions: true,
    },
  });
};

const getInterviewParticipants = async (id: string) => {
  return await prisma.interviewParticipant.findMany({
    where: { interviewId: id },
    include: {
      interviewee: true,
      feedbacks: {
        select: {
          totalRating: true,
          id: true,
        },
      },
    },
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
          category: true,
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

const getCreatedInterviews = async (
  userId: string,
  limit?: number,
  sortBy?: string,
  order?: string,
  skip?: number
) => {
  return await prisma.interview.findMany({
    where: {
      createdById: userId as string,
    },
    orderBy: {
      [sortBy || "createdAt"]: order || "desc",
    },
    take: limit,
    skip,
    include: {
      participants: true,
    },
  });
};

const getJobInterviews = async (
  userId: string,
  limit?: number,
  sortBy?: string,
  order?: string,
  skip?: number
) => {
  return await prisma.interview.findMany({
    where: {
      createdById: {
        not: userId as string,
      },
      participants: {
        some: {
          intervieweeId: userId as string,
        },
      },
    },
    orderBy: {
      [sortBy || "createdAt"]: order || "desc",
    },
    take: limit,
    skip,
  });
};

const getUniqueParticipant = async (
  interviewId: string,
  intervieweeId: string
) => {
  return await prisma.interviewParticipant.findFirst({
    where: {
      interviewId,
      intervieweeId,
    },
  });
};

export {
  getInterviewById,
  getFeedbackById,
  createInterviewParticipation,
  getCreatedInterviews,
  getJobInterviews,
  getInterviewParticipants,
  getUniqueParticipant,
};
