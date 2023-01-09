import { randomUUID } from 'crypto';
import { Employee } from 'src/app/entities/Employee';

export class PrismaEmployeeMapper {
  static toPrisma(employee: Employee, pessoaId) {
    return {
      id: randomUUID(),
      dataAdmissao: new Date().toISOString(),
      dataDesligamento: employee.shutdownDate,
      cargoId: employee.role.id,
      pessoaId: pessoaId,
    };
  }
}
