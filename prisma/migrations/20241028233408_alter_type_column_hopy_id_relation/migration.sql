/*
  Warnings:

  - You are about to alter the column `hopy_id_relation` on the `logs` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `logs` MODIFY `hopy_id_relation` BIGINT NOT NULL;
