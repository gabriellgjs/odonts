import { Module } from '@nestjs/common';
import { EmployeesRepository } from 'src/app/repositories/employees-repository';
import { RolesRepository } from 'src/app/repositories/roles-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaEmployeesRepository } from './prisma/repositories/prisma-employees-repository';
import { PrismaRolesRepository } from './prisma/repositories/prisma-roles-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: RolesRepository,
      useClass: PrismaRolesRepository,
    },
    {
      provide: EmployeesRepository,
      useClass: PrismaEmployeesRepository,
    },
  ],
  exports: [RolesRepository, EmployeesRepository],
})
export class DataBaseModule {}
