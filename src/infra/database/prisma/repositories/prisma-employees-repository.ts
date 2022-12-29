import { Injectable } from '@nestjs/common';
import { Employee } from 'src/app/entities/Employee';
import { EmployeesRepository } from 'src/app/repositories/employees-repository';
import { PrismaService } from '../prisma.service';
import { PrismaEmployeeMapper } from './mappers/prisma-employee-mapper';

@Injectable()
export class PrismaEmployeesRepository implements EmployeesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createEmployee(employee) {
    await this.prismaService.employees.create({
      data: employee,
    });
  }

  async createPerson(_employee: Employee): Promise<void> {
    const employee = PrismaEmployeeMapper.toPrisma(_employee);

    await this.prismaService.persons.create({
      data: employee,
    });

    await this.createEmployee(employee);
  }
}
