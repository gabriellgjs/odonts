/*
  Warnings:

  - The primary key for the `agendamentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `agendadoPara` on the `agendamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `duracaoAgendamento` on the `agendamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `cargos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `enderecos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `funcionarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pacientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `pessoas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `planosdesaude` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `telefones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tratamentoagendamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tratamentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `duracao_esperada` on the `tratamentos` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `agendamentos` DROP FOREIGN KEY `Agendamentos_funcionarioId_fkey`;

-- DropForeignKey
ALTER TABLE `agendamentos` DROP FOREIGN KEY `Agendamentos_pacienteId_fkey`;

-- DropForeignKey
ALTER TABLE `enderecos` DROP FOREIGN KEY `Enderecos_pessoaId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionarios` DROP FOREIGN KEY `Funcionarios_cargoId_fkey`;

-- DropForeignKey
ALTER TABLE `funcionarios` DROP FOREIGN KEY `Funcionarios_pessoaId_fkey`;

-- DropForeignKey
ALTER TABLE `pacientes` DROP FOREIGN KEY `Pacientes_pessoaId_fkey`;

-- DropForeignKey
ALTER TABLE `pacientes` DROP FOREIGN KEY `Pacientes_planoDeSaudeId_fkey`;

-- DropForeignKey
ALTER TABLE `telefones` DROP FOREIGN KEY `Telefones_pessoaId_fkey`;

-- DropForeignKey
ALTER TABLE `tratamentoagendamento` DROP FOREIGN KEY `TratamentoAgendamento_agendamentoId_fkey`;

-- DropForeignKey
ALTER TABLE `tratamentoagendamento` DROP FOREIGN KEY `TratamentoAgendamento_tratamentoId_fkey`;

-- DropForeignKey
ALTER TABLE `usuarios` DROP FOREIGN KEY `Usuarios_funcionarioId_fkey`;

-- AlterTable
ALTER TABLE `agendamentos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `pacienteId` VARCHAR(191) NOT NULL,
    MODIFY `funcionarioId` VARCHAR(191) NOT NULL,
    MODIFY `agendadoPara` DATETIME NOT NULL,
    MODIFY `duracaoAgendamento` DATETIME NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cargos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `enderecos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `pessoaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `funcionarios` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `cargoId` VARCHAR(191) NOT NULL,
    MODIFY `pessoaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pacientes` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `planoDeSaudeId` VARCHAR(191) NOT NULL,
    MODIFY `pessoaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pessoas` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `planosdesaude` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `telefones` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `pessoaId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `tratamentoagendamento` DROP PRIMARY KEY,
    MODIFY `agendamentoId` VARCHAR(191) NOT NULL,
    MODIFY `tratamentoId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`agendamentoId`, `tratamentoId`);

-- AlterTable
ALTER TABLE `tratamentos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `duracao_esperada` DATETIME NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuarios` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(72) NOT NULL,
    MODIFY `funcionarioId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Enderecos` ADD CONSTRAINT `Enderecos_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefones` ADD CONSTRAINT `Telefones_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionarios` ADD CONSTRAINT `Funcionarios_cargoId_fkey` FOREIGN KEY (`cargoId`) REFERENCES `Cargos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funcionarios` ADD CONSTRAINT `Funcionarios_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pacientes` ADD CONSTRAINT `Pacientes_planoDeSaudeId_fkey` FOREIGN KEY (`planoDeSaudeId`) REFERENCES `PlanosDeSaude`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pacientes` ADD CONSTRAINT `Pacientes_pessoaId_fkey` FOREIGN KEY (`pessoaId`) REFERENCES `Pessoas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_pacienteId_fkey` FOREIGN KEY (`pacienteId`) REFERENCES `Pacientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Agendamentos` ADD CONSTRAINT `Agendamentos_funcionarioId_fkey` FOREIGN KEY (`funcionarioId`) REFERENCES `Funcionarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TratamentoAgendamento` ADD CONSTRAINT `TratamentoAgendamento_agendamentoId_fkey` FOREIGN KEY (`agendamentoId`) REFERENCES `Agendamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TratamentoAgendamento` ADD CONSTRAINT `TratamentoAgendamento_tratamentoId_fkey` FOREIGN KEY (`tratamentoId`) REFERENCES `Tratamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
