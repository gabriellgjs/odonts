export interface HealthPlanProps {
  name?: string;
}

export class HealthPlan {
  private props: HealthPlanProps;

  get name(): string {
    return this.props.name;
  }

  set name(name: string) {
    this.props.name = name;
  }
}
