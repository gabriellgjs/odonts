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

    await this.prismaService.cargos.create({
      data: role,
    });
  }

  async findOneRole(
    name: string,
  ): Promise<{ id: string; name: string | null }> {
    const RoleFinding = await this.prismaService.cargos.findFirst({
      where: {
        nome: name,
      },
    });

    if (!RoleFinding) {
      return null;
    }

    const role = {
      id: RoleFinding.id,
      name: RoleFinding.nome,
    };

    return role;
  }
}
