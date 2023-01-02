import { Andress } from '../Andress';

describe('Entitie Andress', () => {
  it('should be able to create a entitie andress', () => {
    const andress = new Andress({
      street: 'rua',
      district: 'bairro',
      city: 'sao paulo',
      zipCode: 'sao paulo',
      state: 'sao paulo',
    });
    expect(andress).toBeTruthy();
  });
});
