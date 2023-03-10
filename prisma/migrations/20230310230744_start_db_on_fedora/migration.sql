-- CreateTable
CREATE TABLE `Cargos` (
    `id` VARCHAR(72) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tratamentos` (
    `id` VARCHAR(72) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `duracao_esperada` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PlanosDeSaude` (
    `id` VARCHAR(72) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `descricao` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enderecos` (
    `id` VARCHAR(72) NOT NULL,
    `rua` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(100) NOT NULL,
    `cidade` VARCHAR(100) NOT NULL,
    `cep` VARCHAR(50) NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `pessoaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefones` (
    `id` VARCHAR(72) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `pessoaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoas` (
    `id` VARCHAR(72) NOT NULL,
    `nome` VARCHAR(255) NOT NULL,
    `dataNascimento` DATE NOT NULL,
    `rg` VARCHAR(10) NOT NULL,
    `cpf` VARCHAR(12) NOT NULL,
    `genero` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funcionarios` (
    `id` VARCHAR(72) NOT NULL,
    `dataAdmissao` DATE NOT NULL,
    `dataDesligamento` DATE NULL,
    `cargoId` VARCHAR(191) NOT NULL,
    `pessoaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pacientes` (
    `id` VARCHAR(72) NOT NULL,
    `estadoCivil` VARCHAR(100) NOT NULL,
    `planoDeSaudeId` VARCHAR(191) NOT NULL,
    `pessoaId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` VARCHAR(72) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Agendamentos` (
    `id` VARCHAR(72) NOT NULL,
    `pacienteId` VARCHAR(191) NOT NULL,
    `funcionarioId` VARCHAR(191) NOT NULL,
    `agendadoPara` DATETIME NOT NULL,
    `duracaoAgendamento` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TratamentoAgendamento` (
    `agendamentoId` VARCHAR(191) NOT NULL,
    `tratamentoId` VARCHAR(191) NOT NULL,

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
