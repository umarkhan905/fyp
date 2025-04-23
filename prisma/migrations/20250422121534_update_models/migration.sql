-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'INTERVIEWER', 'INTERVIEWEE');

-- CreateEnum
CREATE TYPE "ExperienceIn" AS ENUM ('MONTHS', 'YEARS');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('TECHNICAL', 'BEHAVIORAL', 'TECHNICAL_AND_BEHAVIORAL', 'SYSTEM_DESIGN', 'HR', 'PROBLEM_SOLVING');

-- CreateEnum
CREATE TYPE "InterviewDifficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "InterviewStatus" AS ENUM ('PENDING', 'CREATED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "Group" AS ENUM ('MANUAL', 'AI_BASED');

-- CreateEnum
CREATE TYPE "AssessmentType" AS ENUM ('MCQ_BASED', 'VOICE_BASED');

-- CreateEnum
CREATE TYPE "InterviewCategory" AS ENUM ('JOB', 'MOCK');

-- CreateEnum
CREATE TYPE "CreatedByRole" AS ENUM ('INTERVIEWER', 'INTERVIEWEE');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "role" "Role" DEFAULT 'INTERVIEWEE',
    "companyName" TEXT,
    "position" TEXT,
    "mobile" TEXT,
    "experience" INTEGER NOT NULL DEFAULT 0,
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interviews" (
    "id" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdByRole" "CreatedByRole" NOT NULL DEFAULT 'INTERVIEWER',
    "type" "InterviewType" NOT NULL DEFAULT 'TECHNICAL',
    "duration" INTEGER NOT NULL DEFAULT 0,
    "difficulty" "InterviewDifficulty" NOT NULL DEFAULT 'EASY',
    "experience" INTEGER NOT NULL DEFAULT 0,
    "experienceIn" "ExperienceIn" NOT NULL DEFAULT 'MONTHS',
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "keywords" TEXT NOT NULL,
    "topic" TEXT,
    "companyName" TEXT,
    "companyLogo" TEXT,
    "group" "Group" NOT NULL DEFAULT 'MANUAL',
    "assessmentType" "AssessmentType" NOT NULL DEFAULT 'VOICE_BASED',
    "noOfQuestions" INTEGER NOT NULL DEFAULT 0,
    "status" "InterviewStatus" NOT NULL DEFAULT 'PENDING',
    "validateTill" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview_participants" (
    "id" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,
    "intervieweeId" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "timeTaken" TEXT,

    CONSTRAINT "interview_participants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "codeEditorRequired" BOOLEAN NOT NULL DEFAULT false,
    "questionType" TEXT NOT NULL,
    "options" TEXT,
    "answer" TEXT,
    "explanation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "feedbacks" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "interviewId" TEXT NOT NULL,
    "interviewParticipantId" TEXT,
    "totalRating" DOUBLE PRECISION NOT NULL,
    "summary" TEXT NOT NULL,
    "strengths" TEXT NOT NULL,
    "weaknesses" TEXT NOT NULL,
    "improvements" TEXT NOT NULL,
    "assessment" TEXT NOT NULL,
    "recommendedForJob" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "rating_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "interviews_createdById_idx" ON "interviews"("createdById");

-- CreateIndex
CREATE INDEX "interview_participants_interviewId_intervieweeId_idx" ON "interview_participants"("interviewId", "intervieweeId");

-- CreateIndex
CREATE UNIQUE INDEX "interview_participants_interviewId_intervieweeId_key" ON "interview_participants"("interviewId", "intervieweeId");

-- CreateIndex
CREATE INDEX "feedbacks_interviewId_idx" ON "feedbacks"("interviewId");

-- AddForeignKey
ALTER TABLE "interviews" ADD CONSTRAINT "interviews_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview_participants" ADD CONSTRAINT "interview_participants_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview_participants" ADD CONSTRAINT "interview_participants_intervieweeId_fkey" FOREIGN KEY ("intervieweeId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "interviews"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "feedbacks" ADD CONSTRAINT "feedbacks_interviewParticipantId_fkey" FOREIGN KEY ("interviewParticipantId") REFERENCES "interview_participants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating_items" ADD CONSTRAINT "rating_items_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedbacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
