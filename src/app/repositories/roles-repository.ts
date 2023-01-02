import { Role } from '../entities/Role';

export abstract class RolesRepository {
  abstract create(role: Role): Promise<void>;
}
