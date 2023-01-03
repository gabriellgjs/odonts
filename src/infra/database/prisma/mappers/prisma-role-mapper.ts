import { Role } from 'src/app/entities/Role';

export class PrismaRoleMapper {
  static toPrisma(role: Role) {
    return {
      nome: role.value,
    };
  }
}
