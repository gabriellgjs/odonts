import { Person, PersonProps } from './Person';
import { Role } from './Role';
import { User } from './User';

export interface EmployeeProps extends PersonProps {
  id_employee?: string;
  user: User;
  role: Role;
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

  get id_employee(): string {
    return this.props.id_employee;
  }

  set id_employee(id_employee: string) {
    this.props.id_employee = id_employee;
  }

  get user(): User {
    return this.props.user;
  }

  set user(user: User) {
    this.props.user = user;
  }
  get role(): Role {
    return this.props.role;
  }

  set role(role: Role) {
    this.props.role = role;
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
