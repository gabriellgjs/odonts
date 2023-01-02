export class Telephone {
  private readonly telephone: string;

  private validateTelephone(telephone: string): boolean {
    return telephone.length >= 10 && telephone.length <= 14;
  }

  get value(): string {
    return this.telephone;
  }

  constructor(telephone: string) {
    const isTelephoneLenght = this.validateTelephone(telephone);

    if (!isTelephoneLenght) {
      throw new Error('Telephone lenght error');
    }

    this.telephone = telephone;
  }
}
