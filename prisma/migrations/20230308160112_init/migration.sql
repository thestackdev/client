-- CreateTable
CREATE TABLE `Otp` (
    `id` VARCHAR(191) NOT NULL,
    `otp` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,

    UNIQUE INDEX `Otp_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
