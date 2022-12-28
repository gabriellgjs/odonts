import { HealthPlan } from '../HealthPlan';
import { Patient } from '../Patient';

describe('Patient', () => {
  it('should be able to create a patient with a health plan', () => {
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

    expect(patient).toBeTruthy();
  });

  it('should be able to create a patient without a health plan', () => {
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
    });

    expect(patient).toBeTruthy();
  });
});
