/*
  Warnings:

  - You are about to drop the `InrWalet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InrWalet" DROP CONSTRAINT "InrWalet_userId_fkey";

-- DropTable
DROP TABLE "InrWalet";

-- CreateTable
CREATE TABLE "InrWallet" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "InrWallet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InrWallet_userId_key" ON "InrWallet"("userId");

-- AddForeignKey
ALTER TABLE "InrWallet" ADD CONSTRAINT "InrWallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
