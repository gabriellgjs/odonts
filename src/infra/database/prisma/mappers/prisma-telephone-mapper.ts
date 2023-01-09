import { randomUUID } from 'crypto';
import { Employee } from 'src/app/entities/Employee';

export class PrismaTelephoneMapper {
  static toPrisma(telephone: Employee, pessoaId /*| Patient*/) {
    return {
      id: randomUUID(),
      telefone: telephone.telephone.value,
      pessoaId: pessoaId,
    };
  }
}
