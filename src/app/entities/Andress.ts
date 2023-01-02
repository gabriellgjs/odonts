interface AndressProps {
  street: string;
  district: string;
  city: string;
  zipCode: string;
  state: string;
}

export class Andress {
  private props: AndressProps;

  constructor(props: AndressProps) {
    this.props = {
      ...props,
    };
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
}
