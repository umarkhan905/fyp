/*
  Warnings:

  - You are about to drop the column `feedback` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `expreience` on the `users` table. All the data in the column will be lost.
  - Added the required column `assessment` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `improvements` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recommendedForJob` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `strengths` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `summary` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRating` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weaknesses` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "feedbacks" DROP COLUMN "feedback",
DROP COLUMN "score",
ADD COLUMN     "assessment" TEXT NOT NULL,
ADD COLUMN     "improvements" TEXT NOT NULL,
ADD COLUMN     "recommendedForJob" BOOLEAN NOT NULL,
ADD COLUMN     "strengths" TEXT NOT NULL,
ADD COLUMN     "summary" TEXT NOT NULL,
ADD COLUMN     "totalRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weaknesses" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "expreience",
ADD COLUMN     "experience" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "RatingItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "comment" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "RatingItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RatingItem" ADD CONSTRAINT "RatingItem_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "feedbacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
