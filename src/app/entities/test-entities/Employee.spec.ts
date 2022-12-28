import { Employee } from '../Employee';

describe('Employee', () => {
  it('should be able to create an Employee without a termination date', () => {
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

    expect(employee).toBeTruthy();
  });

  it('should be able to create an Employee with termination date', () => {
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
      shutdownDate: new Date(),
    });

    expect(employee).toBeTruthy();
  });
});
