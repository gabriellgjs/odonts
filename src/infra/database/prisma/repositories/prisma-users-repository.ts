import { Injectable } from '@nestjs/common';
import { UserProps } from 'src/app/entities/User';
import { UsersRepository } from 'src/app/repositories/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private prismaService: PrismaService) {}

  async findByEmail(email: string): Promise<UserProps | undefined> {
    const data = await this.prismaService.usuarios.findUnique({
      where: {
        email,
      },
    });

    const user = {
      id: data.id,
      email: data.email,
      funcionarioId: data.funcionarioId,
      password: data.senha,
    };

    return user;
  }
}
