import { Injectable } from '@nestjs/common';
import { Andress } from '../entities/Andress';
import { Employee } from '../entities/Employee';
import { Role } from '../entities/Role';
import { Telephone } from '../entities/Telephone';
import { User } from '../entities/User';
import { EmployeesRepository } from '../repositories/employees-repository';

interface RegisterEmployeeRequest {
  status: string;
  name: string;
  birthDate: Date;
  rg: string;
  cpf: string;
  telephone: string;
  street: string;
  district: string;
  city: string;
  zipCode: string;
  state: string;
  gender: string;
  email: string;
  passoword: string;
  role: string;
  admissionDate: Date;
  shutdownDate?: Date | null;
}

interface RegisterEmployeeResponse {
  employee: Employee;
}

@Injectable()
export class RegisterEmployee {
  constructor(readonly employeesRepository: EmployeesRepository) {}

  async execute(
    request: RegisterEmployeeRequest,
  ): Promise<RegisterEmployeeResponse> {
    const {
      status,
      name,
      birthDate,
      rg,
      cpf,
      telephone,
      street,
      district,
      city,
      zipCode,
      state,
      gender,
      email,
      passoword,
      role,
      admissionDate,
      shutdownDate,
    } = request;

    const employee = new Employee({
      status,
      name,
      birthDate,
      rg,
      cpf,
      telephone: new Telephone(telephone),
      andress: new Andress({
        street,
        district,
        city,
        zipCode,
        state,
      }),
      gender,
      user: new User({
        email,
        passoword,
      }),
      role: new Role(role),
      admissionDate,
      shutdownDate,
    });

    await this.employeesRepository.create(employee);

    return {
      employee,
    };
  }
}
