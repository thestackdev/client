-- CreateTable
CREATE TABLE `Mentor` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `schoolName` VARCHAR(191) NOT NULL,
    `schoolMotive` VARCHAR(191) NOT NULL,
    `schoolNiche` VARCHAR(191) NOT NULL,
    `schoolDescription` VARCHAR(191) NOT NULL,
    `mentorLanguage` VARCHAR(191) NOT NULL,
    `mentorIdentity` VARCHAR(191) NOT NULL,
    `mentorIsTeacher` VARCHAR(191) NOT NULL,
    `mentorExperience` VARCHAR(191) NOT NULL,
    `mentorHaveDocuments` VARCHAR(191) NOT NULL,
    `addressLine1` VARCHAR(191) NOT NULL,
    `addressLine2` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `postalCode` VARCHAR(191) NOT NULL,
    `mentorPanCard` VARCHAR(191) NOT NULL,
    `mentorVideo` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Mentor_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mentor` ADD CONSTRAINT `Mentor_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
