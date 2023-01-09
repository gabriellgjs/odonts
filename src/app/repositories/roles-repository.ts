import { Role, RoleProps } from '../entities/Role';

export abstract class RolesRepository {
  abstract create(role: Role): Promise<void>;
  abstract findOneRole(
    name: string,
  ): Promise<{ id: string; name: string } | null>;
}
