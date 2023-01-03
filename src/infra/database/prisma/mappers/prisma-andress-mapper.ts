import { Employee } from 'src/app/entities/Employee';

export class PrismaAndressMapper {
  static toPrisma(andress: Employee /*| Patient*/) {
    return {
      rua: andress.andress.street,
      bairro: andress.andress.district,
      cidade: andress.andress.city,
      cep: andress.andress.zipCode,
      estado: andress.andress.state,
    };
  }
}
