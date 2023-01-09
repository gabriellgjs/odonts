import { Employee } from 'src/app/entities/Employee';
import { randomUUID } from 'crypto';

export class PrismaPersonMapper {
  static toPrisma(person: Employee /*| Patient*/) {
    return {
      id: randomUUID(),
      nome: person.name,
      dataNascimento: new Date().toISOString(),
      rg: person.rg,
      cpf: person.cpf,
      genero: person.gender,
    };
  }
}
