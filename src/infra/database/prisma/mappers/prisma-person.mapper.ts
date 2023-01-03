import { Employee } from 'src/app/entities/Employee';

export class PrismaPersonMapper {
  static toPrisma(person: Employee /*| Patient*/) {
    return {
      id: person.id,
      nome: person.name,
      dataNascimento: person.birthDate,
      rg: person.rg,
      cpf: person.cpf,
      genero: person.gender,
    };
  }
}
