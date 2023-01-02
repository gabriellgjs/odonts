interface UserProps {
  email: string;
  passoword: string;
}
export class User {
  private props: UserProps;

  get email(): string {
    return this.props.email;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set passoword(passoword: string) {
    this.props.passoword = passoword;
  }
}
