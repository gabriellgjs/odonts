import { Injectable } from '@nestjs/common';
import { Role } from 'src/app/entities/Role';
import { RolesRepository } from 'src/app/repositories/roles-repository';
import { PrismaRoleMapper } from '../mappers/prisma-role-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRolesRepository implements RolesRepository {
  constructor(private prismaService: PrismaService) {}

  async create(_role: Role): Promise<void> {
    const role = PrismaRoleMapper.toPrisma(_role);

    const createdRole = await this.prismaService.cargos.create({
      data: role,
    });

    console.log('oi', createdRole);
  }
}
