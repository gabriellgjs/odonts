import { Body, Controller, Post } from '@nestjs/common';
import { RegisterEmployee } from 'src/app/use-cases/register-employee';
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
      passoword,
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
      passoword,
    });

    return {
      employee: EmployeeViewModel.toHTTP(employee),
    };
  }
}
