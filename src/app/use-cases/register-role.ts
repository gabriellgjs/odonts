import { Injectable } from '@nestjs/common/decorators';
import { Role } from '../entities/Role';
import { RolesRepository } from '../repositories/roles-repository';

export interface RoleRequest {
  id?: string;
  name: string;
}

export interface RoleResponse {
  role: Role;
}

@Injectable()
export class RegisterRole {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(request: RoleRequest): Promise<RoleResponse> {
    const { id, name } = request;

    const roleProps = { id, name };

    const role = new Role(roleProps);

    await this.rolesRepository.create(role);

    return {
      role,
    };
  }
}
