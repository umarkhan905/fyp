"use server";

import { prisma } from "@/lib/prisma";

const getInterviewById = async (id: string) => {
  return await prisma.interview.findUnique({ where: { id } });
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
export { getInterviewById, getFeedbackById };
