import { randomUUID } from 'crypto';
import { Employee } from 'src/app/entities/Employee';
import * as bcrypt from 'bcrypt';

export class PrismaUserMapper {
  static async toPrisma(user: Employee, employeeId: string /*| Patient*/) {
    return {
      id: randomUUID(),
      email: user.user.email,
      senha: await bcrypt.hash(user.user.passoword, 10),
      funcionarioId: employeeId,
    };
  }
}
