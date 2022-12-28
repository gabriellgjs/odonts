/*
  Warnings:

  - You are about to drop the column `dentistId` on the `appointments` table. All the data in the column will be lost.
  - You are about to alter the column `scheduledAt` on the `appointments` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `treatmentDuraction` on the `appointments` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `expected_duration` on the `treatments` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to drop the `dentists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `positionId` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `appointments` DROP FOREIGN KEY `Appointments_dentistId_fkey`;

-- DropForeignKey
ALTER TABLE `dentists` DROP FOREIGN KEY `Dentists_personId_fkey`;

-- AlterTable
ALTER TABLE `appointments` DROP COLUMN `dentistId`,
    MODIFY `scheduledAt` DATETIME NOT NULL,
    MODIFY `treatmentDuraction` DATETIME NULL;

-- AlterTable
ALTER TABLE `employees` ADD COLUMN `positionId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `treatments` MODIFY `expected_duration` DATETIME NOT NULL;

-- DropTable
DROP TABLE `dentists`;

-- CreateTable
CREATE TABLE `Position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employees` ADD CONSTRAINT `Employees_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `Position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
