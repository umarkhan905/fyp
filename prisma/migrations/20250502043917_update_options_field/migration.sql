/*
  Warnings:

  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_questionId_fkey";

-- AlterTable
ALTER TABLE "questions" ADD COLUMN     "options" JSONB;

-- DropTable
DROP TABLE "options";
