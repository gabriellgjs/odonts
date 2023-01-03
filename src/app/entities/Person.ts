import { Andress } from './Andress';
import { Telephone } from './Telephone';

export interface PersonProps {
  id: string;
  name: string;
  birthDate: Date;
  rg: string;
  cpf: string;
  telephone: Telephone;
  andress: Andress;
  gender: string;
}

export abstract class Person {
  protected props: PersonProps;

  get id(): string {
    return this.props.id;
  }

  set id(id: string) {
    this.props.id = id;
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

  get telephone(): Telephone {
    return this.props.telephone;
  }

  set telephone(telephone: Telephone) {
    this.props.telephone = telephone;
  }

  get andress(): Andress {
    return this.props.andress;
  }

  set andress(andress: Andress) {
    this.props.andress = andress;
  }
  get gender(): string {
    return this.props.gender;
  }

  set gender(gender: string) {
    this.props.gender = gender;
  }
}
