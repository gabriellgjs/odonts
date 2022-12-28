export interface TreatmentProps {
  name: string;
  expected_duration: number;
}

export class Treatment {
  private props: TreatmentProps;

  constructor(props: TreatmentProps) {
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
