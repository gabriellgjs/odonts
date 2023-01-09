import { Role } from 'src/app/entities/Role';
import { randomUUID } from 'crypto';

export class PrismaRoleMapper {
  static toPrisma(role: Role) {
    return {
      id: randomUUID(),
      nome: role.name,
    };
  }
}
