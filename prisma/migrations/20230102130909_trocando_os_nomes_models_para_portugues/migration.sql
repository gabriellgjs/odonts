/*
  Warnings:

  - You are about to drop the `andress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `appointments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `healthplans` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `patients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `persons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `telephones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treatmentonappointment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `treatments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `andress` DROP FOREIGN KEY `Andress_personId_fkey`;

-- DropForeignKey
ALTER TABLE `appointments` DROP FOREIGN KEY `Appointments_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `appointments` DROP FOREIGN KEY `Appointments_patientId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `Employees_personId_fkey`;

-- DropForeignKey
ALTER TABLE `employees` DROP FOREIGN KEY `Employees_roleId_fkey`;

-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `Patients_healthPlanId_fkey`;

-- DropForeignKey
ALTER TABLE `patients` DROP FOREIGN KEY `Patients_personId_fkey`;

-- DropForeignKey
ALTER TABLE `telephones` DROP FOREIGN KEY `Telephones_personId_fkey`;

-- DropForeignKey
ALTER TABLE `treatmentonappointment` DROP FOREIGN KEY `TreatmentOnAppointment_appointmentId_fkey`;

-- DropForeignKey
ALTER TABLE `treatmentonappointment` DROP FOREIGN KEY `TreatmentOnAppointment_treatmentId_fkey`;

-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_employeeId_fkey`;

-- DropTable
DROP TABLE `andress`;

-- DropTable
DROP TABLE `appointments`;

-- DropTable
DROP TABLE `employees`;

-- DropTable
DROP TABLE `healthplans`;

-- DropTable
DROP TABLE `patients`;

-- DropTable
DROP TABLE `persons`;

-- DropTable
DROP TABLE `roles`;

-- DropTable
DROP TABLE `telephones`;

-- DropTable
DROP TABLE `treatmentonappointment`;

-- DropTable
DROP TABLE `treatments`;

-- DropTable
DROP TABLE `users`;

-- CreateTable
CREATE TABLE `Cargos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tratamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `duracao_esperada` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanosDeSaude` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `cidade` VARCHAR(100) NOT NULL,
    `cep` VARCHAR(50) NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `pessoaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone` VARCHAR(20) NOT NULL,
    `pessoaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `dataNascimento` DATE NOT NULL,
    `rg` VARCHAR(10) NOT NULL,
    `cpf` VARCHAR(12) NOT NULL,
    `genero` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataAdmissao` DATE NOT NULL,
    `dataDesligamento` DATE NULL,
    `cargoId` INTEGER NOT NULL,
    `pessoaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pacientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `estadoCivil` VARCHAR(100) NOT NULL,
    `planoDeSaudeId` INTEGER NOT NULL,
    `pessoaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `funcionarioId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agendamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pacienteId` INTEGER NOT NULL,
    `funcionarioId` INTEGER NOT NULL,
    `agendadoPara` DATETIME NOT NULL,
    `duracaoAgendamento` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TratamentoAgendamento` (
    `agendamentoId` INTEGER NOT NULL,
    `tratamentoId` INTEGER NOT NULL,

    PRIMARY KEY (`agendamentoId`, `tratamentoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
