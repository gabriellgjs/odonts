export interface ServiceProps {
  name: string;
  expected_duration: Date;
}

export class Service {
  private props: ServiceProps;

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get expected_duration(): Date {
    return this.props.expected_duration;
  }

  set expected_duration(expected_duration: Date) {
    this.props.expected_duration = expected_duration;
  }
}
