import { HealthPlan } from './HealthPlan';
import { Person, PersonProps } from './Person';

export interface PatientProps extends PersonProps {
  profission: string;
  maritalStatus: string;
  healthPlan?: HealthPlan;
}

export class Patient extends Person {
  protected props: PatientProps;

  constructor(props: PatientProps) {
    super();
    this.props = {
      ...props,
    };
  }

  get profission(): string {
    return this.props.profission;
  }

  set profission(profission: string) {
    this.props.profission = profission;
  }

  get maritalStatus(): string {
    return this.props.maritalStatus;
  }

  set maritalStatus(maritalStatus: string) {
    this.props.maritalStatus = maritalStatus;
  }

  get healthPlan(): HealthPlan {
    return this.props.healthPlan;
  }
}
