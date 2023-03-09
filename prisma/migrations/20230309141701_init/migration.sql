/*
  Warnings:

  - You are about to drop the column `email` on the `Otp` table. All the data in the column will be lost.
  - Added the required column `reason` to the `Otp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source` to the `Otp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Otp` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Otp_email_key` ON `Otp`;

-- AlterTable
ALTER TABLE `Otp` DROP COLUMN `email`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `reason` ENUM('REGISTER', 'FORGOT_PASSWORD') NOT NULL,
    ADD COLUMN `source` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `intrests` JSON NOT NULL;
