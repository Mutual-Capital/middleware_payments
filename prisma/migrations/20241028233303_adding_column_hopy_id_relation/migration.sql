/*
  Warnings:

  - Added the required column `hopy_id_relation` to the `Logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `logs` ADD COLUMN `hopy_id_relation` VARCHAR(191) NOT NULL;
