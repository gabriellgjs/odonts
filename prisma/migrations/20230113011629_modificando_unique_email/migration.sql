/*
  Warnings:

  - You are about to alter the column `agendadoPara` on the `agendamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `duracaoAgendamento` on the `agendamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `duracao_esperada` on the `tratamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - A unique constraint covering the columns `[email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `agendamentos` MODIFY `agendadoPara` DATETIME NOT NULL,
    MODIFY `duracaoAgendamento` DATETIME NULL;

-- AlterTable
ALTER TABLE `tratamentos` MODIFY `duracao_esperada` DATETIME NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_email_key` ON `Usuarios`(`email`);
