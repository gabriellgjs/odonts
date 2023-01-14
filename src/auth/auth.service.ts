import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersRepository } from 'src/app/repositories/users-repository';

@Injectable()
export class AuthService {
  constructor(private readonly prismaUsers: UsersRepository) {}

  async validateUser(email: string, password: string) {
    const user = await this.prismaUsers.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email adress or password provid is incorrect.');
  }
}
