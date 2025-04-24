-- DropIndex
DROP INDEX "interview_participants_interviewId_intervieweeId_key";

-- AlterTable
ALTER TABLE "interviews" ALTER COLUMN "group" SET DEFAULT 'AI_BASED';
