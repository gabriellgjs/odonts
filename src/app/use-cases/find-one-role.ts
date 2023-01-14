import { Injectable } from '@nestjs/common';
import { RolesRepository } from '../repositories/roles-repository';

export interface FindOneRoleRequest {
  name: string;
}

export interface FindOneRoleResponse {
  role: { id: string; name: string } | undefined;
}

@Injectable()
export class FindOneRole {
  constructor(private roleRepository: RolesRepository) {}

  async execute(request: FindOneRoleRequest): Promise<FindOneRoleResponse> {
    const { name } = request;

    const role = await this.roleRepository.findOneRole(name);
    console.log(role);
    return {
      role,
    };
  }
}
