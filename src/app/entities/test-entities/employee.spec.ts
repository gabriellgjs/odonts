import { Andress } from '../Andress';
import { Employee } from '../Employee';
import { Role } from '../Role';
import { Telephone } from '../Telephone';
import { User } from '../User';

describe('Entitie Employee', () => {
  it('should be able to create a entitie employee', () => {
    const employee = new Employee({
      status: 'on',
      name: 'John Doe',
      birthDate: new Date(),
      rg: '123456789',
      cpf: '123456789',
      telephone: new Telephone('00123456789'),
      andress: new Andress({
        street: 'rua',
        district: 'bairro',
        city: 'sao paulo',
        zipCode: 'sao paulo',
        state: 'sao paulo',
      }),
      gender: 'masculine',
      user: new User({
        email: 'teste@gmail.com',
        passoword: '123456',
      }),
      role: new Role('proprietario'),
      admissionDate: new Date(),
    });
    expect(employee).toBeTruthy();
  });
});
