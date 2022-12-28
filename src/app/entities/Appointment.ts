import { Employee } from './Employee';
import { Patient } from './Patient';
import { Service } from './Service';

export interface AppointmentProps {
  employee: Employee;
  patient: Patient;
  service: Service;
  createdAt: Date;
  scheduledAt: Date;
}

export class Appointment {
  private props: AppointmentProps;

  constructor(props: AppointmentProps) {
    this.props = {
      ...props,
    };
  }

  get employee(): Employee {
    return this.props.employee;
  }

  set employee(employee: Employee) {
    this.props.employee = employee;
  }

  get patient(): Patient {
    return this.props.patient;
  }

  set patient(patient: Patient) {
    this.props.patient = patient;
  }

  get service(): Service {
    return this.props.service;
  }

  set service(service: Service) {
    this.props.service = service;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  set createdAt(createdAt: Date) {
    this.props.createdAt = createdAt;
  }

  get scheduledAt(): Date {
    return this.props.scheduledAt;
  }

  set scheduledAt(scheduledAt: Date) {
    this.props.scheduledAt = scheduledAt;
  }
}
