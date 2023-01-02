import { Telephone } from '../Telephone';

describe('Entitie Telephone', () => {
  it('should be able to create a entitie telephone', () => {
    const telephone = new Telephone('00123456789');
    expect(telephone).toBeTruthy();
  });

  it('should not be able to create a entitie telephone with less than 10 characters', () => {
    expect(() => new Telephone('123456789')).toThrow();
  });

  it('should not be able to create a entitie telephone with less than 15 characters', () => {
    expect(() => new Telephone('01234567890123456')).toThrow();
  });
});
