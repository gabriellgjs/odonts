import { UserProps } from '../entities/User';

export abstract class UsersRepository {
  abstract findByEmail(email: string): Promise<UserProps | undefined>;
}
