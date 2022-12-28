import { Person, PersonProps } from './Person';

export interface DentistProps extends PersonProps {
  specialist: string;
  email: string;
  passoword: string;
  admissionDate: Date;
  shutdownDate: Date;
}

export class Dentist extends Person {
  protected props: DentistProps;

  constructor(props: DentistProps) {
    super();
    this.props = {
      ...props,
    };
  }

  get specialist(): string {
    return this.props.specialist;
  }

  set specialist(specialist: string) {
    this.props.specialist = specialist;
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
