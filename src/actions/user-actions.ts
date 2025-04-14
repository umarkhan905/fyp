"use server";

import { prisma } from "@/lib/prisma";
import { ICreateUser } from "@/types";

const createUser = async (data: ICreateUser) => {
  return await prisma.user.create({
    data,
  });
};

const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
  });
};

export { createUser, getUserById, getUserByEmail };
