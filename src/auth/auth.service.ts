import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/app/repositories/users-repository';

@Injectable()
export class AuthService {
  constructor(private readonly prismaUsers: UsersRepository) {}

  validateUser(email: string, password: string) {
    return 'hi';
  }
}
