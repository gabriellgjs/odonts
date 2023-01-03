import { Role } from 'src/app/entities/Role';

export class RoleViewModel {
  static toHTTP(role: Role) {
    return {
      name: role.value,
    };
  }
}
