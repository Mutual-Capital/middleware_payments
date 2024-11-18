-- CreateTable
CREATE TABLE `Logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `apiName` VARCHAR(191) NOT NULL,
    `endpoint` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `statusCode` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
