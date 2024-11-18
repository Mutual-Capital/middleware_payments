/*
  Warnings:

  - You are about to drop the column `hopy_id_relation` on the `logs` table. All the data in the column will be lost.
  - Added the required column `flip_id_payment` to the `Logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hopy_id_payment` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `logs` DROP COLUMN `hopy_id_relation`,
    ADD COLUMN `flip_id_payment` BIGINT NOT NULL,
    ADD COLUMN `hopy_id_payment` BIGINT NOT NULL;
