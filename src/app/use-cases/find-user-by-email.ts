import { Injectable } from '@nestjs/common';
import { UserProps } from '../entities/User';
import { UsersRepository } from '../repositories/users-repository';

export interface FindUserByEmailRequest {
  email: string;
}

export interface FindUserByEmailResponse {
  user: UserProps;
}

@Injectable()
export class FindUserByEmail {
  constructor(private usersRepository: UsersRepository) {}

  async execute(
    request: FindUserByEmailRequest,
  ): Promise<FindUserByEmailResponse> {
    const { email } = request;

    const user = await this.usersRepository.findByEmail(email);
    return {
      user,
    };
  }
}
