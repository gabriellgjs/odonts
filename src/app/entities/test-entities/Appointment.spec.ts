import { Appointment } from '../Appointment';
import { Employee } from '../Employee';
import { HealthPlan } from '../HealthPlan';
import { Patient } from '../Patient';
import { Service } from '../Service';

describe('Appointment', () => {
  it('should be able to create a Appointment', () => {
    const employee = new Employee({
      status: 'P',
      name: 'John Doe',
      birthDate: new Date(),
      rg: '123',
      cpf: '123',
      street: 'rua das ruas',
      district: 'Rock',
      city: 'Sao Paulo',
      zipCode: '123456',
      state: 'Sao Paulo',
      telephone: '11 1234-1234',
      phoneMessage: '11 1234-1234',
      gender: 'Masculino',
      email: 'contats@outlook.com',
      passoword: 'iampassoword',
      admissionDate: new Date(),
    });

    const patient = new Patient({
      status: 'P',
      name: 'John Doe',
      birthDate: new Date(),
      rg: '123',
      cpf: '123',
      street: 'rua das ruas',
      district: 'Rock',
      city: 'Sao Paulo',
      zipCode: '123456',
      state: 'Sao Paulo',
      telephone: '11 1234-1234',
      phoneMessage: '11 1234-1234',
      gender: 'Masculino',
      profission: 'developer',
      maritalStatus: 'single',
      healthPlan: new HealthPlan({
        name: 'Umuprev',
        descripition: 'Your Health Plan',
      }),
    });

    const service = new Service({
      name: 'maintenance',
      expected_duration: 30,
    });

    const createdAt = new Date();

    const scheduledAt = new Date();

    const appointment = new Appointment({
      employee,
      patient,
      service,
      createdAt,
      scheduledAt,
    });

    expect(appointment).toBeTruthy();
  });
});
