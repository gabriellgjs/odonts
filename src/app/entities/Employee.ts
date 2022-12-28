import { Person, PersonProps } from './Person';

export interface EmployeeProps extends PersonProps {
  email: string;
  passoword: string;
  admissionDate: Date;
  shutdownDate?: Date | null;
}

export class Employee extends Person {
  protected props: EmployeeProps;

  constructor(props: EmployeeProps) {
    super();
    this.props = {
      ...props,
    };
  }

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set passoword(passoword: string) {
    this.props.passoword = passoword;
  }

  get admissionDate(): Date {
    return this.props.admissionDate;
  }

  set admissionDate(date: Date) {
    this.props.admissionDate = date;
  }

  get shutdownDate(): Date | null {
    return this.props.shutdownDate;
  }

  set shutdownDate(date: Date | null) {
    this.props.shutdownDate = date;
  }
}
