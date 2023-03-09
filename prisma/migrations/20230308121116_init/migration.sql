-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `profileColor` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `isMentor` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_image_key`(`image`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
