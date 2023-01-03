import { Employee } from 'src/app/entities/Employee';

export class PrismaUserMapper {
  static toPrisma(user: Employee /*| Patient*/) {
    return {
      email: user.user.email,
      passoword: user.user.passoword,
    };
  }
}
