import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserProps } from 'src/app/entities/User';
import { RegisterEmployee } from 'src/app/use-cases/register-employee';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { CreateEmployeeBody } from '../dtos/create-employee-body';
import { EmployeeViewModel } from '../view-models/employee-view-model';

@Controller('employees')
export class EmployeesController {
  constructor(private registerEmployee: RegisterEmployee) {}

  @Post()
  async create(@Body() body: CreateEmployeeBody) {
    const {
      name,
      birthDate,
      rg,
      cpf,
      gender,
      street,
      district,
      city,
      zipCode,
      state,
      telephone,
      admissionDate,
      role,
      email,
      password,
    } = body;

    const { employee } = await this.registerEmployee.execute({
      name,
      birthDate,
      rg,
      cpf,
      gender,
      street,
      district,
      city,
      zipCode,
      state,
      telephone,
      admissionDate,
      role: role.name,
      email,
      password,
    });

    return {
      employee: EmployeeViewModel.toHTTP(employee),
    };
  }
}
