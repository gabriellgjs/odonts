interface UserProps {
  email: string;
  passoword: string;
}
export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    const isValidePassoword = this.validatePassoword(props.passoword);
    if (!isValidePassoword) {
      throw new Error('Password is incorrect length');
    }

    this.props = {
      ...props,
    };
  }

  private validatePassoword(passoword: string): boolean {
    return passoword.length >= 6 && passoword.length <= 20;
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
}
