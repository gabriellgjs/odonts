import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { UserProps } from 'src/app/entities/User';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): UserProps => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);
