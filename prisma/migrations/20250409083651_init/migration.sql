/*
  Warnings:

  - Added the required column `countryId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "countryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "continent" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
