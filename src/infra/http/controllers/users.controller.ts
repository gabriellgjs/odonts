import { Body, Controller, Post } from '@nestjs/common';
import { FindUserByEmail } from 'src/app/use-cases/find-user-by-email';
import { FindUserByEmailBody } from '../dtos/fynd-user-by-email-body';

@Controller('users')
export class UsersController {
  constructor(private readonly findUserByEmail: FindUserByEmail) {}

  @Post()
  async create(@Body() body: FindUserByEmailBody) {
    const { email } = body;

    const { user } = await this.findUserByEmail.execute({ email });
    return {
      ...user,
      passoword: undefined,
    };
  }
}
