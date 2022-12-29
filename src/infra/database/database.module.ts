import { Module } from '@nestjs/common';
import { EmployeesRepository } from 'src/app/repositories/employees-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaEmployeesRepository } from './prisma/repositories/Prisma-employees-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: EmployeesRepository,
      useClass: PrismaEmployeesRepository,
    },
  ],
})
export class DataBaseModule {}
