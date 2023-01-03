import { Injectable } from '@nestjs/common/decorators';
import { Role } from '../entities/Role';
import { RolesRepository } from '../repositories/roles-repository';

export interface RoleRequest {
  name: string;
}

export interface RoleResponse {
  role: Role;
}

@Injectable()
export class RegisterRole {
  constructor(private rolesRepository: RolesRepository) {}

  async execute(request: RoleRequest): Promise<RoleResponse> {
    const { name } = request;

    const role = new Role(name);

    await this.rolesRepository.create(role);

    return {
      role,
    };
  }
}
