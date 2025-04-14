-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'INTERVIEWER', 'INTERVIEWEE');

-- CreateEnum
CREATE TYPE "ExperienceIn" AS ENUM ('MONTHS', 'YEARS');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('TECHNICAL', 'BEHAVIORAL', 'SYSTEM_DESIGN', 'MIXED');

-- CreateEnum
CREATE TYPE "InterviewDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "role" "Role" DEFAULT 'INTERVIEWEE',
    "companyName" TEXT,
    "position" TEXT,
    "mobile" TEXT,
    "expreience" INTEGER NOT NULL DEFAULT 0,
    "experienceIn" "ExperienceIn" DEFAULT 'MONTHS',
    "bio" TEXT,
    "linkedIn" TEXT,
    "gitHub" TEXT,
    "location" TEXT,
    "resume" TEXT,
    "coins" INTEGER NOT NULL DEFAULT 0,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "verifiedAt" TIMESTAMP(3),
    "lastLogin" TIMESTAMP(3),
    "verificationToken" TEXT,
    "verificationTokenExpiresAt" TIMESTAMP(3),
    "resetPasswordToken" TEXT,
    "resetPasswordTokenExpiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "intervieType" "InterviewType" NOT NULL DEFAULT 'TECHNICAL',
    "interviewDuration" INTEGER NOT NULL DEFAULT 0,
    "interviewDifficulty" "InterviewDifficulty" NOT NULL DEFAULT 'EASY',
    "interviewExperience" INTEGER NOT NULL DEFAULT 0,
    "interviewRole" TEXT NOT NULL,
    "interviewDescription" TEXT,
    "questionList" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
