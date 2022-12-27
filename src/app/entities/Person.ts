export interface PersonProps {
  status: string;
  name: string;
  birthDate: Date;
  rg: string;
  cpf: string;
  street: string;
  district: string;
  city: string;
  zipCode: string;
  state: string;
  telephone: string;
  phoneMessage: string;
  gender: string;
}

export class Person {
  protected props: PersonProps;

  get status(): string {
    return this.props.status;
  }

  set status(status: string) {
    this.props.status = status;
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get birthDate(): Date {
    return this.props.birthDate;
  }

  set birthDate(date: Date) {
    this.props.birthDate = date;
  }

  get rg(): string {
    return this.props.rg;
  }

  set rg(rg: string) {
    this.props.rg = rg;
  }

  get cpf(): string {
    return this.props.cpf;
  }

  set cpf(cpf: string) {
    this.props.cpf = cpf;
  }

  get street(): string {
    return this.props.street;
  }

  set street(street: string) {
    this.props.street = street;
  }

  get district(): string {
    return this.props.district;
  }

  set district(distritc: string) {
    this.props.district = distritc;
  }

  get city(): string {
    return this.props.city;
  }

  set city(city: string) {
    this.props.city = city;
  }

  get zipCode(): string {
    return this.props.zipCode;
  }

  set zipCode(zipCode: string) {
    this.props.zipCode;
  }

  get state(): string {
    return this.props.state;
  }

  set state(state: string) {
    this.props.state = state;
  }

  get telephone(): string {
    return this.props.telephone;
  }

  set telephone(telephone: string) {
    this.props.telephone = telephone;
  }

  get phoneMessage(): string {
    return this.props.phoneMessage;
  }

  set phoneMessage(phoneMessage: string) {
    this.props.phoneMessage = phoneMessage;
  }

  get gender(): string {
    return this.props.gender;
  }

  set gender(gender: string) {
    this.props.gender = gender;
  }
}
