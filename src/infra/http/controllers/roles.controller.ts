import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FindOneRole } from 'src/app/use-cases/find-one-role';
import { RegisterRole } from 'src/app/use-cases/register-role';
import { CreateRoleBody } from '../dtos/create-role-body';
import { RoleViewModel } from '../view-models/role-view-model';

@Controller('roles')
export class RolesController {
  constructor(
    private registerRole: RegisterRole,
    private findOneRole: FindOneRole,
  ) {}

  @Post()
  async create(@Body() body: CreateRoleBody) {
    const { name } = body;

    const { role } = await this.registerRole.execute({ name });
    return {
      role: RoleViewModel.toHTTP(role),
    };
  }

  @Get(':name')
  async findOne(@Param() params) {
    const { name } = params;

    const { role } = await this.findOneRole.execute({ name });
    return {
      role,
    };
  }
}
