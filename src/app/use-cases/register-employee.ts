import { Injectable } from '@nestjs/common';
import { Andress } from '../entities/Andress';
import { Employee } from '../entities/Employee';
import { Role } from '../entities/Role';
import { Telephone } from '../entities/Telephone';
import { User } from '../entities/User';
import { EmployeesRepository } from '../repositories/employees-repository';

interface RegisterEmployeeRequest {
  id_employee?: string;
  id_person?: string;
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
  password: string;
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
      id_employee,
      id_person,
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
      password,
      role,
      admissionDate,
      shutdownDate,
    } = request;

    const employee = new Employee({
      id_employee,
      id_person,
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
        password,
      }),
      role: new Role({ name: role }),
      admissionDate,
      shutdownDate,
    });

    await this.employeesRepository.create(employee);

    return {
      employee,
    };
  }
}
