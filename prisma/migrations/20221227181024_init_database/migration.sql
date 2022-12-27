-- CreateTable
CREATE TABLE `HealthPlans` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `descripition` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persons` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` CHAR(1) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `birthDate` DATE NOT NULL,
    `rg` VARCHAR(10) NOT NULL,
    `cpf` VARCHAR(12) NOT NULL,
    `street` VARCHAR(255) NOT NULL,
    `district` VARCHAR(100) NOT NULL,
    `city` VARCHAR(100) NOT NULL,
    `zipCode` VARCHAR(50) NOT NULL,
    `state` VARCHAR(50) NOT NULL,
    `telephone` VARCHAR(20) NOT NULL,
    `phoneMessage` VARCHAR(20) NOT NULL,
    `gender` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employees` (
    `personId` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `passoword` VARCHAR(255) NOT NULL,
    `admissionDate` DATE NOT NULL,
    `shutdownDate` DATE NULL,

    UNIQUE INDEX `Employees_personId_key`(`personId`),
    PRIMARY KEY (`personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patients` (
    `personId` INTEGER NOT NULL,
    `maritalStatus` VARCHAR(100) NOT NULL,
    `healthPlanId` INTEGER NOT NULL,

    PRIMARY KEY (`personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dentists` (
    `personId` INTEGER NOT NULL,
    `specialist` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `passoword` VARCHAR(255) NOT NULL,
    `admissionDate` DATE NOT NULL,
    `shutdownDate` DATE NULL,

    PRIMARY KEY (`personId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dentistId` INTEGER NOT NULL,
    `patientId` INTEGER NOT NULL,
    `employeeId` INTEGER NOT NULL,
    `scheduledAt` DATETIME NOT NULL,
    `treatmentDuraction` DATETIME NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Treatments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `expected_duration` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TreatmentOnAppointment` (
    `appointmentId` INTEGER NOT NULL,
    `treatmentId` INTEGER NOT NULL,

    PRIMARY KEY (`appointmentId`, `treatmentId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employees` ADD CONSTRAINT `Employees_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Persons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patients` ADD CONSTRAINT `Patients_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Persons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patients` ADD CONSTRAINT `Patients_healthPlanId_fkey` FOREIGN KEY (`healthPlanId`) REFERENCES `HealthPlans`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dentists` ADD CONSTRAINT `Dentists_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `Persons`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_dentistId_fkey` FOREIGN KEY (`dentistId`) REFERENCES `Dentists`(`personId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patients`(`personId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointments` ADD CONSTRAINT `Appointments_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `Employees`(`personId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TreatmentOnAppointment` ADD CONSTRAINT `TreatmentOnAppointment_appointmentId_fkey` FOREIGN KEY (`appointmentId`) REFERENCES `Appointments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TreatmentOnAppointment` ADD CONSTRAINT `TreatmentOnAppointment_treatmentId_fkey` FOREIGN KEY (`treatmentId`) REFERENCES `Treatments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
