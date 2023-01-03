import { Body, Controller, Post } from '@nestjs/common';
import { RegisterRole } from 'src/app/use-cases/register-role';
import { CreateRoleBody } from '../dtos/create-role-body';
import { RoleViewModel } from '../view-models/role-view-model';

@Controller('roles')
export class RolesController {
  constructor(private registerRole: RegisterRole) {}

  @Post()
  async create(@Body() body: CreateRoleBody) {
    const { name } = body;

    const { role } = await this.registerRole.execute({
      name,
    });
    return {
      role: RoleViewModel.toHTTP(role),
    };
  }
}
