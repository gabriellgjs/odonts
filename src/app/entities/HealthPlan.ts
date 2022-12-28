export interface HealthPlanProps {
  name: string;
  descripition: string;
}

export class HealthPlan {
  private props: HealthPlanProps;

  constructor(props: HealthPlanProps) {
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

  get descripition(): string {
    return this.props.descripition;
  }

  set descripition(descripition: string) {
    this.props.descripition = descripition;
  }
}
