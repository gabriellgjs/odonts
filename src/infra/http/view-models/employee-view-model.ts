import { Employee } from 'src/app/entities/Employee';

export class EmployeeViewModel {
  static toHTTP(employee: Employee) {
    return {
      name: employee.name,
      birthDate: employee.birthDate,
      rg: employee.rg,
      cpf: employee.cpf,
      gender: employee.gender,
      street: employee.andress.street,
      district: employee.andress.district,
      city: employee.andress.city,
      zipCode: employee.andress.zipCode,
      state: employee.andress.state,
      telephone: employee.telephone.value,
      admissionDate: employee.admissionDate,
      role: employee.role.name,
      email: employee.user.email,
    };
  }
}
