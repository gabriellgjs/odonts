import { Module } from '@nestjs/common';
import { EmployeesRepository } from 'src/app/repositories/employees-repository';
import { RolesRepository } from 'src/app/repositories/roles-repository';
import { UsersRepository } from 'src/app/repositories/users-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaEmployeesRepository } from './prisma/repositories/prisma-employees-repository';
import { PrismaRolesRepository } from './prisma/repositories/prisma-roles-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';

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
    {
      provide: UsersRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [
    RolesRepository,
    EmployeesRepository,
    UsersRepository,
    PrismaService,
  ],
})
export class DataBaseModule {}
