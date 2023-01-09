import { randomUUID } from 'crypto';
import { Employee } from 'src/app/entities/Employee';

export class PrismaUserMapper {
  static toPrisma(user: Employee, employeeId: string /*| Patient*/) {
    return {
      id: randomUUID(),
      email: user.user.email,
      senha: user.user.passoword,
      funcionarioId: employeeId,
    };
  }
}
