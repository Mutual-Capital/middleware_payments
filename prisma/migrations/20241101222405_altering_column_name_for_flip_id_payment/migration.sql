/*
  Warnings:

  - You are about to drop the column `flip_id_payment` on the `logs` table. All the data in the column will be lost.
  - Added the required column `apiPix_id_payment` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `logs` DROP COLUMN `flip_id_payment`,
    ADD COLUMN `apiPix_id_payment` BIGINT NOT NULL;
