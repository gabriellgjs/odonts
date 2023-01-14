import { Request } from 'express';
import { UserProps } from 'src/app/entities/User';

export interface AuthRequest extends Request {
  user: UserProps;
}
