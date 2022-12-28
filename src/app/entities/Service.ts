export interface ServiceProps {
  name: string;
  expected_duration: number;
}

export class Service {
  private props: ServiceProps;

  constructor(props: ServiceProps) {
    this.props = {
      ...props,
    };
  }

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }

  get expected_duration(): number {
    return this.props.expected_duration;
  }

  set expected_duration(expected_duration: number) {
    this.props.expected_duration = expected_duration;
  }
}
