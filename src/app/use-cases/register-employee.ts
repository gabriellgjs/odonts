import { Employee } from '../entities/Employee';
import { EmployeesRepository } from '../repositories/employees-repository';

interface RegisterEmployeeRequest {
  status: string;
  name: string;
  birthDate: Date;
  rg: string;
  cpf: string;
  street: string;
  district: string;
  city: string;
  zipCode: string;
  state: string;
  telephone: string;
  phoneMessage: string;
  gender: string;
  email: string;
  passoword: string;
  admissionDate: Date;
  position: string;
}

interface RegisterEmployeeResponse {
  employee: Employee;
}

export class RegisterEmployee {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async execute(
    request: RegisterEmployeeRequest,
  ): Promise<RegisterEmployeeResponse> {
    const employee = new Employee({ ...request });

    await this.employeesRepository.create(employee);

    return {
      employee,
    };
  }
}
