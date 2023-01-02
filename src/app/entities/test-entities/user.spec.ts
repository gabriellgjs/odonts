import { User } from '../User';

describe('Entitie User', () => {
  it('should be able to create a entitie user', () => {
    const user = new User({
      email: 'teste@gmail.com',
      passoword: '123456',
    });
    expect(user).toBeTruthy();
  });

  it('should be able to create a entitie user with less than 6 characters', () => {
    expect(
      () =>
        new User({
          email: 'teste@gmail.com',
          passoword: '12345',
        }),
    ).toThrow();
  });
  it('should be able to create a entitie user with less than 20 characters', () => {
    expect(
      () =>
        new User({
          email: 'teste@gmail.com',
          passoword: '123456789123456789120',
        }),
    ).toThrow();
  });
});
