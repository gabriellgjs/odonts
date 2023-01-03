import { Employee } from 'src/app/entities/Employee';

export class PrismaTelephoneMapper {
  static toPrisma(telephone: Employee /*| Patient*/) {
    return {
      telephone: telephone.telephone.value,
    };
  }
}
