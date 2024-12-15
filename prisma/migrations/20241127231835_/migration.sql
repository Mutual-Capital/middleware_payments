-- CreateTable
CREATE TABLE `Logs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `apiName` VARCHAR(191) NOT NULL,
    `endpoint` VARCHAR(191) NOT NULL,
    `response` VARCHAR(191) NOT NULL,
    `payment_status` VARCHAR(191) NOT NULL,
    `hopy_id_payment` VARCHAR(191) NOT NULL,
    `apiPix_id_payment` VARCHAR(191) NOT NULL,
    `statusCode` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Logs_hopy_id_payment_key`(`hopy_id_payment`),
    UNIQUE INDEX `Logs_apiPix_id_payment_key`(`apiPix_id_payment`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
