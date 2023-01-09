import { randomUUID } from 'crypto';
import { Employee } from 'src/app/entities/Employee';

export class PrismaAndressMapper {
  static toPrisma(andress: Employee, idPessoa: string /*| Patient*/) {
    return {
      id: randomUUID(),
      rua: andress.andress.street,
      bairro: andress.andress.district,
      cidade: andress.andress.city,
      cep: andress.andress.zipCode,
      estado: andress.andress.state,
      pessoaId: idPessoa,
    };
  }
}
