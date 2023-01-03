import { Employee } from 'src/app/entities/Employee';

export class PrismaEmployeeMapper {
  static toPrisma(employee: Employee) {
    return {
      role: employee.role.value,
      admissionDate: employee.admissionDate,
      shutdownDate: employee.shutdownDate,
    };
  }
}
