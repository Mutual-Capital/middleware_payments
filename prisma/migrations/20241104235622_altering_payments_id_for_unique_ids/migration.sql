/*
  Warnings:

  - A unique constraint covering the columns `[hopy_id_payment]` on the table `Logs` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[apiPix_id_payment]` on the table `Logs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Logs_hopy_id_payment_key` ON `Logs`(`hopy_id_payment`);

-- CreateIndex
CREATE UNIQUE INDEX `Logs_apiPix_id_payment_key` ON `Logs`(`apiPix_id_payment`);
