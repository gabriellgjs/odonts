import { Employee } from 'src/app/entities/Employee';

export class PrismaEmployeeMapper {
  static toPrisma(employee: Employee) {
    return {
      status: employee.status,
      name: employee.name,
      birthDate: employee.birthDate,
      rg: employee.rg,
      cpf: employee.cpf,
      street: employee.street,
      district: employee.district,
      city: employee.city,
      zipCode: employee.zipCode,
      state: employee.state,
      telephone: employee.telephone,
      phoneMessage: employee.phoneMessage,
      gender: employee.gender,
      email: employee.email,
      passoword: employee.passoword,
      admissionDate: employee.admissionDate,
      position: employee.position,
    };
  }
}
